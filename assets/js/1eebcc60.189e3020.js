"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[92868],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),k=o,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19508:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=(a(44996),["components"]),l={id:"validator-staking-operations",title:"Stake on Polygon",description:"Learn how to stake as a validator on the Polygon Network",keywords:["docs","matic","polygon","stake","claim","unstake"],slug:"validator-staking-operations",image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,d={unversionedId:"maintain/validate/validator-staking-operations",id:"maintain/validate/validator-staking-operations",title:"Stake on Polygon",description:"Learn how to stake as a validator on the Polygon Network",source:"@site/docs/maintain/validate/validator-staking-operations.md",sourceDirName:"maintain/validate",slug:"/maintain/validate/validator-staking-operations",permalink:"/matic-docs/docs/maintain/validate/validator-staking-operations",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/maintain/validate/validator-staking-operations.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"validator-staking-operations",title:"Stake on Polygon",description:"Learn how to stake as a validator on the Polygon Network",keywords:["docs","matic","polygon","stake","claim","unstake"],slug:"validator-staking-operations",image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"maintain",previous:{title:"Staking Operations",permalink:"/matic-docs/docs/category/staking-operations"},next:{title:"Commission Operations",permalink:"/matic-docs/docs/maintain/validate/validator-commission-operations"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Full node set up",id:"full-node-set-up",level:3},{value:"Account setup",id:"account-setup",level:3},{value:"Show private key",id:"show-private-key",level:3},{value:"Stake on Polygon",id:"stake-on-polygon",level:2},{value:"Stake using the staking dashboard",id:"stake-using-the-staking-dashboard",level:3},{value:"Check the balance",id:"check-the-balance",level:3},{value:"Claim rewards as a validator",id:"claim-rewards-as-a-validator",level:3},{value:"Withdraw Reward",id:"withdraw-reward",level:4},{value:"Restake Reward",id:"restake-reward",level:4}],p={toc:c};function k(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"full-node-set-up"},"Full node set up"),(0,r.kt)("p",null,"Your validator node fully set up and synced. See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/validate/run-validator"},"Run a Validator Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/validate/run-validator-ansible"},"Run a Validator Node with Ansible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/validate/run-validator-binaries"},"Run a Validator Node from Binaries"))),(0,r.kt)("h3",{id:"account-setup"},"Account setup"),(0,r.kt)("p",null,"On your validator node, check that the account is set up. To check, run the following command ",(0,r.kt)("strong",{parentName:"p"},"on the validator node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"    heimdalld show-account\n")),(0,r.kt)("p",null,"Your output should appear in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "address": "0x6c468CF8c9879006E22EC4029696E005C2319C9D",\n    "pub_key": "0x04b12d8b2f6e3d45a7ace12c4b2158f79b95e4c28ebe5ad54c439be9431d7fc9dc1164210bf6a5c3b8523528b931e772c86a307e8cff4b725e6b4a77d21417bf19"\n}\n')),(0,r.kt)("p",null,"This will display your address and public key for your validator node. Note that ",(0,r.kt)("strong",{parentName:"p"},"this address must match with your signer address on Ethereum"),"."),(0,r.kt)("h3",{id:"show-private-key"},"Show private key"),(0,r.kt)("p",null,"This step is optional."),(0,r.kt)("p",null,"On your validator node, check that the private key is correct. To check, run the following command ",(0,r.kt)("strong",{parentName:"p"},"on the validator node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"heimdalld show-privatekey\n")),(0,r.kt)("p",null,"The following output should appear:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "priv_key": "0x********************************************************"\n}\n')),(0,r.kt)("h2",{id:"stake-on-polygon"},"Stake on Polygon"),(0,r.kt)("p",null,"You can stake on Polygon using the ",(0,r.kt)("a",{parentName:"p",href:"https://staking.polygon.technology/validators/"},"validator dashboard"),"."),(0,r.kt)("h3",{id:"stake-using-the-staking-dashboard"},"Stake using the staking dashboard"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access the ",(0,r.kt)("a",{parentName:"li",href:"https://staking.polygon.technology/validators/"},"validator dashboard"),"."),(0,r.kt)("li",{parentName:"ol"},"Log in with your wallet. MetaMask is the recommended wallet. You have to make sure that you login using the same address where your MATIC tokens are present."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Become a Validator"),". You will be asked to set up your node. If you haven't already set up your node by now, you will need to do so, else if you proceed ahead you will receive an error when you attempt to stake."),(0,r.kt)("li",{parentName:"ol"},"On the next screen, add your validator details, the commission rate, and the staking amount."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Stake Now"),".")),(0,r.kt)("p",null,"Once the transaction is completed you will have staked successfully to become a validator. You will be asked thrice to confirm the transaction."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Approve Transaction \u2014 this will approve your stake transaction."),(0,r.kt)("li",{parentName:"ul"},"Stake \u2014 This will confirm your stake transaction."),(0,r.kt)("li",{parentName:"ul"},"Save \u2014\xdf This will save your validator details.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For the changes to take effect on the ",(0,r.kt)("a",{parentName:"p",href:"https://staking.polygon.technology/account"},"staking dashboard"),", it requires a minimum of 12 block confirmations.")),(0,r.kt)("h3",{id:"check-the-balance"},"Check the balance"),(0,r.kt)("p",null,"To check the balance of your address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"heimdallcli query auth account SIGNER_ADDRESS --chain-id CHAIN_ID\n")),(0,r.kt)("p",null,"where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SIGNER_ADDRESS \u2014 your ",(0,r.kt)("a",{parentName:"li",href:"/matic-docs/docs/maintain/glossary#validator"},"signer address"),"."),(0,r.kt)("li",{parentName:"ul"},"CHAIN_ID \u2014 the Polygon mainnet chain ID with the client prefix: ",(0,r.kt)("inlineCode",{parentName:"li"},"heimdall-137"),".")),(0,r.kt)("p",null,"The following output should appear:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'address: 0x6c468cf8c9879006e22ec4029696e005c2319c9d\ncoins:\n- denom: matic\namount:\n    i: "1000000000000000000000"\naccountnumber: 0\nsequence: 0\n')),(0,r.kt)("h3",{id:"claim-rewards-as-a-validator"},"Claim rewards as a validator"),(0,r.kt)("p",null,"Once you are set up and staked as a validator, you will earn rewards for performing validator duties. When you perform validator duties dutifully, you get rewarded."),(0,r.kt)("p",null,"To claim rewards you can go to your ",(0,r.kt)("a",{parentName:"p",href:"https://staking.polygon.technology/account"},"validator dashboard"),"."),(0,r.kt)("p",null,"You will see two buttons on your profile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Withdraw Reward"),(0,r.kt)("li",{parentName:"ul"},"Restake Reward")),(0,r.kt)("h4",{id:"withdraw-reward"},"Withdraw Reward"),(0,r.kt)("p",null,"As a validator, you earn rewards as long as you are performing your validator duties correctly."),(0,r.kt)("p",null,"Clicking ",(0,r.kt)("strong",{parentName:"p"},"Withdraw Reward")," will get your rewards back to your wallet."),(0,r.kt)("p",null,"The dashboard will update after 12 block confirmations."),(0,r.kt)("h4",{id:"restake-reward"},"Restake Reward"),(0,r.kt)("p",null,"Restaking your rewards is an easy way to increase your stake as a validator."),(0,r.kt)("p",null,"Clicking ",(0,r.kt)("strong",{parentName:"p"},"Restake Reward")," will restake your reward and increase your stake."),(0,r.kt)("p",null,"The dashboard will update after 12 block confirmations."))}k.isMDXComponent=!0}}]);