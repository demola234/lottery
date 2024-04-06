import { assert, expect } from "chai";

const { getNamedAccounts, deployments, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../../helper_hardhat.config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Raffle Unit test", async function () {
      let raffle, vrfCoordinatorV2Mock, raffleEntranceFee, deployer;
      const chainId = network.config.chainId;

      beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        raffle = await ethers.getContractFactory("Raffle", deployer);
        vrfCoordinatorV2Mock = await ethers.getContractFactory(
          "VRFCoordinatorV2Mock",
          deployer
        );
        raffleEntranceFee = await raffle.getEntranceFee();
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

          it("records players when they enter", async function () {
            await raffle.enterRaffle({
              value: raffleEntranceFee,
            });
            const playerFromContract = await raffle.players(0);
            assert.equal(playerFromContract, deployer);
          });
            it("emit event on enter", async function () {
                await expect(raffle.enterRaffle({
                    value: raffleEntranceFee,
                })
            ).to.be("EnterRaffle");
        });
      });
    });
