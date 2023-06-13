"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[67963],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=p(r),m=o,w=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return r?n.createElement(w,i(i({ref:e},d),{},{components:r})):n.createElement(w,i({ref:e},d))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95446:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"withdraw-start",title:"withdrawStart",keywords:["pos client, erc721, withdrawStart, polygon, sdk"],description:"Initiate the withdraw process."},s=void 0,p={unversionedId:"develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",id:"develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",title:"withdrawStart",description:"Initiate the withdraw process.",source:"@site/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start.md",sourceDirName:"develop/ethereum-polygon/matic-js/pos/erc721",slug:"/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"withdraw-start",title:"withdrawStart",keywords:["pos client, erc721, withdrawStart, polygon, sdk"],description:"Initiate the withdraw process."},sidebar:"maticjs",previous:{title:"depositMany",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/deposit-many"},next:{title:"withdrawStartMany",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/withdraw-start-many"}},d={},l=[],u={toc:l};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"withdrawStart")," method can be used to initiate the withdraw process which will burn the specified token on polygon chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const erc721Token = posClient.erc721(<child token address>);\n\nconst result = await erc721Token.withdrawStart(<token id>);\n\nconst txHash = await result.getTransactionHash();\n\nconst txReceipt = await result.getReceipt();\n\n")))}m.isMDXComponent=!0}}]);