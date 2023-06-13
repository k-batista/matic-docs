"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[5808],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return u}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=i,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return o?n.createElement(h,a(a({ref:t},m),{},{components:o})):n.createElement(h,a({ref:t},m))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},83110:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],s={id:"common-methods",title:"Miscellaneous Methods",sidebar_label:"Miscellaneous",description:"Some of the commonly used methods on the Polygon zkEVM network.",keywords:["docs","maticjs","polygon","zkEvm client"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},l=void 0,c={unversionedId:"develop/ethereum-polygon/matic-js/zkevm/common-methods",id:"develop/ethereum-polygon/matic-js/zkevm/common-methods",title:"Miscellaneous Methods",description:"Some of the commonly used methods on the Polygon zkEVM network.",source:"@site/docs/develop/ethereum-polygon/matic-js/zkevm/common-methods.md",sourceDirName:"develop/ethereum-polygon/matic-js/zkevm",slug:"/develop/ethereum-polygon/matic-js/zkevm/common-methods",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/zkevm/common-methods",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/zkevm/common-methods.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"common-methods",title:"Miscellaneous Methods",sidebar_label:"Miscellaneous",description:"Some of the commonly used methods on the Polygon zkEVM network.",keywords:["docs","maticjs","polygon","zkEvm client"],image:"https://wiki.polygon.technology/img/polygon-logo.png"}},m={},d=[{value:"isDeposited",id:"isdeposited",level:2},{value:"isDepositClaimable",id:"isdepositclaimable",level:2},{value:"isWithdrawExitable",id:"iswithdrawexitable",level:2},{value:"isExited",id:"isexited",level:2}],p={toc:d};function u(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"isdeposited"},"isDeposited"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isDeposited")," method can be used to check if a deposit has been completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const isDeposited = await zkEvmClient.isDeposited(tx_hash);\n")),(0,r.kt)("h2",{id:"isdepositclaimable"},"isDepositClaimable"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isDepositClaimable")," method checks if a deposit can be claimed on the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const isDepositClaimable = await zkEvmClient.isDepositClaimable(tx_hash);\n")),(0,r.kt)("h2",{id:"iswithdrawexitable"},"isWithdrawExitable"),(0,r.kt)("p",null,"This method checks if the withdrawal process can be exited."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const isWithdrawExitable = await zkEvmClient.isWithdrawExitable(tx_hash);\n")),(0,r.kt)("h2",{id:"isexited"},"isExited"),(0,r.kt)("p",null,"isExited method checks if a withdrawal has been exited. It returns a boolean value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const isExited = await zkEvmClient.isExited(tx_hash);\n")))}u.isMDXComponent=!0}}]);