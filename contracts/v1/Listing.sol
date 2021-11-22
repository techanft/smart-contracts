// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract Listing {
    using SafeMath for uint;

    address public owner;
    address public validator;
    address public tokenContract;
    uint256 public value;
    uint256 public retentionRate = 1;
    uint256 public ownership;

    // mapping(address => uint) public stakers;
    
    constructor(address _validator, address _owner, uint256 _value) {
        owner = _owner;
        value = _value;
        validator = _validator;
        ownership = block.timestamp;
        tokenContract = msg.sender;
    }
    
    function updateOwner (address _newOwner) public onlyValidator {
        owner = _newOwner;
    }
    
    function updateValue (uint256 _value) public onlyValidator {
        value = _value;
    }

    function updateRetenionRate (uint256 _retentionRate) public onlyValidator {
        retentionRate = _retentionRate;
    }
    
    function updateValidator (address _validator) public onlyValidator {
        validator = _validator;
    }
    
    function extendOwnership(uint256 _transferedAmount) public onlyTokenContract {
        uint tokenToPayDaily = value.mul(retentionRate).div(100);
        uint creditInDays = _transferedAmount.div(tokenToPayDaily);
        ownership = ownership.add(creditInDays.mul(86400));
    }

    modifier onlyValidator() {
        require(msg.sender == validator, "Unauthorized!");
        _;
    }
    modifier onlyTokenContract() {
        require(msg.sender == tokenContract, "Unauthorized!");
        _;
    }
}