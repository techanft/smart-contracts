// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./ANFTV2.sol";
import "hardhat/console.sol";

contract ListingState {

    address public owner;
    address public validator;
    address public tokenContract;
    uint256 public ownership;
    uint256 public value;
    uint256 public dailyPayment;
    mapping (address => bool) public workers;

    struct OptionModel {
        uint256 _totalStake;
        uint256 _reward;
        bool _isSet;
    }
    mapping (uint => OptionModel) public options;

    function setupOptionReward (uint256 _optionId, uint256 _reward) public onlyValidator {
        require(_reward <= 100, "Listing: Invalid reward value");
        options[_optionId]._reward = _reward;
        options[_optionId]._isSet = true;
    }   
    
    function updateOwner (address _newOwner) public onlyValidator {
        require(ownership < block.timestamp, "Ownership not expired!");
        owner = _newOwner;
    }
    
    function updateValue (uint256 _value) public onlyValidator {
        value = _value;
    }

    function updateDailyPayment (uint256 _dailyPayment) public onlyValidator {
        dailyPayment = _dailyPayment;
    }
    
    function updateValidator (address _validator) public onlyValidator {
        validator = _validator;
    }
    
    modifier onlyValidator() {
        require(msg.sender == validator, "Listing: Unauth!");
        _;
    }

    modifier onlyActiveListing() {
        (, bool _active) = ANFTV2(tokenContract).listingStatus(address(this));

        require(_active, "Listing: Inactive listing!");
        _;
    }
    
}

contract ListingV2 is ListingState {

    using SafeMath for uint;

    struct StakingModel {
        uint256 _start;
        uint256 _amount;
        bool _active;
    }
    mapping (uint256 => mapping (address => StakingModel)) public stakings;

    uint256 public rewardPool;

    uint256 public totalStake;

    constructor(address _validator, address _owner) {
        owner = _owner;
        validator = _validator;
        ownership = block.timestamp;
        tokenContract = msg.sender;
    }
 
    event OwnershipExtension (address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount);

    // Must be an owner to extend listing ownership, or the ownership value is in the past (current owner forfeits ownership).
    // In the forfeit case, new sender will be the new owner, and new ownership is present + added up time amount
    function extendOwnership (uint256 _amount) public {
        require(msg.sender == owner || ownership <  block.timestamp, "Listing: Unauth!");
        
        ANFTV2(tokenContract).handleListingTx(msg.sender, _amount, true);

        uint256 existingOwnership = ownership;
        address existingOwner = owner;
        
        if (existingOwnership < block.timestamp) {
            owner = msg.sender;
            existingOwnership = block.timestamp;
        }

        rewardPool = rewardPool.add(_amount);
        uint256 credDays = _amount.div(dailyPayment);
        
        ownership = existingOwnership.add(credDays.mul(86400));
        emit OwnershipExtension(existingOwner, owner, existingOwnership, ownership, _amount);

    }

    event Withdraw (address _stakeholder, uint256 _value, uint256 _at);

    function withdraw() public {
        require(msg.sender == owner, "Listing: Unauth!");
        require(ownership >= block.timestamp, "Listing: Ownership expired!");

        uint256 credTS = ownership - block.timestamp;
        uint256 daysLeft = credTS.div(86400);
        uint256 valueToReturn = daysLeft.mul(dailyPayment);
        ANFTV2(tokenContract).handleListingTx(msg.sender, valueToReturn, false);

        rewardPool = rewardPool.sub(valueToReturn);
        ownership = block.timestamp;
    }

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

        uint256 stakedDays = (block.timestamp - _userStake._start) / 86400;

        uint amountToReturn = Ar.mul(stakedDays);

        return amountToReturn;
    }

    event Claim(address _stakeholder, uint256 _reward, uint256 _from, uint256 _to);
    
    function claimReward (uint256 _optionId) public {
        StakingModel storage userStake = stakings[_optionId][msg.sender];

        require(userStake._active, "Listing: Register first!");
        uint256 callerBalance = ANFTV2(tokenContract).balanceOf(msg.sender);
        require(callerBalance >= userStake._amount, "Listing: Insufficient balance!");

        uint256 payoutAmount = calculateStakeholderReward(_optionId, userStake);

        ANFTV2(tokenContract).handleListingTx(msg.sender, payoutAmount, false);

        emit Claim(msg.sender, payoutAmount, userStake._start, block.timestamp);  

        userStake._start = block.timestamp;
        rewardPool = rewardPool.sub(payoutAmount);              
    }

    event Register(address _stakeholder, uint256 _amount, uint256 _optionId, uint256 _start);
    
    function register (uint256 _amount, uint256 _optionId, bool _increase) public onlyActiveListing {
        require(options[_optionId]._isSet, "Listing: Option not available");
        uint256 callerBalance = ANFTV2(tokenContract).balanceOf(msg.sender);
        require(callerBalance >= _amount, "Listing: Insufficient balance!");

        StakingModel storage userStake = stakings[_optionId][msg.sender];

        userStake._amount = _increase ? userStake._amount.add(_amount) : userStake._amount.sub(_amount);
        userStake._start = block.timestamp;
        userStake._active = true;

        options[_optionId]._totalStake = options[_optionId]._totalStake.add(_amount);
  
        totalStake = totalStake.add(_amount);

        emit Register(msg.sender, _amount, _optionId, block.timestamp);
    }


    event Unregister(address _stakeholder, uint _at);

    function unregister(uint256 _optionId) public onlyActiveListing {
        StakingModel storage userStake = stakings[_optionId][msg.sender];

        require(userStake._active, "Listing: Register first!");

        options[_optionId]._totalStake = options[_optionId]._totalStake.sub(userStake._amount);

        totalStake = totalStake.sub(userStake._amount);

        userStake._amount = 0;
        userStake._active = false;
        userStake._start = 0;

        emit Unregister(msg.sender, block.timestamp);
    }

    event UpdateWorker(address _worker, bool _isAuthorized);
    function updateWorker(address _worker) public {
        require(msg.sender == owner, "Listing: Unauth!");
        require(ownership >= block.timestamp, "Listing: Ownership expired");
        workers[_worker] = !workers[_worker];
        emit UpdateWorker(_worker, workers[_worker]);
    }




}