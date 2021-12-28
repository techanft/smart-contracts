import { BigNumber, ContractReceipt, ethers } from 'ethers';
// import listingArtifact from '../../artifacts/contracts/v1/Listing.sol/Listing';
import listingArtifact from '../../artifacts/contracts/v1/Listing.sol/Listing';
import { getWalletByPK } from '../../utils';
import provider from './provider';
import { convertDecimalToBn, getRandomInt, listingAddrs, randomizeArray } from './utils';

const { VALIDATOR_PK } = process.env;
// Replace your listing validator PK here

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

const main = async () => {
  await massUpdateDPandValue();
  await massUpdateListingOptions();
}
main().catch((error) => {
  console.error(error);
});