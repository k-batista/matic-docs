---
id: withdraw-exit-many
title: withdrawExitMany
keywords:
- 'plasma client, erc721, withdrawExitMany, polygon, sdk'
description: 'Magsimula sa maticjs '
---

# withdrawExitMany {#withdrawexitmany}

Maaaring gamitin ang paraang `withdrawExitMany`upang aprubahan ang lahat ng token.

```
const erc721RootToken = plasmaClient.erc721(<root token address>, true);

const approveResult = await erc721RootToken.withdrawExitMany(<burn tx hash>);

const txHash = await approveResult.getTransactionHash();

const txReceipt = await approveResult.getReceipt();

```
