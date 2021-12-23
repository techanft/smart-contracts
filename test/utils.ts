import { BigNumber } from 'ethers';
import { Listing } from '../typechain';
import { Event } from '@ethersproject/contracts';

export const litingAddrFromListingCreationEvent = (events: Event[] | undefined): string => {
  const ListingCreatedEvent = events?.find(({ event }) => event == 'ListingCreation');
  return ListingCreatedEvent?.args?._listingAddress;
};

export const tokenAmountBN = (input: number) => {
  return BigNumber.from(input).mul(BigNumber.from(10).pow(18));
};
interface ICalOwnershipExtension {
  initialOwnership: number;
  instance: Listing;
  transferedAmount: BigNumber;
  blockTS: number;
}
export const calculateOwnershipExtension = async ({
  initialOwnership,
  instance,
  transferedAmount,
  blockTS,
}: ICalOwnershipExtension) => {
  if (initialOwnership < blockTS) {
    initialOwnership = blockTS;
  }

  const dailyPayment = await instance.dailyPayment();

  const additionalCredit = (transferedAmount.mul(86400).div(dailyPayment)).toNumber();

  const newOwnership = initialOwnership + additionalCredit;

  return {
    _start: initialOwnership,
    _end: newOwnership,
  };
};
interface ICalAvlbleToknForWthdrwing {
  currentBlockTS: BigNumber;
  existingOwnership: BigNumber;
  dailyPayment: BigNumber;
}

export const calculateAvailableTokenForWithdrawing = ({
  currentBlockTS,
  existingOwnership,
  dailyPayment,
}: ICalAvlbleToknForWthdrwing) => {
  const creditLeftTS = existingOwnership.sub(currentBlockTS);
  const valueToReturn = creditLeftTS.mul(dailyPayment).div(86400);
  return valueToReturn;
};

interface ICalSHReward {
  instance: Listing;
  optionId: number;
  stakeholder: string;
  blockTS: BigNumber;
  stakeStart: BigNumber;
}

export const calculateStakeHolderReward = async ({
  instance,
  optionId,
  stakeholder,
  blockTS,
  stakeStart,
}: ICalSHReward) => {
  const userStake = await instance.stakings(optionId, stakeholder);
  const optionInfo = await instance.options(optionId);
  const ownership = await instance.ownership();

  const totalStake = await instance.totalStake();
  const dailyPayment = await instance.dailyPayment();
  const listingValue = await instance.value();

  let T = totalStake.mul(100).div(listingValue);

  const T_Threshold = BigNumber.from(86);
  const expiredOwnershipThreshold = BigNumber.from(50);

  if (T.gt(T_Threshold)) {
    T = T_Threshold;
  }

  if (ownership < blockTS && T.gt(expiredOwnershipThreshold)) {
    T = expiredOwnershipThreshold;
  }

  const RTd = dailyPayment.mul(T).div(100);
  const above = RTd.mul(optionInfo._reward.toNumber()).div(100);
  const At = optionInfo._totalStake;
  const Ax = userStake._amount;

  const Ar = above.mul(Ax).div(At);
  const stakedDays = blockTS.sub(stakeStart).div(86400);

  const amountToReturn = Ar.mul(stakedDays);
  return amountToReturn;
};
