"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[54882],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||p;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79157:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),a=["components"],c={id:"is-approved-all",title:"isApprovedAll",keywords:["pos client, erc721, isApprovedAll, polygon, sdk"],description:"Checks if all token are approved."},i=void 0,l={unversionedId:"develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",id:"develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",title:"isApprovedAll",description:"Checks if all token are approved.",source:"@site/docs/develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all.md",sourceDirName:"develop/ethereum-polygon/matic-js/pos/erc721",slug:"/develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/pos/erc721/is-approved-all.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"is-approved-all",title:"isApprovedAll",keywords:["pos client, erc721, isApprovedAll, polygon, sdk"],description:"Checks if all token are approved."},sidebar:"maticjs",previous:{title:"isApproved",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/is-approved"},next:{title:"approve",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc721/approve"}},s={},d=[],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"isApprovedAll")," method checks if all token is approved. It returns boolean value."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"const erc721Token = posClient.erc721(<token address>, true);\n\nconst result = await erc721Token.isApprovedAll(<user Address>);\n\n")))}m.isMDXComponent=!0}}]);