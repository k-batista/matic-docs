"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[19703],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),l=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,h=p["".concat(o,".").concat(u)]||p[u]||m[u]||s;return t?n.createElement(h,d(d({ref:a},c),{},{components:t})):n.createElement(h,d({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,d=new Array(s);d[0]=p;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var l=2;l<s;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87952:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),d=["components"],i={id:"chainmanager",title:"Chain Manager",description:"Module that provides all necessary dependencies",keywords:["docs","matic","chain manager","module","heimdall"],image:"https://matic.network/banners/matic-network-16x9.png"},o="Chain Manager",l={unversionedId:"pos/heimdall/modules/chainmanager",id:"pos/heimdall/modules/chainmanager",title:"Chain Manager",description:"Module that provides all necessary dependencies",source:"@site/docs/pos/heimdall/modules/chainmanager.md",sourceDirName:"pos/heimdall/modules",slug:"/pos/heimdall/modules/chainmanager",permalink:"/matic-docs/docs/pos/heimdall/modules/chainmanager",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/pos/heimdall/modules/chainmanager.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"chainmanager",title:"Chain Manager",description:"Module that provides all necessary dependencies",keywords:["docs","matic","chain manager","module","heimdall"],image:"https://matic.network/banners/matic-network-16x9.png"},sidebar:"pos",previous:{title:"Clerk",permalink:"/matic-docs/docs/pos/heimdall/modules/clerk"},next:{title:"Peppermint",permalink:"/matic-docs/docs/pos/peppermint"}},c={},m=[{value:"Types",id:"types",level:2},{value:"CLI Commands",id:"cli-commands",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Expected Result",id:"expected-result",level:3},{value:"REST APIs",id:"rest-apis",level:3}],p={toc:m};function u(e){var a=e.components,t=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"chain-manager"},"Chain Manager"),(0,s.kt)("p",null,"This document specifies an overview of the chain manager module of Heimdall."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"chain manager")," module provides all necessary dependencies like ",(0,s.kt)("inlineCode",{parentName:"p"},"contract-addresses"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bor_chain_id,")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tx_confirmation_time"),". Other parameters can be added to this later on."),(0,s.kt)("p",null,"Params are updated through the ",(0,s.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,s.kt)("h2",{id:"types"},"Types"),(0,s.kt)("p",null,"Chainmanager structure on Heimdall looks like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'type ChainParams struct {\n    // BorChainID is valid bor chainId\n    BorChainID            string                  `json:"bor_chain_id" yaml:"bor_chain_id"`\n\n    // MaticTokenAddress is valid matic token address\n    MaticTokenAddress     hmTypes.HeimdallAddress `json:"matic_token_address" yaml:"matic_token_address"`\n\n    // StakingManagerAddress is valid contract address\n    StakingManagerAddress hmTypes.HeimdallAddress `json:"staking_manager_address" yaml:"staking_manager_address"`\n\n    // RootChainAddress is valid contract address\n    RootChainAddress      hmTypes.HeimdallAddress `json:"root_chain_address" yaml:"root_chain_address"`\n\n    // StakingInfoAddress is valid contract address\n    StakingInfoAddress    hmTypes.HeimdallAddress `json:"staking_info_address" yaml:"staking_info_address"`\n\n    // StateSendedAddress is valid contract address\n    StateSenderAddress    hmTypes.HeimdallAddress `json:"state_sender_address" yaml:"state_sender_address"`\n\n    // Bor Chain Contracts\n    // StateReceiveAddress is valid contract address\n    StateReceiverAddress hmTypes.HeimdallAddress `json:"state_receiver_address" yaml:"state_receiver_address"`\n\n    // ValidatorSetAddress is valid contract address\n    ValidatorSetAddress  hmTypes.HeimdallAddress `json:"validator_set_address" yaml:"validator_set_address"`\n}\n')),(0,s.kt)("h2",{id:"cli-commands"},"CLI Commands"),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"To print all params;"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"heimdallcli query chainmanager params --trust-node\n")),(0,s.kt)("h3",{id:"expected-result"},"Expected Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'tx_confirmation_time: 12s\nchain_params:\n  bor_chain_id: "15001"\n  matic_token_address: "0x0000000000000000000000000000000000000000"\n  staking_manager_address: "0x0000000000000000000000000000000000000000"\n  root_chain_address: "0x0000000000000000000000000000000000000000"\n  staking_info_address: "0x0000000000000000000000000000000000000000"\n  state_sender_address: "0x0000000000000000000000000000000000000000"\n  state_receiver_address: "0x0000000000000000000000000000000000000000"\n  validator_set_address: "0x0000000000000000000000000000000000000000"\n')),(0,s.kt)("h3",{id:"rest-apis"},"REST APIs"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"URL"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Params"),(0,s.kt)("td",{parentName:"tr",align:null},"GET"),(0,s.kt)("td",{parentName:"tr",align:null},"chainmanager/params")))),(0,s.kt)("p",null,"All query APIs will provide response in the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "height": "1",\n    "result": {\n        ...   \n    }\n}\n')))}u.isMDXComponent=!0}}]);