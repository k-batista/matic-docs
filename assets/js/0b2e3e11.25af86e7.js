"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[14142],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=(n(44996),["components"]),o={id:"chainlink",title:"Chainlink",sidebar_label:"Chainlink",description:"Chainlink is a decentralized blockchain oracle network built on Ethereum.",keywords:["wiki","polygon","chainlink","oracle","decentralized","data"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,d={unversionedId:"develop/oracles/chainlink",id:"develop/oracles/chainlink",title:"Chainlink",description:"Chainlink is a decentralized blockchain oracle network built on Ethereum.",source:"@site/docs/develop/oracles/chainlink.md",sourceDirName:"develop/oracles",slug:"/develop/oracles/chainlink",permalink:"/matic-docs/docs/develop/oracles/chainlink",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/oracles/chainlink.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"chainlink",title:"Chainlink",sidebar_label:"Chainlink",description:"Chainlink is a decentralized blockchain oracle network built on Ethereum.",keywords:["wiki","polygon","chainlink","oracle","decentralized","data"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Standard Dataset",permalink:"/matic-docs/docs/develop/oracles/bandstandarddataset"},next:{title:"UMA",permalink:"/matic-docs/docs/develop/oracles/optimisticoracle"}},p={},c=[{value:"Decentralized Data",id:"decentralized-data",level:2},{value:"Request and Receive Cycle",id:"request-and-receive-cycle",level:2},{value:"Uses",id:"uses",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Mainnet Polygon LINK token",id:"mainnet-polygon-link-token",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Supported APIs",id:"supported-apis",level:2},{value:"What Are Job IDs For?",id:"what-are-job-ids-for",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,i.kt)("ins",null,"here")),".")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Chainlink")," enables your contracts to ",(0,i.kt)("strong",{parentName:"p"},"access any external data source"),", through a decentralized oracle network. Whether your contract requires sports results, the latest weather, or any other publicly available data, Chainlink provides the tools required for your contract to consume it."),(0,i.kt)("h2",{id:"decentralized-data"},"Decentralized Data"),(0,i.kt)("p",null,"One of Chainlink's most powerful features is already decentralized, aggregated, and ready to be digested on-chain data on most of the popular cryptocurrencies. These are known as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/docs/using-chainlink-reference-contracts"},(0,i.kt)("strong",{parentName:"a"},"Chainlink Data Feeds")),"."),(0,i.kt)("p",null,"Here is a working example of a contract that pulls the latest price of MATIC in USD on the Mumbai Testnet."),(0,i.kt)("p",null,"All you need to do is swap out the address ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/docs/matic-addresses#config"},"with any address of a data feed")," that you wish, and you can start digesting price information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pragma solidity ^0.6.7;\n\nimport "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";\n\ncontract PriceConsumerV3 {\n    AggregatorV3Interface internal priceFeed;\n\n    /**\n     * Network: Mumbai Testnet\n     * Aggregator: MATIC/USD\n     * Address: 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada\n     */\n    constructor() public {\n        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada);\n    }\n\n    /**\n     * Returns the latest price\n     */\n    function getLatestPrice() public view returns (int) {\n        (\n            uint80 roundID,\n            int price,\n            uint startedAt,\n            uint timeStamp,\n            uint80 answeredInRound\n        ) = priceFeed.latestRoundData();\n        return price;\n    }\n}\n')),(0,i.kt)("h2",{id:"request-and-receive-cycle"},"Request and Receive Cycle"),(0,i.kt)("p",null,"Chainlink's Request and Receive cycle enables your smart contracts to make a request to any external API and consume the response. To implement it, your contract needs to define two functions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"One to ",(0,i.kt)("strong",{parentName:"li"},"request the data"),", and"),(0,i.kt)("li",{parentName:"ol"},"Another to ",(0,i.kt)("strong",{parentName:"li"},"receive the response"),".")),(0,i.kt)("p",null,"To request data, your contract builds a ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," object which it provides to an oracle. Once the oracle has reached out to the API and parsed the response, it will attempt to send the data back to your contract using the callback function defined in your smart contract."),(0,i.kt)("h2",{id:"uses"},"Uses"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Chainlink Data Feeds")),(0,i.kt)("p",{parentName:"li"},"These are decentralized data reference points already aggregated on-chain, and the quickest, easiest, and cheapest way to get data from the real world. Currently supports some of the most popular cryptocurrency and fiat pairs."),(0,i.kt)("p",{parentName:"li"},"For working with Data Feeds, use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/data-feeds/price-feeds/addresses/?network=polygon"},(0,i.kt)("strong",{parentName:"a"},"Polygon Data Feeds"))," from the Chainlink documenation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Chainlink Verifiable Randomness Function")),(0,i.kt)("p",{parentName:"li"},"Get provably random numbers, where the random number is cryptographically guaranteed to be random."),(0,i.kt)("p",{parentName:"li"},"For working with Chainlink VRF, use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/vrf/v2/subscription/supported-networks"},(0,i.kt)("strong",{parentName:"a"},"Polygon VRF"))," addresses from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/vrf/v2/subscription/examples/get-a-random-number"},"Chainlink documentation"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Chainlink API Calls")),(0,i.kt)("p",{parentName:"li"},"How to configure your smart contract to work with traditional APIs, and customize to get any data, send any requests over the internet, and more."))),(0,i.kt)("h2",{id:"code-example"},"Code Example"),(0,i.kt)("p",null,"To interact with external APIs, your smart contract should inherit from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/ChainlinkClient.sol"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainlinkClient.sol")),", which is a contract designed to make processing requests easy. It exposes a struct called ",(0,i.kt)("inlineCode",{parentName:"p"},"Chainlink.Request"),", which your contract should use to build the API request."),(0,i.kt)("p",null,"The request should define the oracle address, job id, fee, adapter parameters, and the callback function signature. In this example, the request is built in the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestEthereumPrice")," function."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fulfill")," is defined as the callback function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pragma solidity ^0.6.0;\n\nimport "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";\n\ncontract APIConsumer is ChainlinkClient {\n\n    uint256 public price;\n\n    address private oracle;\n    bytes32 private jobId;\n    uint256 private fee;\n\n    /**\n     * Network: Polygon Mumbai Testnet\n     * Oracle: 0x58bbdbfb6fca3129b91f0dbe372098123b38b5e9\n     * Job ID: da20aae0e4c843f6949e5cb3f7cfe8c4\n     * LINK address: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB\n     * Fee: 0.01 LINK\n     */\n    constructor() public {\n        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);\n        oracle = 0x58bbdbfb6fca3129b91f0dbe372098123b38b5e9;\n        jobId = "da20aae0e4c843f6949e5cb3f7cfe8c4";\n        fee = 10 ** 16; // 0.01 LINK\n    }\n\n    /**\n     * Create a Chainlink request to retrieve API response, find the target price\n     * data, then multiply by 100 (to remove decimal places from price).\n     */\n    function requestBTCCNYPrice() public returns (bytes32 requestId)\n    {\n        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);\n\n        // Set the URL to perform the GET request on\n        // NOTE: If this oracle gets more than 5 requests from this job at a time, it will not return.\n        request.add("get", "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo");\n\n       // Set the path to find the desired data in the API response, where the response format is:\n       // {\n       //     "Realtime Currency Exchange Rate": {\n       //       "1. From_Currency Code": "BTC",\n       //       "2. From_Currency Name": "Bitcoin",\n       //       "3. To_Currency Code": "CNY",\n       //       "4. To_Currency Name": "Chinese Yuan",\n       //       "5. Exchange Rate": "207838.88814500",\n       //       "6. Last Refreshed": "2021-01-26 11:11:07",\n       //       "7. Time Zone": "UTC",\n       //      "8. Bid Price": "207838.82343000",\n       //       "9. Ask Price": "207838.88814500"\n       //     }\n       //     }\n        string[] memory path = new string[](2);\n        path[0] = "Realtime Currency Exchange Rate";\n        path[1] = "5. Exchange Rate";\n        request.addStringArray("path", path);\n\n        // Multiply the result by 10000000000 to remove decimals\n        request.addInt("times", 10000000000);\n\n        // Sends the request\n        return sendChainlinkRequestTo(oracle, request, fee);\n    }\n\n    /**\n     * Receive the response in the form of uint256\n     */\n    function fulfill(bytes32 _requestId, uint256 _price) public recordChainlinkFulfillment(_requestId)\n    {\n        price = _price;\n    }\n}\n')),(0,i.kt)("h2",{id:"mainnet-polygon-link-token"},"Mainnet Polygon LINK token"),(0,i.kt)("p",null,"To get mainnet Polygon LINK token from the Ethereum Mainnet, you must follow a 2-step process."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Bridge your LINK using the Plasma or ",(0,i.kt)("a",{parentName:"li",href:"https://wallet.polygon.technology/bridge"},"PoS bridge"),"."),(0,i.kt)("li",{parentName:"ol"},"Swap the LINK for the ERC677 version via the ",(0,i.kt)("a",{parentName:"li",href:"https://pegswap.chain.link/"},"Pegswap, deployed by the Chainlink"),".")),(0,i.kt)("p",null,"The Polygon bridge brings over an ERC20 version of LINK, and LINK is an ERC677, so we just have to update it with this swap."),(0,i.kt)("h2",{id:"addresses"},"Addresses"),(0,i.kt)("p",null,"There are currently only a few operational Chainlink oracles on the Polygon Mumbai Testnet. You can always run one yourself too, and list it on the Chainlink Marketplace."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Oracle: ",(0,i.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/address/0x58bbdbfb6fca3129b91f0dbe372098123b38b5e9/transactions"},(0,i.kt)("inlineCode",{parentName:"a"},"0xb33D8A4e62236eA91F3a8fD7ab15A95B9B7eEc7D"))),(0,i.kt)("li",{parentName:"ul"},"LINK: ",(0,i.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/address/0x70d1F773A9f81C852087B77F6Ae6d3032B02D2AB/transactions"},(0,i.kt)("inlineCode",{parentName:"a"},"0x326C977E6efc84E512bB9C30f76E30c160eD06FB")))),(0,i.kt)("p",null,"To obtain LINK on Mumbai Testnet, head to the ",(0,i.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"Polygon faucet here"),"."),(0,i.kt)("h2",{id:"supported-apis"},"Supported APIs"),(0,i.kt)("p",null,"Chainlink's Request and Receive cycle is flexible enough to call any public API, so long as the request parameters are correct and the response format is known. For example, if the response object from a URL we want to fetch from is formatted like this: ",(0,i.kt)("inlineCode",{parentName:"p"},'{"USD":243.33}'),", the path is simple: ",(0,i.kt)("inlineCode",{parentName:"p"},'"USD"'),"."),(0,i.kt)("p",null,"If an API responds with a complex JSON object, the ",(0,i.kt)("strong",{parentName:"p"},"path")," parameter would need to specify where to retrieve the desired data, using a dot delimited string for nested objects. For example, consider the following response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "Prices":{\n        "USD":243.33\n    }\n}\n')),(0,i.kt)("p",null,"This would require the following path: ",(0,i.kt)("inlineCode",{parentName:"p"},'"Prices.USD"'),". If there are spaces in the strings, or the strings are quite long, we can use the syntax shown in the example above, where we pass them all as a string array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'string[] memory path = new string[](2);\npath[0] = "Prices";\npath[1] = "USD";\nrequest.addStringArray("path", path);\n')),(0,i.kt)("h2",{id:"what-are-job-ids-for"},"What Are Job IDs For?"),(0,i.kt)("p",null,"You may have noticed that our ",(0,i.kt)("a",{parentName:"p",href:"#code-example"},"example")," uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"jobId")," parameter when building the request. Jobs are comprised of a sequence of instructions that an oracle is configured to run. In the ",(0,i.kt)("a",{parentName:"p",href:"#code-example"},"code example")," above, the contract makes a request to the oracle with the job ID: ",(0,i.kt)("inlineCode",{parentName:"p"},"da20aae0e4c843f6949e5cb3f7cfe8c4"),". This particular job is configured to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make a GET request"),(0,i.kt)("li",{parentName:"ul"},"Parse the JSON response"),(0,i.kt)("li",{parentName:"ul"},"Multiply the value by ",(0,i.kt)("em",{parentName:"li"},"x")),(0,i.kt)("li",{parentName:"ul"},"Convert the value to ",(0,i.kt)("inlineCode",{parentName:"li"},"uint")),(0,i.kt)("li",{parentName:"ul"},"Submit to the chain")),(0,i.kt)("p",null,"This is why our contract adds in the URL, the path of where to find the desired data in the JSON response, and the times amount to the request; using the ",(0,i.kt)("inlineCode",{parentName:"p"},"request.add")," statements. These instructions are facilitated by what's known as Adapters, in the oracle."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Every request to an oracle must include a specific job ID.")),(0,i.kt)("p",null,"Here is the list of jobs that the Polygon oracle is configured to run."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Return Type"),(0,i.kt)("th",{parentName:"tr",align:null},"ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Adapters"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTP GET"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uint256")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"da20aae0e4c843f6949e5cb3f7cfe8c4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httpget"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"jsonparse"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"multiply"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethuint256"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethtx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTP GET"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int256")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"e0c76e45462f4e429ba32c114bfbf5ac ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httpget"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"jsonparse"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"multiply"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethint256"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethtx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTP GET"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"999539ec63414233bdc989d8a8ff10aa ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httpget"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"jsonparse"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethbool"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethtx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTP GET"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"a82495a8fd5b4cb492b17dc0cc31a4fe ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httpget"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"jsonparse"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethbytes32"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethtx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTP GET"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7d80a6386ef543a3abb52817f6707e3b ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httpget"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"jsonparse"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethstring"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethtx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTP POST"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"a82495a8fd5b4cb492b17dc0cc31a4fe ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httppost"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"jsonparse"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethbytes32"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"ethtx"))))),(0,i.kt)("p",null,"The complete Chainlink API reference can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/any-api/api-reference"},"here"),"."))}m.isMDXComponent=!0}}]);