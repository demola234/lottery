import { network } from "hardhat";
const { developmentChains } = require("../helper_hardhat.config");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    log("Local Network Detected, Deploying mocks...  ");
  }

  
  const raffle = await deploy("Raffle", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.gasMultiplier || 1,
  });
};
  