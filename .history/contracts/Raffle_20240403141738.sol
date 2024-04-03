// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
import {VRFCoordinatorV2Interface} from "@chainlink/contracts/src/v0.8/vrf/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/automation/interfaces/KeeperCompatibleInterface.sol";

error Raffle__Not_Enough_Eth();
error Raffle__Transfer_Failed();
error Raffle__Not_Open();

contract Raffle is VRFConsumerBaseV2, KeeperCompatibleInterface {
    address private s_recent_winner;
    enum RaffleState {
        Open,
        Calculating
    }

    uint256 private immutable i_enteranceFee;
    address payable[] private s_players;
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    bytes32 private immutable i_gaslane;
    uint64 private immutable i_subscriptionId;
    uint16 private constant REQUEST_CONFIRMATION = 3;
    uint32 private immutable i_callbackGasLimit;
    uint32 private constant NUM_WORD = 1;
    uint private immutable i_interval;

    event RaffleEnter(address indexed player);
    event RequestedRaffleWinner(uint256 indexed requestId);
    event WinnerPicked(address indexed winner);

    RaffleState private s_raffle_state;
    uint256 private s_lastTime;
    constructor(
        address vrfCoordinatorV2,
        uint256 enteranceFee,
        bytes32 gaslane,
        uint64 subscriptionId,
        uint32 callbackGasLimit,
        uint256 interval
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_enteranceFee = enteranceFee;
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_gaslane = gaslane;
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = callbackGasLimit;
        s_raffle_state = RaffleState.Open;
        s_lastTime = block.timestamp;
        i_interval = interval;
    }

    function enterRaffle() public payable {
        if (msg.value < i_enteranceFee) {
            revert Raffle__Not_Enough_Eth();
        }

        if (s_raffle_state != RaffleState.Open) {
            revert Raffle__Not_Open();
        }

        s_players.push(payable(msg.sender));
        emit RaffleEnter(msg.sender);
    }

    function requestRandomWinner() external {
        s_raffle_state = RaffleState.Calculating;
        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gaslane,
            i_subscriptionId,
            REQUEST_CONFIRMATION,
            i_callbackGasLimit,
            NUM_WORD
        );

        emit RequestedRaffleWinner(requestId);
    }

    function checkUpkeep(bytes calldata) external override {
        bool isOpen = (RaffleState.Open == s_raffle_state);
        bool timePassed = ((block.timestamp - s_lastTime) > i_interval);
        bool hasPlayers = s_players.length > 0;
        bool hasBalance = address(this).balance > 0;
        bool upkeepNeeded = (isOpen && timePassed && hasPlayers && 
    }

    function fulfillRandomWords(
        uint256 /* requestId */,
        uint256[] memory randomWords
    ) internal override {
        uint256 indexedWinner = randomWords[0] % s_players.length;
        address payable recentWinner = s_players[indexedWinner];
        s_recent_winner = recentWinner;
        s_raffle_state = RaffleState.Open;
        s_players = new address payable[](0);

        (bool success, ) = recentWinner.call{value: address(this).balance}("");
        if (!success) {
            revert Raffle__Transfer_Failed();
        }

        emit WinnerPicked(recentWinner);
    }

    function getRecentWinner() public view returns (uint256) {}

    function getPlayers(uint256 index) public view returns (address) {
        return s_players[index];
    }

    function getEntranceFee() public view returns (uint256) {
        return i_enteranceFee;
    }
}
