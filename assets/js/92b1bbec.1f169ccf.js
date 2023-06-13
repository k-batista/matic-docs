"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[94914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"supernets-txrelayer",title:"Transaction Relayer",sidebar_label:"Transaction Relayer",description:"The transaction relayer of Supernets.",keywords:["docs","polygon","edge","architecture","modular","layer","libp2p","extensible"]},l=void 0,c={unversionedId:"supernets/design/supernets-txrelayer",id:"supernets/design/supernets-txrelayer",title:"Transaction Relayer",description:"The transaction relayer of Supernets.",source:"@site/docs/supernets/design/txrelayer.md",sourceDirName:"supernets/design",slug:"/supernets/design/supernets-txrelayer",permalink:"/matic-docs/docs/supernets/design/supernets-txrelayer",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/design/txrelayer.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"supernets-txrelayer",title:"Transaction Relayer",sidebar_label:"Transaction Relayer",description:"The transaction relayer of Supernets.",keywords:["docs","polygon","edge","architecture","modular","layer","libp2p","extensible"]},sidebar:"supernets",previous:{title:"Transaction Pool",permalink:"/matic-docs/docs/supernets/design/supernets-txpool"},next:{title:"JSON-RPC",permalink:"/matic-docs/docs/supernets/design/supernets-json-rpc"}},u={},d=[{value:"What is a TxRelayer used for?",id:"what-is-a-txrelayer-used-for",level:2},{value:"TxRelayer in Supernets",id:"txrelayer-in-supernets",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documents provides an overview on how a txrelayer is used in Supernets."),(0,o.kt)("h2",{id:"what-is-a-txrelayer-used-for"},"What is a TxRelayer used for?"),(0,o.kt)("p",null,"A TxRelayer is a component that facilitates the creation and sending of transactions. It provides a simple interface for executing a message call without creating a dedicated transaction and sending signed transactions to a blockchain."),(0,o.kt)("h2",{id:"txrelayer-in-supernets"},"TxRelayer in Supernets"),(0,o.kt)("p",null,"In Polygon Supernets, the TxRelayer module contains a client communicating with an Ethereum node and a wallet for signing transactions."),(0,o.kt)("details",null,(0,o.kt)("summary",null," Details on using the TxRelayer"),(0,o.kt)("p",null,"The first step for those looking to use the TxRelayer is to create a new instance by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTxRelayer()")," function. This function takes several optional arguments that can be used to configure the TxRelayer, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"clientConfig")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"receiptTimeout"),". By default, the client is set to connect to an Ethereum node running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8545"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"receiptTimeout")," is set to 50 milliseconds."),(0,o.kt)("p",null,"Once the TxRelayer is created, you can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Call()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SendTransaction()"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"SendTransactionLocal()")," methods to execute message calls or send signed transactions to the blockchain."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Call()")," method allows you to execute a message call without creating a transaction on the blockchain. It takes in the from and to addresses and the input data for the call. The result of the call is returned as a byte array."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SendTransaction()")," method signs the provided transaction with the provided key and sends it to the blockchain. It first fetches the nonce for the sender's address, sets the gas price and limit (if they are not already set), signs the transaction with the ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP155Signer"),", and then sends the raw transaction data to the Ethereum node."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SendTransactionLocal()")," method sends a non-signed transaction to the blockchain only for testing purposes. It sets the gas price and limit and uses the first account returned by the Ethereum node's ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts()")," method as the sender.")))}h.isMDXComponent=!0}}]);