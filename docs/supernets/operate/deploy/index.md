---
id: supernets-deploy-index
title: Get Started
sidebar_label: Get Started
description: "Learn how to deploy a local test Supernet."
keywords:
  - docs
  - polygon
  - edge
  - supernets
  - network
  - modular
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
<script src="./dataline.js" type="module"></script>

This serves as an index for the Supernet deployment guides. 
The guides explain the end-to-end process for setting up and deploying a local Supernet.

:::warning Breaking changes
Supernets are rapidly evolving towards their production-ready state, and, as a result, instructions and concepts in these documents are subject to change.

Test releases include breaking changes and are not backward compatibility. Use the current test releases for testing and familiarization only.

It is highly recommended that reach out to the Supernets team for support.
:::

:::caution No more non-bridge mode deployment

The latest v0.9 test release of Supernets no longer makes a distinction between "bridge mode" and "non-bridge mode". The bridge is now included by default and must be used when running Supernets.

The latest release aligns with the original vision of creating "Super networks" that achieves network scalability and sovereignty with an associated rootchain.

If you require a standalone Supernet instance, custom configuration is necessary.

:::

:::caution Not backwards compatible with v0.8

Supernets v0.9 is not backward compatible at this time. You must either start a new blockchain from scratch or wait for future migration scripts to support migration from previous versions.

:::

## Prerequisites

Before diving into any of the tutorials, make sure your environment meets the necessary prerequisites. They can be found **[<ins>here</ins>](/docs/supernets/operate/system.md)**.

:::caution Don't use the develop branch for deployments

Please ensure that you are not running on the `develop` branch, which is the active development branch and include changes that are still being tested and not compatible with the current process.

Instead, use the [<ins>latest release</ins>](/docs/supernets/operate/install.md) for deployments.

:::

:::caution Key management and secure values
When passing values, it is important to keep sensitive values like private keys and API keys secure.

<b>The sample commands provided in this guide use sample private keys for demonstration purposes only, in order to show the format and expected value of the parameter. It is important to note that hardcoding or directly passing private keys should never be done in a development or production environment.</b>

<details>
<summary>Here are some options for securely storing and retrieving private keys ↓</summary>

- **<ins>Environment Variables</ins>:** You can store the private key as an environment variable and access it in your code. For example, in Linux, you can set an environment variable like this: `export PRIVATE_KEY="my_private_key"`. Then, in your code, you can retrieve the value of the environment variable using `os.Getenv("PRIVATE_KEY")`.

- **<ins>Configuration Files</ins>:** You can store the private key in a configuration file and read it in your session. Be sure to keep the configuration file in a secure location and restrict access to it.

- **<ins>Vaults and Key Management Systems</ins>:** If you are working with sensitive data, you might consider using a vault or key management system like a keystore to store your private keys. These systems provide additional layers of security and can help ensure that your private keys are kept safe.

</details>

Regardless of how a private key is stored and retrieved, it's important to keep it secure and not expose it unnecessarily.

:::

## What you'll learn

In this tutorial, you will learn how to set up and initialize a Supernet with multiple nodes. You will learn the complete end-to-end genesis workflow of building a Supernet, including:

- Generating private keys for PolyBFT nodes.
- Deploying and initializing rootchain contracts.
- Configuring the rootchain by allowlisting and registering validators, performing initial staking, and finalizing the validator set.
- Generating the genesis file and chain configuration.
- Funding validators on the rootchain.
- Running a (Supernet) cluster consisting of multiple PolyBFT nodes.

By the end of this tutorial, you will have a fully functional Supernet test network that can be used to process transactions with high throughput and low latency.

## What you'll do

This tutorial will cover the following steps. If you are deploying a local Supernet for the first time, please navigate each section in order. 

1. [Spawn a new Supernet chain](/docs/supernets/operate/deploy/local-supernet.md)
2. [Configure the new Supernet chain](/docs/supernets/operate/deploy/genesis.md)
3. [Configure the rootchain](/docs/supernets/operate/deploy/rootchain-config.md)
4. [Allowlist addresses](/docs/supernets/operate/deploy/access-control/allowlist.md)
5. [Stake on the rootchain](/docs/supernets/operate/deploy/staking/stake.md)
6. [Start the new Supernet chain](/docs/supernets/operate/deploy/start-chain.md)

<details>
<summary>Fast-track guide ↓</summary>

