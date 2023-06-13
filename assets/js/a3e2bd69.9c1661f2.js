"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[55],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"truffle",title:"Deploy a Smart Contract Using Truffle",sidebar_label:"Using Truffle",description:"Use Truffle to deploy a Smart Contract on Polygon",keywords:["docs","matic","polygon","smart","contract","truffle","deploy","polygonscan"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,c={unversionedId:"develop/truffle",id:"develop/truffle",title:"Deploy a Smart Contract Using Truffle",description:"Use Truffle to deploy a Smart Contract on Polygon",source:"@site/docs/develop/truffle.md",sourceDirName:"develop",slug:"/develop/truffle",permalink:"/matic-docs/docs/develop/truffle",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/truffle.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"truffle",title:"Deploy a Smart Contract Using Truffle",sidebar_label:"Using Truffle",description:"Use Truffle to deploy a Smart Contract on Polygon",keywords:["docs","matic","polygon","smart","contract","truffle","deploy","polygonscan"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Using Remix",permalink:"/matic-docs/docs/develop/remix"},next:{title:"Using Hardhat",permalink:"/matic-docs/docs/develop/hardhat"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"What you will do",id:"what-you-will-do",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Project",id:"creating-a-project",level:2},{value:"MetaCoin Project",id:"metacoin-project",level:3},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Compiling the Contract",id:"compiling-the-contract",level:3},{value:"Configuring the Smart Contract",id:"configuring-the-smart-contract",level:3},{value:"Deploying on Polygon Network",id:"deploying-on-polygon-network",level:3}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle")," is a blockchain development environment, which you can use to create and test smart contracts by leveraging the Ethereum Virtual Machine. This guide aims at teaching how to create a smart contract using Truffle and deploying it on the EVM-compatible Polygon Network."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This tutorial is an adapted version of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/quickstart"},(0,a.kt)("ins",null,"Truffle quickstart guide"))," article.")),(0,a.kt)("h2",{id:"what-you-will-do"},"What you will do"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install and set up Truffle"),(0,a.kt)("li",{parentName:"ul"},"Deploy contract on Polygon Network"),(0,a.kt)("li",{parentName:"ul"},"Check the deployment status on Polygonscan")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"There are a few technical requirements before we start. Please install the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v8+ LTS and npm"),"\xa0(packaged with Node)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,a.kt)("p",null,"Once we have those installed, we only need one command to install Truffle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install -g truffle\n")),(0,a.kt)("p",null,"To verify that Truffle is installed properly, type\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"truffle version"),"\xa0on a terminal. If you see an error, make sure that the npm modules are added to your path."),(0,a.kt)("h2",{id:"creating-a-project"},"Creating a Project"),(0,a.kt)("h3",{id:"metacoin-project"},"MetaCoin Project"),(0,a.kt)("p",null,"We will use one of Truffle's boilerplates which you can find on their ",(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/boxes/"},"Truffle Boxes")," page. ",(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/boxes/metacoin/"},"MetaCoin box")," creates a token that can be transferred between accounts."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start by creating a new directory for this Truffle project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir MetaCoin\ncd MetaCoin\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the MetaCoin box:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle unbox metacoin\n")))),(0,a.kt)("p",null,"With that last step, you have created a Truffle project cointaining folders with contracts, deployment, testing, and configuration files."),(0,a.kt)("p",null,"This is the smart contract data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"metacoin.sol")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="metacoin.sol"',title:'"metacoin.sol"'},'// SPDX-License-Identifier: MIT\n// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0\npragma solidity ^0.8.13;\n\nimport "./ConvertLib.sol";\n\n// This is just a simple example of a coin-like contract.\n// It is not ERC20 compatible and cannot be expected to talk to other\n// coin/token contracts.\n\ncontract MetaCoin {\n    mapping (address => uint) balances;\n\n    event Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n    constructor() {\n        balances[tx.origin] = 10000;\n    }\n\n    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n        if (balances[msg.sender] < amount) return false;\n        balances[msg.sender] -= amount;\n        balances[receiver] += amount;\n        emit Transfer(msg.sender, receiver, amount);\n        return true;\n    }\n\n    function getBalanceInEth(address addr) public view returns(uint){\n        return ConvertLib.convert(getBalance(addr),2);\n    }\n\n    function getBalance(address addr) public view returns(uint) {\n        return balances[addr];\n    }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Notice that ConvertLib is being imported just after the ",(0,a.kt)("inlineCode",{parentName:"p"},"pragma")," statement. In this project, there are actually two smart contracts that will be deployed at the end: one is Metacoin, contatining all the send and balance logic; the other is ConvertLib, a library used to convert values.")),(0,a.kt)("h3",{id:"testing-the-contract"},"Testing the Contract"),(0,a.kt)("p",null,"You can run Solidity and Javascript tests."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In a terminal, run the Solidity test:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle test ./test/TestMetaCoin.sol\n")),(0,a.kt)("p",{parentName:"li"},"You should see the following output:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(24526).Z,width:"666",height:"187"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the JavaScript test:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle test ./test/metacoin.js\n")),(0,a.kt)("p",{parentName:"li"},"You should see the following output:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(56623).Z,width:"766",height:"198"})))),(0,a.kt)("h3",{id:"compiling-the-contract"},"Compiling the Contract"),(0,a.kt)("p",null,"Compile the smart contract using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle compile\n")),(0,a.kt)("p",null,"You will see the following output:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(59104).Z,width:"969",height:"178"})),(0,a.kt)("h3",{id:"configuring-the-smart-contract"},"Configuring the Smart Contract"),(0,a.kt)("p",null,"Before actually depolying the contract, you need to set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," file, inserting network and compilers data."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," and update the file with Polygon Mumbai network details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="truffle-config.js"',title:'"truffle-config.js"'},'const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\nconst fs = require(\'fs\');\nconst mnemonic = fs.readFileSync(".secret").toString().trim();\n\nmodule.exports = {\n  networks: {\n    development: {\n      host: "127.0.0.1",     // Localhost (default: none)\n      port: 8545,            // Standard Ethereum port (default: none)\n      network_id: "*",       // Any network (default: none)\n    },\n    matic: {\n      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),\n      network_id: 80001,\n      confirmations: 2,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n  },\n\n  // Set default mocha options here, use special reporters etc.\n  mocha: {\n    // timeout: 100000\n  },\n\n  // Configure your compilers\n  compilers: {\n    solc: {\n        version: "0.8.13",\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Note that it requires mnemonic to be passed in for ",(0,a.kt)("inlineCode",{parentName:"p"},"maticProvider"),". This is the seed phrase (or private key) for the account you would like to deploy from. Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},".secret")," file in the root directory and enter your 12-word mnemonic seed phrase to get started. To get the seed words from MetaMask wallet, you can go to MetaMask settings, then from the menu, choose ",(0,a.kt)("strong",{parentName:"p"},"Security and Privacy")," where you will see a button that says ",(0,a.kt)("strong",{parentName:"p"},"reveal seed words"),"."),(0,a.kt)("h3",{id:"deploying-on-polygon-network"},"Deploying on Polygon Network"),(0,a.kt)("p",null,"Add MATIC to your wallet using ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"Polygon Faucet"),". Next, run this command in the root folder of the project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"truffle compile\ntruffle deploy --network matic\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(84870).Z,width:"1232",height:"1303"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember your ",(0,a.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction_hash")," and other details provided would differ. Above is just to provide an idea of the structure.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations!\xa0You have successfully deployed a Smart Contract using Truffle.")," Now you can interact with the contract and also check its deployment status on ",(0,a.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/"},"Polygonscan"),"."))}m.isMDXComponent=!0},59104:function(e,t,n){t.Z=n.p+"assets/images/compile-5c7a0a014d71740178bc3411cbf54857.png"},84870:function(e,t,n){t.Z=n.p+"assets/images/deployed-contract-7689de1973f21593be59ecd858987114.png"},24526:function(e,t,n){t.Z=n.p+"assets/images/test1-9c83cd9a0a088e7cc780e3f96b70a27d.png"},56623:function(e,t,n){t.Z=n.p+"assets/images/test2-d14750b3960bb4990a787c1559b62797.png"}}]);