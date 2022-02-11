import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer, stakingAddress } = await getNamedAccounts();

  await deploy('Token', {
    from: deployer,
    args: [],
    log: true,
    proxy: {
      proxyContract: 'TokenProxy',
      execute: {
        init: {
          methodName: 'initialize',
          args: [stakingAddress],
        }
      },
    },
  });
};

func.tags = ['init-deploy'];
export default func;
// 1. hh --network bsc-testnet deploy --tags init-deploy
// 2. hh run ./scripts/BO/manageRoles.ts && hh run ./scripts/BO/createListing.ts
// 3. hh run ./scripts/BO/listingManagement.ts && hh run ./scripts/tokenActions.ts