**Here's the fast-track guide if you're looking for a quick guide on the essential commands needed to set up a local Supernet.**

1. Init secrets:

   ```bash
   ./polygon-edge polybft-secrets --data-dir test-chain- --num 4
   ```

2. Create chain configuration:

   Single host:

   ```bash
   ./polygon-edge genesis --block-gas-limit 10000000 --epoch-size 10 [--validators-path ./] [--validators-prefix test-chain-] [--consensus polybft] [--reward-wallet address:amount]

   Multi-host:

   ```bash
   ./polygon-edge genesis --block-gas-limit 10000000 --epoch-size 10 --validators /ip4/127.0.0.1/tcp/30301/p2p/16Uiu2HAmV5hqAp77untfJRorxqKmyUxgaVn8YHFjBJm9gKMms3mr:0xDcBe0024206ec42b0Ef4214Ac7B71aeae1A11af0:1cf134e02c6b2afb2ceda50bf2c9a01da367ac48f7783ee6c55444e1cab418ec0f52837b90a4d8cf944814073fc6f2bd96f35366a3846a8393e3cb0b19197cde23e2b40c6401fa27ff7d0c36779d9d097d1393cab6fc1d332f92fb3df850b78703b2989d567d1344e219f0667a1863f52f7663092276770cf513f9704b5351c4:11b18bde524f4b02258a8d196b687f8d8e9490d536718666dc7babca14eccb631c238fb79aa2b44a5a4dceccad2dd797f537008dda185d952226a814c1acf7c2]
   ```

3. Deploy and initialize rootchain contracts:

   [FOR GETH ONLY] Start rootchain server:

   ```bash
   ./polygon-edge rootchain server
   ```

   ```bash
   ./polygon-edge rootchain deploy --deployer-key <hex_encoded_rootchain_account_private_key> [--genesis ./genesis.json] [--json-rpc http://127.0.0.1:8545] [--test]
   ```

4. Fund validators on rootchain:

   ```bash
   ./polygon-edge rootchain fund --data-dir ./test-chain-1
   ```

5. Allowlist validators on rootchain:

   ```bash
   ./polygon-edge polybft whitelist-validators --private-key <hex_encoded_rootchain_account_private_key_of_supernetManager_deployer> --addresses <addresses_of_validators> --supernet-manager <address_of_SupernetManager_contract>
   ```

6. Register validators on rootchain:

   ```bash
   ./polygon-edge polybft register-validator --data-dir ./test-chain-1 --supernet-manager <address_of_SupernetManager_contract>
   ```

7. Initial staking on rootchain:

   ```bash
   ./polygon-edge polybft stake --data-dir ./test-chain-1 --chain-id <id_of_child_chain_from_genesis> --amount <amount_of_tokens_to_stake> --stake-manager <address_of_StakeManager_contract> --native-root-token <address_of_native_root_token>
   ```

8. Finalize genesis validator set on rootchain:

   ```bash
    ./polygon-edge polybft supernet --private-key <hex_encoded_rootchain_account_private_key_of_supernetManager_deployer> \
    --genesis <path_to_genesis_file> \
    --supernet-manager <address_of_SupernetManager_contract> \
    --stake-manager <address_of_StakeManager_contract> \
    --finalize-genesis --enable-staking
   ```

9. Run (child chain) cluster:

    ```bash
    ./polygon-edge server --data-dir ./test-chain-1 --chain genesis.json --grpc-address :5001 --libp2p :30301 --jsonrpc :10001 \
    --seal --log-level DEBUG

    ./polygon-edge server --data-dir ./test-chain-2 --chain genesis.json --grpc-address :5002 --libp2p :30302 --jsonrpc :10002 \
    --seal --log-level DEBUG

    ./polygon-edge server --data-dir ./test-chain-3 --chain genesis.json --grpc-address :5003 --libp2p :30303 --jsonrpc :10003 \
    --seal --log-level DEBUG

    ./polygon-edge server --data-dir ./test-chain-4 --chain genesis.json --grpc-address :5004 --libp2p :30304 --jsonrpc :10004 \
    --seal --log-level DEBUG
    ```

    Starting node in relayer mode:

    ```bash
    ./polygon-edge server --data-dir ./test-chain-1 --chain genesis.json --grpc-address :5001 --libp2p :30301 --jsonrpc :10001 \
    --seal --log-level DEBUG --relayer
    ```

</details>
