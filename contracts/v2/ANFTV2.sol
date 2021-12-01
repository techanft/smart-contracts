// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ListingV2.sol";

contract ANFTV2 is ERC20, AccessControl {
    /**
     * @dev Validators are authorized accounts to handle listing
     */
    bytes32 public constant VALIDATOR = keccak256("VALIDATOR");

    /**
     * @dev The funds address for paying out rewards and receiving payments
     */
    address public stakingAddress;

    /**
     * @dev A listing address must be both `_isCreated` and `_active` to be able to operate.
     * Otherwise malicious accounts can call handleListingTx functions
     *
     * The `_isCreated` property is immutable. It's remains true with the addresses of listings 
     * created by the validator,
     *
     * The `_active` property is mutable by the validators.
     */
    struct ListingStatusModel {
        bool _isCreated;
        bool _active;
    }
    mapping (address => ListingStatusModel) public listingStatus;

    /**
     * @dev Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR
     * Staking address is set here
     */
    constructor(address _stakingAddr) ERC20("ANFT Token", "ANFT") {
        _mint(msg.sender, 1232000000 * 10 ** decimals());
        stakingAddress = _stakingAddr;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(VALIDATOR, msg.sender);
    }

    /**
     * @dev Handle transactions from listings and only from listings
     * 
     * If `_in` is true, _amount will be transfered from `_userAddr` to staking address
     * Otherwise, `_amount` will be transfered from staking address to `_userAddr`
     *
     * Returns true if the transation is success
     *
     * Emits a {Transfer} event from IERC20
     */
    function handleListingTx (address _userAddr, uint256 _amount, bool _in) external returns (bool) {
        require(listingStatus[msg.sender]._isCreated, "ANFTV2: Invalid Listing");
        require(listingStatus[msg.sender]._active, "ANFTV2: Inactive Listing");
        address sender;
        address recipient;
        (sender, recipient) = _in ? (_userAddr, stakingAddress) : (stakingAddress, _userAddr);
        super._transfer(sender, recipient, _amount);
        return true;
    }

    /**
     * @dev Create a new listing (the tokenized version of a real estate product)
     * 
     * Restricted to only validators
     *
     * A newly created listing is set with two properties: `_isCreated` and `_active`
     *
     * Listing validator shall be the validator address making the transaction. Owner of the listing shall be
     * the specified address
     * 
     * Emits a {ListingCreation} event
     */
    function createListing(address _owner) public {
        require(hasRole(VALIDATOR, msg.sender), "ANFTV2: Unauthorized");
        ListingV2 newListing = new ListingV2(msg.sender, _owner);
        emit ListingCreation(msg.sender, _owner, address(newListing));    
        listingStatus[address(newListing)]._isCreated = true;    
        listingStatus[address(newListing)]._active = true;    
    }

    /**
     * @dev Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation
     *
     * Restricted to only validators
     *
     * The `_listingAddr` must be the address of a created listing
     * 
     */
    function toggleListingStatus (address _listingAddr) public {
        require(hasRole(VALIDATOR, msg.sender), "ANFTV2: Unauthorized");
        require(listingStatus[_listingAddr]._isCreated, "ANFTV2: Invalid Listing");
        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;
    }

    /**
     * @dev Update the funds address. Shall be handy if there's a need in changing the initial address,
     * or the previous address is compromised.
     */    
    function updateStakingAddress (address _stakingAddr) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "ANFTV2: Unauthorized");
        stakingAddress = _stakingAddr;
        emit UpdateStakingAddr(_stakingAddr);
    }

    /**
     * @dev Emitted a new Listing is created. `_validator` should be the caller, 
     * `_owner` should be the specified address and `_listingAddress` is the
     * newly created listing address
     */
    event ListingCreation(address _validator, address _owner, address _listingAddress);

    /**
     * @dev Emitted when the staking address is updated, `_stakingAddr` should be the new address 
     */
    event UpdateStakingAddr(address _stakingAddr);
}

