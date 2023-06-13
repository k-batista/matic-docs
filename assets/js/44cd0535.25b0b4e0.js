"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[96534],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,w=l["".concat(s,".").concat(m)]||l[m]||u[m]||a;return r?n.createElement(w,i(i({ref:t},d),{},{components:r})):n.createElement(w,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},47998:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"withdraw-exit-faster",title:"withdrawExitFaster",keywords:["pos client, erc721, withdrawExitFaster, polygon, sdk"],description:"Exit the withdraw process using txHash from `withdrawStart`"},s=void 0,p={unversionedId:"develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",id:"develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",title:"withdrawExitFaster",description:"Exit the withdraw process using txHash from `withdrawStart`",source:"@site/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster.md",sourceDirName:"develop/ethereum-polygon/matic-js/pos/erc721",slug:"/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"withdraw-exit-faster",title:"withdrawExitFaster",keywords:["pos client, erc721, withdrawExitFaster, polygon, sdk"],description:"Exit the withdraw process using txHash from `withdrawStart`"},sidebar:"maticjs",previous:{title:"withdrawExitMany",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-many"},next:{title:"withdrawExitFasterMany",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-exit-faster-many"}},d={},u=[],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"withdrawExitFaster")," method can be used to exit the withdraw process by using the txHash from ",(0,a.kt)("inlineCode",{parentName:"p"},"withdrawStart")," method."),(0,a.kt)("p",null,"It is fast because it generates proof in backend. You need to configure ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/ethereum-polygon/matic-js/set-proof-api"},"setProofAPI"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),"- withdrawStart transaction must be checkpointed in order to exit the withdraw."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const erc721RootToken = posClient.erc721(<root token address>, true);\n\nconst result = await erc721RootToken.withdrawExitFaster(<burn tx hash>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n\n")))}m.isMDXComponent=!0}}]);