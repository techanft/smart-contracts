import { ethers } from 'ethers';
import listingArtifact from '../artifacts/contracts/v1/Listing.sol/Listing';
import provider from './BO/provider';
import { getWalletByPK } from '../utils';
import { convertBnToDecimal, convertDecimalToBn, listingAddrs } from './BO/utils';

const [first, second, third, fourth, fifth] = listingAddrs;

const { OWNER_PK } = process.env;
const { STAKEHOLDER_PK } = process.env;

const ownerWallet = getWalletByPK(OWNER_PK as string);
const shWallet = getWalletByPK(STAKEHOLDER_PK as string);

const listingInstance = new ethers.Contract(first, listingArtifact.abi, provider);

const extendOwnership = async () => {
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const extendingValue = convertDecimalToBn(String(3840));
  const dailyPayment = await contractWithSigner.dailyPayment();
  console.log(`Daily Payment: ${convertBnToDecimal(dailyPayment)}`);
  const tx = await contractWithSigner.extendOwnership(extendingValue);
  await tx.wait();
  console.log(tx.hash);
};

const withdraw = async () => {
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const withdraw = convertDecimalToBn(String(800));
  const tx = await contractWithSigner.withdraw(withdraw);
  await tx.wait();
  console.log(tx.hash);
};

const register = async () => {
    const contractWithSigner = listingInstance.connect(shWallet);
    const optionToRegister = 0;
    const optionInfoBefore = await contractWithSigner.options(optionToRegister);
    const listingTotalStakeBefore = await contractWithSigner.totalStake();
    console.log(`optionInfoBefore._reward: ${convertBnToDecimal(optionInfoBefore._reward)}`);
    console.log(`optionInfoBefore._totalStake: ${convertBnToDecimal(optionInfoBefore._totalStake)}`);
    console.log(`listingTotalStakeBefore: ${convertBnToDecimal(listingTotalStakeBefore)}`);
    
    const tx = await contractWithSigner.register()

}

const main = async () => {
  // await extendOwnership()
  await withdraw();
};

main().catch((error) => {
  console.error(error);
});
