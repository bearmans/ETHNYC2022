import { HardhatUserConfig } from "hardhat/types";
import { config as dotenvConfig } from "dotenv";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
dotenvConfig();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.0",
  },
  namedAccounts: {
    deployer: 0,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},  
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY_ROPSTEN}`,
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY_RINKEBY}`,
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};

export default config;
