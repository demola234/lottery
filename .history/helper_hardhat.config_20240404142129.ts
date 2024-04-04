import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.24",
  networks: {chai: 31337,},
};

export default config;
