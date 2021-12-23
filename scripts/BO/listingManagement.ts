import { BigNumber, ContractReceipt, ethers } from 'ethers';
// import listingArtifact from '../../artifacts/contracts/v1/Listing.sol/Listing';
import listingArtifact from '../../artifacts/contracts/v1/Listing.sol/Listing';
import { getWalletByPK } from '../../utils';
import provider from './provider';
import { convertDecimalToBn, getRandomInt, randomizeArray } from './utils';

const { VALIDATOR_PK } = process.env;
// Replace your listing validator PK here
const listingValidator_PK = 'something';

const validatorWallet = getWalletByPK(VALIDATOR_PK as string);

// const listingAddress = 'something';
const listingAddress = '0x00C8135e295AE2eF9652Ec2dA96a1A6aB7A4de12';
const listingInstance = new ethers.Contract(listingAddress, listingArtifact.abi, provider);

const contractWithValidatedSigner = listingInstance.connect(validatorWallet);

const setupOptionReward = async (optionID: number | string, rewardValue: number | string) => {
  const tx = await contractWithValidatedSigner.setupOptionReward(optionID, rewardValue);
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt);
};
// createListing(1, ...943aeb2b9607faacad83)

const updateListingId = async (newId: number | string) => {
  const tx = await contractWithValidatedSigner.setupOptionReward(newId);
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt);
};
// updateListingId(2,)

const updateOwner = async (newOwnerAddress: string) => {
  const tx = await contractWithValidatedSigner.updateOwner(newOwnerAddress);
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt);
};

const updateValue = async (newValue: string) => {
  const tx = await contractWithValidatedSigner.updateValue(ethers.utils.parseUnits(newValue));
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt);
};
// updateValue("1200.131")

const updateDailyPayment = async (newValue: string) => {
  const tx = await contractWithValidatedSigner.updateDailyPayment(ethers.utils.parseUnits(newValue));
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt);
};
// updateDailyPayment("1200.131")

// Script for mass update
export const listingAddrs = [
  '0x00C8135e295AE2eF9652Ec2dA96a1A6aB7A4de12',
  '0x92f8b987A6a900C20E7440a651063A9F30bCA1bb',
  '0x8ad12413355FE4edEe377B9B570DfD0256d5AEfA',
  '0x813b1F391C6294F7D02b25C669Debc14544A6D4e',
  '0xC7081772a200469aBBF95cf86596939AC911166e',
  '0x0b59ef6b558128bD75854ec95182b521F40bC41A',
  '0x9CB93F486BeA6BA1d6181AAE615184A334f63eeA',
  '0x56A2cDFfD6B75390a60ce79Ae3A8D1E1e37ac592',
  '0x826Abc5B36304a74973100bBb9191FEdA1966344',
];

const massUpdateDPandValue = async () => {
  for (let index = 0; index < listingAddrs.length; index++) {
    const addr = listingAddrs[index];
    const listingInstance = new ethers.Contract(addr, listingArtifact.abi, provider);
    const contractWithValidatedSigner = listingInstance.connect(validatorWallet);

    const lisingValue = convertDecimalToBn(String(getRandomInt(10000, 50000)));
    const dailyPaymentValue = convertDecimalToBn(String(getRandomInt(20, 500)));

    console.log(`Listing value: ${lisingValue.toString()}`)
    console.log(`Daily payment value: ${dailyPaymentValue.toString()}`)

    console.log(`Proceed To update values....`);

    const updateValueTx = await contractWithValidatedSigner.updateValue(lisingValue);
    const updateDPTx = await contractWithValidatedSigner.updateDailyPayment(dailyPaymentValue);

    await updateValueTx.wait();
    await updateDPTx.wait();

    const newListingValue: BigNumber = await listingInstance.value();
    const newDailyPayment: BigNumber = await listingInstance.dailyPayment();

    console.log(`New listing value: ${newListingValue.toString()}`)
    console.log(`New Daily Payment value: ${newDailyPayment.toString()}`)

    console.log(`=============================`);
  }
};

const massUpdateListingOptions = async () => {
  for (let i = 0; i < listingAddrs.length; i++) {
    const addr = listingAddrs[i];
    const listingInstance = new ethers.Contract(addr, listingArtifact.abi, provider);
    const contractWithValidatedSigner = listingInstance.connect(validatorWallet);

    const optionValues = randomizeArray();
    console.log(`optionValues: ${optionValues}`);

    for (let j = 0; j < optionValues.length; j++) {
      const optionRewardValue = optionValues[j]
      const before = await contractWithValidatedSigner.options(j);
      console.log(`Listing reward before: ${before._reward.toString()}`);
      const tx = await contractWithValidatedSigner.setupOptionReward(j, optionRewardValue);
      await tx.wait();
      const after = await contractWithValidatedSigner.options(j);
      console.log(`Listing reward after: ${after._reward.toString()}`);
      console.log(`---------------------`)
    }
    console.log(`=============================`);

  }

}

