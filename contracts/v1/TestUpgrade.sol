// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./Token.sol";

contract TestUpgrade is Token {
    uint256 private version;

    function getVersion () external view returns (uint256)  {
        return version;
    }

    function setVersion (uint256 _ver) external {
        version = _ver;
    }
}