const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

//   const initialSupply = hre.ethers.utils.parseEther("1000000"); // 1,000,000 tokens

  const OxTokenFactory = await hre.ethers.getContractFactory("OxToken");
  const oxToken = await OxTokenFactory.deploy();

  await oxToken.deployed();

  console.log("OxToken deployed to:", oxToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
