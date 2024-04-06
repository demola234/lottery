const { ethers } = require("hardhat");
const networkConfig = {
  11155111: {
    name: "sepolia",
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    enteranceFee: ethers.parseEther("0.01"),
    gaslane:
      "0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314",
  },
  31337: {
    name: "hardhat",
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
      enteranceFee: ethers.parseEther("0.01"),
    gaslane: "0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314",
  },
};

const developmemntChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmemntChains,
};
