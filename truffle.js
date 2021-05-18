const HDWalletProvider = require('truffle-hdwallet-provider');

const setting=require('./scripts/setting.js');
const mnemonic = setting.getMnemonic();

module.exports = {
    networks: {
        
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/14fc7ba5f9004fcdbccb944b09d829e1`),
            network_id: 3,       // Ropsten's id
            gas: 5500000,        // Ropsten has a lower block limit than mainnet
        },
    
    }
};
