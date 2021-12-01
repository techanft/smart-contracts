// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Interface of the ANFT Token
 */

 interface IANFT is IERC20 {
    /**
     * @dev Handle transactions from listings and only from listings
     * 
     * If `_in` is true, _amount will be transfered from `_userAddr` to staking address
     * Otherwise, `_amount` will be transfered from staking address to `_userAddr`
     *
     * Emits a {Transfer} event from IERC20
     */
    function handleListingTx (address _userAddr, uint256 _amount, bool _in) external;

    /**
     * @dev Create a new listing (the tokenized version of a real estate product)
     * 
     * Emits a {ListingCreation} event
     */
    function createListing(address _owner) external ;

    /**
     * @dev Toggle listing status. Shall be handy if there's a listing no longer in operation
     */
    function toggleListingStatus(address _listingAddr) external;

    /**
     * @dev Update staking address. Shall be handy if there's a need in changing the staking address,
     * or the previous address is compromised.
     */
    function updateStakingAddress (address _stakingAddr) external;

    /**
     * @dev Emitted a new Listing is created. `_validator` should be the caller, 
     * `_owner` should be the specified address and `_listingAddress` is the
     * newly created listing address
     */
    event ListingCreation(address _validator, address _owner, address _listingAddress);

    /**
     * @dev Emitted when the staking address is updated, `_stakingAddr` should be the new address 
     * `_owner` should be the specified address and `_listingAddress` is the
     * newly created listing address
     */
    event UpdateStakingAddr(address _stakingAddr);

 }