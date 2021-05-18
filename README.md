### 准备 

- circom 版本
	- 0.0.19
- python 版本
	- 2.7.16
- nodejs 版本
	- v10.16.0
- solidity 版本
	- 0.5.0

使用的hash函数为：mimc7

### 开发步骤

- 编写电路
	- mixer
	- get_merkle_root.circom

- 编写合约
	- mixer
	- Merkle

### 电路

#### 编译电路

编译电路，并将编译好的电路以json格式输出

```
$ circom <your_circuit_name>.circom -o circuit.json
```

#### 生成电路的输入

为电路生成public input，Private input

```
$ node generate_circuit_input.js
```

#### 计算 witness

使用编译好的电路及input生成witness

```
$ snarkjs calculatewitness -c circuit.json -i input.json
```

#### trust setup

```
$  snarkjs setup -c circuit.json --protocol groth
```

#### 生成证明

```
$ snarkjs proof -w witness.json --pk proving_key.json
```

#### 校验证明

```
$ snarkjs verify
```

#### 生成solidity verifier

```
$ snarkjs generateverifier

```

#### 生成solidity 调用参数

```
$ snarkjs generatecall
```

[文档地址](https://keen-noyce-c29dfa.netlify.com/#2)

mixer 合约： 0x46a7f914785357b9054fdB670845DC6c0c968167