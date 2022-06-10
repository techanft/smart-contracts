import { BigNumber } from 'ethers';
import { getWalletByPK } from '../utils';
import { TokenInstance } from './BO/manageRoles';
import { convertBnToDecimal, convertDecimalToBn } from './BO/utils';

const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;
const { STAKEHOLDER_PK } = process.env;

const shWallet = getWalletByPK(STAKEHOLDER_PK as string);

const transferToken = async () => {
  const accounts = [
    '0x42dFeEDCD1575484DfdC84c216fAD75f3e20528D',
    '0x0F488C370708b4250A253df57193df2ff731ca3D',
    '0xe767E40599a94294Fc0385014311907aD434a4C7',
    '0x2dD51c520E58f8056d2C11925c05A33555f1BBf5',
    '0x43f96726B105b448798b6eebB04a09ee99921608',
    '0x9b11111D18C4D2D4f93D68546dF32b4E9F33033d',
  ];
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY);
  const contractWithSigner = await TokenInstance.connect(deployerWallet);
  const transferAmount = convertDecimalToBn(String(5_000_000));

  for (let index = 0; index < accounts.length; index++) {
    const element = accounts[index];
    const tx = await contractWithSigner.transfer(element, transferAmount);
    await tx.wait();
    console.log(tx.hash);
    console.log('-------------------');
  }
};

const checkBalance = async () => {
  const shBal = await TokenInstance.balanceOf(shWallet.address);
  console.log(`shBal: ${convertBnToDecimal(shBal)}`);
};

const main = async () => {
  // await checkBalance();
  await transferToken();
};

main().catch((error) => {
  console.error(error);
});
