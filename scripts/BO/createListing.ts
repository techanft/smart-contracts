import { ContractReceipt } from 'ethers';
import { litingAddrFromListingCreationEvent } from '../../test/utils';
import { getWalletByPK } from '../../utils';
import { TokenInstance } from './manageRoles';

const { VALIDATOR_PK, MAINNET_VALIDATOR_PRIVATE_KEY } = process.env;

const createListing = async (listingID: string | number, ownerAddr: string) => {
  const validatorWallet = getWalletByPK(VALIDATOR_PK as string);

  const contractWithSigner = await TokenInstance.connect(validatorWallet);

  const tx = await contractWithSigner.createListing(ownerAddr, listingID);

  const receipt: ContractReceipt = await tx.wait();

  const listingAddress = litingAddrFromListingCreationEvent(receipt.events);
  console.log(listingAddress, 'listingAddress');
  console.log('===============================');
};

const main = async () => {
  const owner = '0x42dFeEDCD1575484DfdC84c216fAD75f3e20528D'; 

  await createListing(1, owner);
  await createListing(2, owner);
  await createListing(3, owner);
  await createListing(4, owner);
  await createListing(5, owner);
  await createListing(6, owner);
  await createListing(7, owner);
  await createListing(8, owner);
  await createListing(9, owner);
  await createListing(10, owner);
  
};
main();
