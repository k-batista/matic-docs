"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[14057],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"polybft-protocol",title:"Consensus Protocol",sidebar_label:"Consensus protocol",description:"Explanation about consensus protocol within PolyBFT.",keywords:["docs","polygon","edge","consensus","polybft","pos"]},l=void 0,c={unversionedId:"supernets/design/consensus/polybft/polybft-protocol",id:"supernets/design/consensus/polybft/polybft-protocol",title:"Consensus Protocol",description:"Explanation about consensus protocol within PolyBFT.",source:"@site/docs/supernets/design/consensus/polybft/protocol.md",sourceDirName:"supernets/design/consensus/polybft",slug:"/supernets/design/consensus/polybft/polybft-protocol",permalink:"/matic-docs/docs/supernets/design/consensus/polybft/polybft-protocol",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/design/consensus/polybft/protocol.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"polybft-protocol",title:"Consensus Protocol",sidebar_label:"Consensus protocol",description:"Explanation about consensus protocol within PolyBFT.",keywords:["docs","polygon","edge","consensus","polybft","pos"]}},d={},h=[{value:"State Transitions",id:"state-transitions",level:2},{value:"Validator Set",id:"validator-set",level:2},{value:"Staking",id:"staking",level:2},{value:"Native Bridge Integration",id:"native-bridge-integration",level:2},{value:"Slashing",id:"slashing",level:2},{value:"State transitions",id:"state-transitions-1",level:2},{value:"Block timestamp drift validation",id:"block-timestamp-drift-validation",level:2},{value:"Native bridge integration",id:"native-bridge-integration-1",level:2}],p={toc:h};function u(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document provides an explanation on PolyBFT, the consensus mechanism for Superents."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,i.kt)("p",null,"In PolyBFT, the consensus protocol follows a set of state transitions that enable the network to reach consensus on the state of the blockchain. The process begins when a validator proposes adding a new block to the blockchain. This block contains a list of transactions that the validator would like to include in the next update to the blockchain's state."),(0,i.kt)("p",null,"Other validators in the active set will vote on whether to accept the proposed block. Each validator has a voting weight that influences voting. A super-majority of validators must agree to accept the block to reach consensus. Once a sufficient number of validators have agreed to accept the proposed block, it is added to the blockchain, and the state of the blockchain is updated to reflect the changes introduced by the transactions in the block. The protocol refers to the current block's position (the block height) as its ",(0,i.kt)("em",{parentName:"p"},"sequence"),"."),(0,i.kt)("p",null,"The process to finalize a block in PolyBFT is known as ",(0,i.kt)("em",{parentName:"p"},"sealing"),". When a validator proposes a new block, other validators on the network will vote on whether to accept the block. This process is may be repeated several times; each repetition is known as a ",(0,i.kt)("em",{parentName:"p"},"round"),'. During each round, certain validators must agree to seal the proposed block for it to be added to the blockchain. Another validator will attempt to seal the sequence in the new round. If the required number of votes is not reached during a particular round, the voting process will continue into the next round, and thus, the protocol "increases the round".'),(0,i.kt)("p",null,"Once the proposed block is accepted, it will be added to the blockchain, and the state of the blockchain will be updated to reflect the changes introduced by the transactions in the block. This process continues with the next proposer proposing a new block, and the process repeats."),(0,i.kt)("h2",{id:"validator-set"},"Validator Set"),(0,i.kt)("p",null,"PolyBFT limits network participation to around 100 validators, and a variable amount of stake is used as a fixed stake criterion to limit the system's security and can make the system economically vulnerable. The validator set in the PolyBFT does not update on each block but is fixed during n block periods known as an epoch."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," block period to define one epoch is determined by governance, and until then, validators will remain the same. At the end of the epoch, a special state transaction to validatorSetManagementContract is emitted, notifying the system about the validators' uptime during the epoch. It is up to the smart contract to reward validators by their uptime and update the validator set for the next epoch. There is a function getValidatorSet which returns the current validator set at any time."),(0,i.kt)("h2",{id:"staking"},"Staking"),(0,i.kt)("p",null,"Staking is governed by staking contracts directly on Polygon. To be clear, the staking module validates on Polygon and does not rely on Ethereum's security, but in principle, two chains are securing the network, PoS client and Ethereum. Transaction checkpoints still occur on Ethereum, but Ethereum does not validate staking on Polygon."),(0,i.kt)("p",null,"At the end of each epoch, a reward calculation occurs to reward the active validators."),(0,i.kt)("h2",{id:"native-bridge-integration"},"Native Bridge Integration"),(0,i.kt)("p",null,"PolyBFT supports an in-built bridging mechanism that enables arbitrary message passing between a Supernet and another Proof-of-Stake blockchain (rootchain) with the help of the consensus algorithm. Transfers can occur without mapping, allowing users to move assets between the two chains seamlessly."),(0,i.kt)("h2",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"Like in other Proof-of-Stake systems, validators are subject to slashing for malicious activity or poor performance. The slashing mechanics are still being determined, but PolyBFT will undoubtedly include a mechanism to penalize bad actors. Slashing a validator typically involves a penalty, such as losing some or all of their stake on the network. Examples of malicious activities are double-signing and equivocation."),(0,i.kt)("h2",{id:"state-transitions-1"},"State transitions"),(0,i.kt)("p",null,"The consensus protocol follows a set of state transitions. While things are still being finalized, the\nprocess will typically follow the steps below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A validator proposes adding a new block to the blockchain. This block contains a list of transactions\nthat the validator would like to include in the next update to the blockchain's state.")),(0,i.kt)("p",null,"A\ncertain number of validators must agree to accept the block to reach consensus. 2. Other validators in the active set will vote on whether to accept the proposed block. The voting weight of\neach validator influences voting. The protocol refers to block height as a ",(0,i.kt)("em",{parentName:"p"},"sequence"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'All nodes in the network exchange information for a given sequence. The process to finalize a block in PolyBFT is known as *sealing*. The sealing of blocks is instant\nand final.\n\nWhen a validator proposes a new block, other validators on the network will vote on whether to\naccept the block. This process is typically repeated several times; each repetition is known as a\n*round*. During each round, certain validators must agree to seal the proposed block\nfor it to be added to the blockchain. If the required number of votes is not reached during a\nparticular round, the voting process will continue into the next round, and thus, the protocol\n"increases the round". Another validator will attempt to seal the sequence in the new round.\n> The best case for a proposed block is that it is sealed at round 0. Blocks that are repeatedly\n> sealed at a high-order round usually indicates a network problem.\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the proposed block is accepted, it will be added to the blockchain, and the state of the blockchain\nwill be updated to reflect the changes introduced by the transactions in the block."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If a malicious actor attempted to fork the network, they would need to obtain control of 2/3 of\nthe network, which PolyBFT prevents."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the state of the blockchain has been updated, the next proposer will propose a new block, and\nthe process repeats."))),(0,i.kt)("p",null,"IBFT limits network participation to around 100 validators. A variable amount of stake is used as a fixed\nstake criterion to limit the system's security and can make the system economically vulnerable. The\nvalidator set in the PolyBFT does not update on each block but is fixed during  ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," block periods known as\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," block period to define one epoch is to be determined by governance. Until then, validators will\nremain the same. At the end of the epoch, a special ",(0,i.kt)("inlineCode",{parentName:"p"},"state transaction")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"validatorSetManagementContract"),"\nis emitted, notifying the system about validators' uptime during the ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch"),". It is up to the smart contract\nto reward validators by their uptime and ",(0,i.kt)("strong",{parentName:"p"},"update the validator set")," for the next ",(0,i.kt)("inlineCode",{parentName:"p"},"epoch"),". There is a\nfunction ",(0,i.kt)("inlineCode",{parentName:"p"},"getValidatorSet"),", which returns the current validator set at any time.")),(0,i.kt)("p",null,"Staking is governed by staking contracts directly on Polygon. To be clear, the staking module validates on\nPolygon does not rely on Ethereum's security, but in principle, two chains are securing the network, PoS\nclient and Ethereum. Transaction checkpoints still occur on Ethereum, but Ethereum does not validate staking\non Polygon."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that in Tendermint, an epoch is set to 1. However, PolyBFT includes the logic to set a custom\nepoch time, with the intent of each epoch being one day in blocks, or around 14000 blocks.")),(0,i.kt)("p",null,"A reward calculation occurs at the end of the epoch to reward the active validators in that epoch."),(0,i.kt)("admonition",{title:"Slashing",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Like in other Proof-of-Stake systems, validators are subject to slashing for malicious activity or\npoor performance. Slashing a validator typically involves a penalty, such\nas losing some or all of their stake on the network. The slashing mechanics are still being determined, but PolyBFT will undoubtedly\ninclude a mechanism to penalize bad actors."),(0,i.kt)("p",{parentName:"admonition"},"Examples of malicious activities are double-signing and equivocation:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Double-signing refers to the act of signing two conflicting transactions. When a validator double-signs,\nit creates a situation where the network is unable to reach consensus on the state of the blockchain,\nwhich can lead to problems such as an attempt to fork or network instability.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Equivocation refers to the act of a validator attempting to create two conflicting versions of the\nblockchain, which can also lead to problems such as a fork or network instability.")))),(0,i.kt)("h2",{id:"block-timestamp-drift-validation"},"Block timestamp drift validation"),(0,i.kt)("p",null,"In the PolyBFT consensus mechanism, an important security feature is the validation of block timestamps. This\nfeature prevents malicious actors from creating blocks with timestamps far in the future, which could disrupt the\nblockchain's operation."),(0,i.kt)("p",null,"The block time drift validation works by checking if the block's timestamp is within a predefined time slot. If the\ntimestamp is outside this window, the block is considered a future block and is rejected. This time slot is defined by\na parameter called ",(0,i.kt)("inlineCode",{parentName:"p"},"blockTimeDrift"),", which is nominated in seconds, and can be set during the genesis of the blockchain.\nThe default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"blockTimeDrift")," is 1 second."),(0,i.kt)("p",null,"This feature ensures that all blocks in the blockchain have valid timestamps, preventing potential attacks and maintaining\nthe integrity of the blockchain."),(0,i.kt)("h2",{id:"native-bridge-integration-1"},"Native bridge integration"),(0,i.kt)("p",null,"With the help of PolyBFT, Supernets support an\n",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/design/bridge/overview"},"in-built bridging mechanism (a two-way bridge)"),",\nwhich enables arbitrary message passing between a Supernet and another Proof-of-Stake\nblockchain (",(0,i.kt)("inlineCode",{parentName:"p"},"rootchain"),"). Transfers can occur without mapping."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bridge",src:n(15198).Z,width:"3794",height:"2130"})),(0,i.kt)("p",null,"Learn more ",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/design/bridge/overview"},"here"),"."))}u.isMDXComponent=!0},15198:function(e,t,n){t.Z=n.p+"assets/images/contracts-bridge.excalidraw-03fd7cb8d29be249c78087880bd3ad78.png"}}]);