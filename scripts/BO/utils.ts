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
export const listingAddrs = [
  '0xC36574517C15539FAF7efca6eDd08a0e6D081Efa',
  '0xA8347D6431003308ff3cC151eF6D04265857EeEf',
  '0x49352F41192c97e11Ac87Ef6bFa971bB656ef835',
  '0x5943c42B1921fBa64B58032B54df0f771cA8E96f',
  '0x22970751db55CF4Ad592DaAd8a2452142277dcd0',
  '0x3c176408e5F873122f613AA8c5B580fDd87B0901',
  '0x3b7A75F6a1E7269815cab02df3A8147D15B57335',
  '0xB09eB9a944206047f766F24FC791CFa98463b6db',
  '0xA348A8Bc1a07e7E6EbEf68a8F4495514C9BD7FF3',
];