---
id: polybft
title: PolyBFT
description: "Explanation about PolyBFT, the consensus mechanism for Polygon Edge."
keywords:
  - docs
  - polygon
  - edge
  - consensus
  - polybft
  - pos
---

:::caution

All the client-based documentation is being revamped due to the new
client updates to Polygon Edge and is subject to change. Please stay
tuned!

Please also feel free to raise an issue or pull request if you have any
queries or suggestions.

:::

## Overview

PolyBFT is the consensus mechanism of Polygon Edge. It is composed of two
core parts, a consensus engine and a consensus protocol.

<!-- TO ADD PROPER DIAGRAM -->

```plaintext
                            +----------------------------+
                            |           PolyBFT          |
                            |          Consensus         |
                            +----------------------------+
                                            |
                                            |
                            --------------------------------
                            |                              |
                            |                              |
              +--------------------------+    +--------------------------+
              |          IBFT            |    |          Core            |
              |        Consensus         |    |          Smart           |
              |         Engine           |    |         Contracts        |
              +--------------------------+    +--------------------------+
```

PolyBFT uses an adaptation of PBFT (Practical Byzantine Fault Tolerance) consensus,
known as IBFT (Istanbul Byzantine Fault Tolerance), in combination with the Tendermint-based
re-locking mechanism.

> Recall that a Byzantine Fault Tolerance network is a
> network that is resilient enough to function correctly
> even if some nodes are dishonest or malicious.
> A PBFT implementation, which IBFT is one of,
> can tolerate up to *f* faulty nodes in a
> network of 3f + 1 nodes. The network remains fault tolerant so long as two-thirds of
> nodes are honest. This is sometimes referred to as a “super-majority rules” algorithm.

Each PolyBFT node maintains a local copy of the blockchain. The PolyBFT blockchain can be modeled
as a list of blocks, like the Ethereum blockchain. The height of a block is defined as the number
of parent links that separate the block from the genesis block, with height 0. The protocol runs
sequential instances of a block finalization protocol, where the objective of the h-th instance is
to decide which Ethereum block is to be added at height `h` of the blockchain. In PolyBFT, the height
is referred to as the *sequence*.

## Consensus Engine: IBFT

