"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[14421],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,g=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting section for Polygon Edge",keywords:["docs","polygon","edge","troubleshooting"]},s="Troubleshooting",c={unversionedId:"main-edge/troubleshooting",id:"main-edge/troubleshooting",title:"Troubleshooting",description:"Troubleshooting section for Polygon Edge",source:"@site/docs/main-edge/troubleshooting.md",sourceDirName:"main-edge",slug:"/main-edge/troubleshooting",permalink:"/matic-docs/docs/main-edge/troubleshooting",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting section for Polygon Edge",keywords:["docs","polygon","edge","troubleshooting"]}},u={},d=[{value:"<code>method=eth_call err=&quot;invalid signature&quot;</code> error",id:"methodeth_call-errinvalid-signature-error",level:2},{value:"How to get a WebSocket URL",id:"how-to-get-a-websocket-url",level:2},{value:"<code>insufficient funds</code> error when trying to deploy a contract",id:"insufficient-funds-error-when-trying-to-deploy-a-contract",level:2},{value:"ERC20 tokens not released while using Chainbridge",id:"erc20-tokens-not-released-while-using-chainbridge",level:2},{value:"<code>Incorrect fee supplied</code> error when using Chainbridge",id:"incorrect-fee-supplied-error-when-using-chainbridge",level:2}],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h2",{id:"methodeth_call-errinvalid-signature-error"},(0,a.kt)("inlineCode",{parentName:"h2"},'method=eth_call err="invalid signature"')," error"),(0,a.kt)("p",null,"When you are using a wallet to make a transaction with Polygon Edge, please make sure that in your wallet's local network setup:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"chainID")," is the right one. The default ",(0,a.kt)("inlineCode",{parentName:"li"},"chainID")," for Edge is ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),", but it can be customized by using the genesis flag ",(0,a.kt)("inlineCode",{parentName:"li"},"--chain-id"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"genesis [--chain-id CHAIN_ID]\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Make sure that, on the \u201cRPC URL\u201d, field you use the JSON RPC port of the node you are connecting to.")),(0,a.kt)("h2",{id:"how-to-get-a-websocket-url"},"How to get a WebSocket URL"),(0,a.kt)("p",null,"By default, when you run the Polygon Edge, it exposes a WebSocket endpoint based on the chain location.\nThe URL scheme ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://")," is used for HTTPS links, and ",(0,a.kt)("inlineCode",{parentName:"p"},"ws://")," for HTTP."),(0,a.kt)("p",null,"Localhost WebSocket URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ws://<JSON-RPC URL>:<PORT>/ws\n")),(0,a.kt)("p",null,"Please note that the port number depends on the chosen JSON-RPC port for the node."),(0,a.kt)("p",null,"Edgenet WebSocket URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wss://rpc-edgenet.polygon.technology/ws\n")),(0,a.kt)("h2",{id:"insufficient-funds-error-when-trying-to-deploy-a-contract"},(0,a.kt)("inlineCode",{parentName:"h2"},"insufficient funds")," error when trying to deploy a contract"),(0,a.kt)("p",null,"If you get this error, please make sure you have enough funds on the desired address, and the address used is the correct one.",(0,a.kt)("br",null),"\nTo set the premined balance, you can use the genesis flag ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis [--premine ADDRESS:VALUE]")," while generating the genesis file.\nExample of using this flag: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"genesis --premine 0x3956E90e632AEbBF34DEB49b71c28A83Bc029862:1000000000000000000000\n")),(0,a.kt)("p",null,"This premines 1000000000000000000000 WEI to 0x3956E90e632AEbBF34DEB49b71c28A83Bc029862."),(0,a.kt)("h2",{id:"erc20-tokens-not-released-while-using-chainbridge"},"ERC20 tokens not released while using Chainbridge"),(0,a.kt)("p",null,"If you try to transfer ERC20 tokens between Polygon PoS and a local Edge network, and your ERC20 tokens are deposited, also proposal is executed at relayer, but the tokens are not released in your Edge network, please make sure the ERC20 Handler in Polygon Edge chain has enough tokens to release. ",(0,a.kt)("br",null),"\nThe Handler contract in the destination chain must have enough tokens to release for lock-release mode. If you don't have any ERC20 tokens in the ERC20 Handler of your local Edge network, please mint new tokens and transfer them to the ERC20 Handler."),(0,a.kt)("h2",{id:"incorrect-fee-supplied-error-when-using-chainbridge"},(0,a.kt)("inlineCode",{parentName:"h2"},"Incorrect fee supplied")," error when using Chainbridge"),(0,a.kt)("p",null,"You might get this error when trying to transfer ERC20 tokens between Mumbai Polygon PoS chain and a local Polygon Edge setup. This error appears when you set the fee on deploying using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--fee")," flag, but you don't set the same value in the deposit transaction.\nYou can use the below command to change the fee:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," $ cb-sol-cli admin set-fee --bridge <BRIDGE_ADDRESS> --fee 0 --url <JSON_RPC_URL> --privateKey <PRIVATE_KEY>\n")),(0,a.kt)("p",null,"You can find more information about this flag ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/chainbridge-deploy/blob/main/cb-sol-cli/docs/deploy.md"},"here"),"."))}p.isMDXComponent=!0}}]);