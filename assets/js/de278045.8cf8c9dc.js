"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[9325],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={id:"deposit-withdraw-event-plasma",title:"Deposit and Checkpoint Event Tracking - Plasma",sidebar_label:"Deposit and Checkpoint Event Tracking",description:"Track real-time deposit and checkpoint events.",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"},s=void 0,l={unversionedId:"develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",id:"develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",title:"Deposit and Checkpoint Event Tracking - Plasma",description:"Track real-time deposit and checkpoint events.",source:"@site/docs/develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma.md",sourceDirName:"develop/ethereum-polygon/plasma",slug:"/develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",permalink:"/matic-docs/docs/develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"deposit-withdraw-event-plasma",title:"Deposit and Checkpoint Event Tracking - Plasma",sidebar_label:"Deposit and Checkpoint Event Tracking",description:"Track real-time deposit and checkpoint events.",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"}},d={},p=[{value:"Deposit Events",id:"deposit-events",level:2},{value:"Realtime deposit event tracking using a web socket connection",id:"realtime-deposit-event-tracking-using-a-web-socket-connection",level:3},{value:"Historical deposit completion check by querying the blockchain",id:"historical-deposit-completion-check-by-querying-the-blockchain",level:3},{value:"Checkpoint Events",id:"checkpoint-events",level:2},{value:"Real-time checkpoint status tracking",id:"real-time-checkpoint-status-tracking",level:3},{value:"Historical checkpoint inclusion check by querying the blockchain",id:"historical-checkpoint-inclusion-check-by-querying-the-blockchain",level:3}],h={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please check the latest ",(0,r.kt)("a",{parentName:"p",href:"https://maticnetwork.github.io/matic.js/docs/plasma/"},"Matic.js documentation on Plasma")," to get started."),(0,r.kt)("h2",{id:"deposit-events"},"Deposit Events"),(0,r.kt)("p",null,"When a token is deposited from Ethereum to Polygon, a process called state sync mechanism comes into play that eventually mints the tokens for the user on the Polygon chain. This process takes about 22-30 minutes to happen and hence listening to the deposit event is very important to create a good user experience. This is an example script that can be used to track real time deposit events."),(0,r.kt)("h3",{id:"realtime-deposit-event-tracking-using-a-web-socket-connection"},"Realtime deposit event tracking using a web socket connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const WebSocket = require("ws");\nconst _ = require("lodash");\n\n// For Mumbai\nconst ws = new WebSocket("wss://ws-mumbai.matic.today/");\n// For Polygon mainnet: wss://ws-mainnet.matic.network/\n\nasync function checkDepositStatus(user, token, childChain) {\n  return new Promise((resolve, reject) => {\n    ws.on("open", function open() {\n      ws.send(\n        `{"id": 1, "method": "eth_subscribe", "params": ["newDeposits", {"Contract": "${childChain}"}]}`\n      );\n      ws.on("message", function incoming(data) {\n        var txData = _.get(JSON.parse(data), "params.result.Data", "");\n        var userAddress = txData.substring(0, 64).replace(/^0+/, "0x");\n        var contractAddress = txData.substring(65, 128).replace(/^0+/, "0x");\n\n        if (\n          user &&\n          user.toLowerCase() === userAddress.toLowerCase() &&\n          token &&\n          token.toLowerCase() === contractAddress.toLowerCase()\n        ) {\n          console.log(data);\n          resolve(true); // eslint-disable-line\n        }\n      });\n\n      ws.on("close", () => {\n        reject(false);\n      });\n\n      ws.on("error", () => {\n        reject(false);\n      });\n    });\n  });\n}\n\n// Param1 - user address\n// Param2 - contract address on main chain\n// Param3 - child chain address (0xD9c7C4ED4B66858301D0cb28Cc88bf655Fe34861 for mainnet)\ncheckDepositStatus(\n  "0xFd71Dc9721d9ddCF0480A582927c3dCd42f3064C",\n  "0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae",\n  "0x1EDd419627Ef40736ec4f8ceffdE671a30803c5e"\n)\n  .then((res) => {\n    console.log(res);\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n')),(0,r.kt)("h3",{id:"historical-deposit-completion-check-by-querying-the-blockchain"},"Historical deposit completion check by querying the blockchain"),(0,r.kt)("p",null,"This script can be used to check if a particular deposit has been completed on the child chain or not. The main chain and the child chain keep incrementing the value of a global counter variable on both chains. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol#L38"},"StateSender")," contract emits an event that has the counter value. The counter value on the child chain can be queried from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol#L12"},"StateReceiver")," contract. If the counter value on child chain is greater than or equal to the same on main chain, then the deposit can be considered as successfully completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let Web3 = require("web3");\n\n// For mainnet, use Ethereum RPC\nconst provider = new Web3.providers.HttpProvider(\n  "https://goerli.infura.io/v3/API-KEY"\n);\nconst web3 = new Web3(provider);\n\n// For mainnet, use the Polygon mainnet RPC: <Sign up for a dedicated free RPC URL at https://rpc.maticvigil.com/ or other hosted node providers.>\nconst child_provider = new Web3.providers.HttpProvider(\n  "<insert Mumbai testnet RPC URL>" //get a free RPC URL at https://rpc.maticvigil.com/ or other hosted node providers.\n);\n\nconst child_web3 = new Web3(child_provider);\n\nconst contractInstance = new child_web3.eth.Contract(\n  [\n    {\n      constant: true,\n      inputs: [],\n      name: "lastStateId",\n      outputs: [\n        {\n          internalType: "uint256",\n          name: "",\n          type: "uint256",\n        },\n      ],\n      payable: false,\n      stateMutability: "view",\n      type: "function",\n    },\n  ],\n  "0x0000000000000000000000000000000000001001"\n);\n\nasync function depositCompleted(txHash) {\n  let tx = await web3.eth.getTransactionReceipt(txHash);\n  let child_counter = await contractInstance.methods.lastStateId().call();\n  let root_counter = web3.utils.hexToNumberString(tx.logs[3].topics[1]);\n  return child_counter >= root_counter;\n}\n\n// Param 1 - Deposit transaction hash\ndepositCompleted(\n  "0x29d901174acd42d4651654a502073f3c876ff85b7887b2e2634d00848f6c982e"\n)\n  .then((res) => {\n    console.log(res);\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n')),(0,r.kt)("h2",{id:"checkpoint-events"},"Checkpoint Events"),(0,r.kt)("h3",{id:"real-time-checkpoint-status-tracking"},"Real-time checkpoint status tracking"),(0,r.kt)("p",null,"All transactions that occur on Polygon chain are checkpointed to the Ethereum chain in frequent intervals of time by the validators. This time, it is around 10 mins on Mumbai and 30 mins on Polygon mainnet. The checkpoint occurs on a contract called the RootChain contract deployed on Ethereum chain. The following script can be used to listen to real-time checkpoint inclusion events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const Web3 = require("web3");\n\n// Ethereum provider\nconst provider = new Web3.providers.WebsocketProvider(\n  "wss://goerli.infura.io/ws/v3/api-key"\n);\n\nconst web3 = new Web3(provider);\n\n// Sign up for a free dedicated RPC URL at https://rpc.maticvigil.com/ or other hosted node providers.\nconst chil_provider = new Web3.providers.HttpProvider(\n  "<insert Mumbai testnet RPC URL>"\n);\nconst child_web3 = new Web3(chil_provider);\n\nasync function checkInclusion(txHash, rootChainAddress) {\n  let txDetails = await child_web3.eth.getTransactionReceipt(txHash);\n\n  block = txDetails.blockNumber;\n  return new Promise(async (resolve, reject) => {\n    web3.eth.subscribe(\n      "logs",\n      {\n        address: rootChainAddress,\n      },\n      async (error, result) => {\n        if (error) {\n          reject(error);\n        }\n\n        console.log(result);\n        if (result.data) {\n          let transaction = web3.eth.abi.decodeParameters(\n            ["uint256", "uint256", "bytes32"],\n            result.data\n          );\n          if (block <= transaction["1"]) {\n            resolve(result);\n          }\n        }\n      }\n    );\n  });\n}\n\n// Param1 - Burn transaction hash on child chain\n// Param2 - RootChainProxy Address on root chain (0x86E4Dc95c7FBdBf52e33D563BbDB00823894C287 for mainnet)\ncheckInclusion(\n  "0x9d1e61d9daaa12fcd00fcf332e1c06fd8253a949b4f2a4741c964454a67ea943",\n  "0x2890ba17efe978480615e330ecb65333b880928e"\n)\n  .then((res) => {\n    console.log(res);\n    provider.disconnect();\n  })\n  .catch((err) => {\n    console.log(err);\n  });\n')),(0,r.kt)("h3",{id:"historical-checkpoint-inclusion-check-by-querying-the-blockchain"},"Historical checkpoint inclusion check by querying the blockchain"),(0,r.kt)("p",null,"This can be checked using the following API. The block number of the burn transaction on the child chain has to be given as a parameter to this GET API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Testnet\nhttps://apis.matic.network/api/v1/mumbai/block-included/block-number\n// Mainnet\nhttps://apis.matic.network/api/v1/matic/block-included/block-number\n")))}u.isMDXComponent=!0}}]);