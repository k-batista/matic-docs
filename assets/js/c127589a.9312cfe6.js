"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[96088],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"overview",title:"Overview of MetaMask",sidebar_label:"Overview",description:"How you can get started with MetaMask on Polygon",keywords:["wiki","polygon","wallet","metamask"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},l=void 0,c={unversionedId:"develop/metamask/overview",id:"develop/metamask/overview",title:"Overview of MetaMask",description:"How you can get started with MetaMask on Polygon",source:"@site/docs/develop/metamask/overview.md",sourceDirName:"develop/metamask",slug:"/develop/metamask/overview",permalink:"/matic-docs/docs/develop/metamask/overview",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/metamask/overview.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"overview",title:"Overview of MetaMask",sidebar_label:"Overview",description:"How you can get started with MetaMask on Polygon",keywords:["wiki","polygon","wallet","metamask"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Metamask",permalink:"/matic-docs/docs/category/metamask"},next:{title:"Hello Metamask",permalink:"/matic-docs/docs/develop/metamask/hello"}},u={},p=[{value:"Guide to set up MetaMask for Polygon",id:"guide-to-set-up-metamask-for-polygon",level:2},{value:"1. Set up Web3",id:"1-set-up-web3",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"2. Set up account",id:"2-set-up-account",level:3},{value:"3. Instantiate your contracts",id:"3-instantiate-your-contracts",level:3},{value:"4. Call functions",id:"4-call-functions",level:3},{value:"Calling <code>call()</code> Functions",id:"calling-call-functions",level:4},{value:"Calling <code>send()</code> Functions",id:"calling-send-functions",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,r.kt)("ins",null,"here")),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is a crypto wallet that can be used in a web browser and on mobile devices to interact with the Ethereum blockchain. It allows you to run Ethereum Dapps (Decentralized Apps) right in your browser without running a full Ethereum node."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Non-custodial/HD ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Private Key Storage"),": User\u2019s local browser storage ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Communication to Ethereum Ledger"),": Infura ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Private key encoding"),": Mnemonic ",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"}," Please Backup your ",(0,r.kt)("strong",{parentName:"p"},"Secret Recovery Phrase"),". If your device breaks, is lost, stolen, or has data corruption, there is no other way to recover it. The Secret Recovery Phrase is the only way to recover your MetaMask accounts. Check more ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489591-Basic-Safety-and-Security-Tips-for-MetaMask"},(0,r.kt)("ins",null,"Basic Safety and Security Tips for MetaMask"))),".")),(0,r.kt)("h2",{id:"guide-to-set-up-metamask-for-polygon"},"Guide to set up MetaMask for Polygon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/develop/metamask/hello"},"Download & Install MetaMask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/develop/metamask/config-polygon-on-metamask"},"Configure Polygon on MetaMask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/develop/metamask/custom-tokens"},"Config Custom Tokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/develop/metamask/multiple-accounts"},"Create & Import Accounts"))),(0,r.kt)("h3",{id:"1-set-up-web3"},"1. Set up Web3"),(0,r.kt)("h4",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"Install the following in your DApp:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install --save web3\n")),(0,r.kt)("p",null,"Create a new file, name it ",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js")," and insert the following code in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Web3 from 'web3';\n\nconst getWeb3 = () => new Promise((resolve) => {\n  window.addEventListener('load', () => {\n    let currentWeb3;\n\n    if (window.ethereum) {\n      currentWeb3 = new Web3(window.ethereum);\n      try {\n        // Request account access if needed\n        window.ethereum.enable();\n        // Acccounts now exposed\n        resolve(currentWeb3);\n      } catch (error) {\n        // User denied account access...\n        alert('Please allow access for the app to work');\n      }\n    } else if (window.web3) {\n      window.web3 = new Web3(web3.currentProvider);\n      // Acccounts always exposed\n      resolve(currentWeb3);\n    } else {\n      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');\n    }\n  });\n});\n\n\nexport default getWeb3;\n")),(0,r.kt)("p",null,"The above file exports a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"getWeb3()")," - the purpose of which is to request MetaMask account\u2019s access via detecting a global object (",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"web3"),") injected by Metamask."),(0,r.kt)("p",null,"According to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.metamask.io/guide/ethereum-provider.html#upcoming-provider-changes"},"Metamask\u2019s API documentation"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"MetaMask injects a global API into websites visited by its users at window.ethereum. This API allows websites to request users' Ethereum accounts, read data from blockchains the user is connected to, and suggest that the user sign messages and transactions. The presence of the provider object indicates an Ethereum user.")),(0,r.kt)("p",null,"In simpler terms, it basically means that having Metamask\u2019s extension/add-on installed in your browser, you\u2019d have a global variable defined, called ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," (",(0,r.kt)("inlineCode",{parentName:"p"},"web3")," for older versions), and using this variable we instantiate our web3 object."),(0,r.kt)("h4",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"Now, in your client code, import the above file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  import getWeb3 from '/path/to/web3';\n")),(0,r.kt)("p",null,"and call the function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  getWeb3()\n    .then((result) => {\n      this.web3 = result;// we instantiate our contract next\n    });\n")),(0,r.kt)("h3",{id:"2-set-up-account"},"2. Set up account"),(0,r.kt)("p",null,"Now to send transactions (specifically those that alter the state of the blockchain) we\u2019ll need an account to sign those transactions. We instantiate our contract instance from the web3 object we created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  this.web3.eth.getAccounts()\n  .then((accounts) => {\n    this.account = accounts[0];\n  })\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getAccounts()")," function returns an array of all the accounts on user\u2019s MetaMask, and ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts[0]")," is the one currently selected by the user."),(0,r.kt)("h3",{id:"3-instantiate-your-contracts"},"3. Instantiate your contracts"),(0,r.kt)("p",null,"Once we have our ",(0,r.kt)("inlineCode",{parentName:"p"},"web3")," object in place, we\u2019ll next instantiate our contracts, assuming you have your contract ABI and address already in place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const myContractInstance = new this.web3.eth.Contract(myContractAbi, myContractAddress)\n")),(0,r.kt)("h3",{id:"4-call-functions"},"4. Call functions"),(0,r.kt)("p",null,"Now for any function you\u2019d want to call from your contract, we directly interact with our instantiated contract object (which is ",(0,r.kt)("inlineCode",{parentName:"p"},"myContractInstance")," declared in Step 2)."),(0,r.kt)("admonition",{title:"A quick review",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Functions that alter the state of the contract are called ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," functions.\nFunctions that do not alter the state of the contract are called ",(0,r.kt)("inlineCode",{parentName:"p"},"call()")," functions.")),(0,r.kt)("h4",{id:"calling-call-functions"},"Calling ",(0,r.kt)("inlineCode",{parentName:"h4"},"call()")," Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  this.myContractInstance.methods.myMethod(myParams)\n  .call()\n  .then (\n    // do stuff with returned values\n  )\n")),(0,r.kt)("h4",{id:"calling-send-functions"},"Calling ",(0,r.kt)("inlineCode",{parentName:"h4"},"send()")," Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  this.myContractInstance.methods.myMethod(myParams)\n  .send({\n    from: this.account,gasPrice: 0\n  })\n  .then (\n    (receipt) => {\n      // returns a transaction receipt}\n    )\n")))}m.isMDXComponent=!0}}]);