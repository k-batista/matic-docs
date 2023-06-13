"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[89251],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,m=l["".concat(c,".").concat(u)]||l[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},47401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"statesync",title:"Synchronizing Chain State between Rootchain and Supernet",sidebar_label:"Synchronizing chain state between rootchain and Supernet",description:"Learn about the StateSync mechanism of Supernets.",keywords:["docs","polygon","supernet","bridge","fxportal","Supernet","rootchain","statesync"]},c=void 0,d={unversionedId:"supernets/design/bridge/statesync",id:"supernets/design/bridge/statesync",title:"Synchronizing Chain State between Rootchain and Supernet",description:"Learn about the StateSync mechanism of Supernets.",source:"@site/docs/supernets/design/bridge/statesync.md",sourceDirName:"supernets/design/bridge",slug:"/supernets/design/bridge/statesync",permalink:"/matic-docs/docs/supernets/design/bridge/statesync",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/design/bridge/statesync.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"statesync",title:"Synchronizing Chain State between Rootchain and Supernet",sidebar_label:"Synchronizing chain state between rootchain and Supernet",description:"Learn about the StateSync mechanism of Supernets.",keywords:["docs","polygon","supernet","bridge","fxportal","Supernet","rootchain","statesync"]},sidebar:"supernets",previous:{title:"Introduction to native Supernet bridging",permalink:"/matic-docs/docs/supernets/design/bridge/overview"},next:{title:"Ensuring data integrity through checkpoint management",permalink:"/matic-docs/docs/supernets/design/bridge/checkpoint"}},p={},h=[{value:"Introduction",id:"introduction",level:2},{value:"StateSync in Supernets",id:"statesync-in-supernets",level:2},{value:"StateSender",id:"statesender",level:3},{value:"StateReceiver",id:"statereceiver",level:3},{value:"L2StateSender and ExitHelper",id:"l2statesender-and-exithelper",level:2}],l={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document provides an overview of how StateSync works for Supernets."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"State synchronization (StateSync) is a mechanism used to update the state of a contract on the Supernet based on events occurring on the rootchain. It is a critical component of blockchain technology as it enables secure and efficient communication between the two chains. State synchronization allows for a more efficient and secure way to update the chain state on the Supernet without needing to process all transactions from the genesis block."),(0,o.kt)("h2",{id:"statesync-in-supernets"},"StateSync in Supernets"),(0,o.kt)("admonition",{title:"Key points",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StateSync")," enables the efficient and secure transfer of data between a Supernet and rootchain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StateSync")," is initiated on the Supernet through the ",(0,o.kt)("inlineCode",{parentName:"li"},"StateSender")," contract and executed on the rootchain through the ",(0,o.kt)("inlineCode",{parentName:"li"},"StateReceiver")," contract."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"StateSync")," process is used to update the state of a contract on the rootchain based on events occurring on the Supernet."))),(0,o.kt)("h3",{id:"statesender"},"StateSender"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender")," contract is deployed on the rootchain and is triggered by either the associated rootchain predicate or ",(0,o.kt)("inlineCode",{parentName:"p"},"SupernetManager")," rootchain contract. Its main responsibility is to generate sync state events based on the provided data and receiver address. Anyone can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"syncState")," function to emit a sync state event. The data is sent along with the event and represents the state change that needs to be executed on the Supernet."),(0,o.kt)("h3",{id:"statereceiver"},"StateReceiver"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver")," contract is deployed on the Supernet and is responsible for executing and relaying the state data sent from the rootchain. It receives the state change data from the rootchain contract bundled up in the form of a commitment, sent with the Merkle Tree root hash. This tree is created by bundling a number of ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSync")," events received by the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender"),". Commitments are submitted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver")," by a block proposer, and it is a system (state) transaction. They are used to verify the execution of state data from the rootchain to the Supernet, such as transferring funds from rootchain to Supernet. Commitments are similar to checkpoints but are used in the process of transferring data from rootchain to Supernet, while checkpoints are used in the process of transferring data from Supernet to rootchain."),(0,o.kt)("h2",{id:"l2statesender-and-exithelper"},"L2StateSender and ExitHelper"),(0,o.kt)("p",null,"To enable communication from the Supernet to the rootchain, the ",(0,o.kt)("inlineCode",{parentName:"p"},"L2StateSender")," contract resides on a Supernet and is responsible for emitting ",(0,o.kt)("inlineCode",{parentName:"p"},"L2StateSyncs")," (also referred to as exit events). These events are indexed by the rootchain validators and submitted as a checkpoint on the rootchain, allowing for lazy execution. Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender"),", there is no transaction execution on the rootchain for the ",(0,o.kt)("inlineCode",{parentName:"p"},"L2StateSender"),"."),(0,o.kt)("p",null,"On the rootchain, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExitHelper")," contract is responsible for verifying the execution of the exit events and enabling users to withdraw their funds from the Supernet to the rootchain. It is analogous to the StateReceiver on the Supernet, and both contracts work together to enable two-way communication between the rootchain and the Supernet."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Synchronization and commitments"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSync")," process involves two main steps: synchronization and commitments."),(0,o.kt)("p",null,"In the synchronization step, the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender")," contract on the rootchain generates sync state events based on receiver and data. The ",(0,o.kt)("inlineCode",{parentName:"p"},"syncState")," function allows anyone to call this method to emit an event. The data is sent along with the event and represents the state change that needs to be executed on the Supernet."),(0,o.kt)("p",null,"In the commitments step, the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver")," contract on the Supernet receives the state change data along with a Merkle proof from the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender")," contract and verifies the proof to ensure the data's integrity. If the proof is valid, the state change is executed on the Supernet."),(0,o.kt)("p",null,"To ensure the validity of the state change, the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender")," contract generates a unique id for each sync state event. This id is used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver")," contract to prevent replay attacks, which could result in the execution of duplicate state changes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver")," contract also implements a BLS signature scheme to verify the signatures submitted by the validators. The validators' signatures are aggregated, and the contract checks whether the required voting power threshold is met to accept the state change.")))}u.isMDXComponent=!0}}]);