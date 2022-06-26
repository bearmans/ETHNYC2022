import { HardhatUserConfig } from "hardhat/types";
import { config as dotenvConfig } from "dotenv";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-web3'
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-etherscan";
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
dotenvConfig();


//the following is based on SKALE example script
// Provide your wallet private key
let privateKey = "41fbf6e554c8909947115eef820c38b8c0089bf92380ceb6bdfa4272182132a6";

//Provide your SKALE endpoint address
let skale = "https://hackathon.skalenodes.com/v1/downright-royal-saiph";

  const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
      version: '0.8.1',
      settings: {
        optimizer:{
          enabled: true,
          runs: 200
        }
      }
    },
    networks: {
      skale: {
          url: skale,
          accounts: [privateKey],
      }
    }
  }
 /* defaultNetwork: "hardhat",
  networks: {
    hardhat: {},  
    ropsten: {
      url: "https://ropsten.infura.io/v3/d2560cac8f5645fba802260cf1f8c777",
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/d2560cac8f5645fba802260cf1f8c777",
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "7TNZ2KGQ6U15JX8USG8SX8G3TDR6B2NJAK",
  }
};
*/
export default config;
