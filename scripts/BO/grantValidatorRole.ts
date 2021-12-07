import { ethers } from 'ethers';
import tokenArtifact from '../../deployments/bsc-testnet/ANFTV2';
import { getWalletByPK } from '../../utils';
import provider from './provider';

const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;

const tokenAddress = tokenArtifact.address;
const tokenABI = tokenArtifact.abi;
export const ANFTV2 = new ethers.Contract(tokenAddress, tokenABI, provider);

const grantValidatorRole = async (validatorAddress: string) => {
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY, provider);

  const contractWithSigner = await ANFTV2.connect(deployerWallet);
  const validatorRole = await contractWithSigner.VALIDATOR();

  const tx = await contractWithSigner.grantRole(validatorRole, validatorAddress);
  await tx.wait();
};

// grantValidatorRole(0xa12dskhjqw3...)