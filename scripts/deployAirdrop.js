const { ethers } = require("hardhat");
require('dotenv').config()
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("PepeBornNFT");
    const token = await Token.deploy();
    await token.deployed();

    await hre.run("verify:verify", {
       address: token.address,
    });
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    