// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Listing.sol";
import "./Staking.sol";
import "hardhat/console.sol";


contract ANFTToken is ERC20, Ownable, Staking {
    
    event ListingCreated(address _validator, address _owner, uint256 _value, address _listingAddress);
    
    constructor(address payable _stakingAddress) ERC20("ANFT Token", "ANFT") {
        _mint(msg.sender, 1232000000 * 10 ** decimals());
        _setStakingAddress(_stakingAddress);
    }
    
    function createListing(address _owner, uint256 _value, uint256 _minimum, uint256 _apy) public onlyOwner {
        Listing newListing = new Listing(msg.sender, _owner, _value);
        emit ListingCreated(msg.sender, _owner, _value, address(newListing));
        
        listingPrograms[address(newListing)]._minimum = _minimum;
        listingPrograms[address(newListing)]._apy = _apy;
    }
    
    function stake(uint256 _value, address _listingAddress, uint256 _end) public {
        require(_end - block.timestamp >= listingPrograms[_listingAddress]._minimum, "ANFTToken: Choose a longer staking period");
        super._transfer(msg.sender, stakingAddress, _value);
        super._stake(_value, _listingAddress, _end);
    }
    
    function supplyRewardPool(uint256 _value, address _listingAddress) public payable {
        super._transfer(msg.sender, stakingAddress, _value);
        super._supplyRewardPool(_value, _listingAddress);
    }

    function claimReward(uint256 _stakingIndex) public  {
        uint256 totalReward = _claimReward(_stakingIndex);
        super._transfer(stakingAddress, msg.sender, totalReward);
    }
}

