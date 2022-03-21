import { ethers } from "hardhat";
import { expect, use } from "chai";
import { solidity, loadFixture } from "ethereum-waffle";

use(solidity);

import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("MyContract", () => {
  let contract: Contract;

  let owner: SignerWithAddress;
  let withdrawer: SignerWithAddress;
  let watcher: SignerWithAddress;
  let anon: SignerWithAddress;
  
  const fixture = async () => {
    [owner, withdrawer, watcher, anon] = await ethers.getSigners();

    const factory = await ethers.getContractFactory("MyContract");
    contract = await factory.deploy(5);
    await contract.deployed();

    return { contract };
  };

  beforeEach(async () => {
    ({ contract } = await loadFixture(fixture));
  });

  describe("constructor", () => {
    it("should create the contract properly", async () => {
      expect(contract.address).to.properAddress;
    });
  });
});