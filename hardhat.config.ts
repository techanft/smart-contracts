import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task('accounts', 'Prints the list of accounts', async (args, hre) => {
//   const accounts = await hre.ethers.getSigners();
//   console.log(accounts, 'accounts')
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: '78e9055f-940b-41a3-b0a4-c2e20bd0476c',
    
    gasPrice: 6,
    // @ts-ignore
    ethPrice: 600,
  },
  networks: {
    localhost: {
      saveDeployments: false,
    },
    'bsc-testnet': {
      url: 'https://data-seed-prebsc-1-s2.binance.org:8545',
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 97,
    },
    // 'bsc-mainnet': {
    //   url: 'https://bsc-dataseed.binance.org/',
    //   accounts: [process.env.BSC_MAINNET_DEPLOYER_PRIVATE_KEY as string],
    //   live: true,
    //   chainId: 56,
    // },

    'rinkeby': {
      url: process.env.RINKEBY_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 4,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: 0,
    stakingAddress: 1,
  },
};

export default config;
