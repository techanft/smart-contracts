// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./Token.sol";

contract TestUpgrade is Token {
    uint256 private version;

    function getVersion () public view returns (uint256)  {
        return version;
    }

    function setVersion (uint256 _ver) public {
        version = _ver;
    }
}