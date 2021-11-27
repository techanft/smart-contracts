import { Event } from '@ethersproject/contracts';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber, ContractReceipt } from 'ethers';
import { ethers } from 'hardhat';
import { ANFTV2__factory, ListingV2__factory, ANFTV2, ListingV2 } from '../typechain';
import { tokenAmountBN, getCurrentTS } from './v1';

const litingAddrFromListingCreationEvent = (events: Event[] | undefined): string => {
  const ListingCreatedEvent = events?.find(({ event }) => event == 'ListingCreation');
  return ListingCreatedEvent?.args?._listingAddress;
};

interface ICalOwnershipExtension {
  initialOwnership: number;
  instance: ListingV2;
  transferedAmount: BigNumber;
  blockTS: number;
}
const calculateOwnershipExtension = async ({
  initialOwnership,
  instance,
  transferedAmount,
  blockTS,
}: ICalOwnershipExtension) => {
  if (initialOwnership <= blockTS) {
    initialOwnership = blockTS;
  }

  const dailyPayment = await instance.dailyPayment();

  const creditInDays = (await transferedAmount.div(dailyPayment)).toNumber();

  const newOwnership = initialOwnership + creditInDays * 86400;

  return {
    _start: initialOwnership,
    _end: newOwnership,
    _amount: transferedAmount,
  };
};
interface ICalAvlbleToknForWthdrwing {
  currentBlockTS: BigNumber;
  existingOwnership: BigNumber;
  dailyPayment: BigNumber;
}

const calculateAvailableTokenForWithdrawing = ({
  currentBlockTS,
  existingOwnership,
  dailyPayment,
}: ICalAvlbleToknForWthdrwing) => {
  const creditLeftTS = existingOwnership.sub(currentBlockTS);
  const daysLeft = creditLeftTS.div(86400).toNumber();
  const valueToReturn = dailyPayment.mul(daysLeft);
  return valueToReturn;
};

interface ICalSHReward {
  instance: ListingV2;
  optionId: number;
  stakeholder: string;
  blockTS: BigNumber;
  stakeStart: BigNumber;
}

const calculateStakeHolderReward = async ({ instance, optionId, stakeholder, blockTS, stakeStart }: ICalSHReward) => {
  const userStake = await instance.stakings(optionId, stakeholder);
  const optionInfo = await instance.options(optionId);
  const ownership = await instance.ownership();

  const totalStake = await instance.totalStake();
  const dailyPayment = await instance.dailyPayment();
  const listingValue = await instance.value();

  let T = totalStake.mul(100).div(listingValue);

  const T_Threshold = BigNumber.from(86);
  const expiredOwnershipThreshold = BigNumber.from(50);

  if (T.gt(T_Threshold)) {
    T = T_Threshold;
  }

  if (blockTS > ownership && T.gt(expiredOwnershipThreshold)) {
    T = expiredOwnershipThreshold;
  }

  const RTd = dailyPayment.mul(T).div(100);
  const above = RTd.mul(optionInfo._reward.toNumber()).div(100);
  const At = optionInfo._totalStake;
  const Ax = userStake._amount;

  const Ar = above.mul(Ax).div(At);
  const stakedDays = blockTS.sub(stakeStart).div(86400);

  const amountToReturn = Ar.mul(stakedDays);
  return amountToReturn;
};

