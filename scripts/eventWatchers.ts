import { BigNumber } from 'ethers';
import { TokenInstance } from './BO/grantValidatorRole';
import { convertBnToDecimal } from './BO/utils';

// event OwnershipExtension (address _listing, address _prevOwner, address _newOwner, uint256 _start, uint256 _end);
TokenInstance.on(
  'OwnershipExtension',
  async (_listing: string, _prevOwner: string, _newOwner: string, _start: BigNumber, _end: BigNumber) => {
    console.log(`---------BEGIN LOGGING OwnershipExtension--------------`);
    console.log(`_listing: ${_listing}`);
    console.log(`_prevOwner: ${_prevOwner}`);
    console.log(`_newOwner: ${_newOwner}`);
    console.log(`_start: ${_start.toString()}`);
    console.log(`_end: ${_end.toString()}`);
    console.log(`---------END LOGGING OwnershipExtension--------------`);
  }
);

TokenInstance.on('Transfer', async (_from: string, _to: string, _value: BigNumber) => {
  console.log(`---------BEGIN LOGGING Transfer--------------`);
  console.log(`_from: ${_from}`);
  console.log(`_to: ${_to}`);
  console.log(`_value: ${convertBnToDecimal(_value)}`);
  console.log(`---------END LOGGING Transfer--------------`);
});


TokenInstance.on('UpdateWorker', async (_listing: string, _worker: string, _isAuthorized: boolean) => {
  console.log(`---------BEGIN LOGGING UpdateWorker--------------`);
  console.log(`_listing: ${_listing}`);
  console.log(`_worker: ${_worker}`);
  console.log(`_isAuthorized: ${_isAuthorized}`);
  console.log(`---------END LOGGING UpdateWorker--------------`);
});

TokenInstance.on('Withdraw', async (_listing: string, _owner: string, _amount: string, _initOwnership: BigNumber, _newOwnership: BigNumber) => {
  console.log(`---------BEGIN LOGGING Withdraw--------------`);
  console.log(`_listing: ${_listing}`);
  console.log(`_owner: ${_owner}`);
  console.log(`_amount: ${_amount}`);
  console.log(`_initOwnership: ${_initOwnership.toString()}`);
  console.log(`_newOwnership: ${_newOwnership.toString()}`);
  console.log(`---------END LOGGING Withdraw--------------`);
});

TokenInstance.on('Claim', async (_listing: string, _stakeholder: string, _reward: BigNumber, _from: BigNumber, _to: BigNumber) => {
  console.log(`---------BEGIN LOGGING Claim--------------`);
  console.log(`_listing: ${_listing}`);
  console.log(`_stakeholder: ${_stakeholder}`);
  console.log(`_reward: ${_reward.toString()}`);
  console.log(`_from: ${_from.toString()}`);
  console.log(`_to: ${_to.toString()}`);
  console.log(`---------END LOGGING Claim--------------`);
});

TokenInstance.on('Register', async (_listing: string, _stakeholder: string, _amount: BigNumber, _optionId: BigNumber) => {
  console.log(`---------BEGIN LOGGING Register--------------`);
  console.log(`_listing: ${_listing}`);
  console.log(`_stakeholder: ${_stakeholder}`);
  console.log(`_amount: ${_amount.toString()}`);
  console.log(`_optionId: ${_optionId.toString()}`);
  console.log(`---------END LOGGING Register--------------`);
});

TokenInstance.on('Unregister', async (_listing: string, _stakeholder: string,  _optionId: BigNumber) => {
  console.log(`---------BEGIN LOGGING Unregister--------------`);
  console.log(`_listing: ${_listing}`);
  console.log(`_stakeholder: ${_stakeholder}`);
  console.log(`_optionId: ${_optionId.toString()}`);
  console.log(`---------END LOGGING Unregister--------------`);
});
