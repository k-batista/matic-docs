"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[84578],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"ethereum-to-matic",title:"Transfer data from Ethereum to Polygon",description:"Transfer state or data from Ethereum to Polygon via Contracts",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"},c=void 0,l={unversionedId:"develop/l1-l2-communication/ethereum-to-matic",id:"develop/l1-l2-communication/ethereum-to-matic",title:"Transfer data from Ethereum to Polygon",description:"Transfer state or data from Ethereum to Polygon via Contracts",source:"@site/docs/develop/l1-l2-communication/ethereum-to-matic.md",sourceDirName:"develop/l1-l2-communication",slug:"/develop/l1-l2-communication/ethereum-to-matic",permalink:"/matic-docs/docs/develop/l1-l2-communication/ethereum-to-matic",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/l1-l2-communication/ethereum-to-matic.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"ethereum-to-matic",title:"Transfer data from Ethereum to Polygon",description:"Transfer state or data from Ethereum to Polygon via Contracts",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"}},d={},p=[{value:"1. Deploy Sender contract",id:"1-deploy-sender-contract",level:3},{value:"2. Deploy Receiver contract",id:"2-deploy-receiver-contract",level:3},{value:"3. Getting your Sender and Receiver mapped",id:"3-getting-your-sender-and-receiver-mapped",level:3},{value:"4. Sending and Receiving data",id:"4-sending-and-receiving-data",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The mechanism to natively read Ethereum data from Polygon EVM chain is that of \u2018State Sync\u2019. In other words, this mechanism enables transfer of arbitrary data from Ethereum chain to Polygon chain. The procedure that makes it possible is: Validators on the Heimdall layer are listening for a particular event \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSynced")," from a Sender contract, as soon as the event is picked, the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," that was passed in the event is written on the Receiver contract. Read more ",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain/validator/core-components/state-sync-mechanism"},"here"),"."),(0,o.kt)("p",null,"The Sender and Receiver contract are required to be mapped on Ethereum \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/release-betaV2/contracts/root/stateSyncer/StateSender.sol"},"StateSender.sol")," needs to be aware of each sender and receiver. If you'd like to get the mapping done, please request a mapping ",(0,o.kt)("a",{parentName:"p",href:"https://mapper.polygon.technology/"},"here"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the following walkthrough, we'll be deploying a Sender contract on Goerli (Ethereum testnet) and a Receiver contract on Mumbai (Polygon's testnet) and then we'll be sending data from Sender and reading data on Receiver via web3 calls in a node script."),(0,o.kt)("h3",{id:"1-deploy-sender-contract"},"1. Deploy Sender contract"),(0,o.kt)("p",null,"The sole purpose of Sender contract is to be able to call ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/e999579e9dc898ab6e66ddcb49ee84c2543a9658/contracts/root/stateSyncer/StateSender.sol#L33"},"syncState")," function on the StateSender contract \u2014 which is Matic's state syncer contract - the StateSynced event of which Heimdall is listening to. "),(0,o.kt)("p",null,"Deployed at:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0xEAa852323826C71cd7920C3b4c007184234c3945")," on Goerli "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0x28e4F3a7f651294B9564800b2D01f35189A5bFbE")," on Ethereum Mainnet"),(0,o.kt)("p",null,"To be able to call this function, let's first include it's interface in our contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Sender.sol\n\npragma solidity ^0.5.11;\n\ncontract IStateSender {\n  function syncState(address receiver, bytes calldata data) external;\n  function register(address sender, address receiver) public;\n}\n\n...\n")),(0,o.kt)("p",null,"Next, let's write our custom function that takes in the data we'd like to pass on to Polygon and calls syncState"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function sendState(bytes calldata data) external {\n    states = states + 1 ;\n    IStateSender(stateSenderContract).syncState(receiver, data);\n}\n")),(0,o.kt)("p",null,"In the above function, ",(0,o.kt)("inlineCode",{parentName:"p"},"stateSenderContract")," is the address of the StateSender on the network you'll be deploying ",(0,o.kt)("inlineCode",{parentName:"p"},"Sender")," on. (eg., we'll be using ",(0,o.kt)("inlineCode",{parentName:"p"},"0xEAa852323826C71cd7920C3b4c007184234c3945")," for Goerli), and ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver")," is the contract that will receive the data we send from here."),(0,o.kt)("p",null,"It is recommended to use constructors to pass in variables, but for the purpose of this demo, we'll simply hardcode these two addresses:"),(0,o.kt)("p",null,"Following is how our Sender.sol looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// sender.sol\n\npragma solidity ^0.5.11;\n\ncontract IStateSender {\n  function syncState(address receiver, bytes calldata data) external;\n  function register(address sender, address receiver) public;\n}\n\ncontract sender {\n  address public stateSenderContract = 0xEAa852323826C71cd7920C3b4c007184234c3945;\n  address public receiver = 0x83bB46B64b311c89bEF813A534291e155459579e;\n  \n  uint public states = 0;\n\n  function sendState(bytes calldata data) external {\n    states = states + 1 ;\n    IStateSender(stateSenderContract).syncState(receiver, data);\n  }\n  \n}\n")),(0,o.kt)("p",null,"We're using a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"states")," counter to keep track of the number of states sent via the Sender contract."),(0,o.kt)("p",null,"Use Remix to deploy the contract and keep a note of the address and ABI."),(0,o.kt)("h3",{id:"2-deploy-receiver-contract"},"2. Deploy Receiver contract"),(0,o.kt)("p",null,"Receiver contract is the one that is invoked by a Validator when the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSynced")," event is emitted. The Validator invokes the function ",(0,o.kt)("inlineCode",{parentName:"p"},"onStateReceive"),"on the receiver contract to submit the data. To implement it, we first import ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/release-betaV2/contracts/child/bor/StateReceiver.sol"},"StateReceiver")," interface and write down our custom logic \u2014 to interpret the tranferred data inside onStateReceive."),(0,o.kt)("p",null,"Following is how our Receiver.sol looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// receiver.sol\n\npragma solidity ^0.5.11;\n\n// IStateReceiver represents interface to receive state\ninterface IStateReceiver {\n  function onStateReceive(uint256 stateId, bytes calldata data) external;\n}\n\ncontract receiver {\n\n  uint public lastStateId;\n  bytes public lastChildData;\n\n  function onStateReceive(uint256 stateId, bytes calldata data) external {\n    lastStateId = stateId;\n    lastChildData = data;\n    }\n\n}\n")),(0,o.kt)("p",null,"The function simply assigns the last received State Id and data to variables. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/239a91045622ddcf9ebec2cec81fdc6daa3a33e3/contracts/root/stateSyncer/StateSender.sol#L36"},"StateId")," is a simple unique reference to the transferred state (a simple counter)."),(0,o.kt)("p",null,"Deploy  your Receiver.sol on Polygon's testnet and keep a note of the address and ABI"),(0,o.kt)("h3",{id:"3-getting-your-sender-and-receiver-mapped"},"3. Getting your Sender and Receiver mapped"),(0,o.kt)("p",null,"You can either use the already deployed addresses (mentioned above) for sender and receiver, or deploy your custom contracts and request a mapping done here: ",(0,o.kt)("a",{parentName:"p",href:"https://mapper.polygon.technology/"},"https://mapper.polygon.technology/")),(0,o.kt)("h3",{id:"4-sending-and-receiving-data"},"4. Sending and Receiving data"),(0,o.kt)("p",null,"Now that we have our contracts in place and mapping done, we'll be writing a simple node script to send arbitrary hex bytes, receive them on Polygon and interpret the data!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.1 Setup your script")),(0,o.kt)("p",null,"We'll first initialise our web3 objects, wallet to make the transactions and contracts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// test.js\n\nconst Web3 = require('web3')\nconst Network = require(\"@maticnetwork/meta/network\")\n\nconst network = new Network ('testnet', 'mumbai')\n\nconst main = new Web3(network.Main.RPC)\nconst matic = new Web3 (network.Matic.RPC)\n\nlet privateKey = `0x...` // add or import your private key\n\nmatic.eth.accounts.wallet.add(privateKey)\nmain.eth.accounts.wallet.add(privateKey)\n\nlet receiverAddress = `<RECEIVER_CONTRACT_ADDRESS>`\nlet receiverABI = `` // insert or import ABI\nlet senderAddress = `<SENDER_CONTRACT_ADDRESS>`\nlet senderABI = `` // insert of import the ABI\n\nlet sender = new main.eth.Contract(JSON.parse(senderABI), senderAddress)\nlet receiver = new matic.eth.Contract(JSON.parse(receiverABI), receiverAddress)\n\n")),(0,o.kt)("p",null,"We're using @maticnetwork/meta package for the RPCs, the package isn't a requirement to run the script."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"matic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," objects refer to the web3 object initialised with Polygon's and Ropsten's RPC respectively. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sender")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"receiver")," objects refer to the contract objects of Sender.sol and Receiver.sol that we deployed in Step 1 and 2. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.2 Sending data")),(0,o.kt)("p",null,"Next, let's setup our functions to create bytestring of the data and send it via Sender contract: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// data to sync\nfunction getData(string) {\n  let data = matic.utils.asciiToHex(string);\n  return data\n}\n\n// send data via sender\nasync function sendData (data) {\n  let r = await sender.methods\n    .sendState (getData(data))\n    .send({\n      from: main.eth.accounts.wallet[0].address,\n      gas: 8000000\n    })\n  console.log('sent data from root, ', r.transactionHash)\n}\n")),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")," will convert an ascii string (eg., ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World !"),") to a string of bytes (eg., ",(0,o.kt)("inlineCode",{parentName:"p"},"0x48656c6c6f20576f726c642021"),"); while the function ",(0,o.kt)("inlineCode",{parentName:"p"},"sendData"),"takes in ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," (an ascii string), calls ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")," and passes on the bytestring to sender contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.3 Receiving data")),(0,o.kt)("p",null,"Next, we'll be checking for received data on Receiver.sol."),(0,o.kt)("p",null,"It should take ~7-8 minutes for the state sync to execute."),(0,o.kt)("p",null,"Add the following functions to check (a) number of sent states from Sender and (b) Last received state on Receiver."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// check `states` variable on sender\nasync function checkSender () {\n  let r = await sender.methods\n    .states()\n    .call()\n  console.log('number of states sent from sender: ', r)\n}\n\n// check last received data on receiver\nasync function checkReceiver () {\n  let r = await receiver.methods\n    .lastStateId()\n    .call()\n  let s = await receiver.methods\n    .lastChildData()\n    .call()\n  console.log('last state id: ', r, 'and last data: ', s)\n  console.log('interpreted data: ', getString(s))\n}\n")),(0,o.kt)("p",null,"the function ",(0,o.kt)("inlineCode",{parentName:"p"},"checkReceiver")," simply calls the variables we defined in the contract \u2014 which would be set as soon as the Validator calls ",(0,o.kt)("inlineCode",{parentName:"p"},"onStateReceive")," on the contract. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getString")," function simply interprets the bytestring (converts it back to ascii)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function getString(data) {\n  let string = matic.utils.hexToAscii(data);\n  return string\n}\n")),(0,o.kt)("p",null,"Finally, we'll write up a method to execute our functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"async function test() {\n    await sendData ('Sending a state sync! :) ')\n    await checkSender ()\n    await checkReceiver ()\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.4 Putting it all together!")),(0,o.kt)("p",null,"This is how our test script looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// test.js\n\nconst Web3 = require('web3')\nconst Network = require(\"@maticnetwork/meta/network\")\n\nconst network = new Network ('testnet', 'mumbai')\n\nconst main = new Web3(network.Main.RPC)\nconst matic = new Web3 (network.Matic.RPC)\n\nlet privateKey = `0x...`\nmatic.eth.accounts.wallet.add(privateKey)\nmain.eth.accounts.wallet.add(privateKey)\n\nlet receiverAddress = `<RECEIVER_CONTRACT_ADDRESS>`\nlet receiverABI = ``\nlet senderAddress = `<SENDER_CONTRACT_ADDRESS>`\nlet senderABI = ``\n\nlet sender = new main.eth.Contract(JSON.parse(senderABI), senderAddress)\nlet receiver = new matic.eth.Contract(JSON.parse(receiverABI), receiverAddress)\n\n// data to sync\nfunction getData(string) {\n  let data = matic.utils.asciiToHex(string);\n  return data\n}\n\nfunction getString(data) {\n  let string = matic.utils.hexToAscii(data);\n  return string\n}\n\n// console.log(getData('Sending a state sync! :) '))\n\nasync function sendData (data) {\n  let r = await sender.methods\n    .sendState (getData(data))\n    .send({\n      from: main.eth.accounts.wallet[0].address,\n      gas: 8000000\n    })\n  console.log('sent data from root, ', r.transactionHash)\n}\n\nasync function checkSender () {\n  let r = await sender.methods\n    .states()\n    .call()\n  console.log('number of states sent from sender: ', r)\n}\n\nasync function checkReceiver () {\n  let r = await receiver.methods\n    .lastStateId()\n    .call()\n  let s = await receiver.methods\n    .lastChildData()\n    .call()\n  console.log('last state id: ', r, 'and last data: ', s)\n  console.log('interpreted data: ', getString(s))\n}\n\nasync function test() {\n    await sendData ('Hello World !')\n    await checkSender ()\n    // add a timeout here to allow time gap for the state to sync\n    await checkReceiver ()\n}\n\ntest()\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.5 Let's run the script")),(0,o.kt)("p",null,"Successful execution of the above script provide an output as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ node test\n> sent data from root 0x4f64ae4ab4d2b2d2dc82cdd9ddae73af026e5a9c46c086b13bd75e38009e5204\nnumber of states sent from sender: 1\nlast state id: 453 and last data: 0x48656c6c6f20576f726c642021\ninterpreted data: Hello World ! \n")))}m.isMDXComponent=!0}}]);