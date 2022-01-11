export default {
  "address": "0x1524e49d8c7AFBe3eE8e7Cd30413b7F9bb2EDEc7",
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
  "transactionHash": "0xc5cfb54e5b18f95fda4667d80c5349583291163f99793e59e97f6e590cb0a1e9",
  "receipt": {
    "to": null,
    "from": "0x0F488C370708b4250A253df57193df2ff731ca3D",
    "contractAddress": "0x1524e49d8c7AFBe3eE8e7Cd30413b7F9bb2EDEc7",
    "transactionIndex": 2,
    "gasUsed": "4019470",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x7bef1c3cee873055ae3388328caa4e5cda2c5746405553a55ba315cb53bcc11d",
    "transactionHash": "0xc5cfb54e5b18f95fda4667d80c5349583291163f99793e59e97f6e590cb0a1e9",
    "logs": [],
    "blockNumber": 15759302,
    "cumulativeGasUsed": "6972919",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "solcInputHash": "9bf9c670d76c8c25a4cea9f2e37f0b15",
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"BeaconUpgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_reward\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_from\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_to\",\"type\":\"uint256\"}],\"name\":\"Claim\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_validator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listingAddress\",\"type\":\"address\"}],\"name\":\"ListingCreation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_prevOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_start\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_end\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"OwnershipExtension\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"Register\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"Unregister\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"}],\"name\":\"UpdateDailyPayment\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"UpdateStakingAddr\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"UpdateValue\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_worker\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_isAuthorized\",\"type\":\"bool\"}],\"name\":\"UpdateWorker\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_listing\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_initOwnership\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_newOwnership\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"COMMUNITY\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ETF\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PLATFORM_DEVELOPMENT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"REAL_ESTATE_SERVICE\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"REGULATION_FUNDS\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VALIDATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_listingId\",\"type\":\"uint256\"}],\"name\":\"createListing\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_in\",\"type\":\"bool\"}],\"name\":\"handleListingTx\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"listingStatus\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"_isCreated\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_active\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stakingAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_listingAddr\",\"type\":\"address\"}],\"name\":\"toggleListingStatus\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_reward\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_from\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_to\",\"type\":\"uint256\"}],\"name\":\"triggerClaimEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_prevOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_end\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"triggerOwnershipExtensionEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"triggerRegisterEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakeholder\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_optionId\",\"type\":\"uint256\"}],\"name\":\"triggerUnregisterEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"triggerUpdateListingValueEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"}],\"name\":\"triggerUpdatePaymentEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_worker\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isAuthorized\",\"type\":\"bool\"}],\"name\":\"triggerUpdateWorkerEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_initOwnership\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newOwnership\",\"type\":\"uint256\"}],\"name\":\"triggerWithdrawEvent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_stakingAddr\",\"type\":\"address\"}],\"name\":\"updateStakingAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newImplementation\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Claim(address,address,uint256,uint256,uint256)\":{\"details\":\"Emitted when an user claiming rewards `_stakeholder` is the stakeholder  `_reward` is the reward amount `_from` -> `_to` is the staking period of time\"},\"ListingCreation(address,address,address)\":{\"details\":\"Emitted a new Listing is created. `_validator` should be the caller,  `_owner` should be the specified address and `_listingAddress` is the newly created listing address\"},\"OwnershipExtension(address,address,address,uint256,uint256,uint256)\":{\"details\":\"Emitted when the owner extends ownership with a listing `_prevOwner` is the previous owner address `_newOwner` is the new owner address `_start` is the existing ownership `_end` is when the ownership ends `_amount` is the transfered amount\"},\"Register(address,address,uint256,uint256)\":{\"details\":\"Emitted when an user registers for claiming rewards `_stakeholder` is the stakeholder  `_amount` is the registered amount `_optionId` is the chosen option\"},\"Unregister(address,address,uint256)\":{\"details\":\"Emitted when an user unregisters for claiming rewards `_stakeholder` is the stakeholder  `_optionId` is the unregistered option\"},\"UpdateDailyPayment(address,uint256)\":{\"details\":\"Emitted when the validator update listing's daily payment `_payment` is the previous listing daily payment\"},\"UpdateStakingAddr(address)\":{\"details\":\"Emitted when the staking address is updated, `_stakingAddr` should be the new address \"},\"UpdateValue(address,uint256)\":{\"details\":\"Emitted when the validator update listing's value `_value` is the new listing value\"},\"UpdateWorker(address,address,bool)\":{\"details\":\"Emitted when the worker status of a listing is updated. `_worker` is the updated address, `_isAuthorized` is the new status\"},\"Withdraw(address,address,uint256,uint256,uint256)\":{\"details\":\"Emitted when the owner withdraws tokens (forfeit ownership for a listing) `owner` is the owner withdrawing `_amount` is the amount to return to the owner `_initOwnership` is the initial ownership value `_newOwnership` is the updated ownership value\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"createListing(address,uint256)\":{\"details\":\"Create a new listing (the tokenized version of a real estate product)  Restricted to only validators A newly created listing is set with two properties: `_isCreated` and `_active` Listing's validator is the validator address making the transaction. The validator must specify the address of listing's owner  Emits a {ListingCreation} event\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"handleListingTx(address,uint256,bool)\":{\"details\":\"Handle transactions from listings and only from listings  If `_in` is true, _amount will be transfered from `_userAddr` to `stakingAddress` Otherwise, `_amount` will be transfered from `stakingAddress` to `_userAddr` Returns true if the transation is success Emits a {Transfer} event from IERC20\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"initialize(address)\":{\"details\":\"Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR Staking address is set here  Initial token distribution addresses are also set here since variables can't be initialized outsize  initialize function\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"toggleListingStatus(address)\":{\"details\":\"Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation Restricted to only validators The `_listingAddr` must be the address of a created listing \"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"},\"updateStakingAddress(address)\":{\"details\":\"Update the funds address. Shall be handy if there's a need in changing the initial address, or the previous address is compromised.\"},\"upgradeTo(address)\":{\"details\":\"Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.\"},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.\"}},\"stateVariables\":{\"PLATFORM_DEVELOPMENT\":{\"details\":\"Initial token distribution addresses according to whitepaper (page 11/24) https://anft.vn/assets/file/ANFTWhitepaperVer1.0.pdf\"},\"VALIDATOR\":{\"details\":\"Validators are authorized accounts to handle listing\"},\"stakingAddress\":{\"details\":\"The funds address for paying out rewards and receiving payments\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"triggerUpdateListingValueEvent(uint256)\":{\"notice\":\"The below functions are to trigger listing events\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/v1/Token.sol\":\"Token\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (access/AccessControl.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IAccessControlUpgradeable.sol\\\";\\nimport \\\"../utils/ContextUpgradeable.sol\\\";\\nimport \\\"../utils/StringsUpgradeable.sol\\\";\\nimport \\\"../utils/introspection/ERC165Upgradeable.sol\\\";\\nimport \\\"../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Contract module that allows children to implement role-based access\\n * control mechanisms. This is a lightweight version that doesn't allow enumerating role\\n * members except through off-chain means by accessing the contract event logs. Some\\n * applications may benefit from on-chain enumerability, for those cases see\\n * {AccessControlEnumerable}.\\n *\\n * Roles are referred to by their `bytes32` identifier. These should be exposed\\n * in the external API and be unique. The best way to achieve this is by\\n * using `public constant` hash digests:\\n *\\n * ```\\n * bytes32 public constant MY_ROLE = keccak256(\\\"MY_ROLE\\\");\\n * ```\\n *\\n * Roles can be used to represent a set of permissions. To restrict access to a\\n * function call, use {hasRole}:\\n *\\n * ```\\n * function foo() public {\\n *     require(hasRole(MY_ROLE, msg.sender));\\n *     ...\\n * }\\n * ```\\n *\\n * Roles can be granted and revoked dynamically via the {grantRole} and\\n * {revokeRole} functions. Each role has an associated admin role, and only\\n * accounts that have a role's admin role can call {grantRole} and {revokeRole}.\\n *\\n * By default, the admin role for all roles is `DEFAULT_ADMIN_ROLE`, which means\\n * that only accounts with this role will be able to grant or revoke other\\n * roles. More complex role relationships can be created by using\\n * {_setRoleAdmin}.\\n *\\n * WARNING: The `DEFAULT_ADMIN_ROLE` is also its own admin: it has permission to\\n * grant and revoke this role. Extra precautions should be taken to secure\\n * accounts that have been granted it.\\n */\\nabstract contract AccessControlUpgradeable is Initializable, ContextUpgradeable, IAccessControlUpgradeable, ERC165Upgradeable {\\n    function __AccessControl_init() internal initializer {\\n        __Context_init_unchained();\\n        __ERC165_init_unchained();\\n        __AccessControl_init_unchained();\\n    }\\n\\n    function __AccessControl_init_unchained() internal initializer {\\n    }\\n    struct RoleData {\\n        mapping(address => bool) members;\\n        bytes32 adminRole;\\n    }\\n\\n    mapping(bytes32 => RoleData) private _roles;\\n\\n    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;\\n\\n    /**\\n     * @dev Modifier that checks that an account has a specific role. Reverts\\n     * with a standardized message including the required role.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     *\\n     * _Available since v4.1._\\n     */\\n    modifier onlyRole(bytes32 role) {\\n        _checkRole(role, _msgSender());\\n        _;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IAccessControlUpgradeable).interfaceId || super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) public view override returns (bool) {\\n        return _roles[role].members[account];\\n    }\\n\\n    /**\\n     * @dev Revert with a standard message if `account` is missing `role`.\\n     *\\n     * The format of the revert reason is given by the following regular expression:\\n     *\\n     *  /^AccessControl: account (0x[0-9a-f]{40}) is missing role (0x[0-9a-f]{64})$/\\n     */\\n    function _checkRole(bytes32 role, address account) internal view {\\n        if (!hasRole(role, account)) {\\n            revert(\\n                string(\\n                    abi.encodePacked(\\n                        \\\"AccessControl: account \\\",\\n                        StringsUpgradeable.toHexString(uint160(account), 20),\\n                        \\\" is missing role \\\",\\n                        StringsUpgradeable.toHexString(uint256(role), 32)\\n                    )\\n                )\\n            );\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) public view override returns (bytes32) {\\n        return _roles[role].adminRole;\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been revoked `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) public virtual override {\\n        require(account == _msgSender(), \\\"AccessControl: can only renounce roles for self\\\");\\n\\n        _revokeRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event. Note that unlike {grantRole}, this function doesn't perform any\\n     * checks on the calling account.\\n     *\\n     * [WARNING]\\n     * ====\\n     * This function should only be called from the constructor when setting\\n     * up the initial roles for the system.\\n     *\\n     * Using this function in any other way is effectively circumventing the admin\\n     * system imposed by {AccessControl}.\\n     * ====\\n     *\\n     * NOTE: This function is deprecated in favor of {_grantRole}.\\n     */\\n    function _setupRole(bytes32 role, address account) internal virtual {\\n        _grantRole(role, account);\\n    }\\n\\n    /**\\n     * @dev Sets `adminRole` as ``role``'s admin role.\\n     *\\n     * Emits a {RoleAdminChanged} event.\\n     */\\n    function _setRoleAdmin(bytes32 role, bytes32 adminRole) internal virtual {\\n        bytes32 previousAdminRole = getRoleAdmin(role);\\n        _roles[role].adminRole = adminRole;\\n        emit RoleAdminChanged(role, previousAdminRole, adminRole);\\n    }\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * Internal function without access restriction.\\n     */\\n    function _grantRole(bytes32 role, address account) internal virtual {\\n        if (!hasRole(role, account)) {\\n            _roles[role].members[account] = true;\\n            emit RoleGranted(role, account, _msgSender());\\n        }\\n    }\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * Internal function without access restriction.\\n     */\\n    function _revokeRole(bytes32 role, address account) internal virtual {\\n        if (hasRole(role, account)) {\\n            _roles[role].members[account] = false;\\n            emit RoleRevoked(role, account, _msgSender());\\n        }\\n    }\\n    uint256[49] private __gap;\\n}\\n\",\"keccak256\":\"0xdfe5444167c3b8cb94bb80044f56148151466d62a86b950c4b57c1ab8bdced7b\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/access/IAccessControlUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (access/IAccessControl.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev External interface of AccessControl declared to support ERC165 detection.\\n */\\ninterface IAccessControlUpgradeable {\\n    /**\\n     * @dev Emitted when `newAdminRole` is set as ``role``'s admin role, replacing `previousAdminRole`\\n     *\\n     * `DEFAULT_ADMIN_ROLE` is the starting admin for all roles, despite\\n     * {RoleAdminChanged} not being emitted signaling this.\\n     *\\n     * _Available since v3.1._\\n     */\\n    event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole);\\n\\n    /**\\n     * @dev Emitted when `account` is granted `role`.\\n     *\\n     * `sender` is the account that originated the contract call, an admin role\\n     * bearer except when using {AccessControl-_setupRole}.\\n     */\\n    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Emitted when `account` is revoked `role`.\\n     *\\n     * `sender` is the account that originated the contract call:\\n     *   - if using `revokeRole`, it is the admin role bearer\\n     *   - if using `renounceRole`, it is the role bearer (i.e. `account`)\\n     */\\n    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);\\n\\n    /**\\n     * @dev Returns `true` if `account` has been granted `role`.\\n     */\\n    function hasRole(bytes32 role, address account) external view returns (bool);\\n\\n    /**\\n     * @dev Returns the admin role that controls `role`. See {grantRole} and\\n     * {revokeRole}.\\n     *\\n     * To change a role's admin, use {AccessControl-_setRoleAdmin}.\\n     */\\n    function getRoleAdmin(bytes32 role) external view returns (bytes32);\\n\\n    /**\\n     * @dev Grants `role` to `account`.\\n     *\\n     * If `account` had not been already granted `role`, emits a {RoleGranted}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function grantRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from `account`.\\n     *\\n     * If `account` had been granted `role`, emits a {RoleRevoked} event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must have ``role``'s admin role.\\n     */\\n    function revokeRole(bytes32 role, address account) external;\\n\\n    /**\\n     * @dev Revokes `role` from the calling account.\\n     *\\n     * Roles are often managed via {grantRole} and {revokeRole}: this function's\\n     * purpose is to provide a mechanism for accounts to lose their privileges\\n     * if they are compromised (such as when a trusted device is misplaced).\\n     *\\n     * If the calling account had been granted `role`, emits a {RoleRevoked}\\n     * event.\\n     *\\n     * Requirements:\\n     *\\n     * - the caller must be `account`.\\n     */\\n    function renounceRole(bytes32 role, address account) external;\\n}\\n\",\"keccak256\":\"0xb1503d6ad7d4251970bfc4fa2d7e6fa2c7716010a0b3d642bdc078cdbef5ecc0\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/ERC1967/ERC1967Upgrade.sol)\\n\\npragma solidity ^0.8.2;\\n\\nimport \\\"../beacon/IBeaconUpgradeable.sol\\\";\\nimport \\\"../../utils/AddressUpgradeable.sol\\\";\\nimport \\\"../../utils/StorageSlotUpgradeable.sol\\\";\\nimport \\\"../utils/Initializable.sol\\\";\\n\\n/**\\n * @dev This abstract contract provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots.\\n *\\n * _Available since v4.1._\\n *\\n * @custom:oz-upgrades-unsafe-allow delegatecall\\n */\\nabstract contract ERC1967UpgradeUpgradeable is Initializable {\\n    function __ERC1967Upgrade_init() internal initializer {\\n        __ERC1967Upgrade_init_unchained();\\n    }\\n\\n    function __ERC1967Upgrade_init_unchained() internal initializer {\\n    }\\n    // This is the keccak-256 hash of \\\"eip1967.proxy.rollback\\\" subtracted by 1\\n    bytes32 private constant _ROLLBACK_SLOT = 0x4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143;\\n\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function _getImplementation() internal view returns (address) {\\n        return StorageSlotUpgradeable.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        require(AddressUpgradeable.isContract(newImplementation), \\\"ERC1967: new implementation is not a contract\\\");\\n        StorageSlotUpgradeable.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeTo(address newImplementation) internal {\\n        _setImplementation(newImplementation);\\n        emit Upgraded(newImplementation);\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCall(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _upgradeTo(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            _functionDelegateCall(newImplementation, data);\\n        }\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with security checks for UUPS proxies, and additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCallSecure(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        address oldImplementation = _getImplementation();\\n\\n        // Initial upgrade and setup call\\n        _setImplementation(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            _functionDelegateCall(newImplementation, data);\\n        }\\n\\n        // Perform rollback test if not already in progress\\n        StorageSlotUpgradeable.BooleanSlot storage rollbackTesting = StorageSlotUpgradeable.getBooleanSlot(_ROLLBACK_SLOT);\\n        if (!rollbackTesting.value) {\\n            // Trigger rollback using upgradeTo from the new implementation\\n            rollbackTesting.value = true;\\n            _functionDelegateCall(\\n                newImplementation,\\n                abi.encodeWithSignature(\\\"upgradeTo(address)\\\", oldImplementation)\\n            );\\n            rollbackTesting.value = false;\\n            // Check rollback was effective\\n            require(oldImplementation == _getImplementation(), \\\"ERC1967Upgrade: upgrade breaks further upgrades\\\");\\n            // Finally reset to the new implementation and log the upgrade\\n            _upgradeTo(newImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Returns the current admin.\\n     */\\n    function _getAdmin() internal view returns (address) {\\n        return StorageSlotUpgradeable.getAddressSlot(_ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        require(newAdmin != address(0), \\\"ERC1967: new admin is the zero address\\\");\\n        StorageSlotUpgradeable.getAddressSlot(_ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {AdminChanged} event.\\n     */\\n    function _changeAdmin(address newAdmin) internal {\\n        emit AdminChanged(_getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is bytes32(uint256(keccak256('eip1967.proxy.beacon')) - 1)) and is validated in the constructor.\\n     */\\n    bytes32 internal constant _BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Emitted when the beacon is upgraded.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function _getBeacon() internal view returns (address) {\\n        return StorageSlotUpgradeable.getAddressSlot(_BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the EIP1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        require(AddressUpgradeable.isContract(newBeacon), \\\"ERC1967: new beacon is not a contract\\\");\\n        require(\\n            AddressUpgradeable.isContract(IBeaconUpgradeable(newBeacon).implementation()),\\n            \\\"ERC1967: beacon implementation is not a contract\\\"\\n        );\\n        StorageSlotUpgradeable.getAddressSlot(_BEACON_SLOT).value = newBeacon;\\n    }\\n\\n    /**\\n     * @dev Perform beacon upgrade with additional setup call. Note: This upgrades the address of the beacon, it does\\n     * not upgrade the implementation contained in the beacon (see {UpgradeableBeacon-_setImplementation} for that).\\n     *\\n     * Emits a {BeaconUpgraded} event.\\n     */\\n    function _upgradeBeaconToAndCall(\\n        address newBeacon,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _setBeacon(newBeacon);\\n        emit BeaconUpgraded(newBeacon);\\n        if (data.length > 0 || forceCall) {\\n            _functionDelegateCall(IBeaconUpgradeable(newBeacon).implementation(), data);\\n        }\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function _functionDelegateCall(address target, bytes memory data) private returns (bytes memory) {\\n        require(AddressUpgradeable.isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return AddressUpgradeable.verifyCallResult(success, returndata, \\\"Address: low-level delegate call failed\\\");\\n    }\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0xb0fba7a209e01ef5a75bd082cd31b46b417f8572ca87a08475aa60afa01b4801\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/beacon/IBeacon.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeaconUpgradeable {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {BeaconProxy} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0xc28ec209735cd77cebec87be0ec4586d4cba9002011adf4346e374e60c367756\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/utils/Initializable.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\\n * behind a proxy. Since a proxied contract can't have a constructor, it's common to move constructor logic to an\\n * external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\\n * function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\\n *\\n * TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\\n * possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\\n *\\n * CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\\n * that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\\n *\\n * [CAUTION]\\n * ====\\n * Avoid leaving a contract uninitialized.\\n *\\n * An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\\n * contract, which may impact the proxy. To initialize the implementation contract, you can either invoke the\\n * initializer manually, or you can include a constructor to automatically mark it as initialized when it is deployed:\\n *\\n * [.hljs-theme-light.nopadding]\\n * ```\\n * /// @custom:oz-upgrades-unsafe-allow constructor\\n * constructor() initializer {}\\n * ```\\n * ====\\n */\\nabstract contract Initializable {\\n    /**\\n     * @dev Indicates that the contract has been initialized.\\n     */\\n    bool private _initialized;\\n\\n    /**\\n     * @dev Indicates that the contract is in the process of being initialized.\\n     */\\n    bool private _initializing;\\n\\n    /**\\n     * @dev Modifier to protect an initializer function from being invoked twice.\\n     */\\n    modifier initializer() {\\n        require(_initializing || !_initialized, \\\"Initializable: contract is already initialized\\\");\\n\\n        bool isTopLevelCall = !_initializing;\\n        if (isTopLevelCall) {\\n            _initializing = true;\\n            _initialized = true;\\n        }\\n\\n        _;\\n\\n        if (isTopLevelCall) {\\n            _initializing = false;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x6287586f5e4a103c89d4dda41406136cdf283cc625bd1ebfdf1468aae5bfe449\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (proxy/utils/UUPSUpgradeable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../ERC1967/ERC1967UpgradeUpgradeable.sol\\\";\\nimport \\\"./Initializable.sol\\\";\\n\\n/**\\n * @dev An upgradeability mechanism designed for UUPS proxies. The functions included here can perform an upgrade of an\\n * {ERC1967Proxy}, when this contract is set as the implementation behind such a proxy.\\n *\\n * A security mechanism ensures that an upgrade does not turn off upgradeability accidentally, although this risk is\\n * reinstated if the upgrade retains upgradeability but removes the security mechanism, e.g. by replacing\\n * `UUPSUpgradeable` with a custom implementation of upgrades.\\n *\\n * The {_authorizeUpgrade} function must be overridden to include access restriction to the upgrade mechanism.\\n *\\n * _Available since v4.1._\\n */\\nabstract contract UUPSUpgradeable is Initializable, ERC1967UpgradeUpgradeable {\\n    function __UUPSUpgradeable_init() internal initializer {\\n        __ERC1967Upgrade_init_unchained();\\n        __UUPSUpgradeable_init_unchained();\\n    }\\n\\n    function __UUPSUpgradeable_init_unchained() internal initializer {\\n    }\\n    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable state-variable-assignment\\n    address private immutable __self = address(this);\\n\\n    /**\\n     * @dev Check that the execution is being performed through a delegatecall call and that the execution context is\\n     * a proxy contract with an implementation (as defined in ERC1967) pointing to self. This should only be the case\\n     * for UUPS and transparent proxies that are using the current contract as their implementation. Execution of a\\n     * function through ERC1167 minimal proxies (clones) would not normally pass this test, but is not guaranteed to\\n     * fail.\\n     */\\n    modifier onlyProxy() {\\n        require(address(this) != __self, \\\"Function must be called through delegatecall\\\");\\n        require(_getImplementation() == __self, \\\"Function must be called through active proxy\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy to `newImplementation`.\\n     *\\n     * Calls {_authorizeUpgrade}.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function upgradeTo(address newImplementation) external virtual onlyProxy {\\n        _authorizeUpgrade(newImplementation);\\n        _upgradeToAndCallSecure(newImplementation, new bytes(0), false);\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call\\n     * encoded in `data`.\\n     *\\n     * Calls {_authorizeUpgrade}.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes memory data) external payable virtual onlyProxy {\\n        _authorizeUpgrade(newImplementation);\\n        _upgradeToAndCallSecure(newImplementation, data, true);\\n    }\\n\\n    /**\\n     * @dev Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by\\n     * {upgradeTo} and {upgradeToAndCall}.\\n     *\\n     * Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.\\n     *\\n     * ```solidity\\n     * function _authorizeUpgrade(address) internal override onlyOwner {}\\n     * ```\\n     */\\n    function _authorizeUpgrade(address newImplementation) internal virtual;\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0x611d1f2720036646366a613a7b6bb85d1527ed3b4fb5ba2db8cfc34f80a37be6\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (token/ERC20/ERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC20Upgradeable.sol\\\";\\nimport \\\"./extensions/IERC20MetadataUpgradeable.sol\\\";\\nimport \\\"../../utils/ContextUpgradeable.sol\\\";\\nimport \\\"../../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20Upgradeable is Initializable, ContextUpgradeable, IERC20Upgradeable, IERC20MetadataUpgradeable {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * The default value of {decimals} is 18. To select a different value for\\n     * {decimals} you should overload it.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    function __ERC20_init(string memory name_, string memory symbol_) internal initializer {\\n        __Context_init_unchained();\\n        __ERC20_init_unchained(name_, symbol_);\\n    }\\n\\n    function __ERC20_init_unchained(string memory name_, string memory symbol_) internal initializer {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\\n     * overridden;\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `recipient` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(_msgSender(), recipient, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        _approve(_msgSender(), spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` and `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``sender``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) public virtual override returns (bool) {\\n        _transfer(sender, recipient, amount);\\n\\n        uint256 currentAllowance = _allowances[sender][_msgSender()];\\n        require(currentAllowance >= amount, \\\"ERC20: transfer amount exceeds allowance\\\");\\n        unchecked {\\n            _approve(sender, _msgSender(), currentAllowance - amount);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        uint256 currentAllowance = _allowances[_msgSender()][spender];\\n        require(currentAllowance >= subtractedValue, \\\"ERC20: decreased allowance below zero\\\");\\n        unchecked {\\n            _approve(_msgSender(), spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` cannot be the zero address.\\n     * - `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     */\\n    function _transfer(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) internal virtual {\\n        require(sender != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(recipient != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(sender, recipient, amount);\\n\\n        uint256 senderBalance = _balances[sender];\\n        require(senderBalance >= amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        unchecked {\\n            _balances[sender] = senderBalance - amount;\\n        }\\n        _balances[recipient] += amount;\\n\\n        emit Transfer(sender, recipient, amount);\\n\\n        _afterTokenTransfer(sender, recipient, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        _balances[account] += amount;\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n        }\\n        _totalSupply -= amount;\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n    uint256[45] private __gap;\\n}\\n\",\"keccak256\":\"0x47852df4456c4b7e2fbda473b1c237f24991d2ceb1c7cba8d90e229bf6add473\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20Upgradeable {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0xb34b8dc5fbc20d8d7e5ed2fd1a0ed87e1fb024d3ae0c61fd4368565ce733aa7e\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (token/ERC20/extensions/IERC20Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20Upgradeable.sol\\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20MetadataUpgradeable is IERC20Upgradeable {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x0c85e40b29481eadb132cb5eb973d27b4567098f4bc257b250ee540d8d309a00\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/Address.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary AddressUpgradeable {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        assembly {\\n            size := extcodesize(account)\\n        }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xf308459c5ea0cde035b8c3b3d9144086a2c777c46dbe401f634e75dea1aba1b8\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\nimport \\\"../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract ContextUpgradeable is Initializable {\\n    function __Context_init() internal initializer {\\n        __Context_init_unchained();\\n    }\\n\\n    function __Context_init_unchained() internal initializer {\\n    }\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0x0c34de2f75ee9ab06bf9151824be575885d0a9b460c292476a260578fb5a4e1c\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/StorageSlot.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC1967 implementation slot:\\n * ```\\n * contract ERC1967 {\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(Address.isContract(newImplementation), \\\"ERC1967: new implementation is not a contract\\\");\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * _Available since v4.1 for `address`, `bool`, `bytes32`, and `uint256`._\\n */\\nlibrary StorageSlotUpgradeable {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x8cd74cdb9a9b704bfd99b4c677f49a170f1b16235f59b4ede98db93ff92f702a\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary StringsUpgradeable {\\n    bytes16 private constant _HEX_SYMBOLS = \\\"0123456789abcdef\\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI's implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\\"0\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\\"0x00\\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\\"0\\\";\\n        buffer[1] = \\\"x\\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\\"Strings: hex length insufficient\\\");\\n        return string(buffer);\\n    }\\n}\\n\",\"keccak256\":\"0xed12e1c10c09054954b16a1b1f4250c4bbc0c7140d720777626fb5886a1a0e25\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC165Upgradeable.sol\\\";\\nimport \\\"../../proxy/utils/Initializable.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165Upgradeable is Initializable, IERC165Upgradeable {\\n    function __ERC165_init() internal initializer {\\n        __ERC165_init_unchained();\\n    }\\n\\n    function __ERC165_init_unchained() internal initializer {\\n    }\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165Upgradeable).interfaceId;\\n    }\\n    uint256[50] private __gap;\\n}\\n\",\"keccak256\":\"0x8c5737e80521ac5e76c0d9d2cdb67647906fdadeb296644910eeecb31042e1da\",\"license\":\"MIT\"},\"@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.0 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165Upgradeable {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n\",\"keccak256\":\"0x650712f855228b7cdeb90738d99dd33ff3a7c9770914ff03eb93f90218fe164b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/math/SafeMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n// CAUTION\\n// This version of SafeMath should only be used with Solidity 0.8 or later,\\n// because it relies on the compiler's built in overflow checks.\\n\\n/**\\n * @dev Wrappers over Solidity's arithmetic operations.\\n *\\n * NOTE: `SafeMath` is no longer needed starting with Solidity 0.8. The compiler\\n * now has built in overflow checking.\\n */\\nlibrary SafeMath {\\n    /**\\n     * @dev Returns the addition of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            uint256 c = a + b;\\n            if (c < a) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b > a) return (false, 0);\\n            return (true, a - b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\\n            // benefit is lost if 'b' is also tested.\\n            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\n            if (a == 0) return (true, 0);\\n            uint256 c = a * b;\\n            if (c / a != b) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the division of two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a / b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a % b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the addition of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `+` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Addition cannot overflow.\\n     */\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a + b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a - b;\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `*` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Multiplication cannot overflow.\\n     */\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a * b;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a / b;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a % b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\n     * overflow (when the result is negative).\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {trySub}.\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b <= a, errorMessage);\\n            return a - b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a / b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting with custom message when dividing by zero.\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {tryMod}.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a % b;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x8666f020bd8fc9dc14f07e2ebc52b5f236ab4cdde7c77679b08cb2f94730043b\",\"license\":\"MIT\"},\"contracts/v1/Listing.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.11;\\nimport \\\"@openzeppelin/contracts/utils/math/SafeMath.sol\\\";\\nimport \\\"./Token.sol\\\";\\nimport \\\"./ListingStorage.sol\\\";\\nimport \\\"hardhat/console.sol\\\";\\n\\n\\n/**\\n * @dev This contract represents a real estate product. Basic getter-setters are within {ListingStorage}\\n * This contract focus more on the staking/reward logic\\n */\\ncontract Listing is ListingStorage {\\n\\n    using SafeMath for uint;\\n\\n    /**\\n    * @dev Stake info is recorded every time an user registers for staking and updated when they update their previous staking\\n    *\\n    * Stakings are recorded by the option (or business activity) ID, combined with user's address\\n    * A JSON represenation of a staking record:\\n    {\\n        \\\"1\\\": {\\n            \\\"0x000001\\\": {\\n                \\\"_start\\\": \\\"1000\\\",\\n                \\\"_amount\\\": \\\"100\\\",\\n                \\\"_active\\\": true\\n            }\\n        }\\n    }\\n    * This could be understood as: Address `0x000001` staking for the option with ID = 1. The stake starts at\\n    * the timestamp of 100 with the registered amount of 1,000 tokens. The stake is still active (user hasnt canceled)\\n    */\\n    struct StakingModel {\\n        uint256 _start;\\n        uint256 _amount;\\n        bool _active;\\n    }\\n    mapping (uint256 => mapping (address => StakingModel)) public stakings;\\n\\n\\n    /**\\n    * @dev Total stake represents the tokens are staked for all options\\n    * \\n    * TotalStake is:\\n    *   - Increased when user stake (register) for any options\\n    *   - Decreased when user unstake (unregister) for any options\\n    */\\n    uint256 public totalStake;\\n\\n    /**\\n    * @dev Owner and validator is configed upon listing creation according to the specified arguments\\n    * \\n    * Ownership value is initialized to be the current block.timestamp\\n    *\\n    * Token contract should be the Caller/Listing creator address\\n    */\\n    constructor(address _validator, address _owner, uint256 _listingId) {\\n        owner = _owner;\\n        validator = _validator;\\n        listingId = _listingId;\\n        ownership = block.timestamp;\\n        tokenContract = msg.sender;\\n    }\\n    /**\\n     * @dev Validator can update the listing value to reflect the real estate price in the real world\\n     * Emits an {UpdateValue} event to make the changes publicly visible\\n     */\\n    function updateValue (uint256 _value) public onlyValidator {\\n        value = _value;\\n        Token(tokenContract).triggerUpdateListingValueEvent(_value);\\n    }\\n\\n    /**\\n     * @dev Validator can update the daily payment value to reflect the real estate price in the real world\\n     * Emits an {UpdateDailyPayment} event to make the changes publicly visible\\n     */\\n    function updateDailyPayment (uint256 _dailyPayment) public onlyValidator {\\n        dailyPayment = _dailyPayment;\\n        Token(tokenContract).triggerUpdatePaymentEvent(_dailyPayment);\\n    }\\n\\n    /**\\n     * @dev Owner can update worker status. Which means they can choose/remove who\\n     * can use the listing in real world\\n     */\\n    function updateWorker(address _worker) public {\\n        require(msg.sender == owner, \\\"Listing: Unauth!\\\");\\n        require(ownership >= block.timestamp, \\\"Listing: Ownership expired\\\");\\n        workers[_worker] = !workers[_worker];\\n        Token(tokenContract).triggerUpdateWorkerEvent(_worker, workers[_worker]);\\n    }\\n\\n    /**\\n    * @dev Owner can extend ownership by transfering tokens to the staking address\\n    * \\n    * sender must be listing owner owner to extend listing ownership, OR the ownership value is in the past (current owner forfeits the listing).\\n    * In the forfeit case, the sender will be the new owner, and new ownership would be time credit added on top of current timestamp\\n    *\\n    * sender must transfer at least {dailyPayment} amount (Owns the listing for at least 1.0 day)\\n    *\\n    * Time credit formula:\\n    *   C = (A  x 86400 / D)\\n    *      C (timestamp): Time credit (Unix timestamp)\\n    *      A (tokens): Transfered amount to extend ownership\\n    *      D (tokens): Daily payment, specified by the validator\\n    *      86400: Total seconds in a day (60*60*24)\\n    *\\n    * Then C is added on top of {block.timestamp} OR the current {ownership} value, depends on whether the listing is forfeited\\n    */\\n\\n    function extendOwnership (uint256 _amount) public {\\n        require(msg.sender == owner || ownership <  block.timestamp, \\\"Listing: Unauth!\\\");\\n        \\n        require(_amount >= dailyPayment, \\\"Listing: Insufficient amount!\\\");\\n\\n        bool success = Token(tokenContract).handleListingTx(msg.sender, _amount, true);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        uint256 existingOwnership = ownership;\\n        address existingOwner = owner;\\n        \\n        if (existingOwnership < block.timestamp) {\\n            owner = msg.sender;\\n            existingOwnership = block.timestamp;\\n        }\\n\\n        \\n        ownership = existingOwnership.add(_amount.mul(86400).div(dailyPayment));\\n        Token(tokenContract).triggerOwnershipExtensionEvent(existingOwner, owner, existingOwnership, ownership, _amount);\\n    }\\n\\n    /**\\n    * @dev Owner can partially withdraw the tokens they previously transfered to extend the listing ownership (and forfeit the ownership)\\n    * \\n    * Ownership value must be in the future (larger or equal to block.timestamp)\\n    * \\n    * Owner can input the amount of token they want to withdraw\\n    *\\n    * After withdrawal, owner still have to own the listing for at least 1.0 day more\\n    * (hence the check {newOwnership >= block.timestamp.add(86400)} )\\n    *\\n    * Ownership withdraw formula:\\n    *   RC = A * 86400 / D\\n    *   OS2 = OS1 - RC\\n    *      A  (tokens)    : Amount of tokens the owner wishes to withdraw\\n    *      RC (timestamp) : Removed credit based on {_amount} input\\n    *      OS1 (timestamp): Original/Intial ownership before withdrawal\\n    *      OS2 (timestamp): New Ownership value after withdrawal\\n    *      D  (tokens):  Daily payment, specified by the validator\\n    *\\n    * `OS2` must be in the future (larger or equal to block.timestamp)\\n    *\\n    * `_amount` shall be transfered from Funds account to user, if success the ownership value\\n    * should be reset to current TS\\n    */\\n    function withdraw(uint256 _amount) public {\\n        require(msg.sender == owner, \\\"Listing: Unauth!\\\");\\n        require(ownership >= block.timestamp, \\\"Listing: Ownership expired!\\\");\\n        require(_amount >= dailyPayment, \\\"Listing: Insufficient amount!\\\");\\n\\n        uint256 removedCreditTimestamp = _amount.mul(86400).div(dailyPayment);\\n        uint256 newOwnership = ownership.sub(removedCreditTimestamp);\\n\\n        require(newOwnership >= block.timestamp.add(86400), \\\"Listing: Invalid amount!\\\");\\n        \\n        bool success = Token(tokenContract).handleListingTx(msg.sender, _amount, false);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        Token(tokenContract).triggerWithdrawEvent(owner, _amount, ownership, newOwnership);\\n        ownership = newOwnership;\\n    }\\n\\n    /**\\n    * @dev Stakeholders can claim their reward they previously registed\\n    * \\n    * See {calculateStakeholderReward} for the reward payout formula\\n    *\\n    * Staking status should be active (stakeholder hasnt unregistered)\\n    * Users must have at least `_amount` tokens in their balance\\n    *\\n    * This function is automatically triggered when {register} or {unregister} functions are called \\n    *\\n    * If the transfer from the funds address to user's address fulfilled, an {Claim} event is emitted\\n    * the stake start is reset to the current block.timestamp\\n    */\\n    function claimReward (uint256 _optionId) public {\\n        StakingModel storage chosenStake = stakings[_optionId][msg.sender];\\n        require(chosenStake._active, \\\"Listing: Register first!\\\");\\n\\n        uint256 callerBalance = Token(tokenContract).balanceOf(msg.sender);\\n        require(callerBalance >= chosenStake._amount, \\\"Listing: Insufficient balance!\\\");\\n\\n        uint256 payoutAmount = calculateStakeholderReward(_optionId, chosenStake);\\n        bool success = Token(tokenContract).handleListingTx(msg.sender, payoutAmount, false);\\n        require(success, \\\"Listing: Unsuccessful attempt!\\\");\\n\\n        Token(tokenContract).triggerClaimEvent(msg.sender, payoutAmount, chosenStake._start, block.timestamp);\\n\\n        chosenStake._start = block.timestamp;\\n    }\\n\\n    /**\\n    * @dev User can register to be a stakeholder.\\n    * \\n    * NOTE The key difference of this staking model is the user's token balance isnt transfered\\n    * to another staking address (like other staking models).\\n    * Users, however, need to have at least registering amount in their balance WHEN they register AND claim rewards\\n    *\\n    * Users cant register for inactive listing\\n    *\\n    * `_amount` is the registering amount\\n    * `_optionId` is the option which user would like to register\\n    *\\n    * New registering amount will replace previous registering amount\\n    *\\n    * Both listing total stake and option total stake is increased/decreased by the difference between\\n    * previous registering amount and current registering amount\\n    *\\n    * In case stakeholders would like to update their registering amount, they are still rewarded\\n    * for the period between previous and current registering timestamps\\n    *\\n    * Emits an {Register} event\\n    */\\n    function register (uint256 _amount, uint256 _optionId) public onlyActiveListing {\\n        require(options[_optionId]._isSet, \\\"Listing: Option not available\\\");\\n\\n        StakingModel storage chosenStake = stakings[_optionId][msg.sender];\\n        require(_amount != chosenStake._amount, \\\"Listing: Stake unchanged!\\\");\\n\\n        uint256 callerBalance = Token(tokenContract).balanceOf(msg.sender);\\n        require(callerBalance >= _amount, \\\"Listing: Insufficient balance!\\\");\\n\\n        if (chosenStake._amount != 0) {\\n            claimReward(_optionId);\\n        }\\n\\n        bool stakeIncreased = _amount > chosenStake._amount;\\n        uint256 difference = stakeIncreased ? _amount.sub(chosenStake._amount) : chosenStake._amount.sub(_amount);\\n\\n        if (stakeIncreased) {\\n            chosenStake._amount = chosenStake._amount.add(difference);\\n            options[_optionId]._totalStake = options[_optionId]._totalStake.add(difference);\\n            totalStake = totalStake.add(difference);\\n        } else {\\n            chosenStake._amount = chosenStake._amount.sub(difference);\\n            options[_optionId]._totalStake = options[_optionId]._totalStake.sub(difference);\\n            totalStake = totalStake.sub(difference);\\n        }\\n\\n        chosenStake._start = block.timestamp;\\n        chosenStake._active = true;\\n        Token(tokenContract).triggerRegisterEvent(msg.sender, _amount, _optionId);\\n    }\\n    /**\\n    * @dev User can unregister their previous stake\\n    * \\n    * Staking status should be active (stakeholder hasnt unregistered)\\n    *\\n    * Users cant register for inactive listing\\n    *\\n    * Staking info is reset to initial status\\n    *\\n    * `_optionId` is the option which user would like to unregister\\n    *\\n    * Stakeholders are rewarded for the period between registering and unregistering timestamps\\n    *\\n    * Both listing total stake and option total stake is decreased by `_amount`\\n    * Emits an {Unregister} event\\n    */\\n    function unregister(uint256 _optionId) public onlyActiveListing {\\n        StakingModel storage chosenStake = stakings[_optionId][msg.sender];\\n\\n        require(chosenStake._active, \\\"Listing: Register first!\\\");\\n\\n        if (chosenStake._amount != 0) {\\n            claimReward(_optionId);\\n        }\\n\\n        options[_optionId]._totalStake = options[_optionId]._totalStake.sub(chosenStake._amount);\\n\\n        totalStake = totalStake.sub(chosenStake._amount);\\n\\n        chosenStake._amount = 0;\\n        chosenStake._active = false;\\n        chosenStake._start = 0;\\n\\n        Token(tokenContract).triggerUnregisterEvent(msg.sender, _optionId);\\n    }\\n\\n    /**\\n    * @dev Stakeholder reward formula\\n    * \\n    * T    = TS * 100 / LV\\n    * RTd  = DA * T%\\n    * Ar   = ((RTd * 100 / Ap) / At) * Ax\\n    * Rm   = Ar * Sd\\n\\n    *   T(%)      : Percentage for total token rewarding (less or equal than 86)\\n    *               If listing is forfeited, T is less or equal than 50\\n    *   TS        : Total tokens staked for the listing\\n    *   LV        : Listing value\\n    *   RTd       : Total tokens for rewarding daily for ALL stakeholder (daily avaiable tokens for claiming)\\n    *   DA        : Daily Payment\\n    *   Ap(%)     : Reward percentage value for the chosen option\\n    *   At(tokens): The total staked amount for an option from ALL stakeholders\\n    *   Ax(tokens): The staked amount for an option from the calling stakeholder (msg.sender)\\n    *   Ar(tokens): Available daily tokens for claiming for ONE stakeholder for one option\\n    *   Sd(seconds): Staked time (difference in stake start and block.timestamp)\\n    *   Rm(tokens): The reward for a stakeholder after a period of time\\n    */\\n    function calculateStakeholderReward (uint256 _optionId, StakingModel storage _userStake) private view returns (uint256) {\\n        uint256 T = totalStake.mul(100).div(value);\\n        if (T > 86) {\\n            T = 86;\\n        }\\n\\n        if (ownership < block.timestamp && T > 50) {\\n            T = 50;\\n        }\\n\\n        uint256 RTd = dailyPayment.mul(T).div(100);\\n\\n        OptionModel memory optionInfo = options[_optionId];\\n\\n        uint256 Ar = (RTd.mul(optionInfo._reward).div(100)).mul(_userStake._amount).div(optionInfo._totalStake);\\n\\n        uint256 Sd = block.timestamp.sub(_userStake._start);\\n\\n        return (Ar.mul(Sd)).div(86400);\\n        \\n    }\\n\\n    /**\\n     * @dev Modifier, making sure the current listing is active to proceed further logic\\n     */\\n    modifier onlyActiveListing() {\\n        (, bool _active) = Token(tokenContract).listingStatus(address(this));\\n\\n        require(_active, \\\"Listing: Inactive listing!\\\");\\n        _;\\n    }\\n\\n}\",\"keccak256\":\"0xc3459fbf0382dffecf13d642b0cfeaa57286619ac378e30ff3b046a2cae75e17\",\"license\":\"MIT\"},\"contracts/v1/ListingStorage.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.11;\\n\\n/**\\n * @dev This contract stores basic configurations for a listing.\\n *\\n * The purpose of the this is abtract the basic getters-setters away from the staking/rewards logic\\n */\\n\\ncontract ListingStorage {\\n\\n    /**\\n     * @dev Owner is the address pays tokens to take/maintain the ownership for a listing\\n     */\\n    address public owner;\\n\\n    /**\\n     * @dev Listing ID is to bind the Listing NFT on the blockchain with the listing data in\\n     * the real world\\n     */\\n    uint256 public listingId;\\n\\n    /**\\n     * @dev Validator is the authorized account to update the listing configurations\\n     */\\n    address public validator;\\n\\n    /**\\n     * @dev Token contract should be the contract create this listing\\n     */\\n    address public tokenContract;\\n\\n    /**\\n     * @dev Ownership value should be in the unix timestamp, determinating if the listing is forfeited by the owner\\n     * (ownership < block.timestamp) and ready to be taken by another owner user.\\n     */\\n    uint256 public ownership;\\n\\n    /**\\n     * @dev The market value of the listing in real world\\n     */\\n    uint256 public value;\\n\\n    /**\\n     * @dev Daily payment is the amount of token the owner has to pay daily to maintain ownership\\n     * Daily payment determines how long the owner has the ownership over the listing with the tokens they pay.\\n     */\\n    uint256 public dailyPayment;\\n\\n    /**\\n     * @dev Workers are addresses authorized by the owner to use the listing in the real world\\n     */\\n    mapping (address => bool) public workers;\\n\\n    /**\\n     * @dev Options are business activities in real world. Each options has a rewards percentage (sum up to 100);\\n     * Reward value for each option is set by the validator. \\n     *\\n     * `_isSet` flag is default to false, until the option is set by the validator\\n     * The flag is to prevent users from participating in the activities which arent set up by the validator.\\n     *\\n     * Everytime an user participates in an activity, the `_totalStake` is increased by the registered amount\\n     */\\n    struct OptionModel {\\n        uint256 _totalStake;\\n        uint256 _reward;\\n        bool _isSet;\\n    }\\n    mapping (uint => OptionModel) public options;\\n\\n    /**\\n     * @dev Option reward value is set up by and only by the validator\\n     * Reward should not exceed 100;\\n     * The sum of reward values from all options should be 100;\\n     * \\n     * `isSet` is toggled to true for options which were setup\\n     *\\n     * For example A, B, C, D are options. Ar, Br, Cr, Dr are the reward values respectively\\n     * The validator should set up the option carefully, so Ar + Br + Cr + Dr = 100\\n     */\\n    function setupOptionReward (uint256 _optionId, uint256 _reward) public onlyValidator {\\n        require(_reward <= 100, \\\"Listing: Invalid reward value\\\");\\n        options[_optionId]._reward = _reward;\\n        options[_optionId]._isSet = true;\\n    }   \\n    \\n    /**\\n     * @dev Validator can update the listing ID\\n     */\\n    function updatelistingId (uint256 _listingId) public onlyValidator {\\n        listingId = _listingId;\\n    }\\n\\n    /**\\n     * @dev Validator can update the owner value\\n     * Owner value can only changeable if the current owner has forfeited the listing\\n     */\\n    function updateOwner (address _newOwner) public onlyValidator {\\n        require(ownership < block.timestamp, \\\"Ownership not expired!\\\");\\n        owner = _newOwner;\\n    }\\n    \\n    /**\\n     * @dev Validator can update themselves\\n     */\\n    function updateValidator (address _validator) public onlyValidator {\\n        validator = _validator;\\n    }\\n    \\n    /**\\n     * @dev Modifier, restricting access to only the validator\\n     */\\n    modifier onlyValidator() {\\n        require(msg.sender == validator, \\\"Listing: Unauth!\\\");\\n        _;\\n    }\\n\\n}\\n\",\"keccak256\":\"0x3efc2ee81c02e97f2846bcdbd821603e2877e64262fdc71fd6ef4f1d25297a2a\",\"license\":\"MIT\"},\"contracts/v1/Token.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.11;\\n\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol\\\";\\nimport \\\"@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\\\";\\nimport \\\"./Listing.sol\\\";\\n\\ncontract Token is Initializable, ERC20Upgradeable, AccessControlUpgradeable, UUPSUpgradeable {\\n\\n    /**\\n     * @dev Validators are authorized accounts to handle listing\\n     */\\n    bytes32 public constant VALIDATOR = keccak256(\\\"VALIDATOR\\\");\\n\\n    /**\\n     * @dev The funds address for paying out rewards and receiving payments\\n     */\\n    address public stakingAddress;\\n\\n    /**\\n     * @dev A listing address must be both `_isCreated` and `_active` to be able to operate.\\n     * Otherwise malicious accounts can call handleListingTx functions\\n     *\\n     * The `_isCreated` property is immutable. It's remains true with the addresses of listings \\n     * created by the validator,\\n     *\\n     * The `_active` property is mutable by the validators.\\n     */\\n    struct ListingStatusModel {\\n        bool _isCreated;\\n        bool _active;\\n    }\\n    mapping (address => ListingStatusModel) public listingStatus;\\n\\n    /**\\n     * @dev Initial token distribution addresses according to whitepaper (page 11/24)\\n     * https://anft.vn/assets/file/ANFTWhitepaperVer1.0.pdf\\n     */\\n    address public PLATFORM_DEVELOPMENT;\\n    address public COMMUNITY;\\n    address public REAL_ESTATE_SERVICE;\\n    address public ETF;\\n    address public REGULATION_FUNDS;\\n\\n    /**\\n     * @dev Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR\\n     * Staking address is set here\\n     * \\n     * Initial token distribution addresses are also set here since variables can't be initialized outsize \\n     * initialize function\\n     */\\n\\n    function initialize(address _stakingAddr) public initializer {\\n        require(_stakingAddr != address(0), \\\"Token: Invalid _stakingAddr\\\");\\n\\n        __UUPSUpgradeable_init();\\n        __AccessControl_init();\\n        __ERC20_init(\\\"ANFT Token\\\", \\\"ANFT\\\");\\n\\n        uint256 totalSuppy = 1_232_000_000 * 10 ** decimals();\\n\\n        PLATFORM_DEVELOPMENT = 0xb3F5E20db0167d4A5B5C5DaAd6f1c76Cc40cC52D;\\n        COMMUNITY = 0x6b3887eB6091cC705ffA6E32e22B5524b3A9BEa4;\\n        REAL_ESTATE_SERVICE = 0x33aE0695fB3250F0788510B289d26309d4B8f939;\\n        ETF = 0xf5d2f60663D83ABf28969F2A5F501178D8D64bAa;\\n        REGULATION_FUNDS = 0x9F1660B7184Bde8b8973c6618AC3D7D306e8a796;\\n\\n        _mint(PLATFORM_DEVELOPMENT,  totalSuppy * 14 / 100);\\n        _mint(COMMUNITY,  totalSuppy * 34 / 100);\\n        _mint(REAL_ESTATE_SERVICE,  totalSuppy * 32 / 100);\\n        _mint(ETF,  totalSuppy * 8 / 100);\\n        _mint(REGULATION_FUNDS,  totalSuppy * 12 / 100);\\n\\n        stakingAddress = _stakingAddr;\\n        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());\\n        _setupRole(VALIDATOR, _msgSender());\\n    }\\n\\n    function _authorizeUpgrade(address newImplementation)\\n        internal\\n        override\\n        onlyRole(DEFAULT_ADMIN_ROLE)\\n    {}\\n\\n    /**\\n     * @dev Handle transactions from listings and only from listings\\n     * \\n     * If `_in` is true, _amount will be transfered from `_userAddr` to `stakingAddress`\\n     * Otherwise, `_amount` will be transfered from `stakingAddress` to `_userAddr`\\n     *\\n     * Returns true if the transation is success\\n     *\\n     * Emits a {Transfer} event from IERC20\\n     */\\n    function handleListingTx (address _userAddr, uint256 _amount, bool _in)  external onlyValidListing returns (bool) {\\n        require(_userAddr != address(0), \\\"Token: Invalid _userAddr\\\");\\n        address sender;\\n        address recipient;\\n        (sender, recipient) = _in ? (_userAddr, stakingAddress) : (stakingAddress, _userAddr);\\n        super._transfer(sender, recipient, _amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Create a new listing (the tokenized version of a real estate product)\\n     * \\n     * Restricted to only validators\\n     *\\n     * A newly created listing is set with two properties: `_isCreated` and `_active`\\n     *\\n     * Listing's validator is the validator address making the transaction. The validator must\\n     * specify the address of listing's owner\\n     * \\n     * Emits a {ListingCreation} event\\n     */\\n    function createListing(address _owner, uint256 _listingId) public {\\n        require(hasRole(VALIDATOR, _msgSender()), \\\"Token: Unauthorized\\\");\\n        Listing newListing = new Listing(_msgSender(), _owner, _listingId);\\n        emit ListingCreation(_msgSender(), _owner, address(newListing));    \\n        listingStatus[address(newListing)]._isCreated = true;    \\n        listingStatus[address(newListing)]._active = true;    \\n    }\\n\\n    /**\\n     * @dev Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation\\n     *\\n     * Restricted to only validators\\n     *\\n     * The `_listingAddr` must be the address of a created listing\\n     * \\n     */\\n    function toggleListingStatus (address _listingAddr) public {\\n        require(hasRole(VALIDATOR, _msgSender()), \\\"Token: Unauthorized\\\");\\n        require(listingStatus[_listingAddr]._isCreated, \\\"Token: Invalid Listing\\\");\\n        listingStatus[_listingAddr]._active = !listingStatus[_listingAddr]._active;\\n    }\\n\\n    /**\\n     * @dev Update the funds address. Shall be handy if there's a need in changing the initial address,\\n     * or the previous address is compromised.\\n     */    \\n    function updateStakingAddress (address _stakingAddr) public {\\n        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), \\\"Token: Unauthorized\\\");\\n        stakingAddress = _stakingAddr;\\n        emit UpdateStakingAddr(_stakingAddr);\\n    }\\n\\n    /**\\n     * @notice The below functions are to trigger listing events\\n     */    \\n    function triggerUpdateListingValueEvent(uint _value) external onlyValidListing {\\n        emit UpdateValue(_msgSender(), _value);\\n    }\\n\\n    function triggerUpdatePaymentEvent(uint _payment) external onlyValidListing {\\n        emit UpdateDailyPayment(_msgSender(), _payment);\\n    }\\n\\n    function triggerUpdateWorkerEvent(address _worker, bool _isAuthorized) external onlyValidListing {\\n        emit UpdateWorker(_msgSender(), _worker, _isAuthorized);\\n    }\\n\\n    function triggerOwnershipExtensionEvent(address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount) external onlyValidListing {\\n        emit OwnershipExtension(_msgSender(), _prevOwner, _newOwner, _start, _end, _amount);\\n    }\\n\\n    function triggerWithdrawEvent(address _owner, uint256 _amount, uint256 _initOwnership, uint256 _newOwnership) external onlyValidListing {\\n        emit Withdraw(_msgSender(), _owner, _amount, _initOwnership, _newOwnership);\\n    }\\n\\n    function triggerClaimEvent(address _stakeholder, uint256 _reward, uint256 _from, uint256 _to) external onlyValidListing {\\n        emit Claim(_msgSender(), _stakeholder, _reward, _from, _to);\\n    }\\n\\n    function triggerRegisterEvent(address _stakeholder, uint256 _amount, uint256 _optionId) external onlyValidListing {\\n        emit Register(_msgSender(), _stakeholder, _amount, _optionId);\\n    }\\n\\n    function triggerUnregisterEvent(address _stakeholder, uint256 _optionId) external onlyValidListing {\\n        emit Unregister(_msgSender(), _stakeholder, _optionId);\\n    }\\n\\n     /**\\n     * @dev Modifier, making sure the listing caller is a valid listing\\n     */\\n    modifier onlyValidListing() {\\n        require(listingStatus[_msgSender()]._isCreated, \\\"Token: Invalid Listing\\\");\\n        require(listingStatus[_msgSender()]._active, \\\"Token: Inactive Listing\\\");\\n        _;\\n    }\\n\\n\\n    /**\\n     * @dev Emitted a new Listing is created. `_validator` should be the caller, \\n     * `_owner` should be the specified address and `_listingAddress` is the\\n     * newly created listing address\\n     */\\n    event ListingCreation(address _validator, address _owner, address _listingAddress);\\n\\n    /**\\n     * @dev Emitted when the staking address is updated, `_stakingAddr` should be the new address \\n     */\\n    event UpdateStakingAddr(address _stakingAddr);\\n\\n    /**\\n     * @notice Below are events triggered from individual listing contract. These events are off-loaded from\\n     * separated contracts to this token contract, so that we can \\\"listen\\\" to listing events in one place\\n     */\\n    \\n    /**\\n     * @dev Emitted when the worker status of a listing is updated.\\n     *\\n     * `_worker` is the updated address, `_isAuthorized` is the new status\\n     */\\n    event UpdateWorker(address _listing, address _worker, bool _isAuthorized);\\n\\n    /**\\n     * @dev Emitted when the validator update listing's value\\n     *\\n     * `_value` is the new listing value\\n     */\\n    event UpdateValue (address _listing, uint256 _value);\\n\\n    /**\\n     * @dev Emitted when the validator update listing's daily payment\\n     *\\n     * `_payment` is the previous listing daily payment\\n     */\\n    event UpdateDailyPayment (address _listing, uint256 _payment);\\n\\n    /**\\n     * @dev Emitted when the owner extends ownership with a listing\\n     *\\n     * `_prevOwner` is the previous owner address\\n     * `_newOwner` is the new owner address\\n     * `_start` is the existing ownership\\n     * `_end` is when the ownership ends\\n     * `_amount` is the transfered amount\\n     */\\n    event OwnershipExtension (address _listing, address _prevOwner, address _newOwner, uint256 _start, uint256 _end, uint256 _amount);\\n\\n    /**\\n     * @dev Emitted when the owner withdraws tokens (forfeit ownership for a listing)\\n     *\\n     * `owner` is the owner withdrawing\\n     * `_amount` is the amount to return to the owner\\n     * `_initOwnership` is the initial ownership value\\n     * `_newOwnership` is the updated ownership value\\n     */\\n    event Withdraw (address _listing, address owner, uint256 _amount, uint256 _initOwnership, uint256 _newOwnership);\\n\\n    /** @dev Emitted when an user claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_reward` is the reward amount\\n     * `_from` -> `_to` is the staking period of time\\n     */\\n    event Claim(address _listing, address _stakeholder, uint256 _reward, uint256 _from, uint256 _to);\\n\\n    /** @dev Emitted when an user registers for claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_amount` is the registered amount\\n     * `_optionId` is the chosen option\\n     */\\n    event Register(address _listing, address _stakeholder, uint256 _amount, uint256 _optionId);\\n\\n    /** @dev Emitted when an user unregisters for claiming rewards\\n     *\\n     * `_stakeholder` is the stakeholder \\n     * `_optionId` is the unregistered option\\n     */\\n    event Unregister(address _listing, address _stakeholder, uint256 _optionId);\\n\\n\\n}\\n\",\"keccak256\":\"0x2151b4a228a182572c9aea3c3413addcaf56246f36456a142d1dae508691a1c5\",\"license\":\"MIT\"},\"hardhat/console.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >= 0.4.22 <0.9.0;\\n\\nlibrary console {\\n\\taddress constant CONSOLE_ADDRESS = address(0x000000000000000000636F6e736F6c652e6c6f67);\\n\\n\\tfunction _sendLogPayload(bytes memory payload) private view {\\n\\t\\tuint256 payloadLength = payload.length;\\n\\t\\taddress consoleAddress = CONSOLE_ADDRESS;\\n\\t\\tassembly {\\n\\t\\t\\tlet payloadStart := add(payload, 32)\\n\\t\\t\\tlet r := staticcall(gas(), consoleAddress, payloadStart, payloadLength, 0, 0)\\n\\t\\t}\\n\\t}\\n\\n\\tfunction log() internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log()\\\"));\\n\\t}\\n\\n\\tfunction logInt(int p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(int)\\\", p0));\\n\\t}\\n\\n\\tfunction logUint(uint p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint)\\\", p0));\\n\\t}\\n\\n\\tfunction logString(string memory p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n\\t}\\n\\n\\tfunction logBool(bool p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n\\t}\\n\\n\\tfunction logAddress(address p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes(bytes memory p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes1(bytes1 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes1)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes2(bytes2 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes2)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes3(bytes3 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes3)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes4(bytes4 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes4)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes5(bytes5 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes5)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes6(bytes6 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes6)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes7(bytes7 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes7)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes8(bytes8 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes8)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes9(bytes9 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes9)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes10(bytes10 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes10)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes11(bytes11 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes11)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes12(bytes12 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes12)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes13(bytes13 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes13)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes14(bytes14 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes14)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes15(bytes15 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes15)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes16(bytes16 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes16)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes17(bytes17 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes17)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes18(bytes18 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes18)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes19(bytes19 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes19)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes20(bytes20 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes20)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes21(bytes21 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes21)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes22(bytes22 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes22)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes23(bytes23 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes23)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes24(bytes24 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes24)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes25(bytes25 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes25)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes26(bytes26 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes26)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes27(bytes27 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes27)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes28(bytes28 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes28)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes29(bytes29 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes29)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes30(bytes30 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes30)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes31(bytes31 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes31)\\\", p0));\\n\\t}\\n\\n\\tfunction logBytes32(bytes32 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bytes32)\\\", p0));\\n\\t}\\n\\n\\tfunction log(uint p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint)\\\", p0));\\n\\t}\\n\\n\\tfunction log(string memory p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n\\t}\\n\\n\\tfunction log(bool p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n\\t}\\n\\n\\tfunction log(address p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address)\\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address)\\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, uint p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,string,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(string,address,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,string,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,uint,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,string,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,bool,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, uint p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,uint)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,string)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,bool)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\\"log(address,address,address,address)\\\", p0, p1, p2, p3));\\n\\t}\\n\\n}\\n\",\"keccak256\":\"0x72b6a1d297cd3b033d7c2e4a7e7864934bb767db6453623f1c3082c6534547f4\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60a06040523060805234801561001457600080fd5b506080516147ec61004560003960008181610c0601528181610c4901528181610dda0152610e1d01526147ec6000f3fe608060405260043610620002775760003560e01c80637b6aa9221162000153578063cefa3cf411620000c5578063dd62ed3e1162000084578063dd62ed3e14620007a3578063de6d745f14620007ed578063e5af649a1462000812578063e6d50cd71462000837578063e9dc65bb146200088d578063f8d7f79014620008b257600080fd5b8063cefa3cf414620006f0578063d24ef4f31462000715578063d547741f1462000738578063d7b4be24146200075d578063dd51183f146200078057600080fd5b8063a217fddf1162000112578063a217fddf1462000645578063a457c2d7146200065c578063a9059cbb1462000681578063a9ae143114620006a6578063c4d66de814620006cb57600080fd5b80637b6aa922146200059b57806385e1c72414620005be57806387d4535114620005e357806391d14854146200060857806395d89b41146200062d57600080fd5b806336568abe11620001ed5780634f1ef28611620001ac5780634f1ef28614620004db5780635b06a1d114620004f25780636b62393e146200051757806370a08231146200053c5780637602f0f1146200057657600080fd5b806336568abe14620004225780633659cfe61462000447578063393df8cb146200046c5780633950935114620004915780634c2a207514620004b657600080fd5b80631b335577116200023a5780631b335577146200035f57806323b872dd1462000386578063248a9ca314620003ab5780632f2ff15d14620003df578063313ce567146200040457600080fd5b806301ffc9a7146200027c57806306fdde0314620002b657806307aec46214620002dd578063095ea7b3146200031957806318160ddd146200033e575b600080fd5b3480156200028957600080fd5b50620002a16200029b366004620027c4565b620008d5565b60405190151581526020015b60405180910390f35b348015620002c357600080fd5b50620002ce6200090d565b604051620002ad91906200281f565b348015620002ea57600080fd5b506101325462000300906001600160a01b031681565b6040516001600160a01b039091168152602001620002ad565b3480156200032657600080fd5b50620002a16200033836600462002871565b620009a7565b3480156200034b57600080fd5b506035545b604051908152602001620002ad565b3480156200036c57600080fd5b50620003846200037e3660046200289e565b620009bf565b005b3480156200039357600080fd5b50620002a1620003a5366004620028f0565b62000a98565b348015620003b857600080fd5b5062000350620003ca36600462002931565b60009081526097602052604090206001015490565b348015620003ec57600080fd5b5062000384620003fe3660046200294b565b62000b4a565b3480156200041157600080fd5b5060405160128152602001620002ad565b3480156200042f57600080fd5b5062000384620004413660046200294b565b62000b79565b3480156200045457600080fd5b5062000384620004663660046200297a565b62000bfb565b3480156200047957600080fd5b50620003506000805160206200477083398151915281565b3480156200049e57600080fd5b50620002a1620004b036600462002871565b62000cd0565b348015620004c357600080fd5b5062000384620004d536600462002998565b62000d10565b62000384620004ec366004620029e4565b62000dcf565b348015620004ff57600080fd5b5062000384620005113660046200297a565b62000e91565b3480156200052457600080fd5b5062000384620005363660046200297a565b62000f13565b3480156200054957600080fd5b50620003506200055b3660046200297a565b6001600160a01b031660009081526033602052604090205490565b3480156200058357600080fd5b50620003846200059536600462002ab2565b62000fbc565b348015620005a857600080fd5b506101315462000300906001600160a01b031681565b348015620005cb57600080fd5b5062000384620005dd36600462002871565b62001087565b348015620005f057600080fd5b50620003846200060236600462002871565b62001186565b3480156200061557600080fd5b50620002a1620006273660046200294b565b6200123f565b3480156200063a57600080fd5b50620002ce6200126a565b3480156200065257600080fd5b5062000350600081565b3480156200066957600080fd5b50620002a16200067b36600462002871565b6200127b565b3480156200068e57600080fd5b50620002a1620006a036600462002871565b62001318565b348015620006b357600080fd5b5062000384620006c536600462002ab2565b62001327565b348015620006d857600080fd5b5062000384620006ea3660046200297a565b620013ba565b348015620006fd57600080fd5b50620003846200070f36600462002aff565b6200169d565b3480156200072257600080fd5b5061012f5462000300906001600160a01b031681565b3480156200074557600080fd5b5062000384620007573660046200294b565b62001753565b3480156200076a57600080fd5b5061012d5462000300906001600160a01b031681565b3480156200078d57600080fd5b506101335462000300906001600160a01b031681565b348015620007b057600080fd5b5062000350620007c236600462002b2e565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b348015620007fa57600080fd5b50620003846200080c36600462002931565b6200177d565b3480156200081f57600080fd5b50620003846200083136600462002931565b6200182a565b3480156200084457600080fd5b5062000875620008563660046200297a565b61012e6020526000908152604090205460ff8082169161010090041682565b604080519215158352901515602083015201620002ad565b3480156200089a57600080fd5b50620002a1620008ac36600462002b5d565b620018bd565b348015620008bf57600080fd5b506101305462000300906001600160a01b031681565b60006001600160e01b03198216637965db0b60e01b14806200090757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060603680546200091e9062002b9e565b80601f01602080910402602001604051908101604052809291908181526020018280546200094c9062002b9e565b80156200099d5780601f1062000971576101008083540402835291602001916200099d565b820191906000526020600020905b8154815290600101906020018083116200097f57829003601f168201915b5050505050905090565b6000620009b6338484620019cb565b50600192915050565b33600090815261012e602052604090205460ff16620009fb5760405162461bcd60e51b8152600401620009f29062002bdb565b60405180910390fd5b33600090815261012e6020526040902054610100900460ff1662000a335760405162461bcd60e51b8152600401620009f29062002c0b565b604080513381526001600160a01b038781166020830152861681830152606081018590526080810184905260a0810183905290517fd661111d7b74eb34869b55470afd5d1e1440b83ab39f43ac784653c47943f9119181900360c00190a15050505050565b600062000aa784848462001af3565b6001600160a01b03841660009081526034602090815260408083203384529091529020548281101562000b2e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401620009f2565b62000b3d8533858403620019cb565b60019150505b9392505050565b60008281526097602052604090206001015462000b68813362001ccc565b62000b74838362001d3b565b505050565b6001600160a01b038116331462000beb5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401620009f2565b62000bf7828262001dc5565b5050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141562000c475760405162461bcd60e51b8152600401620009f29062002c42565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662000c7b62001e2f565b6001600160a01b03161462000ca45760405162461bcd60e51b8152600401620009f29062002c8e565b62000caf8162001e5d565b6040805160008082526020820190925262000ccd9183919062001e6b565b50565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091620009b691859062000d0a90869062002cf0565b620019cb565b33600090815261012e602052604090205460ff1662000d435760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff1662000d7b5760405162461bcd60e51b8152600401620009f29062002c0b565b604080513381526001600160a01b03851660208201528082018490526060810183905290517f2e99fd66dad9611ac11d08dcbfdb417ac840074a8659831e928c70a92a6215e79181900360800190a1505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141562000e1b5760405162461bcd60e51b8152600401620009f29062002c42565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662000e4f62001e2f565b6001600160a01b03161462000e785760405162461bcd60e51b8152600401620009f29062002c8e565b62000e838262001e5d565b62000bf78282600162001e6b565b62000e9e6000336200123f565b62000ebd5760405162461bcd60e51b8152600401620009f29062002d0b565b61012d80546001600160a01b0319166001600160a01b0383169081179091556040519081527f67d8422249b07c675063c3fcea2726f9884bbf0b823d1544a91e36614e41781d906020015b60405180910390a150565b62000f2e60008051602062004770833981519152336200123f565b62000f4d5760405162461bcd60e51b8152600401620009f29062002d0b565b6001600160a01b038116600090815261012e602052604090205460ff1662000f895760405162461bcd60e51b8152600401620009f29062002bdb565b6001600160a01b0316600090815261012e60205260409020805461ff001981166101009182900460ff1615909102179055565b33600090815261012e602052604090205460ff1662000fef5760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620010275760405162461bcd60e51b8152600401620009f29062002c0b565b7febff2602b3f468259e1e99f613fed6691f3a6526effe6ef3e768ba7ae7a36c4f335b604080516001600160a01b03928316815291871660208301528101859052606081018490526080810183905260a00160405180910390a150505050565b620010a260008051602062004770833981519152336200123f565b620010c15760405162461bcd60e51b8152600401620009f29062002d0b565b6000338383604051620010d49062002710565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f0801580156200110f573d6000803e3d6000fd5b50604080513381526001600160a01b03868116602083015283168183015290519192507f619b247fd25df695eff36b0d4f3404c04b084cfe052d022badc2011e0cb7cade919081900360600190a16001600160a01b0316600090815261012e60205260409020805461ffff19166101011790555050565b33600090815261012e602052604090205460ff16620011b95760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620011f15760405162461bcd60e51b8152600401620009f29062002c0b565b604080513381526001600160a01b03841660208201529081018290527f919d96a01d8f82aef9804441b70b20c7d17914725ec937618570a9614d7868d1906060015b60405180910390a15050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060603780546200091e9062002b9e565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015620012ff5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401620009f2565b6200130e3385858403620019cb565b5060019392505050565b6000620009b633848462001af3565b33600090815261012e602052604090205460ff166200135a5760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620013925760405162461bcd60e51b8152600401620009f29062002c0b565b7f9137e112a187039f8a3291c0a66fce97153d25ec42036e82360d5d0106d19a6e336200104a565b600054610100900460ff1680620013d4575060005460ff16155b620013f35760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff1615801562001416576000805461ffff19166101011790555b6001600160a01b0382166200146e5760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e3a20496e76616c6964205f7374616b696e674164647200000000006044820152606401620009f2565b6200147862001fc7565b620014826200204c565b620014cc6040518060400160405280600a81526020016920a7232a102a37b5b2b760b11b815250604051806040016040528060048152602001631053919560e21b815250620020b2565b6000620014dc6012600a62002e83565b620014ec9063496ed40062002e94565b61012f80546001600160a01b031990811673b3f5e20db0167d4a5b5c5daad6f1c76cc40cc52d90811790925561013080548216736b3887eb6091cc705ffa6e32e22b5524b3a9bea4179055610131805482167333ae0695fb3250f0788510b289d26309d4b8f9391790556101328054821673f5d2f60663d83abf28969f2a5f501178d8d64baa1790556101338054909116739f1660b7184bde8b8973c6618ac3d7d306e8a796179055909150620015be906064620015ac84600e62002e94565b620015b8919062002eb6565b6200213b565b61013054620015df906001600160a01b03166064620015ac84602262002e94565b6101315462001600906001600160a01b03166064620015ac84602062002e94565b6101325462001621906001600160a01b03166064620015ac84600862002e94565b6101335462001642906001600160a01b03166064620015ac84600c62002e94565b61012d80546001600160a01b0319166001600160a01b0385161790556200166b60003362002220565b62001686600080516020620047708339815191523362002220565b50801562000bf7576000805461ff00191690555050565b33600090815261012e602052604090205460ff16620016d05760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620017085760405162461bcd60e51b8152600401620009f29062002c0b565b7fb95dba6532fe75b06ba1c772703405eec99eeab78b9714ea82e9f1b476b08e6733604080516001600160a01b03928316815291851660208301528315159082015260600162001233565b60008281526097602052604090206001015462001771813362001ccc565b62000b74838362001dc5565b33600090815261012e602052604090205460ff16620017b05760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620017e85760405162461bcd60e51b8152600401620009f29062002c0b565b7f59fa608751e52e994195c00b80545995c182284d42f9712fe2394e4cb35d083e335b604080516001600160a01b039092168252602082018490520162000f08565b33600090815261012e602052604090205460ff166200185d5760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620018955760405162461bcd60e51b8152600401620009f29062002c0b565b7fdc42e244f819799f564ccfdd994971e4be4f86e6f901d47b81e5e29222cce519336200180b565b33600090815261012e602052604081205460ff16620018f05760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620019285760405162461bcd60e51b8152600401620009f29062002c0b565b6001600160a01b038416620019805760405162461bcd60e51b815260206004820152601860248201527f546f6b656e3a20496e76616c6964205f757365724164647200000000000000006044820152606401620009f2565b600080836200199d5761012d546001600160a01b031686620019ad565b61012d5486906001600160a01b03165b9092509050620019bf82828762001af3565b50600195945050505050565b6001600160a01b03831662001a2f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401620009f2565b6001600160a01b03821662001a925760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401620009f2565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831662001b595760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401620009f2565b6001600160a01b03821662001bbd5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401620009f2565b6001600160a01b0383166000908152603360205260409020548181101562001c375760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401620009f2565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929062001c7090849062002cf0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405162001cbd91815260200190565b60405180910390a35b50505050565b62001cd882826200123f565b62000bf75762001cf3816001600160a01b031660146200222c565b62001d008360206200222c565b60405160200162001d1392919062002ed9565b60408051601f198184030181529082905262461bcd60e51b8252620009f2916004016200281f565b62001d4782826200123f565b62000bf75760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905562001d813390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b62001dd182826200123f565b1562000bf75760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b600062000bf7813362001ccc565b600062001e7762001e2f565b905062001e8484620023e6565b60008351118062001e925750815b1562001ea65762001ea484846200248d565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1662001fc057805460ff191660011781556040516001600160a01b038316602482015262001f2890869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b1790526200248d565b50805460ff1916815562001f3b62001e2f565b6001600160a01b0316826001600160a01b03161462001fb55760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401620009f2565b62001fc08562002581565b5050505050565b600054610100900460ff168062001fe1575060005460ff16155b620020005760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff1615801562002023576000805461ffff19166101011790555b6200202d620025c3565b62002037620025c3565b801562000ccd576000805461ff001916905550565b600054610100900460ff168062002066575060005460ff16155b620020855760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff16158015620020a8576000805461ffff19166101011790555b62002023620025c3565b600054610100900460ff1680620020cc575060005460ff16155b620020eb5760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff161580156200210e576000805461ffff19166101011790555b62002118620025c3565b62002124838362002633565b801562000b74576000805461ff0019169055505050565b6001600160a01b038216620021935760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620009f2565b8060356000828254620021a7919062002cf0565b90915550506001600160a01b03821660009081526033602052604081208054839290620021d690849062002cf0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b62000bf7828262001d3b565b606060006200223d83600262002e94565b6200224a90600262002cf0565b67ffffffffffffffff811115620022655762002265620029ce565b6040519080825280601f01601f19166020018201604052801562002290576020820181803683370190505b509050600360fc1b81600081518110620022ae57620022ae62002f52565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110620022e057620022e062002f52565b60200101906001600160f81b031916908160001a90535060006200230684600262002e94565b6200231390600162002cf0565b90505b600181111562002395576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106200234b576200234b62002f52565b1a60f81b82828151811062002364576200236462002f52565b60200101906001600160f81b031916908160001a90535060049490941c936200238d8162002f68565b905062002316565b50831562000b435760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401620009f2565b803b6200244c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620009f2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b620024ee5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620009f2565b600080846001600160a01b0316846040516200250b919062002f82565b600060405180830381855af49150503d806000811462002548576040519150601f19603f3d011682016040523d82523d6000602084013e6200254d565b606091505b50915091506200257882826040518060600160405280602781526020016200479060279139620026d2565b95945050505050565b6200258c81620023e6565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680620025dd575060005460ff16155b620025fc5760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff1615801562002037576000805461ffff1916610101179055801562000ccd576000805461ff001916905550565b600054610100900460ff16806200264d575060005460ff16155b6200266c5760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff161580156200268f576000805461ffff19166101011790555b8251620026a49060369060208601906200271e565b508151620026ba9060379060208501906200271e565b50801562000b74576000805461ff0019169055505050565b60608315620026e357508162000b43565b825115620026f45782518084602001fd5b8160405162461bcd60e51b8152600401620009f291906200281f565b6117cf8062002fa183390190565b8280546200272c9062002b9e565b90600052602060002090601f0160209004810192826200275057600085556200279b565b82601f106200276b57805160ff19168380011785556200279b565b828001600101855582156200279b579182015b828111156200279b5782518255916020019190600101906200277e565b50620027a9929150620027ad565b5090565b5b80821115620027a95760008155600101620027ae565b600060208284031215620027d757600080fd5b81356001600160e01b03198116811462000b4357600080fd5b60005b838110156200280d578181015183820152602001620027f3565b8381111562001cc65750506000910152565b602081526000825180602084015262002840816040850160208701620027f0565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146200286c57600080fd5b919050565b600080604083850312156200288557600080fd5b620028908362002854565b946020939093013593505050565b600080600080600060a08688031215620028b757600080fd5b620028c28662002854565b9450620028d26020870162002854565b94979496505050506040830135926060810135926080909101359150565b6000806000606084860312156200290657600080fd5b620029118462002854565b9250620029216020850162002854565b9150604084013590509250925092565b6000602082840312156200294457600080fd5b5035919050565b600080604083850312156200295f57600080fd5b82359150620029716020840162002854565b90509250929050565b6000602082840312156200298d57600080fd5b62000b438262002854565b600080600060608486031215620029ae57600080fd5b620029b98462002854565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215620029f857600080fd5b62002a038362002854565b9150602083013567ffffffffffffffff8082111562002a2157600080fd5b818501915085601f83011262002a3657600080fd5b81358181111562002a4b5762002a4b620029ce565b604051601f8201601f19908116603f0116810190838211818310171562002a765762002a76620029ce565b8160405282815288602084870101111562002a9057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806000806080858703121562002ac957600080fd5b62002ad48562002854565b966020860135965060408601359560600135945092505050565b803580151581146200286c57600080fd5b6000806040838503121562002b1357600080fd5b62002b1e8362002854565b9150620029716020840162002aee565b6000806040838503121562002b4257600080fd5b62002b4d8362002854565b9150620029716020840162002854565b60008060006060848603121562002b7357600080fd5b62002b7e8462002854565b92506020840135915062002b956040850162002aee565b90509250925092565b600181811c9082168062002bb357607f821691505b6020821081141562002bd557634e487b7160e01b600052602260045260246000fd5b50919050565b602080825260169082015275546f6b656e3a20496e76616c6964204c697374696e6760501b604082015260600190565b60208082526017908201527f546f6b656e3a20496e616374697665204c697374696e67000000000000000000604082015260600190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000821982111562002d065762002d0662002cda565b500190565b602080825260139082015272151bdad95b8e88155b985d5d1a1bdc9a5e9959606a1b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181815b8085111562002dc757816000190482111562002dab5762002dab62002cda565b8085161562002db957918102915b93841c939080029062002d8b565b509250929050565b60008262002de05750600162000907565b8162002def5750600062000907565b816001811462002e08576002811462002e135762002e33565b600191505062000907565b60ff84111562002e275762002e2762002cda565b50506001821b62000907565b5060208310610133831016604e8410600b841016171562002e58575081810a62000907565b62002e64838362002d86565b806000190482111562002e7b5762002e7b62002cda565b029392505050565b600062000b4360ff84168362002dcf565b600081600019048311821515161562002eb15762002eb162002cda565b500290565b60008262002ed457634e487b7160e01b600052601260045260246000fd5b500490565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835162002f13816017850160208801620027f0565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835162002f46816028840160208801620027f0565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b60008162002f7a5762002f7a62002cda565b506000190190565b6000825162002f96818460208701620027f0565b919091019291505056fe608060405234801561001057600080fd5b50604051620017cf380380620017cf83398101604081905261003191610095565b600080546001600160a01b039384166001600160a01b0319918216179091556002805494909316938116939093179091556001554260045560038054909116331790556100d1565b80516001600160a01b038116811461009057600080fd5b919050565b6000806000606084860312156100aa57600080fd5b6100b384610079565b92506100c160208501610079565b9150604084015190509250925092565b6116ee80620000e16000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063573c0bd3116100c35780638da5cb5b1161007c5780638da5cb5b146103205780639405dfdd14610333578063a02b161e1461033c578063a5edfb531461034f578063ae169a5014610362578063d66d6c101461037557600080fd5b8063573c0bd3146102c25780635d03147a146102d5578063635b2770146102de57806380e4cc9d146102f1578063880cdc31146103045780638b0e9f3f1461031757600080fd5b80634048a257116101155780634048a2571461021b578063409e22051461024e5780634338fbaa14610280578063506f50bc1461028957806354a499021461029c57806355a373d6146102af57600080fd5b8063103a62ba146101525780632a421332146101675780632e1a7d4d146101c65780633a5381b5146101d95780633fa4f24514610204575b600080fd5b6101656101603660046114c5565b610388565b005b6101a46101753660046114fa565b600960209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6101656101d43660046114c5565b610422565b6002546101ec906001600160a01b031681565b6040516001600160a01b0390911681526020016101bd565b61020d60055481565b6040519081526020016101bd565b61023e610229366004611526565b60076020526000908152604090205460ff1681565b60405190151581526020016101bd565b6101a461025c3660046114c5565b60086020526000908152604090208054600182015460029092015490919060ff1683565b61020d60065481565b6101656102973660046114c5565b6106a5565b6101656102aa366004611541565b6106d4565b6003546101ec906001600160a01b031681565b6101656102d03660046114c5565b610777565b61020d60045481565b6101656102ec366004611526565b6107d7565b6101656102ff366004611526565b610823565b610165610312366004611526565b6108fe565b61020d600a5481565b6000546101ec906001600160a01b031681565b61020d60015481565b61016561034a3660046114c5565b610994565b61016561035d3660046114c5565b610b8b565b6101656103703660046114c5565b610d86565b610165610383366004611541565b610fdb565b6002546001600160a01b031633146103bb5760405162461bcd60e51b81526004016103b290611563565b60405180910390fd5b600681905560035460405163de6d745f60e01b8152600481018390526001600160a01b039091169063de6d745f906024015b600060405180830381600087803b15801561040757600080fd5b505af115801561041b573d6000803e3d6000fd5b5050505050565b6000546001600160a01b0316331461044c5760405162461bcd60e51b81526004016103b290611563565b42600454101561049e5760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a204f776e657273686970206578706972656421000000000060448201526064016103b2565b6006548110156104f05760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103b2565b60065460009061050d906105078462015180611395565b906113a8565b90506000610526826004546113b490919063ffffffff16565b905061053542620151806113c0565b8110156105845760405162461bcd60e51b815260206004820152601860248201527f4c697374696e673a20496e76616c696420616d6f756e7421000000000000000060448201526064016103b2565b60035460405163e9dc65bb60e01b815233600482015260248101859052600060448201819052916001600160a01b03169063e9dc65bb906064016020604051808303816000875af11580156105dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610601919061159d565b9050806106205760405162461bcd60e51b81526004016103b2906115b8565b60035460005460048054604051637602f0f160e01b81526001600160a01b039384169281019290925260248201889052604482015260648101859052911690637602f0f190608401600060405180830381600087803b15801561068257600080fd5b505af1158015610696573d6000803e3d6000fd5b50505060049290925550505050565b6002546001600160a01b031633146106cf5760405162461bcd60e51b81526004016103b290611563565b600155565b6002546001600160a01b031633146106fe5760405162461bcd60e51b81526004016103b290611563565b606481111561074f5760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c756500000060448201526064016103b2565b600091825260086020526040909120600180820192909255600201805460ff19169091179055565b6002546001600160a01b031633146107a15760405162461bcd60e51b81526004016103b290611563565b60058190556003546040516372d7b24d60e11b8152600481018390526001600160a01b039091169063e5af649a906024016103ed565b6002546001600160a01b031633146108015760405162461bcd60e51b81526004016103b290611563565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461084d5760405162461bcd60e51b81526004016103b290611563565b42600454101561089f5760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a204f776e657273686970206578706972656400000000000060448201526064016103b2565b6001600160a01b0381811660008181526007602052604090819020805460ff8082161560ff19909216821790925560035492516333be8f3d60e21b8152600481019490945216151560248301529091169063cefa3cf4906044016103ed565b6002546001600160a01b031633146109285760405162461bcd60e51b81526004016103b290611563565b42600454106109725760405162461bcd60e51b81526020600482015260166024820152754f776e657273686970206e6f7420657870697265642160501b60448201526064016103b2565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60035460405163e6d50cd760e01b81523060048201526000916001600160a01b03169063e6d50cd7906024016040805180830381865afa1580156109dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0091906115ef565b91505080610a505760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103b2565b60008281526009602090815260408083203384529091529020600281015460ff16610ab85760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103b2565b600181015415610acb57610acb83610d86565b6001810154600084815260086020526040902054610ae8916113b4565b6000848152600860205260409020556001810154600a54610b08916113b4565b600a5560006001820181905560028201805460ff1916905581556003546040516387d4535160e01b8152336004820152602481018590526001600160a01b03909116906387d4535190604401600060405180830381600087803b158015610b6e57600080fd5b505af1158015610b82573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0316331480610ba5575042600454105b610bc15760405162461bcd60e51b81526004016103b290611563565b600654811015610c135760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103b2565b60035460405163e9dc65bb60e01b815233600482015260248101839052600160448201526000916001600160a01b03169063e9dc65bb906064016020604051808303816000875af1158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c90919061159d565b905080610caf5760405162461bcd60e51b81526004016103b2906115b8565b6004546000546001600160a01b031642821015610cdc57600080546001600160a01b031916331790554291505b600654610cfb90610cf4906105078762015180611395565b83906113c0565b6004818155600354600054604051631b33557760e01b81526001600160a01b03868116948201949094529083166024820152604481018690526064810193909352608483018790521690631b3355779060a401600060405180830381600087803b158015610d6857600080fd5b505af1158015610d7c573d6000803e3d6000fd5b5050505050505050565b60008181526009602090815260408083203384529091529020600281015460ff16610dee5760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103b2565b6003546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610e37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5b9190611619565b90508160010154811015610eb15760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103b2565b6000610ebd84846113cc565b60035460405163e9dc65bb60e01b8152336004820152602481018390526000604482018190529293506001600160a01b039091169063e9dc65bb906064016020604051808303816000875af1158015610f1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3e919061159d565b905080610f5d5760405162461bcd60e51b81526004016103b2906115b8565b600354845460405163a9ae143160e01b81523360048201526024810185905260448101919091524260648201526001600160a01b039091169063a9ae143190608401600060405180830381600087803b158015610fb957600080fd5b505af1158015610fcd573d6000803e3d6000fd5b505042909555505050505050565b60035460405163e6d50cd760e01b81523060048201526000916001600160a01b03169063e6d50cd7906024016040805180830381865afa158015611023573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104791906115ef565b915050806110975760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103b2565b60008281526008602052604090206002015460ff166110f85760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c6500000060448201526064016103b2565b6000828152600960209081526040808320338452909152902060018101548414156111655760405162461bcd60e51b815260206004820152601960248201527f4c697374696e673a205374616b6520756e6368616e676564210000000000000060448201526064016103b2565b6003546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa1580156111ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d29190611619565b9050848110156112245760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103b2565b6001820154156112375761123784610d86565b6001820154851160008161125957600184015461125490886113b4565b611269565b60018401546112699088906113b4565b905081156112c257600184015461128090826113c0565b600185015560008681526008602052604090205461129e90826113c0565b600087815260086020526040902055600a546112ba90826113c0565b600a5561130f565b60018401546112d190826113b4565b60018501556000868152600860205260409020546112ef90826113b4565b600087815260086020526040902055600a5461130b90826113b4565b600a555b42845560028401805460ff19166001179055600354604051634c2a207560e01b815233600482015260248101899052604481018890526001600160a01b0390911690634c2a207590606401600060405180830381600087803b15801561137457600080fd5b505af1158015611388573d6000803e3d6000fd5b5050505050505050505050565b60006113a18284611648565b9392505050565b60006113a18284611667565b60006113a18284611689565b60006113a182846116a0565b6000806113eb6005546105076064600a5461139590919063ffffffff16565b905060568111156113fa575060565b4260045410801561140b5750603281115b15611414575060325b600061143060646105078460065461139590919063ffffffff16565b60008681526008602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff16151593820193909352908901549495509361149392610507919061148d9060649084908a90611395565b90611395565b86549091506000906114a69042906113b4565b90506114b9620151806105078484611395565b98975050505050505050565b6000602082840312156114d757600080fd5b5035919050565b80356001600160a01b03811681146114f557600080fd5b919050565b6000806040838503121561150d57600080fd5b8235915061151d602084016114de565b90509250929050565b60006020828403121561153857600080fd5b6113a1826114de565b6000806040838503121561155457600080fd5b50508035926020909101359150565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b805180151581146114f557600080fd5b6000602082840312156115af57600080fd5b6113a18261158d565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b6000806040838503121561160257600080fd5b61160b8361158d565b915061151d6020840161158d565b60006020828403121561162b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561166257611662611632565b500290565b60008261168457634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561169b5761169b611632565b500390565b600082198211156116b3576116b3611632565b50019056fea2646970667358221220bc012f8023d12f2c0183afbf23ffbdde349eb3a9a99cfb1d918102e5d136dc0564736f6c634300080b0033a95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122022f3b726333f4f707abda0604f0b6607b1767eb56760d951bd1644362d2f5b2164736f6c634300080b0033",
  "deployedBytecode": "0x608060405260043610620002775760003560e01c80637b6aa9221162000153578063cefa3cf411620000c5578063dd62ed3e1162000084578063dd62ed3e14620007a3578063de6d745f14620007ed578063e5af649a1462000812578063e6d50cd71462000837578063e9dc65bb146200088d578063f8d7f79014620008b257600080fd5b8063cefa3cf414620006f0578063d24ef4f31462000715578063d547741f1462000738578063d7b4be24146200075d578063dd51183f146200078057600080fd5b8063a217fddf1162000112578063a217fddf1462000645578063a457c2d7146200065c578063a9059cbb1462000681578063a9ae143114620006a6578063c4d66de814620006cb57600080fd5b80637b6aa922146200059b57806385e1c72414620005be57806387d4535114620005e357806391d14854146200060857806395d89b41146200062d57600080fd5b806336568abe11620001ed5780634f1ef28611620001ac5780634f1ef28614620004db5780635b06a1d114620004f25780636b62393e146200051757806370a08231146200053c5780637602f0f1146200057657600080fd5b806336568abe14620004225780633659cfe61462000447578063393df8cb146200046c5780633950935114620004915780634c2a207514620004b657600080fd5b80631b335577116200023a5780631b335577146200035f57806323b872dd1462000386578063248a9ca314620003ab5780632f2ff15d14620003df578063313ce567146200040457600080fd5b806301ffc9a7146200027c57806306fdde0314620002b657806307aec46214620002dd578063095ea7b3146200031957806318160ddd146200033e575b600080fd5b3480156200028957600080fd5b50620002a16200029b366004620027c4565b620008d5565b60405190151581526020015b60405180910390f35b348015620002c357600080fd5b50620002ce6200090d565b604051620002ad91906200281f565b348015620002ea57600080fd5b506101325462000300906001600160a01b031681565b6040516001600160a01b039091168152602001620002ad565b3480156200032657600080fd5b50620002a16200033836600462002871565b620009a7565b3480156200034b57600080fd5b506035545b604051908152602001620002ad565b3480156200036c57600080fd5b50620003846200037e3660046200289e565b620009bf565b005b3480156200039357600080fd5b50620002a1620003a5366004620028f0565b62000a98565b348015620003b857600080fd5b5062000350620003ca36600462002931565b60009081526097602052604090206001015490565b348015620003ec57600080fd5b5062000384620003fe3660046200294b565b62000b4a565b3480156200041157600080fd5b5060405160128152602001620002ad565b3480156200042f57600080fd5b5062000384620004413660046200294b565b62000b79565b3480156200045457600080fd5b5062000384620004663660046200297a565b62000bfb565b3480156200047957600080fd5b50620003506000805160206200477083398151915281565b3480156200049e57600080fd5b50620002a1620004b036600462002871565b62000cd0565b348015620004c357600080fd5b5062000384620004d536600462002998565b62000d10565b62000384620004ec366004620029e4565b62000dcf565b348015620004ff57600080fd5b5062000384620005113660046200297a565b62000e91565b3480156200052457600080fd5b5062000384620005363660046200297a565b62000f13565b3480156200054957600080fd5b50620003506200055b3660046200297a565b6001600160a01b031660009081526033602052604090205490565b3480156200058357600080fd5b50620003846200059536600462002ab2565b62000fbc565b348015620005a857600080fd5b506101315462000300906001600160a01b031681565b348015620005cb57600080fd5b5062000384620005dd36600462002871565b62001087565b348015620005f057600080fd5b50620003846200060236600462002871565b62001186565b3480156200061557600080fd5b50620002a1620006273660046200294b565b6200123f565b3480156200063a57600080fd5b50620002ce6200126a565b3480156200065257600080fd5b5062000350600081565b3480156200066957600080fd5b50620002a16200067b36600462002871565b6200127b565b3480156200068e57600080fd5b50620002a1620006a036600462002871565b62001318565b348015620006b357600080fd5b5062000384620006c536600462002ab2565b62001327565b348015620006d857600080fd5b5062000384620006ea3660046200297a565b620013ba565b348015620006fd57600080fd5b50620003846200070f36600462002aff565b6200169d565b3480156200072257600080fd5b5061012f5462000300906001600160a01b031681565b3480156200074557600080fd5b5062000384620007573660046200294b565b62001753565b3480156200076a57600080fd5b5061012d5462000300906001600160a01b031681565b3480156200078d57600080fd5b506101335462000300906001600160a01b031681565b348015620007b057600080fd5b5062000350620007c236600462002b2e565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b348015620007fa57600080fd5b50620003846200080c36600462002931565b6200177d565b3480156200081f57600080fd5b50620003846200083136600462002931565b6200182a565b3480156200084457600080fd5b5062000875620008563660046200297a565b61012e6020526000908152604090205460ff8082169161010090041682565b604080519215158352901515602083015201620002ad565b3480156200089a57600080fd5b50620002a1620008ac36600462002b5d565b620018bd565b348015620008bf57600080fd5b506101305462000300906001600160a01b031681565b60006001600160e01b03198216637965db0b60e01b14806200090757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060603680546200091e9062002b9e565b80601f01602080910402602001604051908101604052809291908181526020018280546200094c9062002b9e565b80156200099d5780601f1062000971576101008083540402835291602001916200099d565b820191906000526020600020905b8154815290600101906020018083116200097f57829003601f168201915b5050505050905090565b6000620009b6338484620019cb565b50600192915050565b33600090815261012e602052604090205460ff16620009fb5760405162461bcd60e51b8152600401620009f29062002bdb565b60405180910390fd5b33600090815261012e6020526040902054610100900460ff1662000a335760405162461bcd60e51b8152600401620009f29062002c0b565b604080513381526001600160a01b038781166020830152861681830152606081018590526080810184905260a0810183905290517fd661111d7b74eb34869b55470afd5d1e1440b83ab39f43ac784653c47943f9119181900360c00190a15050505050565b600062000aa784848462001af3565b6001600160a01b03841660009081526034602090815260408083203384529091529020548281101562000b2e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401620009f2565b62000b3d8533858403620019cb565b60019150505b9392505050565b60008281526097602052604090206001015462000b68813362001ccc565b62000b74838362001d3b565b505050565b6001600160a01b038116331462000beb5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401620009f2565b62000bf7828262001dc5565b5050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141562000c475760405162461bcd60e51b8152600401620009f29062002c42565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662000c7b62001e2f565b6001600160a01b03161462000ca45760405162461bcd60e51b8152600401620009f29062002c8e565b62000caf8162001e5d565b6040805160008082526020820190925262000ccd9183919062001e6b565b50565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091620009b691859062000d0a90869062002cf0565b620019cb565b33600090815261012e602052604090205460ff1662000d435760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff1662000d7b5760405162461bcd60e51b8152600401620009f29062002c0b565b604080513381526001600160a01b03851660208201528082018490526060810183905290517f2e99fd66dad9611ac11d08dcbfdb417ac840074a8659831e928c70a92a6215e79181900360800190a1505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141562000e1b5760405162461bcd60e51b8152600401620009f29062002c42565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662000e4f62001e2f565b6001600160a01b03161462000e785760405162461bcd60e51b8152600401620009f29062002c8e565b62000e838262001e5d565b62000bf78282600162001e6b565b62000e9e6000336200123f565b62000ebd5760405162461bcd60e51b8152600401620009f29062002d0b565b61012d80546001600160a01b0319166001600160a01b0383169081179091556040519081527f67d8422249b07c675063c3fcea2726f9884bbf0b823d1544a91e36614e41781d906020015b60405180910390a150565b62000f2e60008051602062004770833981519152336200123f565b62000f4d5760405162461bcd60e51b8152600401620009f29062002d0b565b6001600160a01b038116600090815261012e602052604090205460ff1662000f895760405162461bcd60e51b8152600401620009f29062002bdb565b6001600160a01b0316600090815261012e60205260409020805461ff001981166101009182900460ff1615909102179055565b33600090815261012e602052604090205460ff1662000fef5760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620010275760405162461bcd60e51b8152600401620009f29062002c0b565b7febff2602b3f468259e1e99f613fed6691f3a6526effe6ef3e768ba7ae7a36c4f335b604080516001600160a01b03928316815291871660208301528101859052606081018490526080810183905260a00160405180910390a150505050565b620010a260008051602062004770833981519152336200123f565b620010c15760405162461bcd60e51b8152600401620009f29062002d0b565b6000338383604051620010d49062002710565b6001600160a01b0393841681529290911660208301526040820152606001604051809103906000f0801580156200110f573d6000803e3d6000fd5b50604080513381526001600160a01b03868116602083015283168183015290519192507f619b247fd25df695eff36b0d4f3404c04b084cfe052d022badc2011e0cb7cade919081900360600190a16001600160a01b0316600090815261012e60205260409020805461ffff19166101011790555050565b33600090815261012e602052604090205460ff16620011b95760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620011f15760405162461bcd60e51b8152600401620009f29062002c0b565b604080513381526001600160a01b03841660208201529081018290527f919d96a01d8f82aef9804441b70b20c7d17914725ec937618570a9614d7868d1906060015b60405180910390a15050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060603780546200091e9062002b9e565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015620012ff5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401620009f2565b6200130e3385858403620019cb565b5060019392505050565b6000620009b633848462001af3565b33600090815261012e602052604090205460ff166200135a5760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620013925760405162461bcd60e51b8152600401620009f29062002c0b565b7f9137e112a187039f8a3291c0a66fce97153d25ec42036e82360d5d0106d19a6e336200104a565b600054610100900460ff1680620013d4575060005460ff16155b620013f35760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff1615801562001416576000805461ffff19166101011790555b6001600160a01b0382166200146e5760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e3a20496e76616c6964205f7374616b696e674164647200000000006044820152606401620009f2565b6200147862001fc7565b620014826200204c565b620014cc6040518060400160405280600a81526020016920a7232a102a37b5b2b760b11b815250604051806040016040528060048152602001631053919560e21b815250620020b2565b6000620014dc6012600a62002e83565b620014ec9063496ed40062002e94565b61012f80546001600160a01b031990811673b3f5e20db0167d4a5b5c5daad6f1c76cc40cc52d90811790925561013080548216736b3887eb6091cc705ffa6e32e22b5524b3a9bea4179055610131805482167333ae0695fb3250f0788510b289d26309d4b8f9391790556101328054821673f5d2f60663d83abf28969f2a5f501178d8d64baa1790556101338054909116739f1660b7184bde8b8973c6618ac3d7d306e8a796179055909150620015be906064620015ac84600e62002e94565b620015b8919062002eb6565b6200213b565b61013054620015df906001600160a01b03166064620015ac84602262002e94565b6101315462001600906001600160a01b03166064620015ac84602062002e94565b6101325462001621906001600160a01b03166064620015ac84600862002e94565b6101335462001642906001600160a01b03166064620015ac84600c62002e94565b61012d80546001600160a01b0319166001600160a01b0385161790556200166b60003362002220565b62001686600080516020620047708339815191523362002220565b50801562000bf7576000805461ff00191690555050565b33600090815261012e602052604090205460ff16620016d05760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620017085760405162461bcd60e51b8152600401620009f29062002c0b565b7fb95dba6532fe75b06ba1c772703405eec99eeab78b9714ea82e9f1b476b08e6733604080516001600160a01b03928316815291851660208301528315159082015260600162001233565b60008281526097602052604090206001015462001771813362001ccc565b62000b74838362001dc5565b33600090815261012e602052604090205460ff16620017b05760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620017e85760405162461bcd60e51b8152600401620009f29062002c0b565b7f59fa608751e52e994195c00b80545995c182284d42f9712fe2394e4cb35d083e335b604080516001600160a01b039092168252602082018490520162000f08565b33600090815261012e602052604090205460ff166200185d5760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620018955760405162461bcd60e51b8152600401620009f29062002c0b565b7fdc42e244f819799f564ccfdd994971e4be4f86e6f901d47b81e5e29222cce519336200180b565b33600090815261012e602052604081205460ff16620018f05760405162461bcd60e51b8152600401620009f29062002bdb565b33600090815261012e6020526040902054610100900460ff16620019285760405162461bcd60e51b8152600401620009f29062002c0b565b6001600160a01b038416620019805760405162461bcd60e51b815260206004820152601860248201527f546f6b656e3a20496e76616c6964205f757365724164647200000000000000006044820152606401620009f2565b600080836200199d5761012d546001600160a01b031686620019ad565b61012d5486906001600160a01b03165b9092509050620019bf82828762001af3565b50600195945050505050565b6001600160a01b03831662001a2f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401620009f2565b6001600160a01b03821662001a925760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401620009f2565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831662001b595760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401620009f2565b6001600160a01b03821662001bbd5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401620009f2565b6001600160a01b0383166000908152603360205260409020548181101562001c375760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401620009f2565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929062001c7090849062002cf0565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405162001cbd91815260200190565b60405180910390a35b50505050565b62001cd882826200123f565b62000bf75762001cf3816001600160a01b031660146200222c565b62001d008360206200222c565b60405160200162001d1392919062002ed9565b60408051601f198184030181529082905262461bcd60e51b8252620009f2916004016200281f565b62001d4782826200123f565b62000bf75760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905562001d813390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b62001dd182826200123f565b1562000bf75760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b600062000bf7813362001ccc565b600062001e7762001e2f565b905062001e8484620023e6565b60008351118062001e925750815b1562001ea65762001ea484846200248d565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1662001fc057805460ff191660011781556040516001600160a01b038316602482015262001f2890869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b1790526200248d565b50805460ff1916815562001f3b62001e2f565b6001600160a01b0316826001600160a01b03161462001fb55760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401620009f2565b62001fc08562002581565b5050505050565b600054610100900460ff168062001fe1575060005460ff16155b620020005760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff1615801562002023576000805461ffff19166101011790555b6200202d620025c3565b62002037620025c3565b801562000ccd576000805461ff001916905550565b600054610100900460ff168062002066575060005460ff16155b620020855760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff16158015620020a8576000805461ffff19166101011790555b62002023620025c3565b600054610100900460ff1680620020cc575060005460ff16155b620020eb5760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff161580156200210e576000805461ffff19166101011790555b62002118620025c3565b62002124838362002633565b801562000b74576000805461ff0019169055505050565b6001600160a01b038216620021935760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620009f2565b8060356000828254620021a7919062002cf0565b90915550506001600160a01b03821660009081526033602052604081208054839290620021d690849062002cf0565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b62000bf7828262001d3b565b606060006200223d83600262002e94565b6200224a90600262002cf0565b67ffffffffffffffff811115620022655762002265620029ce565b6040519080825280601f01601f19166020018201604052801562002290576020820181803683370190505b509050600360fc1b81600081518110620022ae57620022ae62002f52565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110620022e057620022e062002f52565b60200101906001600160f81b031916908160001a90535060006200230684600262002e94565b6200231390600162002cf0565b90505b600181111562002395576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106200234b576200234b62002f52565b1a60f81b82828151811062002364576200236462002f52565b60200101906001600160f81b031916908160001a90535060049490941c936200238d8162002f68565b905062002316565b50831562000b435760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401620009f2565b803b6200244c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620009f2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b620024ee5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620009f2565b600080846001600160a01b0316846040516200250b919062002f82565b600060405180830381855af49150503d806000811462002548576040519150601f19603f3d011682016040523d82523d6000602084013e6200254d565b606091505b50915091506200257882826040518060600160405280602781526020016200479060279139620026d2565b95945050505050565b6200258c81620023e6565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff1680620025dd575060005460ff16155b620025fc5760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff1615801562002037576000805461ffff1916610101179055801562000ccd576000805461ff001916905550565b600054610100900460ff16806200264d575060005460ff16155b6200266c5760405162461bcd60e51b8152600401620009f29062002d38565b600054610100900460ff161580156200268f576000805461ffff19166101011790555b8251620026a49060369060208601906200271e565b508151620026ba9060379060208501906200271e565b50801562000b74576000805461ff0019169055505050565b60608315620026e357508162000b43565b825115620026f45782518084602001fd5b8160405162461bcd60e51b8152600401620009f291906200281f565b6117cf8062002fa183390190565b8280546200272c9062002b9e565b90600052602060002090601f0160209004810192826200275057600085556200279b565b82601f106200276b57805160ff19168380011785556200279b565b828001600101855582156200279b579182015b828111156200279b5782518255916020019190600101906200277e565b50620027a9929150620027ad565b5090565b5b80821115620027a95760008155600101620027ae565b600060208284031215620027d757600080fd5b81356001600160e01b03198116811462000b4357600080fd5b60005b838110156200280d578181015183820152602001620027f3565b8381111562001cc65750506000910152565b602081526000825180602084015262002840816040850160208701620027f0565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146200286c57600080fd5b919050565b600080604083850312156200288557600080fd5b620028908362002854565b946020939093013593505050565b600080600080600060a08688031215620028b757600080fd5b620028c28662002854565b9450620028d26020870162002854565b94979496505050506040830135926060810135926080909101359150565b6000806000606084860312156200290657600080fd5b620029118462002854565b9250620029216020850162002854565b9150604084013590509250925092565b6000602082840312156200294457600080fd5b5035919050565b600080604083850312156200295f57600080fd5b82359150620029716020840162002854565b90509250929050565b6000602082840312156200298d57600080fd5b62000b438262002854565b600080600060608486031215620029ae57600080fd5b620029b98462002854565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215620029f857600080fd5b62002a038362002854565b9150602083013567ffffffffffffffff8082111562002a2157600080fd5b818501915085601f83011262002a3657600080fd5b81358181111562002a4b5762002a4b620029ce565b604051601f8201601f19908116603f0116810190838211818310171562002a765762002a76620029ce565b8160405282815288602084870101111562002a9057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806000806080858703121562002ac957600080fd5b62002ad48562002854565b966020860135965060408601359560600135945092505050565b803580151581146200286c57600080fd5b6000806040838503121562002b1357600080fd5b62002b1e8362002854565b9150620029716020840162002aee565b6000806040838503121562002b4257600080fd5b62002b4d8362002854565b9150620029716020840162002854565b60008060006060848603121562002b7357600080fd5b62002b7e8462002854565b92506020840135915062002b956040850162002aee565b90509250925092565b600181811c9082168062002bb357607f821691505b6020821081141562002bd557634e487b7160e01b600052602260045260246000fd5b50919050565b602080825260169082015275546f6b656e3a20496e76616c6964204c697374696e6760501b604082015260600190565b60208082526017908201527f546f6b656e3a20496e616374697665204c697374696e67000000000000000000604082015260600190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000821982111562002d065762002d0662002cda565b500190565b602080825260139082015272151bdad95b8e88155b985d5d1a1bdc9a5e9959606a1b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181815b8085111562002dc757816000190482111562002dab5762002dab62002cda565b8085161562002db957918102915b93841c939080029062002d8b565b509250929050565b60008262002de05750600162000907565b8162002def5750600062000907565b816001811462002e08576002811462002e135762002e33565b600191505062000907565b60ff84111562002e275762002e2762002cda565b50506001821b62000907565b5060208310610133831016604e8410600b841016171562002e58575081810a62000907565b62002e64838362002d86565b806000190482111562002e7b5762002e7b62002cda565b029392505050565b600062000b4360ff84168362002dcf565b600081600019048311821515161562002eb15762002eb162002cda565b500290565b60008262002ed457634e487b7160e01b600052601260045260246000fd5b500490565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835162002f13816017850160208801620027f0565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835162002f46816028840160208801620027f0565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b60008162002f7a5762002f7a62002cda565b506000190190565b6000825162002f96818460208701620027f0565b919091019291505056fe608060405234801561001057600080fd5b50604051620017cf380380620017cf83398101604081905261003191610095565b600080546001600160a01b039384166001600160a01b0319918216179091556002805494909316938116939093179091556001554260045560038054909116331790556100d1565b80516001600160a01b038116811461009057600080fd5b919050565b6000806000606084860312156100aa57600080fd5b6100b384610079565b92506100c160208501610079565b9150604084015190509250925092565b6116ee80620000e16000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063573c0bd3116100c35780638da5cb5b1161007c5780638da5cb5b146103205780639405dfdd14610333578063a02b161e1461033c578063a5edfb531461034f578063ae169a5014610362578063d66d6c101461037557600080fd5b8063573c0bd3146102c25780635d03147a146102d5578063635b2770146102de57806380e4cc9d146102f1578063880cdc31146103045780638b0e9f3f1461031757600080fd5b80634048a257116101155780634048a2571461021b578063409e22051461024e5780634338fbaa14610280578063506f50bc1461028957806354a499021461029c57806355a373d6146102af57600080fd5b8063103a62ba146101525780632a421332146101675780632e1a7d4d146101c65780633a5381b5146101d95780633fa4f24514610204575b600080fd5b6101656101603660046114c5565b610388565b005b6101a46101753660046114fa565b600960209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6101656101d43660046114c5565b610422565b6002546101ec906001600160a01b031681565b6040516001600160a01b0390911681526020016101bd565b61020d60055481565b6040519081526020016101bd565b61023e610229366004611526565b60076020526000908152604090205460ff1681565b60405190151581526020016101bd565b6101a461025c3660046114c5565b60086020526000908152604090208054600182015460029092015490919060ff1683565b61020d60065481565b6101656102973660046114c5565b6106a5565b6101656102aa366004611541565b6106d4565b6003546101ec906001600160a01b031681565b6101656102d03660046114c5565b610777565b61020d60045481565b6101656102ec366004611526565b6107d7565b6101656102ff366004611526565b610823565b610165610312366004611526565b6108fe565b61020d600a5481565b6000546101ec906001600160a01b031681565b61020d60015481565b61016561034a3660046114c5565b610994565b61016561035d3660046114c5565b610b8b565b6101656103703660046114c5565b610d86565b610165610383366004611541565b610fdb565b6002546001600160a01b031633146103bb5760405162461bcd60e51b81526004016103b290611563565b60405180910390fd5b600681905560035460405163de6d745f60e01b8152600481018390526001600160a01b039091169063de6d745f906024015b600060405180830381600087803b15801561040757600080fd5b505af115801561041b573d6000803e3d6000fd5b5050505050565b6000546001600160a01b0316331461044c5760405162461bcd60e51b81526004016103b290611563565b42600454101561049e5760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a204f776e657273686970206578706972656421000000000060448201526064016103b2565b6006548110156104f05760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103b2565b60065460009061050d906105078462015180611395565b906113a8565b90506000610526826004546113b490919063ffffffff16565b905061053542620151806113c0565b8110156105845760405162461bcd60e51b815260206004820152601860248201527f4c697374696e673a20496e76616c696420616d6f756e7421000000000000000060448201526064016103b2565b60035460405163e9dc65bb60e01b815233600482015260248101859052600060448201819052916001600160a01b03169063e9dc65bb906064016020604051808303816000875af11580156105dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610601919061159d565b9050806106205760405162461bcd60e51b81526004016103b2906115b8565b60035460005460048054604051637602f0f160e01b81526001600160a01b039384169281019290925260248201889052604482015260648101859052911690637602f0f190608401600060405180830381600087803b15801561068257600080fd5b505af1158015610696573d6000803e3d6000fd5b50505060049290925550505050565b6002546001600160a01b031633146106cf5760405162461bcd60e51b81526004016103b290611563565b600155565b6002546001600160a01b031633146106fe5760405162461bcd60e51b81526004016103b290611563565b606481111561074f5760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c756500000060448201526064016103b2565b600091825260086020526040909120600180820192909255600201805460ff19169091179055565b6002546001600160a01b031633146107a15760405162461bcd60e51b81526004016103b290611563565b60058190556003546040516372d7b24d60e11b8152600481018390526001600160a01b039091169063e5af649a906024016103ed565b6002546001600160a01b031633146108015760405162461bcd60e51b81526004016103b290611563565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461084d5760405162461bcd60e51b81526004016103b290611563565b42600454101561089f5760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a204f776e657273686970206578706972656400000000000060448201526064016103b2565b6001600160a01b0381811660008181526007602052604090819020805460ff8082161560ff19909216821790925560035492516333be8f3d60e21b8152600481019490945216151560248301529091169063cefa3cf4906044016103ed565b6002546001600160a01b031633146109285760405162461bcd60e51b81526004016103b290611563565b42600454106109725760405162461bcd60e51b81526020600482015260166024820152754f776e657273686970206e6f7420657870697265642160501b60448201526064016103b2565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60035460405163e6d50cd760e01b81523060048201526000916001600160a01b03169063e6d50cd7906024016040805180830381865afa1580156109dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0091906115ef565b91505080610a505760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103b2565b60008281526009602090815260408083203384529091529020600281015460ff16610ab85760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103b2565b600181015415610acb57610acb83610d86565b6001810154600084815260086020526040902054610ae8916113b4565b6000848152600860205260409020556001810154600a54610b08916113b4565b600a5560006001820181905560028201805460ff1916905581556003546040516387d4535160e01b8152336004820152602481018590526001600160a01b03909116906387d4535190604401600060405180830381600087803b158015610b6e57600080fd5b505af1158015610b82573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0316331480610ba5575042600454105b610bc15760405162461bcd60e51b81526004016103b290611563565b600654811015610c135760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103b2565b60035460405163e9dc65bb60e01b815233600482015260248101839052600160448201526000916001600160a01b03169063e9dc65bb906064016020604051808303816000875af1158015610c6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c90919061159d565b905080610caf5760405162461bcd60e51b81526004016103b2906115b8565b6004546000546001600160a01b031642821015610cdc57600080546001600160a01b031916331790554291505b600654610cfb90610cf4906105078762015180611395565b83906113c0565b6004818155600354600054604051631b33557760e01b81526001600160a01b03868116948201949094529083166024820152604481018690526064810193909352608483018790521690631b3355779060a401600060405180830381600087803b158015610d6857600080fd5b505af1158015610d7c573d6000803e3d6000fd5b5050505050505050565b60008181526009602090815260408083203384529091529020600281015460ff16610dee5760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103b2565b6003546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610e37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5b9190611619565b90508160010154811015610eb15760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103b2565b6000610ebd84846113cc565b60035460405163e9dc65bb60e01b8152336004820152602481018390526000604482018190529293506001600160a01b039091169063e9dc65bb906064016020604051808303816000875af1158015610f1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3e919061159d565b905080610f5d5760405162461bcd60e51b81526004016103b2906115b8565b600354845460405163a9ae143160e01b81523360048201526024810185905260448101919091524260648201526001600160a01b039091169063a9ae143190608401600060405180830381600087803b158015610fb957600080fd5b505af1158015610fcd573d6000803e3d6000fd5b505042909555505050505050565b60035460405163e6d50cd760e01b81523060048201526000916001600160a01b03169063e6d50cd7906024016040805180830381865afa158015611023573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104791906115ef565b915050806110975760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103b2565b60008281526008602052604090206002015460ff166110f85760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c6500000060448201526064016103b2565b6000828152600960209081526040808320338452909152902060018101548414156111655760405162461bcd60e51b815260206004820152601960248201527f4c697374696e673a205374616b6520756e6368616e676564210000000000000060448201526064016103b2565b6003546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa1580156111ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d29190611619565b9050848110156112245760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103b2565b6001820154156112375761123784610d86565b6001820154851160008161125957600184015461125490886113b4565b611269565b60018401546112699088906113b4565b905081156112c257600184015461128090826113c0565b600185015560008681526008602052604090205461129e90826113c0565b600087815260086020526040902055600a546112ba90826113c0565b600a5561130f565b60018401546112d190826113b4565b60018501556000868152600860205260409020546112ef90826113b4565b600087815260086020526040902055600a5461130b90826113b4565b600a555b42845560028401805460ff19166001179055600354604051634c2a207560e01b815233600482015260248101899052604481018890526001600160a01b0390911690634c2a207590606401600060405180830381600087803b15801561137457600080fd5b505af1158015611388573d6000803e3d6000fd5b5050505050505050505050565b60006113a18284611648565b9392505050565b60006113a18284611667565b60006113a18284611689565b60006113a182846116a0565b6000806113eb6005546105076064600a5461139590919063ffffffff16565b905060568111156113fa575060565b4260045410801561140b5750603281115b15611414575060325b600061143060646105078460065461139590919063ffffffff16565b60008681526008602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff16151593820193909352908901549495509361149392610507919061148d9060649084908a90611395565b90611395565b86549091506000906114a69042906113b4565b90506114b9620151806105078484611395565b98975050505050505050565b6000602082840312156114d757600080fd5b5035919050565b80356001600160a01b03811681146114f557600080fd5b919050565b6000806040838503121561150d57600080fd5b8235915061151d602084016114de565b90509250929050565b60006020828403121561153857600080fd5b6113a1826114de565b6000806040838503121561155457600080fd5b50508035926020909101359150565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b805180151581146114f557600080fd5b6000602082840312156115af57600080fd5b6113a18261158d565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b6000806040838503121561160257600080fd5b61160b8361158d565b915061151d6020840161158d565b60006020828403121561162b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561166257611662611632565b500290565b60008261168457634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561169b5761169b611632565b500390565b600082198211156116b3576116b3611632565b50019056fea2646970667358221220bc012f8023d12f2c0183afbf23ffbdde349eb3a9a99cfb1d918102e5d136dc0564736f6c634300080b0033a95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122022f3b726333f4f707abda0604f0b6607b1767eb56760d951bd1644362d2f5b2164736f6c634300080b0033",
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
      "UpdateStakingAddr(address)": {
        "details": "Emitted when the staking address is updated, `_stakingAddr` should be the new address "
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
      "createListing(address,uint256)": {
        "details": "Create a new listing (the tokenized version of a real estate product)  Restricted to only validators A newly created listing is set with two properties: `_isCreated` and `_active` Listing's validator is the validator address making the transaction. The validator must specify the address of listing's owner  Emits a {ListingCreation} event"
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
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
        "details": "Deployer has the default roles of DEFAULT_ADMIN_ROLE and VALIDATOR Staking address is set here  Initial token distribution addresses are also set here since variables can't be initialized outsize  initialize function"
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
        "details": "Toggle listing `_active` status. Shall be useful if there's a listing no longer in operation Restricted to only validators The `_listingAddr` must be the address of a created listing "
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
        "notice": "The below functions are to trigger listing events"
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
        "astId": 1938,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "1",
        "type": "t_array(t_uint256)50_storage"
      },
      {
        "astId": 993,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_balances",
        "offset": 0,
        "slot": "51",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 999,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_allowances",
        "offset": 0,
        "slot": "52",
        "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 1001,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_totalSupply",
        "offset": 0,
        "slot": "53",
        "type": "t_uint256"
      },
      {
        "astId": 1003,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_name",
        "offset": 0,
        "slot": "54",
        "type": "t_string_storage"
      },
      {
        "astId": 1005,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "_symbol",
        "offset": 0,
        "slot": "55",
        "type": "t_string_storage"
      },
      {
        "astId": 1546,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "__gap",
        "offset": 0,
        "slot": "56",
        "type": "t_array(t_uint256)45_storage"
      },
      {
        "astId": 2247,
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
        "astId": 3546,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "stakingAddress",
        "offset": 0,
        "slot": "301",
        "type": "t_address"
      },
      {
        "astId": 3556,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "listingStatus",
        "offset": 0,
        "slot": "302",
        "type": "t_mapping(t_address,t_struct(ListingStatusModel)3551_storage)"
      },
      {
        "astId": 3559,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "PLATFORM_DEVELOPMENT",
        "offset": 0,
        "slot": "303",
        "type": "t_address"
      },
      {
        "astId": 3561,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "COMMUNITY",
        "offset": 0,
        "slot": "304",
        "type": "t_address"
      },
      {
        "astId": 3563,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "REAL_ESTATE_SERVICE",
        "offset": 0,
        "slot": "305",
        "type": "t_address"
      },
      {
        "astId": 3565,
        "contract": "contracts/v1/Token.sol:Token",
        "label": "ETF",
        "offset": 0,
        "slot": "306",
        "type": "t_address"
      },
      {
        "astId": 3567,
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
      "t_mapping(t_address,t_struct(ListingStatusModel)3551_storage)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => struct Token.ListingStatusModel)",
        "numberOfBytes": "32",
        "value": "t_struct(ListingStatusModel)3551_storage"
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
      "t_struct(ListingStatusModel)3551_storage": {
        "encoding": "inplace",
        "label": "struct Token.ListingStatusModel",
        "members": [
          {
            "astId": 3548,
            "contract": "contracts/v1/Token.sol:Token",
            "label": "_isCreated",
            "offset": 0,
            "slot": "0",
            "type": "t_bool"
          },
          {
            "astId": 3550,
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