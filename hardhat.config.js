require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * อย่าลืมเปลี่ยนข้อมูลเป็นของตัวเอง
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    "optimism": {
       url: "https://opt-mainnet.g.alchemy.com/v2/gOPycFs-HXPAGrHrT_KN7XtrTWJ_XDyf",
       accounts: [ "bb4e70724575dd3afafbcf882579db0d7067fa135d18939e4531d7933ecabfd6" ]
    }
  }
};