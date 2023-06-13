"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[28195],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6958:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"crusthelpers",title:"Crust Network",description:"Decentralized IPFS storage network",keywords:["Crust Network","crustfiles","crust-polygon bridge","IPFS storage","matic","polygon","docs"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},c=void 0,l={unversionedId:"develop/crusthelpers",id:"develop/crusthelpers",title:"Crust Network",description:"Decentralized IPFS storage network",source:"@site/docs/develop/crusthelpers.md",sourceDirName:"develop",slug:"/develop/crusthelpers",permalink:"/matic-docs/docs/develop/crusthelpers",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/crusthelpers.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"crusthelpers",title:"Crust Network",description:"Decentralized IPFS storage network",keywords:["Crust Network","crustfiles","crust-polygon bridge","IPFS storage","matic","polygon","docs"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Filecoin",permalink:"/matic-docs/docs/develop/filecoinhelpers"},next:{title:"Mint NFTs",permalink:"/matic-docs/docs/develop/nftstorage"}},p={},u=[{value:"Crust Storage Helpers",id:"crust-storage-helpers",level:2}],d={toc:u};function h(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,a.kt)("ins",null,"here")),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://crust.network"},"Crust Network")," provides a decentralized storage network for Web3. It is designed to realize the core values of decentralization, privacy and assurance. Crust supports multiple storage-layer protocols such as IPFS, and exposes instantly accessible on-chain storage functions to users."),(0,a.kt)("p",null,"The protocol matches people who have hard drive space to spare with those who need to store data or host content. Crust supports most smart contract platforms with its cross-chain solution, including Polygon. Find out all the platforms that Crust storage supports on their ",(0,a.kt)("a",{parentName:"p",href:"https://crust.network/"},"official website"),"."),(0,a.kt)("admonition",{title:"Learn more about Crust Network",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://wiki.crust.network/docs/en/DSM"},"Decentralized Storage Market"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://wiki.crust.network/docs/en/buildCrossChainSolution#ii-native-ipfs-integration"},"Cross-chain Storage Solution"))," offered by Crust Network. Also, you can start building with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://wiki.crust.network/docs/en/build101"},"Crust Build-101")),".")),(0,a.kt)("h2",{id:"crust-storage-helpers"},"Crust Storage Helpers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crustfiles.io"},"Crust Files"),": Built by the Crust community, Crust Files is the first personal cloud storage for Web3 that supports multi-web3 wallet login and provides fully decentralized and privacy storage function for all users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/concepts/ipfs-gateway/#authenticated-gateways"},"IPFS W3Auth Gateway"),": A Web3 authenticated IPFS gateway that supports all the IPFS ",(0,a.kt)("em",{parentName:"li"},"WRITE")," functions and helps users upload files or host content after passing the W3Auth verification."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.crust.network/docs/en/buildIPFSW3AuthPin"},"IPFS W3Auth Pinning Service"),": A standard IPFS pinning service with Web3 authentication that allows users to access Crust storage resources without needing to interact with the Crust blockchain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/crust-ipfs-pin"},"Crust Github Action"),": A standard Github action which can include fully decentralized CI/CD hosting with Crust.")))}h.isMDXComponent=!0}}]);