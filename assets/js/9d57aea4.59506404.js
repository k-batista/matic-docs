"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[13854],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16451:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(44996),s=["components"],l={id:"consensus",title:"Bor Consensus",description:"Bor mechanism for fetching new producers",keywords:["docs","matic","Bor Consensus","polygon"],image:"https://matic.network/banners/matic-network-16x9.png"},c="Bor Consensus",d={unversionedId:"pos/bor/consensus",id:"pos/bor/consensus",title:"Bor Consensus",description:"Bor mechanism for fetching new producers",source:"@site/docs/pos/bor/consensus.md",sourceDirName:"pos/bor",slug:"/pos/bor/consensus",permalink:"/matic-docs/docs/pos/bor/consensus",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/pos/bor/consensus.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"consensus",title:"Bor Consensus",description:"Bor mechanism for fetching new producers",keywords:["docs","matic","Bor Consensus","polygon"],image:"https://matic.network/banners/matic-network-16x9.png"},sidebar:"pos",previous:{title:"Core Concepts",permalink:"/matic-docs/docs/pos/bor/core_concepts"},next:{title:"Contracts",permalink:"/matic-docs/docs/category/contracts"}},p={},u=[{value:"Validators",id:"validators",level:2},{value:"Span",id:"span",level:2},{value:"Sprint",id:"sprint",level:2},{value:"Authorizing a block",id:"authorizing-a-block",level:2},{value:"Authorization strategies",id:"authorization-strategies",level:3},{value:"Out-of-turn signing",id:"out-of-turn-signing",level:3},{value:"Wiggle",id:"wiggle",level:3},{value:"Resolving forks",id:"resolving-forks",level:3},{value:"Difficulty",id:"difficulty",level:3},{value:"View Change",id:"view-change",level:2},{value:"Commit span",id:"commit-span",level:3},{value:"State sync from Ethereum Chain",id:"state-sync-from-ethereum-chain",level:2}],h={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bor-consensus"},"Bor Consensus"),(0,r.kt)("p",null,"Bor consensus is inspired by Clique consensus: ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-225"},"https://eips.ethereum.org/EIPS/eip-225"),". Clique works with multiple pre-defined producers. All producers vote on new producers using Clique APIs. They take turns creating blocks."),(0,r.kt)("p",null,"Bor fetches new producers through span and sprint management mechanism."),(0,r.kt)("h2",{id:"validators"},"Validators"),(0,r.kt)("p",null,'Polygon is a Proof-of-stake system. Anyone can stake their Matic token on Ethereum smart-contract, "staking contract", and become a validator for the system. '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function stake(\n    uint256 amount,\n    uint256 heimdallFee,\n    address signer,\n    bool acceptDelegation\n) external;\n")),(0,r.kt)("p",null,"Once validators are active on Heimdall they get selected as producers through ",(0,r.kt)("inlineCode",{parentName:"p"},"bor")," module."),(0,r.kt)("p",null,"Check Bor overview to understand span management more in details: ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Bor-Overview-c8bdb110cd4d4090a7e1589ac1006bab"},"Bor Overview")),(0,r.kt)("h2",{id:"span"},"Span"),(0,r.kt)("p",null,"A logically defined set of blocks for which a set of validators is chosen from among all the available validators. Heimdall provides span details through span-details APIs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// HeimdallSpan represents span from heimdall APIs\ntype HeimdallSpan struct {\n    Span\n    ValidatorSet      ValidatorSet `json:"validator_set" yaml:"validator_set"`\n    SelectedProducers []Validator  `json:"selected_producers" yaml:"selected_producers"`\n    ChainID           string       `json:"bor_chain_id" yaml:"bor_chain_id"`\n}\n\n// Span represents a current bor span\ntype Span struct {\n    ID         uint64 `json:"span_id" yaml:"span_id"`\n    StartBlock uint64 `json:"start_block" yaml:"start_block"`\n    EndBlock   uint64 `json:"end_block" yaml:"end_block"`\n}\n\n// Validator represents a volatile state for each Validator\ntype Validator struct {\n    ID               uint64         `json:"ID"`\n    Address          common.Address `json:"signer"`\n    VotingPower      int64          `json:"power"`\n    ProposerPriority int64          `json:"accum"`\n}\n')),(0,r.kt)("p",null,"Geth (In this case, Bor) uses block ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot")," to store state data for each block, including consensus related data."),(0,r.kt)("p",null,"Each validator in span contains voting power. Based on their power, they get selected as block producers. Higher power, a higher probability of becoming block producers. Bor uses Tendermint's algorithm for the same. Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/bor/blob/master/consensus/bor/valset/validator_set.go"},"https://github.com/maticnetwork/bor/blob/master/consensus/bor/valset/validator_set.go")),(0,r.kt)("h2",{id:"sprint"},"Sprint"),(0,r.kt)("p",null,"A set of blocks within a span for which only a single block producer is chosen to produce blocks. The sprint size is a factor of span size. Bor uses ",(0,r.kt)("inlineCode",{parentName:"p"},"validatorSet")," to get current proposer/producer for current sprint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"currentProposerForSprint := snap.ValidatorSet().Proposer\n")),(0,r.kt)("p",null,"Apart from the current proposer, Bor selects back-up producers."),(0,r.kt)("h2",{id:"authorizing-a-block"},"Authorizing a block"),(0,r.kt)("p",null,"The producers in Bor also called signers, since to authorize a block for the network, the producer needs to sign the block's hash containing\xa0",(0,r.kt)("strong",{parentName:"p"},"everything except the signature itself"),". This means that the hash contains every field of the header, and also the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"extraData"),"\xa0with the exception of the 65-byte signature suffix."),(0,r.kt)("p",null,"This hash is signed using the standard\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1"),"\xa0curve, and the resulting 65-byte signature is embedded into the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"extraData"),"\xa0as the trailing 65-byte suffix. "),(0,r.kt)("p",null,"Each signed block is assigned to a difficulty that puts weight on Block. In-turn signing weighs more (",(0,r.kt)("inlineCode",{parentName:"p"},"DIFF_INTURN"),") than out of turn one (",(0,r.kt)("inlineCode",{parentName:"p"},"DIFF_NOTURN"),")."),(0,r.kt)("h3",{id:"authorization-strategies"},"Authorization strategies"),(0,r.kt)("p",null,"As long as producers conform to the above specs, they can authorize and distribute blocks as they see fit. The following suggested strategy will, however, reduce network traffic and small forks, so it\u2019s a suggested feature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a producer is allowed to sign a block (is on the authorized list)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Calculate the optimal signing time of the next block (parent +\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Period"),")"),(0,r.kt)("li",{parentName:"ul"},"If the producer is in-turn, wait for the exact time to arrive, sign and broadcast immediately"),(0,r.kt)("li",{parentName:"ul"},"If the producer is out-of-turn, delay signing by ",(0,r.kt)("inlineCode",{parentName:"li"},"wiggle"))))),(0,r.kt)("p",null,"This small strategy will ensure that the in-turn producer (who's block weighs more) has a slight advantage to sign and propagate versus the out-of-turn signers. Also, the scheme allows a bit of scale with an increase of the number of producers."),(0,r.kt)("h3",{id:"out-of-turn-signing"},"Out-of-turn signing"),(0,r.kt)("p",null,"Bor chooses multiple block producers as a backup when in-turn producer doesn't produce a block. This could happen for a variety of reasons like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block producer node is down"),(0,r.kt)("li",{parentName:"ul"},"The block producer is trying to withhold the block"),(0,r.kt)("li",{parentName:"ul"},"The block producer is not producing a block intentionally.")),(0,r.kt)("p",null,"When the above happens, Bor's backup mechanism kicks in."),(0,r.kt)("p",null,"At any point of time, the validators set is stored as an array sorted on the basis of their signer address. Assume, that the validator set is ordered as A, B, C, D and that it is C's turn to produce a block. If C doesn't produce a block within a sufficient amount of time, D becomes in turn to produce one. If D doesn't then A and then B."),(0,r.kt)("p",null,"However, since there will be some time before C produces and propagates a block, the backup validators will wait a certain amount of time before starting to produce a block. This time delay is called wiggle."),(0,r.kt)("h3",{id:"wiggle"},"Wiggle"),(0,r.kt)("p",null,"Wiggle is the time that a producer should wait before starting to produce a block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Say the last block (n-1) was produced at time ",(0,r.kt)("inlineCode",{parentName:"li"},"t"),"."),(0,r.kt)("li",{parentName:"ul"},"We enforce a minimum time delay between the current and next block by a variable parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"Period"),"."),(0,r.kt)("li",{parentName:"ul"},"In ideal conditions, C will wait for ",(0,r.kt)("inlineCode",{parentName:"li"},"Period")," and then produce and propagate the block. Since block times in Polygon are being designed to be quite low (2-4s), the propagation delay is also assumed to be the same value as ",(0,r.kt)("inlineCode",{parentName:"li"},"Period"),"."),(0,r.kt)("li",{parentName:"ul"},"So if D doesn't see a new block in time ",(0,r.kt)("inlineCode",{parentName:"li"},"2 * Period"),", D immediately starts producing a block. Specifically, D's wiggle time is defined as ",(0,r.kt)("inlineCode",{parentName:"li"},"2 * Period * (pos(d) - pos(c))")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"pos(d) = 3")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pos(c) = 2")," in the validator set. Assuming, ",(0,r.kt)("inlineCode",{parentName:"li"},"Period = 1"),", wiggle for D is 2s."),(0,r.kt)("li",{parentName:"ul"},"Now if D also doesn't produce a block, A will start producing one when the wiggle time of ",(0,r.kt)("inlineCode",{parentName:"li"},"2 * Period * (pos(a) + len(validatorSet) - pos(c)) = 4s")," has elapsed."),(0,r.kt)("li",{parentName:"ul"},"Simmilary, wiggle for C is ",(0,r.kt)("inlineCode",{parentName:"li"},"6s"))),(0,r.kt)("h3",{id:"resolving-forks"},"Resolving forks"),(0,r.kt)("p",null,"While the above mechanism adds to the robustness of chain to a certain extent, it introduces the possibility of forks. It could actually be possible that C produced a block, but there was a larger than expected delay in propagation and hence D also produced a block, so that leads to atleast 2 forks."),(0,r.kt)("p",null,"The resolution is simple - choose the chain with higher difficulty. But then the question is how do we define difficulty of a block in our setup?"),(0,r.kt)("h3",{id:"difficulty"},"Difficulty"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The difficulty for a block that is produced by an in-turn signer (say c) is defined to be the highest = ",(0,r.kt)("inlineCode",{parentName:"li"},"len(validatorSet)"),"."),(0,r.kt)("li",{parentName:"ul"},"Since D is the producer who is next in line; if and when the situation arises that D is producing the block; the difficulty for the block will be defined just like in wiggle as ",(0,r.kt)("inlineCode",{parentName:"li"},"len(validatorSet) - (pos(d) - pos(c))")," which is ",(0,r.kt)("inlineCode",{parentName:"li"},"len(validatorSet) - 1")),(0,r.kt)("li",{parentName:"ul"},"Difficulty for block being produced by A while acting as a backup becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"len(validatorSet) - (pos(a) + len(validatorSet) - pos(c))")," which is ",(0,r.kt)("inlineCode",{parentName:"li"},"2"))),(0,r.kt)("p",null,"Now having defined the difficulty of each block, the difficulty of a fork is simply the sum of the difficulties of the blocks in that fork. In the case when a fork has to be chosen, the one with higher difficulty is chosen, since that is a reflection of the fact that blocks were produced by in-turn block producers. This is simply to provide some sense of finality to the user on Bor. "),(0,r.kt)("h2",{id:"view-change"},"View Change"),(0,r.kt)("p",null,"After each span, Bor changes view. It means that it fetches new producers for the next span. "),(0,r.kt)("h3",{id:"commit-span"},"Commit span"),(0,r.kt)("p",null,"When the current span is about to end (specifically at the end of the second-last sprint in the span), Bor pulls a new span from Heimdall. This is a simple HTTP call to the Heimdall node. Once this data is fetched, a ",(0,r.kt)("inlineCode",{parentName:"p"},"commitSpan")," call is made to the BorValidatorSet genesis contract through System call."),(0,r.kt)("p",null,"Bor also sets producers bytes into the header of the block. This is necessary while fast-syncing Bor. During fast-sync, Bor syncs headers in bulk and validates if blocks are created by authorized producers."),(0,r.kt)("p",null,"At the start of each Sprint, Bor fetches header bytes from the previous header for next producers and starts creating blocks based on ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorSet")," algorithm."),(0,r.kt)("p",null,"Here is how header looks like for a block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"header.Extra = header.Vanity + header.ProducerBytes /* optional */ + header.Seal\n")),(0,r.kt)("img",{src:(0,i.Z)("img/Bor/header-bytes.svg")}),(0,r.kt)("h2",{id:"state-sync-from-ethereum-chain"},"State sync from Ethereum Chain"),(0,r.kt)("p",null,"Bor provides a mechanism where some specific events on the main Ethereum chain are relayed to Bor. This is also how deposits to plasma contracts are processed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any contract on Ethereum may call ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol#L33"},"syncState")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSender.sol"),". This call emits ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSynced")," event: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol#L38"},"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol#L38")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event StateSynced(uint256 indexed id, address indexed contractAddress, bytes data)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Heimdall listens to these events and calls ",(0,r.kt)("inlineCode",{parentName:"p"},"function proposeState(uint256 stateId)")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"StateReceiver.sol"),"  - thus acting as a store for the pending state change ids. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"proposeState")," transaction will be processed even with a 0 gas fee as long as it is made by one of the validators in the current validator set: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol#L24"},"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol#L24"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the start of every sprint, Bor pulls the details about the pending state changes using the states from Heimdall and commits them to the Bor state using a system call. See ",(0,r.kt)("inlineCode",{parentName:"p"},"commitState")," here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/genesis-contracts/blob/f85d0409d2a99dff53617ad5429101d9937e3fc3/contracts/StateReceiver.sol#L41"},"https://github.com/maticnetwork/genesis-contracts/blob/f85d0409d2a99dff53617ad5429101d9937e3fc3/contracts/StateReceiver.sol#L41")))))}m.isMDXComponent=!0}}]);