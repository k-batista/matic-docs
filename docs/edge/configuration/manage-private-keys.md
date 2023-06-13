---
id: manage-private-keys
title: Manage private keys
description: "How to manage private keys and what types of keys there are."
keywords:
  - docs
  - polygon
  - edge
  - private
  - key
  - keystore
---

## Overview

The Polygon Edge has two types of private keys that it directly manages:

* **Private key used for the consensus mechanism**
* **Private key used for networking by libp2p**
* **(Optional) BLS Private key used for the consensus mechanism to aggregate validators' signatures**

Currently, the Polygon Edge doesn't offer support for direct account management.

Based on the directory structure outlined in the [Backup & Restore guide](/docs/edge/working-with-node/backup-restore),
the Polygon Edge stores these mentioned key files in two distinct directories - **consensus** and **keystore**.

## Key format

The private keys are stored in simple **Base64 format**, so they can be human-readable and portable.

```bash
# Example private key
0802122068a1bdb1c8af5333e58fe586bc0e9fc7aff882da82affb678aef5d9a2b9100c0
```

:::info Key Type
All private key files generated and used inside the Polygon Edge are relying on ECDSA with the curve [secp256k1](https://en.bitcoin.it/wiki/Secp256k1).

As the curve is non-standard, it cannot be encoded and stored in any standardized PEM format.
Importing keys that don't conform to this key type is not supported.
:::
## Consensus Private Key

The private key file mentioned as the *consensus private key* is also referred to as the **validator private key**.
This private key is used when the node is acting as a validator in the network and needs to sign new data.

The private key file is located in `consensus/validator.key`, and adheres to the [key format](/docs/edge/configuration/manage-private-keys#key-format) mentioned.

:::warning
The validator private key is unique to each validator node. The same key is <b>not</b> to be shared across all validators, as this may compromise the security of your chain.
:::

## Networking Private Key

The private key file mentioned for networking is used by libp2p to generate the corresponding PeerID, and allow the node to participate in the network.

It is located in `keystore/libp2p.key`, and adheres to the [key format](/docs/edge/configuration/manage-private-keys#key-format) mentioned.

## BLS Secret Key

The BLS secret key file is used to aggregate committed seals in the consensus layer. The size of aggregated committed seals by BLS is less than the serialized committed ECDSA signatures.

The BLS feature is optional and, it's possible to choose whether to use BLS or not. Refer [BLS](/docs/edge/consensus/bls) for more details.

## Import / Export

As the key files are stored in simple Base64 on disk, they can be easily backed up or imported.

:::caution Changing the key files
Any kind of change made to the key files on an already set up / running network can lead to serious network/consensus disruption, 
since the consensus and peer discovery mechanisms store the data derived from these keys in node-specific storage, and rely on this data to
initiate connections and perform consensus logic
:::