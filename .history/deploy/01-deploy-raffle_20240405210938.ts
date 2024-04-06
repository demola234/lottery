import { ethers, network } from "hardhat";
const { developmentChains, networkConfig } = require("../helper_hardhat.config");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let VRFCoordinatorV2Address 

  if (developmentChains.includes(network.name)) {
    const VRFCoordinatorV2Mock = await ethers.getContractFactory("VRFCoordinatorV2Mock")
    VRFCoordinatorV2Address = VRFCoordinatorV2Address.address
  } else {
    VRFCoordinatorV2Address = networkConfig[chainId]["VRFCoordinatorV2"]
  }


    const enteranceFee = networkConfig
  const args = []
  const raffle = await deploy("Raffle", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.gasMultiplier || 1,
  });
};
  