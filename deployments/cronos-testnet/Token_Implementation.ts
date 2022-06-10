export default {
  "address": "0x8C6cebbd92035C57631ed782fE053023C9A66b30",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_stakeholder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_reward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_from",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_to",
          "type": "uint256"
        }
      ],
      "name": "Claim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_validator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listingAddress",
          "type": "address"
        }
      ],
      "name": "ListingCreation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_end",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "OwnershipExtension",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_stakeholder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_optionId",
          "type": "uint256"
        }
      ],
      "name": "Register",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_stakeholder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_optionId",
          "type": "uint256"
        }
      ],
      "name": "Unregister",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_payment",
          "type": "uint256"
        }
      ],
      "name": "UpdateDailyPayment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_prevId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newId",
          "type": "uint256"
        }
      ],
      "name": "UpdateListingId",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_optionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_reward",
          "type": "uint256"
        }
      ],
      "name": "UpdateOptionReward",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "UpdateOwner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_stakingAddr",
          "type": "address"
        }
      ],
      "name": "UpdateStakingAddr",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_prevValidator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newValidator",
          "type": "address"
        }
      ],
      "name": "UpdateValidator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "UpdateValue",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_worker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "_isAuthorized",
          "type": "bool"
        }
      ],
      "name": "UpdateWorker",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_listing",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_initOwnership",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newOwnership",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BURNER",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "COMMUNITY",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ETF",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MINTER",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PLATFORM_DEVELOPMENT",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "REAL_ESTATE_SERVICE",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "REGULATION_FUNDS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "VALIDATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_listingId",
          "type": "uint256"
        }
      ],
      "name": "createListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_listingAddr",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newValidator",
          "type": "address"
        }
      ],
      "name": "emergencyUpdateListingValidator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_in",
          "type": "bool"
        }
      ],
      "name": "handleListingTx",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakingAddr",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "listingStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "_isCreated",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_active",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakingAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_listingAddr",
          "type": "address"
        }
      ],
      "name": "toggleListingStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakeholder",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_from",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_to",
          "type": "uint256"
        }
      ],
      "name": "triggerClaimEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_end",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "triggerOwnershipExtensionEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakeholder",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_optionId",
          "type": "uint256"
        }
      ],
      "name": "triggerRegisterEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakeholder",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_optionId",
          "type": "uint256"
        }
      ],
      "name": "triggerUnregisterEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_prevId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_newId",
          "type": "uint256"
        }
      ],
      "name": "triggerUpdateListingIdEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "triggerUpdateListingValueEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_optionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_reward",
          "type": "uint256"
        }
      ],
      "name": "triggerUpdateOptionRewardEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "triggerUpdateOwnerEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_payment",
          "type": "uint256"
        }
      ],
      "name": "triggerUpdatePaymentEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_prevValidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_newValidator",
          "type": "address"
        }
      ],
      "name": "triggerUpdateValidatorEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_worker",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isAuthorized",
          "type": "bool"
        }
      ],
      "name": "triggerUpdateWorkerEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initOwnership",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_newOwnership",
          "type": "uint256"
        }
      ],
      "name": "triggerWithdrawEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakingAddr",
          "type": "address"
        }
      ],
      "name": "updateStakingAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "transactionHash": "0xb6bd92f16236ca1d12b59d68bffea00c4e7365c1bb159e8518274ab6af7bff8d",
  "receipt": {
    "to": null,
    "from": "0x0F488C370708b4250A253df57193df2ff731ca3D",
    "contractAddress": "0x8C6cebbd92035C57631ed782fE053023C9A66b30",
    "transactionIndex": 0,
    "gasUsed": "4845328",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x12615aa72a4c533a5b0ba0dc1231509a1568c8fcabfd1210b3a4ca6087970b95",
    "transactionHash": "0xb6bd92f16236ca1d12b59d68bffea00c4e7365c1bb159e8518274ab6af7bff8d",
    "logs": [],
    "blockNumber": 3629422,
    "cumulativeGasUsed": "4845328",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "solcInputHash": "f65efa179a2689d0f4789de6a713038a",
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"BeaconUpgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_reward\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_from\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_to\",\"type\":\"uint256\"}],\"name\":\"Claim\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_validator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listingAddress\",\"type\":\"address\"}],\"name\":\"ListingCreation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_prevOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_start\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_end\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"OwnershipExtension\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"Register\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"Unregister\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"}],\"name\":\"UpdateDailyPayment\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_prevId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_newId\",\"type\":\"uint256\"}],\"name\":\"UpdateListingId\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_reward\",\"type\":\"uint256\"}],\"name\":\"UpdateOptionReward\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_prevOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"UpdateOwner\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"UpdateStakingAddr\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_prevValidator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_newValidator\",\"type\":\"address\"}],\"name\":\"UpdateValidator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"UpdateValue\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_worker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_isAuthorized\",\"type\":\"bool\"}],\"name\":\"UpdateWorker\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_initOwnership\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_newOwnership\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"BURNER\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"COMMUNITY\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ETF\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PLATFORM_DEVELOPMENT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"REAL_ESTATE_SERVICE\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"REGULATION_FUNDS\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VALIDATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_listingId\",\"type\":\"uint256\"}],\"name\":\"createListing\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_listingAddr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newValidator\",\"type\":\"address\"}],\"name\":\"emergencyUpdateListingValidator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_in\",\"type\":\"bool\"}],\"name\":\"handleListingTx\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"listingStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"_isCreated\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_active\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stakingAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_listingAddr\",\"type\":\"address\"}],\"name\":\"toggleListingStatus\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_reward\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_from\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_to\",\"type\":\"uint256\"}],\"name\":\"triggerClaimEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_prevOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_end\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"triggerOwnershipExtensionEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"triggerRegisterEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"triggerUnregisterEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_prevId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newId\",\"type\":\"uint256\"}],\"name\":\"triggerUpdateListingIdEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"triggerUpdateListingValueEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_reward\",\"type\":\"uint256\"}],\"name\":\"triggerUpdateOptionRewardEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_prevOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"triggerUpdateOwnerEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"}],\"name\":\"triggerUpdatePaymentEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_prevValidator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newValidator\",\"type\":\"address\"}],\"name\":\"triggerUpdateValidatorEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_worker\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isAuthorized\",\"type\":\"bool\"}],\"name\":\"triggerUpdateWorkerEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initOwnership\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newOwnership\",\"type\":\"uint256\"}],\"name\":\"triggerWithdrawEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"updateStakingAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Claim(address,address,uint256,uint256,uint256)\":{\"details\":\"Emitted when an user claiming rewards `_stakeholder` is the stakeholder  `_reward` is the reward amount `_from` -> `_to` is the staking period of time\"},\"ListingCreation(address,address,address)\":{\"details\":\"Emitted a new Listing is created. `_validator` should be the caller,  `_owner` should be the specified address and `_listingAddress` is the newly created listing address\"},\"OwnershipExtension(address,address,address,uint256,uint256,uint256)\":{\"details\":\"Emitted when the owner extends ownership with a listing `_prevOwner` is the previous owner address `_newOwner` is the new owner address `_start` is the existing ownership `_end` is when the ownership ends `_amount` is the transfered amount\"},\"Register(address,address,uint256,uint256)\":{\"details\":\"Emitted when an user registers for claiming rewards `_stakeholder` is the stakeholder  `_amount` is the registered amount `_optionId` is the chosen option\"},\"Unregister(address,address,uint256)\":{\"details\":\"Emitted when an user unregisters for claiming rewards `_stakeholder` is the stakeholder  `_optionId` is the unregistered option\"},\"UpdateDailyPayment(address,uint256)\":{\"details\":\"Emitted when the validator update listing's daily payment `_payment` is the previous listing daily payment\"},\"UpdateListingId(address,uint256,uint256)\":{\"details\":\"Emitted when a listing's validator update listing's ID `_prevId` is the previous id `_newId` is the new id\"},\"UpdateOptionReward(address,uint256,uint256)\":{\"details\":\"Emitted when a listing's validator update option reward `_optionId` is the updated option `_reward` is the reward value\"},\"UpdateOwner(address,address,address)\":{\"details\":\"Emitted when a listing's validator update listing's owner `_prevOwner` is the previous owner `_newOwner` is the new owner\"},\"UpdateStakingAddr(address)\":{\"details\":\"Emitted when the staking address is updated, `_stakingAddr` should be the new address \"},\"UpdateValidator(address,address,address)\":{\"details\":\"Emitted when a listing's validator is updated `_prevValidator` is the previous validator `_newValidator` is the new validator\"},\"UpdateValue(address,uint256)\":{\"details\":\"Emitted when the validator update listing's value `_value` is the new listing value\"},\"UpdateWorker(address,address,bool)\":{\"details\":\"Emitted when the worker status of a listing is updated. `_worker` is the updated address, `_isAuthorized` is the new status\"},\"Withdraw(address,address,uint256,uint256,uint256)\":{\"details\":\"Emitted when the owner withdraws tokens (forfeit ownership for a listing) `owner` is the owner withdrawing `_amount` is the amount to return to the owner `_initOwnership` is the initial ownership value `_newOwnership` is the updated ownership value\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"Destroys `amount` tokens from the authorized caller's balance See {ERC20-_burn}.\"},\"createListing(address,uint256)\":{\"details\":\"Create a new listing (the tokenized version of a real estate product)  Restricted to only validators A newly created listing is set with two properties: `_isCreated` and `_active` Listing's validator is the validator address making the transaction. The validator must specify the address of listing's owner  Emits a {ListingCreation} event\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"emergencyUpdateListingValidator(address,address)\":{\"details\":\"In case a validator's key is compromised, {DEFAULT_ADMIN_ROLE}  is able to update listing's validator\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"handleListingTx(address,uint256,bool)\":{\"details\":\"Handle transactions from listings and only from listings  If `_in` is true, _amount will be transfered from `_userAddr` to `stakingAddress` Otherwise, `_amount` will be transfered from `stakingAddress` to `_userAddr` Returns true if the transation is success Emits a {Transfer} event from IERC20\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"initialize(address)\":{\"details\":\"Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR Staking address is set here  Initial token distribution addresses are also set here since variables can't be initialized outsize  {initialize} function After deployment, {DEFAULT_ADMIN_ROLE} address should be moved to an multisign address and the contract deployer shall renounce {DEFAULT_ADMIN_ROLE}\"},\"mint(address,uint256)\":{\"details\":\"Mints `amount` tokens for the authorized caller's balance See {ERC20-_mint}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"toggleListingStatus(address)\":{\"details\":\"Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation Restricted to only the validator of the listing or DEFAULT_ADMIN_ROLE The `_listingAddr` must be the address of a created listing \"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"},\"updateStakingAddress(address)\":{\"details\":\"Update the funds address. Shall be handy if there's a need in changing the initial address, or the previous address is compromised.\"},\"upgradeTo(address)\":{\"details\":\"Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.\"},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.\"}},\"stateVariables\":{\"BURNER\":{\"details\":\"Burners are authorized accounts to burn tokens from their own accounts\"},\"MINTER\":{\"details\":\"Minters are authorized accounts to mint tokens\"},\"PLATFORM_DEVELOPMENT\":{\"details\":\"Initial token distribution addresses according to whitepaper (page 11/24) https://anft.vn/assets/file/ANFTWhitepaperVer1.0.pdf\"},\"VALIDATOR\":{\"details\":\"Validators are authorized accounts to handle listing\"},\"stakingAddress\":{\"details\":\"The funds address for paying out rewards and receiving payments\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"triggerUpdateListingValueEvent(uint256)\":{\"notice\":\"The below functions are to trigger listing events. Important {Listing} events can be \\\"listened\\\" centrally inside this {Token} contract. Clients can subscribe to every event in {Listing} contracts in this {Token} contract. (Originally events are emitted from separated {Listing} contracts, but that would be impossible  for clients to subscribe for every change from different listings)\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/v1/Token.sol\":\"Token\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (access/AccessControl.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IAccessControlUpgradeable.sol\\\";\\nimport \\\"../utils/ContextUpgradeable.sol\\\";\\nimport \\\"../utils/StringsUpgradeable.sol\\\";\\nimport \\\"../utils/introspection/ERC165Upgradeable.sol\\\";\\nimport \\\"../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Contract module that allows children to implement role-based access\\n * control mechanisms. This is a lightweight version that doesn't allow enumerating role\\n * members except through off-chain means by accessing the contract event logs. Some\\n * applications may benefit from on-chain enumerability, for those cases see\\n * {AccessControlEnumerable}.\\n *\\n * Roles are referred to by their `bytes32` identifier. These should be exposed\\n * in the external API and be unique. The best way to achieve this is by\\n * using `public constant` hash digests:\\n *\\n * ```\\n * bytes32 public constant MY_ROLE = keccak256(\\\"MY_ROLE\\\");\\n * ```\\n *\\n * Roles can be used to represent a set of permissions. To restrict access to a\\n * function call, use {hasRole}:\\n *\\n * ```\\n * function foo() public {\\n *     require(hasRole(MY_ROLE, msg.sender));\\n *     ...\\n * }\\n * ```\\n *\\n * Roles can be granted and revoked dynamically via the {grantRole} and\\n * {revokeRole} functions. Each role has an associated admin role, and only\\n * accounts that have a role's admin role can call {grantRole} and {revokeRole}.\\n *\\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\\n * that only accounts with this role will be able to grant or revoke other\\n * roles. More complex role relationships can be created by using\\n * {_setRoleAdmin}.\\n *\\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\\n * grant and revoke this role. Extra precautions should be taken to secure\\n * accounts that have been granted it.\\n */\\nabstract contract AccessControlUpgradeable is Initializable, ContextUpgradeable, IAccessControlUpgradeable, ERC165Upgradeable {\\n    function __AccessControl_init() internal initializer {\\n        __Context_init_unchained();\\n        __ERC165_init_unchained();\\n        __AccessControl_init_unchained();\\n    }\\n\\n    function __AccessControl_init_unchained() internal initializer {\\n    }\\n    struct RoleData {\\n        mapping(address => bool) members;\\n        bytes32 adminRole;\\n    }\\n\\n    mapping(bytes32 => RoleData) private _roles;\\n\\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\\n\\n    /**\\n     * @dev Modifier that checks that an account has a specific role. Reverts\\n     * with a standardized message including the required role.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     *\\n     * _Available since v4.1._\\n     */\\n    modifier onlyRole(bytes32 role) {\\n        _checkRole(role, _msgSender());\\n        _;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IAccessControlUpgradeable).interfaceId || super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) public view override returns (bool) {\\n        return _roles[role].members[account];\\n    }\\n\\n    /**\\n     * @dev Revert with a standard message if `account` is missing `role`.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     */\\n    function _checkRole(bytes32 role, address account) internal view {\\n        if (!hasRole(role, account)) {\\n            revert(\\n                string(\\n                    abi.encodePacked(\\n                        \\\"AccessControl: account \\\",\\n                        StringsUpgradeable.toHexString(uint160(account), 20),\\n                        \\\" is missing role \\\",\\n                        StringsUpgradeable.toHexString(uint256(role), 32)\\n                    )\\n                )\\n            );\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) public view override returns (bytes32) {\\n        return _roles[role].adminRole;\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) public virtual override {\\n        require(account == _msgSender(), \\\"AccessControl: can only renounce roles for self\\\");\\n\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event. Note that unlike {grantRole}, this function doesn't perform any\\n     * checks on the calling account.\\n     *\\n     * [WARNING]\\n     * ====\\n     * This function should only be called from the constructor when setting\\n     * up the initial roles for the system.\\n     *\\n     * Using this function in any other way is effectively circumventing the admin\\n     * system imposed by {AccessControl}.\\n     * ====\\n     *\\n     * NOTE: This function is deprecated in favor of {_grantRole}.\\n     */\\n    function _setupRole(bytes32 role, address account) internal virtual {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Sets `adminRole` as ``role``'s admin role.\\n     *\\n     * Emits a {RoleAdminChanged} event.\\n     */\\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\\n        bytes32 previousAdminRole = getRoleAdmin(role);\\n        _roles[role].adminRole = adminRole;\\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * Internal function without access restriction.\\n     */\\n    function _grantRole(bytes32 role, address account) internal virtual {\\n        if (!hasRole(role, account)) {\\n            _roles[role].members[account] = true;\\n            emit RoleGranted(role, account, _msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * Internal function without access restriction.\\n     */\\n    function _revokeRole(bytes32 role, address account) internal virtual {\\n        if (hasRole(role, account)) {\\n            _roles[role].members[account] = false;\\n            emit RoleRevoked(role, account, _msgSender());\\n        }\\n    }\\n    uint256[49] private __gap;\\n}\\n\",\"keccak256\":\"0xdfe5444167c3b8cb94bb80044f56148151466d62a86b950c4b57c1ab8bdced7b\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/access/IAccessControlUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (access/IAccessControl.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev External interface of AccessControl declared to support ERC165 detection.\\n */\\ninterface IAccessControlUpgradeable {\\n    /**\\n     * @dev Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole`\\n     *\\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\\n     * {RoleAdminChanged} not being emitted signaling this.\\n     *\\n     * _Available since v3.1._\\n     */\\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\\n\\n    /**\\n     * @dev Emitted when `account` is granted `role`.\\n     *\\n     * `sender` is the account that originated the contract call, an admin role\\n     * bearer except when using {AccessControl-_setupRole}.\\n     */\\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Emitted when `account` is revoked `role`.\\n     *\\n     * `sender` is the account that originated the contract call:\\n     *   - if using `revokeRole`, it is the admin role bearer\\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\\n     */\\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) external view returns (bool);\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {AccessControl-_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) external;\\n}\\n\",\"keccak256\":\"0xb1503d6ad7d4251970bfc4fa2d7e6fa2c7716010a0b3d642bdc078cdbef5ecc0\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/ERC1967/ERC1967Upgrade.sol)\\n\\npragma solidity ^0.8.2;\\n\\nimport \\\"../beacon/IBeaconUpgradeable.sol\\\";\\nimport \\\"../../utils/AddressUpgradeable.sol\\\";\\nimport \\\"../../utils/StorageSlotUpgradeable.sol\\\";\\nimport \\\"../utils/Initializable.sol\\\";\\n\\n/**\\n * @dev This abstract contract provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots.\\n *\\n * _Available since v4.1._\\n *\\n * @custom:oz-upgrades-unsafe-allow delegatecall\\n */\\nabstract contract ERC1967UpgradeUpgradeable is Initializable {\\n    function __ERC1967Upgrade_init() internal initializer {\\n        __ERC1967Upgrade_init_unchained();\\n    }\\n\\n    function __ERC1967Upgrade_init_unchained() internal initializer {\\n    }\\n    // This is the keccak-256 hash of \\\"eip1967.proxy.rollback\\\" subtracted by 1\\n    bytes32 private constant _ROLLBACK_SLOT = 0x4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143;\\n\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function _getImplementation() internal view returns (address) {\\n        return StorageSlotUpgradeable.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        require(AddressUpgradeable.isContract(newImplementation), \\\"ERC1967: new implementation is not a contract\\\");\\n        StorageSlotUpgradeable.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeTo(address newImplementation) internal {\\n        _setImplementation(newImplementation);\\n        emit Upgraded(newImplementation);\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCall(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _upgradeTo(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            _functionDelegateCall(newImplementation, data);\\n        }\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with security checks for UUPS proxies, and additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCallSecure(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        address oldImplementation = _getImplementation();\\n\\n        // Initial upgrade and setup call\\n        _setImplementation(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            _functionDelegateCall(newImplementation, data);\\n        }\\n\\n        // Perform rollback test if not already in progress\\n        StorageSlotUpgradeable.BooleanSlot storage rollbackTesting = StorageSlotUpgradeable.getBooleanSlot(_ROLLBACK_SLOT);\\n        if (!rollbackTesting.value) {\\n            // Trigger rollback using upgradeTo from the new implementation\\n            rollbackTesting.value = true;\\n            _functionDelegateCall(\\n                newImplementation,\\n                abi.encodeWithSignature(\\\"upgradeTo(address)\\\", oldImplementation)\\n            );\\n            rollbackTesting.value = false;\\n            // Check rollback was effective\\n            require(oldImplementation == _getImplementation(), \\\"ERC1967Upgrade: upgrade breaks further upgrades\\\");\\n            // Finally reset to the new implementation and log the upgrade\\n            _upgradeTo(newImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Returns the current admin.\\n     */\\n    function _getAdmin() internal view returns (address) {\\n        return StorageSlotUpgradeable.getAddressSlot(_ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        require(newAdmin != address(0), \\\"ERC1967: new admin is the zero address\\\");\\n        StorageSlotUpgradeable.getAddressSlot(_ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {AdminChanged} event.\\n     */\\n    function _changeAdmin(address newAdmin) internal {\\n        emit AdminChanged(_getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is bytes32(uint256(keccak256('eip1967.proxy.beacon')) - 1)) and is validated in the constructor.\\n     */\\n    bytes32 internal constant _BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Emitted when the beacon is upgraded.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function _getBeacon() internal view returns (address) {\\n        return StorageSlotUpgradeable.getAddressSlot(_BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the EIP1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        require(AddressUpgradeable.isContract(newBeacon), \\\"ERC1967: new beacon is not a contract\\\");\\n        require(\\n            AddressUpgradeable.isContract(IBeaconUpgradeable(newBeacon).implementation()),\\n            \\\"ERC1967: beacon implementation is not a contract\\\"\\n        );\\n        StorageSlotUpgradeable.getAddressSlot(_BEACON_SLOT).value = newBeacon;\\n    }\\n\\n    /**\\n     * @dev Perform beacon upgrade with additional setup call. Note: This upgrades the address of the beacon, it does\\n     * not upgrade the implementation contained in the beacon (see {UpgradeableBeacon-_setImplementation} for that).\\n     *\\n     * Emits a {BeaconUpgraded} event.\\n     */\\n    function _upgradeBeaconToAndCall(\\n        address newBeacon,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _setBeacon(newBeacon);\\n        emit BeaconUpgraded(newBeacon);\\n        if (data.length > 0 || forceCall) {\\n            _functionDelegateCall(IBeaconUpgradeable(newBeacon).implementation(), data);\\n        }\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function _functionDelegateCall(address target, bytes memory data) private returns (bytes memory) {\\n        require(AddressUpgradeable.isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return AddressUpgradeable.verifyCallResult(success, returndata, \\\"Address: low-level delegate call failed\\\");\\n    }\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0xb0fba7a209e01ef5a75bd082cd31b46b417f8572ca87a08475aa60afa01b4801\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/beacon/IBeacon.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeaconUpgradeable {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {BeaconProxy} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0xc28ec209735cd77cebec87be0ec4586d4cba9002011adf4346e374e60c367756\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/utils/Initializable.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\n * behind a proxy. Since a proxied contract can't have a constructor, it's common to move constructor logic to an\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\n *\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\n *\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\n *\\n * [CAUTION]\\n * ====\\n * Avoid leaving a contract uninitialized.\\n *\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\n * contract, which may impact the proxy. To initialize the implementation contract, you can either invoke the\\n * initializer manually, or you can include a constructor to automatically mark it as initialized when it is deployed:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```\\n * /// @custom:oz-upgrades-unsafe-allow constructor\\n * constructor() initializer {}\\n * ```\\n * ====\\n */\\nabstract contract Initializable {\\n    /**\\n     * @dev Indicates that the contract has been initialized.\\n     */\\n    bool private _initialized;\\n\\n    /**\\n     * @dev Indicates that the contract is in the process of being initialized.\\n     */\\n    bool private _initializing;\\n\\n    /**\\n     * @dev Modifier to protect an initializer function from being invoked twice.\\n     */\\n    modifier initializer() {\\n        require(_initializing || !_initialized, \\\"Initializable: contract is already initialized\\\");\\n\\n        bool isTopLevelCall = !_initializing;\\n        if (isTopLevelCall) {\\n            _initializing = true;\\n            _initialized = true;\\n        }\\n\\n        _;\\n\\n        if (isTopLevelCall) {\\n            _initializing = false;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6287586f5e4a103c89d4dda41406136cdf283cc625bd1ebfdf1468aae5bfe449\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/utils/UUPSUpgradeable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC1967/ERC1967UpgradeUpgradeable.sol\\\";\\nimport \\\"./Initializable.sol\\\";\\n\\n/**\\n * @dev An upgradeability mechanism designed for UUPS proxies. The functions included here can perform an upgrade of an\\n * {ERC1967Proxy}, when this contract is set as the implementation behind such a proxy.\\n *\\n * A security mechanism ensures that an upgrade does not turn off upgradeability accidentally, although this risk is\\n * reinstated if the upgrade retains upgradeability but removes the security mechanism, e.g. by replacing\\n * `UUPSUpgradeable` with a custom implementation of upgrades.\\n *\\n * The {_authorizeUpgrade} function must be overridden to include access restriction to the upgrade mechanism.\\n *\\n * _Available since v4.1._\\n */\\nabstract contract UUPSUpgradeable is Initializable, ERC1967UpgradeUpgradeable {\\n    function __UUPSUpgradeable_init() internal initializer {\\n        __ERC1967Upgrade_init_unchained();\\n        __UUPSUpgradeable_init_unchained();\\n    }\\n\\n    function __UUPSUpgradeable_init_unchained() internal initializer {\\n    }\\n    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable state-variable-assignment\\n    address private immutable __self = address(this);\\n\\n    /**\\n     * @dev Check that the execution is being performed through a delegatecall call and that the execution context is\\n     * a proxy contract with an implementation (as defined in ERC1967) pointing to self. This should only be the case\\n     * for UUPS and transparent proxies that are using the current contract as their implementation. Execution of a\\n     * function through ERC1167 minimal proxies (clones) would not normally pass this test, but is not guaranteed to\\n     * fail.\\n     */\\n    modifier onlyProxy() {\\n        require(address(this) != __self, \\\"Function must be called through delegatecall\\\");\\n        require(_getImplementation() == __self, \\\"Function must be called through active proxy\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy to `newImplementation`.\\n     *\\n     * Calls {_authorizeUpgrade}.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function upgradeTo(address newImplementation) external virtual onlyProxy {\\n        _authorizeUpgrade(newImplementation);\\n        _upgradeToAndCallSecure(newImplementation, new bytes(0), false);\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call\\n     * encoded in `data`.\\n     *\\n     * Calls {_authorizeUpgrade}.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes memory data) external payable virtual onlyProxy {\\n        _authorizeUpgrade(newImplementation);\\n        _upgradeToAndCallSecure(newImplementation, data, true);\\n    }\\n\\n    /**\\n     * @dev Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by\\n     * {upgradeTo} and {upgradeToAndCall}.\\n     *\\n     * Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.\\n     *\\n     * ```solidity\\n     * function _authorizeUpgrade(address) internal override onlyOwner {}\\n     * ```\\n     */\\n    function _authorizeUpgrade(address newImplementation) internal virtual;\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0x611d1f2720036646366a613a7b6bb85d1527ed3b4fb5ba2db8cfc34f80a37be6\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20Upgradeable {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0xb34b8dc5fbc20d8d7e5ed2fd1a0ed87e1fb024d3ae0c61fd4368565ce733aa7e\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (token/ERC20/extensions/IERC20Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20Upgradeable.sol\\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20MetadataUpgradeable is IERC20Upgradeable {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x0c85e40b29481eadb132cb5eb973d27b4567098f4bc257b250ee540d8d309a00\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/Address.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary AddressUpgradeable {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        assembly {\\n            size := extcodesize(account)\\n        }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xf308459c5ea0cde035b8c3b3d9144086a2c777c46dbe401f634e75dea1aba1b8\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\nimport \\\"../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract ContextUpgradeable is Initializable {\\n    function __Context_init() internal initializer {\\n        __Context_init_unchained();\\n    }\\n\\n    function __Context_init_unchained() internal initializer {\\n    }\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0x0c34de2f75ee9ab06bf9151824be575885d0a9b460c292476a260578fb5a4e1c\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/StorageSlot.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC1967 implementation slot:\\n * ```\\n * contract ERC1967 {\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(Address.isContract(newImplementation), \\\"ERC1967: new implementation is not a contract\\\");\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * _Available since v4.1 for `address`, `bool`, `bytes32`, and `uint256`._\\n */\\nlibrary StorageSlotUpgradeable {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x8cd74cdb9a9b704bfd99b4c677f49a170f1b16235f59b4ede98db93ff92f702a\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary StringsUpgradeable {\\n    bytes16 private constant _HEX_SYMBOLS = \\\"0123456789abcdef\\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI's implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\\"0\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\\"0x00\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\n        return string(buffer);\\n    }\\n}\\n\",\"keccak256\":\"0xed12e1c10c09054954b16a1b1f4250c4bbc0c7140d720777626fb5886a1a0e25\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165Upgradeable.sol\\\";\\nimport \\\"../../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165Upgradeable is Initializable, IERC165Upgradeable {\\n    function __ERC165_init() internal initializer {\\n        __ERC165_init_unchained();\\n    }\\n\\n    function __ERC165_init_unchained() internal initializer {\\n    }\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165Upgradeable).interfaceId;\\n    }\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0x8c5737e80521ac5e76c0d9d2cdb67647906fdadeb296644910eeecb31042e1da\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165Upgradeable {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x650712f855228b7cdeb90738d99dd33ff3a7c9770914ff03eb93f90218fe164b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/math/SafeMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n// CAUTION\\n// This version of SafeMath should only be used with Solidity 0.8 or later,\\n// because it relies on the compiler's built in overflow checks.\\n\\n/**\\n * @dev Wrappers over Solidity's arithmetic operations.\\n *\\n * NOTE: `SafeMath` is no longer needed starting with Solidity 0.8. The compiler\\n * now has built in overflow checking.\\n */\\nlibrary SafeMath {\\n    /**\\n     * @dev Returns the addition of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            uint256 c = a + b;\\n            if (c < a) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b > a) return (false, 0);\\n            return (true, a - b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\\n            // benefit is lost if 'b' is also tested.\\n            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\n            if (a == 0) return (true, 0);\\n            uint256 c = a * b;\\n            if (c / a != b) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the division of two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a / b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a % b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the addition of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `+` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Addition cannot overflow.\\n     */\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a + b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a - b;\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `*` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Multiplication cannot overflow.\\n     */\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a * b;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a / b;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a % b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\n     * overflow (when the result is negative).\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {trySub}.\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b <= a, errorMessage);\\n            return a - b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a / b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting with custom message when dividing by zero.\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {tryMod}.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a % b;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x8666f020bd8fc9dc14f07e2ebc52b5f236ab4cdde7c77679b08cb2f94730043b\",\"license\":\"MIT\"},\"contracts/v1/ERC20Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (token/ERC20/ERC20.sol)\\n\\n/**\\n * @dev This is a \\\"fork\\\" from OZ's ERC20Upgradeable.\\n * The difference is the {_transfer} function returns a boolean\\n * indicating whether the operation is sucessful\\n */\\n\\npragma solidity 0.8.11;\\n\\nimport \\\"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\\\";\\n\\n\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20Upgradeable is Initializable, ContextUpgradeable, IERC20Upgradeable, IERC20MetadataUpgradeable {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * The default value of {decimals} is 18. To select a different value for\\n     * {decimals} you should overload it.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    function __ERC20_init(string memory name_, string memory symbol_) internal initializer {\\n        __Context_init_unchained();\\n        __ERC20_init_unchained(name_, symbol_);\\n    }\\n\\n    function __ERC20_init_unchained(string memory name_, string memory symbol_) internal initializer {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\\n     * overridden;\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `recipient` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\n        bool success = _transfer(_msgSender(), recipient, amount);\\n        require(success, \\\"ERC20: unsuccessful transfer operation\\\");\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        _approve(_msgSender(), spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` and `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``sender``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) public virtual override returns (bool) {\\n        _transfer(sender, recipient, amount);\\n\\n        uint256 currentAllowance = _allowances[sender][_msgSender()];\\n        require(currentAllowance >= amount, \\\"ERC20: transfer amount exceeds allowance\\\");\\n        unchecked {\\n            _approve(sender, _msgSender(), currentAllowance - amount);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        uint256 currentAllowance = _allowances[_msgSender()][spender];\\n        require(currentAllowance >= subtractedValue, \\\"ERC20: decreased allowance below zero\\\");\\n        unchecked {\\n            _approve(_msgSender(), spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Returns a boolean indicatiing whether the operation is successful\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` cannot be the zero address.\\n     * - `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     */\\n    function _transfer(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) internal virtual returns (bool) {\\n        require(sender != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(recipient != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(sender, recipient, amount);\\n\\n        uint256 senderBalance = _balances[sender];\\n        require(senderBalance >= amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        unchecked {\\n            _balances[sender] = senderBalance - amount;\\n        }\\n        _balances[recipient] += amount;\\n\\n        emit Transfer(sender, recipient, amount);\\n\\n        _afterTokenTransfer(sender, recipient, amount);\\n\\n        return true;\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        _balances[account] += amount;\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n        }\\n        _totalSupply -= amount;\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n    uint256[45] private __gap;\\n}\\n\",\"keccak256\":\"0x0b35f9f9fac881bacad9e8a7843a3866c2de823bfa8837421128bde041d3167e\",\"license\":\"MIT\"},\"contracts/v1/Listing.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.11;\\nimport \\\"@openzeppelin/contracts/utils/math/SafeMath.sol\\\";\\nimport \\\"./Token.sol\\\";\\n\\n/**\\n * @dev This contract represents a real estate product.\\n */\\ncontract Listing {\\n\\n    using SafeMath for uint;\\n\\n    /**\\n     * @dev Owner is the address pays tokens to take/extend the ownership for a listing\\n     */\\n    address public owner;\\n\\n    /**\\n     * @dev Listing ID is to bind the Listing NFT on the blockchain with the listing data in\\n     * the real world\\n     */\\n    uint256 public listingId;\\n\\n    /**\\n     * @dev Validator is the authorized account to update the listing configurations\\n     */\\n    address public validator;\\n\\n    /**\\n     * @dev Token contract should be the address of {Token} contract which creates this listing\\n     */\\n    address public immutable tokenContract;\\n\\n    /**\\n     * @dev Ownership value is the unix timestamp, determinating if the listing is forfeited by the owner\\n     * (ownership < block.timestamp) and ready to be taken by another owner user.\\n     */\\n    uint256 public ownership;\\n\\n    /**\\n     * @dev The market value of the listing in real world\\n     */\\n    uint256 public value;\\n\\n    /**\\n     * @dev Daily payment is the amount of token the owner has to pay daily to maintain ownership\\n     * Daily payment determines how long the owner has the ownership over the listing with the tokens they pay.\\n     */\\n    uint256 public dailyPayment;\\n\\n    /**\\n     * @dev Workers are addresses authorized by the owner to use the listing in the real world\\n     */\\n    mapping (address => bool) public workers;\\n\\n    /**\\n     * @dev Options are business activities in real world. Each options has a rewards percentage (sum up to 100);\\n     * Reward value for each option is set by the validator. \\n     *\\n     * `_isSet` flag is default to false, until the option is set by the validator\\n     * This flag is to prevent users from participating in the activities which arent set up by the validator.\\n     *\\n     * Everytime an user register/unregisters for an activity, the `_totalStake` is increased/decreased respectively\\n     */\\n    struct OptionModel {\\n        uint256 _totalStake;\\n        uint256 _reward;\\n        bool _isSet;\\n    }\\n    mapping (uint => OptionModel) public options;\\n\\n    /**\\n     * @dev Option reward value (percentage) is set up by and only by the validator\\n     * Reward should not exceed 100;\\n     * The sum of reward values from all options should be 100;\\n     * \\n     * `isSet` is toggled to true for options which were setup\\n     *\\n     * For example A, B, C, D are options. Ar, Br, Cr, Dr are the reward values respectively\\n     */\\n    function setupOptionReward (uint256 _optionId, uint256 _reward) external onlyValidator {\\n        require(_reward <= 100, \\\"Listing: Invalid reward value\\\");\\n        options[_optionId]._reward = _reward;\\n        options[_optionId]._isSet = true;\\n        Token(tokenContract).triggerUpdateOptionRewardEvent(_optionId, _reward);\\n    }   \\n\\n    /**\\n     * @dev Validator can update the listing ID\\n     */\\n    function updatelistingId (uint256 _listingId) external onlyValidator {\\n        Token(tokenContract).triggerUpdateListingIdEvent(listingId, _listingId);\\n        listingId = _listingId;\\n    }\\n\\n    /**\\n     * @dev Validator can update the owner value\\n     * Owner value can only changeable if the current owner has forfeited the listing\\n     */\\n    function updateOwner (address _newOwner) external onlyValidator {\\n        require(ownership - 86400 <  block.timestamp, \\\"Owner hasn't forfeited!\\\");\\n        require(_newOwner != address(0), \\\"Listing: Invalid _newOwner\\\");\\n        Token(tokenContract).triggerUpdateOwnerEvent(owner, _newOwner);\\n        owner = _newOwner;\\n    }\\n    \\n    /**\\n     * @dev Validator can update themselves\\n     *\\n     * In case the validator's key is compromised, the {tokenContract} can call the\\n     * {emergencyUpdateListingValidator} function (restricted to {DEFAULT_ADMIN_ROLE}) to invoke this {updateValidator} function\\n     * and update the listing's validator\\n     */\\n    function updateValidator (address _validator) external {\\n        require(msg.sender == validator || msg.sender == tokenContract, \\\"Listing: Unauth!\\\");\\n        require(_validator != address(0), \\\"Listing: Invalid _validator\\\");\\n        Token(tokenContract).triggerUpdateValidatorEvent(validator, _validator);\\n        validator = _validator;\\n    }\\n    \\n    /**\\n    * @dev Stake info is recorded every time an user registers for staking and updated when they update their previous staking\\n    *\\n    * Stakings are recorded by the option (or business activity) ID, combined with user's address\\n    * A JSON represenation of a staking record:\\n    {\\n        \\\"1\\\": {\\n            \\\"0x000001\\\": {\\n                \\\"_start\\\": 1650347256,\\n                \\\"_amount\\\": 100,\\n                \\\"_active\\\": true\\n            }\\n        }\\n    }\\n    * This could be understood as: Address `0x000001` staking for the option with ID = 1. The stake starts at\\n    * the timestamp of 1650347256 with the registered amount of 100 tokens. The stake is still active (user hasnt canceled)\\n    */\\n    struct StakingModel {\\n        uint256 _start;\\n        uint256 _amount;\\n        bool _active;\\n    }\\n    mapping (uint256 => mapping (address => StakingModel)) public stakings;\\n\\n\\n    /**\\n    * @dev Total stake represents the tokens are staked for all options\\n    * \\n    * TotalStake is:\\n    *   - Increased when user stake (register) for any option\\n    *   - Decreased when user unstake (unregister) for any option\\n    */\\n    uint256 public totalStake;\\n\\n    /**\\n    * @dev Owner and validator is configed upon listing creation according to the specified arguments\\n    * \\n    * Ownership value is initialized to be the current block.timestamp\\n    *\\n    * Token contract should be the Caller/Listing creator address\\n    */\\n    constructor(address _validator, address _owner, uint256 _listingId) {\\n        owner = _owner;\\n        validator = _validator;\\n        listingId = _listingId;\\n        ownership = block.timestamp;\\n        tokenContract = msg.sender;\\n    }\\n    /**\\n     * @dev Validator can update the listing value to reflect the real estate price in the real world\\n     * Emits an {UpdateValue} event to make the changes publicly visible\\n     */\\n    function updateValue (uint256 _value) external onlyValidator {\\n        value = _value;\\n        Token(tokenContract).triggerUpdateListingValueEvent(_value);\\n    }\\n\\n    /**\\n     * @dev Validator can update the daily payment value to reflect the real estate price in the real world\\n     * Emits an {UpdateDailyPayment} event to make the changes publicly visible\\n     */\\n    function updateDailyPayment (uint256 _dailyPayment) external onlyValidator {\\n        dailyPayment = _dailyPayment;\\n        Token(tokenContract).triggerUpdatePaymentEvent(_dailyPayment);\\n    }\\n\\n    /**\\n     * @dev Owner can update worker status. Which means they can choose/remove who\\n     * can use the listing in real world\\n     */\\n    function updateWorker(address _worker) external {\\n        require(msg.sender == owner, \\\"Listing: Unauth!\\\");\\n        require(ownership >= block.timestamp, \\\"Listing: Ownership expired\\\");\\n        workers[_worker] = !workers[_worker];\\n        Token(tokenContract).triggerUpdateWorkerEvent(_worker, workers[_worker]);\\n    }\\n\\n    /**\\n    * @dev Owner can extend ownership by transfering tokens to the staking address\\n    * \\n    * Definition: A listing is forfeited if {ownership - 86400 <  block.timestamp} (24 hours before the ownership actually expires)\\n    * Sender can extend the ownership for the listing in the following cases:\\n    * Case 1: If the listing isn't forfeited, sender must be the current owner\\n    * Case 2: If the listing is forfeited, sender could be anyone. Sender would become the new owner;\\n    *\\n    * sender must transfer at least {dailyPayment} amount (Owns the listing for at least 1.0 day)\\n    *\\n    * Time credit formula:\\n    *   C = (A  x 86400 / D)\\n    *      C (timestamp): Time credit (Unix timestamp)\\n    *      A (tokens): Transfered amount to extend ownership\\n    *      D (tokens): Daily payment, specified by the validator\\n    *      86400: Total seconds in a day (60*60*24)\\n    *\\n    * Then C is added on top of {block.timestamp} OR the current {ownership} value, depends on whether the listing is forfeited\\n    */\\n\\n    function extendOwnership (uint256 _amount) external {\\n        require(msg.sender == owner || ownership - 86400 <  block.timestamp, \\\"Listing: Unauth!\\\");\\n        \\n        require(_amount >= dailyPayment, \\\"Listing: Insufficient amount!\\\");\\n\\n        bool success = Token(tokenContract).handleListingTx(msg.sender, _amount, true);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        uint256 existingOwnership = ownership;\\n        address existingOwner = owner;\\n        \\n        if (existingOwnership - 86400 < block.timestamp) {\\n            owner = msg.sender;\\n            existingOwnership = block.timestamp;\\n        }\\n\\n        ownership = existingOwnership.add(_amount.mul(86400).div(dailyPayment));\\n        Token(tokenContract).triggerOwnershipExtensionEvent(existingOwner, owner, existingOwnership, ownership, _amount);\\n    }\\n\\n    /**\\n    * @dev Owner can partially withdraw the tokens they previously transfered to extend the listing ownership (and forfeit the ownership)\\n    * \\n    * Ownership value must be in the future (larger or equal to block.timestamp)\\n    * \\n    * Owner can input the amount of token they want to withdraw\\n    *\\n    * After withdrawal, owner still have to own the listing for at least 1.0 day more\\n    * (hence the check {newOwnership >= block.timestamp.add(86400)} )\\n    *\\n    * Ownership withdraw formula:\\n    *   RC = A * 86400 / D\\n    *   OS2 = OS1 - RC\\n    *      A  (tokens)    : Amount of tokens the owner wishes to withdraw\\n    *      RC (timestamp) : Removed credit based on {_amount} input\\n    *      OS1 (timestamp): Original/Intial ownership before withdrawal\\n    *      OS2 (timestamp): New Ownership value after withdrawal\\n    *      D  (tokens):  Daily payment, specified by the validator\\n    *\\n    * Owner still have to own the listing for one more day (`OS2` must be gte to block.timestamp + 86400)\\n    *\\n    * `_amount` shall be transfered from Funds account to user.\\n    * If the transfer success, the ownership value should be set to current TS\\n    */\\n    function withdraw(uint256 _amount) external {\\n        require(msg.sender == owner, \\\"Listing: Unauth!\\\");\\n        require(ownership >= block.timestamp, \\\"Listing: Ownership expired!\\\");\\n        require(_amount >= dailyPayment, \\\"Listing: Insufficient amount!\\\");\\n\\n        uint256 removedCreditTimestamp = _amount.mul(86400).div(dailyPayment);\\n        uint256 newOwnership = ownership.sub(removedCreditTimestamp);\\n\\n        require(newOwnership >= block.timestamp.add(86400), \\\"Listing: Invalid amount!\\\");\\n        \\n        bool success = Token(tokenContract).handleListingTx(msg.sender, _amount, false);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        Token(tokenContract).triggerWithdrawEvent(owner, _amount, ownership, newOwnership);\\n        ownership = newOwnership;\\n    }\\n\\n    /**\\n    * @dev Stakeholders can claim their reward they previously registed\\n    * \\n    * See {calculateStakeholderReward} for the reward payout formula\\n    *\\n    * Staking status should be active (stakeholder hasnt unregistered)\\n    * Users must have at least `_amount` tokens in their balance\\n    *\\n    * This function is automatically triggered when {register} or {unregister} functions are called \\n    *\\n    * If the transfer from the funds address to user's address fulfilled, an {Claim} event is emitted\\n    * the stake start is reset to the current block.timestamp\\n    */\\n    function claimReward (uint256 _optionId) public {\\n        StakingModel storage chosenStake = stakings[_optionId][msg.sender];\\n        require(chosenStake._active, \\\"Listing: Register first!\\\");\\n\\n        uint256 callerBalance = Token(tokenContract).balanceOf(msg.sender);\\n        require(callerBalance >= chosenStake._amount, \\\"Listing: Insufficient balance!\\\");\\n\\n        uint256 payoutAmount = calculateStakeholderReward(_optionId, chosenStake);\\n        bool success = Token(tokenContract).handleListingTx(msg.sender, payoutAmount, false);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        Token(tokenContract).triggerClaimEvent(msg.sender, payoutAmount, chosenStake._start, block.timestamp);\\n\\n        chosenStake._start = block.timestamp;\\n    }\\n\\n    /**\\n    * @dev User can register to be a stakeholder.\\n    * \\n    * NOTE The key difference of this staking model is the user's token balance isnt transfered\\n    * to another staking address (like other staking models).\\n    * Users, however, need to have at least registering amount in their balance WHEN they register AND claim rewards\\n    *\\n    * Users cant register for inactive listing\\n    *\\n    * `_amount` is the registering amount\\n    * `_optionId` is the option which user would like to register\\n    *\\n    * New registering amount will replace previous registering amount\\n    *\\n    * Both listing total stake and option total stake is increased/decreased by the difference between\\n    * previous registering amount and current registering amount\\n    *\\n    * In case stakeholders would like to update their registering amount, they are still rewarded\\n    * for the period between previous and current registering timestamps\\n    *\\n    * Emits an {Register} event\\n    */\\n    function register (uint256 _amount, uint256 _optionId) external onlyActiveListing {\\n        require(options[_optionId]._isSet, \\\"Listing: Option not available\\\");\\n\\n        StakingModel storage chosenStake = stakings[_optionId][msg.sender];\\n        require(_amount != chosenStake._amount, \\\"Listing: Stake unchanged!\\\");\\n\\n        uint256 callerBalance = Token(tokenContract).balanceOf(msg.sender);\\n        require(callerBalance >= _amount, \\\"Listing: Insufficient balance!\\\");\\n\\n        if (chosenStake._amount != 0) {\\n            claimReward(_optionId);\\n        }\\n\\n        bool stakeIncreased = _amount > chosenStake._amount;\\n        uint256 difference = stakeIncreased ? _amount.sub(chosenStake._amount) : chosenStake._amount.sub(_amount);\\n\\n        if (stakeIncreased) {\\n            chosenStake._amount = chosenStake._amount.add(difference);\\n            options[_optionId]._totalStake = options[_optionId]._totalStake.add(difference);\\n            totalStake = totalStake.add(difference);\\n        } else {\\n            chosenStake._amount = chosenStake._amount.sub(difference);\\n            options[_optionId]._totalStake = options[_optionId]._totalStake.sub(difference);\\n            totalStake = totalStake.sub(difference);\\n        }\\n\\n        chosenStake._start = block.timestamp;\\n        chosenStake._active = true;\\n        Token(tokenContract).triggerRegisterEvent(msg.sender, _amount, _optionId);\\n    }\\n    /**\\n    * @dev User can unregister their previous stake\\n    * \\n    * Staking status should be active (stakeholder hasnt unregistered)\\n    *\\n    * Users cant register for inactive listing\\n    *\\n    * Staking info is reset to initial status\\n    *\\n    * `_optionId` is the option which user would like to unregister\\n    *\\n    * Stakeholders are rewarded for the period between registering and unregistering timestamps\\n    *\\n    * Both listing total stake and option total stake is decreased by `_amount`\\n    * Emits an {Unregister} event\\n    */\\n    function unregister(uint256 _optionId) external onlyActiveListing {\\n        StakingModel storage chosenStake = stakings[_optionId][msg.sender];\\n\\n        require(chosenStake._active, \\\"Listing: Register first!\\\");\\n\\n        if (chosenStake._amount != 0) {\\n            claimReward(_optionId);\\n        }\\n\\n        options[_optionId]._totalStake = options[_optionId]._totalStake.sub(chosenStake._amount);\\n\\n        totalStake = totalStake.sub(chosenStake._amount);\\n\\n        chosenStake._amount = 0;\\n        chosenStake._active = false;\\n        chosenStake._start = 0;\\n\\n        Token(tokenContract).triggerUnregisterEvent(msg.sender, _optionId);\\n    }\\n\\n    /**\\n    * @dev Stakeholder reward formula\\n    * \\n    * T    = TS * 100 / LV\\n    * RTd  = DA * T%\\n    * Ar   = ((RTd * 100 / Ap) / At) * Ax\\n    * Rm   = Ar * Sd\\n\\n    *   T(%)      : Percentage for total token rewarding (less or equal than 86)\\n    *               If listing is forfeited, T is less or equal than 50\\n    *   TS        : Total tokens staked for the listing\\n    *   LV        : Listing value\\n    *   RTd       : Total tokens for rewarding daily for ALL stakeholder (daily avaiable tokens for claiming)\\n    *   DA        : Daily Payment\\n    *   Ap(%)     : Reward percentage value for the chosen option\\n    *   At(tokens): The total staked amount for an option from ALL stakeholders\\n    *   Ax(tokens): The staked amount for an option from the calling stakeholder (msg.sender)\\n    *   Ar(tokens): Available daily tokens for claiming for ONE stakeholder for one option\\n    *   Sd(seconds): Staked time (difference in stake start and block.timestamp)\\n    *   Rm(tokens): The reward for a stakeholder after a period of time\\n    */\\n    function calculateStakeholderReward (uint256 _optionId, StakingModel storage _userStake) private view returns (uint256) {\\n        uint256 safeMultiplier = 10 ** 18;\\n\\n        uint256 T = totalStake.mul(safeMultiplier).div(value);\\n\\n        if (T > safeMultiplier.mul(86).div(100)) {\\n            T = safeMultiplier.mul(86).div(100);\\n        }\\n\\n        if (ownership < block.timestamp && T > safeMultiplier.mul(50).div(100)) {\\n            T = safeMultiplier.mul(50).div(100);\\n        }\\n\\n        uint256 RTd = dailyPayment.mul(T).div(safeMultiplier);\\n\\n        OptionModel memory optionInfo = options[_optionId];\\n\\n        uint256 Ar = (RTd.mul(optionInfo._reward).div(100)).mul(_userStake._amount).div(optionInfo._totalStake);\\n\\n        uint256 Sd = block.timestamp.sub(_userStake._start);\\n\\n        return (Ar.mul(Sd)).div(86400);\\n        \\n    }\\n\\n    /**\\n     * @dev Modifier, making sure the current listing is active to proceed further logic\\n     */\\n    modifier onlyActiveListing() {\\n        (, bool _active) = Token(tokenContract).listingStatus(address(this));\\n\\n        require(_active, \\\"Listing: Inactive listing!\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Modifier, restricting access to only the validator\\n     */\\n    modifier onlyValidator() {\\n        require(msg.sender == validator, \\\"Listing: Unauth!\\\");\\n        _;\\n    }\\n\\n}\",\"keccak256\":\"0x0eb3a96314b13e806fd7073511210ce2dfa5363582bf9f4c202c75cc2561babf\",\"license\":\"MIT\"},\"contracts/v1/Token.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.11;\\n\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\\\";\\nimport \\\"./ERC20Upgradeable.sol\\\";\\nimport \\\"./Listing.sol\\\";\\n\\ncontract Token is Initializable, ERC20Upgradeable, AccessControlUpgradeable, UUPSUpgradeable {\\n\\n    /**\\n     * @dev Validators are authorized accounts to handle listing\\n     */\\n    bytes32 public constant VALIDATOR = keccak256(\\\"VALIDATOR\\\");\\n\\n    /**\\n     * @dev Burners are authorized accounts to burn tokens from their own accounts\\n     */\\n    bytes32 public constant BURNER = keccak256(\\\"BURNER\\\");\\n\\n    /**\\n     * @dev Minters are authorized accounts to mint tokens\\n     */\\n    bytes32 public constant MINTER = keccak256(\\\"MINTER\\\");\\n\\n    /**\\n     * @dev The funds address for paying out rewards and receiving payments\\n     */\\n    address public stakingAddress;\\n\\n    /**\\n     * @dev A listing address must be both `_isCreated` and `_active` to be able to operate.\\n     * Otherwise malicious accounts can call handleListingTx functions\\n     *\\n     * The `_isCreated` property is immutable. It's remains true with the addresses of listings \\n     * created by the validator,\\n     *\\n     * The `_active` property is mutable by the validators.\\n     */\\n    struct ListingStatusModel {\\n        bool _isCreated;\\n        bool _active;\\n    }\\n    mapping (address => ListingStatusModel) public listingStatus;\\n\\n    /**\\n     * @dev Initial token distribution addresses according to whitepaper (page 11/24)\\n     * https://anft.vn/assets/file/ANFTWhitepaperVer1.0.pdf\\n     */\\n    address public PLATFORM_DEVELOPMENT;\\n    address public COMMUNITY;\\n    address public REAL_ESTATE_SERVICE;\\n    address public ETF;\\n    address public REGULATION_FUNDS;\\n\\n    /**\\n     * @dev Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR\\n     * Staking address is set here\\n     * \\n     * Initial token distribution addresses are also set here since variables can't be initialized outsize \\n     * {initialize} function\\n     *\\n     * After deployment, {DEFAULT_ADMIN_ROLE} address should be moved to an multisign address and\\n     * the contract deployer shall renounce {DEFAULT_ADMIN_ROLE}\\n     */\\n\\n    function initialize(address _stakingAddr) external initializer {\\n        require(_stakingAddr != address(0), \\\"Token: Invalid _stakingAddr\\\");\\n\\n        __UUPSUpgradeable_init();\\n        __AccessControl_init();\\n        __ERC20_init(\\\"ANFT Token\\\", \\\"ANFT\\\");\\n\\n        uint256 totalSuppy = 1_232_000_000 * 10 ** decimals();\\n\\n        PLATFORM_DEVELOPMENT = 0xb3F5E20db0167d4A5B5C5DaAd6f1c76Cc40cC52D;\\n        COMMUNITY = 0x6b3887eB6091cC705ffA6E32e22B5524b3A9BEa4;\\n        REAL_ESTATE_SERVICE = 0x33aE0695fB3250F0788510B289d26309d4B8f939;\\n        ETF = 0xf5d2f60663D83ABf28969F2A5F501178D8D64bAa;\\n        REGULATION_FUNDS = 0x9F1660B7184Bde8b8973c6618AC3D7D306e8a796;\\n\\n        _mint(PLATFORM_DEVELOPMENT,  totalSuppy * 14 / 100);\\n        _mint(COMMUNITY,  totalSuppy * 34 / 100);\\n        _mint(REAL_ESTATE_SERVICE,  totalSuppy * 32 / 100);\\n        _mint(ETF,  totalSuppy * 8 / 100);\\n        _mint(REGULATION_FUNDS,  totalSuppy * 12 / 100);\\n\\n        stakingAddress = _stakingAddr;\\n        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());\\n    }\\n\\n    function _authorizeUpgrade(address newImplementation)\\n        internal\\n        override\\n        onlyRole(DEFAULT_ADMIN_ROLE)\\n    {}\\n\\n    /**\\n     * @dev Handle transactions from listings and only from listings\\n     * \\n     * If `_in` is true, _amount will be transfered from `_userAddr` to `stakingAddress`\\n     * Otherwise, `_amount` will be transfered from `stakingAddress` to `_userAddr`\\n     *\\n     * Returns true if the transation is success\\n     *\\n     * Emits a {Transfer} event from IERC20\\n     */\\n    function handleListingTx (address _userAddr, uint256 _amount, bool _in)  external onlyValidListing returns (bool) {\\n        require(_userAddr != address(0), \\\"Token: Invalid _userAddr\\\");\\n        address sender;\\n        address recipient;\\n        (sender, recipient) = _in ? (_userAddr, stakingAddress) : (stakingAddress, _userAddr);\\n        bool success = super._transfer(sender, recipient, _amount);\\n        require(success, \\\"Token: Unsuccessful transfer\\\");\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Create a new listing (the tokenized version of a real estate product)\\n     * \\n     * Restricted to only validators\\n     *\\n     * A newly created listing is set with two properties: `_isCreated` and `_active`\\n     *\\n     * Listing's validator is the validator address making the transaction. The validator must\\n     * specify the address of listing's owner\\n     * \\n     * Emits a {ListingCreation} event\\n     */\\n    function createListing(address _owner, uint256 _listingId) external {\\n        require(hasRole(VALIDATOR, _msgSender()), \\\"Token: Unauthorized\\\");\\n        require(_owner != address(0), \\\"Token: Invalid _owner\\\");\\n        Listing newListing = new Listing(_msgSender(), _owner, _listingId);\\n        emit ListingCreation(_msgSender(), _owner, address(newListing));    \\n        listingStatus[address(newListing)]._isCreated = true;    \\n        listingStatus[address(newListing)]._active = true;    \\n    }\\n\\n    /**\\n     * @dev Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation\\n     *\\n     * Restricted to only the validator of the listing or DEFAULT_ADMIN_ROLE\\n     *\\n     * The `_listingAddr` must be the address of a created listing\\n     * \\n     */\\n    function toggleListingStatus (address _listingAddr) external {\\n        require(listingStatus[_listingAddr]._isCreated, \\\"Token: Invalid Listing\\\");\\n        address listingValidator = Listing(_listingAddr).validator();\\n        require(listingValidator == _msgSender() || hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), \\\"Token: Unauthorized\\\");\\n        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;\\n    }\\n\\n    /**\\n     * @dev Update the funds address. Shall be handy if there's a need in changing the initial address,\\n     * or the previous address is compromised.\\n     */    \\n    function updateStakingAddress (address _stakingAddr) external {\\n        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), \\\"Token: Unauthorized\\\");\\n        require(_stakingAddr != address(0), \\\"Token: Invalid _stakingAddr\\\");\\n        stakingAddress = _stakingAddr;\\n        emit UpdateStakingAddr(_stakingAddr);\\n    }\\n\\n    /**\\n     * @dev In case a validator's key is compromised, {DEFAULT_ADMIN_ROLE} \\n     * is able to update listing's validator\\n     */    \\n    function emergencyUpdateListingValidator (address _listingAddr, address _newValidator) external {\\n        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), \\\"Token: Unauthorized\\\");\\n        require(listingStatus[_listingAddr]._isCreated, \\\"Token: Invalid Listing\\\");\\n        Listing(_listingAddr).updateValidator(_newValidator);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from the authorized caller's balance\\n     *\\n     * See {ERC20-_burn}.\\n     */\\n    function burn(uint256 amount) external onlyRole(BURNER) {\\n        _burn(_msgSender(), amount);\\n    }\\n\\n    /**\\n     * @dev Mints `amount` tokens for the authorized caller's balance\\n     *\\n     * See {ERC20-_mint}.\\n     */\\n\\n    function mint(address to, uint256 amount) external onlyRole(MINTER) {\\n        _mint(to, amount);\\n    }\\n\\n    /**\\n     * @notice The below functions are to trigger listing events.\\n     * Important {Listing} events can be \\\"listened\\\" centrally inside this {Token} contract.\\n     * Clients can subscribe to every event in {Listing} contracts in this {Token} contract.\\n     * (Originally events are emitted from separated {Listing} contracts, but that would be impossible \\n     * for clients to subscribe for every change from different listings)\\n     */    \\n    function triggerUpdateListingValueEvent(uint _value) external onlyValidListing {\\n        emit UpdateValue(_msgSender(), _value);\\n    }\\n\\n    function triggerUpdatePaymentEvent(uint _payment) external onlyValidListing {\\n        emit UpdateDailyPayment(_msgSender(), _payment);\\n    }\\n\\n    function triggerUpdateWorkerEvent(address _worker, bool _isAuthorized) external onlyValidListing {\\n        emit UpdateWorker(_msgSender(), _worker, _isAuthorized);\\n    }\\n\\n    function triggerOwnershipExtensionEvent(address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount) external onlyValidListing {\\n        emit OwnershipExtension(_msgSender(), _prevOwner, _newOwner, _start, _end, _amount);\\n    }\\n\\n    function triggerWithdrawEvent(address _owner, uint256 _amount, uint256 _initOwnership, uint256 _newOwnership) external onlyValidListing {\\n        emit Withdraw(_msgSender(), _owner, _amount, _initOwnership, _newOwnership);\\n    }\\n\\n    function triggerClaimEvent(address _stakeholder, uint256 _reward, uint256 _from, uint256 _to) external onlyValidListing {\\n        emit Claim(_msgSender(), _stakeholder, _reward, _from, _to);\\n    }\\n\\n    function triggerRegisterEvent(address _stakeholder, uint256 _amount, uint256 _optionId) external onlyValidListing {\\n        emit Register(_msgSender(), _stakeholder, _amount, _optionId);\\n    }\\n\\n    function triggerUnregisterEvent(address _stakeholder, uint256 _optionId) external onlyValidListing {\\n        emit Unregister(_msgSender(), _stakeholder, _optionId);\\n    }\\n\\n    function triggerUpdateOptionRewardEvent(uint256 _optionId, uint256 _reward) external onlyValidListing {\\n        emit UpdateOptionReward(_msgSender(), _optionId, _reward);\\n    }\\n\\n    function triggerUpdateListingIdEvent(uint256 _prevId, uint256 _newId) external onlyValidListing {\\n        emit UpdateListingId(_msgSender(), _prevId, _newId);\\n    }\\n\\n    function triggerUpdateOwnerEvent(address _prevOwner, address _newOwner) external onlyValidListing {\\n        emit UpdateOwner(_msgSender(), _prevOwner, _newOwner);\\n    }\\n\\n    function triggerUpdateValidatorEvent(address _prevValidator, address _newValidator) external onlyValidListing {\\n        emit UpdateValidator(_msgSender(), _prevValidator, _newValidator);\\n    }\\n\\n     /**\\n     * @dev Modifier, making sure the listing caller is a valid listing\\n     */\\n    modifier onlyValidListing() {\\n        require(listingStatus[_msgSender()]._isCreated, \\\"Token: Invalid Listing\\\");\\n        require(listingStatus[_msgSender()]._active, \\\"Token: Inactive Listing\\\");\\n        _;\\n    }\\n\\n\\n    /**\\n     * @dev Emitted a new Listing is created. `_validator` should be the caller, \\n     * `_owner` should be the specified address and `_listingAddress` is the\\n     * newly created listing address\\n     */\\n    event ListingCreation(address _validator, address _owner, address _listingAddress);\\n\\n    /**\\n     * @dev Emitted when the staking address is updated, `_stakingAddr` should be the new address \\n     */\\n    event UpdateStakingAddr(address _stakingAddr);\\n\\n    /**\\n     * @notice Below are events triggered from individual listing contract. These events are off-loaded from\\n     * separated contracts to this token contract, so that we can \\\"listen\\\" to listing events in a centralized place\\n     */\\n    \\n    /**\\n     * @dev Emitted when the worker status of a listing is updated.\\n     *\\n     * `_worker` is the updated address, `_isAuthorized` is the new status\\n     */\\n    event UpdateWorker(address _listing, address _worker, bool _isAuthorized);\\n\\n    /**\\n     * @dev Emitted when the validator update listing's value\\n     *\\n     * `_value` is the new listing value\\n     */\\n    event UpdateValue (address _listing, uint256 _value);\\n\\n    /**\\n     * @dev Emitted when the validator update listing's daily payment\\n     *\\n     * `_payment` is the previous listing daily payment\\n     */\\n    event UpdateDailyPayment (address _listing, uint256 _payment);\\n\\n    /**\\n     * @dev Emitted when the owner extends ownership with a listing\\n     *\\n     * `_prevOwner` is the previous owner address\\n     * `_newOwner` is the new owner address\\n     * `_start` is the existing ownership\\n     * `_end` is when the ownership ends\\n     * `_amount` is the transfered amount\\n     */\\n    event OwnershipExtension (address _listing, address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount);\\n\\n    /**\\n     * @dev Emitted when the owner withdraws tokens (forfeit ownership for a listing)\\n     *\\n     * `owner` is the owner withdrawing\\n     * `_amount` is the amount to return to the owner\\n     * `_initOwnership` is the initial ownership value\\n     * `_newOwnership` is the updated ownership value\\n     */\\n    event Withdraw (address _listing, address owner, uint256 _amount, uint256 _initOwnership, uint256 _newOwnership);\\n\\n    /** @dev Emitted when an user claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_reward` is the reward amount\\n     * `_from` -> `_to` is the staking period of time\\n     */\\n    event Claim(address _listing, address _stakeholder, uint256 _reward, uint256 _from, uint256 _to);\\n\\n    /** @dev Emitted when an user registers for claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_amount` is the registered amount\\n     * `_optionId` is the chosen option\\n     */\\n    event Register(address _listing, address _stakeholder, uint256 _amount, uint256 _optionId);\\n\\n    /** @dev Emitted when an user unregisters for claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_optionId` is the unregistered option\\n     */\\n    event Unregister(address _listing, address _stakeholder, uint256 _optionId);\\n\\n    /** @dev Emitted when a listing's validator update option reward\\n     *\\n     * `_optionId` is the updated option\\n     * `_reward` is the reward value\\n     */\\n    event UpdateOptionReward(address _listing, uint256 _optionId, uint256 _reward);\\n    \\n    /** @dev Emitted when a listing's validator update listing's ID\\n     *\\n     * `_prevId` is the previous id\\n     * `_newId` is the new id\\n     */\\n    event UpdateListingId(address _listing, uint256 _prevId, uint256 _newId);\\n\\n    /** @dev Emitted when a listing's validator update listing's owner\\n     *\\n     * `_prevOwner` is the previous owner\\n     * `_newOwner` is the new owner\\n     */\\n    event UpdateOwner(address _listing, address _prevOwner, address _newOwner);\\n\\n    /** @dev Emitted when a listing's validator is updated\\n     *\\n     * `_prevValidator` is the previous validator\\n     * `_newValidator` is the new validator\\n     */\\n    event UpdateValidator(address _listing, address _prevValidator, address _newValidator);\\n\\n}\\n\",\"keccak256\":\"0xaa27570236b5d694336762b73d3eff0fcb609d28ce52049b45f97656c54f2d3e\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60a06040523060805234801561001457600080fd5b5060805161570861004560003960008181610fa101528181610fe4015281816111e7015261122a01526157086000f3fe608060405260043610620003055760003560e01c80637602f0f11162000194578063c4d66de811620000ee578063dd62ed3e11620000a1578063e6d50cd71162000078578063e6d50cd71462000a14578063e9dc65bb1462000a6a578063f8d7f7901462000a8f578063fe6d81241462000ab257600080fd5b8063dd62ed3e1462000980578063de6d745f14620009ca578063e5af649a14620009ef57600080fd5b8063c4d66de814620008a8578063cefa3cf414620008cd578063d24ef4f314620008f2578063d547741f1462000915578063d7b4be24146200093a578063dd51183f146200095d57600080fd5b8063a217fddf1162000147578063a217fddf14620007d8578063a457c2d714620007ef578063a9059cbb1462000814578063a9ae14311462000839578063b073cdc9146200085e578063c2a272ed146200088357600080fd5b80637602f0f114620007095780637b6aa922146200072e57806385e1c724146200075157806387d45351146200077657806391d14854146200079b57806395d89b4114620007c057600080fd5b806332d004c5116200026357806342966c6811620002165780635b06a1d111620001ed5780635b06a1d114620006605780636b62393e146200068557806370a0823114620006aa5780637316c87f14620006e457600080fd5b806342966c6814620005ff5780634c2a207514620006245780634f1ef286146200064957600080fd5b806332d004c5146200051057806336568abe14620005355780633659cfe6146200055a578063393df8cb146200057f5780633950935114620005b557806340c10f1914620005da57600080fd5b80631b33557711620002bc5780631b33557714620004285780631d02a459146200044f57806323b872dd1462000474578063248a9ca314620004995780632f2ff15d14620004cd578063313ce56714620004f257600080fd5b806301ffc9a7146200030a57806306fdde03146200034457806307aec462146200036b578063095ea7b314620003a7578063118c4f1314620003cc57806318160ddd1462000411575b600080fd5b3480156200031757600080fd5b506200032f62000329366004620030af565b62000ae8565b60405190151581526020015b60405180910390f35b3480156200035157600080fd5b506200035c62000b20565b6040516200033b91906200310e565b3480156200037857600080fd5b50610132546200038e906001600160a01b031681565b6040516001600160a01b0390911681526020016200033b565b348015620003b457600080fd5b506200032f620003c636600462003159565b62000bba565b348015620003d957600080fd5b50620004027f9667e80708b6eeeb0053fa0cca44e028ff548e2a9f029edfeac87c118b08b7c881565b6040519081526020016200033b565b3480156200041e57600080fd5b5060355462000402565b3480156200043557600080fd5b506200044d6200044736600462003188565b62000bd2565b005b3480156200045c57600080fd5b506200044d6200046e366004620031de565b62000cab565b3480156200048157600080fd5b506200032f620004933660046200321c565b62000d69565b348015620004a657600080fd5b5062000402620004b836600462003262565b60009081526097602052604090206001015490565b348015620004da57600080fd5b506200044d620004ec3660046200327c565b62000e1c565b348015620004ff57600080fd5b50604051601281526020016200033b565b3480156200051d57600080fd5b506200044d6200052f366004620031de565b62000e4b565b3480156200054257600080fd5b506200044d620005543660046200327c565b62000f14565b3480156200056757600080fd5b506200044d62000579366004620032a4565b62000f96565b3480156200058c57600080fd5b50620004027fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a81565b348015620005c257600080fd5b506200032f620005d436600462003159565b6200106b565b348015620005e757600080fd5b506200044d620005f936600462003159565b620010ab565b3480156200060c57600080fd5b506200044d6200061e36600462003262565b620010e4565b3480156200063157600080fd5b506200044d62000643366004620032c4565b6200111d565b6200044d6200065a36600462003312565b620011dc565b3480156200066d57600080fd5b506200044d6200067f366004620032a4565b6200129e565b3480156200069257600080fd5b506200044d620006a4366004620032a4565b62001378565b348015620006b757600080fd5b5062000402620006c9366004620032a4565b6001600160a01b031660009081526033602052604090205490565b348015620006f157600080fd5b506200044d62000703366004620033e2565b62001490565b3480156200071657600080fd5b506200044d6200072836600462003405565b62001544565b3480156200073b57600080fd5b50610131546200038e906001600160a01b031681565b3480156200075e57600080fd5b506200044d6200077036600462003159565b6200160f565b3480156200078357600080fd5b506200044d6200079536600462003159565b6200176f565b348015620007a857600080fd5b506200032f620007ba3660046200327c565b62001821565b348015620007cd57600080fd5b506200035c6200184c565b348015620007e557600080fd5b5062000402600081565b348015620007fc57600080fd5b506200032f6200080e36600462003159565b6200185d565b3480156200082157600080fd5b506200032f6200083336600462003159565b620018fa565b3480156200084657600080fd5b506200044d6200085836600462003405565b6200196a565b3480156200086b57600080fd5b506200044d6200087d366004620033e2565b620019fd565b3480156200089057600080fd5b506200044d620008a2366004620031de565b62001a90565b348015620008b557600080fd5b506200044d620008c7366004620032a4565b62001b23565b348015620008da57600080fd5b506200044d620008ec36600462003459565b62001deb565b348015620008ff57600080fd5b5061012f546200038e906001600160a01b031681565b3480156200092257600080fd5b506200044d620009343660046200327c565b62001ea1565b3480156200094757600080fd5b5061012d546200038e906001600160a01b031681565b3480156200096a57600080fd5b50610133546200038e906001600160a01b031681565b3480156200098d57600080fd5b50620004026200099f366004620031de565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b348015620009d757600080fd5b506200044d620009e936600462003262565b62001ecb565b348015620009fc57600080fd5b506200044d62000a0e36600462003262565b62001f78565b34801562000a2157600080fd5b5062000a5262000a33366004620032a4565b61012e6020526000908152604090205460ff8082169161010090041682565b6040805192151583529015156020830152016200033b565b34801562000a7757600080fd5b506200032f62000a8936600462003493565b6200200b565b34801562000a9c57600080fd5b50610130546200038e906001600160a01b031681565b34801562000abf57600080fd5b50620004027ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc981565b60006001600160e01b03198216637965db0b60e01b148062000b1a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606036805462000b3190620034d6565b80601f016020809104026020016040519081016040528092919081815260200182805462000b5f90620034d6565b801562000bb05780601f1062000b845761010080835404028352916020019162000bb0565b820191906000526020600020905b81548152906001019060200180831162000b9257829003601f168201915b5050505050905090565b600062000bc93384846200216d565b50600192915050565b33600090815261012e602052604090205460ff1662000c0e5760405162461bcd60e51b815260040162000c059062003513565b60405180910390fd5b33600090815261012e6020526040902054610100900460ff1662000c465760405162461bcd60e51b815260040162000c059062003543565b604080513381526001600160a01b038781166020830152861681830152606081018590526080810184905260a0810183905290517fd661111d7b74eb34869b55470afd5d1e1440b83ab39f43ac784653c47943f9119181900360c00190a15050505050565b33600090815261012e602052604090205460ff1662000cde5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662000d165760405162461bcd60e51b815260040162000c059062003543565b7fca3aa9924ec84683328afd54112b546f10fe0fdf29e1b93589fec9ac212d0671335b604080516001600160a01b0392831681528286166020820152918416908201526060015b60405180910390a15050565b600062000d7884848462002295565b506001600160a01b03841660009081526034602090815260408083203384529091529020548281101562000e005760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840162000c05565b62000e0f85338584036200216d565b60019150505b9392505050565b60008281526097602052604090206001015462000e3a81336200246f565b62000e468383620024de565b505050565b62000e5860003362001821565b62000e775760405162461bcd60e51b815260040162000c05906200357a565b6001600160a01b038216600090815261012e602052604090205460ff1662000eb35760405162461bcd60e51b815260040162000c059062003513565b604051630635b27760e41b81526001600160a01b03828116600483015283169063635b277090602401600060405180830381600087803b15801562000ef757600080fd5b505af115801562000f0c573d6000803e3d6000fd5b505050505050565b6001600160a01b038116331462000f865760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840162000c05565b62000f92828262002568565b5050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141562000fe25760405162461bcd60e51b815260040162000c0590620035a7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662001016620025d2565b6001600160a01b0316146200103f5760405162461bcd60e51b815260040162000c0590620035f3565b6200104a8162002600565b6040805160008082526020820190925262001068918391906200260e565b50565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909162000bc9918590620010a590869062003655565b6200216d565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9620010d881336200246f565b62000e4683836200276a565b7f9667e80708b6eeeb0053fa0cca44e028ff548e2a9f029edfeac87c118b08b7c86200111181336200246f565b62000f9233836200284f565b33600090815261012e602052604090205460ff16620011505760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620011885760405162461bcd60e51b815260040162000c059062003543565b604080513381526001600160a01b03851660208201528082018490526060810183905290517f2e99fd66dad9611ac11d08dcbfdb417ac840074a8659831e928c70a92a6215e79181900360800190a1505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415620012285760405162461bcd60e51b815260040162000c0590620035a7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166200125c620025d2565b6001600160a01b031614620012855760405162461bcd60e51b815260040162000c0590620035f3565b620012908262002600565b62000f92828260016200260e565b620012ab60003362001821565b620012ca5760405162461bcd60e51b815260040162000c05906200357a565b6001600160a01b038116620013225760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e3a20496e76616c6964205f7374616b696e67416464720000000000604482015260640162000c05565b61012d80546001600160a01b0319166001600160a01b0383169081179091556040519081527f67d8422249b07c675063c3fcea2726f9884bbf0b823d1544a91e36614e41781d906020015b60405180910390a150565b6001600160a01b038116600090815261012e602052604090205460ff16620013b45760405162461bcd60e51b815260040162000c059062003513565b6000816001600160a01b0316633a5381b56040518163ffffffff1660e01b8152600401602060405180830381865afa158015620013f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200141b919062003670565b90506001600160a01b0381163314806200143d57506200143d60003362001821565b6200145c5760405162461bcd60e51b815260040162000c05906200357a565b506001600160a01b0316600090815261012e60205260409020805461ff001981166101009182900460ff1615909102179055565b33600090815261012e602052604090205460ff16620014c35760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620014fb5760405162461bcd60e51b815260040162000c059062003543565b7f0b41ae46eff4fcb84ca7d73bb26c1895837cf2ee95d8978d10c6050760c9bece335b604080516001600160a01b03909216825260208201859052810183905260600162000d5d565b33600090815261012e602052604090205460ff16620015775760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620015af5760405162461bcd60e51b815260040162000c059062003543565b7febff2602b3f468259e1e99f613fed6691f3a6526effe6ef3e768ba7ae7a36c4f335b604080516001600160a01b03928316815291871660208301528101859052606081018490526080810183905260a00160405180910390a150505050565b6200163b7fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a3362001821565b6200165a5760405162461bcd60e51b815260040162000c05906200357a565b6001600160a01b038216620016aa5760405162461bcd60e51b81526020600482015260156024820152742a37b5b2b71d1024b73b30b634b2102fb7bbb732b960591b604482015260640162000c05565b6000338383604051620016bd9062002ffb565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f080158015620016f8573d6000803e3d6000fd5b50604080513381526001600160a01b03868116602083015283168183015290519192507f619b247fd25df695eff36b0d4f3404c04b084cfe052d022badc2011e0cb7cade919081900360600190a16001600160a01b0316600090815261012e60205260409020805461ffff19166101011790555050565b33600090815261012e602052604090205460ff16620017a25760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620017da5760405162461bcd60e51b815260040162000c059062003543565b604080513381526001600160a01b03841660208201529081018290527f919d96a01d8f82aef9804441b70b20c7d17914725ec937618570a9614d7868d19060600162000d5d565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606037805462000b3190620034d6565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015620018e15760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840162000c05565b620018f033858584036200216d565b5060019392505050565b6000806200190a33858562002295565b905080620018f05760405162461bcd60e51b815260206004820152602660248201527f45524332303a20756e7375636365737366756c207472616e73666572206f70656044820152653930ba34b7b760d11b606482015260840162000c05565b33600090815261012e602052604090205460ff166200199d5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620019d55760405162461bcd60e51b815260040162000c059062003543565b7f9137e112a187039f8a3291c0a66fce97153d25ec42036e82360d5d0106d19a6e33620015d2565b33600090815261012e602052604090205460ff1662001a305760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001a685760405162461bcd60e51b815260040162000c059062003543565b7fa2cbfae033bf75a78340ddd0bbbece1b68085d8d8541b8f5c25c3b0ed491b67a336200151e565b33600090815261012e602052604090205460ff1662001ac35760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001afb5760405162461bcd60e51b815260040162000c059062003543565b7f3f10acbb47528c3678643b4b6401f4f685e82b2d5b907f401194bfca0f5eb9583362000d39565b600054610100900460ff168062001b3d575060005460ff16155b62001b5c5760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562001b7f576000805461ffff19166101011790555b6001600160a01b03821662001bd75760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e3a20496e76616c6964205f7374616b696e67416464720000000000604482015260640162000c05565b62001be1620029a3565b62001beb62002a28565b62001c356040518060400160405280600a81526020016920a7232a102a37b5b2b760b11b815250604051806040016040528060048152602001631053919560e21b81525062002a8e565b600062001c456012600a620037db565b62001c559063496ed400620037ec565b61012f80546001600160a01b031990811673b3f5e20db0167d4a5b5c5daad6f1c76cc40cc52d90811790925561013080548216736b3887eb6091cc705ffa6e32e22b5524b3a9bea4179055610131805482167333ae0695fb3250f0788510b289d26309d4b8f9391790556101328054821673f5d2f60663d83abf28969f2a5f501178d8d64baa1790556101338054909116739f1660b7184bde8b8973c6618ac3d7d306e8a79617905590915062001d2790606462001d1584600e620037ec565b62001d2191906200380e565b6200276a565b6101305462001d48906001600160a01b0316606462001d15846022620037ec565b6101315462001d69906001600160a01b0316606462001d15846020620037ec565b6101325462001d8a906001600160a01b0316606462001d15846008620037ec565b6101335462001dab906001600160a01b0316606462001d1584600c620037ec565b61012d80546001600160a01b0319166001600160a01b03851617905562001dd4600033620024de565b50801562000f92576000805461ff00191690555050565b33600090815261012e602052604090205460ff1662001e1e5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001e565760405162461bcd60e51b815260040162000c059062003543565b7fb95dba6532fe75b06ba1c772703405eec99eeab78b9714ea82e9f1b476b08e6733604080516001600160a01b03928316815291851660208301528315159082015260600162000d5d565b60008281526097602052604090206001015462001ebf81336200246f565b62000e46838362002568565b33600090815261012e602052604090205460ff1662001efe5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001f365760405162461bcd60e51b815260040162000c059062003543565b7f59fa608751e52e994195c00b80545995c182284d42f9712fe2394e4cb35d083e335b604080516001600160a01b03909216825260208201849052016200136d565b33600090815261012e602052604090205460ff1662001fab5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001fe35760405162461bcd60e51b815260040162000c059062003543565b7fdc42e244f819799f564ccfdd994971e4be4f86e6f901d47b81e5e29222cce5193362001f59565b33600090815261012e602052604081205460ff166200203e5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620020765760405162461bcd60e51b815260040162000c059062003543565b6001600160a01b038416620020ce5760405162461bcd60e51b815260206004820152601860248201527f546f6b656e3a20496e76616c6964205f75736572416464720000000000000000604482015260640162000c05565b60008083620020eb5761012d546001600160a01b031686620020fb565b61012d5486906001600160a01b03165b909250905060006200210f83838862002295565b905080620021605760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e3a20556e7375636365737366756c207472616e7366657200000000604482015260640162000c05565b5060019695505050505050565b6001600160a01b038316620021d15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840162000c05565b6001600160a01b038216620022345760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840162000c05565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006001600160a01b038416620022fd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840162000c05565b6001600160a01b038316620023615760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840162000c05565b6001600160a01b03841660009081526033602052604090205482811015620023db5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840162000c05565b6001600160a01b038086166000908152603360205260408082208685039055918616815290812080548592906200241490849062003655565b92505081905550836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516200246191815260200190565b60405180910390a362000e0f565b6200247b828262001821565b62000f925762002496816001600160a01b0316601462002b17565b620024a383602062002b17565b604051602001620024b692919062003831565b60408051601f198184030181529082905262461bcd60e51b825262000c05916004016200310e565b620024ea828262001821565b62000f925760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620025243390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b62002574828262001821565b1562000f925760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b600062000f9281336200246f565b60006200261a620025d2565b9050620026278462002cd1565b600083511180620026355750815b15620026495762002647848462002d78565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166200276357805460ff191660011781556040516001600160a01b0383166024820152620026cb90869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b17905262002d78565b50805460ff19168155620026de620025d2565b6001600160a01b0316826001600160a01b031614620027585760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b606482015260840162000c05565b620027638562002e6c565b5050505050565b6001600160a01b038216620027c25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640162000c05565b8060356000828254620027d6919062003655565b90915550506001600160a01b038216600090815260336020526040812080548392906200280590849062003655565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216620028b15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840162000c05565b6001600160a01b03821660009081526033602052604090205481811015620029275760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840162000c05565b6001600160a01b038316600090815260336020526040812083830390556035805484929062002958908490620038aa565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600054610100900460ff1680620029bd575060005460ff16155b620029dc5760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff16158015620029ff576000805461ffff19166101011790555b62002a0962002eae565b62002a1362002eae565b801562001068576000805461ff001916905550565b600054610100900460ff168062002a42575060005460ff16155b62002a615760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002a84576000805461ffff19166101011790555b620029ff62002eae565b600054610100900460ff168062002aa8575060005460ff16155b62002ac75760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002aea576000805461ffff19166101011790555b62002af462002eae565b62002b00838362002f1e565b801562000e46576000805461ff0019169055505050565b6060600062002b28836002620037ec565b62002b3590600262003655565b67ffffffffffffffff81111562002b505762002b50620032fc565b6040519080825280601f01601f19166020018201604052801562002b7b576020820181803683370190505b509050600360fc1b8160008151811062002b995762002b99620038c4565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811062002bcb5762002bcb620038c4565b60200101906001600160f81b031916908160001a905350600062002bf1846002620037ec565b62002bfe90600162003655565b90505b600181111562002c80576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811062002c365762002c36620038c4565b1a60f81b82828151811062002c4f5762002c4f620038c4565b60200101906001600160f81b031916908160001a90535060049490941c9362002c7881620038da565b905062002c01565b50831562000e155760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640162000c05565b803b62002d375760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840162000c05565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b62002dd95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000c05565b600080846001600160a01b03168460405162002df69190620038f4565b600060405180830381855af49150503d806000811462002e33576040519150601f19603f3d011682016040523d82523d6000602084013e62002e38565b606091505b509150915062002e638282604051806060016040528060278152602001620056ac6027913962002fbd565b95945050505050565b62002e778162002cd1565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff168062002ec8575060005460ff16155b62002ee75760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002a13576000805461ffff1916610101179055801562001068576000805461ff001916905550565b600054610100900460ff168062002f38575060005460ff16155b62002f575760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002f7a576000805461ffff19166101011790555b825162002f8f90603690602086019062003009565b50815162002fa590603790602085019062003009565b50801562000e46576000805461ff0019169055505050565b6060831562002fce57508162000e15565b82511562002fdf5782518084602001fd5b8160405162461bcd60e51b815260040162000c0591906200310e565b611d99806200391383390190565b8280546200301790620034d6565b90600052602060002090601f0160209004810192826200303b576000855562003086565b82601f106200305657805160ff191683800117855562003086565b8280016001018555821562003086579182015b828111156200308657825182559160200191906001019062003069565b506200309492915062003098565b5090565b5b8082111562003094576000815560010162003099565b600060208284031215620030c257600080fd5b81356001600160e01b03198116811462000e1557600080fd5b60005b83811015620030f8578181015183820152602001620030de565b8381111562003108576000848401525b50505050565b60208152600082518060208401526200312f816040850160208701620030db565b601f01601f19169190910160400192915050565b6001600160a01b03811681146200106857600080fd5b600080604083850312156200316d57600080fd5b82356200317a8162003143565b946020939093013593505050565b600080600080600060a08688031215620031a157600080fd5b8535620031ae8162003143565b94506020860135620031c08162003143565b94979496505050506040830135926060810135926080909101359150565b60008060408385031215620031f257600080fd5b8235620031ff8162003143565b91506020830135620032118162003143565b809150509250929050565b6000806000606084860312156200323257600080fd5b83356200323f8162003143565b92506020840135620032518162003143565b929592945050506040919091013590565b6000602082840312156200327557600080fd5b5035919050565b600080604083850312156200329057600080fd5b823591506020830135620032118162003143565b600060208284031215620032b757600080fd5b813562000e158162003143565b600080600060608486031215620032da57600080fd5b8335620032e78162003143565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200332657600080fd5b8235620033338162003143565b9150602083013567ffffffffffffffff808211156200335157600080fd5b818501915085601f8301126200336657600080fd5b8135818111156200337b576200337b620032fc565b604051601f8201601f19908116603f01168101908382118183101715620033a657620033a6620032fc565b81604052828152886020848701011115620033c057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060408385031215620033f657600080fd5b50508035926020909101359150565b600080600080608085870312156200341c57600080fd5b8435620034298162003143565b966020860135965060408601359560600135945092505050565b803580151581146200345457600080fd5b919050565b600080604083850312156200346d57600080fd5b82356200347a8162003143565b91506200348a6020840162003443565b90509250929050565b600080600060608486031215620034a957600080fd5b8335620034b68162003143565b925060208401359150620034cd6040850162003443565b90509250925092565b600181811c90821680620034eb57607f821691505b602082108114156200350d57634e487b7160e01b600052602260045260246000fd5b50919050565b602080825260169082015275546f6b656e3a20496e76616c6964204c697374696e6760501b604082015260600190565b60208082526017908201527f546f6b656e3a20496e616374697665204c697374696e67000000000000000000604082015260600190565b602080825260139082015272151bdad95b8e88155b985d5d1a1bdc9a5e9959606a1b604082015260600190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156200366b576200366b6200363f565b500190565b6000602082840312156200368357600080fd5b815162000e158162003143565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181815b808511156200371f5781600019048211156200370357620037036200363f565b808516156200371157918102915b93841c9390800290620036e3565b509250929050565b600082620037385750600162000b1a565b81620037475750600062000b1a565b81600181146200376057600281146200376b576200378b565b600191505062000b1a565b60ff8411156200377f576200377f6200363f565b50506001821b62000b1a565b5060208310610133831016604e8410600b8410161715620037b0575081810a62000b1a565b620037bc8383620036de565b8060001904821115620037d357620037d36200363f565b029392505050565b600062000e1560ff84168362003727565b60008160001904831182151516156200380957620038096200363f565b500290565b6000826200382c57634e487b7160e01b600052601260045260246000fd5b500490565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516200386b816017850160208801620030db565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516200389e816028840160208801620030db565b01602801949350505050565b600082821015620038bf57620038bf6200363f565b500390565b634e487b7160e01b600052603260045260246000fd5b600081620038ec57620038ec6200363f565b506000190190565b6000825162003908818460208701620030db565b919091019291505056fe60a06040523480156200001157600080fd5b5060405162001d9938038062001d99833981016040819052620000349162000091565b600080546001600160a01b039384166001600160a01b031991821617909155600280549490931693169290921790556001554260035533608052620000d2565b80516001600160a01b03811681146200008c57600080fd5b919050565b600080600060608486031215620000a757600080fd5b620000b28462000074565b9250620000c26020850162000074565b9150604084015190509250925092565b608051611c1f6200017a600039600081816102b4015281816103ea015281816105da015281816106a90152818161075d01528181610887015281816109330152818161098901528181610a4701528181610b9001528181610cca01528181610d6301528181610f1301528181611038015281816111690152818161124b01528181611350015281816114080152818161148e0152818161163601526118230152611c1f6000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063573c0bd3116100c35780638da5cb5b1161007c5780638da5cb5b146103345780639405dfdd14610347578063a02b161e14610350578063a5edfb5314610363578063ae169a5014610376578063d66d6c101461038957600080fd5b8063573c0bd3146102d65780635d03147a146102e9578063635b2770146102f257806380e4cc9d14610305578063880cdc31146103185780638b0e9f3f1461032b57600080fd5b80634048a257116101155780634048a2571461021b578063409e22051461024e5780634338fbaa14610280578063506f50bc1461028957806354a499021461029c57806355a373d6146102af57600080fd5b8063103a62ba146101525780632a421332146101675780632e1a7d4d146101c65780633a5381b5146101d95780633fa4f24514610204575b600080fd5b6101656101603660046119f6565b61039c565b005b6101a4610175366004611a2b565b600860209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6101656101d43660046119f6565b610452565b6002546101ec906001600160a01b031681565b6040516001600160a01b0390911681526020016101bd565b61020d60045481565b6040519081526020016101bd565b61023e610229366004611a57565b60066020526000908152604090205460ff1681565b60405190151581526020016101bd565b6101a461025c3660046119f6565b60076020526000908152604090208054600182015460029092015490919060ff1683565b61020d60055481565b6101656102973660046119f6565b610712565b6101656102aa366004611a72565b6107c9565b6101ec7f000000000000000000000000000000000000000000000000000000000000000081565b6101656102e43660046119f6565b6108ef565b61020d60035481565b610165610300366004611a57565b61096a565b610165610313366004611a57565b610ac8565b610165610326366004611a57565b610bc1565b61020d60095481565b6000546101ec906001600160a01b031681565b61020d60015481565b61016561035e3660046119f6565b610d4b565b6101656103713660046119f6565b610f7c565b6101656103843660046119f6565b6111cb565b610165610397366004611a72565b611476565b6002546001600160a01b031633146103cf5760405162461bcd60e51b81526004016103c690611a94565b60405180910390fd5b600581905560405163de6d745f60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063de6d745f906024015b600060405180830381600087803b15801561043757600080fd5b505af115801561044b573d6000803e3d6000fd5b5050505050565b6000546001600160a01b0316331461047c5760405162461bcd60e51b81526004016103c690611a94565b4260035410156104ce5760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a204f776e657273686970206578706972656421000000000060448201526064016103c6565b6005548110156105205760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103c6565b60055460009061053d906105378462015180611888565b9061189b565b90506000610556826003546118a790919063ffffffff16565b905061056542620151806118b3565b8110156105b45760405162461bcd60e51b815260206004820152601860248201527f4c697374696e673a20496e76616c696420616d6f756e7421000000000000000060448201526064016103c6565b60405163e9dc65bb60e01b815233600482015260248101849052600060448201819052907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e9dc65bb906064016020604051808303816000875af115801561062b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064f9190611ace565b90508061066e5760405162461bcd60e51b81526004016103c690611ae9565b600054600354604051637602f0f160e01b81526001600160a01b039283166004820152602481018790526044810191909152606481018490527f000000000000000000000000000000000000000000000000000000000000000090911690637602f0f190608401600060405180830381600087803b1580156106ef57600080fd5b505af1158015610703573d6000803e3d6000fd5b50505060039290925550505050565b6002546001600160a01b0316331461073c5760405162461bcd60e51b81526004016103c690611a94565b600154604051637316c87f60e01b81526004810191909152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637316c87f90604401600060405180830381600087803b1580156107a957600080fd5b505af11580156107bd573d6000803e3d6000fd5b50505060019190915550565b6002546001600160a01b031633146107f35760405162461bcd60e51b81526004016103c690611a94565b60648111156108445760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c756500000060448201526064016103c6565b6000828152600760205260409081902060018082018490556002909101805460ff191690911790555163b073cdc960e01b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b073cdc990604401600060405180830381600087803b1580156108d357600080fd5b505af11580156108e7573d6000803e3d6000fd5b505050505050565b6002546001600160a01b031633146109195760405162461bcd60e51b81526004016103c690611a94565b60048181556040516372d7b24d60e11b81529081018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e5af649a9060240161041d565b6002546001600160a01b03163314806109ab5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b6109c75760405162461bcd60e51b81526004016103c690611a94565b6001600160a01b038116610a1d5760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a20496e76616c6964205f76616c696461746f72000000000060448201526064016103c6565b600254604051631d02a45960e01b81526001600160a01b03918216600482015282821660248201527f000000000000000000000000000000000000000000000000000000000000000090911690631d02a45990604401600060405180830381600087803b158015610a8d57600080fd5b505af1158015610aa1573d6000803e3d6000fd5b5050600280546001600160a01b0319166001600160a01b0394909416939093179092555050565b6000546001600160a01b03163314610af25760405162461bcd60e51b81526004016103c690611a94565b426003541015610b445760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a204f776e657273686970206578706972656400000000000060448201526064016103c6565b6001600160a01b0381811660008181526006602052604090819020805460ff8082161560ff19909216821790925591516333be8f3d60e21b8152600481019390935216151560248201527f00000000000000000000000000000000000000000000000000000000000000009091169063cefa3cf49060440161041d565b6002546001600160a01b03163314610beb5760405162461bcd60e51b81526004016103c690611a94565b4262015180600354610bfd9190611b36565b10610c4a5760405162461bcd60e51b815260206004820152601760248201527f4f776e6572206861736e277420666f726665697465642100000000000000000060448201526064016103c6565b6001600160a01b038116610ca05760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e76616c6964205f6e65774f776e657200000000000060448201526064016103c6565b60005460405163c2a272ed60e01b81526001600160a01b03918216600482015282821660248201527f00000000000000000000000000000000000000000000000000000000000000009091169063c2a272ed90604401600060405180830381600087803b158015610d1057600080fd5b505af1158015610d24573d6000803e3d6000fd5b5050600080546001600160a01b0319166001600160a01b0394909416939093179092555050565b60405163e6d50cd760e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e6d50cd7906024016040805180830381865afa158015610db1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd59190611b4d565b91505080610e255760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103c6565b60008281526008602090815260408083203384529091529020600281015460ff16610e8d5760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103c6565b600181015415610ea057610ea0836111cb565b6001810154600084815260076020526040902054610ebd916118a7565b6000848152600760205260409020556001810154600954610edd916118a7565b60095560006001820181905560028201805460ff1916905581556040516387d4535160e01b8152336004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906387d4535190604401600060405180830381600087803b158015610f5f57600080fd5b505af1158015610f73573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0316331480610fa457504262015180600354610fa29190611b36565b105b610fc05760405162461bcd60e51b81526004016103c690611a94565b6005548110156110125760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103c6565b60405163e9dc65bb60e01b815233600482015260248101829052600160448201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e9dc65bb906064016020604051808303816000875af1158015611089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ad9190611ace565b9050806110cc5760405162461bcd60e51b81526004016103c690611ae9565b6003546000546001600160a01b0316426110e96201518084611b36565b101561110557600080546001600160a01b031916331790554291505b6005546111249061111d906105378762015180611888565b83906118b3565b6003819055600054604051631b33557760e01b81526001600160a01b0384811660048301529182166024820152604481018590526064810192909252608482018690527f00000000000000000000000000000000000000000000000000000000000000001690631b3355779060a401600060405180830381600087803b1580156111ad57600080fd5b505af11580156111c1573d6000803e3d6000fd5b5050505050505050565b60008181526008602090815260408083203384529091529020600281015460ff166112335760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103c6565b6040516370a0823160e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561129a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112be9190611b77565b905081600101548110156113145760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103c6565b600061132084846118bf565b60405163e9dc65bb60e01b8152336004820152602481018290526000604482018190529192506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e9dc65bb906064016020604051808303816000875af1158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd9190611ace565b9050806113dc5760405162461bcd60e51b81526004016103c690611ae9565b835460405163a9ae143160e01b81523360048201526024810184905260448101919091524260648201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ae143190608401600060405180830381600087803b15801561145457600080fd5b505af1158015611468573d6000803e3d6000fd5b505042909555505050505050565b60405163e6d50cd760e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e6d50cd7906024016040805180830381865afa1580156114dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115009190611b4d565b915050806115505760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103c6565b60008281526007602052604090206002015460ff166115b15760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c6500000060448201526064016103c6565b60008281526008602090815260408083203384529091529020600181015484141561161e5760405162461bcd60e51b815260206004820152601960248201527f4c697374696e673a205374616b6520756e6368616e676564210000000000000060448201526064016103c6565b6040516370a0823160e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611685573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a99190611b77565b9050848110156116fb5760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103c6565b60018201541561170e5761170e846111cb565b6001820154851160008161173057600184015461172b90886118a7565b611740565b60018401546117409088906118a7565b9050811561179957600184015461175790826118b3565b600185015560008681526007602052604090205461177590826118b3565b60008781526007602052604090205560095461179190826118b3565b6009556117e6565b60018401546117a890826118a7565b60018501556000868152600760205260409020546117c690826118a7565b6000878152600760205260409020556009546117e290826118a7565b6009555b42845560028401805460ff19166001179055604051634c2a207560e01b815233600482015260248101889052604481018790526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634c2a207590606401600060405180830381600087803b15801561186757600080fd5b505af115801561187b573d6000803e3d6000fd5b5050505050505050505050565b60006118948284611b90565b9392505050565b60006118948284611baf565b60006118948284611b36565b60006118948284611bd1565b600454600954600091670de0b6b3a76400009183916118e2916105379085611888565b90506118f46064610537846056611888565b81111561190e5761190b6064610537846056611888565b90505b4260035410801561192d575061192a6064610537846032611888565b81115b15611945576119426064610537846032611888565b90505b6000611960836105378460055461188890919063ffffffff16565b60008781526007602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff16151593820193909352908a0154949550936119c39261053791906119bd9060649084908a90611888565b90611888565b87549091506000906119d69042906118a7565b90506119e9620151806105378484611888565b9998505050505050505050565b600060208284031215611a0857600080fd5b5035919050565b80356001600160a01b0381168114611a2657600080fd5b919050565b60008060408385031215611a3e57600080fd5b82359150611a4e60208401611a0f565b90509250929050565b600060208284031215611a6957600080fd5b61189482611a0f565b60008060408385031215611a8557600080fd5b50508035926020909101359150565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b80518015158114611a2657600080fd5b600060208284031215611ae057600080fd5b61189482611abe565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015611b4857611b48611b20565b500390565b60008060408385031215611b6057600080fd5b611b6983611abe565b9150611a4e60208401611abe565b600060208284031215611b8957600080fd5b5051919050565b6000816000190483118215151615611baa57611baa611b20565b500290565b600082611bcc57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611be457611be4611b20565b50019056fea2646970667358221220ed688bb3061ee0d8cb91f4da1a72d01f1970ced1f2564e2936614cd59a4e608764736f6c634300080b0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122013613c9a2b57cdef8b6989bf04df25a1a1186a49c72153e47fc6f7909d22fb9664736f6c634300080b0033",
  "deployedBytecode": "0x608060405260043610620003055760003560e01c80637602f0f11162000194578063c4d66de811620000ee578063dd62ed3e11620000a1578063e6d50cd71162000078578063e6d50cd71462000a14578063e9dc65bb1462000a6a578063f8d7f7901462000a8f578063fe6d81241462000ab257600080fd5b8063dd62ed3e1462000980578063de6d745f14620009ca578063e5af649a14620009ef57600080fd5b8063c4d66de814620008a8578063cefa3cf414620008cd578063d24ef4f314620008f2578063d547741f1462000915578063d7b4be24146200093a578063dd51183f146200095d57600080fd5b8063a217fddf1162000147578063a217fddf14620007d8578063a457c2d714620007ef578063a9059cbb1462000814578063a9ae14311462000839578063b073cdc9146200085e578063c2a272ed146200088357600080fd5b80637602f0f114620007095780637b6aa922146200072e57806385e1c724146200075157806387d45351146200077657806391d14854146200079b57806395d89b4114620007c057600080fd5b806332d004c5116200026357806342966c6811620002165780635b06a1d111620001ed5780635b06a1d114620006605780636b62393e146200068557806370a0823114620006aa5780637316c87f14620006e457600080fd5b806342966c6814620005ff5780634c2a207514620006245780634f1ef286146200064957600080fd5b806332d004c5146200051057806336568abe14620005355780633659cfe6146200055a578063393df8cb146200057f5780633950935114620005b557806340c10f1914620005da57600080fd5b80631b33557711620002bc5780631b33557714620004285780631d02a459146200044f57806323b872dd1462000474578063248a9ca314620004995780632f2ff15d14620004cd578063313ce56714620004f257600080fd5b806301ffc9a7146200030a57806306fdde03146200034457806307aec462146200036b578063095ea7b314620003a7578063118c4f1314620003cc57806318160ddd1462000411575b600080fd5b3480156200031757600080fd5b506200032f62000329366004620030af565b62000ae8565b60405190151581526020015b60405180910390f35b3480156200035157600080fd5b506200035c62000b20565b6040516200033b91906200310e565b3480156200037857600080fd5b50610132546200038e906001600160a01b031681565b6040516001600160a01b0390911681526020016200033b565b348015620003b457600080fd5b506200032f620003c636600462003159565b62000bba565b348015620003d957600080fd5b50620004027f9667e80708b6eeeb0053fa0cca44e028ff548e2a9f029edfeac87c118b08b7c881565b6040519081526020016200033b565b3480156200041e57600080fd5b5060355462000402565b3480156200043557600080fd5b506200044d6200044736600462003188565b62000bd2565b005b3480156200045c57600080fd5b506200044d6200046e366004620031de565b62000cab565b3480156200048157600080fd5b506200032f620004933660046200321c565b62000d69565b348015620004a657600080fd5b5062000402620004b836600462003262565b60009081526097602052604090206001015490565b348015620004da57600080fd5b506200044d620004ec3660046200327c565b62000e1c565b348015620004ff57600080fd5b50604051601281526020016200033b565b3480156200051d57600080fd5b506200044d6200052f366004620031de565b62000e4b565b3480156200054257600080fd5b506200044d620005543660046200327c565b62000f14565b3480156200056757600080fd5b506200044d62000579366004620032a4565b62000f96565b3480156200058c57600080fd5b50620004027fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a81565b348015620005c257600080fd5b506200032f620005d436600462003159565b6200106b565b348015620005e757600080fd5b506200044d620005f936600462003159565b620010ab565b3480156200060c57600080fd5b506200044d6200061e36600462003262565b620010e4565b3480156200063157600080fd5b506200044d62000643366004620032c4565b6200111d565b6200044d6200065a36600462003312565b620011dc565b3480156200066d57600080fd5b506200044d6200067f366004620032a4565b6200129e565b3480156200069257600080fd5b506200044d620006a4366004620032a4565b62001378565b348015620006b757600080fd5b5062000402620006c9366004620032a4565b6001600160a01b031660009081526033602052604090205490565b348015620006f157600080fd5b506200044d62000703366004620033e2565b62001490565b3480156200071657600080fd5b506200044d6200072836600462003405565b62001544565b3480156200073b57600080fd5b50610131546200038e906001600160a01b031681565b3480156200075e57600080fd5b506200044d6200077036600462003159565b6200160f565b3480156200078357600080fd5b506200044d6200079536600462003159565b6200176f565b348015620007a857600080fd5b506200032f620007ba3660046200327c565b62001821565b348015620007cd57600080fd5b506200035c6200184c565b348015620007e557600080fd5b5062000402600081565b348015620007fc57600080fd5b506200032f6200080e36600462003159565b6200185d565b3480156200082157600080fd5b506200032f6200083336600462003159565b620018fa565b3480156200084657600080fd5b506200044d6200085836600462003405565b6200196a565b3480156200086b57600080fd5b506200044d6200087d366004620033e2565b620019fd565b3480156200089057600080fd5b506200044d620008a2366004620031de565b62001a90565b348015620008b557600080fd5b506200044d620008c7366004620032a4565b62001b23565b348015620008da57600080fd5b506200044d620008ec36600462003459565b62001deb565b348015620008ff57600080fd5b5061012f546200038e906001600160a01b031681565b3480156200092257600080fd5b506200044d620009343660046200327c565b62001ea1565b3480156200094757600080fd5b5061012d546200038e906001600160a01b031681565b3480156200096a57600080fd5b50610133546200038e906001600160a01b031681565b3480156200098d57600080fd5b50620004026200099f366004620031de565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b348015620009d757600080fd5b506200044d620009e936600462003262565b62001ecb565b348015620009fc57600080fd5b506200044d62000a0e36600462003262565b62001f78565b34801562000a2157600080fd5b5062000a5262000a33366004620032a4565b61012e6020526000908152604090205460ff8082169161010090041682565b6040805192151583529015156020830152016200033b565b34801562000a7757600080fd5b506200032f62000a8936600462003493565b6200200b565b34801562000a9c57600080fd5b50610130546200038e906001600160a01b031681565b34801562000abf57600080fd5b50620004027ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc981565b60006001600160e01b03198216637965db0b60e01b148062000b1a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606036805462000b3190620034d6565b80601f016020809104026020016040519081016040528092919081815260200182805462000b5f90620034d6565b801562000bb05780601f1062000b845761010080835404028352916020019162000bb0565b820191906000526020600020905b81548152906001019060200180831162000b9257829003601f168201915b5050505050905090565b600062000bc93384846200216d565b50600192915050565b33600090815261012e602052604090205460ff1662000c0e5760405162461bcd60e51b815260040162000c059062003513565b60405180910390fd5b33600090815261012e6020526040902054610100900460ff1662000c465760405162461bcd60e51b815260040162000c059062003543565b604080513381526001600160a01b038781166020830152861681830152606081018590526080810184905260a0810183905290517fd661111d7b74eb34869b55470afd5d1e1440b83ab39f43ac784653c47943f9119181900360c00190a15050505050565b33600090815261012e602052604090205460ff1662000cde5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662000d165760405162461bcd60e51b815260040162000c059062003543565b7fca3aa9924ec84683328afd54112b546f10fe0fdf29e1b93589fec9ac212d0671335b604080516001600160a01b0392831681528286166020820152918416908201526060015b60405180910390a15050565b600062000d7884848462002295565b506001600160a01b03841660009081526034602090815260408083203384529091529020548281101562000e005760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b606482015260840162000c05565b62000e0f85338584036200216d565b60019150505b9392505050565b60008281526097602052604090206001015462000e3a81336200246f565b62000e468383620024de565b505050565b62000e5860003362001821565b62000e775760405162461bcd60e51b815260040162000c05906200357a565b6001600160a01b038216600090815261012e602052604090205460ff1662000eb35760405162461bcd60e51b815260040162000c059062003513565b604051630635b27760e41b81526001600160a01b03828116600483015283169063635b277090602401600060405180830381600087803b15801562000ef757600080fd5b505af115801562000f0c573d6000803e3d6000fd5b505050505050565b6001600160a01b038116331462000f865760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840162000c05565b62000f92828262002568565b5050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141562000fe25760405162461bcd60e51b815260040162000c0590620035a7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662001016620025d2565b6001600160a01b0316146200103f5760405162461bcd60e51b815260040162000c0590620035f3565b6200104a8162002600565b6040805160008082526020820190925262001068918391906200260e565b50565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909162000bc9918590620010a590869062003655565b6200216d565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9620010d881336200246f565b62000e4683836200276a565b7f9667e80708b6eeeb0053fa0cca44e028ff548e2a9f029edfeac87c118b08b7c86200111181336200246f565b62000f9233836200284f565b33600090815261012e602052604090205460ff16620011505760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620011885760405162461bcd60e51b815260040162000c059062003543565b604080513381526001600160a01b03851660208201528082018490526060810183905290517f2e99fd66dad9611ac11d08dcbfdb417ac840074a8659831e928c70a92a6215e79181900360800190a1505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415620012285760405162461bcd60e51b815260040162000c0590620035a7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166200125c620025d2565b6001600160a01b031614620012855760405162461bcd60e51b815260040162000c0590620035f3565b620012908262002600565b62000f92828260016200260e565b620012ab60003362001821565b620012ca5760405162461bcd60e51b815260040162000c05906200357a565b6001600160a01b038116620013225760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e3a20496e76616c6964205f7374616b696e67416464720000000000604482015260640162000c05565b61012d80546001600160a01b0319166001600160a01b0383169081179091556040519081527f67d8422249b07c675063c3fcea2726f9884bbf0b823d1544a91e36614e41781d906020015b60405180910390a150565b6001600160a01b038116600090815261012e602052604090205460ff16620013b45760405162461bcd60e51b815260040162000c059062003513565b6000816001600160a01b0316633a5381b56040518163ffffffff1660e01b8152600401602060405180830381865afa158015620013f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200141b919062003670565b90506001600160a01b0381163314806200143d57506200143d60003362001821565b6200145c5760405162461bcd60e51b815260040162000c05906200357a565b506001600160a01b0316600090815261012e60205260409020805461ff001981166101009182900460ff1615909102179055565b33600090815261012e602052604090205460ff16620014c35760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620014fb5760405162461bcd60e51b815260040162000c059062003543565b7f0b41ae46eff4fcb84ca7d73bb26c1895837cf2ee95d8978d10c6050760c9bece335b604080516001600160a01b03909216825260208201859052810183905260600162000d5d565b33600090815261012e602052604090205460ff16620015775760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620015af5760405162461bcd60e51b815260040162000c059062003543565b7febff2602b3f468259e1e99f613fed6691f3a6526effe6ef3e768ba7ae7a36c4f335b604080516001600160a01b03928316815291871660208301528101859052606081018490526080810183905260a00160405180910390a150505050565b6200163b7fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a3362001821565b6200165a5760405162461bcd60e51b815260040162000c05906200357a565b6001600160a01b038216620016aa5760405162461bcd60e51b81526020600482015260156024820152742a37b5b2b71d1024b73b30b634b2102fb7bbb732b960591b604482015260640162000c05565b6000338383604051620016bd9062002ffb565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f080158015620016f8573d6000803e3d6000fd5b50604080513381526001600160a01b03868116602083015283168183015290519192507f619b247fd25df695eff36b0d4f3404c04b084cfe052d022badc2011e0cb7cade919081900360600190a16001600160a01b0316600090815261012e60205260409020805461ffff19166101011790555050565b33600090815261012e602052604090205460ff16620017a25760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620017da5760405162461bcd60e51b815260040162000c059062003543565b604080513381526001600160a01b03841660208201529081018290527f919d96a01d8f82aef9804441b70b20c7d17914725ec937618570a9614d7868d19060600162000d5d565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606037805462000b3190620034d6565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015620018e15760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840162000c05565b620018f033858584036200216d565b5060019392505050565b6000806200190a33858562002295565b905080620018f05760405162461bcd60e51b815260206004820152602660248201527f45524332303a20756e7375636365737366756c207472616e73666572206f70656044820152653930ba34b7b760d11b606482015260840162000c05565b33600090815261012e602052604090205460ff166200199d5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620019d55760405162461bcd60e51b815260040162000c059062003543565b7f9137e112a187039f8a3291c0a66fce97153d25ec42036e82360d5d0106d19a6e33620015d2565b33600090815261012e602052604090205460ff1662001a305760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001a685760405162461bcd60e51b815260040162000c059062003543565b7fa2cbfae033bf75a78340ddd0bbbece1b68085d8d8541b8f5c25c3b0ed491b67a336200151e565b33600090815261012e602052604090205460ff1662001ac35760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001afb5760405162461bcd60e51b815260040162000c059062003543565b7f3f10acbb47528c3678643b4b6401f4f685e82b2d5b907f401194bfca0f5eb9583362000d39565b600054610100900460ff168062001b3d575060005460ff16155b62001b5c5760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562001b7f576000805461ffff19166101011790555b6001600160a01b03821662001bd75760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e3a20496e76616c6964205f7374616b696e67416464720000000000604482015260640162000c05565b62001be1620029a3565b62001beb62002a28565b62001c356040518060400160405280600a81526020016920a7232a102a37b5b2b760b11b815250604051806040016040528060048152602001631053919560e21b81525062002a8e565b600062001c456012600a620037db565b62001c559063496ed400620037ec565b61012f80546001600160a01b031990811673b3f5e20db0167d4a5b5c5daad6f1c76cc40cc52d90811790925561013080548216736b3887eb6091cc705ffa6e32e22b5524b3a9bea4179055610131805482167333ae0695fb3250f0788510b289d26309d4b8f9391790556101328054821673f5d2f60663d83abf28969f2a5f501178d8d64baa1790556101338054909116739f1660b7184bde8b8973c6618ac3d7d306e8a79617905590915062001d2790606462001d1584600e620037ec565b62001d2191906200380e565b6200276a565b6101305462001d48906001600160a01b0316606462001d15846022620037ec565b6101315462001d69906001600160a01b0316606462001d15846020620037ec565b6101325462001d8a906001600160a01b0316606462001d15846008620037ec565b6101335462001dab906001600160a01b0316606462001d1584600c620037ec565b61012d80546001600160a01b0319166001600160a01b03851617905562001dd4600033620024de565b50801562000f92576000805461ff00191690555050565b33600090815261012e602052604090205460ff1662001e1e5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001e565760405162461bcd60e51b815260040162000c059062003543565b7fb95dba6532fe75b06ba1c772703405eec99eeab78b9714ea82e9f1b476b08e6733604080516001600160a01b03928316815291851660208301528315159082015260600162000d5d565b60008281526097602052604090206001015462001ebf81336200246f565b62000e46838362002568565b33600090815261012e602052604090205460ff1662001efe5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001f365760405162461bcd60e51b815260040162000c059062003543565b7f59fa608751e52e994195c00b80545995c182284d42f9712fe2394e4cb35d083e335b604080516001600160a01b03909216825260208201849052016200136d565b33600090815261012e602052604090205460ff1662001fab5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff1662001fe35760405162461bcd60e51b815260040162000c059062003543565b7fdc42e244f819799f564ccfdd994971e4be4f86e6f901d47b81e5e29222cce5193362001f59565b33600090815261012e602052604081205460ff166200203e5760405162461bcd60e51b815260040162000c059062003513565b33600090815261012e6020526040902054610100900460ff16620020765760405162461bcd60e51b815260040162000c059062003543565b6001600160a01b038416620020ce5760405162461bcd60e51b815260206004820152601860248201527f546f6b656e3a20496e76616c6964205f75736572416464720000000000000000604482015260640162000c05565b60008083620020eb5761012d546001600160a01b031686620020fb565b61012d5486906001600160a01b03165b909250905060006200210f83838862002295565b905080620021605760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e3a20556e7375636365737366756c207472616e7366657200000000604482015260640162000c05565b5060019695505050505050565b6001600160a01b038316620021d15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840162000c05565b6001600160a01b038216620022345760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840162000c05565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006001600160a01b038416620022fd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840162000c05565b6001600160a01b038316620023615760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840162000c05565b6001600160a01b03841660009081526033602052604090205482811015620023db5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840162000c05565b6001600160a01b038086166000908152603360205260408082208685039055918616815290812080548592906200241490849062003655565b92505081905550836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516200246191815260200190565b60405180910390a362000e0f565b6200247b828262001821565b62000f925762002496816001600160a01b0316601462002b17565b620024a383602062002b17565b604051602001620024b692919062003831565b60408051601f198184030181529082905262461bcd60e51b825262000c05916004016200310e565b620024ea828262001821565b62000f925760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620025243390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b62002574828262001821565b1562000f925760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b600062000f9281336200246f565b60006200261a620025d2565b9050620026278462002cd1565b600083511180620026355750815b15620026495762002647848462002d78565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166200276357805460ff191660011781556040516001600160a01b0383166024820152620026cb90869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b17905262002d78565b50805460ff19168155620026de620025d2565b6001600160a01b0316826001600160a01b031614620027585760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b606482015260840162000c05565b620027638562002e6c565b5050505050565b6001600160a01b038216620027c25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640162000c05565b8060356000828254620027d6919062003655565b90915550506001600160a01b038216600090815260336020526040812080548392906200280590849062003655565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216620028b15760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840162000c05565b6001600160a01b03821660009081526033602052604090205481811015620029275760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840162000c05565b6001600160a01b038316600090815260336020526040812083830390556035805484929062002958908490620038aa565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600054610100900460ff1680620029bd575060005460ff16155b620029dc5760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff16158015620029ff576000805461ffff19166101011790555b62002a0962002eae565b62002a1362002eae565b801562001068576000805461ff001916905550565b600054610100900460ff168062002a42575060005460ff16155b62002a615760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002a84576000805461ffff19166101011790555b620029ff62002eae565b600054610100900460ff168062002aa8575060005460ff16155b62002ac75760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002aea576000805461ffff19166101011790555b62002af462002eae565b62002b00838362002f1e565b801562000e46576000805461ff0019169055505050565b6060600062002b28836002620037ec565b62002b3590600262003655565b67ffffffffffffffff81111562002b505762002b50620032fc565b6040519080825280601f01601f19166020018201604052801562002b7b576020820181803683370190505b509050600360fc1b8160008151811062002b995762002b99620038c4565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811062002bcb5762002bcb620038c4565b60200101906001600160f81b031916908160001a905350600062002bf1846002620037ec565b62002bfe90600162003655565b90505b600181111562002c80576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811062002c365762002c36620038c4565b1a60f81b82828151811062002c4f5762002c4f620038c4565b60200101906001600160f81b031916908160001a90535060049490941c9362002c7881620038da565b905062002c01565b50831562000e155760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640162000c05565b803b62002d375760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840162000c05565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b62002dd95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000c05565b600080846001600160a01b03168460405162002df69190620038f4565b600060405180830381855af49150503d806000811462002e33576040519150601f19603f3d011682016040523d82523d6000602084013e62002e38565b606091505b509150915062002e638282604051806060016040528060278152602001620056ac6027913962002fbd565b95945050505050565b62002e778162002cd1565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff168062002ec8575060005460ff16155b62002ee75760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002a13576000805461ffff1916610101179055801562001068576000805461ff001916905550565b600054610100900460ff168062002f38575060005460ff16155b62002f575760405162461bcd60e51b815260040162000c059062003690565b600054610100900460ff1615801562002f7a576000805461ffff19166101011790555b825162002f8f90603690602086019062003009565b50815162002fa590603790602085019062003009565b50801562000e46576000805461ff0019169055505050565b6060831562002fce57508162000e15565b82511562002fdf5782518084602001fd5b8160405162461bcd60e51b815260040162000c0591906200310e565b611d99806200391383390190565b8280546200301790620034d6565b90600052602060002090601f0160209004810192826200303b576000855562003086565b82601f106200305657805160ff191683800117855562003086565b8280016001018555821562003086579182015b828111156200308657825182559160200191906001019062003069565b506200309492915062003098565b5090565b5b8082111562003094576000815560010162003099565b600060208284031215620030c257600080fd5b81356001600160e01b03198116811462000e1557600080fd5b60005b83811015620030f8578181015183820152602001620030de565b8381111562003108576000848401525b50505050565b60208152600082518060208401526200312f816040850160208701620030db565b601f01601f19169190910160400192915050565b6001600160a01b03811681146200106857600080fd5b600080604083850312156200316d57600080fd5b82356200317a8162003143565b946020939093013593505050565b600080600080600060a08688031215620031a157600080fd5b8535620031ae8162003143565b94506020860135620031c08162003143565b94979496505050506040830135926060810135926080909101359150565b60008060408385031215620031f257600080fd5b8235620031ff8162003143565b91506020830135620032118162003143565b809150509250929050565b6000806000606084860312156200323257600080fd5b83356200323f8162003143565b92506020840135620032518162003143565b929592945050506040919091013590565b6000602082840312156200327557600080fd5b5035919050565b600080604083850312156200329057600080fd5b823591506020830135620032118162003143565b600060208284031215620032b757600080fd5b813562000e158162003143565b600080600060608486031215620032da57600080fd5b8335620032e78162003143565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200332657600080fd5b8235620033338162003143565b9150602083013567ffffffffffffffff808211156200335157600080fd5b818501915085601f8301126200336657600080fd5b8135818111156200337b576200337b620032fc565b604051601f8201601f19908116603f01168101908382118183101715620033a657620033a6620032fc565b81604052828152886020848701011115620033c057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060408385031215620033f657600080fd5b50508035926020909101359150565b600080600080608085870312156200341c57600080fd5b8435620034298162003143565b966020860135965060408601359560600135945092505050565b803580151581146200345457600080fd5b919050565b600080604083850312156200346d57600080fd5b82356200347a8162003143565b91506200348a6020840162003443565b90509250929050565b600080600060608486031215620034a957600080fd5b8335620034b68162003143565b925060208401359150620034cd6040850162003443565b90509250925092565b600181811c90821680620034eb57607f821691505b602082108114156200350d57634e487b7160e01b600052602260045260246000fd5b50919050565b602080825260169082015275546f6b656e3a20496e76616c6964204c697374696e6760501b604082015260600190565b60208082526017908201527f546f6b656e3a20496e616374697665204c697374696e67000000000000000000604082015260600190565b602080825260139082015272151bdad95b8e88155b985d5d1a1bdc9a5e9959606a1b604082015260600190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156200366b576200366b6200363f565b500190565b6000602082840312156200368357600080fd5b815162000e158162003143565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181815b808511156200371f5781600019048211156200370357620037036200363f565b808516156200371157918102915b93841c9390800290620036e3565b509250929050565b600082620037385750600162000b1a565b81620037475750600062000b1a565b81600181146200376057600281146200376b576200378b565b600191505062000b1a565b60ff8411156200377f576200377f6200363f565b50506001821b62000b1a565b5060208310610133831016604e8410600b8410161715620037b0575081810a62000b1a565b620037bc8383620036de565b8060001904821115620037d357620037d36200363f565b029392505050565b600062000e1560ff84168362003727565b60008160001904831182151516156200380957620038096200363f565b500290565b6000826200382c57634e487b7160e01b600052601260045260246000fd5b500490565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516200386b816017850160208801620030db565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516200389e816028840160208801620030db565b01602801949350505050565b600082821015620038bf57620038bf6200363f565b500390565b634e487b7160e01b600052603260045260246000fd5b600081620038ec57620038ec6200363f565b506000190190565b6000825162003908818460208701620030db565b919091019291505056fe60a06040523480156200001157600080fd5b5060405162001d9938038062001d99833981016040819052620000349162000091565b600080546001600160a01b039384166001600160a01b031991821617909155600280549490931693169290921790556001554260035533608052620000d2565b80516001600160a01b03811681146200008c57600080fd5b919050565b600080600060608486031215620000a757600080fd5b620000b28462000074565b9250620000c26020850162000074565b9150604084015190509250925092565b608051611c1f6200017a600039600081816102b4015281816103ea015281816105da015281816106a90152818161075d01528181610887015281816109330152818161098901528181610a4701528181610b9001528181610cca01528181610d6301528181610f1301528181611038015281816111690152818161124b01528181611350015281816114080152818161148e0152818161163601526118230152611c1f6000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063573c0bd3116100c35780638da5cb5b1161007c5780638da5cb5b146103345780639405dfdd14610347578063a02b161e14610350578063a5edfb5314610363578063ae169a5014610376578063d66d6c101461038957600080fd5b8063573c0bd3146102d65780635d03147a146102e9578063635b2770146102f257806380e4cc9d14610305578063880cdc31146103185780638b0e9f3f1461032b57600080fd5b80634048a257116101155780634048a2571461021b578063409e22051461024e5780634338fbaa14610280578063506f50bc1461028957806354a499021461029c57806355a373d6146102af57600080fd5b8063103a62ba146101525780632a421332146101675780632e1a7d4d146101c65780633a5381b5146101d95780633fa4f24514610204575b600080fd5b6101656101603660046119f6565b61039c565b005b6101a4610175366004611a2b565b600860209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6101656101d43660046119f6565b610452565b6002546101ec906001600160a01b031681565b6040516001600160a01b0390911681526020016101bd565b61020d60045481565b6040519081526020016101bd565b61023e610229366004611a57565b60066020526000908152604090205460ff1681565b60405190151581526020016101bd565b6101a461025c3660046119f6565b60076020526000908152604090208054600182015460029092015490919060ff1683565b61020d60055481565b6101656102973660046119f6565b610712565b6101656102aa366004611a72565b6107c9565b6101ec7f000000000000000000000000000000000000000000000000000000000000000081565b6101656102e43660046119f6565b6108ef565b61020d60035481565b610165610300366004611a57565b61096a565b610165610313366004611a57565b610ac8565b610165610326366004611a57565b610bc1565b61020d60095481565b6000546101ec906001600160a01b031681565b61020d60015481565b61016561035e3660046119f6565b610d4b565b6101656103713660046119f6565b610f7c565b6101656103843660046119f6565b6111cb565b610165610397366004611a72565b611476565b6002546001600160a01b031633146103cf5760405162461bcd60e51b81526004016103c690611a94565b60405180910390fd5b600581905560405163de6d745f60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063de6d745f906024015b600060405180830381600087803b15801561043757600080fd5b505af115801561044b573d6000803e3d6000fd5b5050505050565b6000546001600160a01b0316331461047c5760405162461bcd60e51b81526004016103c690611a94565b4260035410156104ce5760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a204f776e657273686970206578706972656421000000000060448201526064016103c6565b6005548110156105205760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103c6565b60055460009061053d906105378462015180611888565b9061189b565b90506000610556826003546118a790919063ffffffff16565b905061056542620151806118b3565b8110156105b45760405162461bcd60e51b815260206004820152601860248201527f4c697374696e673a20496e76616c696420616d6f756e7421000000000000000060448201526064016103c6565b60405163e9dc65bb60e01b815233600482015260248101849052600060448201819052907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e9dc65bb906064016020604051808303816000875af115801561062b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064f9190611ace565b90508061066e5760405162461bcd60e51b81526004016103c690611ae9565b600054600354604051637602f0f160e01b81526001600160a01b039283166004820152602481018790526044810191909152606481018490527f000000000000000000000000000000000000000000000000000000000000000090911690637602f0f190608401600060405180830381600087803b1580156106ef57600080fd5b505af1158015610703573d6000803e3d6000fd5b50505060039290925550505050565b6002546001600160a01b0316331461073c5760405162461bcd60e51b81526004016103c690611a94565b600154604051637316c87f60e01b81526004810191909152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637316c87f90604401600060405180830381600087803b1580156107a957600080fd5b505af11580156107bd573d6000803e3d6000fd5b50505060019190915550565b6002546001600160a01b031633146107f35760405162461bcd60e51b81526004016103c690611a94565b60648111156108445760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c756500000060448201526064016103c6565b6000828152600760205260409081902060018082018490556002909101805460ff191690911790555163b073cdc960e01b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b073cdc990604401600060405180830381600087803b1580156108d357600080fd5b505af11580156108e7573d6000803e3d6000fd5b505050505050565b6002546001600160a01b031633146109195760405162461bcd60e51b81526004016103c690611a94565b60048181556040516372d7b24d60e11b81529081018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e5af649a9060240161041d565b6002546001600160a01b03163314806109ab5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b6109c75760405162461bcd60e51b81526004016103c690611a94565b6001600160a01b038116610a1d5760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a20496e76616c6964205f76616c696461746f72000000000060448201526064016103c6565b600254604051631d02a45960e01b81526001600160a01b03918216600482015282821660248201527f000000000000000000000000000000000000000000000000000000000000000090911690631d02a45990604401600060405180830381600087803b158015610a8d57600080fd5b505af1158015610aa1573d6000803e3d6000fd5b5050600280546001600160a01b0319166001600160a01b0394909416939093179092555050565b6000546001600160a01b03163314610af25760405162461bcd60e51b81526004016103c690611a94565b426003541015610b445760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a204f776e657273686970206578706972656400000000000060448201526064016103c6565b6001600160a01b0381811660008181526006602052604090819020805460ff8082161560ff19909216821790925591516333be8f3d60e21b8152600481019390935216151560248201527f00000000000000000000000000000000000000000000000000000000000000009091169063cefa3cf49060440161041d565b6002546001600160a01b03163314610beb5760405162461bcd60e51b81526004016103c690611a94565b4262015180600354610bfd9190611b36565b10610c4a5760405162461bcd60e51b815260206004820152601760248201527f4f776e6572206861736e277420666f726665697465642100000000000000000060448201526064016103c6565b6001600160a01b038116610ca05760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e76616c6964205f6e65774f776e657200000000000060448201526064016103c6565b60005460405163c2a272ed60e01b81526001600160a01b03918216600482015282821660248201527f00000000000000000000000000000000000000000000000000000000000000009091169063c2a272ed90604401600060405180830381600087803b158015610d1057600080fd5b505af1158015610d24573d6000803e3d6000fd5b5050600080546001600160a01b0319166001600160a01b0394909416939093179092555050565b60405163e6d50cd760e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e6d50cd7906024016040805180830381865afa158015610db1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd59190611b4d565b91505080610e255760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103c6565b60008281526008602090815260408083203384529091529020600281015460ff16610e8d5760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103c6565b600181015415610ea057610ea0836111cb565b6001810154600084815260076020526040902054610ebd916118a7565b6000848152600760205260409020556001810154600954610edd916118a7565b60095560006001820181905560028201805460ff1916905581556040516387d4535160e01b8152336004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906387d4535190604401600060405180830381600087803b158015610f5f57600080fd5b505af1158015610f73573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0316331480610fa457504262015180600354610fa29190611b36565b105b610fc05760405162461bcd60e51b81526004016103c690611a94565b6005548110156110125760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103c6565b60405163e9dc65bb60e01b815233600482015260248101829052600160448201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e9dc65bb906064016020604051808303816000875af1158015611089573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ad9190611ace565b9050806110cc5760405162461bcd60e51b81526004016103c690611ae9565b6003546000546001600160a01b0316426110e96201518084611b36565b101561110557600080546001600160a01b031916331790554291505b6005546111249061111d906105378762015180611888565b83906118b3565b6003819055600054604051631b33557760e01b81526001600160a01b0384811660048301529182166024820152604481018590526064810192909252608482018690527f00000000000000000000000000000000000000000000000000000000000000001690631b3355779060a401600060405180830381600087803b1580156111ad57600080fd5b505af11580156111c1573d6000803e3d6000fd5b5050505050505050565b60008181526008602090815260408083203384529091529020600281015460ff166112335760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103c6565b6040516370a0823160e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561129a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112be9190611b77565b905081600101548110156113145760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103c6565b600061132084846118bf565b60405163e9dc65bb60e01b8152336004820152602481018290526000604482018190529192506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e9dc65bb906064016020604051808303816000875af1158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd9190611ace565b9050806113dc5760405162461bcd60e51b81526004016103c690611ae9565b835460405163a9ae143160e01b81523360048201526024810184905260448101919091524260648201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ae143190608401600060405180830381600087803b15801561145457600080fd5b505af1158015611468573d6000803e3d6000fd5b505042909555505050505050565b60405163e6d50cd760e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063e6d50cd7906024016040805180830381865afa1580156114dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115009190611b4d565b915050806115505760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103c6565b60008281526007602052604090206002015460ff166115b15760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c6500000060448201526064016103c6565b60008281526008602090815260408083203384529091529020600181015484141561161e5760405162461bcd60e51b815260206004820152601960248201527f4c697374696e673a205374616b6520756e6368616e676564210000000000000060448201526064016103c6565b6040516370a0823160e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611685573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a99190611b77565b9050848110156116fb5760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103c6565b60018201541561170e5761170e846111cb565b6001820154851160008161173057600184015461172b90886118a7565b611740565b60018401546117409088906118a7565b9050811561179957600184015461175790826118b3565b600185015560008681526007602052604090205461177590826118b3565b60008781526007602052604090205560095461179190826118b3565b6009556117e6565b60018401546117a890826118a7565b60018501556000868152600760205260409020546117c690826118a7565b6000878152600760205260409020556009546117e290826118a7565b6009555b42845560028401805460ff19166001179055604051634c2a207560e01b815233600482015260248101889052604481018790526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634c2a207590606401600060405180830381600087803b15801561186757600080fd5b505af115801561187b573d6000803e3d6000fd5b5050505050505050505050565b60006118948284611b90565b9392505050565b60006118948284611baf565b60006118948284611b36565b60006118948284611bd1565b600454600954600091670de0b6b3a76400009183916118e2916105379085611888565b90506118f46064610537846056611888565b81111561190e5761190b6064610537846056611888565b90505b4260035410801561192d575061192a6064610537846032611888565b81115b15611945576119426064610537846032611888565b90505b6000611960836105378460055461188890919063ffffffff16565b60008781526007602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff16151593820193909352908a0154949550936119c39261053791906119bd9060649084908a90611888565b90611888565b87549091506000906119d69042906118a7565b90506119e9620151806105378484611888565b9998505050505050505050565b600060208284031215611a0857600080fd5b5035919050565b80356001600160a01b0381168114611a2657600080fd5b919050565b60008060408385031215611a3e57600080fd5b82359150611a4e60208401611a0f565b90509250929050565b600060208284031215611a6957600080fd5b61189482611a0f565b60008060408385031215611a8557600080fd5b50508035926020909101359150565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b80518015158114611a2657600080fd5b600060208284031215611ae057600080fd5b61189482611abe565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015611b4857611b48611b20565b500390565b60008060408385031215611b6057600080fd5b611b6983611abe565b9150611a4e60208401611abe565b600060208284031215611b8957600080fd5b5051919050565b6000816000190483118215151615611baa57611baa611b20565b500290565b600082611bcc57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611be457611be4611b20565b50019056fea2646970667358221220ed688bb3061ee0d8cb91f4da1a72d01f1970ced1f2564e2936614cd59a4e608764736f6c634300080b0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122013613c9a2b57cdef8b6989bf04df25a1a1186a49c72153e47fc6f7909d22fb9664736f6c634300080b0033",
  "devdoc": {
    "events": {
      "Claim(address,address,uint256,uint256,uint256)": {
        "details": "Emitted when an user claiming rewards `_stakeholder` is the stakeholder  `_reward` is the reward amount `_from` -> `_to` is the staking period of time"
      },
      "ListingCreation(address,address,address)": {
        "details": "Emitted a new Listing is created. `_validator` should be the caller,  `_owner` should be the specified address and `_listingAddress` is the newly created listing address"
      },
      "OwnershipExtension(address,address,address,uint256,uint256,uint256)": {
        "details": "Emitted when the owner extends ownership with a listing `_prevOwner` is the previous owner address `_newOwner` is the new owner address `_start` is the existing ownership `_end` is when the ownership ends `_amount` is the transfered amount"
      },
      "Register(address,address,uint256,uint256)": {
        "details": "Emitted when an user registers for claiming rewards `_stakeholder` is the stakeholder  `_amount` is the registered amount `_optionId` is the chosen option"
      },
      "Unregister(address,address,uint256)": {
        "details": "Emitted when an user unregisters for claiming rewards `_stakeholder` is the stakeholder  `_optionId` is the unregistered option"
      },
      "UpdateDailyPayment(address,uint256)": {
        "details": "Emitted when the validator update listing's daily payment `_payment` is the previous listing daily payment"
      },
      "UpdateListingId(address,uint256,uint256)": {
        "details": "Emitted when a listing's validator update listing's ID `_prevId` is the previous id `_newId` is the new id"
      },
      "UpdateOptionReward(address,uint256,uint256)": {
        "details": "Emitted when a listing's validator update option reward `_optionId` is the updated option `_reward` is the reward value"
      },
      "UpdateOwner(address,address,address)": {
        "details": "Emitted when a listing's validator update listing's owner `_prevOwner` is the previous owner `_newOwner` is the new owner"
      },
      "UpdateStakingAddr(address)": {
        "details": "Emitted when the staking address is updated, `_stakingAddr` should be the new address "
      },
      "UpdateValidator(address,address,address)": {
        "details": "Emitted when a listing's validator is updated `_prevValidator` is the previous validator `_newValidator` is the new validator"
      },
      "UpdateValue(address,uint256)": {
        "details": "Emitted when the validator update listing's value `_value` is the new listing value"
      },
      "UpdateWorker(address,address,bool)": {
        "details": "Emitted when the worker status of a listing is updated. `_worker` is the updated address, `_isAuthorized` is the new status"
      },
      "Withdraw(address,address,uint256,uint256,uint256)": {
        "details": "Emitted when the owner withdraws tokens (forfeit ownership for a listing) `owner` is the owner withdrawing `_amount` is the amount to return to the owner `_initOwnership` is the initial ownership value `_newOwnership` is the updated ownership value"
      }
    },
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "burn(uint256)": {
        "details": "Destroys `amount` tokens from the authorized caller's balance See {ERC20-_burn}."
      },
      "createListing(address,uint256)": {
        "details": "Create a new listing (the tokenized version of a real estate product)  Restricted to only validators A newly created listing is set with two properties: `_isCreated` and `_active` Listing's validator is the validator address making the transaction. The validator must specify the address of listing's owner  Emits a {ListingCreation} event"
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "emergencyUpdateListingValidator(address,address)": {
        "details": "In case a validator's key is compromised, {DEFAULT_ADMIN_ROLE}  is able to update listing's validator"
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "handleListingTx(address,uint256,bool)": {
        "details": "Handle transactions from listings and only from listings  If `_in` is true, _amount will be transfered from `_userAddr` to `stakingAddress` Otherwise, `_amount` will be transfered from `stakingAddress` to `_userAddr` Returns true if the transation is success Emits a {Transfer} event from IERC20"
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "initialize(address)": {
        "details": "Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR Staking address is set here  Initial token distribution addresses are also set here since variables can't be initialized outsize  {initialize} function After deployment, {DEFAULT_ADMIN_ROLE} address should be moved to an multisign address and the contract deployer shall renounce {DEFAULT_ADMIN_ROLE}"
      },
      "mint(address,uint256)": {
        "details": "Mints `amount` tokens for the authorized caller's balance See {ERC20-_mint}."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "toggleListingStatus(address)": {
        "details": "Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation Restricted to only the validator of the listing or DEFAULT_ADMIN_ROLE The `_listingAddr` must be the address of a created listing "
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
      },
      "updateStakingAddress(address)": {
        "details": "Update the funds address. Shall be handy if there's a need in changing the initial address, or the previous address is compromised."
      },
      "upgradeTo(address)": {
        "details": "Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event."
      },
      "upgradeToAndCall(address,bytes)": {
        "details": "Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event."
      }
    },
    "stateVariables": {
      "BURNER": {
        "details": "Burners are authorized accounts to burn tokens from their own accounts"
      },
      "MINTER": {
        "details": "Minters are authorized accounts to mint tokens"
      },
      "PLATFORM_DEVELOPMENT": {
        "details": "Initial token distribution addresses according to whitepaper (page 11/24) https://anft.vn/assets/file/ANFTWhitepaperVer1.0.pdf"
      },
      "VALIDATOR": {
        "details": "Validators are authorized accounts to handle listing"
      },
      "stakingAddress": {
        "details": "The funds address for paying out rewards and receiving payments"
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "triggerUpdateListingValueEvent(uint256)": {
        "notice": "The below functions are to trigger listing events. Important {Listing} events can be \"listened\" centrally inside this {Token} contract. Clients can subscribe to every event in {Listing} contracts in this {Token} contract. (Originally events are emitted from separated {Listing} contracts, but that would be impossible  for clients to subscribe for every change from different listings)"
      }
    },
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 823,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_initialized",
        "offset": 0,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 826,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_initializing",
        "offset": 1,
        "slot": "0",
        "type": "t_bool"
      },
      {
        "astId": 1365,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "1",
        "type": "t_array(t_uint256)50_storage"
      },
      {
        "astId": 2018,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_balances",
        "offset": 0,
        "slot": "51",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 2024,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_allowances",
        "offset": 0,
        "slot": "52",
        "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 2026,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_totalSupply",
        "offset": 0,
        "slot": "53",
        "type": "t_uint256"
      },
      {
        "astId": 2028,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_name",
        "offset": 0,
        "slot": "54",
        "type": "t_string_storage"
      },
      {
        "astId": 2030,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_symbol",
        "offset": 0,
        "slot": "55",
        "type": "t_string_storage"
      },
      {
        "astId": 2582,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "56",
        "type": "t_array(t_uint256)45_storage"
      },
      {
        "astId": 1674,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "101",
        "type": "t_array(t_uint256)50_storage"
      },
      {
        "astId": 48,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_roles",
        "offset": 0,
        "slot": "151",
        "type": "t_mapping(t_bytes32,t_struct(RoleData)43_storage)"
      },
      {
        "astId": 335,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "152",
        "type": "t_array(t_uint256)49_storage"
      },
      {
        "astId": 806,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "201",
        "type": "t_array(t_uint256)50_storage"
      },
      {
        "astId": 973,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "251",
        "type": "t_array(t_uint256)50_storage"
      },
      {
        "astId": 3660,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "stakingAddress",
        "offset": 0,
        "slot": "301",
        "type": "t_address"
      },
      {
        "astId": 3670,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "listingStatus",
        "offset": 0,
        "slot": "302",
        "type": "t_mapping(t_address,t_struct(ListingStatusModel)3665_storage)"
      },
      {
        "astId": 3673,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "PLATFORM_DEVELOPMENT",
        "offset": 0,
        "slot": "303",
        "type": "t_address"
      },
      {
        "astId": 3675,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "COMMUNITY",
        "offset": 0,
        "slot": "304",
        "type": "t_address"
      },
      {
        "astId": 3677,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "REAL_ESTATE_SERVICE",
        "offset": 0,
        "slot": "305",
        "type": "t_address"
      },
      {
        "astId": 3679,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "ETF",
        "offset": 0,
        "slot": "306",
        "type": "t_address"
      },
      {
        "astId": 3681,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "REGULATION_FUNDS",
        "offset": 0,
        "slot": "307",
        "type": "t_address"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_uint256)45_storage": {
        "base": "t_uint256",
        "encoding": "inplace",
        "label": "uint256[45]",
        "numberOfBytes": "1440"
      },
      "t_array(t_uint256)49_storage": {
        "base": "t_uint256",
        "encoding": "inplace",
        "label": "uint256[49]",
        "numberOfBytes": "1568"
      },
      "t_array(t_uint256)50_storage": {
        "base": "t_uint256",
        "encoding": "inplace",
        "label": "uint256[50]",
        "numberOfBytes": "1600"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_address,t_struct(ListingStatusModel)3665_storage)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => struct Token.ListingStatusModel)",
        "numberOfBytes": "32",
        "value": "t_struct(ListingStatusModel)3665_storage"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_bytes32,t_struct(RoleData)43_storage)": {
        "encoding": "mapping",
        "key": "t_bytes32",
        "label": "mapping(bytes32 => struct AccessControlUpgradeable.RoleData)",
        "numberOfBytes": "32",
        "value": "t_struct(RoleData)43_storage"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(ListingStatusModel)3665_storage": {
        "encoding": "inplace",
        "label": "struct Token.ListingStatusModel",
        "members": [
          {
            "astId": 3662,
            "contract": "contracts/v1/Token.sol:Token",
            "label": "_isCreated",
            "offset": 0,
            "slot": "0",
            "type": "t_bool"
          },
          {
            "astId": 3664,
            "contract": "contracts/v1/Token.sol:Token",
            "label": "_active",
            "offset": 1,
            "slot": "0",
            "type": "t_bool"
          }
        ],
        "numberOfBytes": "32"
      },
      "t_struct(RoleData)43_storage": {
        "encoding": "inplace",
        "label": "struct AccessControlUpgradeable.RoleData",
        "members": [
          {
            "astId": 40,
            "contract": "contracts/v1/Token.sol:Token",
            "label": "members",
            "offset": 0,
            "slot": "0",
            "type": "t_mapping(t_address,t_bool)"
          },
          {
            "astId": 42,
            "contract": "contracts/v1/Token.sol:Token",
            "label": "adminRole",
            "offset": 0,
            "slot": "1",
            "type": "t_bytes32"
          }
        ],
        "numberOfBytes": "64"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}