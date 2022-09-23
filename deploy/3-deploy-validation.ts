import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('Validation', {
    from: deployer,
    args: [],
    log: true,
  });
};

func.tags = ['deploy-validation'];
export default func;
// 1. hh --network cronos-testnet deploy --tags deploy-validation

