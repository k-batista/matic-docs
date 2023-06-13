"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[12091],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"index",title:"PlasmaClient",keywords:["maticjs, plasma client, contract, polygon, sdk"],description:"PlasmaClient allows you to interact with POS Bridge."},p="Plasma Bridge",c={unversionedId:"develop/ethereum-polygon/plasma/index",id:"develop/ethereum-polygon/plasma/index",title:"PlasmaClient",description:"PlasmaClient allows you to interact with POS Bridge.",source:"@site/docs/develop/ethereum-polygon/plasma/index.md",sourceDirName:"develop/ethereum-polygon/plasma",slug:"/develop/ethereum-polygon/plasma/",permalink:"/matic-docs/docs/develop/ethereum-polygon/plasma/",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/plasma/index.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"index",title:"PlasmaClient",keywords:["maticjs, plasma client, contract, polygon, sdk"],description:"PlasmaClient allows you to interact with POS Bridge."}},s={},m=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plasma-bridge"},"Plasma Bridge"),(0,o.kt)("p",null,"Plasma bridge functionality is available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/maticjs-plasma"},"seperate repository"),". So in order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"plasma")," bridge, you need to install seperate package."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i @maticnetwork/maticjs-plasma\n")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PlasmaClient")," can be used to interact with ",(0,o.kt)("strong",{parentName:"p"},"Plasma")," Bridge."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { PlasmaClient } from \"@maticnetwork/maticjs-plasma\"\n\nconst plasmaClient = new PlasmaClient();\n\nawait plasmaClient.init({\n    network: <network name>,  // 'testnet' or 'mainnet'\n    version: <network version>, // 'mumbai' or 'v1'\n    parent: {\n      provider: <parent provider>,\n      defaultConfig: {\n            from: <from address>\n      }\n    },\n    child: {\n      provider: <child provider>,\n      defaultConfig: {\n            from: <from address>\n      }\n    }\n});\n\n")),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"plasmaClient")," is initiated, you can interact with all available APIS."))}d.isMDXComponent=!0}}]);