Specifically, Polygon Edge uses [IBFT 2.0](https://github.com/0xPolygon/go-ibft) as a consensus
engine to seal blocks.

IBFT includes a validator pool (or set) responsible for validating candidate blocks proposed
by a randomly selected block proposer who is part of the validator pool. The proposer is responsible
for constructing a block at the block interval. The proposer mechanism is based on Tendermint, where
a proposer is chosen based a deterministic selection algorithm. The frequency in selection is also
proportional to the voting power of the validator.

 > The amount of voting power a validator has is proportional to the amount of stake that they have locked
 > up on the network. This means that validators with more stake will have more voting power and, therefore,
 > more influence over the decision-making process on the network.

Each block in IBFT requires multiple rounds of voting
by the validator to arrive at consensus, which is recorded as a collection of signatures on the block
content. A super-majority of validators must validate the block to be added to the blockchain.

:::note

The validator selection algorithm still needs to be determined. It will resemble the diagram,
where x, y, z are input parameters related to the selection, the "Round #" is the current
Round Number of the system, and "validator n" is the selected validator.

<!-- TO ADD PROPER DIAGRAM -->

```plaintext
       __________          __________          __________       __________
      |          |        |          |        |          |     |          |
      |    x     |        |    y     |        |    z     |     | Round #  |
      |__________|        |__________|        |__________|     |__________|
          |                 |                    |                 |
          |                 |                    |                 |
          |                 |                    |                 |
       _______________________________________________________________________
      |                                                                       |
      |                validator proposer selection algorithm                 |
      |_______________________________________________________________________|
                                          |
                                          |
                               _______________________
                              |                       |
                              |      validator n      |
                              |_______________________|
```

:::

### Benefits of IBFT

- **Immediate block finality**: Only one block is proposed at a given chain height. Thus, the
  single chain removes forking,
  uncle blocks, and the risk that a transaction may be “undone” once on the chain later.
- **The reduced time between blocks**: The effort needed to construct and validate blocks is
  decreased significantly and increases the chain's throughput.
- **High data integrity and fault tolerance**: IBFT uses a pool of validators to ensure the
  integrity of each proposed block. A super-majority (~66%) of these validators are required to
  sign the block before insertion to the chain, making block forgery very difficult. Also, the
  proposer of the pool rotates over time — ensuring a faulty node cannot exert long-term influence
  over the chain.
- **Operationally flexible**: The validators can be modified in time, ensuring the group contains
  only full-trusted nodes.

## Tendermint-based re-locking mechanism

It has been proved that IBFT does not guarantee Byzantine-fault-tolerant persistence nor liveness
when operating on an eventually synchronous network. As a result, PolyBFT uses a
[re-locking mechanism inspired by Tendermint](https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html).

When a validator proposes a new block, their stake is locked up for a predetermined time. This
helps to ensure that the validator cannot create conflicting transactions during this time since any such
attempts would result in losing their locked stake. After the lockup period has expired, the validator's
stake is "re-locked" for another predetermined time. This helps prevent the validator from attempting to
create additional conflicting transactions after the proposed first block. The re-locking mechanism helps
to ensure the safety and integrity of the network by aligning the incentives of validators with the network's
best interests.

### Benefits

- **Liveness**: It has been proven that IBFT does not guarantee BFT persistence nor liveness
  when operating on a synchronous network. If a validator receives enough confirmation about a block,
  it can lock the proposed block (assuming it has not locked any prior). If a change were to occur
  because of a fault in the network, it could trigger the activation of the round change protocol,
  where the protocol would expect to commit the locked block at that specific height.

- **Persistence**: If, for instance, there is a faulty network condition present where two different
  node subsets lock to two different blocks, the system enters into an infinite cycle of state transitions
  that cannot converge states and finalize the block.

## Consensus protocol: PolyBFT

The consensus protocol uses the IBFT consensus engine and proof-of-stake architecture to seal blocks,
provide specific network capabilities, and govern the network. The consensus engine works with a set of
core smart contracts that implements a staking solution and incentivization scheme which defines all the
network's proof-of-stake rules.

Polygon Edge follows [delegated proof of stake consensus](/maintain/delegate/delegate.md), where
delegators delegate their MATIC to back validators on the network.

The consensus protocol follows a set of state transitions. While things are still being finalized, the
process will typically follow the steps below.

1. A validator proposes a new block to be added to Polygon. This block contains a list of transactions
   that the validator would like to include in the next update to the blockchain's state.

2. Other validators in the active set will vote on whether to accept the proposed block. A
   certain number of validators must agree to accept the block to reach consensus. The voting weight of
   each validator influences voting. The protocol refers to block height as a *sequence*.

    The process to finalize a block in PolyBFT is known as *sealing*. The sealing of blocks is instant
    and final. All nodes in the network exchange information for a given sequence.

    When a validator proposes a new block, other validators on the network will vote on whether to
    accept the block. This process is typically repeated several times; each repetition is known as a
    *round*. During each round, a certain number of validators must agree to seal the proposed block
    for it to be added to the blockchain. If the required number of votes is not reached during a
    particular round, the voting process will continue into the next round, and thus, the protocol
    "increases the round". Another validator will attempt to seal the sequence in the new round.
    > The best case for a proposed block is that it is sealed at round 0. If blocks are repeatedly being
    > sealed at a high-order round, which usually indicates a problem with the network.

3. If the proposed block is accepted, it will be added to the blockchain, and the state of the blockchain
   will be updated to reflect the changes introduced by the transactions in the block.
   > If a malicious actor attempted to fork the network, they would need to obtain control of 2/3 of
   > the network, which PolyBFT prevents.

4. Once the state of the blockchain has been updated, the next proposer will propose a new block, and
   the process repeats.

IBFT limits network participation to around 100 validators. A variable amount of stake is used as a fixed
stake criterion to limit the system's security and can make the system economically vulnerable. The
validator set in the PolyBFT does not update on each block but is fixed during  `n` block periods known as
an `epoch`.

> The `n` block period to define one epoch is to be determined by governance. Until then, validators will
> remain the same. At the end of the epoch, a special `state transaction` to `ChildValidatorSet`
> is emitted, notifying the system about validators’ uptime during the `epoch`. It is up to the smart contract
> to reward validators by their uptime and **update the validator set** for the next `epoch`. There is a
> function `getValidatorSet` which returns the current validator set at any time.

Staking is governed by staking contracts directly on Polygon. To be clear, the staking module validates on
Polygon and does not rely on Ethereum's security, but in principle, two chains are securing the network, PoS
client and Ethereum. Transaction checkpoints still occur on Ethereum, but Ethereum does not validate staking
on Polygon.

:::note

Note that in Tendermint, an epoch is set to 1. However, PolyBFT includes the logic to set a custom
epoch time, with the intent of each epoch being one day in blocks, or around 14000 blocks.

:::

A reward calculation occurs at the end of the epoch to reward the active validators in that epoch.

:::caution Slashing

Like in other proof-of-stake systems, validators are subject to slashing for malicious activity or
poor performance. The slashing mechanics are still being determined, but PolyBFT will undoubtedly
include a mechanism to penalize bad actors. Slashing a validator typically involves a penalty, such
as losing some or all of their stake on the network.

Examples of malicious activities are double-signing and equivocation.

Double-signing refers to the act of signing two conflicting transactions. When a validator double-signs,
it creates a situation where the network is unable to reach consensus on the state of the blockchain,
which can lead to problems such as an attempt to fork or network instability.

Equivocation is another behavior that can lead to validator slashing in a PoS network. Equivocation
refers to the act of a validator attempting to create two conflicting versions of the blockchain,
which can also lead to problems such as fork or network instability.

:::
