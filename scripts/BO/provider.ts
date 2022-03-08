import { ethers } from 'ethers';

const bsctestnet_url = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
const bsctestnet_config = {
  chainId: 97,
  name: 'bsc-testnet',
};
const bscmainnet_url = 'https://bsc-dataseed.binance.org/';
const bscmainnet_config = {
  chainId: 56,
  name: 'bsc-mainnet',
};

/*
    Connecting to other test network with infura as the provider
        const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_RINKEBY_PROJECT_ID)
        const provider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_GOERLI_PROJECT_ID)
*/
// const provider = new ethers.providers.JsonRpcProvider(bsctestnet_url, bsctestnet_config);
const provider = new ethers.providers.JsonRpcProvider(bscmainnet_url, bscmainnet_config);

export default provider;
