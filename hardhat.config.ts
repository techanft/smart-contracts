import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@nomiclabs/hardhat-ethers';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-deploy';

dotenv.config();


const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.10',
    settings: {
      optimizer: {
        enabled: true,
        // runs: 1,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMCAP_API_KEY as string, 
    gasPrice: 6,
    // @ts-ignore
    ethPrice: 600,
  },
  networks: {
    localhost: {
      saveDeployments: false,
    },
    'bsc-testnet': {
      url: process.env.BSC_TESTNET_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 97,
    },
    'rinkeby': {
      url: process.env.RINKEBY_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 4,
    },
    'goerli': {
      url: process.env.GOERLI_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: process.env.ETH_SCAN_KEY,
  },
  namedAccounts: {
    deployer: 0,
    stakingAddress: 1,
  },
};

export default config;
