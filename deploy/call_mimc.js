var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));


var abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "in_x",
                "type": "uint256"
            },
            {
                "name": "in_k",
                "type": "uint256"
            }
        ],
        "name": "MiMCpe7",
        "outputs": [
            {
                "name": "out_x",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
];


var MyContract = new web3.eth.Contract(abi, '0x0958C55DF32886A082A4D8e9c7A1BE8bfB8c33e5');
MyContract.methods.MiMCpe7(1,1).call()
.then(console.log);


