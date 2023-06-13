"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[8954],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(o),d=n,u=f["".concat(c,".").concat(d)]||f[d]||h[d]||r;return o?a.createElement(u,i(i({ref:t},p),{},{components:o})):a.createElement(u,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1162:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={id:"what-is-proof-of-stake",title:"What is Proof of Stake?",description:"A consensus algorithm reliant to validators.",keywords:["docs","matic","polygon","stake","delegate","validate","pos"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},c="Proof of Stake (PoS)",l={unversionedId:"home/polygon-basics/what-is-proof-of-stake",id:"home/polygon-basics/what-is-proof-of-stake",title:"What is Proof of Stake?",description:"A consensus algorithm reliant to validators.",source:"@site/docs/home/polygon-basics/what-is-proof-of-stake.md",sourceDirName:"home/polygon-basics",slug:"/home/polygon-basics/what-is-proof-of-stake",permalink:"/matic-docs/docs/home/polygon-basics/what-is-proof-of-stake",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/home/polygon-basics/what-is-proof-of-stake.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"what-is-proof-of-stake",title:"What is Proof of Stake?",description:"A consensus algorithm reliant to validators.",keywords:["docs","matic","polygon","stake","delegate","validate","pos"],image:"https://wiki.polygon.technology/img/polygon-logo.png"}},p={},h=[],f={toc:h};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proof-of-stake-pos"},"Proof of Stake (PoS)"),(0,r.kt)("p",null,"Proof of Stake (PoS) is a category of consensus algorithms for public blockchains that depend on a validator's economic ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain/glossary#staking"},"stake")," in the network."),(0,r.kt)("p",null,"In Proof of Work (PoW) based public blockchains, the algorithm rewards participants who solve cryptographic puzzles to validate transactions and create new blocks. PoW blockchain examples: Bitcoin, earlier Ethereum."),(0,r.kt)("p",null,"In PoS-based public blockchains, a set of validators take turns proposing and voting on the next block. The weight of each validator's vote depends on the size of its deposit \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain/glossary#staking"},"stake"),". Significant advantages of PoS include security, reduced risk of centralization, and energy efficiency. PoS blockchain examples: Eth2, Polygon."),(0,r.kt)("p",null,"In general, a PoS algorithm looks as follows. The blockchain keeps track of a set of validators, and anyone who holds the blockchain's base cryptocurrency (in Ethereum's case, ether) can become a validator by sending a special type of transaction that locks up their ether into a deposit. The process of creating and agreeing to new blocks is then done through a consensus algorithm that all current validators can participate in."),(0,r.kt)("p",null,'There are many kinds of consensus algorithms, and many ways to assign rewards to validators who participate in the consensus algorithm, so there are many "flavors" of proof of stake. From an algorithmic perspective, there are two major types: chain-based PoS and\xa0',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Byzantine_fault_tolerance"},"BFT"),"-style PoS."),(0,r.kt)("p",null,"In\xa0",(0,r.kt)("strong",{parentName:"p"},"chain-based proof of stake"),", the algorithm pseudo-randomly selects a validator during each time slot (e.g. every period of 10 seconds might be a time slot), and assigns that validator the right to create a single block, and this block must point to some previous block (normally the block at the end of the previously longest chain), and so over time most blocks converge into a single constantly growing chain."),(0,r.kt)("p",null,"In\xa0",(0,r.kt)("strong",{parentName:"p"},"BFT-style proof of stake"),", validators are\xa0",(0,r.kt)("strong",{parentName:"p"},"randomly"),"\xa0assigned the right to\xa0",(0,r.kt)("em",{parentName:"p"},"propose"),"\xa0blocks, but\xa0",(0,r.kt)("em",{parentName:"p"},"agreeing on which block is canonical"),'\xa0is done through a multi-round process where every validator sends a "vote" for some specific block during each round, and at the end of the process all (honest and online) validators permanently agree on whether or not any given block is part of the chain. Note that blocks may still be\xa0',(0,r.kt)("em",{parentName:"p"},"chained together"),"; the key difference is that consensus on a block can come within one block, and does not depend on the length or size of the chain after it."),(0,r.kt)("p",null,"For more details, refer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ"},"https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ"),"."),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/maintain/glossary#delegator"},"Delegator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/maintain/glossary#validator"},"Validator"))))}d.isMDXComponent=!0}}]);