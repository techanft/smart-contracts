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
  '0xDaf5483a45945713D0bb77320B6B53e4e1a26922',
  '0x4b2B69ac1f26DF1d13297B039BbdBcB4653c6364',
  '0xfC812C2e2701d6666cC7142e9Dec25eab72F9799',
  '0x4963CebCb9c2Bbf3B94B14b0114b40A56D673C77',
  '0xdE25AAcC9e7AD6ACd3Da0c260CD71d6E228CaB9f',
  '0x3108155500444aDE9cf1A9d8ceA16eedc33749fB',
  '0xD4027881BA06edddEe9Da8B1104dCaD33e3010A5',
  '0xA8ee2Ab8b0EFe7B73B7d32A4A768001ea37fF96A',
  '0x7A17b4B9083DE7A84f2b406A0CF95A2db755AC91',
  '0x30a5C0dcC95AEDA6fa70041602Ae0d9824216d73',
];
