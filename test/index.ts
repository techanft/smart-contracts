import { Event } from '@ethersproject/contracts';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber, ContractReceipt } from 'ethers';
import { ethers } from 'hardhat';
import { ANFTToken, ANFTToken__factory, Listing, Listing__factory } from '../typechain';

const tokenAmountBN = (input: number) => {
  return BigNumber.from(input).mul(BigNumber.from(10).pow(18));
};
const litingAddrFromListingCreatedEvent = (events: Event[] | undefined): string => {
  const ListingCreatedEvent = events?.find(({ event }) => event == 'ListingCreated');
  return ListingCreatedEvent?.args?._listingAddress;
};

const listingIndexFromStakingEvent = (events: Event[] | undefined): number => {
  const StakingEvent = events?.find(({ event }) => event == 'Stake');
  const rawData = StakingEvent?.args?._stakingIndex as BigNumber;
  return rawData.toNumber();
};
const getCurrentTS = () => {
  return Math.round(new Date().getTime() / 1000);
};

const calculateOwnershipExtension = async (instance: Listing, transferedAmount: BigNumber) => {
  const initalOwnership = await instance.ownership();
  const listingValue = await instance.value();
  const listingRetentionRate = (await instance.retentionRate()).toNumber();

  const tokenToPayDaily = listingValue.mul(listingRetentionRate).div(100);
  const creditInDays = transferedAmount.div(tokenToPayDaily);

  return initalOwnership.add(creditInDays.mul(86400));
};

interface IStakingInfo {
  _stakeholder: string;
  _listing: string;
  _start: BigNumber;
  _end: BigNumber;
  _amount: BigNumber;
  _apy: BigNumber;
  _active: boolean;
}

const calculateReward = (stakingInfo: IStakingInfo): BigNumber => {
  const { _end, _start, _amount, _apy } = stakingInfo;
  const stakingDays = _end.sub(_start).div(86400);
  const reward = _amount.mul(_apy).div(100).div(365).mul(stakingDays);
  return reward;
};

