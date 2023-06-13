"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[68735],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return r?o.createElement(v,a(a({ref:t},s),{},{components:r})):o.createElement(v,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var i=2;i<p;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var o=r(87462),n=r(63366),p=(r(67294),r(3905)),a=["components"],c={id:"approve-all",title:"approveAll",keywords:["pos client, erc721, approveAll, polygon, sdk"],description:"Approve all tokens."},l=void 0,i={unversionedId:"develop/ethereum-polygon/matic-js/pos/erc721/approve-all",id:"develop/ethereum-polygon/matic-js/pos/erc721/approve-all",title:"approveAll",description:"Approve all tokens.",source:"@site/docs/develop/ethereum-polygon/matic-js/pos/erc721/approve-all.md",sourceDirName:"develop/ethereum-polygon/matic-js/pos/erc721",slug:"/develop/ethereum-polygon/matic-js/pos/erc721/approve-all",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/approve-all",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/pos/erc721/approve-all.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"approve-all",title:"approveAll",keywords:["pos client, erc721, approveAll, polygon, sdk"],description:"Approve all tokens."},sidebar:"maticjs",previous:{title:"approve",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/approve"},next:{title:"deposit",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/deposit"}},s={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"approveAll")," method can be used to approve all tokens."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"const erc721RootToken = posClient.erc721(<root token address>, true);\n\nconst approveResult = await erc721RootToken.approveAll();\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n\n")))}m.isMDXComponent=!0}}]);