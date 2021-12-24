// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./Listing.sol";

contract Token is Initializable, ERC20Upgradeable, AccessControlUpgradeable, UUPSUpgradeable {

    /**
     * @dev Validators are authorized accounts to handle listing
     */
    bytes32 public constant VALIDATOR = keccak256("VALIDATOR");

    /**
     * @dev The funds address for paying out rewards and receiving payments
     */
    address public stakingAddress;

    /**
     * @dev Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR
     * Staking address is set here
     */

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

    function initialize(address _stakingAddr) public initializer {

        __UUPSUpgradeable_init();
        __AccessControl_init();
        __ERC20_init("ANFT Token", "ANFT");

        _mint(_msgSender(),  1232000000 * 10 ** decimals());
        stakingAddress = _stakingAddr;
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(VALIDATOR, _msgSender());
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(DEFAULT_ADMIN_ROLE)
    {}

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
    function handleListingTx (address _userAddr, uint256 _amount, bool _in)  external onlyValidListing returns (bool) {
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
    function createListing(address _owner, uint256 _listingId) public {
        require(hasRole(VALIDATOR, _msgSender()), "Token: Unauthorized");
        Listing newListing = new Listing(_msgSender(), _owner, _listingId);
        emit ListingCreation(_msgSender(), _owner, address(newListing));    
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
        require(hasRole(VALIDATOR, _msgSender()), "Token: Unauthorized");
        require(listingStatus[_listingAddr]._isCreated, "Token: Invalid Listing");
        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;
    }

    /**
     * @dev Update the funds address. Shall be handy if there's a need in changing the initial address,
     * or the previous address is compromised.
     */    
    function updateStakingAddress (address _stakingAddr) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Token: Unauthorized");
        stakingAddress = _stakingAddr;
        emit UpdateStakingAddr(_stakingAddr);
    }

    /**
     * @notice The below functions are to trigger listing events
     */    
    function triggerUpdateWorkerEvent(address _worker, bool _isAuthorized) external onlyValidListing {
        emit UpdateWorker(_msgSender(), _worker, _isAuthorized);
    }

    function triggerOwnershipExtensionEvent(address _prevOwner, address _newOwner, uint256 _start, uint256 _end) external onlyValidListing {
        emit OwnershipExtension(_msgSender(), _prevOwner, _newOwner, _start, _end);
    }

    function triggerWithdrawEvent(address _owner, uint256 _amount, uint256 _initOwnership, uint256 _newOwnership) external onlyValidListing {
        emit Withdraw(_msgSender(), _owner, _amount, _initOwnership, _newOwnership);
    }

    function triggerClaimEvent(address _stakeholder, uint256 _reward, uint256 _from, uint256 _to) external onlyValidListing {
        emit Claim(_msgSender(), _stakeholder, _reward, _from, _to);
    }

    function triggerRegisterEvent(address _stakeholder, uint256 _amount, uint256 _optionId) external onlyValidListing {
        emit Register(_msgSender(), _stakeholder, _amount, _optionId);
    }

    function triggerUnregisterEvent(address _stakeholder, uint256 _optionId) external onlyValidListing {
        emit Unregister(_msgSender(), _stakeholder, _optionId);
    }

     /**
     * @dev Modifier, making sure the listing caller is a valid listing
     */
    modifier onlyValidListing() {
        require(listingStatus[_msgSender()]._isCreated, "Token: Invalid Listing");
        require(listingStatus[_msgSender()]._active, "Token: Inactive Listing");
        _;
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

    /**
     * @notice Below are events triggered from individual listing contract. These events are off-loaded from
     * separated contracts to this token contract, so that we can "listen" to listing events in one place
     */
    
    /**
     * @dev Emitted when the worker status of a listing is updated.
     *
     * `_worker` is the updated address, `_isAuthorized` is the new status
     */
    event UpdateWorker(address _listing, address _worker, bool _isAuthorized);

    /**
     * @dev Emitted when the owner extends ownership with a listing
     *
     * `_prevOwner` is the previous owner address
     * `_newOwner` is the new owner address
     * `_start` is the existing ownership
     * `_end` is when the ownership ends
     * `_amount` is the transfered amount
     */
    event OwnershipExtension (address _listing, address _prevOwner, address _newOwner, uint256 _start, uint256 _end);

    /**
     * @dev Emitted when the owner withdraws tokens (forfeit ownership for a listing)
     *
     * `owner` is the owner withdrawing
     * `_amount` is the amount to return to the owner
     * `_initOwnership` is the initial ownership value
     * `_newOwnership` is the updated ownership value
     */
    event Withdraw (address _listing, address owner, uint256 _amount, uint256 _initOwnership, uint256 _newOwnership);

    /** @dev Emitted when an user claiming rewards
     *
     * `_stakeholder` is the stakeholder 
     * `_reward` is the reward amount
     * `_from` -> `_to` is the staking period of time
     */
    event Claim(address _listing, address _stakeholder, uint256 _reward, uint256 _from, uint256 _to);

    /** @dev Emitted when an user registers for claiming rewards
     *
     * `_stakeholder` is the stakeholder 
     * `_amount` is the registered amount
     * `_optionId` is the chosen option
     */
    event Register(address _listing, address _stakeholder, uint256 _amount, uint256 _optionId);

    /** @dev Emitted when an user unregisters for claiming rewards
     *
     * `_stakeholder` is the stakeholder 
     * `_optionId` is the unregistered option
     */
    event Unregister(address _listing, address _stakeholder, uint256 _optionId);


}
