const { ethers } = require("hardhat");

const networkConfigs = {
  default: {
    name: "hardhat",
    keepersUpdateInterval: "30",
  },
  31337: {
    name: "localhost",
    subscriptionId: "588",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
    keepersUpdateInterval: "30",
    raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
    callbackGasLimit: "500000", // 500,000 gas
  },
  11155111: {
    name: "sepolia",
    subscriptionId: "6926",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // 30 gwei
    keepersUpdateInterval: "30",
    raffleEntranceFee: ethers.utils.parseEther("0.01"), // 0.01 ETH
    callbackGasLimit: "500000", // 500,000 gas
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
  },
  1: {
    name: "mainnet",
    keepersUpdateInterval: "30",
  },
};

const developmentChain = ["hardhat", "localhost"];

const VERIFICATION_BLOCK_CONFIRMATION = 6;
const frontEndContractsFile =
  "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json";
const frontEndAbiFile =
  "../nextjs-smartcontract-lottery-fcc/constants/abi.json";

module.exports = {
  networkConfigs,
  developmentChain,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  frontEndContractsFile,
  frontEndAbiFile,
};
