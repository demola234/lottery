// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

// Enter the Lottery
// Get Randomized

error Raffle__Not_Enough_Eth();

contract Raffle {

    uint256 private immutable i_enteranceFee; 
    address payable[] private s_players;

    constructor(uint256 enteranceFee) {
        i_enteranceFee = enteranceFee;
    }

    function enterRaffle() public {
        if(msg.value < i_enteranceFee) {
            revert Raffle__Not_Enough_Eth();
        }
    }

    function getEntranceFee() public view returns (uint256) {
        return i_enteranceFee;
    }
}