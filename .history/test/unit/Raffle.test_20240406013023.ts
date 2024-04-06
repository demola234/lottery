import { assert } from "chai";

const { getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper_hardhat.config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Raffle Unit test", async function () {
      let raffle, vrfCoordinatorV2Mock;

      beforeEach(async function () {
        const { deployer } = await getNamedAccounts();
        await deployments.fixture(["all"]);
        raffle = await ethers.getContractFactory("Raffle", deployer);
        vrfCoordinatorV2Mock = await ethers.getContractFactory(
          "VRFCoordinatorV2Mock",
          deployer
        );
      });

      describe("constructor", async function () {
          it("initializes the raffle correctly", async function () {
              const raffleState = await raffle.getRaffleState()
              assert.equal(raffleState.toString(), )
        })
      });
    });
