"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[69102],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},53131:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=a(44996),l=["components"],s={id:"architecture",title:"Architecture",description:"Ethereum, Heimdall and Bor layers",keywords:["docs","matic","polygon","architecture","validator"],slug:"architecture",image:"https://wiki.polygon.technology/img/polygon-logo.png"},c=void 0,d={unversionedId:"maintain/validator/architecture",id:"maintain/validator/architecture",title:"Architecture",description:"Ethereum, Heimdall and Bor layers",source:"@site/docs/maintain/validator/architecture.md",sourceDirName:"maintain/validator",slug:"/maintain/validator/architecture",permalink:"/matic-docs/docs/maintain/validator/architecture",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/maintain/validator/architecture.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"architecture",title:"Architecture",description:"Ethereum, Heimdall and Bor layers",keywords:["docs","matic","polygon","architecture","validator"],slug:"architecture",image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"maintain",previous:{title:"Validator Overview",permalink:"/matic-docs/docs/category/validator-overview"},next:{title:"Responsibilities",permalink:"/matic-docs/docs/maintain/validator/responsibilities"}},m={},p=[{value:"Staking and Plasma smart contracts on Ethereum",id:"staking-and-plasma-smart-contracts-on-ethereum",level:2},{value:"Heimdall (validation layer)",id:"heimdall-validation-layer",level:2},{value:"Bor (block producer layer)",id:"bor-block-producer-layer",level:2}],u={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Polygon Network is broadly divided into three layers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ethereum layer")," \u2014 a set of contracts on the Ethereum mainnet."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Heimdall layer")," \u2014 a set of proof-of-stake Heimdall nodes running in parallel to the Ethereum mainnet, monitoring the set of staking contracts deployed on the Ethereum mainnet, and committing the Polygon Network checkpoints to the Ethereum mainnet. Heimdall is based on Tendermint."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bor layer")," \u2014 a set of block-producing Bor nodes shuffled by Heimdall nodes. Bor is based on Go Ethereum.")),(0,n.kt)("img",{src:(0,i.Z)("img/staking/architecture.png")}),(0,n.kt)("h2",{id:"staking-and-plasma-smart-contracts-on-ethereum"},"Staking and Plasma smart contracts on Ethereum"),(0,n.kt)("p",null,"To enable the ",(0,n.kt)("a",{parentName:"p",href:"/docs/home/polygon-basics/what-is-proof-of-stake"},"Proof of Stake (PoS)")," mechanism on Polygon, the system employs a set of ",(0,n.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#staking"},"staking")," management contracts on the Ethereum mainnet."),(0,n.kt)("p",null,"The staking contracts implement the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ability for anyone to stake MATIC tokens on the staking contracts on the Ethereum mainnet and join the system as a ",(0,n.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/glossary#validator"},"validator"),"."),(0,n.kt)("li",{parentName:"ul"},"Earn staking rewards for validating state transitions on the Polygon Network."),(0,n.kt)("li",{parentName:"ul"},"Save ",(0,n.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/glossary#checkpoint-transaction"},"checkpoints")," on the Ethereum mainnet.")),(0,n.kt)("p",null,"The PoS mechanism also acts as a mitigation to the data unavailability problem for the Polygon sidechains."),(0,n.kt)("h2",{id:"heimdall-validation-layer"},"Heimdall (validation layer)"),(0,n.kt)("p",null,"Heimdall layer handles the aggregation of blocks produced by ",(0,n.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#bor"},"Bor")," into a Merkle tree and publishing the Merkle root periodically to the root chain. The periodic publishing of snapshots of the Bor sidechain are called ",(0,n.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#checkpoint-transaction"},"checkpoints"),"."),(0,n.kt)("p",null,"For every few blocks on Bor, a validator on the Heimdall layer:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Validates all the blocks since the last checkpoint."),(0,n.kt)("li",{parentName:"ol"},"Creates a Merkle tree of the block hashes."),(0,n.kt)("li",{parentName:"ol"},"Publishes the Merkle root hash to the Ethereum mainnet.")),(0,n.kt)("p",null,"Checkpoints are important for two reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Providing finality on the root chain."),(0,n.kt)("li",{parentName:"ol"},"Providing proof of burn in withdrawal of assets.")),(0,n.kt)("p",null,"An overview of the process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A subset of active validators from the pool is selected to act as ",(0,n.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/glossary#block-producer"},"block producers")," for a ",(0,n.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/glossary#span"},"span"),". These block producers are responsible for creating blocks and broadcasting the created blocks on the network."),(0,n.kt)("li",{parentName:"ul"},"A checkpoint includes the Merkle root hash of all blocks created during any given interval. All nodes validate the Merkle root hash and attach their signature to it."),(0,n.kt)("li",{parentName:"ul"},"A selected ",(0,n.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/glossary#proposer"},"proposer")," from the validator set is responsible for collecting all signatures for a particular checkpoint and committing the checkpoint on the Ethereum mainnet."),(0,n.kt)("li",{parentName:"ul"},"The responsibility of creating blocks and proposing checkpoints is variably dependent on a validator\u2019s stake ratio in the overall pool.")),(0,n.kt)("p",null,"See also ",(0,n.kt)("a",{parentName:"p",href:"/docs/pos/heimdall/overview"},"Heimdall architecture"),"."),(0,n.kt)("h2",{id:"bor-block-producer-layer"},"Bor (block producer layer)"),(0,n.kt)("p",null,"Bor is Polygon's sidechain block producer \u2014 the entity responsible for aggregating transactions into blocks."),(0,n.kt)("p",null,"Bor block producers are a subset of the validators and are shuffled periodically by the ",(0,n.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#heimdall"},"Heimdall")," validators."),(0,n.kt)("p",null,"See also ",(0,n.kt)("a",{parentName:"p",href:"/docs/pos/bor/overview"},"Bor architecture"),"."))}h.isMDXComponent=!0}}]);