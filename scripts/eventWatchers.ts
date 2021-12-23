import { BigNumber } from 'ethers';
import { TokenInstance } from './BO/grantValidatorRole';
import { convertBnToDecimal } from './BO/utils';



// event OwnershipExtension (address _listing, address _prevOwner, address _newOwner, uint256 _start, uint256 _end);
TokenInstance.on(
  'OwnershipExtension',
  async (_listing: string, _prevOwner: string, _newOwner: string, _start: BigNumber, _end: BigNumber) => {
      console.log(`BEGIN LOGGING OwnershipExtension`);
    console.log(`_listing: ${_listing}`);
    console.log(`_prevOwner: ${_prevOwner}`);
    console.log(`_newOwner: ${_newOwner}`);
    console.log(`_start: ${_start.toString()}`);
    console.log(`_end: ${_end.toString()}`);
    console.log(`END LOGGING OwnershipExtension`);
  }
);

TokenInstance.on('Transfer', async (_from: string, _to: string, _value: BigNumber) => {
    console.log(`BEGIN LOGGING Transfer`);
    console.log(`_from: ${_from}`);
    console.log(`_to: ${_to}`);
    console.log(`_value: ${convertBnToDecimal(_value)}`);
    console.log(`END LOGGING Transfer`);
  });