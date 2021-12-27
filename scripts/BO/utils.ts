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
  '0xf1f9255c9e7700C2b16BE349Bc347bB45769484f',
  '0xc15a2183C880c0Ad9CCb832127c5e5D14368D36F',
  '0x807c110b26894eDA3727f8c5ffa3EcF122BDB5DF',
  '0x0deB1530aDC0A6b137aA9780ecAe7ED48Ca6A547',
  '0x69f568BDfAcBD4a46797501860C5BfB9a4d74C81',
  '0x14c0cECFff3eAf25190F9ad889E93F1be09D7c5A',
  '0x68e3848A51F18DAe2a865174A3D14d004653FE7C',
  '0x28d5c6EF318CD022DE3dEC35ed2aE07141d0F923',
  '0xd44DDDc0856b230c975493314A2d4666D1D0a2E8',
  '0xCB2D0fC4fF1c36dA70d209Bf5d8D788dA9771BfE',
];