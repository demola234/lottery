import { network, ethers } from "hardhat";
const { developmentChains } = require("../helper_hardhat.config");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let VRFCoordinatorV2Address 

  if (developmentChains.includes(network.name)) {
   const VRFCoordinatorV2Mock = await ethers.getContract("")
  }

  const args = []
  const raffle = await deploy("Raffle", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.gasMultiplier || 1,
  });
};
  