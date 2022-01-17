import { BigNumber, ethers } from 'ethers';
import listingArtifact from '../artifacts/contracts/v1/Listing.sol/Listing';
import provider from './BO/provider';
import { getWalletByPK } from '../utils';
import { convertBnToDecimal, convertDecimalToBn, listingAddrs } from './BO/utils';
import { Listing } from '../typechain';
import { TokenInstance } from './BO/manageRoles';
import { calculateStakeHolderReward, getCurrentUnix } from '../test/utils';

const [first, second, third, fourth, fifth, sixth, seventh, eighth] = listingAddrs;
const listingInstance = <Listing>new ethers.Contract(second, listingArtifact.abi, provider);

const { OWNER_PK } = process.env;
const { STAKEHOLDER_PK } = process.env;

const ownerWallet = getWalletByPK(OWNER_PK as string);
const shWallet = getWalletByPK(STAKEHOLDER_PK as string);

const extendOwnership = async () => {
  const contractWithSigner = listingInstance.connect(ownerWallet);
  const dailyPayment = await contractWithSigner.dailyPayment();
  console.log(`Daily Payment: ${convertBnToDecimal(dailyPayment)}`);
  const extendingValue = convertDecimalToBn(String(1_500));
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

const option = 0;

const register = async () => {
  const contractWithSigner = listingInstance.connect(shWallet);
  
  const optionInfoBefore = await contractWithSigner.options(option);
  const listingTotalStakeBefore = await contractWithSigner.totalStake();
  console.log(`optionInfoBefore._reward: ${optionInfoBefore._reward}`);
  console.log(`optionInfoBefore._totalStake: ${convertBnToDecimal(optionInfoBefore._totalStake)}`);
  console.log(`listingTotalStakeBefore: ${convertBnToDecimal(listingTotalStakeBefore)}`);

  const amountToRegister = convertDecimalToBn(String(50_000_000));
  const tx = await contractWithSigner.register(amountToRegister, option);
  await tx.wait();
  console.log(tx.hash);

  const optionInfoAfter = await contractWithSigner.options(option);
  const listingTotalStakeAfter = await contractWithSigner.totalStake();
  console.log(`==========================================`);
  console.log(`optionInfoAfter._reward: ${optionInfoAfter._reward}`);
  console.log(`optionInfoAfter._totalStake: ${convertBnToDecimal(optionInfoAfter._totalStake)}`);
  console.log(`listingTotalStakeAfter: ${convertBnToDecimal(listingTotalStakeAfter)}`);
};

const claimReward = async () => {
  const contractWithSigner = listingInstance.connect(shWallet);

  const optionInfoBefore = await contractWithSigner.options(option);

  const { _start } = await listingInstance.stakings(option, shWallet.address);
  
  console.log(`optionInfoBefore._reward: ${optionInfoBefore._reward.toNumber()}`);
  console.log(`optionInfoBefore._totalStake: ${convertBnToDecimal(optionInfoBefore._totalStake)}`);


  const claimTx = await contractWithSigner.claimReward(option);
  const claimReceipt = await claimTx.wait();
  const claimTS = (await provider.getBlock(claimReceipt.blockNumber)).timestamp;
  
  console.log(`_stakeStart: ${_start}`)
  console.log(`claimTS: ${claimTS}`);

  console.log(`claimHash: ${claimTx.hash}`)

  const optionInfoAfter = await contractWithSigner.options(option);
  
  console.log(`optionInfoAfter._reward: ${(optionInfoAfter._reward).toNumber()}`);
  console.log(`optionInfoAfter._totalStake: ${convertBnToDecimal(optionInfoAfter._totalStake)}`);

};
const checkingReward = async () => {

  // const { _start } = await listingInstance.stakings(optionToClaim, shWallet.address);
  const _start = BigNumber.from(1640835380);
  // const currentUnix = getCurrentUnix();
  const currentBlockTS = BigNumber.from(1640835755)

  const result = await calculateStakeHolderReward(
    {
      optionId: option,
      instance: listingInstance,
      stakeholder: shWallet.address,
      stakeStart: _start,
      blockTS: currentBlockTS
    }
  )
  console.log(`result: ${(convertBnToDecimal(result))}`);
}


const main = async () => {
  // await extendOwnership()
  // await withdraw()
  // await register();
  // await claimReward();
  await checkingReward();
};

main().catch((error) => {
  console.error(error);
});
