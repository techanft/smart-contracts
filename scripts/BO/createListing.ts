import { ContractReceipt, ethers } from 'ethers';
import tokenArtifact from '../../deployments/bsc-testnet/ANFTV2';
import { litingAddrFromListingCreationEvent } from '../../test/v2';
import { getWalletByPK } from '../../utils';
import provider from './provider';

const { VALIDATOR_PK } = process.env;

const tokenAddress = tokenArtifact.address;
const tokenABI = tokenArtifact.abi;
const ANFTV2 = new ethers.Contract(tokenAddress, tokenABI, provider);


const createListing = async (listingID: string | number, ownerAddr: string) => {
  const validatorWallet = getWalletByPK(VALIDATOR_PK as string, provider);

  const contractWithSigner = await ANFTV2.connect(validatorWallet);

  const tx = await contractWithSigner.createListing(ownerAddr, listingID);
  
  const receipt: ContractReceipt = await tx.wait();

  const listingAddress = litingAddrFromListingCreationEvent(receipt.events);
  console.log(listingAddress, 'listingAddress');
  
};
// createListing(1, ...943aeb2b9607faacad83)