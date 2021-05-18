const fs = require("fs");
const mimcjs = require("../circomlib/src/mimc7.js");
const mimcMerkle = require('./MiMCMerkle.js')
const bigInt = require("snarkjs").bigInt;


// console.log("IV: "+mimcjs.getIV().toString());

// console.log(mimcjs.getConstants("mimc", 91))

// 与Solidity中计算方式不一样
// var a=mimcjs.multiHash([1,1])
// console.info(a.toString())

// 使用这种方式
// var b= mimcjs.hash(1,1)
// console.info(b)

// test

// 11730251359286723731141466095709901450170369094578288842486979042586033922425,
// 12240136457100152345096610842396488822128317434453048685489891202497829360467,
// 20808841395409656332564552932284796001294721646723037196107424963391316010609,
// 10513607674170245577899825752483841247286555366379776940083295721103562343571

// var c = mimcjs.hash("11730251359286723731141466095709901450170369094578288842486979042586033922425","12240136457100152345096610842396488822128317434453048685489891202497829360467")
// var d = mimcjs.hash("20808841395409656332564552932284796001294721646723037196107424963391316010609","10513607674170245577899825752483841247286555366379776940083295721103562343571")

// console.info(c.toString())
// console.info(d.toString())

// test  0,0

var e = mimcjs.hash(0,0)
console.info(e)