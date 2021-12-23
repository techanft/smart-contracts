import { ContractReceipt } from 'ethers';
import { litingAddrFromListingCreationEvent } from '../../test/utils';
import { getWalletByPK } from '../../utils';
import { TokenInstance } from './grantValidatorRole';

const { VALIDATOR_PK } = process.env;

const createListing = async (listingID: string | number, ownerAddr: string) => {
  const validatorWallet = getWalletByPK(VALIDATOR_PK as string);

  const contractWithSigner = await TokenInstance.connect(validatorWallet);

  const tx = await contractWithSigner.createListing(ownerAddr, listingID);

  const receipt: ContractReceipt = await tx.wait();

  const listingAddress = litingAddrFromListingCreationEvent(receipt.events);
  console.log(tx.hash, 'tx.hash');
  console.log(listingAddress, 'listingAddress');
  console.log('===============================');
};

const main = async () => {
  const owners = [
    '0x42dFeEDCD1575484DfdC84c216fAD75f3e20528D',
    '0xeA27071727822834552879E17c2320C81a1bf909',
    '0x5685BBd01c1e510B01A048f297B4adDFA0ad4BEb',
  ];
  await createListing(2, owners[0]);
  await createListing(3, owners[0]);
  await createListing(4, owners[0]);
  await createListing(5, owners[1]);
  await createListing(6, owners[1]);
  await createListing(7, owners[1]);
  await createListing(8, owners[2]);
  await createListing(9, owners[2]);
  await createListing(10, owners[2]);
};
main();
