"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[28845],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"erc721",title:"ERC721 Deposit and Withdraw Guide",sidebar_label:"ERC721",description:"Deposit and withdraw ERC721 tokens on the Polygon network.",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"},p=void 0,l={unversionedId:"develop/ethereum-polygon/pos/using-sdk/erc721",id:"develop/ethereum-polygon/pos/using-sdk/erc721",title:"ERC721 Deposit and Withdraw Guide",description:"Deposit and withdraw ERC721 tokens on the Polygon network.",source:"@site/docs/develop/ethereum-polygon/pos/using-sdk/erc721.md",sourceDirName:"develop/ethereum-polygon/pos/using-sdk",slug:"/develop/ethereum-polygon/pos/using-sdk/erc721",permalink:"/matic-docs/docs/develop/ethereum-polygon/pos/using-sdk/erc721",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/pos/using-sdk/erc721.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"erc721",title:"ERC721 Deposit and Withdraw Guide",sidebar_label:"ERC721",description:"Deposit and withdraw ERC721 tokens on the Polygon network.",keywords:["docs","matic"],image:"https://matic.network/banners/matic-network-16x9.png"}},c={},d=[{value:"High Level Flow",id:"high-level-flow",level:2},{value:"Step Details",id:"step-details",level:2},{value:"Approve",id:"approve",level:3},{value:"Deposit",id:"deposit",level:3},{value:"Burn WithdrawStart",id:"burn-withdrawstart",level:3},{value:"Exit",id:"exit",level:3}],h={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Check out the latest ",(0,r.kt)("a",{parentName:"p",href:"https://maticnetwork.github.io/matic.js/docs/pos/erc721/"},"Matic.js Documentation on ERC20"),"."),(0,r.kt)("p",null,"This tutorial uses the Polygon Testnet ( Mumbai ) which is mapped to the Goerli Network to demonstrate the asset transfer to and from the two blockchains. An ",(0,r.kt)("strong",{parentName:"p"},"important thing to be noted")," while following this tutorial is that you should always use a Proxy address whenever it is available. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootChainManagerProxy")," address has to be used for interaction instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootChainManager")," address. The ",(0,r.kt)("strong",{parentName:"p"},"PoS contract addresses, ABI, Test Token Addresses"),", and other deployment details of the PoS bridge contracts can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/ethereum-polygon/pos/deployment"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mapping your assets")," is necessary to integrate the PoS bridge on your application. You can submit a mapping request ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/ethereum-polygon/submit-mapping-request"},"here"),". But for the purpose of this tutorial, we have already deployed the ",(0,r.kt)("strong",{parentName:"p"},"Test tokens")," and mapped them on the PoS bridge. You may need it for trying out the tutorial on your own. You can request the desired Asset from the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"faucet"),". If the test tokens are unavailable on the faucet, do reach us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/0xPolygon"},"discord"),"."),(0,r.kt)("p",null,"In the upcoming tutorial, every step will be explained in detail along with a few code snippets. However, you can always refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic.js/tree/v2.0.2/examples/POS-client"},"repository")," which will have all the ",(0,r.kt)("strong",{parentName:"p"},"example source code")," that can help you to integrate and understand the working of PoS bridge."),(0,r.kt)("h2",{id:"high-level-flow"},"High Level Flow"),(0,r.kt)("p",null,"Deposit ERC721 -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Approve"))," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"ERC721Predicate"))," contract to spend the tokens that have to be deposited."),(0,r.kt)("li",{parentName:"ol"},"Make ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"depositFor"))," call on ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"RootChainManager")),".")),(0,r.kt)("p",null,"Withdraw ERC721 -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Burn"))," tokens on Polygon chain."),(0,r.kt)("li",{parentName:"ol"},"Call the ",(0,r.kt)("inlineCode",{parentName:"li"},"exit")," function on ",(0,r.kt)("inlineCode",{parentName:"li"},"RootChainManager")," to submit proof of burn transaction. This call can be made after the checkpoint is submitted for the block containing the burn transaction.")),(0,r.kt)("h2",{id:"step-details"},"Step Details"),(0,r.kt)("h3",{id:"approve"},"Approve"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maticnetwork.github.io/matic.js/docs/pos/erc721/approve/"},"Approve Method")," is a normal ERC721 approval so that ",(0,r.kt)("inlineCode",{parentName:"p"},"ERC721Predicate")," can call ",(0,r.kt)("inlineCode",{parentName:"p"},"transferFrom")," function. Polygon PoS client exposes the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"approve"))," method to make this call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const execute = async () => {\n  const client = await getPOSClient();\n  const erc721RootToken = posClient.erc721(<root token address>,true);\n  const approveResult = await erc721RootToken.approve(<token id>);\n  const txHash = await approveResult.getTransactionHash();\n  const txReceipt = await approveResult.getReceipt();\n}\n")),(0,r.kt)("h3",{id:"deposit"},"Deposit"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maticnetwork.github.io/matic.js/docs/pos/erc721/deposit/"},"Deposit method")," can be done by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"depositFor")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"RootChainManager")," contract. Note that the token needs to be mapped and approved for transfer beforehand. Once the tokens are transferred, the deposit proceeds using the State Sync mechanism. Polygon PoS client exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"depositERC721ForUser")," method to make this call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const execute = async () => {\n  const client = await getPOSClient();\n  const erc721RootToken = posClient.erc721(<root token address>, true);\n  const result = await erc721RootToken.deposit(<token id>, <user address>);\n  const txHash = await result.getTransactionHash();\n  const txReceipt = await result.getReceipt();\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Deposits from Ethereum to Polygon happen using the ",(0,r.kt)("strong",{parentName:"p"},"State Sync")," mechanism and this takes about 22-30 minutes. After waiting for this time interval, it is recommended to check the balance using the web3.js/matic.js library or using Metamask. The explorer will show the balance only if at least one asset transfer has happened on the child chain. This ",(0,r.kt)("a",{parentName:"p",href:"docs/develop/ethereum-polygon/pos/deposit-withdraw-event-pos/"},(0,r.kt)("ins",null,"link"))," explains how to track deposit events.")),(0,r.kt)("h3",{id:"burn-withdrawstart"},"Burn WithdrawStart"),(0,r.kt)("p",null,"User can call ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"withdraw"))," function of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ChildToken"))," contract. This function should burn the tokens. Polygon POS client exposes ",(0,r.kt)("a",{parentName:"p",href:"https://maticnetwork.github.io/matic.js/docs/pos/erc721/withdraw-start/"},"withdrawStart method")," to make this call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const execute = async () => {\n  const client = await getPOSClient();\n  const erc721Token = posClient.erc721(<child token address>);\n  const result = await erc721Token.withdrawStart(<token id>);\n  const txHash = await result.getTransactionHash();\n  const txReceipt = await result.getReceipt();\n}\n")),(0,r.kt)("p",null,"Store the transaction hash for this call and use it while generating burn proof."),(0,r.kt)("h3",{id:"exit"},"Exit"),(0,r.kt)("p",null,"Once the checkpoint has been submitted for the block containing the burn transaction, the user should call the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," function of ",(0,r.kt)("inlineCode",{parentName:"p"},"RootChainManager")," contract and submit the proof of burn. Upon submitting valid proof tokens are transferred to the user. Polygon PoS client exposes the  ",(0,r.kt)("inlineCode",{parentName:"p"},"withdrawExit")," method to make this call. This function can be called only after the checkpoint is included in the main chain. The checkpoint inclusion can be tracked by following ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/develop/ethereum-polygon/pos/deposit-withdraw-event-pos#checkpoint-events"},"this guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const execute = async () => {\n  const client = await getPOSClient();\n  const erc721RootToken = posClient.erc721(<root token address>, true);\n  const result = await erc721RootToken.withdrawExit(<burn tx hash>);\n  const txHash = await result.getTransactionHash();\n  const txReceipt = await result.getReceipt();\n}\n")))}u.isMDXComponent=!0}}]);