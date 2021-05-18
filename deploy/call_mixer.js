
const HDWalletProvider = require('truffle-hdwallet-provider');
var setting = require('../scripts/setting.js');

var contract = require("truffle-contract");
var MixerData = require("../build/contracts/Mixer.json");
var Mixer = contract(MixerData);

var web3 = Mixer.web3;

const BN = require('bn.js');



var mnemonic = setting.getMnemonic();

// provider (mainnet,ropsten)
var provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/14fc7ba5f9004fcdbccb944b09d829e1");
// var provider = new HDWalletProvider(mnemonic, "http://127.0.0.1:8545");
Mixer.setProvider(provider);


var MixerAddress = "0x46a7f914785357b9054fdB670845DC6c0c968167";
// var MixerAddress = "0xd88926cd39069a96e355d8af3448c6f56a260afe";
var MixerInstance;

var FromAddress = "0x9C8341a08Ad2162caBD6146a42D38C22E6159b60";
var Amount = web3.utils.toWei('0.01', 'ether');

async function getInstance() {
    MixerInstance = await
        Mixer.at(MixerAddress);
}


// deposit
// 0,1,2,3
// 11730251359286723731141466095709901450170369094578288842486979042586033922425,
// 12240136457100152345096610842396488822128317434453048685489891202497829360467,
// 20808841395409656332564552932284796001294721646723037196107424963391316010609,
// 10513607674170245577899825752483841247286555366379776940083295721103562343571

async function deposit(cmt){
	await getInstance();

	await MixerInstance.deposit(cmt,{
		from: FromAddress,
		value: Amount,
		gas: 3000000,
		gasPrice: "20000000000" 
	});

}

// deposit("11730251359286723731141466095709901450170369094578288842486979042586033922425");

// getMerkelProof
async function getMerkelProof(leaf_index) {
    await getInstance();
    let proof = await MixerInstance.getMerkelProof.call(leaf_index);
    // console.info(proof);

    for (let i=0 ;i< proof[0].length;i++){
    	let t =  new BN(proof[0][i]);
    	console.info(t.toString()) 
    }

    for (let i=0 ;i< proof[1].length;i++){
    	let t =  new BN(proof[1][i]);
    	console.info(t.toString()) 
    }
}

// getMerkelProof(0);

// root
// 8749535955750417528732286737236417644637614278119434265686374177373578555555
async function getRoot() {
	await getInstance();

	let root =  new BN(await MixerInstance.getRoot.call());

    console.info(root.toString());
}

// getRoot()

// withdraw

async function withdraw(){
    await getInstance();

    await MixerInstance.withdraw(
        [
            "0x2e282056742fb4fe24b65531a7e17e66fd2416d293d13a0b4ecc3a4b13be36c5",
            "0x22b245ca3c770f9ce2e946ccdd4052b9e13f5292009ea1f212a12b260043aa90"
        ],
        [
            [
                "0x2e2dbd1677ff7712cbc551c63e205d7e5469d52d07f2e4c700fac535378e6d3c", 
                "0x05f4c0367542bb1281556ff8e773993ed56352dd8cbaa136662d42f959e0ae91"
            ],
            [
                "0x2088f897fa5e307f41864ce196e3cb94ed6f574fe594af0b7f3633b695cfb38e", 
                "0x21f183a915e59a74744a48883c3d03350115897dc3c621c1ab491706350647e1"
            ]
        ],
        [
            "0x2166c2e9c9b62f2188a07ea30a9234e6509eaed81a621a93ca7fe000c32fad76",
            "0x14eee56356071d21438029846397aefc94fc86d4f3fc521dfb2fbae034c9e049"
        ],
        [
            "0x2ec2d13597576e6e9a28d337af768c614a0b892a38aece30dd4df4b1138edf35",
            "0x11ef8fc9e658c40fa4a8ae1d40e81084befc8a507f560bb0f2c33bb14cca567d"
        ],
        {
            from: FromAddress,
            gas: 3000000,
            gasPrice: "20000000000" 
        }
    );

}


withdraw()



