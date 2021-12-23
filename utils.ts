import { ethers } from 'ethers';
import provider from './scripts/BO/provider';

export const getWalletByPK = (PK: string) => {
  return new ethers.Wallet(PK, provider);
};
