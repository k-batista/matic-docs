---
id: troubleshooting
title: Troubleshooting
description: "Troubleshooting section for Polygon Edge"
keywords:
  - docs
  - polygon
  - edge
  - troubleshooting
  
---

# Troubleshooting

## `method=eth_call err="invalid signature"` error

When you are using a wallet to make a transaction with Polygon Edge, please make sure that in your wallet's local network setup:

1. The `chainID` is the right one. The default `chainID` for Edge is `100`, but it can be customized by using the genesis flag `--chain-id`.

````bash
genesis [--chain-id CHAIN_ID]
```` 
2. Make sure that, on the “RPC URL”, field you use the JSON RPC port of the node you are connecting to.


## How to get a WebSocket URL

By default, when you run the Polygon Edge, it exposes a WebSocket endpoint based on the chain location.
The URL scheme `wss://` is used for HTTPS links, and `ws://` for HTTP.

Localhost WebSocket URL:
````bash
ws://<JSON-RPC URL>:<PORT>/ws
````
Please note that the port number depends on the chosen JSON-RPC port for the node.

Edgenet WebSocket URL:
````bash
wss://rpc-edgenet.polygon.technology/ws
````

## `insufficient funds` error when trying to deploy a contract

If you get this error, please make sure you have enough funds on the desired address, and the address used is the correct one.<br/>
To set the premined balance, you can use the genesis flag `genesis [--premine ADDRESS:VALUE]` while generating the genesis file.
Example of using this flag: 
````bash
genesis --premine 0x3956E90e632AEbBF34DEB49b71c28A83Bc029862:1000000000000000000000
````
This premines 1000000000000000000000 WEI to 0x3956E90e632AEbBF34DEB49b71c28A83Bc029862.
 
 
## ERC20 tokens not released while using Chainbridge

If you try to transfer ERC20 tokens between Polygon PoS and a local Edge network, and your ERC20 tokens are deposited, also proposal is executed at relayer, but the tokens are not released in your Edge network, please make sure the ERC20 Handler in Polygon Edge chain has enough tokens to release. <br/>
The Handler contract in the destination chain must have enough tokens to release for lock-release mode. If you don't have any ERC20 tokens in the ERC20 Handler of your local Edge network, please mint new tokens and transfer them to the ERC20 Handler.

## `Incorrect fee supplied` error when using Chainbridge

You might get this error when trying to transfer ERC20 tokens between Mumbai Polygon PoS chain and a local Polygon Edge setup. This error appears when you set the fee on deploying using the `--fee` flag, but you don't set the same value in the deposit transaction. 
You can use the below command to change the fee:
```` bash
 $ cb-sol-cli admin set-fee --bridge <BRIDGE_ADDRESS> --fee 0 --url <JSON_RPC_URL> --privateKey <PRIVATE_KEY>
 ````
You can find more information about this flag [here](https://github.com/ChainSafe/chainbridge-deploy/blob/main/cb-sol-cli/docs/deploy.md).





