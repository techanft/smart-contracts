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

export function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export const listingAddrs = [
  
  // MAINNET //
  // '0x952D01e9f404Bc1C8116A94FFF76F460630179bc',
  // '0x0Df137954b574c462A028919B7bbF03d2b0cA16C',
  // '0x02FfaAaD99D194B2c7C42ac4cbfF61C871c19bcC',
  // '0x83D1cB79335e3Df290A351DA859b3EF2381a5437',
  // '0x6dbA853AbD3C3320ae59d631213b255E300bbB63',
  // '0x0268ea14e7503B53933f7A67a247Cd8Ece22A32e',
  // '0xF29D2d28a4e569b97fa11Cd48e87b6A51b35b09F',
  // '0xB87FD701580b4F35767Bb6e463c18F3da952Fd6a',
  // '0xA53c22F54fE8C4e4010b27166bdbF67407C44A94',
  // '0xd432989e93511C3a03caB4d8Ec35322F8DfD4102',

  // CRONOS TEST //
  "0xbf0DA6d71A0c740a72E26954E509361fD5EE7182",
"0x7d1EddDBA5AF197f53a1b31D8B7d5b67B28f6Dde",
"0x38eaf029EA8706094880b0C8735deFb4A1Ed16cc",
"0x19B3F116EB39D38818D5fDfB73eCb78bdb982bDA",
"0xc736Bc529a33C0ACe59ae74ab0867A4F2294AA0e",
"0x0bb41AED21026bC61543698Acd840BD1146229e8",
"0xCEEe6b9D15532Aab9a2b4ea8De36d86E993ec9Ec",
"0x79ce5e8D69A45AA9e19103985674229035a5F6c8",
"0xbAF1a5DD2FACc43e5b3651e591DaD3F25055CF84",
"0x797673d80B7cc7343E63B1d5AF185A88992Db669"
];
