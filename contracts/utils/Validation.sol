// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

/**
 * @dev Validation contract. User send a message to the contract. The contract emits an event with the message.
 */

import "@openzeppelin/contracts/access/Ownable.sol";

contract Validation {
    event Message(address _sender, string _message);
    function sendMessage(string memory _message) public {
        emit Message(msg.sender, _message);
    }
}