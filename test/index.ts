import { Deferrable } from '@ethersproject/properties';
import { TransactionRequest } from '@ethersproject/providers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber, ContractReceipt } from 'ethers';
import { ethers } from 'hardhat';
import { ANFTToken, ANFTToken__factory, Listing, Listing__factory } from '../typechain';
import { Event } from '@ethersproject/contracts';

const tokenAmountBN = (input: number) => {
  return BigNumber.from(input).mul(BigNumber.from(10).pow(18));
};
const litingAddrFromListingCreatedEvent = (events: Event[] | undefined): string => {
  const ListingCreatedEvent = events?.find(({ event }) => event == 'ListingCreated');
  return ListingCreatedEvent?.args?._listingAddress;
};

describe('ANFT Token', () => {
  let deployer: SignerWithAddress,
    stakingAddr: SignerWithAddress,
    listingOwner: SignerWithAddress,
    stakeholder1: SignerWithAddress,
    stakeholder2: SignerWithAddress;
  let ANFTFactory: ANFTToken__factory;
  let ANFTInstance: ANFTToken;
  const listingAPY1: number = 50;
  const listingAPY2: number = 60;
  const minimumStakingPeriod: number = 86400; // Equals to 1 day according to Unix time
  const listingValue: number = 1000;

  beforeEach(async () => {
    [deployer, stakingAddr, listingOwner, stakeholder1, stakeholder2] = await ethers.getSigners();
    ANFTFactory = await ethers.getContractFactory('ANFTToken');
    ANFTInstance = await ANFTFactory.connect(deployer).deploy(stakingAddr.address);
    await ANFTInstance.deployed();
  });

  describe('Deployment', function () {
    it('Owner is the deployer address', async () => {
      expect(await ANFTInstance.owner()).to.equal(deployer.address);
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

  // function createListing(address _owner, uint256 _value, uint256 _minimum, uint256 _apy) public onlyOwner {

  describe('Listing creation', function () {
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
    it("New listing's has apy & minimum configuration", async () => {
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
      
      const {_validator, _owner, _value, _listingAddress} = receipt.events?.find(({event}) => event === "ListingCreated")?.args as any;

      expect(_validator).to.equal(deployer.address);
      expect(_owner).to.equal(listingOwner.address);
      expect(_value).to.equal(tokenAmountBN(listingValue));
      expect(_listingAddress).to.equal(address);

    });
    it('Only deployer is able to create listing', async () => {

      const createListingTx = ANFTInstance.connect(stakingAddr).createListing(
        listingOwner.address,
        tokenAmountBN(listingValue),
        minimumStakingPeriod,
        listingAPY1
      );
      await expect(createListingTx).to.be.revertedWith('Ownable: caller is not the owner');

    });
  });
});
