const { getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper_hardhat.config")


!developmentChains.includes(network.name) 
    ? describe.skip
    : describe("Raffle ")
 