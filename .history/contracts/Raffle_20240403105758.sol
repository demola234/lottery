// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

error Raffle__Not_Enough_Eth();

contract Raffle {

    uint256 private immutable i_enteranceFee; 
    address payable[] private s_players;

    event RaffleEnter(address indexed player);    

    constructor(uint256 enteranceFee) {
        i_enteranceFee = enteranceFee;
    }

    function enterRaffle() public payable {
        if(msg.value < i_enteranceFee) {
            revert Raffle__Not_Enough_Eth();
        }

        s_players.push(payable(msg.sender));
        emit RaffleEnter(msg.sender);

    }

    function requestRandomWinner() external {
        // Request Random 
        // 2 transaction process
    }

    function getPlayers(uint256 index) public view returns (address) {
        return s_players[index];
    }

    function getEntranceFee() public view returns (uint256) {
        return i_enteranceFee;
    }
}