require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
    sources: './src/contracts'
  },
  networks: {
    hardhat: {
      chainId: 1337 // To be able to work with metamask
    },
    rinkeby: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.ALCHEMY_RINKEBY_ACCOUNT_KEY]
    }
  }
};
