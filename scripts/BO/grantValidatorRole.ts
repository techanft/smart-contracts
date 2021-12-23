import { ethers } from 'ethers';
import proxyArtifact from '../../deployments/bsc-testnet/Token_Proxy';
import implementationArtifact from '../../deployments/bsc-testnet/Token_Implementation';
import { getWalletByPK } from '../../utils';
import provider from './provider';

const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;

const tokenAddress = proxyArtifact.address;
const tokenABI = implementationArtifact.abi;
export const TokenInstance = new ethers.Contract(tokenAddress, tokenABI, provider);

const grantValidatorRole = async (validatorAddress: string) => {
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY, provider);

  const contractWithSigner = await TokenInstance.connect(deployerWallet);
  const validatorRole = await contractWithSigner.VALIDATOR();
  const tx = await contractWithSigner.grantRole(validatorRole, validatorAddress);
  await tx.wait();
};

// grantValidatorRole(0xa12dskhjqw3...)