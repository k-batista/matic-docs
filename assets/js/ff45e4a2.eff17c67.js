"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[21102],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20991:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"graph-queries",title:"Sample queries",sidebar_label:"Querying Polygon's root subgraph",description:"Learn how to use Polygon's subgraph for data",keywords:["docs","matic","polygon","the graph","data","analytics","index","indexing","query"],image:"https://matic.network/banners/matic-network-16x9.png"},l=void 0,c={unversionedId:"develop/data/graph-queries",id:"develop/data/graph-queries",title:"Sample queries",description:"Learn how to use Polygon's subgraph for data",source:"@site/docs/develop/data/graph-queries.md",sourceDirName:"develop/data",slug:"/develop/data/graph-queries",permalink:"/matic-docs/docs/develop/data/graph-queries",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/data/graph-queries.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"graph-queries",title:"Sample queries",sidebar_label:"Querying Polygon's root subgraph",description:"Learn how to use Polygon's subgraph for data",keywords:["docs","matic","polygon","the graph","data","analytics","index","indexing","query"],image:"https://matic.network/banners/matic-network-16x9.png"},sidebar:"develop",previous:{title:"Using Polygon's root subgraph",permalink:"/matic-docs/docs/develop/data/graph-entities"},next:{title:"Covalent",permalink:"/matic-docs/docs/develop/data/covalent"}},p={},d=[{value:"Sample Queries",id:"sample-queries",level:2},{value:"Checkpoints",id:"checkpoints",level:3},{value:"Delegators",id:"delegators",level:3},{value:"Transfers",id:"transfers",level:3}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,o.kt)("ins",null,"here")),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sample-queries"},"Sample Queries"),(0,o.kt)("p",null,"Below are some sample queries you can use to gather information from the polygon root subgraph"),(0,o.kt)("p",null,"You can build your own queries using a ",(0,o.kt)("a",{parentName:"p",href:"https://graphiql-online.com/graphiql"},"GraphQL Explorer")," and enter your endpoint to limit the data to exactly what you need."),(0,o.kt)("h3",{id:"checkpoints"},"Checkpoints"),(0,o.kt)("p",null,"Description: This query gets the first 20 checkpoints proposed and the validated blocks assigned to it as well as the rewards for each."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  checkpoints(orderBy: id, orderDirection: asc, first: 20) {\n    id\n    proposer\n    start\n    end\n    checkpointNumber\n    reward\n    timestamp\n    transactionHash\n  }\n}\n")),(0,o.kt)("h3",{id:"delegators"},"Delegators"),(0,o.kt)("p",null,"Description: This query gets the total number of active delegators, the first 50 delegations and the validator they delegated to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  globalDelegatorCounters {\n    id\n    current\n  }\n  delegations(first: 50) {\n    id\n    block\n    activeStake\n    validatorId\n  }\n}\n")),(0,o.kt)("h3",{id:"transfers"},"Transfers"),(0,o.kt)("p",null,"Description: This query gets the first 50 matic token transfers, the sender, receiver, value, transaction block and timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  maticTransfers(first: 50, orderBy: id, orderDirection: asc) {\n    id\n    from\n    to\n    value\n    block\n    timestamp\n  }\n}\n")))}m.isMDXComponent=!0}}]);