"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[24180],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80978:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=a(44996),o=["components"],s={id:"staking",title:"Staking",description:"Module that manages validator-related transactions and state",keywords:["docs","matic","staking","heimdall","validator"],image:"https://matic.network/banners/matic-network-16x9.png"},d="Staking",p={unversionedId:"pos/heimdall/modules/staking",id:"pos/heimdall/modules/staking",title:"Staking",description:"Module that manages validator-related transactions and state",source:"@site/docs/pos/heimdall/modules/staking.md",sourceDirName:"pos/heimdall/modules",slug:"/pos/heimdall/modules/staking",permalink:"/matic-docs/docs/pos/heimdall/modules/staking",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/pos/heimdall/modules/staking.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"staking",title:"Staking",description:"Module that manages validator-related transactions and state",keywords:["docs","matic","staking","heimdall","validator"],image:"https://matic.network/banners/matic-network-16x9.png"},sidebar:"pos",previous:{title:"Governance",permalink:"/matic-docs/docs/pos/heimdall/modules/governance"},next:{title:"Checkpoint",permalink:"/matic-docs/docs/pos/heimdall/modules/checkpoint"}},m={},c=[{value:"Key Management",id:"key-management",level:2},{value:"Delegation",id:"delegation",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Messages",id:"messages",level:2},{value:"MsgValidatorJoin",id:"msgvalidatorjoin",level:3},{value:"MsgStakeUpdate",id:"msgstakeupdate",level:3},{value:"MsgValidatorExit",id:"msgvalidatorexit",level:3},{value:"MsgSignerUpdate",id:"msgsignerupdate",level:3},{value:"CLI Commands",id:"cli-commands",level:2},{value:"Validator details",id:"validator-details",level:3},{value:"Validator join",id:"validator-join",level:3},{value:"REST APIs",id:"rest-apis",level:2}],u={toc:c};function g(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staking"},"Staking"),(0,r.kt)("p",null,"Staking module manages validator related transactions and state for Heimdall. Note that a validator stakes their tokens on the Ethereum chain and becomes a validator. Respective validators send the transactions on Heimdall using necessary parameters to acknowledge the Ethereum stake change. Once the majority of the validators agree on the change on the stake, this module saves the validator information on Heimdall state."),(0,r.kt)("h2",{id:"key-management"},"Key Management"),(0,r.kt)("p",null,"For key management, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/heimdall/validator-key-management"},"Validator key management")),(0,r.kt)("h2",{id:"delegation"},"Delegation"),(0,r.kt)("p",null,"This module only manages validator staking on Heimdall. The delegation is only available on smart contracts on the Ethereum chain. To optimize the delegation rewards calculation on smart contracts, we are using validator shares (ERC20 per validator). "),(0,r.kt)("p",null,"More details here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/contracts/delegation"},"Delegation (Validator shares)")),(0,r.kt)("h2",{id:"rewards"},"Rewards"),(0,r.kt)("p",null,"All rewards are distributed on the Ethereum chain. The validators and delegators claim their rewards or re-stake by simply sending the transaction on ",(0,r.kt)("inlineCode",{parentName:"p"},"StakeManager.sol")," "),(0,r.kt)("p",null,"More details here: ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/maintain/validator/rewards#what-is-the-incentive"},"Rewards")),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("img",{src:(0,l.Z)("img/staking/stake-management-flow.svg")}),(0,r.kt)("h3",{id:"msgvalidatorjoin"},"MsgValidatorJoin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MsgValidatorJoin")," handles the staking when a new validator joins the system. Once validator calls ",(0,r.kt)("inlineCode",{parentName:"p"},"stake")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"stakeFor")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"StakingManager.sol")," on Ethereum, and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Staked")," event is emitted."),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/staking/StakingInfo.sol#L27-L34"},"https://github.com/maticnetwork/contracts/blob/develop/contracts/staking/StakingInfo.sol#L27-L34")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Staked event - emitted whenever new validator \n * \n * @param signer           Signer address for the validator\n * @param validatorId      Validator id\n * @param activationEpoch  Activation epoch for validator\n * @param amount           Staked amount\n * @param total            Total stake\n * @param signerPubKey     Signer public key (required by Heimdall/Tendermint)\n */\nevent Staked(\n    address indexed signer,\n    uint256 indexed validatorId,\n    uint256 indexed activationEpoch,\n    uint256 amount,\n    uint256 total,\n    bytes signerPubkey\n);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"activationEpoch")," is the checkpoint count from where a validator will become active on Heimdall."),(0,r.kt)("p",null,"Stake call on smart contract fails if slots are unavailable. Validator slots are the way to restrict a number of validators in the system.  Slots are managed on Ethereum smart contracts."),(0,r.kt)("p",null,"Here is ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorJoin")," message for Heimdall transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type MsgValidatorJoin struct {\n    From         hmTypes.HeimdallAddress `json:"from"`\n    ID           hmTypes.ValidatorID     `json:"id"`\n    SignerPubKey hmTypes.PubKey          `json:"pub_key"`\n    TxHash       hmTypes.HeimdallHash    `json:"tx_hash"`\n    LogIndex     uint64                  `json:"log_index"`\n}\n')),(0,r.kt)("h3",{id:"msgstakeupdate"},"MsgStakeUpdate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MsgStakeUpdate")," handles the stake update when a validator the re-stakes or new delegation comes in. In either case, the new ",(0,r.kt)("inlineCode",{parentName:"p"},"StakeUpdate")," event is emitted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Stake update event - emitted whenever stake gets updated \n * \n * @param validatorId      Validator id\n * @param newAmount        New staked amount\n */\nevent StakeUpdate(\n    uint256 indexed validatorId, \n    uint256 indexed newAmount\n);\n")),(0,r.kt)("p",null,"Here is ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgStakeUpdate")," message for Heimdall transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// MsgStakeUpdate represents stake update\ntype MsgStakeUpdate struct {\n    From     hmTypes.HeimdallAddress `json:"from"`\n    ID       hmTypes.ValidatorID     `json:"id"`\n    TxHash   hmTypes.HeimdallHash    `json:"tx_hash"`\n    LogIndex uint64                  `json:"log_index"`\n}\n')),(0,r.kt)("h3",{id:"msgvalidatorexit"},"MsgValidatorExit"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MsgValidatorExit")," handles the validator exit process after a validator initiates the exit process on Ethereum. It emits ",(0,r.kt)("inlineCode",{parentName:"p"},"SignerUpdate")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Unstake init event - emitted whenever validator initiates the exit\n * \n * @param user                Signer\n * @param validatorId         Validator id\n * @param deactivationEpoch   Deactivation epoch for validator\n * @param amount              Unstaked amount\n */\nevent UnstakeInit(\n    address indexed user,\n    uint256 indexed validatorId,\n    uint256 deactivationEpoch,\n    uint256 indexed amount\n);\n")),(0,r.kt)("p",null,"Here is ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgValidatorExit")," message for Heimdall transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type MsgValidatorExit struct {\n    From     hmTypes.HeimdallAddress `json:"from"`\n    ID       hmTypes.ValidatorID     `json:"id"`\n    TxHash   hmTypes.HeimdallHash    `json:"tx_hash"`\n    LogIndex uint64                  `json:"log_index"`\n}\n')),(0,r.kt)("h3",{id:"msgsignerupdate"},"MsgSignerUpdate"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MsgSignerUpdate")," handles the signer update when a validator updates signer key on Ethereum. It emits ",(0,r.kt)("inlineCode",{parentName:"p"},"SignerUpdate")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Signer change event - emitted whenever signer key changes\n * \n * @param validatorId      Validator id\n * @param oldSigner        Current old signer\n * @param newSigner        New signer\n * @param signerPubkey     New signer public key\n */\nevent SignerChange(\n    uint256 indexed validatorId,\n    address indexed oldSigner,\n    address indexed newSigner,\n    bytes signerPubkey\n);\n")),(0,r.kt)("p",null,"Here is ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgSignerUpdate")," message for Heimdall transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// MsgSignerUpdate signer update struct\ntype MsgSignerUpdate struct {\n    From            hmTypes.HeimdallAddress `json:"from"`\n    ID              hmTypes.ValidatorID     `json:"id"`\n    NewSignerPubKey hmTypes.PubKey          `json:"pubKey"`\n    TxHash          hmTypes.HeimdallHash    `json:"tx_hash"`\n    LogIndex        uint64                  `json:"log_index"`\n}\n')),(0,r.kt)("h2",{id:"cli-commands"},"CLI Commands"),(0,r.kt)("h3",{id:"validator-details"},"Validator details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"By signer address")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"heimdallcli query staking validator-info \\\n    --validator=<signer-address> \\\n    --chain-id <chain-id>\n")),(0,r.kt)("p",null,"This command should display the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ID":1,\n    "startEpoch":0,\n    "endEpoch":0,\n    "power":10,\n    "pubKey":"0x04b12d8b2f6e3d45a7ace12c4b2158f79b95e4c28ebe5ad54c439be9431d7fc9dc1164210bf6a5c3b8523528b931e772c86a307e8cff4b725e6b4a77d21417bf19",\n    "signer":"0x6c468cf8c9879006e22ec4029696e005c2319c9d",\n    "last_updated":0,\n    "accum":0\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"By validator address")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"heimdallcli query staking validator-info \\\n    --id=<validator-id> \\\n    --chain-id=<chain-id>\n")),(0,r.kt)("p",null,"This command should display the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ID":1,\n    "startEpoch":0,\n    "endEpoch":0,\n    "power":10,\n    "pubKey":"0x04b12d8b2f6e3d45a7ace12c4b2158f79b95e4c28ebe5ad54c439be9431d7fc9dc1164210bf6a5c3b8523528b931e772c86a307e8cff4b725e6b4a77d21417bf19",\n    "signer":"0x6c468cf8c9879006e22ec4029696e005c2319c9d",\n    "last_updated":0,\n    "accum":0\n}\n')),(0,r.kt)("h3",{id:"validator-join"},"Validator join"),(0,r.kt)("p",null,"This command sends validator join command through CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"heimdallcli tx staking validator-join \\\n    --signer-pubkey <signer-public-key> \\\n    --tx-hash <tx-hash>   \\\n    --log-index <log-index> \\ \n    --chain-id <chain-id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tx-hash")," value must be the same as Ethereum TX hash which emitted ",(0,r.kt)("inlineCode",{parentName:"p"},"Staked")," event and ",(0,r.kt)("inlineCode",{parentName:"p"},"log-index")," must be the same at which index the event is emitted."),(0,r.kt)("h2",{id:"rest-apis"},"REST APIs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Heimdall validator set"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/staking/validator-set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get validator details"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/staking/validator/validator-id")))),(0,r.kt)("p",null,"All query APIs will result in following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "height": "1",\n    "result": {\n        ...   \n    }\n}\n')))}g.isMDXComponent=!0}}]);