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



'INSERT INTO asset (id,created_by,created_date,last_modified_by,last_modified_date,images,address,t_hash,district_code,province_code,area,direction,asset_type, fee,price,delete_at, blockchain_address)\n' +
        'VALUES (2, NULL, \'2021-12-07 03:51:59\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/11638874219000.png\',\n' +
        '        \'0xD1681F90D68A13cE6f0151c8F8B4573d3b7bA6B4\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (3, NULL, \'2021-12-07 03:53:21\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/21638874381436.jpeg\',\n' +
        '        \'0x2fa1fa25ee7Dfa4d602caeAe28aB3637E2dD42Bb\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (4, NULL, \'2021-12-07 03:54:16\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/31638874444071.jpeg\',\n' +
        '        \'0x8Bc05AeF2b6DD8C5Ad3683AAc3a0efa55B523A0d\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (5, NULL, \'2021-12-07 03:54:32\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/41638874464171.jpeg\',\n' +
        '        \'0xcef6D473aaDacd3042B677abCb2e1EFFe2764Dbe\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (6, NULL, \'2021-12-07 03:54:50\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/51638874480010.jpeg\',\n' +
        '        \'0xdd040c67E6dc4921630E31DF2475A641EfE23F90\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (7, NULL, \'2021-12-07 03:55:11\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/61638874500675.jpeg\',\n' +
        '        \'0x3C064842fdDa63131dAC36975602328e70434Bb8\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (8, NULL, \'2021-12-07 03:55:26\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/71638874518610.jpeg\',\n' +
        '        \'0x98c12854589c942aB091A01137b46eb9979b0b9F\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (9, NULL, \'2021-12-07 03:55:45\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/81638874536599.jpeg\',\n' +
        '        \'0x2ffeF0Dc62C9761eCb622126762AfA0a1064b770\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (10, NULL, \'2021-12-07 03:56:08\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/91638874559890.jpeg\',\n' +
        '        \'0xf9e411d7707B6d288083C30F278D82f7E6DEa15F\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\'),\n' +
        '       (11, NULL, \'2021-12-07 03:56:24\', NULL, NULL,\n' +
        '        \'https://dev.anft.vn/images/upload/avatar/2021/12/7/101638874575730.jpeg\',\n' +
        '        \'0x47f8aD51Bd90888B896583A525A2C208D3f645e7\', \'0\', \'0\', \'0\', 0, \'0\', \'\', 0, 0, NULL, \'0\');\n'