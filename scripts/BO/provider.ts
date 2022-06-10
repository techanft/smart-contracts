import { ethers } from 'ethers';

const USING_TESTNET = true;
interface INetworkConfig {
  url: string;
  config: {
      chainId: number;
      name: string;
  };
}

const BSC_TESTNET: INetworkConfig = {
  url: process.env.BSC_TESTNET_URL as string,
  config: {
    chainId: 97,
    name: 'bsc-testnet',
  },
};

const BSC_MAINNET: INetworkConfig = {
  url: process.env.BSC_TESTNET_URL as string,
  config: {
    chainId: 56,
    name: 'bsc-mainnet',
  }
};

const CRONOS_TESTNET: INetworkConfig = {
  url: process.env.CRONOS_TESTNET_URL as string,
  config: {
    chainId: 338,
    name: 'cronos-testnet',
  }
};

/*
    Connecting to other test network with infura as the provider
        const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_RINKEBY_PROJECT_ID)
        const provider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_GOERLI_PROJECT_ID)
*/
// const provider = new ethers.providers.JsonRpcProvider(bsctestnet_url, bsctestnet_config);
const provider = USING_TESTNET
  ? new ethers.providers.JsonRpcProvider(CRONOS_TESTNET.url, CRONOS_TESTNET.config)
  : new ethers.providers.JsonRpcProvider(BSC_MAINNET.url, BSC_MAINNET.config);

export default provider;
