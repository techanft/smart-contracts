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
  '0xD1681F90D68A13cE6f0151c8F8B4573d3b7bA6B4',
  '0x2fa1fa25ee7Dfa4d602caeAe28aB3637E2dD42Bb',
  '0x8Bc05AeF2b6DD8C5Ad3683AAc3a0efa55B523A0d',
  '0xcef6D473aaDacd3042B677abCb2e1EFFe2764Dbe',
  '0xdd040c67E6dc4921630E31DF2475A641EfE23F90',
  '0x3C064842fdDa63131dAC36975602328e70434Bb8',
  '0x98c12854589c942aB091A01137b46eb9979b0b9F',
  '0x2ffeF0Dc62C9761eCb622126762AfA0a1064b770',
  '0xf9e411d7707B6d288083C30F278D82f7E6DEa15F',
  '0x47f8aD51Bd90888B896583A525A2C208D3f645e7',
];
