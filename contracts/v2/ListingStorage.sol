// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @dev This contract stores basic configurations for a listing.
 *
 * The purpose of the this is abtract the basic getters-setters away from the staking/rewards logic
 */

contract ListingStorage {

    /**
     * @dev Owner is the address pays tokens to take/maintain the ownership for a listing
     */
    address public owner;

    /**
     * @dev Validator is the authorized account to update the listing configurations
     */
    address public validator;

    /**
     * @dev Token contract should be the contract create this listing
     */
    address public tokenContract;

    /**
     * @dev Ownership value should be in the unix timestamp, determinating if the listing is forfeited by the owner
     * (ownership < block/timestamp) and ready to be taken by another owner user.
     */
    uint256 public ownership;

    /**
     * @dev The market value of the listing in real world. Determined by the board, mutable by the validator
     */
    uint256 public value;

    /**
     * @dev Daily payment determines how long the owner has the ownership over the listing with the tokens they pay.
     */
    uint256 public dailyPayment;

    /**
     * @dev Workers are addresses authorized by the owner to use the listing in the real world
     */
    mapping (address => bool) public workers;

    /**
     * @dev Options are business activities in real world. Each options has a rewards percentage (sum up to 100);
     * Reward value for each option is set by the validator. 
     *
     * `_isSet` flag is default to false, until the option is set by the validator
     * The flag is to prevent users from participating in the activities which arent set up by the validator.
     *
     * Everytime an user participates in an activity, the `_totalStake` is increased by the registered amount
     */
    struct OptionModel {
        uint256 _totalStake;
        uint256 _reward;
        bool _isSet;
    }
    mapping (uint => OptionModel) public options;

    /**
     * @dev Option reward value is set up by and only by the validator
     * Reward should not exceed 100;
     * The sum of reward values from all options should be 100;
     * 
     * `isSet` is toggled to true for options which were setup
     *
     * For example A, B, C, D are options. Ar, Br, Cr, Dr are the reward values respectively
     * The validator should set up the option carefully, so Ar + Br + Cr + Dr = 100
     */
    function setupOptionReward (uint256 _optionId, uint256 _reward) public onlyValidator {
        require(_reward <= 100, "Listing: Invalid reward value");
        options[_optionId]._reward = _reward;
        options[_optionId]._isSet = true;
    }   
    
    /**
     * @dev Validator can update the owner value
     * Owner value can only changeable if the current owner has forfeited the listing
     */
    function updateOwner (address _newOwner) public onlyValidator {
        require(ownership < block.timestamp, "Ownership not expired!");
        owner = _newOwner;
    }
    
    /**
     * @dev Validator can update the listing value to reflect the real estate price in the real world
     */
    function updateValue (uint256 _value) public onlyValidator {
        value = _value;
    }

    /**
     * @dev Validator can update the daily payment value to reflect the real estate price in the real world
     */
    function updateDailyPayment (uint256 _dailyPayment) public onlyValidator {
        dailyPayment = _dailyPayment;
    }

    /**
     * @dev Validator can update themselves
     */
    function updateValidator (address _validator) public onlyValidator {
        validator = _validator;
    }

    /**
     * @dev Owner can update worker status. Which means they can choose/unchoose who
     * can use the listing in real world
     */
    function updateWorker(address _worker) public {
        require(msg.sender == owner, "Listing: Unauth!");
        require(ownership >= block.timestamp, "Listing: Ownership expired");
        workers[_worker] = !workers[_worker];
        emit UpdateWorker(_worker, workers[_worker]);
    }
    
    /**
     * @dev Modifier, restricting access to only the validator
     */
    modifier onlyValidator() {
        require(msg.sender == validator, "Listing: Unauth!");
        _;
    }

    /**
     * @dev Emitted when the worker status is updated.
     *
     * `_worker` is the updated address, `_isAuthorized` is the new status
     */
    event UpdateWorker(address _worker, bool _isAuthorized);
}
