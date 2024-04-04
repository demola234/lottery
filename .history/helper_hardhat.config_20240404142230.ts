import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
      blockGasLimit: 1,
      },
      sepolia:
  },
};

export default config;
