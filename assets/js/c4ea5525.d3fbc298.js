"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[49461],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"tokens",title:"Tokens FAQ",description:"FAQ for Polygon Edge tokens",keywords:["docs","polygon","edge","FAQ","tokens"]},c=void 0,l={unversionedId:"main-edge/faq/tokens",id:"main-edge/faq/tokens",title:"Tokens FAQ",description:"FAQ for Polygon Edge tokens",source:"@site/docs/main-edge/faq/Tokens.md",sourceDirName:"main-edge/faq",slug:"/main-edge/faq/tokens",permalink:"/matic-docs/docs/main-edge/faq/tokens",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/faq/Tokens.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"tokens",title:"Tokens FAQ",description:"FAQ for Polygon Edge tokens",keywords:["docs","polygon","edge","FAQ","tokens"]}},u={},d=[{value:"Does Polygon Edge support EIP-1559?",id:"does-polygon-edge-support-eip-1559",level:2},{value:"How to set the currency(token) symbol?",id:"how-to-set-the-currencytoken-symbol",level:2},{value:"What happens to transactions when a chain halts?",id:"what-happens-to-transactions-when-a-chain-halts",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"does-polygon-edge-support-eip-1559"},"Does Polygon Edge support EIP-1559?"),(0,a.kt)("p",null,"At the moment, Polygon Edge does not support EIP-1559."),(0,a.kt)("h2",{id:"how-to-set-the-currencytoken-symbol"},"How to set the currency(token) symbol?"),(0,a.kt)("p",null,"The token symbol is just a UI thing, so it cannot be configured or hardcoded anywhere in the network.\nBut you can change it when you add the network to a wallet, like Metamask, for example."),(0,a.kt)("h2",{id:"what-happens-to-transactions-when-a-chain-halts"},"What happens to transactions when a chain halts?"),(0,a.kt)("p",null,"All the transactions that haven't been processed are inside the TxPool(enqueued or promoted queue). If the chain halts(all block production stops), these transactions will never go into blocks. ",(0,a.kt)("br",null),"\nThis is not only the case when the chain halts. If the nodes are stopped or restarted, all the transactions that haven't been executed, and are still in TxPool, will silently get removed. ",(0,a.kt)("br",null),"\nThe same thing will happen to transactions when a breaking change is introduced, as it is required for the nodes to be restarted."))}h.isMDXComponent=!0}}]);