"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[22298],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20858:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"stdtx",title:"StdTx",description:"A standard way to wrap a Msg with Fee and Signatures",keywords:["docs","matic","polygon","StdTx","wrap a msg with fee"],image:"https://matic.network/banners/matic-network-16x9.png"},c="StdTx",d={unversionedId:"pos/heimdall/stdtx",id:"pos/heimdall/stdtx",title:"StdTx",description:"A standard way to wrap a Msg with Fee and Signatures",source:"@site/docs/pos/heimdall/stdtx.md",sourceDirName:"pos/heimdall",slug:"/pos/heimdall/stdtx",permalink:"/matic-docs/docs/pos/heimdall/stdtx",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/pos/heimdall/stdtx.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"stdtx",title:"StdTx",description:"A standard way to wrap a Msg with Fee and Signatures",keywords:["docs","matic","polygon","StdTx","wrap a msg with fee"],image:"https://matic.network/banners/matic-network-16x9.png"},sidebar:"pos",previous:{title:"Transactions",permalink:"/matic-docs/docs/pos/heimdall/transactions"},next:{title:"Types",permalink:"/matic-docs/docs/pos/heimdall/types"}},l={},p=[],m={toc:p};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stdtx"},"StdTx"),(0,o.kt)("p",null,"Heimdall's ",(0,o.kt)("inlineCode",{parentName:"p"},"StdTx")," is not using ",(0,o.kt)("inlineCode",{parentName:"p"},"Fee")," for each transaction. We have very limited types of the transactions and as end-users won't be deploying any kind of contracts on Heimdall, it is using fixed fee model for the transaction. "),(0,o.kt)("p",null,"Check here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/heimdall/blob/master/auth/ante.go#L32"},"https://github.com/maticnetwork/heimdall/blob/master/auth/ante.go#L32")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// StdTx is a standard way to wrap a Msg with Fee and Signatures.\ntype StdTx struct {\n  Msg       sdk.Msg      `json:"msg" yaml:"msg"`\n  Signature StdSignature `json:"signature" yaml:"signature"`\n  Memo      string       `json:"memo" yaml:"memo"`\n}\n')),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/heimdall/blob/master/auth/types/stdtx.go"},"https://github.com/maticnetwork/heimdall/blob/master/auth/types/stdtx.go")))}u.isMDXComponent=!0}}]);