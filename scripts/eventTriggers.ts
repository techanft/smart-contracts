import { ethers } from 'ethers';
import listingArtifact from '../artifacts/contracts/v1/Listing.sol/Listing';
import provider from './BO/provider';
import { getWalletByPK } from '../utils';
import { convertBnToDecimal, convertDecimalToBn, listingAddrs } from './BO/utils';
import { Listing } from '../typechain';
import { TokenInstance } from './BO/grantValidatorRole';

const [first, second, third, fourth, fifth, sixth, seventh, eighth] = listingAddrs;

const { OWNER_PK } = process.env;
const { STAKEHOLDER_PK } = process.env;

const ownerWallet = getWalletByPK(OWNER_PK as string);
const shWallet = getWalletByPK(STAKEHOLDER_PK as string);

const extendOwnership = async () => {
  const listingInstance = new ethers.Contract(sixth, listingArtifact.abi, provider);
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const dailyPayment = await contractWithSigner.dailyPayment();
  console.log(`Daily Payment: ${convertBnToDecimal(dailyPayment)}`);
  const extendingValue = convertDecimalToBn(String(4480));
  const tx = await contractWithSigner.extendOwnership(extendingValue);
  await tx.wait();
  console.log(tx.hash);
};

const withdraw = async () => {
  const listingInstance = new ethers.Contract(sixth, listingArtifact.abi, provider);
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const withdraw = convertDecimalToBn(String(4400));
  const tx = await contractWithSigner.withdraw(withdraw);
  await tx.wait();
  console.log(tx.hash);
};

const register = async () => {
    const listingInstance = <Listing>new ethers.Contract(eighth, listingArtifact.abi, provider);
    const contractWithSigner = listingInstance.connect(shWallet);
    const optionToRegister = 0;

    const optionInfoBefore = await contractWithSigner.options(optionToRegister);
    const listingTotalStakeBefore = await contractWithSigner.totalStake();
    console.log(`optionInfoBefore._reward: ${convertBnToDecimal(optionInfoBefore._reward)}`);
    console.log(`optionInfoBefore._totalStake: ${convertBnToDecimal(optionInfoBefore._totalStake)}`);
    console.log(`listingTotalStakeBefore: ${convertBnToDecimal(listingTotalStakeBefore)}`);
    
    const amountToRegister = convertDecimalToBn(String(9_000_001));
    const tx = await contractWithSigner.register(amountToRegister, optionToRegister);
    await tx.wait();
    console.log(tx.hash)

    const optionInfoAfter = await contractWithSigner.options(optionToRegister);
    const listingTotalStakeAfter = await contractWithSigner.totalStake();
    console.log(`==========================================`)
    console.log(`optionInfoAfter._reward: ${convertBnToDecimal(optionInfoAfter._reward)}`);
    console.log(`optionInfoAfter._totalStake: ${convertBnToDecimal(optionInfoAfter._totalStake)}`);
    console.log(`listingTotalStakeAfter: ${convertBnToDecimal(listingTotalStakeAfter)}`);
}

const main = async () => {
  // await extendOwnership()
  // await register();
};

main().catch((error) => {
  console.error(error);
});
