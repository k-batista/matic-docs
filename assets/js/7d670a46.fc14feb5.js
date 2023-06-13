"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[63976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"query-operator-info",title:"Query operator information",description:"How to query operator information.",keywords:["docs","polygon","edge","node","query","operator"]},l=void 0,u={unversionedId:"main-edge/working-with-node/query-operator-info",id:"main-edge/working-with-node/query-operator-info",title:"Query operator information",description:"How to query operator information.",source:"@site/docs/main-edge/working-with-node/query-operator-info.md",sourceDirName:"main-edge/working-with-node",slug:"/main-edge/working-with-node/query-operator-info",permalink:"/matic-docs/docs/main-edge/working-with-node/query-operator-info",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/working-with-node/query-operator-info.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"query-operator-info",title:"Query operator information",description:"How to query operator information.",keywords:["docs","polygon","edge","node","query","operator"]}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Peer information",id:"peer-information",level:2},{value:"Peers list",id:"peers-list",level:3},{value:"Peer status",id:"peer-status",level:3},{value:"IBFT info",id:"ibft-info",level:2},{value:"Snapshots",id:"snapshots",level:3},{value:"Candidates",id:"candidates",level:3},{value:"Status",id:"status",level:3},{value:"Transaction pool",id:"transaction-pool",level:2}],c={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This guide assumes you have followed the ",(0,a.kt)("a",{parentName:"p",href:"/docs/edge/get-started/set-up-ibft-locally"},"Local Setup")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/edge/get-started/set-up-ibft-on-the-cloud"},"guide on how to set up an IBFT cluster on the cloud"),"."),(0,a.kt)("p",null,"A functioning node is required in order to query any kind of operator information."),(0,a.kt)("p",null,"With the Polygon Edge, node operators are in control and informed about what the node they're operating is doing.",(0,a.kt)("br",null),"\nAt any time, they can use the node information layer, built on top of gRPC, and get meaningful information - no log sifting required."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your node isn't running on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8545")," you should add a flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--grpc-address <address:port>")," to the commands listed in this document.")),(0,a.kt)("h2",{id:"peer-information"},"Peer information"),(0,a.kt)("h3",{id:"peers-list"},"Peers list"),(0,a.kt)("p",null,"To get a complete list of connected peers (including the running node itself), run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge peers list\n")),(0,a.kt)("p",null,"This will return a list of libp2p addresses that are currently peers of the running client."),(0,a.kt)("h3",{id:"peer-status"},"Peer status"),(0,a.kt)("p",null,"For the status of a specific peer, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge peers status --peer-id <address>\n")),(0,a.kt)("p",null,"With the ",(0,a.kt)("em",{parentName:"p"},"address")," parameter being the libp2p address of the peer."),(0,a.kt)("h2",{id:"ibft-info"},"IBFT info"),(0,a.kt)("p",null,"Lots of times, an operator might want to know about the state of the operating node in IBFT consensus."),(0,a.kt)("p",null,"Luckily, the Polygon Edge provides an easy way to find this information."),(0,a.kt)("h3",{id:"snapshots"},"Snapshots"),(0,a.kt)("p",null,"Running the following command returns the most recent snapshot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge ibft snapshot\n")),(0,a.kt)("p",null,"To query the snapshot at a specific height (block number), the operator can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge ibft snapshot --num <block-number>\n")),(0,a.kt)("h3",{id:"candidates"},"Candidates"),(0,a.kt)("p",null,"To get the latest info on candidates, the operator can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge ibft candidates\n")),(0,a.kt)("p",null,"This command queries the current set of proposed candidates, as well as candidates that have not been included yet"),(0,a.kt)("h3",{id:"status"},"Status"),(0,a.kt)("p",null,"The following command returns the current validator key of the running IBFT client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge ibft status\n")),(0,a.kt)("h2",{id:"transaction-pool"},"Transaction pool"),(0,a.kt)("p",null,"To find the current number of transactions in the transaction pool, the operator can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge txpool status\n")))}f.isMDXComponent=!0}}]);