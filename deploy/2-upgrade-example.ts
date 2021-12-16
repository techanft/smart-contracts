import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deployer } = await getNamedAccounts();

  const implDeployResult = await deployments.deploy(
    'TestUpgrade_Implementation',
    {
      from: deployer,
      args: [],
      contract: 'TestUpgrade',
    }
  );


  const upgradeTx = await deployments.execute(
    'Token',
    { from: deployer },
    'upgradeTo',
    implDeployResult.address,
  );


  console.log('upgradeTx', upgradeTx)
};

func.tags = ['upgrade-example'];
export default func;
// npx hardhat --network rinkeby deploy --tags upgrade-example
