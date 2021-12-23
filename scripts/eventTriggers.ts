import { ethers } from "ethers";
import { listingAddrs } from "./BO/listingManagement";
import listingArtifact from "../artifacts/contracts/v1/Listing.sol/Listing"
import provider from "./BO/provider";
import { getWalletByPK } from "../utils";
import { convertBnToDecimal, convertDecimalToBn } from "./BO/utils";

const [first, second, third, fourth, fifth] = listingAddrs;


const { ownerPK } = process.env;
const listingInstance = new ethers.Contract(first, listingArtifact.abi, provider);

const ownnerWallet = getWalletByPK(ownerPK as string);

const contractWithSigner = listingInstance.connect(ownnerWallet);

const extendingValue = convertDecimalToBn(String(100));

const extendOwnership = async () => {    
    const dailyPayment = await contractWithSigner.dailyPayment();
    console.log(`Daily Payment: ${convertBnToDecimal(dailyPayment)}`);
    const tx = await contractWithSigner.extendOwnership(extendingValue);
    await tx.wait();
    console.log(tx.hash)
}

extendOwnership();
