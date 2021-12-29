import { BigNumber, ethers } from 'ethers';
import listingArtifact from '../artifacts/contracts/v1/Listing.sol/Listing';
import provider from './BO/provider';
import { getWalletByPK } from '../utils';
import { convertBnToDecimal, convertDecimalToBn, listingAddrs } from './BO/utils';
import { Listing } from '../typechain';
import { TokenInstance } from './BO/grantValidatorRole';
import { calculateStakeHolderReward, getCurrentUnix } from '../test/utils';

const [first, second, third, fourth, fifth, sixth, seventh, eighth] = listingAddrs;
const listingInstance = <Listing>new ethers.Contract(first, listingArtifact.abi, provider);

const { OWNER_PK } = process.env;
const { STAKEHOLDER_PK } = process.env;

const ownerWallet = getWalletByPK(OWNER_PK as string);
const shWallet = getWalletByPK(STAKEHOLDER_PK as string);

const extendOwnership = async () => {
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const dailyPayment = await contractWithSigner.dailyPayment();
  console.log(`Daily Payment: ${convertBnToDecimal(dailyPayment)}`);
  const extendingValue = convertDecimalToBn(String(500));
  const tx = await contractWithSigner.extendOwnership(extendingValue);
  await tx.wait();
  console.log(tx.hash);
};

const withdraw = async () => {
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const withdraw = convertDecimalToBn(String(200));
  const tx = await contractWithSigner.withdraw(withdraw);
  await tx.wait();
  console.log(tx.hash);
};

const register = async () => {
  const contractWithSigner = listingInstance.connect(shWallet);
  const optionToRegister = 0;

  const optionInfoBefore = await contractWithSigner.options(optionToRegister);
  const listingTotalStakeBefore = await contractWithSigner.totalStake();
  console.log(`optionInfoBefore._reward: ${optionInfoBefore._reward}`);
  console.log(`optionInfoBefore._totalStake: ${convertBnToDecimal(optionInfoBefore._totalStake)}`);
  console.log(`listingTotalStakeBefore: ${convertBnToDecimal(listingTotalStakeBefore)}`);

  const amountToRegister = convertDecimalToBn(String(50_000_000));
  const tx = await contractWithSigner.register(amountToRegister, optionToRegister);
  await tx.wait();
  console.log(tx.hash);

  const optionInfoAfter = await contractWithSigner.options(optionToRegister);
  const listingTotalStakeAfter = await contractWithSigner.totalStake();
  console.log(`==========================================`);
  console.log(`optionInfoAfter._reward: ${optionInfoAfter._reward}`);
  console.log(`optionInfoAfter._totalStake: ${convertBnToDecimal(optionInfoAfter._totalStake)}`);
  console.log(`listingTotalStakeAfter: ${convertBnToDecimal(listingTotalStakeAfter)}`);
};

const claimReward = async () => {
  const contractWithSigner = listingInstance.connect(shWallet);
  const optionToClaim = 0;
  
  const rewardPoolBefore = await listingInstance.rewardPool();
  const optionInfoBefore = await contractWithSigner.options(optionToClaim);
  
  console.log(`optionInfoBefore._reward: ${convertBnToDecimal(optionInfoBefore._reward)}`);
  console.log(`optionInfoBefore._totalStake: ${convertBnToDecimal(optionInfoBefore._totalStake)}`);

  console.log(`rewardPoolBefore: ${convertBnToDecimal(rewardPoolBefore)}`);

  const claimTx = await contractWithSigner.claimReward(optionToClaim);
  await claimTx.wait();

  const rewardPoolAfter = await listingInstance.rewardPool();
  const optionInfoAfter = await contractWithSigner.options(optionToClaim);
  
  console.log(`optionInfoAfter._reward: ${convertBnToDecimal(optionInfoAfter._reward)}`);
  console.log(`optionInfoAfter._totalStake: ${convertBnToDecimal(optionInfoAfter._totalStake)}`);
  console.log(`rewardPoolAfter: ${convertBnToDecimal(rewardPoolAfter)}`);

};
const checkingReward = async () => {
  const optionToClaim = 0;
  const { _start } = await listingInstance.stakings(optionToClaim, shWallet.address);
  const currentUnix = getCurrentUnix();

  const result = await calculateStakeHolderReward(
    {
      optionId: optionToClaim,
      instance: listingInstance,
      stakeholder: shWallet.address,
      stakeStart: _start,
      blockTS: BigNumber.from(currentUnix)
    }
  )
  console.log(`result: ${(result)}`);
}


const main = async () => {
  await extendOwnership()
  await withdraw()
  // await register();
  // await claimReward();
  // await checkingReward();
};

main().catch((error) => {
  console.error(error);
});
