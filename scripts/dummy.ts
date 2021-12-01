import { BigNumber, ethers } from 'ethers';
import contractArtifact from '../deployments/bsc-testnet/ANFTV2';
// - Deployer PK: 6dba9ba7d32007c4fa5f7b5d8f9e02692afe70ad67bcaa2b6456bf519bd8ee17
// - Staking Address PK:  32c2d0d04be4ad97670c28716901c3982b5b69b997a85d9cad6d22fe3bbe4afe

const deployerPK = '6dba9ba7d32007c4fa5f7b5d8f9e02692afe70ad67bcaa2b6456bf519bd8ee17';
const receiverAddress = '0x1eba2c845d45Bdf1C01338C03968A77cAcf618dA';

const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/', {
  chainId: 97,
  name: 'bsc-testnet',
});

const wallet = new ethers.Wallet(deployerPK, provider); // or any signer

const contractAddress = contractArtifact.address;
const contractABI = contractArtifact.abi;
const ANFTV2 = new ethers.Contract(contractAddress, contractABI, provider);

const main = async () => {
  // Attach the signer to the contract instance, writting operations will act on behalf of this signer
  const contractWithSigner = await ANFTV2.connect(wallet);

  // Read operation (Get total Supply)
  const supply: BigNumber = await contractWithSigner.totalSupply();


  // Write operation (Transfer from signer to chosen account)
  let tx = await contractWithSigner.transfer(receiverAddress, ethers.utils.parseUnits("123.00012341"));
  console.log(tx.hash);

  // The operation is NOT complete yet; we must wait until it is mined
  await tx.wait();
};
//https://docs.ethers.io/v4/api-contract
main();

// const filter = {
//     address: contractAddress,
//     topics: [
//         // the name of the event, parnetheses containing the data type of each event, no spaces
//         ethers.utils.id("Transfer(address,address,uint256)")
//     ]
// }
// provider.on(filter,  async (data) => {
//     console.log("-------------------------------------");
//     console.log(data);
//     // do whatever you want here
//     // I'm pretty sure this returns a promise, so don't forget to resolve it
// })