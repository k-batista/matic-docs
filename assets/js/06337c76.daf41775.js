"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[29841],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},79970:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=o(87462),n=o(63366),s=(o(67294),o(3905)),a=o(44996),i=["components"],l={id:"proposers-producers-selection",title:"Proposers & Producers Selection",sidebar_label:"Proposers & Producers",description:"Proposer & block producer selection on Polygon",keywords:["docs","polygon","matic","proposers","block producers","selection"],slug:"proposers-producers-selection",image:"https://wiki.polygon.technology/img/polygon-logo.png"},c=void 0,p={unversionedId:"maintain/validator/core-components/proposers-producers-selection",id:"maintain/validator/core-components/proposers-producers-selection",title:"Proposers & Producers Selection",description:"Proposer & block producer selection on Polygon",source:"@site/docs/maintain/validator/core-components/proposer-producer-selection.md",sourceDirName:"maintain/validator/core-components",slug:"/maintain/validator/core-components/proposers-producers-selection",permalink:"/matic-docs/docs/maintain/validator/core-components/proposers-producers-selection",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/maintain/validator/core-components/proposer-producer-selection.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"proposers-producers-selection",title:"Proposers & Producers Selection",sidebar_label:"Proposers & Producers",description:"Proposer & block producer selection on Polygon",keywords:["docs","polygon","matic","proposers","block producers","selection"],slug:"proposers-producers-selection",image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"maintain",previous:{title:"Derivatives",permalink:"/matic-docs/docs/maintain/validator/core-components/derivatives"},next:{title:"Proposer Bonus",permalink:"/matic-docs/docs/maintain/validator/core-components/proposer-bonus"}},u={},d=[{value:"Selection Process",id:"selection-process",level:2}],m={toc:d};function f(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Block Producers for the BOR layer, are a committee selected from the Validators pool on the basis of their stake which happens at regular intervals. These intervals are decided by the Validator's governance with regards to dynasty and network."),(0,s.kt)("p",null,"The ratio of ",(0,s.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#staking"},"stake")," specifies the probability to be selected as a member of ",(0,s.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/glossary#block-producer"},"block producers")," committee."),(0,s.kt)("h2",{id:"selection-process"},"Selection Process"),(0,s.kt)("p",null,"Let's suppose we have 3 validators in pool \u2014 Alice, Bill, and Clara:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Alice is staking 100 MATIC tokens."),(0,s.kt)("li",{parentName:"ul"},"Bill is staking 40 MATIC tokens."),(0,s.kt)("li",{parentName:"ul"},"Clara is staking 40 MATIC tokens.")),(0,s.kt)("p",null,"Validators are given slots according to the stake."),(0,s.kt)("p",null,"Because Alice has 100 MATIC tokens staked, and the per slot cost is 10 MATIC tokens as maintained by validator's governance, Alice gets 5 slots in total. Similarly, Bill and Clara get 2 slots in total."),(0,s.kt)("p",null,"The Alice, Bill and Clara validators are given the following slots:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[ A, A, A, A, A, B, B, C, C ]")),(0,s.kt)("p",null,"Polygon then shuffles the array of the Alice, Bill and Clara slots by using the Ethereum block hashes as seed."),(0,s.kt)("p",null,"The result of the shuffle is the following array of slots:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"[ A, B, A, A, C, B, A, A, C]")),(0,s.kt)("p",null,"Now depending on the total block producer count as maintained by validator's governance, Polygon uses the validators from the top \u2014 for example. for a set of 5 producers the array of slots is ","[ A, B, A, A, C]","."),(0,s.kt)("p",null,"The producer set for the next span is defined as ","[ A: 3, B:1, C:1 ]","."),(0,s.kt)("p",null,"Using the resulting validator set and Tendermint's ",(0,s.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/consensus/proposer-selection.html"},"proposer selection algorithm"),", Polygon selects a producer for every sprint on Bor."),(0,s.kt)("img",{src:(0,a.Z)("img/validators/producer-proposer.png")}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Legend:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Dynasty: Time between the end of the last auction and start time of the next auction."),(0,s.kt)("li",{parentName:"ul"},"Sprint: Time interval for which the block producers committee is selected."),(0,s.kt)("li",{parentName:"ul"},"Span: Number of blocks produced by a single producer.")))}f.isMDXComponent=!0}}]);