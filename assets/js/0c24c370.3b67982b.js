"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[70014],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,o(o({ref:e},s),{},{components:n})):a.createElement(c,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27708:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"supernets-unstake",title:"How to Unstake",sidebar_label:"How to Unstake on the Rootchain",description:"A guide on the how to unstake validator stake.",keywords:["docs","polygon","supernets","stake","unstake","withdraw"]},d=void 0,p={unversionedId:"supernets/operate/deploy/staking/supernets-unstake",id:"supernets/operate/deploy/staking/supernets-unstake",title:"How to Unstake",description:"A guide on the how to unstake validator stake.",source:"@site/docs/supernets/operate/deploy/staking/unstake.md",sourceDirName:"supernets/operate/deploy/staking",slug:"/supernets/operate/deploy/staking/supernets-unstake",permalink:"/matic-docs/docs/supernets/operate/deploy/staking/supernets-unstake",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/operate/deploy/staking/unstake.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"supernets-unstake",title:"How to Unstake",sidebar_label:"How to Unstake on the Rootchain",description:"A guide on the how to unstake validator stake.",keywords:["docs","polygon","supernets","stake","unstake","withdraw"]},sidebar:"supernets",previous:{title:"How to Stake on the Rootchain",permalink:"/matic-docs/docs/supernets/operate/deploy/staking/supernets-how-to-stake"},next:{title:"How to Start a Supernet",permalink:"/matic-docs/docs/supernets/operate/deploy/supernets-how-to-start"}},s={},u=[{value:"Unstake",id:"unstake",level:2},{value:"Withdraw",id:"withdraw",level:2},{value:"Wait for checkpoint",id:"wait-for-checkpoint",level:4},{value:"Send an exit transaction",id:"send-an-exit-transaction",level:3},{value:"Withdraw from root",id:"withdraw-from-root",level:3}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this section, we'll go over how to unstake a validator's staked tokens and withdraw them to an external address."),(0,l.kt)("admonition",{title:"Breaking changes",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Supernets are rapidly evolving towards their production-ready state, and, as a result, instructions and concepts in these documents are subject to change."),(0,l.kt)("p",{parentName:"admonition"},"Test releases include breaking changes and are not backward compatibility. Use the current test releases for testing and familiarization only."),(0,l.kt)("p",{parentName:"admonition"},"It is highly recommended that reach out to the Supernets team for support.")),(0,l.kt)("h2",{id:"unstake"},"Unstake"),(0,l.kt)("admonition",{title:"Check validator information",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"First, check your validator information by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"polygon-edge polybft validator-info")," command."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Flags \u2193"),(0,l.kt)("table",{parentName:"admonition"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--chain-id")),(0,l.kt)("td",{parentName:"tr",align:null},"ID of Supernet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"137"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--config")),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the SecretsManager config file, if omitted, the local FS secrets manager is used"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/path/to/config.yaml"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data-dir")),(0,l.kt)("td",{parentName:"tr",align:null},"The directory for the Polygon Edge data if the local FS is used"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/path/to/data/dir"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-h"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--help")),(0,l.kt)("td",{parentName:"tr",align:null},"Help for validator-info"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--jsonrpc")),(0,l.kt)("td",{parentName:"tr",align:null},'The JSON-RPC interface (default "0.0.0.0:8545")'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://localhost:8545"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--stake-manager")),(0,l.kt)("td",{parentName:"tr",align:null},"Address of stake manager contract"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x123..."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--supernet-manager")),(0,l.kt)("td",{parentName:"tr",align:null},"Address of supernet manager contract"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x456...")))))),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge polybft validator-info --data-dir ./test-chain-1\n")),(0,l.kt)("p",{parentName:"admonition"},"This will show you information about your validator account, including the staked amount.")),(0,l.kt)("p",null,"To unstake, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"polygon-edge polybft unstake")," command."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Flags \u2193"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--amount"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to unstake from validator"),(0,l.kt)("td",{parentName:"tr",align:null},"--amount 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--config"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the SecretsManager config file"),(0,l.kt)("td",{parentName:"tr",align:null},"--config /path/to/config/file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--data-dir"),(0,l.kt)("td",{parentName:"tr",align:null},"Directory for the Polygon Edge data if the local FS is used"),(0,l.kt)("td",{parentName:"tr",align:null},"--data-dir /path/to/data/dir")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--jsonrpc"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON-RPC interface"),(0,l.kt)("td",{parentName:"tr",align:null},"--jsonrpc 0.0.0.0:8545"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge polybft unstake \\\n  --account-dir <DATA_DIR> \\\n  --jsonrpc <JSONRPC_ADDR> \\\n  --amount <AMOUNT>\n")),(0,l.kt)("h2",{id:"withdraw"},"Withdraw"),(0,l.kt)("p",null,"Once you have successfully unstaked, you will need to withdraw your unstaked tokens from the Supernet to the rootchain. To do so, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"polygon-edge polybft withdraw-child")," command."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Flags \u2193"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--config")),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the SecretsManager config file, if omitted, the local FS secrets manager is used"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~/secrets.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data-dir")),(0,l.kt)("td",{parentName:"tr",align:null},"The directory for the Polygon Edge data if the local FS is used"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~/polygon-edge/data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--jsonrpc")),(0,l.kt)("td",{parentName:"tr",align:null},'The JSON-RPC interface (default "0.0.0.0:8545")'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"127.0.0.1:8545")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge polybft withdraw-child \\\n    --account-dir <DATA_DIR> \\\n    --jsonrpc <JSONRPC_ADDR>\n")),(0,l.kt)("p",null,"This command will bridge the unstaked amount to the rootchain (",(0,l.kt)("inlineCode",{parentName:"p"},"StakeManager"),"), where the given amount of tokens will become released on the given contract."),(0,l.kt)("h4",{id:"wait-for-checkpoint"},"Wait for checkpoint"),(0,l.kt)("p",null,"Next, you will need to wait for the exit event (bridge event) to be included in a checkpoint.\nYou can confirm that the checkpoint has been successfully processed by checking the processed checkpoints on a blockchain explorer."),(0,l.kt)("h3",{id:"send-an-exit-transaction"},"Send an exit transaction"),(0,l.kt)("p",null,"Once the exit event has been included in a checkpoint, you can send an exit transaction to execute the transaction on the rootchain. To do so, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"polygon-edge bridge exit")," command."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Flags \u2193"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--child-json-rpc"),(0,l.kt)("td",{parentName:"tr",align:null},"The JSON RPC Supernet endpoint."),(0,l.kt)("td",{parentName:"tr",align:null},"--child-json-rpc=",(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:9545"},"http://127.0.0.1:9545"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--exit-helper"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of ExitHelper smart contract on rootchain."),(0,l.kt)("td",{parentName:"tr",align:null},"--exit-helper=<EXIT_HELPER_ADDRESS>")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--exit-id"),(0,l.kt)("td",{parentName:"tr",align:null},"Supernet exit event ID."),(0,l.kt)("td",{parentName:"tr",align:null},"--exit-id=<EXIT_ID>")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--root-json-rpc"),(0,l.kt)("td",{parentName:"tr",align:null},"The JSON RPC rootchain endpoint."),(0,l.kt)("td",{parentName:"tr",align:null},"--root-json-rpc=",(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:8545"},"http://127.0.0.1:8545"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--sender-key"),(0,l.kt)("td",{parentName:"tr",align:null},"Hex encoded private key of the account which sends exit transaction to the rootchain."),(0,l.kt)("td",{parentName:"tr",align:null},"--sender-key=<SENDER_KEY>")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--test"),(0,l.kt)("td",{parentName:"tr",align:null},"Test indicates whether exit transaction sender is hardcoded test account."),(0,l.kt)("td",{parentName:"tr",align:null},"--test"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge bridge exit \\\n    --sender-key <hex_encoded_txn_sender_private_key> \\\n    --exit-helper <exit_helper_address> \\\n    --exit-id <exit_event_id> \\\n    --root-json-rpc <root_chain_json_rpc_endpoint> \\\n    --child-json-rpc <child_chain_json_rpc_endpoint>\n")),(0,l.kt)("p",null,"This will trigger the withdrawal of the specified amount of tokens from the rootchain."),(0,l.kt)("h3",{id:"withdraw-from-root"},"Withdraw from root"),(0,l.kt)("p",null,"Finally, you can withdraw your tokens from the rootchain to your address by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"polygon-edge polybft withdraw-root")," command."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Flags \u2193"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--amount"),(0,l.kt)("td",{parentName:"tr",align:null},"amount to withdraw"),(0,l.kt)("td",{parentName:"tr",align:null},"--amount 1000000000000000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--config"),(0,l.kt)("td",{parentName:"tr",align:null},"path to the SecretsManager config file"),(0,l.kt)("td",{parentName:"tr",align:null},"--config /path/to/config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--data-dir"),(0,l.kt)("td",{parentName:"tr",align:null},"directory for the Polygon Edge data"),(0,l.kt)("td",{parentName:"tr",align:null},"--data-dir /path/to/data/dir")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--jsonrpc"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON-RPC interface"),(0,l.kt)("td",{parentName:"tr",align:null},"--jsonrpc 0.0.0.0:8545")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--stake-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"address of stake manager contract"),(0,l.kt)("td",{parentName:"tr",align:null},"--stake-manager 0x123abc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--to"),(0,l.kt)("td",{parentName:"tr",align:null},"address where to withdraw"),(0,l.kt)("td",{parentName:"tr",align:null},"--to 0x456def"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge polybft withdraw-root \\\n  --account-dir <DATA_DIR> \\\n  --to <RECIPIENT_ADDRESS> \\\n  --amount <AMOUNT> \\\n  --stake-manager <STAKE_MANAGER_ADDRESS> \\\n  --jsonrpc <BRIDGE_JSONRPC_ADDR>\n")),(0,l.kt)("p",null,"This will transfer your withdrawn tokens back to the specified withdrawal address."))}k.isMDXComponent=!0}}]);