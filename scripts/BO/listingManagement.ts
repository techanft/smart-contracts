import { ContractReceipt, ethers } from 'ethers';
import listingArtifact from '../../artifacts/contracts/v2/ListingV2.sol/ListingV2';
import { getWalletByPK } from '../../utils';
import provider from './provider';


// Replace your listing validator PK here
const listingValidator_PK = 'something';
const validatorWallet = getWalletByPK(listingValidator_PK, provider);

const listingAddress = 'something';
const listingInstance = new ethers.Contract(listingAddress, listingArtifact.abi, provider);

const contractWithValidatedSigner = listingInstance.connect(validatorWallet);


const setupOptionReward = async (optionID: number | string, rewardValue: number | string) => {
  const tx = await contractWithValidatedSigner.setupOptionReward(optionID, rewardValue);
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt)
};
// createListing(1, ...943aeb2b9607faacad83)


const updateListingId = async (newId: number | string) => {
  const tx = await contractWithValidatedSigner.setupOptionReward(newId);
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt)
};
// updateListingId(2,)

const updateOwner = async (newOwnerAddress: string) => {
  const tx = await contractWithValidatedSigner.updateOwner(newOwnerAddress);
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt)
};

const updateValue = async (newValue: string) => {
  const tx = await contractWithValidatedSigner.updateValue(ethers.utils.parseUnits(newValue));
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt)
};
// updateValue("1200.131")

const updateDailyPayment = async (newValue: string) => {
  const tx = await contractWithValidatedSigner.updateDailyPayment(ethers.utils.parseUnits(newValue));
  const receipt: ContractReceipt = await tx.wait();
  console.log(receipt)
};
// updateDailyPayment("1200.131")



