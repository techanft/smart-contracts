import { ContractReceipt } from 'ethers';
import { litingAddrFromListingCreationEvent } from '../../test/utils';
import { getWalletByPK } from '../../utils';
import { TokenInstance } from './manageRoles';

const { VALIDATOR_PK, MAINNET_VALIDATOR_PRIVATE_KEY } = process.env;

const createListing = async (listingID: string | number, ownerAddr: string) => {
  const validatorWallet = getWalletByPK(MAINNET_VALIDATOR_PRIVATE_KEY as string);

  const contractWithSigner = await TokenInstance.connect(validatorWallet);

  const tx = await contractWithSigner.createListing(ownerAddr, listingID);

  const receipt: ContractReceipt = await tx.wait();

  const listingAddress = litingAddrFromListingCreationEvent(receipt.events);
  console.log(listingAddress, 'listingAddress');
  console.log('===============================');
};

const main = async () => {
  const owner = '0x6ad3493ADd46c8d95610388Ab88bEeFE75743afC'; 

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
