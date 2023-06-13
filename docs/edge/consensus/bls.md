---
id: bls
title: BLS
description: "Explanation and instructions regarding BLS mode."
keywords:
  - docs
  - polygon
  - edge
  - bls
---

## Overview

BLS also known as Boneh–Lynn–Shacham (BLS)—is a cryptographic signature scheme which allows a user to verify that a signer is authentic. It is a signature scheme that can aggregate multiple signatures. In Polygon Edge, BLS is used by default in order to provide better security in the IBFT consensus mode. BLS can aggregate signatures into a single byte array and reduce the block header size. Each chain can choose whether to use BLS or not. The ECDSA key is used regardless of whether the BLS mode is enabled or not.

## Video presentation

[![bls - video](https://img.youtube.com/vi/HbUmZpALlqo/0.jpg)](https://www.youtube.com/watch?v=HbUmZpALlqo)

## How to setup a new chain using BLS

Refer to the [Local Setup](/docs/edge/get-started/set-up-ibft-locally) / [Cloud Setup](/docs/edge/get-started/set-up-ibft-on-the-cloud) sections for detailed setup instructions.

## How to migrate from an existing ECDSA PoA chain to BLS PoA chain

This section describes how to use the BLS mode in an existing PoA chain.
the following steps are required in order to enable BLS in a PoA chain.

1. Stop all nodes
2. Generate the BLS keys for validators
3. Add a fork setting into genesis.json
4. Restart all nodes

### 1. Stop all nodes

Terminate all processes of the validators by pressing Ctrl + c (Control + c). Please remember the latest block height (the highest sequence number in block committed log).

### 2. Generate the BLS key

`secrets init` with the `--bls` generates a BLS key. In order to keep the existing ECDSA and Network key and add a new BLS key, `--ecdsa` and `--network` need to be disabled.

```bash
polygon-edge secrets init --bls --ecdsa=false --network=false

[SECRETS INIT]
Public key (address) = 0x...
BLS Public key       = 0x...
Node ID              = 16...
```

### 3. Add fork setting

`ibft switch` command adds a fork setting, which enables BLS in the existing chain, into `genesis.json`.

For PoA networks, validators need to be given in the command. As with the way of `genesis` command, `--ibft-validators-prefix-path` or `--ibft-validator` flags can be used to specify the validator.

Specify the height from which the chain starts using BLS with the `--from` flag.

```bash
polygon-edge ibft switch --chain ./genesis.json --type PoA --ibft-validator-type bls --ibft-validators-prefix-path test-chain- --from 100
```

### 4. Restart all nodes

Restart all nodes by `server` command. After the block at the `from` specified in the previous step is created, the chain enables the BLS and shows logs as below:

```bash
2022-09-02T11:45:24.535+0300 [INFO]  polygon.ibft: IBFT validation type switched: old=ecdsa new=bls
```

Also the logs shows which verification mode is used to generate each block after the block is created.

```
2022-09-02T11:45:28.728+0300 [INFO]  polygon.ibft: block committed: number=101 hash=0x5f33aa8cea4e849807ca5e350cb79f603a0d69a39f792e782f48d3ea57ac46ca validation_type=bls validators=3 committed=3
```

## How to migrate from an existing ECDSA PoS chain to a BLS PoS chain

This section describes how to use the BLS mode in an existing PoS chain.
The following steps are required in order to enable BLS in the PoS chain.

1. Stop all nodes
2. Generate the BLS keys for validators
3. Add a fork setting into genesis.json
4. Call the staking contract to register BLS Public Key
5. Restart all nodes

### 1. Stop all nodes

Terminate all processes of the validators by pressing Ctrl + c (Control + c). Please remember the latest block height (the highest sequence number in block committed log).

### 2. Generate the BLS key

`secrets init` with the `--bls` flag generates the BLS key. In order to keep existing ECDSA and Network key and add a new BLS key, `--ecdsa` and `--network` need to be disabled.

```bash
polygon-edge secrets init --bls --ecdsa=false --network=false

[SECRETS INIT]
Public key (address) = 0x...
BLS Public key       = 0x...
Node ID              = 16...
```

### 3. Add fork setting

`ibft switch` command adds a fork setting, which enables BLS from the middle of the chain, into `genesis.json`.

Specify the height from which the chain starts using the BLS mode with the `from` flag, and the height at which the contract is updated with the `development` flag.

```bash
polygon-edge ibft switch --chain ./genesis.json --type PoS --ibft-validator-type bls --deployment 50 --from 200
```

### 4. Register BLS Public Key in staking contract

After the fork is added and validators are restarted, each validator needs to call `registerBLSPublicKey` in the staking contract to register the BLS Public Key. This must be done after the height specified in `--deployment` before the height specified in `--from`.

The script to register BLS Public Key is defined in [Staking Smart Contract repo](https://github.com/0xPolygon/staking-contracts). 

Set `BLS_PUBLIC_KEY` to be registered into `.env` file. Refer [pos-stake-unstake](/docs/edge/consensus/pos-stake-unstake#setting-up-the-provided-helper-scripts) for more details about other parameters.

```env
JSONRPC_URL=http://localhost:10002
STAKING_CONTRACT_ADDRESS=0x0000000000000000000000000000000000001001
PRIVATE_KEYS=0x...
BLS_PUBLIC_KEY=0x...
```

The following command registers the BLS Public Key given in `.env` to the contract.

```bash
npm run register-blskey
```

:::warning Validators need to register the BLS Public Key manually
In BLS mode, validators must have their own address and the BLS public key. The consensus layer ignores the validators that have not registered BLS public key in the contract when the consensus fetches validator info from the contract.
:::

### 5. Restart all nodes

Restart all nodes by `server` command. The chain enables the BLS after the block at the `from` specified in the previous step is created.
