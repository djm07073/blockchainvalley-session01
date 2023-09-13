import { expect } from "chai";
import { HelloHardhat } from "./../typechain-types/contracts/HelloHardhat.sol/HelloHardhat";
import { ethers } from "hardhat";
import { HelloHardhat__factory } from "../typechain-types";
describe("Test Hello Hardhat", function () {
  let helloHardhat: HelloHardhat;
  before("Deploy HelloHardhat", async function () {
    const helloHardhat_factory: HelloHardhat__factory =
      await ethers.getContractFactory("HelloHardhat");
    helloHardhat = await helloHardhat_factory.deploy(
      "Hello Hardhat",
      "BV",
      ethers.utils.parseEther("10000")
    );
  });

  it("Other mint HelloHardhat", async function () {
    const singers = await ethers.getSigners();
    expect(await helloHardhat.balanceOf(singers[0].address)).to.equal(
      ethers.utils.parseEther("10000")
    );
    expect(
      helloHardhat
        .connect(singers[1])
        .mint(singers[1].address, ethers.utils.parseEther("100"))
    ).to.be.revertedWith("only owner");
  });
});
