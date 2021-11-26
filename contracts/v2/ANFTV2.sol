// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "./ListingV2.sol";
import "hardhat/console.sol";


contract ANFTV2 is ERC20, AccessControl {
    
    event ListingCreation(address _validator, address _owner, address _listingAddress);

    bytes32 public constant VALIDATOR = keccak256("VALIDATOR");

    address public stakingAddress;

    struct ListingStatusModel {
        bool _isCreated;
        bool _active;
    }
    
    mapping (address => ListingStatusModel) public listingStatus;

    constructor(address _stakingAddress) ERC20("ANFT Token", "ANFT") {
        _mint(msg.sender, 1232000000 * 10 ** decimals());
        stakingAddress = _stakingAddress;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(VALIDATOR, msg.sender);
    }

    function handleListingTx (address _userAddress, uint256 _amount, bool _in) external {
        require(listingStatus[msg.sender]._isCreated, "ANFTV2: Invalid Listing");
        require(listingStatus[msg.sender]._active, "ANFTV2: Inactive Listing");
        address sender;
        address recipient;
        (sender, recipient) = _in ? (_userAddress, stakingAddress) : (stakingAddress, _userAddress);
        super._transfer(sender, recipient, _amount);
    }
    

    function createListing(address _owner) public {
        require(hasRole(VALIDATOR, msg.sender), "ANFTV2: Unauthorized");
        ListingV2 newListing = new ListingV2(msg.sender, _owner);
        emit ListingCreation(msg.sender, _owner, address(newListing));    
        listingStatus[address(newListing)]._isCreated = true;    
        listingStatus[address(newListing)]._active = true;    
    }

    function toggleListingStatus (address _listingAddr) public {
        require(hasRole(VALIDATOR, msg.sender), "ANFTV2: Unauthorized");
        require(listingStatus[_listingAddr]._isCreated, "ANFTV2: Invalid Listing");
        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;
    }

    // Able to set up listing address
    // Able to disable listing status

    

    
    
    
    
}

