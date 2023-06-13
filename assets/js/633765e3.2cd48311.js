"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[24368],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73795:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"state-transfer",title:"State Transfer",description:"Transfer state or data easily from Ethereum to Polygon.",keywords:["docs","polygon","polygon wiki","state transfer","ethereum"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,c={unversionedId:"develop/l1-l2-communication/state-transfer",id:"develop/l1-l2-communication/state-transfer",title:"State Transfer",description:"Transfer state or data easily from Ethereum to Polygon.",source:"@site/docs/develop/l1-l2-communication/state-transfer.md",sourceDirName:"develop/l1-l2-communication",slug:"/develop/l1-l2-communication/state-transfer",permalink:"/matic-docs/docs/develop/l1-l2-communication/state-transfer",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/l1-l2-communication/state-transfer.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"state-transfer",title:"State Transfer",description:"Transfer state or data easily from Ethereum to Polygon.",keywords:["docs","polygon","polygon wiki","state transfer","ethereum"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Mintable assets",permalink:"/matic-docs/docs/develop/ethereum-polygon/mintable-assets"},next:{title:"Oracles",permalink:"/matic-docs/docs/category/oracles"}},p={},m=[{value:"Root Tunnel Contract",id:"root-tunnel-contract",level:2},{value:"Child Tunnel Contract",id:"child-tunnel-contract",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example Contracts of State Transfer Bridge",id:"example-contracts-of-state-transfer-bridge",level:2},{value:"State Transfer from Ethereum \u2192 Polygon",id:"state-transfer-from-ethereum--polygon",level:2},{value:"State Transfer from Polygon \u2192 Ethereum",id:"state-transfer-from-polygon--ethereum",level:2}],d={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polygon validators continuously monitor a contract on Ethereum chain called ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSender"),". Each time a registered contract on Ethereum chain calls this contract, it emits an event. Using this event Polygon validators relay the data to another contract on Polygon chain. This ",(0,r.kt)("strong",{parentName:"p"},"State Sync")," mechanism is used to send data from Ethereum to Polygon."),(0,r.kt)("p",null,"Additionally, Polygon validators send an Ethereum hash of each transaction on the Polygon chain on a regular basis. You can use this ",(0,r.kt)("strong",{parentName:"p"},"checkpoint")," to validate any transaction that took place on Polygon. Once a transaction has been verified to have occurred on the Polygon chain, Ethereum can then be used to carry out the appropriate action."),(0,r.kt)("p",null,"These 2 mechanisms can be used together to enable two-way data (state) transfer between Ethereum and Polygon. To abstract out all these interactions, you can directly inherit our ",(0,r.kt)("inlineCode",{parentName:"p"},"FxBaseRootTunnel")," (on Ethereum) and ",(0,r.kt)("inlineCode",{parentName:"p"},"FxBaseChildTunnel")," (on Polygon) contracts."),(0,r.kt)("h2",{id:"root-tunnel-contract"},"Root Tunnel Contract"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FxBaseRootTunnel")," contract from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdkanani/fx-portal/blob/main/contracts/tunnel/FxBaseRootTunnel.sol"},"here"),". This contract gives access to the following functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function _processMessageFromChild(bytes memory data)"),": This is a virtual function that needs to be implemented in the contract which inherits it to handle data being sent from ",(0,r.kt)("inlineCode",{parentName:"li"},"ChildTunnel"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_sendMessageToChild(bytes memory message)"),": This function can be called internally with any bytes data as a message. This data will be sent as it is to the child tunnel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiveMessage(bytes memory inputData)"),": This function needs to be called to receive the message emitted by ",(0,r.kt)("inlineCode",{parentName:"li"},"ChildTunnel"),". The proof of transaction needs to be provided as calldata. An example script to generate proof using ",(0,r.kt)("strong",{parentName:"li"},"matic.js")," is included below.")),(0,r.kt)("h2",{id:"child-tunnel-contract"},"Child Tunnel Contract"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FxBaseChildTunnel")," contract from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdkanani/fx-portal/blob/main/contracts/tunnel/FxBaseChildTunnel.sol"},"here"),". This contract gives access to following functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function _processMessageFromRoot(uint256 stateId, address sender, bytes memory data)"),": This is a virtual function that needs to implement the logic to handle messages sent from the ",(0,r.kt)("inlineCode",{parentName:"li"},"RootTunnel"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function _sendMessageToRoot(bytes memory message)"),": This function can be called internally to send any bytes message to the root tunnel.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You need to inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"FxBaseRootTunnel")," contract in your root contract on Ethereum. As an example, you can follow this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdkanani/fx-portal/blob/main/contracts/examples/state-transfer/FxStateRootTunnel.sol"},"contract")," . Similarly, inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"FxBaseChildTunnel")," contract in your child on Polygon. Follow this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdkanani/fx-portal/blob/main/contracts/examples/state-transfer/FxStateChildTunnel.sol"},"contract")," as an example.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"While deploying your root contract on"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Goerli Testnet"),", pass the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"_checkpointManager")," as ",(0,r.kt)("strong",{parentName:"p"},"0x2890bA17EfE978480615e330ecB65333b880928e")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_fxRoot")," as ",(0,r.kt)("strong",{parentName:"p"},"0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ethereum Mainnet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_checkpointManager")," is ",(0,r.kt)("strong",{parentName:"p"},"0x86e4dc95c7fbdbf52e33d563bbdb00823894c287")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_fxRoot")," is ",(0,r.kt)("strong",{parentName:"p"},"0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For deploying the child contract on ",(0,r.kt)("strong",{parentName:"p"},"Mumbai testnet"),", pass ",(0,r.kt)("strong",{parentName:"p"},"0xCf73231F28B7331BBe3124B907840A94851f9f11")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"_fxChild")," in constructor. For ",(0,r.kt)("strong",{parentName:"p"},"Polygon mainnet,")," ",(0,r.kt)("inlineCode",{parentName:"p"},"_fxChild")," will be ",(0,r.kt)("strong",{parentName:"p"},"0x8397259c983751DAf40400790063935a11afa28a"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"setFxChildTunnel")," on deployed root tunnel with the address of child tunnel. Example: ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/tx/0x79cd30ace561a226258918b56ce098a08ce0c70707a80bba91197f127a48b5c2"},"0x79cd30ace561a226258918b56ce098a08ce0c70707a80bba91197f127a48b5c2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"setFxRootTunnel")," on deployed child tunnel with address of root tunnel. Example: ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/tx/0xffd0cda35a8c3fd6d8c1c04cd79a27b7e5e00cfc2ffc4b864d2b45a8bb7e98b8/internal-transactions"},"0xffd0cda35a8c3fd6d8c1c04cd79a27b7e5e00cfc2ffc4b864d2b45a8bb7e98b8")))),(0,r.kt)("h2",{id:"example-contracts-of-state-transfer-bridge"},"Example Contracts of State Transfer Bridge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contracts"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jdkanani/fx-portal/tree/main/contracts/tunnel"},"Fx-Portal Github Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Goerli:")," ",(0,r.kt)("a",{parentName:"li",href:"https://goerli.etherscan.io/address/0xc4432e7dab6c1b43f4dc38ad2a594ca448aec9af"},"0xc4432e7dab6c1b43f4dc38ad2a594ca448aec9af")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mumbai:")," ",(0,r.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/address/0xa0060Cc969d760c3FA85844676fB654Bba693C22/transactions"},"0xa0060Cc969d760c3FA85844676fB654Bba693C22"))),(0,r.kt)("h2",{id:"state-transfer-from-ethereum--polygon"},"State Transfer from Ethereum ","\u2192"," Polygon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need to call ",(0,r.kt)("inlineCode",{parentName:"li"},"_sendMessageToChild()")," internally in your root contract and pass the data as an argument to be sent to Polygon. Example: ",(0,r.kt)("a",{parentName:"li",href:"https://goerli.etherscan.io/tx/0x28705fcae757a0c88694bd167cb94a2696a0bc9a645eb4ae20cff960537644c1"},"0x28705fcae757a0c88694bd167cb94a2696a0bc9a645eb4ae20cff960537644c1")),(0,r.kt)("li",{parentName:"ul"},"In your child contract, implement ",(0,r.kt)("inlineCode",{parentName:"li"},"_processMessageFromRoot()")," virtual function in ",(0,r.kt)("inlineCode",{parentName:"li"},"FxBaseChildTunnel")," to retrieve data from Ethereum. The data will be received automatically from the state receiver when the state is synced.")),(0,r.kt)("h2",{id:"state-transfer-from-polygon--ethereum"},"State Transfer from Polygon ","\u2192"," Ethereum"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"_sendMessageToRoot()")," internally in your child contract with data as a parameter to be sent to Ethereum. Example: ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/tx/0x3cc9f7e675bb4f6af87ee99947bf24c38cbffa0b933d8c981644a2f2b550e66a/logs"},"0x3cc9f7e675bb4f6af87ee99947bf24c38cbffa0b933d8c981644a2f2b550e66a")),(0,r.kt)("p",{parentName:"li"},"Note the transaction hash as it will be used to generate proof after it has been included as a checkpoint.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Proof Generation to complete the exit on root chain"),": Generate the proof using the ",(0,r.kt)("strong",{parentName:"p"},"tx hash")," and ",(0,r.kt)("strong",{parentName:"p"},"MESSAGE_SENT_EVENT_SIG"),". To generate the proof, you can either use the proof generation API hosted by Polygon or you can also spin up your own proof generation API by following the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/proof-generation-api"},"here"),"."),(0,r.kt)("p",{parentName:"li"},"The proof generation endpoint hosted by Polygon is available ",(0,r.kt)("a",{parentName:"p",href:"https://apis.matic.network/api/v1/matic/exit-payload/%7BburnTxHash%7D?eventSignature=%7BeventSignature%7D"},"here"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"burnTxHash")," is the transaction hash of the ",(0,r.kt)("inlineCode",{parentName:"li"},"_sendMessageToRoot()")," transaction you initiated on Polygon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eventSignature")," is the event signature of the event emitted by the ",(0,r.kt)("inlineCode",{parentName:"li"},"_sendMessageToRoot()")," function. The event signature for the MESSAGE_SENT_EVENT_SIG is ",(0,r.kt)("inlineCode",{parentName:"li"},"0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036"),".")),(0,r.kt)("p",{parentName:"li"},"The proof generation API usage examples for the Mainnet and Testnet are as follows:-"),(0,r.kt)("p",{parentName:"li"},"\u2192"," ",(0,r.kt)("a",{parentName:"p",href:"https://apis.matic.network/api/v1/mumbai/exit-payload/0x4756b76a9611cffee3d2eb645819e988c34615621ea256f818ab788d81e1f838?eventSignature=0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036"},"Mumbai Testnet Proof generation")),(0,r.kt)("p",{parentName:"li"},"\u2192"," ",(0,r.kt)("a",{parentName:"p",href:"https://apis.matic.network/api/v1/matic/exit-payload/0x70bb6dbee84bd4ef1cd1891c666733d0803d81ac762ff7fdc4726e4525c1e23b?eventSignature=0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036"},"Polygon Mainnet Proof generation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"_processMessageFromChild()")," in your root contract.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the generated proof as an input to ",(0,r.kt)("inlineCode",{parentName:"p"},"receiveMessage()")," to retrieve data sent from child tunnel into your contract. Example: ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/tx/0x436dcd500659bea715a09d9257295ddc21290769daeea7f0b666166ef75e3515"},"0x436dcd500659bea715a09d9257295ddc21290769daeea7f0b666166ef75e3515")," )"))))}u.isMDXComponent=!0}}]);