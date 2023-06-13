"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[88588],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={id:"is-check-pointed",title:"isCheckPointed",keywords:["pos client, isCheckPointed, polygon, sdk"],description:"Check if a transaction has been checkpointed."},s=void 0,p={unversionedId:"develop/ethereum-polygon/matic-js/pos/is-check-pointed",id:"develop/ethereum-polygon/matic-js/pos/is-check-pointed",title:"isCheckPointed",description:"Check if a transaction has been checkpointed.",source:"@site/docs/develop/ethereum-polygon/matic-js/pos/is-check-pointed.md",sourceDirName:"develop/ethereum-polygon/matic-js/pos",slug:"/develop/ethereum-polygon/matic-js/pos/is-check-pointed",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/is-check-pointed",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/pos/is-check-pointed.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"is-check-pointed",title:"isCheckPointed",keywords:["pos client, isCheckPointed, polygon, sdk"],description:"Check if a transaction has been checkpointed."},sidebar:"maticjs",previous:{title:"transfer",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/erc1155/transfer"},next:{title:"isDeposited",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/pos/is-deposited"}},d={},l=[],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isCheckPointed")," method can be used to know if a transaction has been checkpointed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const isCheckPointed = await posClient.isCheckPointed(<tx hash>);\n")))}m.isMDXComponent=!0}}]);