export const v2 = () => {
  describe('ANFT Token V2', () => {
    let deployer: SignerWithAddress,
      stakingAcc: SignerWithAddress,
      stakeholder1: SignerWithAddress,
      stakeholder2: SignerWithAddress,
      listingOwner1: SignerWithAddress,
      listingOwner2: SignerWithAddress,
      worker1: SignerWithAddress,
      worker2: SignerWithAddress,
      validator: SignerWithAddress,
      validator2: SignerWithAddress;
    let ANFTFactory: ANFTV2__factory;
    let ANFTInstance: ANFTV2;
    let ANFTAddress: string;

    beforeEach(async () => {
      [
        deployer,
        stakingAcc,
        stakeholder1,
        stakeholder2,
        validator,
        validator2,
        listingOwner1,
        listingOwner2,
        worker1,
        worker2,
      ] = await ethers.getSigners();
      ANFTFactory = await ethers.getContractFactory('ANFTV2');
      ANFTInstance = await ANFTFactory.connect(deployer).deploy(stakingAcc.address);
      const deployedData = await ANFTInstance.deployed();
      ANFTAddress = deployedData.address;
      const VALIDATOR = await ANFTInstance.VALIDATOR();
      await ANFTInstance.connect(deployer).grantRole(VALIDATOR, validator.address);
    });

    describe('Deployment', function () {
      it('deployer account has the DEFAULT_ADMIN_ROLE ', async () => {
        const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
        expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
      });
      it('deployer account has the VALIDATOR role', async () => {
        const VALIDATOR = await ANFTInstance.VALIDATOR();
        expect(await ANFTInstance.hasRole(VALIDATOR, deployer.address)).to.be.true;
      });

      it('Token has 18 decimals', async () => {
        expect(await ANFTInstance.decimals()).to.equal(18);
      });

      it('Should set the right staking address', async () => {
        expect(await ANFTInstance.stakingAddress()).to.equal(stakingAcc.address);
      });

      it('Total supply: 1,232,000,000 tokens', async () => {
        const decimals = await ANFTInstance.decimals();
        expect(await ANFTInstance.totalSupply()).to.equal(
          BigNumber.from(1_232_000_000).mul(BigNumber.from(10).pow(decimals))
        );
      });
    });

    describe('Listing', () => {
      let Listing__factory: ListingV2__factory;
      let listingInstance: ListingV2;
      let listingAddress: string;

      let option0Reward: number = 30;
      let listingValue: BigNumber = tokenAmountBN(420_000);
      let dailyPayment: BigNumber = tokenAmountBN(2_000);
      let listingCreationBlock: number;
      const extensionValues = tokenAmountBN(30_000);

      beforeEach(async () => {
        Listing__factory = await ethers.getContractFactory('ListingV2');
        const listingCreationData = await ANFTInstance.connect(validator).createListing(listingOwner1.address);

        const receipt: ContractReceipt = await listingCreationData.wait();
        listingCreationBlock = receipt.blockNumber;

        listingAddress = litingAddrFromListingCreationEvent(receipt.events);
        listingInstance = await Listing__factory.attach(listingAddress);
      });

      beforeEach(async () => {
        await listingInstance.connect(validator).setupOptionReward(0, option0Reward);
        await listingInstance.connect(validator).updateValue(listingValue);
        await listingInstance.connect(validator).updateDailyPayment(dailyPayment);
      });

      beforeEach(async () => {
        await ANFTInstance.transfer(stakeholder1.address, tokenAmountBN(10_000_000));
        await ANFTInstance.transfer(stakeholder2.address, tokenAmountBN(20_000_000));
        await ANFTInstance.transfer(listingOwner1.address, tokenAmountBN(30_000_000));
        await ANFTInstance.transfer(listingOwner2.address, tokenAmountBN(40_000_000));
      });

      it('Only user with the VALIDATOR role can create listing', async () => {
        await expect(ANFTInstance.connect(stakeholder1).createListing(stakeholder1.address)).to.be.revertedWith(
          'ANFTV2: Unauthorized'
        );
        await expect(ANFTInstance.connect(validator).createListing(stakeholder1.address)).to.be.not.reverted;
      });

      it('Owner and only owner is able to update worker state', async () => {
        const workerStatus_1 = await listingInstance.workers(worker1.address);        
        expect(!workerStatus_1);
        await expect(listingInstance.connect(validator).updateWorker(worker1.address)).to.be.revertedWith(
          'Listing: Unauth!'
        );
        await expect(listingInstance.connect(stakeholder1).updateWorker(worker1.address)).to.be.revertedWith(
          'Listing: Unauth!'
        );
        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address)).to.be.not.reverted;
        const workerStatus_2 = await listingInstance.workers(worker1.address);
        expect(workerStatus_2);
      });

      it('An UpdateWorker event is emitted with correct arguments', async () => {
        const workerStatus_1 = await listingInstance.workers(worker1.address);

        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address)).to.emit(
          listingInstance,
          'UpdateWorker'
        ).withArgs(worker1.address, !workerStatus_1);

        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address)).to.emit(
          listingInstance,
          'UpdateWorker'
        ).withArgs(worker1.address, !!workerStatus_1);
      });

      it('Only created Listing can call handleListingTx in token contract', async () => {
        const amount = tokenAmountBN(1_000);
        await expect(
          ANFTInstance.connect(deployer).handleListingTx(deployer.address, amount, false)
        ).to.be.revertedWith('ANFTV2: Invalid Listing');
      });

      it('New listing at deployed address has correct config: Owner, Validator, tokenContract', async () => {
        expect(await listingInstance.validator()).to.equal(validator.address);
        expect(await listingInstance.owner()).to.equal(listingOwner1.address);
        expect(await listingInstance.tokenContract()).to.equal(ANFTAddress);
      });

      it('Listing initial status is active', async () => {
        expect((await ANFTInstance.listingStatus(listingAddress))._isCreated).to.be.true;
        expect((await ANFTInstance.listingStatus(listingAddress))._active).to.be.true;
      });

      it('VALIDATOR and only VALIDATOR role can toggle listing status', async () => {
        const listingStatus_1 = await ANFTInstance.listingStatus(listingAddress);

        await expect(ANFTInstance.connect(stakeholder1).toggleListingStatus(listingAddress)).to.be.revertedWith(
          'ANFTV2: Unauthorized'
        );
        await expect(ANFTInstance.connect(validator).toggleListingStatus(stakeholder1.address)).to.be.revertedWith(
          'ANFTV2: Invalid Listing'
        );

        const listingStatus_2 = await ANFTInstance.listingStatus(listingAddress);

        expect(listingStatus_1._active).equal(listingStatus_2._active);

        await expect(ANFTInstance.connect(validator).toggleListingStatus(listingAddress)).to.be.not.reverted;

        const listingStatus_3 = await ANFTInstance.listingStatus(listingAddress);

        expect(!listingStatus_3._active);
      });

      it('Listing initial ownership is equals to block.timestamp', async () => {
        const creationBlockTimeStamp = (await ethers.provider.getBlock(listingCreationBlock)).timestamp;
        expect(await listingInstance.ownership()).to.equal(creationBlockTimeStamp);
      });

      it('Validator can replace himself', async () => {
        const listingValue_1 = await listingInstance.value();
        const newListingValue = tokenAmountBN(1_000_000);

        const listingValidator_1 = await listingInstance.validator();
        expect(listingValidator_1).equal(validator.address);
        expect(listingValidator_1).not.equal(validator2.address);

        await expect(listingInstance.connect(validator2).updateValue(newListingValue)).to.be.revertedWith(
          'Listing: Unauth!'
        );
        await expect(listingInstance.connect(validator2).updateValidator(validator2.address)).to.be.revertedWith(
          'Listing: Unauth!'
        );
        const listingValue_2 = await listingInstance.value();
        expect(listingValue_2).equal(listingValue_1);

        await expect(listingInstance.connect(validator).updateValidator(validator2.address)).to.be.not.reverted;

        const listingValidator_2 = await listingInstance.validator();
        expect(listingValidator_2).equal(validator2.address);
        await expect(listingInstance.connect(validator2).updateValue(newListingValue)).to.be.not.reverted;

        const listingValue_3 = await listingInstance.value();
        expect(listingValue_3).equal(newListingValue);
      });

      it('Validator and only validator can set these config for listing: Owner, Option Reward, Value, Daily Payment', async () => {
        const firstOption_1 = await listingInstance.options(0);
        const owner_1 = await listingInstance.owner();
        const value_1 = await listingInstance.value();
        const daiyPayment_1 = await listingInstance.dailyPayment();

        const firstOptionRward = 20;
        const newOwner = stakeholder2.address;
        const newListingValue = tokenAmountBN(1000);
        const newDailyPayment = tokenAmountBN(10);

        await expect(listingInstance.connect(stakeholder1).setupOptionReward(0, firstOptionRward)).to.be.revertedWith(
          'Listing: Unauth'
        );
        await expect(listingInstance.connect(stakeholder1).updateOwner(newOwner)).to.be.revertedWith('Listing: Unauth');
        await expect(listingInstance.connect(stakeholder1).updateValue(newListingValue)).to.be.revertedWith(
          'Listing: Unauth'
        );
        await expect(listingInstance.connect(stakeholder1).updateDailyPayment(newDailyPayment)).to.be.revertedWith(
          'Listing: Unauth'
        );

        const firstOption_2 = await listingInstance.options(0);
        const owner_2 = await listingInstance.owner();
        const value_2 = await listingInstance.value();
        const daiyPayment_2 = await listingInstance.dailyPayment();

        expect(firstOption_1._reward).equal(firstOption_2._reward);
        expect(firstOption_2._reward).not.equal(firstOptionRward);
        expect(!firstOption_2._isSet);

        expect(owner_1).equal(owner_2);
        expect(owner_1).not.equal(newOwner);

        expect(value_1).equal(value_2);
        expect(value_1).not.equal(newListingValue);

        expect(daiyPayment_1).equal(daiyPayment_2);
        expect(daiyPayment_1).not.equal(newDailyPayment);

        await listingInstance.connect(validator).setupOptionReward(0, firstOptionRward);

        await listingInstance.connect(validator).updateOwner(newOwner);

        await listingInstance.connect(validator).updateValue(newListingValue);

        await listingInstance.connect(validator).updateDailyPayment(newDailyPayment);

        const firstOption_3 = await listingInstance.options(0);
        const owner_3 = await listingInstance.owner();
        const value_3 = await listingInstance.value();
        const daiyPayment_3 = await listingInstance.dailyPayment();

        expect(firstOption_3._reward).equal(firstOptionRward);
        expect(owner_3).equal(newOwner);
        expect(value_3).equal(newListingValue);
        expect(daiyPayment_3).equal(newDailyPayment);
        expect(firstOption_3._isSet);
      });

      it('Listing Creation event is created with correct arguments', async () => {
        const createListingTx = ANFTInstance.connect(validator).createListing(listingOwner1.address);
        await expect(createListingTx).to.emit(ANFTInstance, 'ListingCreation');

        const receipt: ContractReceipt = await (await createListingTx).wait();
        const address = litingAddrFromListingCreationEvent(receipt.events);

        const { _validator, _owner, _listingAddress } = receipt.events?.find(({ event }) => event === 'ListingCreation')
          ?.args as any;

        expect(_validator).to.equal(validator.address);
        expect(_owner).to.equal(listingOwner1.address);
        expect(_listingAddress).to.equal(address);
      });

      describe('Listing ownership extension', () => {
        it('Owner can extend ownership. Token Contract & Listing Contract states are updated properly', async () => {
          const ownerBal_1 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);

          const rewardPool_1 = await listingInstance.rewardPool();
          const initialOwnership = await listingInstance.ownership();

          const extendOwnershipTx = await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const extendOwnershipReceipt = await extendOwnershipTx.wait();
          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extendOwnershipReceipt.blockNumber))
            .timestamp;

          const ownerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const rewardPool_2 = await listingInstance.rewardPool();

          expect(ownerBal_1).equal(ownerBal_2.add(extensionValues));
          expect(SABal_1).equal(SABal_2.sub(extensionValues));
          expect(rewardPool_1).equal(rewardPool_2.sub(extensionValues));

          const { _end } = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValues,
            blockTS: extendOwnershipBlockTimeStamp,
          });

          const actualOwnership = (await listingInstance.ownership()).toNumber();

          expect(_end).equal(actualOwnership);
        });

        it('Owner cant extend ownership with inactive listing', async () => {
          const ownerBal_1 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const rewardPool_1 = await listingInstance.rewardPool();
          const ownershipValue_1 = await listingInstance.ownership();

          await ANFTInstance.connect(validator).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(listingOwner1).extendOwnership(extensionValues)).to.be.revertedWith(
            'ANFTV2: Inactive Listing'
          );

          const ownerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const rewardPool_2 = await listingInstance.rewardPool();
          const ownershipValue_2 = await listingInstance.ownership();

          expect(ownerBal_1).equal(ownerBal_2);
          expect(SABal_1).equal(SABal_2);
          expect(rewardPool_1).equal(rewardPool_2);
          expect(ownershipValue_1).equal(ownershipValue_2);
        });

        it('An OwnershipExtension event is omitted when user extends ownership', async () => {
          const initialOwnership = await listingInstance.ownership();
          const extensionTx = listingInstance.connect(listingOwner1).extendOwnership(extensionValues);

          await expect(extensionTx).to.emit(listingInstance, 'OwnershipExtension');

          const extendOwnershipReceipt = await (await extensionTx).wait();

          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extendOwnershipReceipt.blockNumber))
            .timestamp;

          const {
            _start: expectedStart,
            _end: expectedEnd,
            _amount: expectedAmount,
          } = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValues,
            blockTS: extendOwnershipBlockTimeStamp,
          });

          const receipt: ContractReceipt = await (await extensionTx).wait();

          const { _prevOwner, _newOwner, _start, _end, _amount } = receipt.events?.find(
            ({ event }) => event === 'OwnershipExtension'
          )?.args as any;

          expect(_prevOwner).to.equal(listingOwner1.address);
          expect(_newOwner).to.equal(listingOwner1.address);
          expect(_start).to.equal(expectedStart);
          expect(_end).to.equal(expectedEnd);
          expect(_amount).to.equal(expectedAmount);

          await expect(extensionTx).to.emit(listingInstance, 'OwnershipExtension');
        });

        it('If the ownership value is in the past, ownership extension is added up on top on current block.timestamp', async () => {
          // Initially ownership value in the past
          const initialOwnership = await listingInstance.ownership();

          const extensionTx = await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const extensionReceipt = await extensionTx.wait();
          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extensionReceipt.blockNumber))
            .timestamp;
          expect(initialOwnership.toNumber() < extendOwnershipBlockTimeStamp);

          const expectedExtenstionValue = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValues,
            blockTS: extendOwnershipBlockTimeStamp,
          });

          const newOwnershipValue = await listingInstance.ownership();

          expect(expectedExtenstionValue._end).equal(newOwnershipValue);
        });

        it('If the ownership value is in the future, ownership extension is added up on top of existing ownership', async () => {
          // Make a transaction first, ensuring the the ownership value is in the future
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues.mul(2));

          const initialOwnership = await listingInstance.ownership();
          const extensionValue_2 = tokenAmountBN(50_000);

          const extensionTx_2 = await listingInstance.connect(listingOwner1).extendOwnership(extensionValue_2);
          const extensionReceipt_2 = await extensionTx_2.wait();
          const extendOwnershipBlockTimeStamp_2 = (await ethers.provider.getBlock(extensionReceipt_2.blockNumber))
            .timestamp;

          // Make sure ownership value has to be in the future
          expect(initialOwnership.toNumber() >= extendOwnershipBlockTimeStamp_2);

          const expectedExtenstionValue_2 = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValue_2,
            blockTS: extendOwnershipBlockTimeStamp_2,
          });

          const newOwnershipValue_2 = await listingInstance.ownership();

          expect(expectedExtenstionValue_2._end).equal(newOwnershipValue_2);
          // phan tich / design / phat trien / test / fix / deploy/ maintain
        });

        it('If the current ownership forfeits (the ownership value is in the past), new user cant extend ownership and become the listing owner', async () => {
          const initialOwner = await listingInstance.owner();
          expect(initialOwner).equal(listingOwner1.address);

          const initalOwnership = await listingInstance.ownership();
          const extensionTx = await listingInstance.connect(listingOwner2).extendOwnership(extensionValues);
          const extensionReceipt = await extensionTx.wait();
          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extensionReceipt.blockNumber))
            .timestamp;
          expect(initalOwnership.toNumber() < extendOwnershipBlockTimeStamp);

          const newOwner = await listingInstance.owner();
          expect(newOwner).not.equal(listingOwner1.address);
          expect(newOwner).equal(listingOwner2.address);
        });

        it('If the current ownership doesnt forfeit (the ownership value is extended into the future), new user cant extend ownership and become listing owner', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const listingOwner_1 = await listingInstance.owner();

          const newExtensionValue = tokenAmountBN(50_000);
          await expect(listingInstance.connect(listingOwner2).extendOwnership(newExtensionValue)).to.be.revertedWith(
            'Listing: Unauth!'
          );

          const listingOwner_2 = await listingInstance.owner();
          expect(listingOwner_2).equal(listingOwner_1);
          expect(listingOwner_2).not.equal(listingOwner2.address);
        });

        it("If the current ownership doesnt forfeit, the validator can't change the owner", async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const listingOwner_1 = await listingInstance.owner();

          await expect(listingInstance.connect(validator).updateOwner(listingOwner2.address)).to.be.revertedWith(
            'Current owner is still legit'
          );

          const listingOwner_2 = await listingInstance.owner();
          expect(listingOwner_2).equal(listingOwner_1);
        });
      });

      describe('Ownership withdrawal', () => {
        it('Must be the listing owner to withdraw', async () => {
          const listingOwner = await listingInstance.owner();
          expect(listingOwner).equal(listingOwner1.address);
          expect(listingOwner).not.equal(listingOwner2.address);

          await expect(listingInstance.connect(listingOwner2).withdraw()).to.be.revertedWith('Listing: Unauth!');
        });

        it('Ownership value must not be in the past', async () => {
          await expect(listingInstance.connect(listingOwner1).withdraw()).to.be.revertedWith(
            'Listing: Ownership expired!'
          );
        });

        it('Ownership value will be set to current block timestamp', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);

          const withdrawTx = await listingInstance.connect(listingOwner1).withdraw();
          const withdrawReceipt = await withdrawTx.wait();
          const withdrawTS = (await ethers.provider.getBlock(withdrawReceipt.blockNumber)).timestamp;

          const listingOwnershipAfterWithdrawing = await listingInstance.ownership();
          expect(listingOwnershipAfterWithdrawing.toNumber() === withdrawTS);
        });

        it('Value will be transfered back, from Staking Address to Owner', async () => {
          const stakingBal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const listingOwnerBal_1 = await ANFTInstance.balanceOf(listingOwner1.address);

          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const existingOwnership = await listingInstance.ownership();

          const stakingBal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const listingOwnerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);

          expect(stakingBal_1.add(extensionValues)).equal(stakingBal_2);

          expect(listingOwnerBal_1.sub(extensionValues)).equal(listingOwnerBal_2);

          const withdrawTx = await listingInstance.connect(listingOwner1).withdraw();
          const withdrawReceipt = await withdrawTx.wait();
          const withdrawTS = (await ethers.provider.getBlock(withdrawReceipt.blockNumber)).timestamp;

          const dailyPayment = await listingInstance.dailyPayment();

          const expectedTokensToReturn = calculateAvailableTokenForWithdrawing({
            currentBlockTS: BigNumber.from(withdrawTS),
            existingOwnership,
            dailyPayment,
          });

          const stakingBal_3 = await ANFTInstance.balanceOf(stakingAcc.address);
          const listingOwnerBal_3 = await ANFTInstance.balanceOf(listingOwner1.address);

          expect(stakingBal_2.sub(expectedTokensToReturn)).equal(stakingBal_3);

          expect(listingOwnerBal_2.add(expectedTokensToReturn)).equal(listingOwnerBal_3);
        });

        it('rewardPool is updated accordingly when owner extends ownership or withdraw', async () => {
          const rewardPool_1 = await listingInstance.rewardPool();

          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const existingOwnership = await listingInstance.ownership();

          const rewardPool_2 = await listingInstance.rewardPool();

          expect(rewardPool_1.add(extensionValues)).equal(rewardPool_2);

          const withdrawTx = await listingInstance.connect(listingOwner1).withdraw();
          const withdrawReceipt = await withdrawTx.wait();
          const withdrawTS = (await ethers.provider.getBlock(withdrawReceipt.blockNumber)).timestamp;

          const dailyPayment = await listingInstance.dailyPayment();

          const expectedTokensToReturn = calculateAvailableTokenForWithdrawing({
            currentBlockTS: BigNumber.from(withdrawTS),
            existingOwnership,
            dailyPayment,
          });

          const rewardPool_3 = await listingInstance.rewardPool();

          expect(rewardPool_2.sub(expectedTokensToReturn)).equal(rewardPool_3);
        });

        it('Owner cant withdraw with inactive listing', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const rewardPool_1 = await listingInstance.rewardPool();
          const ownership_1 = await listingInstance.ownership();

          await ANFTInstance.connect(deployer).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(listingOwner1).extendOwnership(extensionValues)).to.be.revertedWith(
            'ANFTV2: Inactive Listing'
          );

          await expect(listingInstance.connect(listingOwner1).withdraw()).to.be.revertedWith(
            'ANFTV2: Inactive Listing'
          );

          const rewardPool_2 = await listingInstance.rewardPool();
          const ownership_2 = await listingInstance.ownership();

          expect(rewardPool_1).equal(rewardPool_2);
          expect(ownership_1).equal(ownership_2);
        });
      });

      describe('Users register for staking', () => {
        const registeredAmount = tokenAmountBN(100_000);
        const option0 = 0;

        it("Options are inactive at first, until they're setup by validator", async () => {
          const optionId = 1;
          const optionReward = 40;
          const optionStatus_1 = await listingInstance.options(optionId);
          expect(!optionStatus_1._isSet);
          expect(optionStatus_1._reward).equal(BigNumber.from(0));

          await listingInstance.connect(validator).setupOptionReward(optionId, optionReward);

          const optionStatus_2 = await listingInstance.options(optionId);
          expect(optionStatus_2._isSet);
          expect(optionStatus_2._reward).equal(BigNumber.from(optionReward));
        });

        it('Option reward value can not exceed 100', async () => {
          const optionId = 1;
          const maximumReward = 100;

          await expect(
            listingInstance.connect(validator).setupOptionReward(optionId, maximumReward + 1)
          ).to.be.revertedWith('Listing: Invalid reward value');
        });

        it('User cant register for options which arent setup by validator', async () => {
          const randomOption = 6;

          await expect(
            listingInstance.connect(stakeholder1).register(registeredAmount, randomOption)
          ).to.be.revertedWith('Listing: Option not available');
          await expect(listingInstance.connect(stakeholder1).register(registeredAmount, option0)).to.be.not.reverted;
        });

        it('Staking info is recorded when user register', async () => {
          const stakingRecord_1 = await listingInstance.stakings(option0, stakeholder1.address);
          expect(!stakingRecord_1._active);

          const optionInfo = await listingInstance.options(option0);
          expect(optionInfo._reward.toNumber()).equal(option0Reward);

          const registerTx = await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          const registerReceipt = await registerTx.wait();
          const registerTS = (await ethers.provider.getBlock(registerReceipt.blockNumber)).timestamp;

          const stakingRecord_2 = await listingInstance.stakings(option0, stakeholder1.address);

          expect(stakingRecord_2._amount).equal(registeredAmount);
          expect(stakingRecord_2._start.toNumber()).equal(registerTS);

          expect(stakingRecord_1._active);
        });

        it('Option pool is increased by registered amount', async () => {
          const { _totalStake: totalPoolStake_1 } = await listingInstance.options(option0);
          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          const { _totalStake: totalPoolStake_2 } = await listingInstance.options(option0);
          expect(totalPoolStake_1.add(registeredAmount)).equal(totalPoolStake_2);
          await listingInstance.connect(stakeholder2).register(registeredAmount.mul(2), option0);
          const { _totalStake: totalPoolStake_3 } = await listingInstance.options(option0);
          expect(totalPoolStake_2.add(registeredAmount.mul(2))).equal(totalPoolStake_3);
        });

        it('Listing totalStake is increased by registered amount', async () => {
          const totalStake_1 = await listingInstance.totalStake();
          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          const totalStake_2 = await listingInstance.totalStake();
          expect(totalStake_1.add(registeredAmount)).equal(totalStake_2);
          await listingInstance.connect(stakeholder2).register(registeredAmount.mul(2), option0);
          const totalStake_3 = await listingInstance.totalStake();
          expect(totalStake_2.add(registeredAmount.mul(2))).equal(totalStake_3);
        });

        it('Register event is emitted', async () => {
          const registerPromise = listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          await expect(registerPromise).to.emit(listingInstance, 'Register');

          const receipt = await (await registerPromise).wait();
          const registerTS = (await ethers.provider.getBlock(receipt.blockNumber)).timestamp;

          const { _stakeholder, _amount, _optionId, _start } = receipt.events?.find(({ event }) => event === 'Register')
            ?.args as any;

          expect(_stakeholder).equal(stakeholder1.address);
          expect(_amount).equal(registeredAmount);
          expect(_optionId).equal(BigNumber.from(option0));
          expect(_start).equal(BigNumber.from(registerTS));
        });

        it('Staking amount is added on top of the previous stake', async () => {
          const { _totalStake: poolStake_1 } = await listingInstance.options(option0);

          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          const { _totalStake: poolStake_2 } = await listingInstance.options(option0);
          expect(poolStake_1.add(registeredAmount)).equal(poolStake_2);

          await listingInstance.connect(stakeholder1).register(registeredAmount.mul(2), option0);
          const { _totalStake: poolStake_3 } = await listingInstance.options(option0);
          expect(poolStake_2.add(registeredAmount.mul(2))).equal(poolStake_3);
        });

        it('User cant register for inactive listing', async () => {
          await expect(listingInstance.connect(stakeholder1).register(registeredAmount, option0)).to.be.not.reverted;

          await ANFTInstance.connect(validator).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(stakeholder2).register(registeredAmount, option0)).to.be.revertedWith(
            'Listing: Inactive listing!'
          );
        });
      });

      describe('User unregister for staking', () => {
        const registeredAmount = tokenAmountBN(100_000);
        const option0 = 0;
        beforeEach(async () => {
          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
        });

        it('User must register first', async () => {
          const optionInfo_1 = await listingInstance.options(option0);

          await expect(listingInstance.connect(stakeholder2).unregister(option0)).to.be.revertedWith(
            'Listing: Register first!'
          );

          const optionInfo_2 = await listingInstance.options(option0);

          expect(optionInfo_1._totalStake).equal(optionInfo_2._totalStake);
        });

        it('User Staking properties is reset to 0', async () => {
          const stakingInfo_1 = await listingInstance.stakings(option0, stakeholder1.address);
          expect(stakingInfo_1._active);
          await expect(listingInstance.connect(stakeholder1).unregister(option0)).to.be.not.reverted;

          const stakingInfo_2 = await listingInstance.stakings(option0, stakeholder1.address);
          expect(!stakingInfo_2._active);
          expect(stakingInfo_2._amount).to.equal(0);
          expect(stakingInfo_2._start).to.equal(0);
        });

        it('User cant unregister with inactive listing', async () => {
          await ANFTInstance.connect(validator).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(stakeholder1).unregister(option0)).to.be.revertedWith(
            'Listing: Inactive listing!'
          );
        });

        it("Option's total stake is updated", async () => {
          const opionInfo_1 = await listingInstance.options(option0);
          await listingInstance.connect(stakeholder1).unregister(option0);
          const opionInfo_2 = await listingInstance.options(option0);
          expect(opionInfo_2._totalStake).equal(opionInfo_1._totalStake.sub(registeredAmount));
        });

        it("Listing's total stake is updated", async () => {
          const totalStake_1 = await listingInstance.totalStake();
          await listingInstance.connect(stakeholder1).unregister(option0);
          const totalStake_2 = await listingInstance.totalStake();
          expect(totalStake_2).equal(totalStake_1.sub(registeredAmount));
        });

        it('An Unregister event is emitted', async () => {
          const unregisterTx = listingInstance.connect(stakeholder1).unregister(option0);
          await expect(unregisterTx).to.emit(listingInstance, 'Unregister');

          const receipt = await (await unregisterTx).wait();
          const unregisterTS = (await ethers.provider.getBlock(receipt.blockNumber)).timestamp;

          const { _stakeholder, _at } = receipt.events?.find(({ event }) => event === 'Unregister')?.args as any;

          expect(_stakeholder).equal(stakeholder1.address);

          expect(_at).equal(BigNumber.from(unregisterTS));
        });
      });

      describe('Stakeholder claiming reward', () => {
        const registeredAmount = tokenAmountBN(100_000);
        const ownershipExtension = tokenAmountBN(10_000);
        const option0 = 0;
        let stakeStart: BigNumber;

        beforeEach(async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(ownershipExtension);
          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          const { _start } = await listingInstance.stakings(option0, stakeholder1.address);
          stakeStart = _start;
        });

        beforeEach(async () => {
          await ethers.provider.send('evm_increaseTime', [86400 * 2]);
          await ethers.provider.send('evm_mine', []);
        });

        it('Return expected amount from SA Balance to Stakeholder Balance', async () => {
          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);

          const SHBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);

          const claimTx = await listingInstance.connect(stakeholder1).claimReward(option0);
          const claimReceipt = await claimTx.wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: BigNumber.from(claimTS),
          });

          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);

          expect(SABal_2).equal(SABal_1.sub(expectedReward));
          expect(SHBal_2).equal(SHBal_1.add(expectedReward));
        });

        it('Maximum T is 86% for unforfeited listing', async () => {
          const listingValue_1 = await listingInstance.value();
          const totalStake_1 = await listingInstance.totalStake();

          // Ensure total stake is equal to listing instance
          await listingInstance.connect(stakeholder1).register(listingValue_1.sub(totalStake_1), option0);

          await ethers.provider.send('evm_increaseTime', [86400 * 2]);
          await ethers.provider.send('evm_mine', []);
          const { _start: stakeStart } = await listingInstance.stakings(option0, stakeholder1.address);

          const listingValue_2 = await listingInstance.value();
          const totalStake_2 = await listingInstance.totalStake();

          expect(listingValue_2).equal(totalStake_2);

          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);

          const claimTx = await listingInstance.connect(stakeholder1).claimReward(option0);
          const claimReceipt = await claimTx.wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: BigNumber.from(claimTS),
          });

          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);

          expect(SABal_2).equal(SABal_1.sub(expectedReward));
          expect(SHBal_2).equal(SHBal_1.add(expectedReward));
        });

        it('Maximum T is 50% for forfeited listing', async () => {
          const listingValue_1 = await listingInstance.value();
          const totalStake_1 = await listingInstance.totalStake();

          // Ensure total stake is equal to listing instance
          await listingInstance.connect(stakeholder2).register(listingValue_1.sub(totalStake_1), option0);

          const initialListingTS = await listingInstance.ownership();

          const blockNumBefore = await ethers.provider.getBlockNumber();
          const blockBefore = await ethers.provider.getBlock(blockNumBefore);
          const timestampBefore = blockBefore.timestamp;

          expect(initialListingTS.toNumber() > timestampBefore);

          const timeToIncrease = initialListingTS.toNumber() - timestampBefore;
          await ethers.provider.send('evm_increaseTime', [timeToIncrease + 1]);

          const blockNumAfter = await ethers.provider.getBlockNumber();
          const blockAfter = await ethers.provider.getBlock(blockNumAfter);
          const timestampAfter = blockAfter.timestamp;

          expect(initialListingTS.toNumber() < timestampAfter);

          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);

          const claimTx = await listingInstance.connect(stakeholder1).claimReward(option0);
          const claimReceipt = await claimTx.wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: BigNumber.from(claimTS),
          });

          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);

          expect(SABal_2).equal(SABal_1.sub(expectedReward));
          expect(SHBal_2).equal(SHBal_1.add(expectedReward));
        });

        it('User cant claim reward with inactive listing', async () => {
          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);
          const rewardPool_1 = await listingInstance.rewardPool();

          await ANFTInstance.connect(validator).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(stakeholder1).claimReward(option0)).to.be.revertedWith(
            'ANFTV2: Inactive Listing'
          );

          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);
          const rewardPool_2 = await listingInstance.rewardPool();

          expect(SABal_1).equal(SABal_2);
          expect(SHBal_1).equal(SHBal_2);
          expect(rewardPool_1).equal(rewardPool_2);
        });

        it('Stakeholder balance must have at least registered amount to claim reward', async () => {
          const SHBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);
          const userStake = await listingInstance.stakings(option0, stakeholder1.address);

          const amountToTransferAway = SHBal_1.sub(userStake._amount.sub(BigNumber.from(1)));
          await ANFTInstance.connect(stakeholder1).transfer(stakeholder2.address, amountToTransferAway);

          const SHBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);
          expect(SHBal_2 < userStake._amount);
          await expect(listingInstance.connect(stakeholder1).claimReward(option0)).to.be.revertedWith(
            'Listing: Insufficient balance!'
          );
        });

        it('Reward pool is decreased by reward amount', async () => {
          const rewardPool_1 = await listingInstance.rewardPool();

          const claimTx = await listingInstance.connect(stakeholder1).claimReward(option0);
          const claimReceipt = await claimTx.wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: BigNumber.from(claimTS),
          });

          const rewardPool_2 = await listingInstance.rewardPool();
          expect(rewardPool_2).equal(rewardPool_1.sub(expectedReward));
        });

        it('Staking _start is updated to current block.timestamp', async () => {
          const claimTx = await listingInstance.connect(stakeholder1).claimReward(option0);
          const claimReceipt = await claimTx.wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const { _start: newStart } = await listingInstance.stakings(option0, stakeholder1.address);

          expect(claimTS).not.equal(stakeStart);
          expect(claimTS).equal(newStart);
        });

        it('Cant claim if didnt register', async () => {
          const option1 = 1;
          await expect(listingInstance.connect(stakeholder1).claimReward(option1)).to.be.revertedWith(
            'Listing: Register first!'
          );
        });

        it('A Claim event is emitted', async () => {
          const claimTx = listingInstance.connect(stakeholder1).claimReward(option0);
          await expect(claimTx).to.emit(listingInstance, 'Claim');
          const claimReceipt = await (await claimTx).wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: BigNumber.from(claimTS),
          });

          const { _stakeholder, _reward, _from, _to } = claimReceipt.events?.find(({ event }) => event === 'Claim')
            ?.args as any;

          expect(_to).equal(claimTS);
          expect(_from).equal(stakeStart);
          expect(_reward).equal(expectedReward);
          expect(_stakeholder).equal(stakeholder1.address);
        });
      });
    });
  });
};
