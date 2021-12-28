import { BigNumber, ethers } from 'ethers';
import provider from './provider';

export const convertBnToDecimal = (input: BigNumber) => {
  return ethers.utils.formatEther(input.toString());
};
export const convertDecimalToBn = (input: string) => {
  const sanitizedInput = input.replace(/[^\d.-]/g, ''); //https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
  return ethers.utils.parseUnits(sanitizedInput);
};

const arraySum = (input: number[]) => {
  return input.reduce((a, b) => a + b, 0);
};

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// // create an array with sum of 100, each element ranging from 15 - 35;
export const randomizeArray = () => {
  const output = [];
  while (arraySum(output) < 100) {
    let newElement = getRandomInt(15, 35);
    if (arraySum(output) + newElement >= 100) {
      newElement = 100 - arraySum(output);
    }
    output.push(newElement);
  }
  return output;
};

export const getWalletByPK = (PK: string) => {
  return new ethers.Wallet(PK, provider);
};
export const listingAddrs = [
  '0x5bA72f52E25570675AAcd6D60eA7aCf69440f58F',
  '0x59AA12b1Bd2A78e0e09443D35e2B540E19595D7f',
  '0x722242e424AAa019e925Ac05ADAeE954f9C4D3EA',
  '0x91dE0f495efebcDD4ae628Dd65B9D9EAF32b4C82',
  '0xfa44eFBbeE81cEEfEdAb156b07B89F0AefA648C2',
  '0x5df2874dAa3D34203262555cF495315C30ff8F10',
  '0x491633d892859018F438a33e5ac30d45478070ac',
  '0x506Ea072080033E13B39A0c63Ce21CD31f6a3869',
  '0xf542f49481D706Af5518a36db432Cc741a0DcB2C',
  '0x0bc734aB9652265376358EA9C50c5758A0913b19',
];