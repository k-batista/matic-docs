"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[70842],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(d,o(o({ref:t},h),{},{components:a})):n.createElement(d,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65953:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],c={id:"sidechain",title:"Sidechains and Plasma",description:"Scaling solutions for the Blockchain.",keywords:["docs","matic","polygon","sidechains","plasma"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s="Sidechains and Plasma",l={unversionedId:"home/blockchain-basics/sidechain",id:"home/blockchain-basics/sidechain",title:"Sidechains and Plasma",description:"Scaling solutions for the Blockchain.",source:"@site/docs/home/blockchain-basics/sidechain.md",sourceDirName:"home/blockchain-basics",slug:"/home/blockchain-basics/sidechain",permalink:"/matic-docs/docs/home/blockchain-basics/sidechain",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/home/blockchain-basics/sidechain.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"sidechain",title:"Sidechains and Plasma",description:"Scaling solutions for the Blockchain.",keywords:["docs","matic","polygon","sidechains","plasma"],image:"https://wiki.polygon.technology/img/polygon-logo.png"}},h={},p=[{value:"Resources",id:"resources",level:3}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sidechains-and-plasma"},"Sidechains and Plasma"),(0,i.kt)("p",null,"Sidechain is an alternate blockchain to a parent chain. Plasma is a framework of child chains - it is a scaling solution for Ethereum (or any blockchain for that matter)."),(0,i.kt)("p",null,"The sidechain concept is to basically run another blockchain alongside some other \u201cmain\u201d blockchain. These two blockchains could then talk to each other in a such a way that it allows assets to move between the two chains."),(0,i.kt)("p",null,"Just like sidechains, plasma chains have a consensus mechanism that creates blocks. However, unlike sidechains, the \u201croot\u201d of each plasma chain block is published to Ethereum. Block \u201croots\u201d are basically little pieces of information that users can use to prove things about the contents of those blocks."),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.plasma.group/en/latest/src/plasma/sidechains.html"},"Understanding sidechains and plasma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blockstream.com/sidechains.pdf"},"Research Paper: Sidechains")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://plasma.io/"},"Research: Plasma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.learnplasma.org/en/learn/"},"learnplasma.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/swlh/a-comparative-analysis-of-sidechains-plasma-and-sharding-8152f6b51a31"},"Article: SideChains vs. Plasma"))))}m.isMDXComponent=!0}}]);