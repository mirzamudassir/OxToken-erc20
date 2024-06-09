const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const initialSupply = hre.ethers.utils.parseEther("10000000"); // 10,000,000 tokens
  const metadataURI = "https://amethyst-neat-chimpanzee-299.mypinata.cloud/ipfs/QmSmnJvdF8SG7LLXd7sudCb5GhwozR6x275FbQvn5MULxT";

  const OxTokenFactory = await hre.ethers.getContractFactory("OxCoin");
  const oxToken = await OxTokenFactory.deploy(initialSupply);

  await oxToken.deployed();

  console.log("OxToken deployed to:", oxToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
