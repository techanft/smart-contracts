// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Listing {
    address public owner;
    address public validator;
    uint256 public value;
    uint256 public retentionPercentage = 5;
    uint256 public ownership;
    
    // mapping(address => uint) public stakers;
    
    constructor(address _validator, address _owner, uint256 _value) {
        owner = _owner;
        value = _value;
        validator = _validator;
        ownership = block.timestamp;
    }
    
    function updateOwner (address _newOwner) public onlyValidator {
        owner = _newOwner;
    }
    
    function updateValue (uint256 _value) public onlyValidator {
        value = _value;
    }
    
    function extendOwnership(uint256 _transferedAmount) public onlyValidator {
        // A = Token to pay daily ( value / retentionPercentage)
        // B = Credit ( _transferedAmount / A)
        
        uint tokenToPayDaily = value * retentionPercentage / 100;
        uint creditInDays = _transferedAmount / tokenToPayDaily;
        ownership += creditInDays * 86400;
        // ownership += 86400 * ( _transferedAmount / (value * retentionPercentage / 100) )
    }
    
    uint256 public something;

    modifier onlyValidator() {
        require(msg.sender == validator, "Unauthorized!");
        _;
    }
}