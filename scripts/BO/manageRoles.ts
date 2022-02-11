import { ethers } from 'ethers';
import proxyArtifact from '../../deployments/bsc-testnet/Token_Proxy';
import implementationArtifact from '../../deployments/bsc-testnet/Token_Implementation';


import { getWalletByPK } from '../../utils';
import provider from './provider';
import { Token } from '../../typechain';

const { TESTNET_DEPLOYER_PRIVATE_KEY } = process.env;

const tokenAddress = proxyArtifact.address;
const tokenABI = implementationArtifact.abi;

export const TokenInstance = <Token>new ethers.Contract(tokenAddress, tokenABI, provider);

const grantValidatorRole = async (validatorAddress: string) => {
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY);

  const contractWithSigner = await TokenInstance.connect(deployerWallet);
  const validatorRole = await contractWithSigner.VALIDATOR();
  const tx = await contractWithSigner.grantRole(validatorRole, validatorAddress);
  await tx.wait();
};

const grantAdminRole = async (multiSigAddr: string) => {
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY);

  const contractWithSigner = await TokenInstance.connect(deployerWallet);
  const ADMIN_ROLE = await contractWithSigner.DEFAULT_ADMIN_ROLE();
  const tx = await contractWithSigner.grantRole(ADMIN_ROLE, multiSigAddr);
  await tx.wait();
};

const deployerRenounce = async () => {
  if (!TESTNET_DEPLOYER_PRIVATE_KEY) return;

  const deployerWallet = getWalletByPK(TESTNET_DEPLOYER_PRIVATE_KEY);
  
  const contractWithSigner = await TokenInstance.connect(deployerWallet);
  const ADMIN_ROLE = await contractWithSigner.DEFAULT_ADMIN_ROLE();

  const tx = await contractWithSigner.renounceRole(ADMIN_ROLE, deployerWallet.address);
  await tx.wait();
};



const main = async () => {
  grantValidatorRole("0x43f96726B105b448798b6eebB04a09ee99921608")
  // grantAdminRole("0x4230fC631B939fAB31485682D6cfC196018DB848");
  // deployerRenounce();
};
main();
