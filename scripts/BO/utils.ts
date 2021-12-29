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
  // '0xe2f61B479FB41DeE7C894459545e8bd43d04aEC6',
  // '0x63E82446298cFE2dDf36103F5227fC476BfC24D3',
  '0x3Ff4416b0a624A364743730821F818eD0b06Fb2C',
  '0x6AbbF727BdCEE8B191Bf5881896B5d99335C632C',
  '0xB8F9d64A021559283555cf5BE3c16C79CF0ffCF5',
  '0x09df95E3c580c1C785cef37d05E71c3c942fB877',
  '0xBC7Ba55D3Be463b58BA9f8BA13F52935C358D096',
  '0xE65f05a23aF13560B7cf319E3aB7cA7057f19BDF',
  '0xEd1FA1952870aa0302810AF9c4a88c279581fC23',
  '0x5a8425f01D2FdC5fF309E8caaf19744FD50b839e',
];
