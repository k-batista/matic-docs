"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[4289],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"migration-to-pos",title:"Migration from PoA to PoS",description:"How to migrate from PoA to PoS IBFT mode, and vice versa.",keywords:["docs","polygon","edge","migrate","PoA","PoS"]},c=void 0,d={unversionedId:"main-edge/consensus/migration-to-pos",id:"main-edge/consensus/migration-to-pos",title:"Migration from PoA to PoS",description:"How to migrate from PoA to PoS IBFT mode, and vice versa.",source:"@site/docs/main-edge/consensus/migration-to-pos.md",sourceDirName:"main-edge/consensus",slug:"/main-edge/consensus/migration-to-pos",permalink:"/matic-docs/docs/main-edge/consensus/migration-to-pos",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/consensus/migration-to-pos.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"migration-to-pos",title:"Migration from PoA to PoS",description:"How to migrate from PoA to PoS IBFT mode, and vice versa.",keywords:["docs","polygon","edge","migrate","PoA","PoS"]}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"How to migrate to PoS",id:"how-to-migrate-to-pos",level:2}],m={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section guides you through the migration from PoA to PoS IBFT modes, and vice versa, for a running cluster - without the need to reset the blockchain."),(0,a.kt)("h2",{id:"how-to-migrate-to-pos"},"How to migrate to PoS"),(0,a.kt)("p",null,"You will need to stop all nodes, add fork configuration into genesis.json by ",(0,a.kt)("inlineCode",{parentName:"p"},"ibft switch")," command, and restart the nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge ibft switch --chain ./genesis.json --type PoS --deployment 100 --from 200\n")),(0,a.kt)("admonition",{title:"Switching while using ECDSA",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When using ECDSA, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ibft-validator-type")," flag must be added to the switch, mentioning that ECDSA is used. If not included, Edge will automatically switch to BLS."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge ibft switch --chain ./genesis.json --type PoS --ibft-validator-type ecdsa --deployment 100 --from 200\n"))),(0,a.kt)("p",null,"To switch to PoS, you will need to specify 2 block heights: ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"from"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," is the height to deploy the staking contract and ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," is the height of beginning of PoS. The staking contract will be deployed at the address ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001001"),"  at the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment"),", like as the case of pre-deployed contract."),(0,a.kt)("p",null,"Please check ",(0,a.kt)("a",{parentName:"p",href:"/docs/edge/consensus/pos-concepts"},"Proof of Stake")," for more details about Staking contract."),(0,a.kt)("admonition",{title:"Validators need to stake manually",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Each validator needs to stake after contract is deployed at ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," and before ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," in order to be a validator at the beginning of PoS. Each validator will update own validator set by the set in the staking contract at the beginning of PoS."),(0,a.kt)("p",{parentName:"admonition"},"To find out more about Staking, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/edge/consensus/pos-stake-unstake"},"Set up and use Proof of Stake ")),".")))}u.isMDXComponent=!0}}]);