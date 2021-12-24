import { ethers } from 'ethers';
import listingArtifact from '../artifacts/contracts/v1/Listing.sol/Listing';
import provider from './BO/provider';
import { getWalletByPK } from '../utils';
import { convertBnToDecimal, convertDecimalToBn, listingAddrs } from './BO/utils';

const [first, second, third, fourth, fifth] = listingAddrs;

const { OWNER_PK } = process.env;
const ownnerWallet = getWalletByPK(OWNER_PK as string);

const listingInstance = new ethers.Contract(first, listingArtifact.abi, provider);

const contractWithSigner = listingInstance.connect(ownnerWallet);

const extendOwnership = async () => {
  const extendingValue = convertDecimalToBn(String(3840));
  const dailyPayment = await contractWithSigner.dailyPayment();
  console.log(`Daily Payment: ${convertBnToDecimal(dailyPayment)}`);
  const tx = await contractWithSigner.extendOwnership(extendingValue);
  await tx.wait();
  console.log(tx.hash);
};

const withdraw = async () => {
  const withdraw = convertDecimalToBn(String(800));
  const tx = await contractWithSigner.withdraw(withdraw);
  await tx.wait();
  console.log(tx.hash);
};

const main = async () => {
  // await extendOwnership()
  await withdraw();
};

main().catch((error) => {
  console.error(error);
});