describe('ANFT Token', () => {
  let deployer: SignerWithAddress,
    stakingAddr: SignerWithAddress,
    listingOwner: SignerWithAddress,
    stakeholder1: SignerWithAddress,
    stakeholder2: SignerWithAddress,
    validator: SignerWithAddress,
    validator2: SignerWithAddress,
    listingOwner2: SignerWithAddress;
  let ANFTFactory: ANFTToken__factory;
  let ANFTInstance: ANFTToken;
  const listingAPY1: number = 50;
  const listingAPY2: number = 60;
  const minimumStakingPeriod: number = 86400; // Equals to 1 day according to Unix time
  const listingValue: number = 1000;

  beforeEach(async () => {
    [deployer, stakingAddr, listingOwner, stakeholder1, stakeholder2, listingOwner2, validator, validator2] = await ethers.getSigners();
    ANFTFactory = await ethers.getContractFactory('ANFTToken');
    ANFTInstance = await ANFTFactory.connect(deployer).deploy(stakingAddr.address);
    await ANFTInstance.deployed();
  });

  describe('Deployment', function () {
    it('deployer account has the DEFAULT_ADMIN_ROLE ', async () => {
      const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
      // expect(await ANFTInstance.owner()).to.equal(deployer.address);
      expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
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

  describe('Listing', function () {
    let Listing__factory: Listing__factory;
    let listingInstance: Listing;
    let listingAddress: string;

    beforeEach(async () => {
      Listing__factory = await ethers.getContractFactory('Listing');
      const listingCreationData = await ANFTInstance.createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );
      const receipt: ContractReceipt = await listingCreationData.wait();

      listingAddress = litingAddrFromListingCreatedEvent(receipt.events);

      listingInstance = await Listing__factory.attach(listingAddress);
    });

    it("New listing's owner is the defined owner", async () => {
      expect(await listingInstance.owner()).to.equal(listingOwner.address);
    });

    it("New listing's value is the defined value", async () => {
      expect(await listingInstance.value()).to.equal(tokenAmountBN(listingValue));
    });

    it('New listing has apy & minimum configuration', async () => {
      const { _apy, _minimum } = await ANFTInstance.listingPrograms(listingAddress);
      expect(_apy.toNumber()).to.equal(listingAPY1);
      expect(_minimum.toNumber()).to.equal(minimumStakingPeriod);
    });

    it('Emit a ListingCreated event upon listing creation', async () => {
      const createListingTx = ANFTInstance.connect(deployer).createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );
      await expect(createListingTx).to.emit(ANFTInstance, 'ListingCreated');

      const receipt: ContractReceipt = await (await createListingTx).wait();
      const address = litingAddrFromListingCreatedEvent(receipt.events);

      const { _validator, _owner, _value, _listingAddress } = receipt.events?.find(
        ({ event }) => event === 'ListingCreated'
      )?.args as any;

      expect(_validator).to.equal(deployer.address);
      expect(_owner).to.equal(listingOwner.address);
      expect(_value).to.equal(tokenAmountBN(listingValue));
      expect(_listingAddress).to.equal(address);
    });

    it('Only deployer or authorized validator is able to create listing', async () => {

      const firstTx = ANFTInstance.connect(validator).createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );

      await expect(firstTx).to.be.revertedWith('Unauthorized');

      const validatorRole = await ANFTInstance.VALIDATOR_ROLE();

      await ANFTInstance.connect(deployer).grantRole(validatorRole, validator.address);

      const secondTx = ANFTInstance.connect(validator).createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );

      await expect(secondTx).to.emit(ANFTInstance, 'ListingCreated');

    });

    it('Listing validator is the token deployer', async () => {
      expect(await listingInstance.validator()).to.equal(deployer.address);
    });

    it('Validator can and only validator can update listing value, owner, rententionRate', async () => {
      expect(await listingInstance.owner()).equals(listingOwner.address);

      await listingInstance.connect(deployer).updateOwner(listingOwner2.address);

      expect(await listingInstance.owner()).equals(listingOwner2.address);

      const initialRetentionRate = 1;
      expect(await listingInstance.retentionRate()).equals(BigNumber.from(initialRetentionRate));

      const newRetentionRate = 10;
      await listingInstance.connect(deployer).updateRetenionRate(newRetentionRate);
      expect(await listingInstance.retentionRate()).equals(BigNumber.from(newRetentionRate));

      expect((await listingInstance.value()).eq(listingValue));
      await listingInstance.connect(deployer).updateValue(listingValue * 2);
      expect((await listingInstance.value()).eq(listingValue * 2));

      await expect(listingInstance.connect(stakeholder1).updateOwner(stakeholder1.address)).to.be.revertedWith(
        'Unauthorized'
      );
      await expect(listingInstance.connect(stakeholder1).updateRetenionRate(initialRetentionRate)).to.be.revertedWith(
        'Unauthorized'
      );
      await expect(listingInstance.connect(stakeholder1).updateRetenionRate(listingValue * 3)).to.be.revertedWith(
        'Unauthorized'
      );
    });

    it('Validator can and only validator can update validator state', async () => {
      expect(await listingInstance.validator()).equals(deployer.address);

      await listingInstance.connect(deployer).updateValidator(validator.address);

      await expect(listingInstance.connect(deployer).updateValidator(validator.address)).to.be.revertedWith("Unauthorized");

      await listingInstance.connect(validator).updateValidator(validator2.address);

      expect(await listingInstance.validator()).equals(validator2.address);
    })

    it('Owner can extend ownership of a listing', async () => {
      const initAmount = tokenAmountBN(10_000);
      await ANFTInstance.connect(deployer).transfer(stakeholder1.address, initAmount);

      const userBalance_1 = await ANFTInstance.balanceOf(stakeholder1.address);
      const deployerAccount_1 = await ANFTInstance.balanceOf(deployer.address);

      const amountToTransfer = tokenAmountBN(1_000);

      const expectedOwnershipAfterExtending = await calculateOwnershipExtension(listingInstance, amountToTransfer);

      await expect(
        ANFTInstance.connect(stakeholder1).extendListingOwnership(initAmount.add(1), listingAddress)
      ).to.be.revertedWith('ERC20: transfer amount exceeds balance');

      await ANFTInstance.connect(stakeholder1).extendListingOwnership(amountToTransfer, listingAddress);

      expect(await listingInstance.ownership()).equals(expectedOwnershipAfterExtending);

      const userBalance_2 = await ANFTInstance.balanceOf(stakeholder1.address);
      const deployerAccount_2 = await ANFTInstance.balanceOf(deployer.address);
      expect(userBalance_2.eq(userBalance_1.add(amountToTransfer)));
      expect(deployerAccount_2.eq(deployerAccount_1.sub(amountToTransfer)));
    });

    it('Ownership Extension can only be triggered by calling extendListingOwnership from token contract', async () => {
      await expect(listingInstance.connect(stakeholder1).extendOwnership(tokenAmountBN(10_000))).to.be.revertedWith(
        'Unauthorized!'
      );
    });
  });

  describe('Access Control', () => {
    it('Deployer has 2 roles: VALIDATOR and DEFAULT_ADMIN_ROLE', async () => {
      const VALIDATOR = await ANFTInstance.VALIDATOR_ROLE();
      const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
      expect(await ANFTInstance.hasRole(VALIDATOR, deployer.address)).to.be.true;
      expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
    });
  })
  
  describe('Staking', function () {
    let listingAddress1: string;
    let listingAddress2: string;

    beforeEach(async () => {
      await ANFTInstance.transfer(listingOwner.address, tokenAmountBN(10_000_000));
      await ANFTInstance.transfer(stakeholder1.address, tokenAmountBN(20_000_000));
      await ANFTInstance.transfer(stakeholder2.address, tokenAmountBN(30_000_000));
    });

    beforeEach(async () => {
      const listingCreationData = await ANFTInstance.createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );
      const receipt: ContractReceipt = await listingCreationData.wait();

      listingAddress1 = litingAddrFromListingCreatedEvent(receipt.events);
    });

    beforeEach(async () => {
      const listingCreationData = await ANFTInstance.createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod * 3,
        listingAPY2
      );
      const receipt: ContractReceipt = await listingCreationData.wait();

      listingAddress2 = litingAddrFromListingCreatedEvent(receipt.events);
    });

    it('Able to transfer tokens', async () => {
      expect(await ANFTInstance.balanceOf(listingOwner.address)).to.equal(tokenAmountBN(10_000_000));
      expect(await ANFTInstance.balanceOf(stakeholder1.address)).to.equal(tokenAmountBN(20_000_000));
      expect(await ANFTInstance.balanceOf(stakeholder2.address)).to.equal(tokenAmountBN(30_000_000));
    });

    it('User can transfer tokens to become stakeholder for a listing', async () => {
      const SH1Balance_1 = await ANFTInstance.balanceOf(stakeholder1.address);
      const SH2Balance_1 = await ANFTInstance.balanceOf(stakeholder2.address);
      const StakingAddress_1 = await ANFTInstance.balanceOf(stakingAddr.address);
      const listing1PoolState_1 = await ANFTInstance.listingStakingInfo(listingAddress1);

      /*
        1. Stake holder 1 stake for listing 1 (APY: 50%, period = 5 days, amount: 1,000,000 tokens)      
        2. Expected: 
          Stake holder 1's balance minus 1,000,000 tokens
          Staking address add 1,000,000
          _ownerSupply remains unchanged;
          _stakingPool += amount;
          _rewardingPool += calculateReward(firstStakingInfo)
      */

      /* FIRST TRANSACTION */
      const firstStakeTxAmount: number = 1_000_000;
      const firstStakeTx = await ANFTInstance.connect(stakeholder1).stake(
        tokenAmountBN(firstStakeTxAmount),
        listingAddress1,
        getCurrentTS() + minimumStakingPeriod * 5
      );
      const firstStakeReceipt = await firstStakeTx.wait();
      const firstStakingIndex = listingIndexFromStakingEvent(firstStakeReceipt.events);
      const firstStakingInfo = await ANFTInstance.stakings(firstStakingIndex);
      const firstStakingReward = calculateReward(firstStakingInfo);

      const SH1Balance_2 = await ANFTInstance.balanceOf(stakeholder1.address);
      const StakingAddress_2 = await ANFTInstance.balanceOf(stakingAddr.address);
      const listing1PoolState_2 = await ANFTInstance.listingStakingInfo(listingAddress1);

      expect(SH1Balance_2).to.equal(SH1Balance_1.sub(tokenAmountBN(firstStakeTxAmount)));
      expect(StakingAddress_2).to.equal(StakingAddress_1.add(tokenAmountBN(firstStakeTxAmount)));
      expect(listing1PoolState_2._ownerSupply).to.equal(0);
      expect(listing1PoolState_2._stakingPool).to.equal(
        listing1PoolState_1._stakingPool.add(tokenAmountBN(firstStakeTxAmount))
      );
      expect(listing1PoolState_2._rewardingPool).to.equal(listing1PoolState_1._rewardingPool.add(firstStakingReward));

      /* SECOND TRANSACTION */
      const secondStakeTxAmount: number = 2_304_505;
      const secondStakeTx = await ANFTInstance.connect(stakeholder2).stake(
        tokenAmountBN(secondStakeTxAmount),
        listingAddress1,
        getCurrentTS() + minimumStakingPeriod * 10
      );

      const secondStakeReceipt = await secondStakeTx.wait();
      const secondStakingIndex = listingIndexFromStakingEvent(secondStakeReceipt.events);
      const secondStakingInfo = await ANFTInstance.stakings(secondStakingIndex);
      const secondStakingReward = calculateReward(secondStakingInfo);

      const SH2Balance_2 = await ANFTInstance.balanceOf(stakeholder2.address);
      const StakingAddress_3 = await ANFTInstance.balanceOf(stakingAddr.address);
      const listing1PoolState_3 = await ANFTInstance.listingStakingInfo(listingAddress1);

      expect(SH2Balance_2).to.equal(SH2Balance_1.sub(tokenAmountBN(secondStakeTxAmount)));
      expect(StakingAddress_3).to.equal(StakingAddress_2.add(tokenAmountBN(secondStakeTxAmount)));
      expect(listing1PoolState_3._ownerSupply).to.equal(0);
      expect(listing1PoolState_3._stakingPool).to.equal(
        listing1PoolState_2._stakingPool.add(tokenAmountBN(secondStakeTxAmount))
      );
      expect(listing1PoolState_3._rewardingPool).to.equal(listing1PoolState_2._rewardingPool.add(secondStakingReward));
    });

    it('User must stake longer than listing minimum staking time config', async () => {
      const SH1Balance_1 = await ANFTInstance.balanceOf(stakeholder1.address);
      const StakingAddress_1 = await ANFTInstance.balanceOf(stakingAddr.address);
      const listing1PoolState_1 = await ANFTInstance.listingStakingInfo(listingAddress1);

      const firstStakeTxAmount: number = 1_000_000;
      await expect(
        ANFTInstance.connect(stakeholder1).stake(
          tokenAmountBN(firstStakeTxAmount),
          listingAddress1,
          getCurrentTS() + minimumStakingPeriod - 1
        )
      ).revertedWith('Invalid staking period');

      const SH1Balance_2 = await ANFTInstance.balanceOf(stakeholder1.address);
      const StakingAddress_2 = await ANFTInstance.balanceOf(stakingAddr.address);
      const listing1PoolState_2 = await ANFTInstance.listingStakingInfo(listingAddress1);

      expect(SH1Balance_1).equal(SH1Balance_2);
      expect(listing1PoolState_1._ownerSupply).equal(listing1PoolState_2._ownerSupply);
      expect(StakingAddress_1).equal(StakingAddress_2);
      expect(StakingAddress_1).equal(StakingAddress_2);
    });

    it('A staking event is emmited', async () => {
      const initialStakingIndex = await ANFTInstance.stakingIndex();

      const firstStakeTxAmount: number = 1_000_000;
      const firstStakeTx = ANFTInstance.connect(stakeholder1).stake(
        tokenAmountBN(firstStakeTxAmount),
        listingAddress1,
        getCurrentTS() + minimumStakingPeriod * 5
      );
      await expect(firstStakeTx).to.emit(ANFTInstance, 'Stake').withArgs(initialStakingIndex);

      const newStakingIndex = await ANFTInstance.stakingIndex();
      const secondStakeTxAmount: number = 2_000_000;
      const secondStakeTx = ANFTInstance.connect(stakeholder2).stake(
        tokenAmountBN(secondStakeTxAmount),
        listingAddress2,
        getCurrentTS() + minimumStakingPeriod * 10
      );
      await expect(secondStakeTx).to.emit(ANFTInstance, 'Stake').withArgs(newStakingIndex);
    });

    it('Staking info is recorded', async () => {
      const listing1Config = await ANFTInstance.listingPrograms(listingAddress1);

      const initialStakingIndex = await ANFTInstance.stakingIndex();

      const firstStakeTxAmount: number = 1_000_000;

      const firstStakeTx = await ANFTInstance.connect(stakeholder1).stake(
        tokenAmountBN(firstStakeTxAmount),
        listingAddress1,
        getCurrentTS() + minimumStakingPeriod * 5
      );

      // Staking Info starting time is based on block.timestamp
      const stakeBlock = (await firstStakeTx.wait()).blockNumber;
      const stakeBlockTimeStamp = (await ethers.provider.getBlock(stakeBlock)).timestamp;

      const stakingInfo = await ANFTInstance.stakings(initialStakingIndex);

      expect(stakingInfo._stakeholder).equals(stakeholder1.address);
      expect(stakingInfo._listing).equals(listingAddress1);
      expect(stakingInfo._amount).equals(tokenAmountBN(firstStakeTxAmount));
      expect(stakingInfo._apy).equals(listing1Config._apy);
      expect(stakingInfo._listing).equals(listingAddress1);
      expect(stakingInfo._active).equals(true);

      expect(stakingInfo._start).equals(BigNumber.from(stakeBlockTimeStamp));
      // Requested end time (sent from users) is somewhat slower than actual _end time state recorded
      expect(BigNumber.from(stakeBlockTimeStamp + minimumStakingPeriod * 5).sub(stakingInfo._end)).lte(
        BigNumber.from(86400 / 2)
      );
    });

    it('Owner/users is able to contribute to the listing pool', async () => {
      const ownerBalance_1 = await ANFTInstance.balanceOf(listingOwner.address);
      const stakingAddressBal_1 = await ANFTInstance.balanceOf(stakingAddr.address);
      const listing1PoolState_1 = await ANFTInstance.listingStakingInfo(listingAddress1);

      const supplyAmount = 2_000_000;

      await ANFTInstance.connect(listingOwner).supplyRewardPool(tokenAmountBN(supplyAmount), listingAddress1);

      const ownerBalance_2 = await ANFTInstance.balanceOf(listingOwner.address);
      expect(ownerBalance_2).equals(ownerBalance_1.sub(tokenAmountBN(supplyAmount)));

      const stakingAddressBal_2 = await ANFTInstance.balanceOf(stakingAddr.address);
      expect(stakingAddressBal_2).equals(stakingAddressBal_1.add(tokenAmountBN(supplyAmount)));

      const listing1PoolState_2 = await ANFTInstance.listingStakingInfo(listingAddress1);
      expect(listing1PoolState_2._ownerSupply).equals(
        listing1PoolState_1._ownerSupply.add(tokenAmountBN(supplyAmount))
      );
    });
  });

  describe('Reward claiming', () => {
    let listingAddress1: string;
    let listingAddress2: string;
    let stakingIndex1: BigNumber;
    let stakingIndex2: BigNumber;
    const stakeAmount: number = 1000;

    beforeEach(async () => {
      await ANFTInstance.transfer(listingOwner.address, tokenAmountBN(10_000_000));
      await ANFTInstance.transfer(stakeholder1.address, tokenAmountBN(20_000_000));
      await ANFTInstance.transfer(stakeholder2.address, tokenAmountBN(30_000_000));
    });

    beforeEach(async () => {
      const listingCreationData = await ANFTInstance.createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );
      const receipt: ContractReceipt = await listingCreationData.wait();

      listingAddress1 = litingAddrFromListingCreatedEvent(receipt.events);
    });

    beforeEach(async () => {
      const listingCreationData = await ANFTInstance.createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod * 3,
        listingAPY2
      );
      const receipt: ContractReceipt = await listingCreationData.wait();

      listingAddress2 = litingAddrFromListingCreatedEvent(receipt.events);
    });

    beforeEach(async () => {
      stakingIndex1 = await ANFTInstance.stakingIndex();
      await ANFTInstance.connect(stakeholder1).stake(
        tokenAmountBN(stakeAmount),
        listingAddress1,
        getCurrentTS() + minimumStakingPeriod * 5
      );

      stakingIndex2 = await ANFTInstance.stakingIndex();
      await ANFTInstance.connect(stakeholder2).stake(
        tokenAmountBN(stakeAmount * 2.5),
        listingAddress1,
        getCurrentTS() + minimumStakingPeriod * 10
      );
    });

    it('User should be able to claim principle and reward', async () => {
      await ANFTInstance.connect(listingOwner).supplyRewardPool(tokenAmountBN(1_000_000), listingAddress1);

      const SH1_Balance_1 = await ANFTInstance.balanceOf(stakeholder1.address);
      const SH2_Balance_1 = await ANFTInstance.balanceOf(stakeholder2.address);
      const SA_Balance_1 = await ANFTInstance.balanceOf(stakingAddr.address);

      const expectedReward_1 = calculateReward(await ANFTInstance.stakings(stakingIndex1));
      const expectedReward_2 = calculateReward(await ANFTInstance.stakings(stakingIndex2));

      await ANFTInstance.connect(stakeholder1).claimReward(stakingIndex1);
      const expectedTotalReward_1 = expectedReward_1.add(tokenAmountBN(stakeAmount));

      const SH1_Balance_2 = await ANFTInstance.balanceOf(stakeholder1.address);
      expect(SH1_Balance_2).equals(SH1_Balance_1.add(expectedTotalReward_1));

      const SA_Balance_2 = await ANFTInstance.balanceOf(stakingAddr.address);
      expect(SA_Balance_2).equals(SA_Balance_1.sub(expectedReward_1).sub(tokenAmountBN(stakeAmount)));

      await ANFTInstance.connect(stakeholder2).claimReward(stakingIndex2);
      const expectedTotalReward_2 = expectedReward_2.add(tokenAmountBN(stakeAmount * 2.5));

      const SH2_Balance_2 = await ANFTInstance.balanceOf(stakeholder2.address);
      expect(SH2_Balance_2).equals(SH2_Balance_1.add(expectedTotalReward_2));

      const SA_Balance_3 = await ANFTInstance.balanceOf(stakingAddr.address);
      expect(SA_Balance_3).equals(SA_Balance_2.sub(expectedReward_2).sub(tokenAmountBN(stakeAmount * 2.5)));
    });

    it('User cant claim reward if owner doesnt supply reward pool', async () => {
      const SH1_Balance_1 = await ANFTInstance.balanceOf(stakeholder1.address);
      const SA_Balance_1 = await ANFTInstance.balanceOf(stakingAddr.address);

      await expect(ANFTInstance.connect(stakeholder1).claimReward(stakingIndex1)).to.be.revertedWith(
        'Rewarding pool requires more supply!'
      );

      const SH1_Balance_2 = await ANFTInstance.balanceOf(stakeholder1.address);
      const SA_Balance_2 = await ANFTInstance.balanceOf(stakingAddr.address);

      expect(SH1_Balance_1.eq(SH1_Balance_2));
      expect(SA_Balance_1.eq(SA_Balance_2));
    });

    it('Users cant claim inactive stakes or stakes that dont belong to them', async () => {
      await ANFTInstance.connect(listingOwner).supplyRewardPool(tokenAmountBN(1_000_000), listingAddress1);

      await ANFTInstance.connect(stakeholder1).claimReward(stakingIndex1);
      await expect(ANFTInstance.connect(stakeholder1).claimReward(stakingIndex1)).to.be.revertedWith(
        'Staking: Reward claimed'
      );
      await expect(ANFTInstance.connect(stakeholder1).claimReward(stakingIndex2)).to.be.revertedWith(
        'Staking: Unauthorized'
      );
    });

    it('User cant stake more tokens than the amount of tokens they own', async () => {
      await ANFTInstance.connect(listingOwner).supplyRewardPool(tokenAmountBN(1_000_000), listingAddress1);

      const SH1_Balance_1 = await ANFTInstance.balanceOf(stakeholder1.address);

      await expect(
        ANFTInstance.connect(stakeholder1).stake(
          SH1_Balance_1.add(1),
          listingAddress1,
          getCurrentTS() + minimumStakingPeriod * 5
        )
      ).to.be.revertedWith('ERC20: transfer amount exceeds balance');

      const SH1_Balance_2 = await ANFTInstance.balanceOf(stakeholder1.address);
      expect(SH1_Balance_1.eq(SH1_Balance_2));
    });

    it('Listing pool state is updated properly if reward is claimed successfully', async () => {
      await ANFTInstance.connect(listingOwner).supplyRewardPool(tokenAmountBN(1_000_000), listingAddress1);

      const listing1PoolState_1 = await ANFTInstance.listingStakingInfo(listingAddress1);

      const stakeInfo = await ANFTInstance.stakings(stakingIndex1);
      const expectedReward = calculateReward(stakeInfo);

      await ANFTInstance.connect(stakeholder1).claimReward(stakingIndex1);

      const listing1PoolState_2 = await ANFTInstance.listingStakingInfo(listingAddress1);
      expect(listing1PoolState_2._stakingPool.eq(listing1PoolState_1._stakingPool.add(stakeInfo._amount)));
      expect(listing1PoolState_2._rewardingPool.eq(listing1PoolState_1._rewardingPool.add(expectedReward)));
      expect(listing1PoolState_2._ownerSupply.eq(listing1PoolState_1._ownerSupply.add(expectedReward)));
    });
  });
});
