import { assert, expect } from "chai";

const { getNamedAccounts, deployments, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../../helper_hardhat.config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Raffle Unit test", async function () {
      let raffle, vrfCoordinatorV2Mock;
      const chainId = network.config.chainId;

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
          const raffleState = await raffle.getRaffleState();
          const interval = await raffle.getInterval();
          assert.equal(raffleState.toString(), "0");
          assert.equal(interval.toString(), networkConfig[chainId]["interval"]);
        });
      });

      describe("enterRaffle", async function () {
        it("reverts when you don't pay enough", async function () {
          await expect(raffle.enterRaffle()).to.be.rejectedWith(
            "Not enough ETH to enter the raffle"
          );
        });
      });
    });
