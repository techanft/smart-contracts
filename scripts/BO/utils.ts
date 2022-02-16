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
  '0xf2aDdB1a7AD2FfE22F4ae0000C82B703c7D4F975',
  '0xA0A65eA5227CCf79b84c94e943ad6500a042217D',
  '0xaF81c314C29FF0674F7715248d5953C2B48f5266',
  '0x521102f5d8289930D5fCe27b6FC15f078557E189',
  '0xBa7835a7D7e695bc3D19F7A925794862DDf00c86',
  '0xEC5b518fD29dFa01abBfF699ffe7A8cB9a40d3D6',
  '0xA45FB088Cc8412934170fdEffC075524B138dD25',
  '0x9fEdc5Df3cB6E70dd71a850066B709dec2F4593f',
  '0x203b324A1b6BD168F4A1c8C3b6bF8B8285a67d1D',
  '0xaB6eb6e86D865c0e4e898F4AaC872FB07824de41',
];