import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
const PK = process.env.PK!;
const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [PK],
    },
  },
};

export default config;
