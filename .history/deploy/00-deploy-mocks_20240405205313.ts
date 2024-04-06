const { developmentChains } = require("../helper_hardhat.config");
import { network } from "hardhat";


const BASE_FREE = ethers.utils.parseEther("0.25");
const GAS_PRICE_LINK = 

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
      log("Local Network Detected, Deploying mocks...  ");
      
      await deploy("VRFCoordinatorV2Mock", {
          from: deployer,
          log: true,
          args: ,

      })
  }

 
};
