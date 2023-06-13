"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[50475],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=s,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?o.createElement(d,r(r({ref:t},u),{},{components:n})):o.createElement(d,r({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var o=n(87462),s=n(63366),a=(n(67294),n(3905)),r=["components"],i={id:"consensus-mechanism",title:"Consensus Mechanism",description:"PoW, PoS, DPoS, PoSpace and PoET.",keywords:["docs","matic","polygon","consensus mechanisms"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},c="Consensus Mechanism",l={unversionedId:"home/blockchain-basics/consensus-mechanism",id:"home/blockchain-basics/consensus-mechanism",title:"Consensus Mechanism",description:"PoW, PoS, DPoS, PoSpace and PoET.",source:"@site/docs/home/blockchain-basics/basics-consensus-mechanism.md",sourceDirName:"home/blockchain-basics",slug:"/home/blockchain-basics/consensus-mechanism",permalink:"/matic-docs/docs/home/blockchain-basics/consensus-mechanism",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/home/blockchain-basics/basics-consensus-mechanism.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"consensus-mechanism",title:"Consensus Mechanism",description:"PoW, PoS, DPoS, PoSpace and PoET.",keywords:["docs","matic","polygon","consensus mechanisms"],image:"https://wiki.polygon.technology/img/polygon-logo.png"}},u={},m=[{value:"Types of Consensus Mechanism",id:"types-of-consensus-mechanism",level:2},{value:"Proof of Work",id:"proof-of-work",level:3},{value:"Proof of Stake",id:"proof-of-stake",level:3},{value:"Delegated Proof of Stake",id:"delegated-proof-of-stake",level:3},{value:"Proof of Space",id:"proof-of-space",level:3},{value:"Proof of Elapsed Time",id:"proof-of-elapsed-time",level:3},{value:"<strong>Resources</strong>",id:"resources",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,s.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consensus-mechanism"},"Consensus Mechanism"),(0,a.kt)("p",null,"A Consensus mechanism is a fault-tolerant mechanism that is used in computer and blockchain systems to achieve the necessary agreement on a single data value or a single state of the network among distributed processes or multi-agent systems, such as with cryptocurrencies."),(0,a.kt)("h2",{id:"types-of-consensus-mechanism"},"Types of Consensus Mechanism"),(0,a.kt)("h3",{id:"proof-of-work"},"Proof of Work"),(0,a.kt)("p",null,"Proof of work describes a system that requires a not-insignificant but feasible amount of effort in order to deter DOS(denial-of-service) attacks and other malicious attacks. It requires to solve a challenging computational puzzle in order to create new blocks in Blockchain."),(0,a.kt)("h3",{id:"proof-of-stake"},"Proof of Stake"),(0,a.kt)("p",null,"Proof-of-Stake mechanism achieves consensus by requiring users to stake an amount of their tokens so as to have a chance of being selected to validate blocks of transactions, and get rewarded for doing so. Priority is given to miners who have purchased the most stake in the blockchain system."),(0,a.kt)("h3",{id:"delegated-proof-of-stake"},"Delegated Proof of Stake"),(0,a.kt)("p",null,"This form of consensus mirrors the election of members in governing bodies. Instead of staking their assets themselves, stakeholders can delegate this activity to third parties, the witness or delegates, who will take part in the consensus process. Witnesses, those who validate transactions, usually present a proposal, ask for votes and are elected by the stakeholders. The rewards gained by those entities are usually shared with the network participants."),(0,a.kt)("h3",{id:"proof-of-space"},"Proof of Space"),(0,a.kt)("p",null,"This kind of consensus mechanism is useful in decentralized file storage applications like in Storj.io, Filecoin, and Crust, where nodes prove they have legitimate capacity in their hardware. However, instead of using heavy computation as in the PoW mechanism, it leverages the storage capacity of each node. Sometimes also referred as PoStorage or PoCapacity."),(0,a.kt)("h3",{id:"proof-of-elapsed-time"},"Proof of Elapsed Time"),(0,a.kt)("p",null,"A better alternative to PoW, consuming lesser computational resources. Each participating node needs to wait for a random amount of time and the very first node to wake up from sleep gets a chance to create a new block, which is then propagated through the network. It requires Trusted Execution Environments ( TEE ) like Intel SGX, which are an isolated part of memory and can only be accessed using a certain set of instructions."),(0,a.kt)("h2",{id:"resources"},(0,a.kt)("strong",{parentName:"h2"},"Resources")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419"},"Byzantine Fault Tolerance")," ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.codementor.io/blog/consensus-algorithms-5lr8exfi0s#types-of-consensus-algorithms"},"Type of Consensus Mechanisms")," ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/"},"Overview and History of Consensus System Development")," ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/s/story/lets-take-a-crack-at-understanding-distributed-consensus-dad23d0dc95"},"Understanding Distributed Consensus")," ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Byzantine_fault#Byzantine_Generals'_Problem"},"Byzantine Generals Problem"))))}f.isMDXComponent=!0}}]);