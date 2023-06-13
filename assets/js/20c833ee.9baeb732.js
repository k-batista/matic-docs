"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[72232],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"overview",title:"Architecture Overview",sidebar_label:"Overview",description:"Introduction to the architecture of Polygon Edge.",keywords:["docs","polygon","edge","architecture","modular","layer","libp2p","extensible"]},c=void 0,s={unversionedId:"main-edge/architecture/overview",id:"main-edge/architecture/overview",title:"Architecture Overview",description:"Introduction to the architecture of Polygon Edge.",source:"@site/docs/main-edge/architecture/overview.md",sourceDirName:"main-edge/architecture",slug:"/main-edge/architecture/overview",permalink:"/matic-docs/docs/main-edge/architecture/overview",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/architecture/overview.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"overview",title:"Architecture Overview",sidebar_label:"Overview",description:"Introduction to the architecture of Polygon Edge.",keywords:["docs","polygon","edge","architecture","modular","layer","libp2p","extensible"]}},u={},d=[{value:"Polygon Edge Layering",id:"polygon-edge-layering",level:2},{value:"Libp2p",id:"libp2p",level:2},{value:"Synchronization &amp; Consensus",id:"synchronization--consensus",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"State",id:"state",level:2},{value:"JSON RPC",id:"json-rpc",level:2},{value:"TxPool",id:"txpool",level:2},{value:"gRPC",id:"grpc",level:2}],p={toc:d};function h(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We started with the idea of making software that is ",(0,i.kt)("em",{parentName:"p"},"modular"),"."),(0,i.kt)("p",null,"This is something that is present in almost all parts of the Polygon Edge. Below, you will find a brief overview of the\nbuilt architecture and its layering."),(0,i.kt)("h2",{id:"polygon-edge-layering"},"Polygon Edge Layering"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Polygon Edge Architecture",src:n(3046).Z,width:"4000",height:"4500"})),(0,i.kt)("h2",{id:"libp2p"},"Libp2p"),(0,i.kt)("p",null,"It all starts at the base networking layer, which utilizes ",(0,i.kt)("strong",{parentName:"p"},"libp2p"),". We decided to go with this technology because it\nfits into the designing philosophies of Polygon Edge. Libp2p is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modular"),(0,i.kt)("li",{parentName:"ul"},"Extensible"),(0,i.kt)("li",{parentName:"ul"},"Fast")),(0,i.kt)("p",null,"Most importantly, it provides a great foundation for more advanced features, which we'll cover later on."),(0,i.kt)("h2",{id:"synchronization--consensus"},"Synchronization & Consensus"),(0,i.kt)("p",null,"The separation of the synchronization and consensus protocols allows for modularity and implementation of ",(0,i.kt)("strong",{parentName:"p"},"custom")," sync and consensus mechanisms - depending on how the client is being run."),(0,i.kt)("p",null,"Polygon Edge is designed to offer off-the-shelf pluggable consensus algorithms."),(0,i.kt)("p",null,"The current list of supported consensus algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IBFT PoA"),(0,i.kt)("li",{parentName:"ul"},"IBFT PoS")),(0,i.kt)("h2",{id:"blockchain"},"Blockchain"),(0,i.kt)("p",null,"The Blockchain layer is the central layer that coordinates everything in the Polygon Edge system. It is covered in depth in the corresponding ",(0,i.kt)("em",{parentName:"p"},"Modules")," section."),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("p",null,"The State inner layer contains state transition logic. It deals with how the state changes when a new block is included. It is covered in depth in the corresponding ",(0,i.kt)("em",{parentName:"p"},"Modules")," section."),(0,i.kt)("h2",{id:"json-rpc"},"JSON RPC"),(0,i.kt)("p",null,"The JSON RPC layer is an API layer that dApp developers use to interact with the blockchain. It is covered in depth in the corresponding ",(0,i.kt)("em",{parentName:"p"},"Modules")," section."),(0,i.kt)("h2",{id:"txpool"},"TxPool"),(0,i.kt)("p",null,"The TxPool layer represents the transaction pool, and it is closely linked with other modules in the system, as transactions can be added from multiple entry points."),(0,i.kt)("h2",{id:"grpc"},"gRPC"),(0,i.kt)("p",null,"gRPC, or Google Remote Procedure Call, is a robust open-source RPC framework that Google initially created to build scalable and fast APIs.\nThe gRPC layer is vital for operator interactions. Through it, node operators can easily interact with the client, providing an enjoyable UX."))}h.isMDXComponent=!0},3046:function(e,t,n){t.Z=n.p+"assets/images/Architecture-dae4296cd044994359bd26d2846524e3.jpg"}}]);