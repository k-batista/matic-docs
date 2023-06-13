"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[54045],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,u=h["".concat(c,".").concat(m)]||h[m]||l[m]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70012:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(44996),s=["components"],c={id:"bandchain",title:"BandChain",sidebar_label:"BandChain",description:"BandChain is a High-performance Blockchain Built for Data Oracle to query data from traditional web APIs",keywords:["wiki","polygon","oracles","bandchain","web apis","band protocol"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},p=void 0,d={unversionedId:"develop/oracles/bandchain",id:"develop/oracles/bandchain",title:"BandChain",description:"BandChain is a High-performance Blockchain Built for Data Oracle to query data from traditional web APIs",source:"@site/docs/develop/oracles/bandchain.md",sourceDirName:"develop/oracles",slug:"/develop/oracles/bandchain",permalink:"/matic-docs/docs/develop/oracles/bandchain",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/oracles/bandchain.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"bandchain",title:"BandChain",sidebar_label:"BandChain",description:"BandChain is a High-performance Blockchain Built for Data Oracle to query data from traditional web APIs",keywords:["wiki","polygon","oracles","bandchain","web apis","band protocol"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Band Protocol",permalink:"/matic-docs/docs/category/band-protocol"},next:{title:"Standard Dataset",permalink:"/matic-docs/docs/develop/oracles/bandstandarddataset"}},l={},h=[],m={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,o.kt)("ins",null,"here")),".")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Band Protocol allows you to query data from traditional web APIs and use it in the blockchain. Developers can make queries through ",(0,o.kt)("strong",{parentName:"p"},"BandChain, a cosmos-based blockchain")," for facilitating oracle requests and payment, and then use the data on the dApp through inter-chain communication. Integrating oracle data can be done in 3 simple steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Choosing the oracle scripts")),(0,o.kt)("p",{parentName:"li"},"Oracle script is a hash that uniquely identifies the type of data to be requested from band-chain. These scripts can be found ",(0,o.kt)("a",{parentName:"p",href:"https://guanyu-devnet.cosmoscan.io/oracle-scripts"},(0,o.kt)("strong",{parentName:"a"},"here")),". These scripts are used as one of the parameters while making the oracle request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Requesting Data from BandChain")),(0,o.kt)("p",{parentName:"li"},"This can be done in two ways:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using the BandChain explorer")),(0,o.kt)("p",{parentName:"li"},"  You can click on the oracle script of your choice, and then from the ",(0,o.kt)("strong",{parentName:"p"},"Execute")," tab you can pass in the parameters and get the response from BandChain. The response will contain the result and also an EVM proof. This proof has to be copied and will be used in the final step. The BandChain docs for querying oracle using explorer is available ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/dapp-developers/requesting-data-from-bandchain/requesting-data-via-explorer"},(0,o.kt)("strong",{parentName:"a"},"here")),"."),(0,o.kt)("img",{src:(0,i.Z)("img/bandchain/executeoracle.png")}),(0,o.kt)("p",{parentName:"li"},"  Given above is an example of making an oracle request to get the random number values. The value 100 is passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_range")," parameter of the oracle request. We get a hash in response. Clicking on this hash will show us the complete details of the response.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using the BandChain-Devnet JS Library")),(0,o.kt)("p",{parentName:"li"},"  You can query BandChain directly using the BandChain-Devnet library. When queried, it gives an ",(0,o.kt)("strong",{parentName:"p"},"EVM proof")," in the response. This proof can be used for the final step of BandChain integration. The BandChain docs for querying oracle using BandChain-Devnet JS Library is available ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/dapp-developers/requesting-data-from-bandchain/requesting-data-via-js-library"},(0,o.kt)("strong",{parentName:"a"},"here")),". The request payload for the random number oracle will look like this. Make sure the request body is passed in application/json format.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Using the data in Smart Contracts")),(0,o.kt)("p",{parentName:"li"},"The final step is to deploy a validation contract and store the responses from the oracle request into the validation contracts state variables. Once these state variables are set, they can be accessed as and when required by the dApp. Also these state variables can be updated with new values by querying the oracle scripts again from the dApp. Given below is a validation contract that stores the random number value using the random number oracle script."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'pragma solidity 0.5.14;\npragma experimental ABIEncoderV2;\n\nimport "BandChainLib.sol";\nimport "IBridge.sol";\n\ncontract SimplePriceDatabase {\n  using BandChainLib for bytes;\n\n  bytes32 public codeHash;\n  bytes public params;\n  IBridge public bridge;\n\n  uint256 public latestPrice;\n  uint256 public lastUpdate;\n\n  constructor(\n    bytes32 _codeHash ,\n    bytes memory _params,\n    IBridge _bridge\n  ) public {\n    codeHash = _codeHash;\n    params = _params;\n    bridge = _bridge;\n  }\n\n  function update(bytes memory _reportPrice) public {\n    IBridge.VerifyOracleDataResult memory result = bridge.relayAndVerify(_reportPrice);\n    uint64[] memory decodedInfo = result.data.toUint64List();\n\n    require(result.codeHash == codeHash, "INVALID_CODEHASH");\n    require(keccak256(result.params) == keccak256(params), "INVALID_PARAMS");\n    require(uint256(decodedInfo[1]) > lastUpdate, "TIMESTAMP_MUST_BE_OLDER_THAN_THE_LAST_UPDATE");\n\n    latestPrice = uint256(decodedInfo[0]);\n    lastUpdate = uint256(decodedInfo[1]);\n  }\n}\n')),(0,o.kt)("p",{parentName:"li"},"When deploying, 3 parameters have to be passed. The ",(0,o.kt)("strong",{parentName:"p"},"first parameter")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"codeHash")," which is the oracle script hash. The ",(0,o.kt)("strong",{parentName:"p"},"second parameter")," is the oracle script request parameters object. This has to be passed in bytes format. BandChain provides a REST API for converting the parameter JSON object to bytes format. The API details can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/references/encoding-params"},(0,o.kt)("strong",{parentName:"a"},"here")),". A 0x has to be appended to the response received from this API. The ",(0,o.kt)("strong",{parentName:"p"},"third parameter")," is the contract address of the BandChain contract that is already deployed on the Polygon network. Band Protocol supports Polygon TestnetV3: 0x3ba819b03fb8d34995f68304946eefa6dcff7cbf."),(0,o.kt)("p",{parentName:"li"},"Another thing to note is that the validation contract should import the helper library and interface which is called ",(0,o.kt)("inlineCode",{parentName:"p"},"BandChainLib.sol")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IBridge.sol")," respectively. They can be found in the following links: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/references/bandchainlib-library"},(0,o.kt)("strong",{parentName:"a"},"Bandchain"))," Library and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/references/ibridge-interface"},(0,o.kt)("strong",{parentName:"a"},"IBridge"))," interface."),(0,o.kt)("p",{parentName:"li"},"Once the validation contract is deployed, the state variables can be accessed by querying from a dApp. Similarly multiple validation contracts can be created for different in-built oracle scripts. The IBridge interface has a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"relayAndVerify()")," that verifies the values being updated each time in the validation contract. The ",(0,o.kt)("inlineCode",{parentName:"p"},"update()")," method in the validation contract has the logic to update the state variables. The EVM proof obtained from querying the oracle script has to be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"update()")," method. Each time a value is updated, the BandChain contract deployed on Polygon verifies the data before storing it in the contract state variable."),(0,o.kt)("p",{parentName:"li"},"The BandChain provides a decentralized network of oracles that can be used by dApps to boost their smart contract logic. The BandChain docs on deploying the contract, storing the values, and updating them can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/dapp-developers/requesting-data-from-bandchain/requesting-data-via-js-library"},(0,o.kt)("strong",{parentName:"a"},"here")),"."))))}u.isMDXComponent=!0}}]);