// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Token.sol";
import "./ListingStorage.sol";
import "hardhat/console.sol";


/**
 * @dev This contract represents a real estate product. Basic getter-setters are within {ListingStorage}
 * This contract focus more on the staking/reward logic
 */
contract Listing is ListingStorage {

    using SafeMath for uint;

    /**
    * @dev Stake info is recorded every time an user registers for staking and updated when they update their previous staking
    *
    * Stakings are recorded by the option (or business activity) ID, combined with user's address
    * A JSON represenation of a staking record:
    {
        "1": {
            "0x000001": {
                "_start": "1000",
                "_amount": "100",
                "_active": true
            }
        }
    }
    * This could be understood as: Address `0x000001` staking for the option with ID = 1. The stake starts at
    * the timestamp of 100 with the registered amount of 1,000 tokens. The stake is still active (user hasnt canceled)
    */
    struct StakingModel {
        uint256 _start;
        uint256 _amount;
        bool _active;
    }
    mapping (uint256 => mapping (address => StakingModel)) public stakings;


    /**
    * @dev Total stake represents the tokens are staked for all options
    * 
    * TotalStake is:
    *   - Increased when user stake (register) for any options
    *   - Decreased when user unstake (unregister) for any options
    */
    uint256 public totalStake;

    /**
    * @dev Owner and validator is configed upon listing creation according to the specified arguments
    * 
    * Ownership value is initialized to be the current block.timestamp
    *
    * Token contract should be the Caller/Listing creator address
    */
    constructor(address _validator, address _owner, uint256 _listingId) {
        owner = _owner;
        validator = _validator;
        listingId = _listingId;
        ownership = block.timestamp;
        tokenContract = msg.sender;
    }
    /**
     * @dev Validator can update the listing value to reflect the real estate price in the real world
     * Emits an {UpdateValue} event to make the changes publicly visible
     */
    function updateValue (uint256 _value) public onlyValidator {
        value = _value;
        Token(tokenContract).triggerUpdateListingValueEvent(_value);
    }

    /**
     * @dev Validator can update the daily payment value to reflect the real estate price in the real world
     * Emits an {UpdateDailyPayment} event to make the changes publicly visible
     */
    function updateDailyPayment (uint256 _dailyPayment) public onlyValidator {
        dailyPayment = _dailyPayment;
        Token(tokenContract).triggerUpdatePaymentEvent(_dailyPayment);
    }

    /**
     * @dev Owner can update worker status. Which means they can choose/remove who
     * can use the listing in real world
     */
    function updateWorker(address _worker) public {
        require(msg.sender == owner, "Listing: Unauth!");
        require(ownership >= block.timestamp, "Listing: Ownership expired");
        workers[_worker] = !workers[_worker];
        Token(tokenContract).triggerUpdateWorkerEvent(_worker, workers[_worker]);
    }

    /**
    * @dev Owner can extend ownership by transfering tokens to the staking address
    * 
    * sender must be listing owner owner to extend listing ownership, OR the ownership value is in the past (current owner forfeits the listing).
    * In the forfeit case, the sender will be the new owner, and new ownership would be time credit added on top of current timestamp
    *
    * sender must transfer at least {dailyPayment} amount (Owns the listing for at least 1.0 day)
    *
    * Time credit formula:
    *   C = (A  x 86400 / D)
    *      C (timestamp): Time credit (Unix timestamp)
    *      A (tokens): Transfered amount to extend ownership
    *      D (tokens): Daily payment, specified by the validator
    *      86400: Total seconds in a day (60*60*24)
    *
    * Then C is added on top of {block.timestamp} OR the current {ownership} value, depends on whether the listing is forfeited
    */

    function extendOwnership (uint256 _amount) public {
        require(msg.sender == owner || ownership <  block.timestamp, "Listing: Unauth!");
        
        require(_amount >= dailyPayment, "Listing: Insufficient amount!");

        bool success = Token(tokenContract).handleListingTx(msg.sender, _amount, true);
        require(success, "Listing: Unsuccessful attempt!");

        uint256 existingOwnership = ownership;
        address existingOwner = owner;
        
        if (existingOwnership < block.timestamp) {
            owner = msg.sender;
            existingOwnership = block.timestamp;
        }

        
        ownership = existingOwnership.add(_amount.mul(86400).div(dailyPayment));
        Token(tokenContract).triggerOwnershipExtensionEvent(existingOwner, owner, existingOwnership, ownership, _amount);
    }

    /**
    * @dev Owner can partially withdraw the tokens they previously transfered to extend the listing ownership (and forfeit the ownership)
    * 
    * Ownership value must be in the future (larger or equal to block.timestamp)
    * 
    * Owner can input the amount of token they want to withdraw
    *
    * After withdrawal, owner still have to own the listing for at least 1.0 day more
    * (hence the check {newOwnership >= block.timestamp.add(86400)} )
    *
    * Ownership withdraw formula:
    *   RC = A * 86400 / D
    *   OS2 = OS1 - RC
    *      A  (tokens)    : Amount of tokens the owner wishes to withdraw
    *      RC (timestamp) : Removed credit based on {_amount} input
    *      OS1 (timestamp): Original/Intial ownership before withdrawal
    *      OS2 (timestamp): New Ownership value after withdrawal
    *      D  (tokens):  Daily payment, specified by the validator
    *
    * `OS2` must be in the future (larger or equal to block.timestamp)
    *
    * `_amount` shall be transfered from Funds account to user, if success the ownership value
    * should be reset to current TS
    */
    function withdraw(uint256 _amount) public {
        require(msg.sender == owner, "Listing: Unauth!");
        require(ownership >= block.timestamp, "Listing: Ownership expired!");
        require(_amount >= dailyPayment, "Listing: Insufficient amount!");

        uint256 removedCreditTimestamp = _amount.mul(86400).div(dailyPayment);
        uint256 newOwnership = ownership.sub(removedCreditTimestamp);

        require(newOwnership >= block.timestamp.add(86400), "Listing: Invalid amount!");
        
        bool success = Token(tokenContract).handleListingTx(msg.sender, _amount, false);
        require(success, "Listing: Unsuccessful attempt!");

        Token(tokenContract).triggerWithdrawEvent(owner, _amount, ownership, newOwnership);
        ownership = newOwnership;
    }

    /**
    * @dev Stakeholders can claim their reward they previously registed
    * 
    * See {calculateStakeholderReward} for the reward payout formula
    *
    * Staking status should be active (stakeholder hasnt unregistered)
    * Users must have at least `_amount` tokens in their balance
    *
    * This function is automatically triggered when {register} or {unregister} functions are called 
    *
    * If the transfer from the funds address to user's address fulfilled, an {Claim} event is emitted
    * the stake start is reset to the current block.timestamp
    */
    function claimReward (uint256 _optionId) public {
        StakingModel storage chosenStake = stakings[_optionId][msg.sender];
        require(chosenStake._active, "Listing: Register first!");

        uint256 callerBalance = Token(tokenContract).balanceOf(msg.sender);
        require(callerBalance >= chosenStake._amount, "Listing: Insufficient balance!");

        uint256 payoutAmount = calculateStakeholderReward(_optionId, chosenStake);
        bool success = Token(tokenContract).handleListingTx(msg.sender, payoutAmount, false);
        require(success, "Listing: Unsuccessful attempt!");

        Token(tokenContract).triggerClaimEvent(msg.sender, payoutAmount, chosenStake._start, block.timestamp);

        chosenStake._start = block.timestamp;
    }

    /**
    * @dev User can register to be a stakeholder.
    * 
    * NOTE The key difference of this staking model is the user's token balance isnt transfered
    * to another staking address (like other staking models).
    * Users, however, need to have at least registering amount in their balance WHEN they register AND claim rewards
    *
    * Users cant register for inactive listing
    *
    * `_amount` is the registering amount
    * `_optionId` is the option which user would like to register
    *
    * New registering amount will replace previous registering amount
    *
    * Both listing total stake and option total stake is increased/decreased by the difference between
    * previous registering amount and current registering amount
    *
    * In case stakeholders would like to update their registering amount, they are still rewarded
    * for the period between previous and current registering timestamps
    *
    * Emits an {Register} event
    */
    function register (uint256 _amount, uint256 _optionId) public onlyActiveListing {
        require(options[_optionId]._isSet, "Listing: Option not available");

        StakingModel storage chosenStake = stakings[_optionId][msg.sender];
        require(_amount != chosenStake._amount, "Listing: Stake unchanged!");

        uint256 callerBalance = Token(tokenContract).balanceOf(msg.sender);
        require(callerBalance >= _amount, "Listing: Insufficient balance!");

        if (chosenStake._amount != 0) {
            claimReward(_optionId);
        }

        bool stakeIncreased = _amount > chosenStake._amount;
        uint256 difference = stakeIncreased ? _amount.sub(chosenStake._amount) : chosenStake._amount.sub(_amount);

        if (stakeIncreased) {
            chosenStake._amount = chosenStake._amount.add(difference);
            options[_optionId]._totalStake = options[_optionId]._totalStake.add(difference);
            totalStake = totalStake.add(difference);
        } else {
            chosenStake._amount = chosenStake._amount.sub(difference);
            options[_optionId]._totalStake = options[_optionId]._totalStake.sub(difference);
            totalStake = totalStake.sub(difference);
        }

        chosenStake._start = block.timestamp;
        chosenStake._active = true;
        Token(tokenContract).triggerRegisterEvent(msg.sender, _amount, _optionId);
    }
    /**
    * @dev User can unregister their previous stake
    * 
    * Staking status should be active (stakeholder hasnt unregistered)
    *
    * Users cant register for inactive listing
    *
    * Staking info is reset to initial status
    *
    * `_optionId` is the option which user would like to unregister
    *
    * Stakeholders are rewarded for the period between registering and unregistering timestamps
    *
    * Both listing total stake and option total stake is decreased by `_amount`
    * Emits an {Unregister} event
    */
    function unregister(uint256 _optionId) public onlyActiveListing {
        StakingModel storage chosenStake = stakings[_optionId][msg.sender];

        require(chosenStake._active, "Listing: Register first!");

        if (chosenStake._amount != 0) {
            claimReward(_optionId);
        }

        options[_optionId]._totalStake = options[_optionId]._totalStake.sub(chosenStake._amount);

        totalStake = totalStake.sub(chosenStake._amount);

        chosenStake._amount = 0;
        chosenStake._active = false;
        chosenStake._start = 0;

        Token(tokenContract).triggerUnregisterEvent(msg.sender, _optionId);
    }

    /**
    * @dev Stakeholder reward formula
    * 
    * T    = TS * 100 / LV
    * RTd  = DA * T%
    * Ar   = ((RTd * 100 / Ap) / At) * Ax
    * Rm   = Ar * Sd

    *   T(%)      : Percentage for total token rewarding (less or equal than 86)
    *               If listing is forfeited, T is less or equal than 50
    *   TS        : Total tokens staked for the listing
    *   LV        : Listing value
    *   RTd       : Total tokens for rewarding daily for ALL stakeholder (daily avaiable tokens for claiming)
    *   DA        : Daily Payment
    *   Ap(%)     : Reward percentage value for the chosen option
    *   At(tokens): The total staked amount for an option from ALL stakeholders
    *   Ax(tokens): The staked amount for an option from the calling stakeholder (msg.sender)
    *   Ar(tokens): Available daily tokens for claiming for ONE stakeholder for one option
    *   Sd(seconds): Staked time (difference in stake start and block.timestamp)
    *   Rm(tokens): The reward for a stakeholder after a period of time
    */
    function calculateStakeholderReward (uint256 _optionId, StakingModel storage _userStake) private view returns (uint256) {
        uint256 T = totalStake.mul(100).div(value);
        if (T > 86) {
            T = 86;
        }

        if (ownership < block.timestamp && T > 50) {
            T = 50;
        }

        uint256 RTd = dailyPayment.mul(T).div(100);

        OptionModel memory optionInfo = options[_optionId];

        uint256 Ar = (RTd.mul(optionInfo._reward).div(100)).mul(_userStake._amount).div(optionInfo._totalStake);

        uint256 Sd = block.timestamp.sub(_userStake._start);

        return (Ar.mul(Sd)).div(86400);
        
    }

    /**
     * @dev Modifier, making sure the current listing is active to proceed further logic
     */
    modifier onlyActiveListing() {
        (, bool _active) = Token(tokenContract).listingStatus(address(this));

        require(_active, "Listing: Inactive listing!");
        _;
    }

}