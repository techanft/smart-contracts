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
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMCAP_API_KEY as string, 
    gasPrice: 6,
    // @ts-ignore
    ethPrice: 450,
  },
  networks: {
    localhost: {
      saveDeployments: false,
    },
    'cronos-testnet': {
      url: process.env.CRONOS_TESTNET_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 338,
    },
    'bsc-testnet': {
      url: process.env.BSC_TESTNET_URL,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.TESTNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 97,
    },
    'bsc-mainnet': {
      url: process.env.BSC_MAINNET_URL,
      accounts: [
        process.env.MAINNET_DEPLOYER_PRIVATE_KEY as string,
        process.env.MAINNET_STAKING_ADDR_PRIVATE_KEY as string,
      ],
      chainId: 56,
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
    reService: "0x33aE0695fB3250F0788510B289d26309d4B8f939"
  },
};

export default config;
