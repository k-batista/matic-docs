---
id: permission-contract-deployment
title: Permission smart contract deployment
description: How to add permission smart contract deployment.
keywords:
  - docs
  - polygon
  - edge
  - smart contract
  - permission
  - deployment
---

## Overview

This guide goes into detail on how to whitelist addresses that can deploy smart contracts.
Sometimes network operators wish to prevent users from deploying smart contracts that are unrelated to the network's purpose. Network operators can:

1. Whitelist addresses for Smart Contract deployment
2. Remove addresses from the whitelist for Smart Contract deployment

## Video presentation

[![permission contract deployment - video](https://img.youtube.com/vi/yPOkINpf7hg/0.jpg)](https://www.youtube.com/watch?v=yPOkINpf7hg)

## How to use it?


You can find all cli commands related to the deployment whitelist in the [CLI Commands](/docs/edge/get-started/cli-commands#whitelist-commands) page.

* `whitelist show`: Displays whitelist information
* `whitelist deployment --add`:  Adds a new address to the contract deployment whitelist
* `whitelist deployment --remove`:  Removes a new address from the contract deployment whitelist

#### Show all addresses in the deployment whitelist

There are 2 ways to find addresses from the deployment whitelist.
1. Looking at the `genesis.json` where whitelists are saved
2. Executing `whitelist show`, which prints information for all whitelists supported by Polygon Edge

```bash

./polygon-edge whitelist show 

[WHITELISTS]

Contract deployment whitelist : [0x5383Cb489FaCa92365Bb6f9f1FB40bD032E6365d],


```

#### Add an address to the deployment whitelist

To add a new address to the deployment whitelist execute `whitelist deployment --add [ADDRESS]` CLI command. There is no limit to the number of addresses present in the whitelist. Only addresses that exist in the contract deployment whitelist can deploy contracts. If the whitelist is empty, any address can do the deployment

```bash

./polygon-edge whitelist deployment --add 0x5383Cb489FaCa92365Bb6f9f1FB40bD032E6365d --add 0x30ea4435167Ee91f9f874b5a894F3282A956C3FF
 

[CONTRACT DEPLOYMENT WHITELIST]

Added addresses: [0x5383Cb489FaCa92365Bb6f9f1FB40bD032E6365d 0x30ea4435167Ee91f9f874b5a894F3282A956C3FF],
Contract deployment whitelist : [0x5383Cb489FaCa92365Bb6f9f1FB40bD032E6365d 0x30ea4435167Ee91f9f874b5a894F3282A956C3FF],



```

#### Remove an address from the deployment whitelist

To remove an address from the deployment whitelist execute `whitelist deployment --remove [ADDRESS]` CLI command. Only addresses that exist in the contract deployment whitelist can deploy contracts. If the whitelist is empty, any address can do the deployment

```bash

./polygon-edge whitelist deployment --remove 0x5383Cb489FaCa92365Bb6f9f1FB40bD032E6365d --remove 0x30ea4435167Ee91f9f874b5a894F3282A956C3FF
 

[CONTRACT DEPLOYMENT WHITELIST]

Removed addresses: [0x5383Cb489FaCa92365Bb6f9f1FB40bD032E6365d 0x30ea4435167Ee91f9f874b5a894F3282A956C3FF],
Contract deployment whitelist : [],



```