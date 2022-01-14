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
  '0x296743f96Fa2C5C627E21CE8169817BCb4D5ea69',
  '0x40Cf54DCB1f69508fF7Ce5Db4E7dBcD701d54eBD',
  '0xCf25eA05E5FB917983a42E47D789DC3939F4140b',
  '0x84cFD636e7d6950dD6Fb4985b5982E1D439F7496',
  '0x85537c7BF5EAD4E391fb31e1415C13A8c27a3191',
  '0xA65cFf6033464375e7a04a8A313dA8Fa252298c0',
  '0xAe61926ded05dA22db8C23E91250e011fdEcd8B9',
  '0x5A6032eE5a6bA8113F79093aeAb46f675ef061E9',
  '0xd48D50e856fba91466958418fFeab9ad269E35Ae',
  '0xea73c40eEe03dCD8663F4962009B70a502C503d4',
];
