"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[42734],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(44996),s=["components"],l={id:"plasma-using-metamask",title:"Plasma Using Metamask",description:"Plasma token transfer tutorial using metamask.",keywords:["docs","matic","polygon","plasma","metamask","token transfer"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},c=void 0,p={unversionedId:"develop/plasma-using-metamask",id:"develop/plasma-using-metamask",title:"Plasma Using Metamask",description:"Plasma token transfer tutorial using metamask.",source:"@site/docs/develop/plasma-using-metamask.md",sourceDirName:"develop",slug:"/develop/plasma-using-metamask",permalink:"/matic-docs/docs/develop/plasma-using-metamask",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/plasma-using-metamask.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"plasma-using-metamask",title:"Plasma Using Metamask",description:"Plasma token transfer tutorial using metamask.",keywords:["docs","matic","polygon","plasma","metamask","token transfer"],image:"https://wiki.polygon.technology/img/polygon-logo.png"}},d={},m=[{value:"Example using Plasma ERC20",id:"example-using-plasma-erc20",level:2},{value:"Deposit",id:"deposit",level:3},{value:"Transfer",id:"transfer",level:3},{value:"Initiate Withdraw",id:"initiate-withdraw",level:3},{value:"Confirm Withdraw",id:"confirm-withdraw",level:3},{value:"Withdraw Exit",id:"withdraw-exit",level:3}],u={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial is a brief introduction on how to transfer tokens between Ethereum and Polygon on Plasma using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"matic.js SDK and Metamask")),". Polygon-Ethereum bridge provides a cross-chain channel using which users can transfer tokens from Ethereum to Polygon and vice-versa. More details on using the bridge can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/ethereum-polygon/plasma/getting-started"},"here"),". This ",(0,o.kt)("strong",{parentName:"p"},"tutorial mainly focuses on using the bridge from a front end perspective"),". We will be using MetaMask for this purpose."),(0,o.kt)("p",null,"The most important thing to be understood from this tutorial is the ",(0,o.kt)("strong",{parentName:"p"},"proper usage of the web3 provider in the matic.js instance")," we create. Whether using PoS or Plasma, certain actions need to be performed on Polygon and some on Ethereum. Due to this reason, ",(0,o.kt)("strong",{parentName:"p"},"different providers are required in different scenarios. Hence correctly setting the providers is necessary.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An example react app that demonstrates the usage of the Plasma and PoS bridge can be found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/maticnetwork/pos-plasma-tutorial"},"here")," ."),(0,o.kt)("li",{parentName:"ol"},"Install the dependencies using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install.")),(0,o.kt)("li",{parentName:"ol"},"Replace the token addresses in src/config.json with your corresponding token addresses")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'posRootERC20: ERC20 root token address on pos bridge\nposChildERC20: ERC20 child token address on pos bridge\nposWETH: PoS Weth\nrootChainWETH: WETH deployed on root chain\nplasmaWETH: Plasma WETH\nplasmaRootERC20: ERC20 root token deployed on plasma\nplasmaChildERC20: ERC20 child token deployed on plasma\nMATIC_RPC: RPC for child chain,\nETHEREUM_RPC: RPC for root chain,\nVERSION: network version,\nNETWORK: "testnet" or "mainnet"\nMATIC_CHAINID: Chain ID of child chain,\nETHEREUM_CHAINID: Chain ID of root chain\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The configuration and key values for Polygon mainnet and mumbai testnet can be found here",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://static.matic.network/network/testnet/mumbai/index.json"},"Mumbai Testnet Config")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://static.matic.network/network/mainnet/v1/index.json"},"Polygon Mainnet Config"))))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run the project using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start"),".")),(0,o.kt)("h2",{id:"example-using-plasma-erc20"},"Example using Plasma ERC20"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For the mainnet, Ethereum is the root chain and Polygon Mainnet is the child chain and for the testnet, Goerli is the root chain and Mumbai is the child chain. The values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file should be set accordingly. Goerli and Mumbai networks are used as the root and child chain in this tutorial.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getMaticPlasmaParent()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getMaticPlasmaChild()")," are used to initialize the root and child chain matic.js objects for the Plasma bridge. Code snippets mentioned below, under each step, can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/pos-plasma-tutorial"},"tutorial")," repo as well."),(0,o.kt)("h3",{id:"deposit"},"Deposit"),(0,o.kt)("p",null,"To deposit ERC20 tokens, an approve function call has to be made before calling the deposit function. Upon clicking the deposit button, MetaMask will first ask to approve the transfer of a specified number of tokens and after the confirmation of the approval transaction, MetaMask will ask to confirm the deposit transaction. Make sure the root chain network is selected in MetaMask for deposit functionality."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const erc20RootToken = plasmaClient.erc20(<root token address>, true);\n\n// approve 100 amount\nconst approveResult = await erc20Token.approve(100);\n")),(0,o.kt)("p",null,"During deposit of ERC20 tokens, providers are specified as below"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maticProvider: maticprovider")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parentProvider: window.web3")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Deposits from Ethereum to Polygon happen using a state sync mechanism and takes about ~22-30 minutes After waiting for this time interval, it is recommended to check the balance using web3.js/matic.js library or using Metamask."),(0,o.kt)("p",{parentName:"admonition"},"The explorer will show the balance only if at least one asset transfer has happened on the child chain. This ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/ethereum-polygon/plasma/deposit-withdraw-event-plasma/"},"link")," explains how to track the deposit events.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,r.Z)("img/plasma-using-metamask/deposit.png")})),(0,o.kt)("h3",{id:"transfer"},"Transfer"),(0,o.kt)("p",null,"Once deposited, the token can be transfered to any other account on the Matic chain. During Transfer, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"maticProvider")," needs to be set as ",(0,o.kt)("inlineCode",{parentName:"p"},"window.web3"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const erc20Token = plasmaClient.erc20(<token address>);\n\nconst result = await erc20Token.transfer(<amount>,<to>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")),(0,o.kt)("p",null,"MATIC is native token on Polygon. We support transfer of MATIC tokens without any token address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// initialize token with null means use MATIC tokens\nconst erc20Token = plasmaClient.erc20(null);\n\nconst result = await erc20Token.transfer(<amount>,<to>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")),(0,o.kt)("h3",{id:"initiate-withdraw"},"Initiate Withdraw"),(0,o.kt)("p",null,"For withdrawing tokens back to root chain, tokens have to be first burnt on child chain. Make sure child chain network is selected in metamask."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const erc20ChildToken = plasmaClient.erc20(<child token address>);\n\n// start withdraw process for 100 amount\nconst result = await erc20ChildToken.withdrawStart(100);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")),(0,o.kt)("p",null,"During burning of ERC20 tokens, providers are specified as below"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maticProvider: window.web3")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parentProvider: ethereumprovider")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,r.Z)("img/plasma-using-metamask/burn.png")})),(0,o.kt)("h3",{id:"confirm-withdraw"},"Confirm Withdraw"),(0,o.kt)("p",null,"Withdrawal of funds is initiated from the child chain. A checkpoint interval of 30 mins (around 10 minutes for testnet) is set, where all the blocks on the Polygon block layer are validated. Once the checkpoint is submitted to the root chain, the withdraw function can be triggered."),(0,o.kt)("p",null,"Once the withdraw function is successful, an NFT Exit (ERC721) token is created. The withdrawn funds can be claimed back to your account on the root chain using a process-exit which is explained in the next step."),(0,o.kt)("p",null,"In the confirm withdraw step, providers are specified as below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maticProvider: maticprovider")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parentProvider: window.web3")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_withdrawConfirm_")," function in Plasma bridge involves block proof generation by querying the child chain multiple times and hence it may take 4-5 seconds for MetaMask to popup as it consumes time to build the transaction object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const erc20Token = plasmaClient.erc20(<token address>, true);\n\nconst result = await erc20Token.withdrawConfirm(<burn tx hash>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"_withdrawConfirmFaster_")," method which is faster because it generates proof in the backend. Fore more details to use this please visit this ",(0,o.kt)("a",{parentName:"p",href:"https://maticnetwork.github.io/matic.js/docs/plasma/erc20/withdraw-confirm-faster/"},"guide"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,r.Z)("img/plasma-using-metamask/confirmWithdraw.png")})),(0,o.kt)("h3",{id:"withdraw-exit"},"Withdraw Exit"),(0,o.kt)("p",null,"The exit process takes place on the root chain and upon confirmation on the root chain, an equivalent amount of tokens burned on child chain is released to the users account. Make sure the root chain network is selected in Metamask."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const erc20RootToken = plasmaClient.erc20(<root token address>, true);\n\nconst result = await erc20Token.withdrawExit();\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n")),(0,o.kt)("p",null,"In the process exit step, providers are specified as below:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"maticProvider: maticprovider")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parentProvider: window.web3")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,r.Z)("img/plasma-using-metamask/Exit.png")})))}h.isMDXComponent=!0}}]);