---
id: withdraw-start-many
title: withdrawStartMany
keywords:
- 'plasma client, erc721, withdrawStartMany, polygon, sdk'
description: 'Commencer à utiliser maticjs'
---

# withdrawStartMany {#withdrawstartmany}

La méthode `withdrawStartMany` peut être utilisée pour lancer le processus de retrait qui brûlera plusieurs jetons sur la chaîne Polygon.

```
const erc721Token = plasmaClient.erc721(<root token address>);

const result = await erc721Token.withdrawStartMany([<token id1>, <token id2>]);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
