"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[65858],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=c(n),m=o,u=k["".concat(d,".").concat(m)]||k[m]||g[m]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return k}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(44996),l=["components"],d={id:"delegate",title:"How to Delegate",description:"Learn how to become a delegator on the Polygon Network.",keywords:["docs","matic","polygon","how to delegate","validator","stake"],image:"https://wiki.polygon.technology/img/polygon-logo.png",slug:"delegate"},c="How to Delegate",s={unversionedId:"maintain/delegate/delegate",id:"maintain/delegate/delegate",title:"How to Delegate",description:"Learn how to become a delegator on the Polygon Network.",source:"@site/docs/maintain/delegate/delegate.md",sourceDirName:"maintain/delegate",slug:"/maintain/delegate/delegate",permalink:"/matic-docs/docs/maintain/delegate/delegate",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/maintain/delegate/delegate.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"delegate",title:"How to Delegate",description:"Learn how to become a delegator on the Polygon Network.",keywords:["docs","matic","polygon","how to delegate","validator","stake"],image:"https://wiki.polygon.technology/img/polygon-logo.png",slug:"delegate"},sidebar:"delegate"},g={},k=[{value:"Access the dashboard",id:"access-the-dashboard",level:2},{value:"Delegate to a Validator",id:"delegate-to-a-validator",level:2},{value:"View your delegations",id:"view-your-delegations",level:2},{value:"Withdraw rewards",id:"withdraw-rewards",level:2},{value:"Restake rewards",id:"restake-rewards",level:2},{value:"Unbond from a Validator",id:"unbond-from-a-validator",level:2},{value:"Move stake from one node to another node",id:"move-stake-from-one-node-to-another-node",level:2}],m={toc:k};function u(e){var t=e.components,d=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-delegate"},"How to Delegate"),(0,r.kt)("p",null,"This is a step-by-step guide to help you become a ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#delegator"},"delegator")," on the Polygon Network."),(0,r.kt)("p",null,"The only prerequisite is to have your MATIC tokens and ETH on the Ethereum mainnet address."),(0,r.kt)("h2",{id:"access-the-dashboard"},"Access the dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In your wallet (e.g. MetaMask), choose the Ethereum mainnet.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/choose-eth-mainnet.png"),width:"300"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Log in to ",(0,r.kt)("a",{parentName:"li",href:"https://staking.polygon.technology/"},"Polygon Staking"),"."),(0,r.kt)("li",{parentName:"ol"},"Once you log in, you will see some overall statistics along with the list of validators.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(71941).Z,width:"1372",height:"1016"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are a validator, use a different non-validating address to log in as delegator.")),(0,r.kt)("h2",{id:"delegate-to-a-validator"},"Delegate to a Validator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Become a Delegator")," or scroll down to a specific validator and click ",(0,r.kt)("strong",{parentName:"li"},"Delegate"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(71941).Z,width:"1372",height:"1016"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Provide the amount of MATIC to delegate.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/delegate.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Approve the delegation transaction and click ",(0,r.kt)("strong",{parentName:"li"},"Delegate"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/delegate2.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"After the delegation transaction completes, you will see the ",(0,r.kt)("strong",{parentName:"p"},"Delegation Completed")," message."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/delegate3.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"view-your-delegations"},"View your delegations"),(0,r.kt)("p",null,"To view your delegations, click ",(0,r.kt)("a",{parentName:"p",href:"https://staking.polygon.technology/account"},"My Account"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(62032).Z,width:"901",height:"679"})),(0,r.kt)("h2",{id:"withdraw-rewards"},"Withdraw rewards"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://staking.polygon.technology/account"},"My Account"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/click-my-account.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Under your delegated validator, click ",(0,r.kt)("strong",{parentName:"li"},"Withdraw Reward"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/withdraw-reward.png"),width:"800"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"This will withdraw the MATIC token rewards to your Ethereum address."),(0,r.kt)("h2",{id:"restake-rewards"},"Restake rewards"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://staking.polygon.technology/account"},"My Account"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/click-my-account.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Under your delegated validator, click ",(0,r.kt)("strong",{parentName:"li"},"Restake Reward"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/restake-rewards.png"),width:"800"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"This will restake the MATIC token rewards to the validator and increase your delegation stake."),(0,r.kt)("h2",{id:"unbond-from-a-validator"},"Unbond from a Validator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://staking.polygon.technology/account"},"My Account"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/click-my-account.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Under your delegated validator, click ",(0,r.kt)("strong",{parentName:"li"},"Unbond"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/unbond-from-validator.png"),width:"800"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"This will withdraw your rewards from the validator and your entire stake from the validator."),(0,r.kt)("p",null,"Your withdrawn rewards will show up immediately on your Ethereum account."),(0,r.kt)("p",null,"Your withdrawn stake funds will be locked for 80 ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#checkpoint-transaction"},"checkpoints"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/unbond.png"),width:"500"})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The fund locking for the unbonding period is in place to ensure there is no malicious behaviour on the network.")),(0,r.kt)("h2",{id:"move-stake-from-one-node-to-another-node"},"Move stake from one node to another node"),(0,r.kt)("p",null,"Moving stake from one node to another node is a single transaction. There are no delays or unbonding periods during this event."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to the ",(0,r.kt)("a",{parentName:"li",href:"https://wallet.polygon.technology/staking/my-account"},"My Account")," on the Staking dashboard."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Move Stake")," under your delegated validator."),(0,r.kt)("li",{parentName:"ol"},"Select an external validator and click ",(0,r.kt)("strong",{parentName:"li"},"Stake here"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/move.png"),width:"1500"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Provide the stake amount and click ",(0,r.kt)("strong",{parentName:"li"},"Move Stake"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{align:"center",src:(0,i.Z)("/img/staking/move2.png"),width:"400"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"This will move the stake. The dashboard will update after 12 block confirmations."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Moving stake is allowed between any nodes. The only exception is moving stake from one Foundation node to another Foundation node which is not allowed.")))}u.isMDXComponent=!0},71941:function(e,t,n){t.Z=n.p+"assets/images/home-d3253dd16dff559b3fe4212aa32aa518.png"},62032:function(e,t,n){t.Z=n.p+"assets/images/myAccount-6de8b57d5a8d159acebd2f109b023ac7.png"}}]);