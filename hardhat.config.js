require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const amoyUrl = process.env.AMOY_URL;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: amoyUrl,
      accounts: [privateKey],
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};