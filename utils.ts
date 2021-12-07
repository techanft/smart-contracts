import { ethers } from 'ethers';

export const getWalletByPK = (PK: string, provider: ethers.providers.JsonRpcProvider | ethers.providers.InfuraProvider) => {
  return new ethers.Wallet(PK, provider);
};
