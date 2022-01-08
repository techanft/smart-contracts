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
  '0xB12dB25702a0f5D1CA1A4Ba65eacD0d89C5D3421',
  '0xa7CfE5A434C7C10AD9BE0da7F93Ccf681b2d92AE',
  '0x940B98fbD58323bcACDd8e2f8697b0f4d3473833',
  '0xE5fd2e1001c4D8f8913d968AA069cfd593c9ccFf',
  '0x2bB8310D3DCAA8b9fFD335CD843A6265ddA813F9',
  '0xe4C85C26F33e76A9cdB5C0A6c3c610aFbE2b2DC6',
  '0xc0981c8BED1A8568f82769E654BEa0e890b6f188',
  '0xC380B66705d8e07639F9329D7224F3D696c5f6bd',
  '0x63d1aE3a1Ccf460e5F51099Bbfa25499116B4e20',
  '0x81204dD365A997E78D0f6EDF2591279AA70d88d0',
];
