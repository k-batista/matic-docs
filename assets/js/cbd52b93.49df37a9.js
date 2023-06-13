"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[84602],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(44996),["components"]),s={id:"archive-node-nodereal",title:"Using NodeReal",description:"Quick and easy third-party service that handles node requests and returns archive responses",keywords:["docs","matic","polygon","node","nodereal","query","archive node"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},l=void 0,d={unversionedId:"operate/archive-node-nodereal",id:"operate/archive-node-nodereal",title:"Using NodeReal",description:"Quick and easy third-party service that handles node requests and returns archive responses",source:"@site/docs/operate/archive-node-nodereal.md",sourceDirName:"operate",slug:"/operate/archive-node-nodereal",permalink:"/matic-docs/docs/operate/archive-node-nodereal",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/operate/archive-node-nodereal.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"archive-node-nodereal",title:"Using NodeReal",description:"Quick and easy third-party service that handles node requests and returns archive responses",keywords:["docs","matic","polygon","node","nodereal","query","archive node"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"operatepos",previous:{title:"Using Erigon Client",permalink:"/matic-docs/docs/operate/erigon-client"}},c={},p=[{value:"Get access to an Archive Node with NodeReal",id:"get-access-to-an-archive-node-with-nodereal",level:2},{value:"Send Your First Blockchain API Request",id:"send-your-first-blockchain-api-request",level:2},{value:"Create Your First API Key",id:"create-your-first-api-key",level:3},{value:"Find Your API Key",id:"find-your-api-key",level:3},{value:"Make Your First RPC Request",id:"make-your-first-rpc-request",level:2},{value:"Install the Web3.js SDK\u200b",id:"install-the-web3js-sdk",level:2},{value:"Create <code>index.js</code>",id:"create-indexjs",level:3},{value:"Install dependency for <code>index.js</code>",id:"install-dependency-for-indexjs",level:3},{value:"Run <code>index.js</code> Using node",id:"run-indexjs-using-node",level:3},{value:"Response in Your Terminal",id:"response-in-your-terminal",level:3},{value:"Self-Service Troubleshooting for MegaNode users",id:"self-service-troubleshooting-for-meganode-users",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,o.kt)("ins",null,"here")),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"get-access-to-an-archive-node-with-nodereal"},"Get access to an Archive Node with NodeReal"),(0,o.kt)("p",null,"If you're new to Web3 development, ",(0,o.kt)("a",{parentName:"p",href:"https://nodereal.io/"},"NodeReal")," simplifies the process of setting up a full node on Polygon."),(0,o.kt)("admonition",{title:"Simplify Polygon node usage with NodeReal and its quality assurance capabilities",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Many developers prefer to use a node provider when getting started on Polygon, or any chain for that matter, as it offers a quick and easy way to handle requests and responses. NodeReal offers a range of features for developers looking for a node provider on the Polygon network. These features include a Standard Interface that simplifies node usage, as well as reliability and scalability for optimal performance. Additionally, NodeReal offers Archive Data for secure data storage, and an API Marketplace that provides additional resources for developers looking to build on Polygon.")),(0,o.kt)("h2",{id:"send-your-first-blockchain-api-request"},"Send Your First Blockchain API Request"),(0,o.kt)("p",null,"If you haven't signed up for a MegaNode account yet, you can find a step-by-step guide to getting started ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/getting-started"},"here"),". Once you have a MegaNode account and access to the NodeReal Dashboard, you're ready to proceed."),(0,o.kt)("h3",{id:"create-your-first-api-key"},"Create Your First API Key"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.readme.io/9352cd2-Screen_Shot_2023-01-10_at_19.26.00.png",alt:"MegaNode User's Dashboard without API key created"})),(0,o.kt)("p",null,"To start sending RPC requests on MegaNode, you'll need to create an API Key. This project-based unit is used to manage your API requests, and requires you to input a name for the key and leave any notes you prefer for future reference. Here's how to get started:"),(0,o.kt)("admonition",{title:"One API key for all chains",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"With only one API Key, you can request all the chains and networks we support on NodeReal.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Get started ","\u2192")," Input an API ",(0,o.kt)("strong",{parentName:"p"},"Key name")," and leave any ",(0,o.kt)("strong",{parentName:"p"},"notes")," you prefer:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.readme.io/bd84a9f-Screen_Shot_2023-01-10_at_19.29.31.png",alt:"Create An API Key"})),(0,o.kt)("p",null,"After you have created an API Key, you can find a dashboard on the main screen."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.readme.io/b715e5a-Screen_Shot_2023-01-10_at_19.31.18.png",alt:"MegaNode User's Dashboard"})),(0,o.kt)("admonition",{title:"How many API Keys can I create?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The number of available API Keys is subjected to the pricing plan.")),(0,o.kt)("h3",{id:"find-your-api-key"},"Find Your API Key"),(0,o.kt)("p",null,"After you have successfully created an API Key, you can find the API endpoints on the API Key detail page. Please note that this API key is used to identify a particular user and should ",(0,o.kt)("strong",{parentName:"p"},"NOT")," be shared with anyone."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.readme.io/ce6a39d-Screen_Shot_2023-01-10_at_19.34.38.png",alt:"Created Your First API key"})),(0,o.kt)("h2",{id:"make-your-first-rpc-request"},"Make Your First RPC Request"),(0,o.kt)("p",null,"After you find the API Key, you can now start to send RPC requests on MegaNode. Please note that all usage will be calculated on an account basis. You can find our API docs ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/reference"},"here"),". Furthermore, you can find more information about the Compute Unit (CU) usage ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/compute-units-cus"},"here")," and the account Compute Unit Per Second (CUPS) rate limits ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/cups-rate-limit"},"here"),"."),(0,o.kt)("admonition",{title:"Any concern about your Privacy?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out NodeReal ",(0,o.kt)("a",{parentName:"p",href:"https://nodereal.io/privacy-policy"},(0,o.kt)("ins",null,"Privacy Policy")),".")),(0,o.kt)("p",null,"We\u2019ll be using ",(0,o.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.8.2/"},"Web3.js")," libraries to make our first RPC request."),(0,o.kt)("h2",{id:"install-the-web3js-sdk"},"Install the Web3.js SDK\u200b"),(0,o.kt)("p",null,"If you want to create a project, install Web3.js SDK, and then navigate to your project directory to run the installation. Once we're in our home directory, let's execute the following:"),(0,o.kt)("p",null,"With Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir your-project-name\ncd your-project-name\nyarn init # (or yarn init --yes)\nyarn add web3\n")),(0,o.kt)("p",null,"With NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir your-project-name\ncd your-project-name\nnpm init   # (or npm init --yes)\nnpm install web3\n")),(0,o.kt)("h3",{id:"create-indexjs"},"Create ",(0,o.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,o.kt)("p",null,"Create a JavaScript file named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," and paste the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"const Web3 = require('web3');\n\n// Set up a new web3 instance\nconst web3 = new Web3('https://polygon-mainnet.nodereal.io/v1/<API~KEY> ');\n\n\n// Get the latest block number\nweb3.eth.getBlockNumber()\n  .then((latestBlockNumber) => {\n    console.log(`Latest block number: ${latestBlockNumber}`);\n\n\n    // Get the latest block details\n    return web3.eth.getBlock(latestBlockNumber);\n  })\n  .then((latestBlock) => {\n    console.log('Latest block details:', latestBlock);\n  })\n  .catch((err) => {\n    console.error('Error:', err);\n  });\n\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<API KEY>")," with your NodeReal Https API key."),(0,o.kt)("p",null,"You can retrieve the Polygon ",(0,o.kt)("strong",{parentName:"p"},"HTTPS URL")," from your dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.readme.io/94f4b79-Screen_Shot_2023-01-16_at_20.24.34.png",alt:"Click on Polygon Standard API"})),(0,o.kt)("p",null,"If you encounter any issues, do reach out to us at (Discord)","[https://discord.com/invite/nodereal]","."),(0,o.kt)("h3",{id:"install-dependency-for-indexjs"},"Install dependency for ",(0,o.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,o.kt)("p",null,"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3\n")),(0,o.kt)("p",null,"yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add web3\n")),(0,o.kt)("h3",{id:"run-indexjs-using-node"},"Run ",(0,o.kt)("inlineCode",{parentName:"h3"},"index.js")," Using node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,o.kt)("h3",{id:"response-in-your-terminal"},"Response in Your Terminal"),(0,o.kt)("p",null,"You should be able to see the latest block number and block details on your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Latest block number: 40302452\nLatest block details: {.............}\n")),(0,o.kt)("h3",{id:"self-service-troubleshooting-for-meganode-users"},"Self-Service Troubleshooting for MegaNode users"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/support"},"MegaNode Errors")," for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Great work! You managed to write a working Web3 script and sent your first request via NodeReal API endpoint.")))}h.isMDXComponent=!0}}]);