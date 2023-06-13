"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[19373],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"index",title:"plasmaClient",keywords:["plasma client, erc721, contract, polygon, sdk"],description:"Get started with maticjs"},l="ERC721",p={unversionedId:"develop/ethereum-polygon/plasma/erc721/index",id:"develop/ethereum-polygon/plasma/erc721/index",title:"plasmaClient",description:"Get started with maticjs",source:"@site/docs/develop/ethereum-polygon/plasma/erc721/index.md",sourceDirName:"develop/ethereum-polygon/plasma/erc721",slug:"/develop/ethereum-polygon/plasma/erc721/",permalink:"/matic-docs/docs/develop/ethereum-polygon/plasma/erc721/",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/plasma/erc721/index.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"index",title:"plasmaClient",keywords:["plasma client, erc721, contract, polygon, sdk"],description:"Get started with maticjs"}},s={},d=[{value:"Child token",id:"child-token",level:2},{value:"Parent token",id:"parent-token",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc721"},"ERC721"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"plasmaClient")," provides ",(0,a.kt)("inlineCode",{parentName:"p"},"erc721")," method which helps you to interact with a erc721 token."),(0,a.kt)("p",null,"The method returns an object which has various methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const erc721token = plasmaClient.erc721(<token address>,<isRoot>);\n")),(0,a.kt)("h2",{id:"child-token"},"Child token"),(0,a.kt)("p",null,"Token on polygon can be initiated by using this syntax -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const childERC20Token = plasmaClient.erc721(<child token address>);\n")),(0,a.kt)("h2",{id:"parent-token"},"Parent token"),(0,a.kt)("p",null,"Token on ethereum can be initiated by providing second parameter value as ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const parentERC20Token = plasmaClient.erc721(<parent token address>, true);\n")))}m.isMDXComponent=!0}}]);