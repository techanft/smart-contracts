// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "hardhat/console.sol";

contract Staking {
    using SafeMath for uint;
    address payable public stakingAddress;
    event Stake(uint256 _stakingIndex);
    
    struct ProgramModel {
        uint256 _minimum;
        uint256 _apy;
    }
    mapping (address => ProgramModel) public listingPrograms;
    
    uint256 public stakingIndex;
    
    // Staking list for each listing
    struct StakingModel {
        address _stakeholder;
        address _listing;
        uint256 _start;
        uint256 _end;
        uint256 _amount;
        uint256 _apy;
        bool _active;
    }
    mapping (uint256 => StakingModel) public stakings;
    
    // Pool status for each listing
    struct LisingStakingModel {
        uint256 _stakingPool;
        uint256 _rewardingPool;
        uint256 _ownerSupply;
    }
    mapping (address => LisingStakingModel) public listingStakingInfo; 
    function _setStakingAddress (address payable _stakingAddress) internal virtual {
        stakingAddress = _stakingAddress;
    }
    
    function _stake(uint256 _value, address _listingAddress, uint256 _end) internal virtual {
        ProgramModel memory listingProgram  = listingPrograms[_listingAddress];
        
        StakingModel memory newStake = StakingModel({
            _stakeholder : msg.sender,
            _start : block.timestamp,
            _listing : _listingAddress,
            _end : _end,
            _amount : _value,
            _apy : listingProgram._apy,
            _active : true
        });        
        
        stakings[stakingIndex] = newStake;
        
        uint256 rewardToAdd = calculateReward(newStake);
        
        listingStakingInfo[_listingAddress]._stakingPool = listingStakingInfo[_listingAddress]._stakingPool.add(_value);
        
        listingStakingInfo[_listingAddress]._rewardingPool = listingStakingInfo[_listingAddress]._rewardingPool.add(rewardToAdd);
        
        emit Stake(stakingIndex);
        
        stakingIndex++;
    }
    
    function _supplyRewardPool(uint256 _value, address _listingAddress) internal virtual {  
        listingStakingInfo[_listingAddress]._ownerSupply = listingStakingInfo[_listingAddress]._ownerSupply.add(_value);
    }
    
    
    function _claimReward(uint256 _stakingIndex) internal virtual returns(uint256) {
        StakingModel storage stakingRecord = stakings[_stakingIndex];
        
        require(stakingRecord._stakeholder == msg.sender, "Staking: Unauthorized!");
        require(stakingRecord._active, "Staking: Reward claimed");
        // require(stakingRecord._end <= block.timestamp, "Staking: Comeback to claim later");
        
        uint256 reward = calculateReward(stakingRecord);
        require(listingStakingInfo[stakingRecord._listing]._ownerSupply >= reward, "Rewarding pool requires more supply!");
        
        stakingRecord._active = false;

        listingStakingInfo[stakingRecord._listing]._stakingPool = listingStakingInfo[stakingRecord._listing]._stakingPool.sub(stakingRecord._amount);
        listingStakingInfo[stakingRecord._listing]._rewardingPool = listingStakingInfo[stakingRecord._listing]._rewardingPool.sub(reward);
        listingStakingInfo[stakingRecord._listing]._ownerSupply = listingStakingInfo[stakingRecord._listing]._ownerSupply.sub(reward);

        return reward.add(stakingRecord._amount);
    }
    
    function calculateReward(StakingModel memory stakingRecord) private pure returns (uint256) {
        uint256 stakingDays = (stakingRecord._end).sub(stakingRecord._start).div(86400);
        uint256 reward = stakingRecord._amount.mul(stakingRecord._apy).div(100).div(365).mul(stakingDays);
        return reward;
    }
    
}