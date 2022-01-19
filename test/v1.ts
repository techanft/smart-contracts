import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signers';
import { expect } from 'chai';
import { BigNumber, ContractReceipt } from 'ethers';
import { ethers, getNamedAccounts, upgrades } from 'hardhat';
import { Listing, Listing__factory, TestUpgrade, TestUpgrade__factory, Token, Token__factory } from '../typechain';
import {
  calculateAvailableTokenForWithdrawing,
  calculateOwnershipExtension,
  calculateStakeHolderReward,
  calNewOwnershipAfterWithdraw,
  litingAddrFromListingCreationEvent,
  tokenAmountBN,
} from './utils';

export const v1 = () => {
  describe('ANFT Token', () => {
    let deployer: SignerWithAddress,
      stakingAcc: SignerWithAddress,
      stakingAcc2: SignerWithAddress,
      stakeholder1: SignerWithAddress,
      stakeholder2: SignerWithAddress,
      listingOwner1: SignerWithAddress,
      listingOwner2: SignerWithAddress,
      worker1: SignerWithAddress,
      validator: SignerWithAddress,
      validator2: SignerWithAddress,
      reService: SignerWithAddress,
      burner: SignerWithAddress,
      minter: SignerWithAddress;
    let ANFTFactory: Token__factory;
    let ANFTInstance: Token;
    let ANFTAddress: string;

    it('_stakingAddr must not be 0', async () => {
      const zero = ethers.constants.AddressZero;
      await expect(upgrades.deployProxy(ANFTFactory, [zero], { initializer: 'initialize' })).to.be.revertedWith(
        'Token: Invalid _stakingAddr'
      );
    });

    beforeEach(async () => {
      [
        deployer,
        stakingAcc,
        stakingAcc2,
        stakeholder1,
        stakeholder2,
        validator,
        validator2,
        listingOwner1,
        listingOwner2,
        worker1,
        minter,
        burner,
      ] = await ethers.getSigners();

      ANFTFactory = await ethers.getContractFactory('Token');
      ANFTInstance = <Token>(
        await upgrades.deployProxy(ANFTFactory, [stakingAcc.address], { initializer: 'initialize' })
      );

      const deployedData = await ANFTInstance.deployed();
      ANFTAddress = deployedData.address;
      const VALIDATOR = await ANFTInstance.VALIDATOR();

      await ANFTInstance.connect(deployer).grantRole(VALIDATOR, validator.address);
    });

    beforeEach(async () => {
      const { reService: reServiceAddress } = await getNamedAccounts();
      reService = await ethers.getSigner(reServiceAddress);

      const tx = await deployer.sendTransaction({
        to: reService.address,
        value: ethers.utils.parseEther('100'),
      });

      await tx.wait();

      // Transfering all reService's balance to deployer's to proceed test cases
      const reServiceBalance = await ANFTInstance.balanceOf(reService.address);
      await ANFTInstance.connect(reService).transfer(deployer.address, reServiceBalance);
    });

    describe('Deployment', function () {
      it('deployer account has the DEFAULT_ADMIN_ROLE ', async () => {
        const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
        expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
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

      it('Should allocate right amount of token to correct addresses', async () => {
        const PLATFORM_DEVELOPMENT = '0xb3F5E20db0167d4A5B5C5DaAd6f1c76Cc40cC52D';
        const COMMUNITY = '0x6b3887eB6091cC705ffA6E32e22B5524b3A9BEa4';
        const REAL_ESTATE_SERVICE = '0x33aE0695fB3250F0788510B289d26309d4B8f939';
        const ETF = '0xf5d2f60663D83ABf28969F2A5F501178D8D64bAa';
        const REGULATION_FUNDS = '0x9F1660B7184Bde8b8973c6618AC3D7D306e8a796';

        expect(await ANFTInstance.PLATFORM_DEVELOPMENT()).equal(PLATFORM_DEVELOPMENT);
        expect(await ANFTInstance.COMMUNITY()).equal(COMMUNITY);
        expect(await ANFTInstance.REAL_ESTATE_SERVICE()).equal(REAL_ESTATE_SERVICE);
        expect(await ANFTInstance.ETF()).equal(ETF);
        expect(await ANFTInstance.REGULATION_FUNDS()).equal(REGULATION_FUNDS);

        const totalSupply = await ANFTInstance.totalSupply();

        expect(await ANFTInstance.balanceOf(PLATFORM_DEVELOPMENT)).equal(totalSupply.mul(14).div(100));
        expect(await ANFTInstance.balanceOf(COMMUNITY)).equal(totalSupply.mul(34).div(100));

        // We previously transfer all REAL_ESTATE_SERVICE's balance to deployer to proceed test cases
        expect(await ANFTInstance.balanceOf(deployer.address)).equal(totalSupply.mul(32).div(100));

        expect(await ANFTInstance.balanceOf(ETF)).equal(totalSupply.mul(8).div(100));
        expect(await ANFTInstance.balanceOf(REGULATION_FUNDS)).equal(totalSupply.mul(12).div(100));
      });

      it('Address with {DEFAULT_ADMIN_ROLE} is able to grantRole for {MINTER} and {BURNER}', async () => {
        const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
        expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
        expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, listingOwner1.address)).to.be.false;

        const MINTER_ROLE = await ANFTInstance.MINTER();
        const BURNER_ROLE = await ANFTInstance.BURNER();

        expect(await ANFTInstance.hasRole(MINTER_ROLE, stakeholder1.address)).to.be.false;
        expect(await ANFTInstance.hasRole(BURNER_ROLE, stakeholder2.address)).to.be.false;

        await expect(ANFTInstance.connect(listingOwner1).grantRole(MINTER_ROLE, stakeholder1.address)).to.be.reverted;
        await expect(ANFTInstance.connect(listingOwner1).grantRole(BURNER_ROLE, stakeholder2.address)).to.be.reverted;

        await expect(ANFTInstance.connect(deployer).grantRole(MINTER_ROLE, stakeholder1.address)).to.be.not.reverted;
        await expect(ANFTInstance.connect(deployer).grantRole(BURNER_ROLE, stakeholder2.address)).to.be.not.reverted;

        expect(await ANFTInstance.hasRole(MINTER_ROLE, stakeholder1.address)).to.be.true;
        expect(await ANFTInstance.hasRole(BURNER_ROLE, stakeholder2.address)).to.be.true;
      });

      it('Only authorized minter can mint, and balance, totalSupply is updated after minting', async () => {
        const MINTER_ROLE = await ANFTInstance.MINTER();

        const minterBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);
        const totalSupply_1 = await ANFTInstance.totalSupply();
        const mintAmount = tokenAmountBN(1000);

        await expect(ANFTInstance.connect(minter).mint(stakeholder1.address, mintAmount)).to.be.reverted;
        const minterBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);
        const totalSupply_2 = await ANFTInstance.totalSupply();
        expect(minterBal_1).to.equal(minterBal_2);
        expect(totalSupply_1).to.equal(totalSupply_2);

        await expect(ANFTInstance.connect(deployer).grantRole(MINTER_ROLE, minter.address)).to.be.not.reverted;
        await expect(ANFTInstance.connect(minter).mint(stakeholder1.address, mintAmount)).to.be.not.reverted;
        const minterBal_3 = await ANFTInstance.balanceOf(stakeholder1.address);
        const totalSupply_3 = await ANFTInstance.totalSupply();
        expect(minterBal_2).to.equal(minterBal_3.sub(mintAmount));
        expect(totalSupply_2).to.equal(totalSupply_3.sub(mintAmount));
      });

      it('Only authorized burner can burn, and balance, totalSupply is updated after burning', async () => {
        const BURNER_ROLE = await ANFTInstance.BURNER();

        // Make a transfer first, make sure burner has enough token to burn;
        const burnAmount = tokenAmountBN(1000);
        await ANFTInstance.transfer(burner.address, burnAmount);

        const burnerBal_1 = await ANFTInstance.balanceOf(burner.address);
        const totalSupply_1 = await ANFTInstance.totalSupply();

        await expect(ANFTInstance.connect(burner).burn(burnAmount)).to.be.reverted;
        const burnerBal_2 = await ANFTInstance.balanceOf(burner.address);
        const totalSupply_2 = await ANFTInstance.totalSupply();

        expect(burnerBal_1).to.equal(burnerBal_2);
        expect(totalSupply_1).to.equal(totalSupply_2);

        await expect(ANFTInstance.connect(deployer).grantRole(BURNER_ROLE, burner.address)).to.be.not.reverted;
        await expect(ANFTInstance.connect(burner).burn(burnAmount)).to.be.not.reverted;
        const burnerBal_3 = await ANFTInstance.balanceOf(burner.address);
        const totalSupply_3 = await ANFTInstance.totalSupply();
        expect(burnerBal_2).to.equal(burnerBal_3.add(burnAmount));
        expect(totalSupply_2).to.equal(totalSupply_3.add(burnAmount));

        await expect(ANFTInstance.connect(burner).burn(burnAmount)).to.be.revertedWith(
          'ERC20: burn amount exceeds balance'
        );
      });
    });

    describe('Listing', () => {
      let Listing__factory: Listing__factory;
      let listingInstance: Listing;
      let listingAddress: string;

      let option0Reward: number = 30;
      let listingValue: BigNumber = tokenAmountBN(420_000);
      let dailyPayment: BigNumber = tokenAmountBN(2_000);
      let listingCreationBlock: number;
      const extensionValues = tokenAmountBN(31_000);
      const listingId = 1;

      beforeEach(async () => {
        Listing__factory = await ethers.getContractFactory('Listing');

        const listingCreationData = await ANFTInstance.connect(validator).createListing(
          listingOwner1.address,
          listingId
        );

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

      it('Owner address must not be 0', async () => {
        await expect(
          ANFTInstance.connect(validator).createListing(ethers.constants.AddressZero, listingId)
        ).to.be.revertedWith('Token: Invalid _owner');
      });

      it('Only user with the VALIDATOR role can create listing', async () => {
        await expect(
          ANFTInstance.connect(stakeholder1).createListing(stakeholder1.address, listingId)
        ).to.be.revertedWith('Token: Unauthorized');
        await expect(ANFTInstance.connect(validator).createListing(stakeholder1.address, listingId)).to.be.not.reverted;
      });

      it('{DEFAULT_ADMIN_ROLE} is able to set validator for a listing', async () => {
        const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
        expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
        expect(await ANFTInstance.hasRole(DEFAULT_ADMIN_ROLE, validator.address)).to.be.false;

        expect(await listingInstance.validator()).to.equal(validator.address);
        expect(await listingInstance.validator()).to.not.equal(validator2.address);

        await expect(
          ANFTInstance.connect(validator).emergencyUpdateListingValidator(listingInstance.address, validator2.address)
        ).to.be.revertedWith('Token: Unauthorized');
        await expect(
          ANFTInstance.connect(deployer).emergencyUpdateListingValidator(listingInstance.address, validator2.address)
        ).to.be.not.reverted;

        expect(await listingInstance.validator()).to.equal(validator2.address);
        expect(await listingInstance.validator()).to.not.equal(validator.address);
      });

      it("New validator's address cant be the zero address", async () => {
        await expect(
          ANFTInstance.connect(deployer).emergencyUpdateListingValidator(
            listingInstance.address,
            ethers.constants.AddressZero
          )
        ).to.be.revertedWith('Listing: Invalid _validator');

        await expect(
          listingInstance.connect(validator).updateValidator(ethers.constants.AddressZero)
        ).to.be.revertedWith('Listing: Invalid _validator');
      });

      it('{emergencyUpdateListingValidator}: input address must be a valid listing address ', async () => {
        await expect(
          ANFTInstance.connect(deployer).emergencyUpdateListingValidator(
            ethers.constants.AddressZero,
            listingInstance.address
          )
        ).to.be.revertedWith('Token: Invalid Listing');
      });

      it('Validator can update listing ID', async () => {
        const listingId_1 = await listingInstance.listingId();
        const newlistingId = 2;
        await expect(listingId_1).equal(listingId);
        await expect(listingInstance.connect(stakeholder1).updatelistingId(newlistingId)).to.be.revertedWith(
          'Listing: Unauth!'
        );
        await expect(listingInstance.connect(validator).updatelistingId(newlistingId)).to.be.not.reverted;

        const listingId_2 = await listingInstance.listingId();
        await expect(listingId_2).equal(newlistingId);
      });

      it('Only account with DEFAULT_ADMIN_ROLE can set staking address', async () => {
        const initialStakingAddress = await ANFTInstance.stakingAddress();
        expect(initialStakingAddress).equal(stakingAcc.address);

        await expect(ANFTInstance.connect(validator).updateStakingAddress(stakingAcc2.address)).to.be.revertedWith(
          'Token: Unauthorized'
        );

        const DEFAULT_ADMIN_ROLE = await ANFTInstance.DEFAULT_ADMIN_ROLE();
        await ANFTInstance.grantRole(DEFAULT_ADMIN_ROLE, validator.address);
        await expect(ANFTInstance.connect(validator).updateStakingAddress(stakingAcc2.address)).to.be.not.reverted;
        const newStakingAddress = await ANFTInstance.stakingAddress();
        expect(newStakingAddress).equal(stakingAcc2.address);
      });

      it('Staking address must not be 0', async () => {
        await expect(ANFTInstance.updateStakingAddress(ethers.constants.AddressZero)).to.be.revertedWith(
          'Token: Invalid _stakingAddr'
        );
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

        // Extend ownership to ensure the ownership isnt expired
        const extensionValue = tokenAmountBN(100_000);
        await listingInstance.connect(listingOwner1).extendOwnership(extensionValue);

        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address)).to.be.not.reverted;
        const workerStatus_2 = await listingInstance.workers(worker1.address);
        expect(workerStatus_2);
      });

      it('Owner with expired ownership cant update worker status', async () => {
        const workerStatus_1 = await listingInstance.workers(worker1.address);

        await ethers.provider.send('evm_increaseTime', [86400 * 100]);
        await ethers.provider.send('evm_mine', []);

        await expect(listingInstance.connect(listingOwner2).updateWorker(worker1.address)).to.be.revertedWith(
          'Listing: Unauth!'
        );
        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address)).to.be.revertedWith(
          'Listing: Ownership expired'
        );
        const workerStatus_2 = await listingInstance.workers(worker1.address);
        expect(workerStatus_1).equal(workerStatus_2);
      });

      it('An UpdateWorker event is emitted with correct arguments', async () => {
        const workerStatus_1 = await listingInstance.workers(worker1.address);

        const extensionValue = tokenAmountBN(100_000);
        await listingInstance.connect(listingOwner1).extendOwnership(extensionValue);

        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address))
          .to.emit(ANFTInstance, 'UpdateWorker')
          .withArgs(listingInstance.address, worker1.address, !workerStatus_1);

        await expect(listingInstance.connect(listingOwner1).updateWorker(worker1.address))
          .to.emit(ANFTInstance, 'UpdateWorker')
          .withArgs(listingInstance.address, worker1.address, !!workerStatus_1);
      });

      it('Only created Listing can call handleListingTx in token contract', async () => {
        const amount = tokenAmountBN(1_000);
        await expect(
          ANFTInstance.connect(deployer).handleListingTx(deployer.address, amount, false)
        ).to.be.revertedWith('Token: Invalid Listing');
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

      it("Only listing's validator or Admin can toggle listing status", async () => {
        const listingStatus_1 = await ANFTInstance.listingStatus(listingAddress);

        await expect(ANFTInstance.connect(stakeholder1).toggleListingStatus(listingAddress)).to.be.revertedWith(
          'Token: Unauthorized'
        );
        await expect(ANFTInstance.connect(validator).toggleListingStatus(stakeholder1.address)).to.be.revertedWith(
          'Token: Invalid Listing'
        );

        const listingStatus_2 = await ANFTInstance.listingStatus(listingAddress);

        expect(listingStatus_1._active).equal(listingStatus_2._active);

        // Calling from listing validator account
        const listingValidator_1 = await listingInstance.validator();
        expect(validator.address).to.equal(listingValidator_1);
        await expect(ANFTInstance.connect(validator).toggleListingStatus(listingAddress)).to.be.not.reverted;
        const listingStatus_3 = await ANFTInstance.listingStatus(listingAddress);
        expect(listingStatus_3._active).to.be.false;

        // Calling from listing deployer account
        await expect(ANFTInstance.connect(deployer).toggleListingStatus(listingAddress)).to.be.not.reverted;
        const listingStatus_4 = await ANFTInstance.listingStatus(listingAddress);
        expect(listingStatus_4._active).to.be.true;

        // Change listing's validator
        await expect(listingInstance.connect(validator).updateValidator(validator2.address)).to.be.not.reverted;
        const listingValidator_2 = await listingInstance.validator();
        expect(validator.address).to.not.equal(listingValidator_2);
        expect(validator2.address).to.equal(listingValidator_2);

        // Calling from previos validator and current validator
        await expect(ANFTInstance.connect(validator).toggleListingStatus(listingAddress)).to.be.reverted;
        await expect(ANFTInstance.connect(validator2).toggleListingStatus(listingAddress)).to.be.not.reverted;
        const listingStatus_5 = await ANFTInstance.listingStatus(listingAddress);
        expect(listingStatus_5._active).to.be.false;
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
        await expect(listingInstance.connect(validator).updateOwner(ethers.constants.AddressZero)).to.be.revertedWith("Listing: Invalid _newOwner");

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

      it('Trigers an UpdateValue event when validator update listing value', async () => {
        const listingVal = tokenAmountBN(1000);

        const updateTx_1 = await listingInstance.connect(validator).updateValue(listingVal);
        await expect(updateTx_1).to.emit(ANFTInstance, 'UpdateValue').withArgs(listingInstance.address, listingVal);

        const updateTx_2 = await listingInstance.connect(validator).updateValue(listingVal.div(2));
        await expect(updateTx_2)
          .to.emit(ANFTInstance, 'UpdateValue')
          .withArgs(listingInstance.address, listingVal.div(2));
      });

      it('Trigers an UpdateDailyPayment event when validator update listing daily payment', async () => {
        const listingDP = tokenAmountBN(1000);

        const updateTx_1 = await listingInstance.connect(validator).updateDailyPayment(listingDP);
        await expect(updateTx_1)
          .to.emit(ANFTInstance, 'UpdateDailyPayment')
          .withArgs(listingInstance.address, listingDP);

        const updateTx_2 = await listingInstance.connect(validator).updateDailyPayment(listingDP.mul(2));
        await expect(updateTx_2)
          .to.emit(ANFTInstance, 'UpdateDailyPayment')
          .withArgs(listingInstance.address, listingDP.mul(2));
      });

      it('Listing Creation event is created with correct arguments', async () => {
        const createListingTx = ANFTInstance.connect(validator).createListing(listingOwner1.address, listingId);
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

          const initialOwnership = await listingInstance.ownership();

          const extendOwnershipTx = await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const extendOwnershipReceipt = await extendOwnershipTx.wait();
          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extendOwnershipReceipt.blockNumber))
            .timestamp;

          const ownerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);

          expect(ownerBal_1).equal(ownerBal_2.add(extensionValues));
          expect(SABal_1).equal(SABal_2.sub(extensionValues));

          const { _end } = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValues,
            blockTS: extendOwnershipBlockTimeStamp,
          });

          const actualOwnership = (await listingInstance.ownership()).toNumber();

          expect(_end).equal(actualOwnership);
        });

        it("Owner can't transfer more than their token balance", async () => {
          const userBalance = await ANFTInstance.balanceOf(listingOwner1.address);
          await expect(listingInstance.connect(listingOwner1).extendOwnership(userBalance.add(1))).to.be.revertedWith(
            'ERC20: transfer amount exceeds balance'
          );
          await expect(listingInstance.connect(listingOwner1).extendOwnership(userBalance)).to.be.not.reverted;
        });

        it('Owner must own the listing for at least 1.0 day ({dailyPayment} is the minimum transfer amount)', async () => {
          const dailyPayment = await listingInstance.dailyPayment();
          await expect(listingInstance.connect(listingOwner1).extendOwnership(dailyPayment.sub(1))).to.be.revertedWith(
            'Listing: Insufficient amount!'
          );
          await expect(listingInstance.connect(listingOwner1).extendOwnership(dailyPayment)).to.be.not.reverted;
        });

        it('Owner cant extend ownership with inactive listing', async () => {
          const ownerBal_1 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const ownershipValue_1 = await listingInstance.ownership();

          await ANFTInstance.connect(validator).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(listingOwner1).extendOwnership(extensionValues)).to.be.revertedWith(
            'Token: Inactive Listing'
          );

          const ownerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);
          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const ownershipValue_2 = await listingInstance.ownership();

          expect(ownerBal_1).equal(ownerBal_2);
          expect(SABal_1).equal(SABal_2);
          expect(ownershipValue_1).equal(ownershipValue_2);
        });

        it('An OwnershipExtension event is omitted when user extends ownership', async () => {
          const initialOwnership = await listingInstance.ownership();
          const extensionTx = listingInstance.connect(listingOwner1).extendOwnership(extensionValues);

          const extendOwnershipReceipt = await (await extensionTx).wait();

          const extendOwnershipBlockTimeStamp = (await ethers.provider.getBlock(extendOwnershipReceipt.blockNumber))
            .timestamp;

          const { _start: expectedStart, _end: expectedEnd } = await calculateOwnershipExtension({
            initialOwnership: initialOwnership.toNumber(),
            instance: listingInstance,
            transferedAmount: extensionValues,
            blockTS: extendOwnershipBlockTimeStamp,
          });

          await expect(extensionTx)
            .to.emit(ANFTInstance, 'OwnershipExtension')
            .withArgs(
              listingInstance.address,
              listingOwner1.address,
              listingOwner1.address,
              expectedStart,
              expectedEnd,
              extensionValues
            );
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

        it('If the current ownership forfeits (the ownership value is in the past), new user can extend ownership and become the listing owner', async () => {
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
            'Ownership not expired!'
          );

          const listingOwner_2 = await listingInstance.owner();
          expect(listingOwner_2).equal(listingOwner_1);
        });
      });

      describe('Ownership withdrawal', () => {
        const withdrawAmount = tokenAmountBN(10_000);

        it('Must be the listing owner to withdraw', async () => {
          const listingOwner = await listingInstance.owner();
          expect(listingOwner).equal(listingOwner1.address);
          expect(listingOwner).not.equal(listingOwner2.address);

          await expect(listingInstance.connect(listingOwner2).withdraw(withdrawAmount)).to.be.revertedWith(
            'Listing: Unauth!'
          );
        });

        it('Ownership value must not be in the past', async () => {
          await expect(listingInstance.connect(listingOwner1).withdraw(withdrawAmount)).to.be.revertedWith(
            'Listing: Ownership expired!'
          );
        });

        it('Ownership value will be recalculated based on withdraw amount', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const intialOwnership = await listingInstance.ownership();
          const dailyPayment = await listingInstance.dailyPayment();
          await listingInstance.connect(listingOwner1).withdraw(withdrawAmount);
          const expectedOwnershipValue = calNewOwnershipAfterWithdraw({
            withdrawAmount,
            existingOwnership: intialOwnership,
            dailyPayment,
          });

          const newOwnership = await listingInstance.ownership();
          expect(newOwnership).equal(expectedOwnershipValue);
        });

        it('Minimum withdraw amount is dailyPayment', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const dailyPayment = await listingInstance.dailyPayment();
          await expect(listingInstance.connect(listingOwner1).withdraw(dailyPayment.sub(1))).to.be.revertedWith(
            'Listing: Insufficient amount!'
          );
          await expect(listingInstance.connect(listingOwner1).withdraw(dailyPayment)).to.be.not.reverted;
        });

        it('Owner cant withdraw more than the credit left plus one day', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const blockNo = await ethers.provider.getBlockNumber();
          const blockInfo = await ethers.provider.getBlock(blockNo);
          const blockTS = blockInfo.timestamp;

          const listingOwnership = await listingInstance.ownership();
          const listingDP = await listingInstance.dailyPayment();
          const maximumTokenToWithdraw = calculateAvailableTokenForWithdrawing({
            currentBlockTS: BigNumber.from(blockTS),
            existingOwnership: listingOwnership,
            dailyPayment: listingDP,
          });

          await expect(listingInstance.connect(listingOwner1).withdraw(maximumTokenToWithdraw)).to.be.revertedWith(
            'Listing: Invalid amount!'
          );

          const maximumTokenToWithdraw_2 = calculateAvailableTokenForWithdrawing({
            // Add 10 seconds to create a difference
            currentBlockTS: BigNumber.from(blockTS).add(10),
            existingOwnership: listingOwnership,
            dailyPayment: listingDP,
          });

          await expect(listingInstance.connect(listingOwner1).withdraw(maximumTokenToWithdraw_2)).to.be.not.reverted;
        });

        it('Cant withdraw with insufficient funds balance', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);

          const fundsBalance = await ANFTInstance.balanceOf(stakingAcc.address);
          await ANFTInstance.connect(stakingAcc).transfer(stakingAcc2.address, fundsBalance);

          await expect(listingInstance.connect(listingOwner1).withdraw(withdrawAmount)).to.be.revertedWith(
            'ERC20: transfer amount exceeds balance'
          );
        });

        it('Value will be transfered back, from Staking Address to Owner', async () => {
          const stakingBal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const listingOwnerBal_1 = await ANFTInstance.balanceOf(listingOwner1.address);

          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);

          const stakingBal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const listingOwnerBal_2 = await ANFTInstance.balanceOf(listingOwner1.address);

          expect(stakingBal_1.add(extensionValues)).equal(stakingBal_2);

          expect(listingOwnerBal_1.sub(extensionValues)).equal(listingOwnerBal_2);

          const ownership_1 = await listingInstance.ownership();
          const dailyPayment = await listingInstance.dailyPayment();

          const withdrawTx = listingInstance.connect(listingOwner1).withdraw(withdrawAmount);
          const expectedOwnershipValue = calNewOwnershipAfterWithdraw({
            withdrawAmount,
            existingOwnership: ownership_1,
            dailyPayment,
          });

          await expect(withdrawTx)
            .to.emit(ANFTInstance, 'Withdraw')
            .withArgs(
              listingInstance.address,
              listingOwner1.address,
              withdrawAmount,
              ownership_1,
              expectedOwnershipValue
            );

          const stakingBal_3 = await ANFTInstance.balanceOf(stakingAcc.address);
          const listingOwnerBal_3 = await ANFTInstance.balanceOf(listingOwner1.address);

          expect(stakingBal_2.sub(withdrawAmount)).equal(stakingBal_3);

          expect(listingOwnerBal_2.add(withdrawAmount)).equal(listingOwnerBal_3);
        });

        it('Owner cant withdraw with inactive listing', async () => {
          await listingInstance.connect(listingOwner1).extendOwnership(extensionValues);
          const ownership_1 = await listingInstance.ownership();

          await ANFTInstance.connect(deployer).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(listingOwner1).extendOwnership(extensionValues)).to.be.revertedWith(
            'Token: Inactive Listing'
          );

          await expect(listingInstance.connect(listingOwner1).withdraw(withdrawAmount)).to.be.revertedWith(
            'Token: Inactive Listing'
          );

          const ownership_2 = await listingInstance.ownership();

          expect(ownership_1).equal(ownership_2);
        });
      });

      describe('Users register for staking', () => {
        const suppliedAmountForStakingAddress = tokenAmountBN(50_000);

        const registeredAmount = tokenAmountBN(300);
        const option0 = 0;
        beforeEach(async () => {
          await ANFTInstance.transfer(stakingAcc.address, suppliedAmountForStakingAddress);
        });

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

        it('Users cant register more than their token balance', async () => {
          const userBalance = await ANFTInstance.balanceOf(stakeholder1.address);
          await expect(listingInstance.connect(stakeholder1).register(userBalance.add(1), option0)).to.be.revertedWith(
            'Listing: Insufficient balance!'
          );
          await expect(listingInstance.connect(stakeholder1).register(userBalance, option0)).to.be.not.reverted;
          await expect(listingInstance.connect(stakeholder1).register(userBalance, option0)).to.be.revertedWith(
            'Listing: Stake unchanged!'
          );
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

        it("Option's pool stake, user's stake, totalStake is increased when register amount > currentStake.amount", async () => {
          const totalStake_1 = await listingInstance.totalStake();
          const { _totalStake: totalPoolStake_1 } = await listingInstance.options(option0);
          const stakingRecord_1 = await listingInstance.stakings(option0, stakeholder1.address);

          expect(registeredAmount.gt(stakingRecord_1._amount)).true;
          expect(registeredAmount.lt(stakingRecord_1._amount)).false;

          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);

          const totalStake_2 = await listingInstance.totalStake();
          const { _totalStake: totalPoolStake_2 } = await listingInstance.options(option0);
          const stakingRecord_2 = await listingInstance.stakings(option0, stakeholder1.address);

          expect(totalStake_1).equal(totalStake_2.sub(registeredAmount));
          expect(totalPoolStake_1).equal(totalPoolStake_2.sub(registeredAmount));
          expect(stakingRecord_1._amount).equal(stakingRecord_2._amount.sub(registeredAmount));
        });

        it("Option's pool stake, user's stake, totalStake is decreased when register amount < currentStake.amount", async () => {
          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);

          const totalStake_1 = await listingInstance.totalStake();
          const { _totalStake: totalPoolStake_1 } = await listingInstance.options(option0);
          const stakingRecord_1 = await listingInstance.stakings(option0, stakeholder1.address);

          const newRegisterAmount = registeredAmount.div(2);
          expect(newRegisterAmount.gt(stakingRecord_1._amount)).false;
          expect(newRegisterAmount.lt(stakingRecord_1._amount)).true;

          await listingInstance.connect(stakeholder1).register(newRegisterAmount, option0);

          const totalStake_2 = await listingInstance.totalStake();
          const { _totalStake: totalPoolStake_2 } = await listingInstance.options(option0);
          const stakingRecord_2 = await listingInstance.stakings(option0, stakeholder1.address);

          expect(totalStake_1).equal(totalStake_2.add(newRegisterAmount));
          expect(totalPoolStake_1).equal(totalPoolStake_2.add(newRegisterAmount));
          expect(stakingRecord_1._amount).equal(stakingRecord_2._amount.add(newRegisterAmount));
        });

        it('In case of overriding previous register amount, stakeholder will still be rewarded before register amount is overrided', async () => {
          const stakingBal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const stakeholderBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);

          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          // First time register, balances are expected to stay the same
          const stakingBal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const stakeholderBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);
          expect(stakingBal_1.eq(stakingBal_2)).to.be.true;
          expect(stakeholderBal_1.eq(stakeholderBal_2)).to.be.true;

          const firstRegisterTS = (await listingInstance.stakings(option0, stakeholder1.address))._start;

          // Set a specific Timestamp for the next block to estimate the reward amount for testing purpose
          const preDefinedOverrideTS = firstRegisterTS.add(86000);
          await ethers.provider.send('evm_setNextBlockTimestamp', [preDefinedOverrideTS.toNumber()]);

          // Proceed to override previous register amount
          // Stakeholder is still rewarded for the time period between 2 registering timestamps
          const expectedReward = await calculateStakeHolderReward({
            stakeStart: firstRegisterTS,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: preDefinedOverrideTS,
          });

          const overrideTx = await listingInstance.connect(stakeholder1).register(registeredAmount.div(2), option0);
          const overrideReceipt = await overrideTx.wait();
          const overrideTS = (await ethers.provider.getBlock(overrideReceipt.blockNumber)).timestamp;
          expect(overrideTS).equal(preDefinedOverrideTS.toNumber());

          const stakingBal_3 = await ANFTInstance.balanceOf(stakingAcc.address);
          const stakeholderBal_3 = await ANFTInstance.balanceOf(stakeholder1.address);
          expect(stakingBal_3).equal(stakingBal_2.sub(expectedReward));
          expect(stakeholderBal_3).equal(stakeholderBal_2.add(expectedReward));
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
        const suppliedAmountForStakingAddress = tokenAmountBN(50_000);
        const rewardPoolAmount = tokenAmountBN(10_000);
        let stakeStart: BigNumber;

        beforeEach(async () => {
          await listingInstance.connect(stakeholder1).register(registeredAmount, option0);
          await ANFTInstance.transfer(stakingAcc.address, suppliedAmountForStakingAddress);
          await listingInstance.connect(listingOwner1).extendOwnership(rewardPoolAmount);

          stakeStart = (await listingInstance.stakings(option0, stakeholder1.address))._start;
        });

        it('User must register first', async () => {
          const optionInfo_1 = await listingInstance.options(option0);

          await expect(listingInstance.connect(stakeholder2).unregister(option0)).to.be.revertedWith(
            'Listing: Register first!'
          );

          const optionInfo_2 = await listingInstance.options(option0);

          expect(optionInfo_1._totalStake).equal(optionInfo_2._totalStake);
        });

        it('User is rewarded for the time period between register timestamp and unregister timestamp', async () => {
          const stakingBal_1 = await ANFTInstance.balanceOf(stakingAcc.address);
          const stakeholderBal_1 = await ANFTInstance.balanceOf(stakeholder1.address);

          const preDefinedUnregisterTS = stakeStart.add(86000);
          await ethers.provider.send('evm_setNextBlockTimestamp', [preDefinedUnregisterTS.toNumber()]);

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: preDefinedUnregisterTS,
          });

          const unregisterTx = await listingInstance.connect(stakeholder1).register(registeredAmount.div(2), option0);
          const unregisterReceipt = await unregisterTx.wait();
          const unregisterTS = (await ethers.provider.getBlock(unregisterReceipt.blockNumber)).timestamp;
          expect(unregisterTS).equal(preDefinedUnregisterTS.toNumber());

          const stakingBal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const stakeholderBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);
          expect(stakingBal_2).equal(stakingBal_1.sub(expectedReward));
          expect(stakeholderBal_2).equal(stakeholderBal_1.add(expectedReward));
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
          await expect(unregisterTx)
            .to.emit(ANFTInstance, 'Unregister')
            .withArgs(listingInstance.address, stakeholder1.address, option0);
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
          // Ensure total stake is equal to listing value
          await listingInstance.connect(stakeholder1).register(listingValue_1, option0);

          await ethers.provider.send('evm_increaseTime', [86400 * 2]);
          await ethers.provider.send('evm_mine', []);

          const listingValue_2 = await listingInstance.value();
          const totalStake_2 = await listingInstance.totalStake();

          expect(listingValue_2).equal(totalStake_2);

          const { _start: stakeStart } = await listingInstance.stakings(option0, stakeholder1.address);

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

          await ANFTInstance.connect(validator).toggleListingStatus(listingAddress);

          await expect(listingInstance.connect(stakeholder1).claimReward(option0)).to.be.revertedWith(
            'Token: Inactive Listing'
          );

          const SABal_2 = await ANFTInstance.balanceOf(stakingAcc.address);
          const SHBal_2 = await ANFTInstance.balanceOf(stakeholder1.address);

          expect(SABal_1).equal(SABal_2);
          expect(SHBal_1).equal(SHBal_2);
        });

        it('Cant claim reward if funds balance is insufficient', async () => {
          const fundsBalance = await ANFTInstance.balanceOf(stakingAcc.address);
          await ANFTInstance.connect(stakingAcc).transfer(stakingAcc2.address, fundsBalance);

          await expect(listingInstance.connect(stakeholder1).claimReward(option0)).to.be.revertedWith(
            'ERC20: transfer amount exceeds balance'
          );
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

          const claimReceipt = await (await claimTx).wait();
          const claimTS = (await ethers.provider.getBlock(claimReceipt.blockNumber)).timestamp;

          const expectedReward = await calculateStakeHolderReward({
            stakeStart,
            instance: listingInstance,
            optionId: option0,
            stakeholder: stakeholder1.address,
            blockTS: BigNumber.from(claimTS),
          });

          await expect(claimTx)
            .to.emit(ANFTInstance, 'Claim')
            .withArgs(listingInstance.address, stakeholder1.address, expectedReward, stakeStart, claimTS);
        });
      });
    });

    describe('Upgradeable', () => {
      let upgradeFactory: TestUpgrade__factory;
      let upgradeInstance: TestUpgrade;

      it('Getter/Setter testing', async () => {
        upgradeFactory = await ethers.getContractFactory('TestUpgrade');
        upgradeInstance = <TestUpgrade>await upgrades.upgradeProxy(ANFTInstance, upgradeFactory);
        const initalVersionValue = await upgradeInstance.getVersion();
        expect(initalVersionValue).equal(0);
        const newVersionValue = 5;
        await upgradeInstance.setVersion(newVersionValue);
        expect(await upgradeInstance.getVersion()).equal(newVersionValue);
      });

      it('Roles stay the same after upgrade', async () => {
        const VALIDATOR = await ANFTInstance.VALIDATOR();

        expect(await ANFTInstance.hasRole(VALIDATOR, validator2.address)).to.be.false;
        await ANFTInstance.connect(deployer).grantRole(VALIDATOR, validator2.address);
        expect(await ANFTInstance.hasRole(VALIDATOR, validator2.address)).to.be.true;

        upgradeFactory = await ethers.getContractFactory('TestUpgrade');
        upgradeInstance = <TestUpgrade>await upgrades.upgradeProxy(ANFTInstance, upgradeFactory);

        expect(await upgradeInstance.hasRole(VALIDATOR, validator2.address)).to.be.true;

        const DEFAULT_ADMIN_ROLE = await upgradeInstance.DEFAULT_ADMIN_ROLE();

        expect(await upgradeInstance.hasRole(VALIDATOR, validator2.address)).to.be.true;
        expect(await upgradeInstance.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.be.true;
      });

      it('Token balance stays the same after upgrade', async () => {
        const SH_Bal_1 = await ANFTInstance.balanceOf(stakeholder1.address);
        const SH2_Bal_1 = await ANFTInstance.balanceOf(stakeholder2.address);
        const Owner_Bal_1 = await ANFTInstance.balanceOf(listingOwner1.address);
        const Owner2_Bal_1 = await ANFTInstance.balanceOf(listingOwner2.address);

        const TEN_MILLION_TOKENS = 10_000_000;
        await ANFTInstance.connect(deployer).transfer(stakeholder1.address, tokenAmountBN(TEN_MILLION_TOKENS));
        await ANFTInstance.connect(deployer).transfer(stakeholder2.address, tokenAmountBN(TEN_MILLION_TOKENS * 2));
        await ANFTInstance.connect(deployer).transfer(listingOwner1.address, tokenAmountBN(TEN_MILLION_TOKENS * 3));
        await ANFTInstance.connect(deployer).transfer(listingOwner2.address, tokenAmountBN(TEN_MILLION_TOKENS * 4));

        const SH_Bal_2 = await ANFTInstance.balanceOf(stakeholder1.address);
        const SH2_Bal_2 = await ANFTInstance.balanceOf(stakeholder2.address);
        const Owner_Bal_2 = await ANFTInstance.balanceOf(listingOwner1.address);
        const Owner2_Bal_2 = await ANFTInstance.balanceOf(listingOwner2.address);

        expect(SH_Bal_2).equal(SH_Bal_1.add(tokenAmountBN(TEN_MILLION_TOKENS)));
        expect(SH2_Bal_2).equal(SH2_Bal_1.add(tokenAmountBN(TEN_MILLION_TOKENS * 2)));
        expect(Owner_Bal_2).equal(Owner_Bal_1.add(tokenAmountBN(TEN_MILLION_TOKENS * 3)));
        expect(Owner2_Bal_2).equal(Owner2_Bal_1.add(tokenAmountBN(TEN_MILLION_TOKENS * 4)));

        upgradeFactory = await ethers.getContractFactory('TestUpgrade');
        upgradeInstance = <TestUpgrade>await upgrades.upgradeProxy(ANFTInstance, upgradeFactory);

        const SH_Bal_3 = await upgradeInstance.balanceOf(stakeholder1.address);
        const SH2_Bal_3 = await upgradeInstance.balanceOf(stakeholder2.address);
        const Owner_Bal_3 = await upgradeInstance.balanceOf(listingOwner1.address);
        const Owner2_Bal_3 = await upgradeInstance.balanceOf(listingOwner2.address);

        expect(SH_Bal_2).equal(SH_Bal_3);
        expect(SH2_Bal_2).equal(SH2_Bal_3);
        expect(Owner_Bal_2).equal(Owner_Bal_3);
        expect(Owner2_Bal_2).equal(Owner2_Bal_3);
      });
    });
  });
};
