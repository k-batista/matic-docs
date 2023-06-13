"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[68925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],s={id:"transactions",title:"What are Transactions?",sidebar_label:"Transactions",description:"Sending messages between accounts.",keywords:["docs","matic","polygon","transactions"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},i=void 0,l={unversionedId:"home/blockchain-basics/transactions",id:"home/blockchain-basics/transactions",title:"What are Transactions?",description:"Sending messages between accounts.",source:"@site/docs/home/blockchain-basics/basics-transactions.md",sourceDirName:"home/blockchain-basics",slug:"/home/blockchain-basics/transactions",permalink:"/matic-docs/docs/home/blockchain-basics/transactions",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/home/blockchain-basics/basics-transactions.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"transactions",title:"What are Transactions?",sidebar_label:"Transactions",description:"Sending messages between accounts.",keywords:["docs","matic","polygon","transactions"],image:"https://wiki.polygon.technology/img/polygon-logo.png"}},u={},d=[{value:"What are Transactions?",id:"what-are-transactions",level:2},{value:"<strong>Value Transfer</strong>",id:"value-transfer",level:4},{value:"Execution of Contracts",id:"execution-of-contracts",level:4},{value:"Resources",id:"resources",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-are-transactions"},"What are Transactions?"),(0,o.kt)("p",null,"The term \u201ctransaction\u201d is used to refer to the signed data package that stores a message to be sent from an externally owned account to another account on the blockchain. It can be categorised into two main categories:"),(0,o.kt)("h4",{id:"value-transfer"},(0,o.kt)("strong",{parentName:"h4"},"Value Transfer")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A value (in Ether) is transferred between two externally owned accounts")),(0,o.kt)("h4",{id:"execution-of-contracts"},"Execution of Contracts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here, a function/method call is made from an externally owned account to a contract account. These types of transactions can be further chained eg., the contract account can make several internal transactions before calling another contract account or returning back.\nAny type of transaction execution on Ethereum costs money - or ",(0,o.kt)("a",{parentName:"li",href:"/docs/home/blockchain-basics/gas"},"gas"),".")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://coincentral.com/what-is-a-blockchain-transaction-anyway/"},"What is a blockchain transaction?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.alchemy.com/docs/understanding-the-transaction-object-on-ethereum"},"Understanding the Transaction Object")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.alchemy.com/docs/how-to-send-transactions-on-ethereum"},"How to Send Transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.alchemy.com/docs/how-to-track-mined-and-pending-ethereum-transactions"},"How to Track Mined and Pending Transactions"))))}m.isMDXComponent=!0}}]);