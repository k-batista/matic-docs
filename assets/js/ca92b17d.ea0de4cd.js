"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[35239],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),h=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=h(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=h(n),d=o,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(u,i(i({ref:e},l),{},{components:n})):a.createElement(u,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16739:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=(n(44996),["components"]),c={id:"matic-to-ethereum",title:"Transfer data from Polygon to Ethereum",description:"Transfer state or data from Polygon to Ethereum via Contracts",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"},s=void 0,h={unversionedId:"develop/l1-l2-communication/matic-to-ethereum",id:"develop/l1-l2-communication/matic-to-ethereum",title:"Transfer data from Polygon to Ethereum",description:"Transfer state or data from Polygon to Ethereum via Contracts",source:"@site/docs/develop/l1-l2-communication/matic-to-ethereum.md",sourceDirName:"develop/l1-l2-communication",slug:"/develop/l1-l2-communication/matic-to-ethereum",permalink:"/matic-docs/docs/develop/l1-l2-communication/matic-to-ethereum",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/l1-l2-communication/matic-to-ethereum.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"matic-to-ethereum",title:"Transfer data from Polygon to Ethereum",description:"Transfer state or data from Polygon to Ethereum via Contracts",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"}},l={},p=[],m={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mechanism for transferring data from Polygon to Ethereum is a little different from doing the same for Ethereum to Polygon. The ",(0,r.kt)("strong",{parentName:"p"},"checkpoint")," transactions created by the Validators on the Ethereum chain are used for achieving this. Basically a transaction is initially created on Polygon. While creating this transaction it has to be ensured that an ",(0,r.kt)("strong",{parentName:"p"},"event is emitted")," and the ",(0,r.kt)("strong",{parentName:"p"},"event logs includes the data we wish to transfer")," from Polygon to Ethereum."),(0,r.kt)("p",null,"In a period of time ( about 10-30 mins ), this transaction is check-pointed on the Ethereum chain by the validators. Once checkpointing is done, the hash of the transaction created on the Polygon chain can be submitted as a proof on the ",(0,r.kt)("strong",{parentName:"p"},"RootChainManager")," contract on the Ethereum chain. This contract, validates the transaction, verifies that this transaction is included in the checkpoint and finally decodes the event logs from this transaction."),(0,r.kt)("p",null,"Once this phase is over, we can use the ",(0,r.kt)("strong",{parentName:"p"},"decoded event log data to perform any change")," on the root contract deployed on the Ethereum chain. For this we also need to ensure that, the change of state on Ethereum is only done in a secure way. Hence, we make use of a ",(0,r.kt)("strong",{parentName:"p"},"Predicate")," contract which is a special type of contract that can be only triggered by the ",(0,r.kt)("strong",{parentName:"p"},"RootChainManager")," contract. This architecture ensures that the state changes on Ethereum happens only when the transaction on Polygon is check pointed and verified on the Ethereum chain by the ",(0,r.kt)("strong",{parentName:"p"},"RootChainManager")," contract."),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A transaction is executed on the child contract deployed on the Polygon chain.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An event is also emitted in this transaction. The parameters of this ",(0,r.kt)("strong",{parentName:"p"},"event includes the data which has to be transferred")," from Polygon to Ethereum.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The validators on the Polygon network picks up this transaction in a specific interval of time( probably 10-30mins), validates them and ",(0,r.kt)("strong",{parentName:"p"},"adds them to the checkpoint")," on Ethereum.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A checkpoint transaction is created on the ",(0,r.kt)("strong",{parentName:"p"},"RootChain")," contract and the checkpoint inclusion can be checked using this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rahuldamodar94/matic-learn-pos/blob/transfer-matic-ethereum/script/check-checkpoint.js"},"script"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the checkpoint addition is completed, the ",(0,r.kt)("strong",{parentName:"p"},"matic.js")," library can be used to call the ",(0,r.kt)("strong",{parentName:"p"},"exit")," function of the ",(0,r.kt)("strong",{parentName:"p"},"RootChainManager")," contract. ",(0,r.kt)("strong",{parentName:"p"},"exit")," function can be called using the matic.js library as shown in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rahuldamodar94/matic-learn-pos/blob/transfer-matic-ethereum/script/exit.js"},"example"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running the script, verifies the inclusion of the Polygon transaction hash on Ethereum chain, and then in turn calls the ",(0,r.kt)("strong",{parentName:"p"},"exitToken")," function of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rahuldamodar94/matic-learn-pos/blob/transfer-matic-ethereum/contracts/CustomPredicate.sol"},"predicate")," contract.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This ensures that the ",(0,r.kt)("strong",{parentName:"p"},"state change on the root chain contract")," is always done in a ",(0,r.kt)("strong",{parentName:"p"},"secure")," way and ",(0,r.kt)("strong",{parentName:"p"},"only through the predicate contract"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The important thing to note is that the ",(0,r.kt)("strong",{parentName:"p"},"verification of the transaction hash")," from Polygon and ",(0,r.kt)("strong",{parentName:"p"},"triggering the predicate")," contract happens in a ",(0,r.kt)("strong",{parentName:"p"},"single transaction")," and thus ensuring security of any state change on root contract."))),(0,r.kt)("h1",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"This is a simple demonstration of how data can be transfered from Polygon to Ethereum. This tutorial shows an example of transfering a uint256 value across the chain. But you can transfer type of data. But it is necessary to encode the data in bytes and then emit it from the child contract. It can be finally decoded at the root contract."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First create the root chain and child chain contract. Ensure that the function that does the state change also emits an event. This event must include the data to be transferred as one of its parameters. A sample format of how the Child and Root contract must look like is given below. This is a very simple contract that has a data variable whose value is set by using a setData function. Calling the setData function emits the Data event. Rest of the things in the contract will be explained in the upcoming sections of this tutorial.")),(0,r.kt)("p",null,"A. Child Contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"contract Child {\n\n    event Data(address indexed from, bytes bytes_data);\n\n    uint256 public data;\n\n    function setData(bytes memory bytes_data) public {\n     data = abi.decode(bytes_data,(uint256));\n     emit Data(msg.sender,bytes_data);\n    }\n\n}\n")),(0,r.kt)("p",null,"B. Root Contract"),(0,r.kt)("p",null,"Pass this ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1470E07a6dD1D11eAE439Acaa6971C941C9EF48f")," as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"_predicate")," in the root contract constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"contract Root {\n\n    address public predicate;\n    constructor(address _predicate) public{\n        predicate=_predicate;\n    }\n\n   modifier onlyPredicate() {\n        require(msg.sender == predicate);\n        _;\n    }\n\n    uint256 public data;\n\n    function setData(bytes memory bytes_data) public onlyPredicate{\n        data = abi.decode(bytes_data,(uint256));\n    }\n\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the child and root contract is deployed on the Polygon and Ethereum chain respectively, these contracts have to be mapped using the PoS bridge. This mapping ensures that a connection is maintained between these two contracts across the chains. For doing this mapping,the Polygon team can be reached on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/0xPolygon"},"discord"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"One important thing to note is that, in the root contract, there is a onlyPredicate modifier. It is reccomended to use this modifier always because it ensures that only the predicate contract makes the state change on the root contract. The predicate contract is a special contract that triggers the root contract only when the transaction that happened on the Polygon chain is verified by the RootChainManager on Ethereum chain. This ensures secure change of state on the root contract."))),(0,r.kt)("p",null,"For testing the above implementation, we can create a transaction on the Polygon chain by calling the ",(0,r.kt)("strong",{parentName:"p"},"setData")," function of the child contract. We need to wait at this point for the checkpoint to be completed. The checkpoint inclusion can be checked using this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rahuldamodar94/matic-learn-pos/blob/transfer-matic-ethereum/script/check-checkpoint.js"},"script"),". Once checkpoint is completed, call the exit function of the RootChainManager using the matic.js SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const txHash =\n  "0xc094de3b7abd29f23a23549d9484e9c6bddb2542e2cc0aa605221cb55548951c";\n\nconst logEventSignature =\n  "0x93f3e547dcb3ce9c356bb293f12e44f70fc24105d675b782bd639333aab70df7";\n\nconst execute = async () => {\n  try {\n    const tx = await maticPOSClient.posRootChainManager.exit(\n      txHash,\n      logEventSignature\n    );\n    console.log(tx.transactionHash); // eslint-disable-line\n  } catch (e) {\n    console.error(e); // eslint-disable-line\n  }\n};\n')),(0,r.kt)("p",null,"As shown in the above screenshot, the ",(0,r.kt)("strong",{parentName:"p"},"txHash")," is the transaction hash of the transaction that happened on the child contract deployed on Polygon chain."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"logEventSignature")," is the keccack-256 hash of the Data event. This is the same hash that we have included in the Predicate contract. All the contract code used for this tutorial and the exit script can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rahuldamodar94/matic-learn-pos/tree/transfer-matic-ethereum"},"here")),(0,r.kt)("p",null,"Once the exit script is completed, the root contract on Ethereum chain can be queried to verify if the value of the variable ",(0,r.kt)("strong",{parentName:"p"},"data")," that was set in child contract has also been reflected in the ",(0,r.kt)("strong",{parentName:"p"},"data")," variable of the root contract."))}d.isMDXComponent=!0}}]);