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

export const getWalletByPK = (PK :string ) => {
  return new ethers.Wallet(PK, provider);
}