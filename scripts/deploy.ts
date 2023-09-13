import { ethers } from "hardhat";
import { HelloHardhat__factory } from "../typechain-types";

async function deployHelloHardhat() {
  const helloHardhat_factory: HelloHardhat__factory =
    await ethers.getContractFactory("HelloHardhat");
  const helloHardhat = await helloHardhat_factory
    .deploy("Hello Hardhat", "BV", ethers.utils.parseEther("10000"))
    .then((tx) => tx.deployed());
  console.log("HelloHardhat deployed to:", helloHardhat.address);
}
deployHelloHardhat();
