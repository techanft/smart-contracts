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

export const v2 = () => {
  describe('ANFT Token V2', () => {
    let deployer: SignerWithAddress,
      stakingAddr: SignerWithAddress,
      stakeholder1: SignerWithAddress,
      stakeholder2: SignerWithAddress,
      listingOwner1: SignerWithAddress,
      listingOwner2: SignerWithAddress,
      validator: SignerWithAddress;
    let ANFTFactory: ANFTV2__factory;
    let ANFTInstance: ANFTV2;
    let ANFTAddress: string;

    beforeEach(async () => {
      [deployer, stakingAddr, stakeholder1, stakeholder2, validator, listingOwner1, listingOwner2] =
        await ethers.getSigners();
      ANFTFactory = await ethers.getContractFactory('ANFTV2');
      ANFTInstance = await ANFTFactory.connect(deployer).deploy(stakingAddr.address);
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
        expect(await ANFTInstance.stakingAddress()).to.equal(stakingAddr.address);
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

      let option1_reward: number = 30;
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
        await listingInstance.connect(validator).setupOptionReward(0, option1_reward);
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

      it('New listing at deployed address has correct config: Owner, Validator, tokenContract', async () => {
        expect(await listingInstance.validator()).to.equal(validator.address);
        expect(await listingInstance.owner()).to.equal(listingOwner1.address);
        expect(await listingInstance.tokenContract()).to.equal(ANFTAddress);
      });

      it('Listing initial status is active', async () => {
        expect(await ANFTInstance.listingStatus(listingAddress)).to.be.true;
      });

      it('Listing initial ownership is equals to block.timestamp', async () => {
        const creationBlockTimeStamp = (await ethers.provider.getBlock(listingCreationBlock)).timestamp;
        expect(await listingInstance.ownership()).to.equal(creationBlockTimeStamp);
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

        expect(owner_1).equal(owner_2);
        expect(owner_1).not.equal(newOwner);

        expect(value_1.eq(value_2)).to.be.true;
        expect(value_1.eq(newListingValue)).to.be.false;

        expect(daiyPayment_1.eq(daiyPayment_2)).to.be.true;
        expect(daiyPayment_1.eq(newDailyPayment)).to.be.false;

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
        expect(value_3.eq(newListingValue)).to.be.true;
        expect(daiyPayment_3.eq(newDailyPayment)).to.be.true;
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
          const SABal_1 = await ANFTInstance.balanceOf(stakingAddr.address);

          const rewardPool_1 = await listingInstance.rewardPool();

          const initialOwnership = await listingInstance.ownership();

          const extendOwnershipTx = await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const extendOwnershipReceipt = await extendOwnershipTx.wait();
          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extendOwnershipReceipt.blockNumber))
            .timestamp;

          const ownerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_2 = await ANFTInstance.balanceOf(stakingAddr.address);
          const rewardPool_2 = await listingInstance.rewardPool();

          expect(ownerBal_1.eq(ownerBal_2.sub(extensionValues)));
          expect(SABal_1.eq(SABal_2.add(extensionValues)));
          expect(rewardPool_1.eq(rewardPool_2.sub(extensionValues)));

          const { _end } = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValues,
            blockTS: extendOwnershipBlockTimeStamp,
          });

          const actualOwnership = (await listingInstance.ownership()).toNumber();

          expect(_end).equal(actualOwnership);
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

          expect(expectedExtenstionValue._amount.eq(newOwnershipValue));
        });

        it('If the ownership value is in the future, ownership extension is added up on top of existing ownership', async () => {
          // Make a transaction first, ensuring the the ownership value is in the future
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);

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

          expect(expectedExtenstionValue_2._amount.eq(newOwnershipValue_2));
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
          const stakingAddressBal_1 = await ANFTInstance.balanceOf(stakingAddr.address);
          const listingOwnerBal_1 = await ANFTInstance.balanceOf(listingOwner1.address);

          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const existingOwnership = await listingInstance.ownership();

          const stakingAddressBal_2 = await ANFTInstance.balanceOf(stakingAddr.address);
          const listingOwnerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);

          expect(stakingAddressBal_1.add(extensionValues).eq(stakingAddressBal_2));

          expect(listingOwnerBal_1.add(extensionValues).eq(listingOwnerBal_2));

          const withdrawTx = await listingInstance.connect(listingOwner1).withdraw();
          const withdrawReceipt = await withdrawTx.wait();
          const withdrawTS = (await ethers.provider.getBlock(withdrawReceipt.blockNumber)).timestamp;

          const dailyPayment = await listingInstance.dailyPayment();

          const expectedTokensToReturn = calculateAvailableTokenForWithdrawing({
            currentBlockTS: BigNumber.from(withdrawTS),
            existingOwnership,
            dailyPayment,
          });

          const stakingAddressBal_3 = await ANFTInstance.balanceOf(stakingAddr.address);
          const listingOwnerBal_3 = await ANFTInstance.balanceOf(listingOwner1.address);

          expect(stakingAddressBal_2.add(expectedTokensToReturn).eq(stakingAddressBal_3));

          expect(listingOwnerBal_2.add(expectedTokensToReturn).eq(listingOwnerBal_3));
        });

        it('rewardPool is updated accordingly when owner extends ownership or withdraw', async () => {
          const rewardPool_1 = await listingInstance.rewardPool();

          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const existingOwnership = await listingInstance.ownership();

          const rewardPool_2 = await listingInstance.rewardPool();

          expect(rewardPool_1.add(extensionValues).eq(rewardPool_2));

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

          expect(rewardPool_2.add(expectedTokensToReturn).eq(rewardPool_3));
        });

        it('rewardPool is updated accordingly when owner extends ownership or withdraw', async () => {
          const rewardPool_1 = await listingInstance.rewardPool();

          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const existingOwnership = await listingInstance.ownership();

          const rewardPool_2 = await listingInstance.rewardPool();

          expect(rewardPool_1.add(extensionValues).eq(rewardPool_2));

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

          expect(rewardPool_2.add(expectedTokensToReturn).eq(rewardPool_3));
        });
      });

      describe('User registering', () => {
        beforeEach(async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
        });

        it('User can', async () => {
          await listingInstance.connect(validator).setupOptionReward(0, option1_reward);
          await listingInstance.connect(validator).updateValue(listingValue);
          await listingInstance.connect(validator).updateDailyPayment(dailyPayment);
        });
      });
    });
  });
};

// group
// const group1 = ["x", "y", "z"];
const group2 = [1, 2, 3];
const group3 = [10, 21, 30];


// interface IHandler  (arr: number[]) : number

const currying = (arr: number[]) => {
  return function (handler: Function) : number {
    return handler(arr);
  };
};

// const handleGroup2 = currying(group2);

const findMax = (arr: number[]) => {
    return Math.max(...arr)
}
const handleGroup2 = currying(group2);
const group2Max = handleGroup2(findMax);


// const findMaxGroup2
