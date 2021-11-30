import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;
  const { deployer, stakingAddress } = await getNamedAccounts();
  
  await deploy('ANFTV2', {
    from: deployer,
    args: [stakingAddress],
    log: true,
  });

};

func.tags = ['anft-v2'];
export default func;
// npx hardhat --network bsc-testnet deploy --tags anft-v2
