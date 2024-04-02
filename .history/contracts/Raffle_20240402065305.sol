// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

// Enter the Lottery
// Get Randomized


contract Raffle {

    uint256 private immnutable i_enteranceFee; 

    constructor(uint256 enteranceFee) {
        i_enteranceFee = enteranceFee;
    }

    function enterRaffle() public {
        
    }

    function getEntranceFee() public view returns (uint256) {
        return i_enteranceFee
    }
}