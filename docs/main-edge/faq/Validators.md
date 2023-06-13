---
id: validators
title: Validators FAQ
description: "FAQ for Polygon Edge validators"
keywords:
  - docs
  - polygon
  - edge
  - FAQ
  - validators
  
---

## How to add/remove a validator?

### PoA
Adding/removing validators is done by voting. You can find [here](/docs/edge/consensus/poa) a full guide about this.

### PoS
You can find a guide on how to stake funds [here](/docs/edge/consensus/pos-stake-unstake), so that a node can become a validator, and how to unstake (remove the validator).

Please note that:
- You can use the genesis flag `--max-validator-count` to set a maximum number of stakers that can join the validator set.
- You can use the genesis flag `--min-validator-count ` to set the minimum number of stakers needed to join the validator set(`1` by default).
- When the maximum validator number is met, you cannot add another validator until you remove an existing one from the set (doesn't matter if the staked amount of the new one is higher). If you remove a validator, the number of validators remaining cannot be lower than `--min-validator-count`.
- There is a default threshold of `1`  unit of native network(gas) currency for becoming a validator.
 


## How much disk space is recommended for a validator?

We recommend starting with 100G as a conservatively estimated runway, and making sure that it is possible to scale the disk afterwards.


## Is there a limit to the number of validators?

If we are talking about technical limitations, Polygon Edge doesn't explicitly have the cap on the number of nodes you can have in a network. You can set connection caps (inbound / outbound connection counts) on a per-node basis.

If we are talking about practical limitations, you're going to see a more degraded performance with a 100 node cluster than with a 10 node cluster. By increasing the number of nodes in your cluster, you increase the communication complexity and just the networking overhead in general. It all depends on what kind of network you are running, and what kind of network topology you have.

## How to switch from PoA to PoS?

PoA is the default consensus mechanism. For a new cluster, to switch to PoS, you will need to add the `--pos` flag when generating the genesis file. If you have a running cluster, you can find [here](/docs/edge/consensus/migration-to-pos) how to make the switch. All the info you need about our consensus mechanisms and setup can be found on our [consensus section](/docs/edge/consensus/poa).

## How do I update my nodes when there's a breaking change?

You can find a detailed guide on how to do this procedure [here](/docs/edge/validator-hosting#update).

## Is the minimum staking amount configurable for PoS Edge? 

The minimum staking amount by default is `1 ETH`, and it’s not configurable. 

## Why do the JSON RPC commands `eth_getBlockByNumber` and `eth_getBlockByHash` not return the miner's address?

The consensus used currently in Polygon Edge is IBFT 2.0, which, in turn, builds upon the voting mechanism explained in Clique PoA: [ethereum/EIPs#225](https://github.com/ethereum/EIPs/issues/225).

Looking at the EIP-225 (Clique PoA), this is the relevant part that explains what the `miner` (aka `beneficiary`) is used for:

<blockquote>
We repurpose the ethash header fields as follows:
<ul>
<li><b>beneficiary / miner: </b> Address to propose modifying the list of authorized signers with.</li>
<ul>
<li>Should be filled with zeroes normally, modified only while voting.</li>
<li>Arbitrary values are permitted nonetheless (even meaningless ones such as voting out non signers) to avoid extra complexity in implementations around voting mechanics.</li>
<li> Must be filled with zeroes on checkpoint (i.e. epoch transition) blocks. </li>
</ul>

</ul>

</blockquote>

Thus, the `miner` field is used for proposing a vote for a certain address, not to show the proposer of the block.

The information about the proposer of the block can be found by recovering the pubkey from the Seal field of the RLP encoded Istanbul extra data field in the block headers.

## Which parts and values of Genesis can safely be modified?

:::caution

Please make sure to create a manual copy of the existing genesis.json file before attempting to edit it.
Also, the entire chain has to be stopped before editing the genesis.json file. Once the genesis file is modified, the newer version of it has to distributed across all non-validator and valdiator nodes.

:::

**Only the bootnodes section of the genesis file can safely be modified**, where you can add or remove bootnodes from the list.