"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[88708],{3905:function(t,e,o){o.d(e,{Zo:function(){return s},kt:function(){return m}});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(o),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return o?a.createElement(h,l(l({ref:e},s),{},{components:o})):a.createElement(h,l({ref:e},s))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},48679:function(t,e,o){o.r(e),o.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),l=(o(44996),["components"]),i={id:"replit",title:"Deploy a Smart Contract Using Replit",sidebar_label:"Using Replit",description:"Deploy Smart Contracts using ReplitIDE on Polygon",keywords:["docs","matic","replit","deploy","smart contract","polygon","IDE"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},p=void 0,c={unversionedId:"develop/replit",id:"develop/replit",title:"Deploy a Smart Contract Using Replit",description:"Deploy Smart Contracts using ReplitIDE on Polygon",source:"@site/docs/develop/replit.md",sourceDirName:"develop",slug:"/develop/replit",permalink:"/matic-docs/docs/develop/replit",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/replit.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"replit",title:"Deploy a Smart Contract Using Replit",sidebar_label:"Using Replit",description:"Deploy Smart Contracts using ReplitIDE on Polygon",keywords:["docs","matic","replit","deploy","smart contract","polygon","IDE"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Using Hardhat",permalink:"/matic-docs/docs/develop/hardhat"},next:{title:"Using GetBlock",permalink:"/matic-docs/docs/develop/getblock"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"What you will do",id:"what-you-will-do",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Working with a Repl",id:"working-with-a-repl",level:2},{value:"Deploy on Polygon",id:"deploy-on-polygon",level:2},{value:"Verifying and Testing your Contract",id:"verifying-and-testing-your-contract",level:2},{value:"Publish to Replit\u200b",id:"publish-to-replit",level:2}],d={toc:u};function m(t){var e=t.components,i=(0,n.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.replit.com/tutorials/01-introduction-to-the-repl-it-ide"},"Replit")," is a coding platform that allows you to write code and host apps. Replit supports ",(0,r.kt)("a",{parentName:"p",href:"https://replit.com/@replit/Solidity-starter-beta?v=1"},"Solidity programming language")," so it provides all of the features and functionality for Web3 developers to create and deploy smart contracts."),(0,r.kt)("p",null,"This article guides you to build and deploy a solidity smart contract on Polygon using ",(0,r.kt)("a",{parentName:"p",href:"https://replit.com/signup"},"Replit IDE")," and ",(0,r.kt)("a",{parentName:"p",href:"https://replit.com/@replit/Solidity-starter-beta?v=1"},"Replit Solidity development template (Solidity starter beta)"),"."),(0,r.kt)("h2",{id:"what-you-will-do"},"What you will do"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a Replit account"),(0,r.kt)("li",{parentName:"ul"},"Create a Repl environment"),(0,r.kt)("li",{parentName:"ul"},"Deploy a sample project on the Polygon Mumbai network"),(0,r.kt)("li",{parentName:"ul"},"Verify the contract"),(0,r.kt)("li",{parentName:"ul"},"Publish your project to a personal Replit profile.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For additional examples about Solidity with Replit, you can read the article ",(0,r.kt)("ins",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://blog.replit.com/solidity"},"Get started with Replit")))," or check ",(0,r.kt)("ins",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.replit.com/tutorials/33-escrow-contract-with-solidity"},"Replit Solidity documentation and Escrow contract tutorial"))),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You do not need any local environment setup to deploy your solidity smart contract on Polygon using Replit."),(0,r.kt)("p",null,"You need a browser-based Web3 wallet to interact with the Polygon Mumbai Testnet and deployed contracts. If you are already using MetaMask, it is recommended to create a new account for testing with Replit. You can do this from the account menu, which appears when you click on the account avatar in the top right corner of MetaMask interface."),(0,r.kt)("p",null,"You must set up all of the following prerequisites to be able to deploy your solidity smart contract on Polygon:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://replit.com/signup"},"Create a Replit account")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/develop/metamask/hello"},"Download MetaMask wallet")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/develop/metamask/config-polygon-on-metamask"},"Configure Polygon on MetaMask")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://faucet.polygon.technology"},"Get testnet tokens"))),(0,r.kt)("h2",{id:"working-with-a-repl"},"Working with a Repl"),(0,r.kt)("p",null,"Every Repl that you create is a fully functional development and production environment. Follow the steps to create a solidity starter Replit:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://replit.com/login"},"Log in")," or ",(0,r.kt)("a",{parentName:"p",href:"https://replit.com/signup"},"create an account"),". After creating your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.replit.com/tutorials/01-introduction-to-the-repl-it-ide"},"Replit account"),", your home screen will include a dashboard where you can view, create projects, and manage your account."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img",src:o(26799).Z,width:"2543",height:"1210"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once logged in, create a Solidity starter repl, Select ",(0,r.kt)("strong",{parentName:"p"},"+ Create Repl")," from the left panel or ",(0,r.kt)("strong",{parentName:"p"},"+")," in the top right corner of the screen."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img",src:o(78668).Z,width:"930",height:"559"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("a",{parentName:"p",href:"https://replit.com/@replit/Solidity-starter-beta?v=1"},(0,r.kt)("strong",{parentName:"a"},"Solidity starter (beta)"))," template and give your project a title.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+ Create Repl")," to create your project."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Solidity starter repl comes with a browser-friendly interface, built using the ",(0,r.kt)("ins",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://web3js.readthedocs.io/en/v1.5.2/"},"Web3 Ethereum JavaScript API"))),", which you can use to deploy and interact with our contracts. We will deploy to Replit\u2019s testnet, a custom version of the Ethereum blockchain managed by Replit and optimised for testing.")),(0,r.kt)("h2",{id:"deploy-on-polygon"},"Deploy on Polygon"),(0,r.kt)("p",null,"Make sure that you have followed the list of ",(0,r.kt)("strong",{parentName:"p"},"Prerequisites")," above so that you are ready to deploy and interact with your smart contract."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Run")," (at the Top) to install all relevant packages and start up the contract deployment UI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect your MetaMask wallet to the web interface and switch to the ",(0,r.kt)("a",{parentName:"p",href:"docs/develop/metamask/config-polygon-on-metamask"},"Mumbai Testnet"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(26610).Z,width:"998",height:"561"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Connect wallet"),", select your account, then choose ",(0,r.kt)("strong",{parentName:"li"},"Connect"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(63116).Z,width:"1058",height:"392"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the dropdown list, select the contract that you want to deploy. Click on ",(0,r.kt)("strong",{parentName:"p"},"Deploy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will receive a MetaMask popup window asking for your confirmation. Approve the transaction from your wallet to deploy your contract."))),(0,r.kt)("h2",{id:"verifying-and-testing-your-contract"},"Verifying and Testing your Contract"),(0,r.kt)("p",null,"When the contract is deployed, ",(0,r.kt)("a",{parentName:"p",href:"https://mumbai.polygonscan.com/"},"navigate to Polyganscan")," to search for your account, view your deployed contract, and copy your account address."),(0,r.kt)("p",null,"Once your contract has been deployed, it will show up as expandable boxes below the dropdown box. Expand it and take a look at all the different functions available. You can now interact with your contract using the provided user interface or from a sharable URL shown on the interface."),(0,r.kt)("h2",{id:"publish-to-replit"},"Publish to Replit\u200b"),(0,r.kt)("p",null,"Replit allows you to publish your projects to a personal profile. After publishing, projects will show up on your spotlight page for others to explore, interact with, clone, and collaborate."),(0,r.kt)("p",null,"Follow the below steps to publish your projects to Replit:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the project title at the top of the screen."),(0,r.kt)("li",{parentName:"ol"},"Complete your project name and description and click ",(0,r.kt)("strong",{parentName:"li"},"Publish"),".")))}m.isMDXComponent=!0},26610:function(t,e,o){e.Z=o.p+"assets/images/connect-3a06ea76045bb6d2fd6476db419647c0.png"},26799:function(t,e,o){e.Z=o.p+"assets/images/dashboard-3efd146b9207f0790fb7fe78a55d2871.png"},63116:function(t,e,o){e.Z=o.p+"assets/images/deploy-list-b9b6d65a69268f79f6ee3d378e11cc63.png"},78668:function(t,e,o){e.Z=o.p+"assets/images/solidity-add2b5390a103da6778ffd8e3eca2e57.png"}}]);