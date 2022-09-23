// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./ERC20Upgradeable.sol";
import "./Listing.sol";

contract Token is Initializable, ERC20Upgradeable, AccessControlUpgradeable, UUPSUpgradeable {

    /**
     * @dev Validators are authorized accounts to handle listing
     */
    bytes32 public constant VALIDATOR = keccak256("VALIDATOR");

    /**
     * @dev Burners are authorized accounts to burn tokens from their own accounts
     */
    bytes32 public constant BURNER = keccak256("BURNER");

    /**
     * @dev Minters are authorized accounts to mint tokens
     */
    bytes32 public constant MINTER = keccak256("MINTER");

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
     * @dev Initial token distribution addresses according to whitepaper (page 11/24)
     * https://anft.vn/assets/file/ANFTWhitepaperVer1.0.pdf
     */
    address public PLATFORM_DEVELOPMENT;
    address public COMMUNITY;
    address public REAL_ESTATE_SERVICE;
    address public ETF;
    address public REGULATION_FUNDS;

    /**
     * @dev Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR
     * Staking address is set here
     * 
     * Initial token distribution addresses are also set here since variables can't be initialized outsize 
     * {initialize} function
     *
     * After deployment, {DEFAULT_ADMIN_ROLE} address should be moved to an multisign address and
     * the contract deployer shall renounce {DEFAULT_ADMIN_ROLE}
     */

    function initialize(address _stakingAddr) external initializer {
        require(_stakingAddr != address(0), "Token: Invalid _stakingAddr");

        __UUPSUpgradeable_init();
        __AccessControl_init();
        __ERC20_init("ANFT Token", "ANFT");

        uint256 totalSuppy = 1_232_000_000 * 10 ** decimals();

        PLATFORM_DEVELOPMENT = 0xb3F5E20db0167d4A5B5C5DaAd6f1c76Cc40cC52D;
        COMMUNITY = 0x6b3887eB6091cC705ffA6E32e22B5524b3A9BEa4;
        REAL_ESTATE_SERVICE = 0x33aE0695fB3250F0788510B289d26309d4B8f939;
        ETF = 0xf5d2f60663D83ABf28969F2A5F501178D8D64bAa;
        REGULATION_FUNDS = 0x9F1660B7184Bde8b8973c6618AC3D7D306e8a796;

        _mint(PLATFORM_DEVELOPMENT,  totalSuppy * 14 / 100);
        _mint(COMMUNITY,  totalSuppy * 34 / 100);
        _mint(REAL_ESTATE_SERVICE,  totalSuppy * 32 / 100);
        _mint(ETF,  totalSuppy * 8 / 100);
        _mint(REGULATION_FUNDS,  totalSuppy * 12 / 100);

        stakingAddress = _stakingAddr;
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(DEFAULT_ADMIN_ROLE)
    {}

    /**
     * @dev Handle transactions from listings and only from listings
     * 
     * If `_in` is true, _amount will be transfered from `_userAddr` to `stakingAddress`
     * Otherwise, `_amount` will be transfered from `stakingAddress` to `_userAddr`
     *
     * Returns true if the transation is success
     *
     * Emits a {Transfer} event from IERC20
     */
    function handleListingTx (address _userAddr, uint256 _amount, bool _in)  external onlyValidListing returns (bool) {
        require(_userAddr != address(0), "Token: Invalid _userAddr");
        address sender;
        address recipient;
        (sender, recipient) = _in ? (_userAddr, stakingAddress) : (stakingAddress, _userAddr);
        bool success = super._transfer(sender, recipient, _amount);
        require(success, "Token: Unsuccessful transfer");
        return true;
    }

    /**
     * @dev Create a new listing (the tokenized version of a real estate product)
     * 
     * Restricted to only validators
     *
     * A newly created listing is set with two properties: `_isCreated` and `_active`
     *
     * Listing's validator is the validator address making the transaction. The validator must
     * specify the address of listing's owner
     * 
     * Emits a {ListingCreation} event
     */
    function createListing(address _owner, uint256 _listingId) external {
        require(hasRole(VALIDATOR, _msgSender()), "Token: Unauthorized");
        require(_owner != address(0), "Token: Invalid _owner");
        Listing newListing = new Listing(_msgSender(), _owner, _listingId);
        emit ListingCreation(_msgSender(), _owner, address(newListing));    
        listingStatus[address(newListing)]._isCreated = true;    
        listingStatus[address(newListing)]._active = true;    
    }

    /**
     * @dev Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation
     *
     * Restricted to only the validator of the listing or DEFAULT_ADMIN_ROLE
     *
     * The `_listingAddr` must be the address of a created listing
     * 
     */
    function toggleListingStatus (address _listingAddr) external {
        require(listingStatus[_listingAddr]._isCreated, "Token: Invalid Listing");
        address listingValidator = Listing(_listingAddr).validator();
        require(listingValidator == _msgSender() || hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Token: Unauthorized");
        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;
    }

    /**
     * @dev Update the funds address. Shall be handy if there's a need in changing the initial address,
     * or the previous address is compromised.
     */    
    function updateStakingAddress (address _stakingAddr) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Token: Unauthorized");
        require(_stakingAddr != address(0), "Token: Invalid _stakingAddr");
        stakingAddress = _stakingAddr;
        emit UpdateStakingAddr(_stakingAddr);
    }

    /**
     * @dev In case a validator's key is compromised, {DEFAULT_ADMIN_ROLE} 
     * is able to update listing's validator
     */    
    function emergencyUpdateListingValidator (address _listingAddr, address _newValidator) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Token: Unauthorized");
        require(listingStatus[_listingAddr]._isCreated, "Token: Invalid Listing");
        Listing(_listingAddr).updateValidator(_newValidator);
    }

    /**
     * @dev Destroys `amount` tokens from the authorized caller's balance
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) external onlyRole(BURNER) {
        _burn(_msgSender(), amount);
    }

    /**
     * @dev Mints `amount` tokens for the authorized caller's balance
     *
     * See {ERC20-_mint}.
     */

    function mint(address to, uint256 amount) external onlyRole(MINTER) {
        _mint(to, amount);
    }

    /**
     * @notice The below functions are to trigger listing events.
     * Important {Listing} events can be "listened" centrally inside this {Token} contract.
     * Clients can subscribe to every event in {Listing} contracts in this {Token} contract.
     * (Originally events are emitted from separated {Listing} contracts, but that would be impossible 
     * for clients to subscribe for every change from different listings)
     */    
    function triggerUpdateListingValueEvent(uint _value) external onlyValidListing {
        emit UpdateValue(_msgSender(), _value);
    }

    function triggerUpdatePaymentEvent(uint _payment) external onlyValidListing {
        emit UpdateDailyPayment(_msgSender(), _payment);
    }

    function triggerUpdateWorkerEvent(address _worker, bool _isAuthorized) external onlyValidListing {
        emit UpdateWorker(_msgSender(), _worker, _isAuthorized);
    }

    function triggerOwnershipExtensionEvent(address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount) external onlyValidListing {
        emit OwnershipExtension(_msgSender(), _prevOwner, _newOwner, _start, _end, _amount);
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

    function triggerUpdateOptionRewardEvent(uint256 _optionId, uint256 _reward) external onlyValidListing {
        emit UpdateOptionReward(_msgSender(), _optionId, _reward);
    }

    function triggerUpdateListingIdEvent(uint256 _prevId, uint256 _newId) external onlyValidListing {
        emit UpdateListingId(_msgSender(), _prevId, _newId);
    }

    function triggerUpdateOwnerEvent(address _prevOwner, address _newOwner) external onlyValidListing {
        emit UpdateOwner(_msgSender(), _prevOwner, _newOwner);
    }

    function triggerUpdateValidatorEvent(address _prevValidator, address _newValidator) external onlyValidListing {
        emit UpdateValidator(_msgSender(), _prevValidator, _newValidator);
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
     * separated contracts to this token contract, so that we can "listen" to listing events in a centralized place
     */
    
    /**
     * @dev Emitted when the worker status of a listing is updated.
     *
     * `_worker` is the updated address, `_isAuthorized` is the new status
     */
    event UpdateWorker(address _listing, address _worker, bool _isAuthorized);

    /**
     * @dev Emitted when the validator update listing's value
     *
     * `_value` is the new listing value
     */
    event UpdateValue (address _listing, uint256 _value);

    /**
     * @dev Emitted when the validator update listing's daily payment
     *
     * `_payment` is the previous listing daily payment
     */
    event UpdateDailyPayment (address _listing, uint256 _payment);

    /**
     * @dev Emitted when the owner extends ownership with a listing
     *
     * `_prevOwner` is the previous owner address
     * `_newOwner` is the new owner address
     * `_start` is the existing ownership
     * `_end` is when the ownership ends
     * `_amount` is the transfered amount
     */
    event OwnershipExtension (address _listing, address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount);

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

    /** @dev Emitted when a listing's validator update option reward
     *
     * `_optionId` is the updated option
     * `_reward` is the reward value
     */
    event UpdateOptionReward(address _listing, uint256 _optionId, uint256 _reward);
    
    /** @dev Emitted when a listing's validator update listing's ID
     *
     * `_prevId` is the previous id
     * `_newId` is the new id
     */
    event UpdateListingId(address _listing, uint256 _prevId, uint256 _newId);

    /** @dev Emitted when a listing's validator update listing's owner
     *
     * `_prevOwner` is the previous owner
     * `_newOwner` is the new owner
     */
    event UpdateOwner(address _listing, address _prevOwner, address _newOwner);

    /** @dev Emitted when a listing's validator is updated
     *
     * `_prevValidator` is the previous validator
     * `_newValidator` is the new validator
     */
    event UpdateValidator(address _listing, address _prevValidator, address _newValidator);

}
