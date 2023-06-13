"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[30576],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,k=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"pos-concepts",title:"Proof of Stake",description:"Explanation and instructions regarding Proof of Stake.",keywords:["docs","polygon","edge","PoS","stake"]},c=void 0,l={unversionedId:"edge/consensus/pos-concepts",id:"edge/consensus/pos-concepts",title:"Proof of Stake",description:"Explanation and instructions regarding Proof of Stake.",source:"@site/docs/edge/consensus/pos-concepts.md",sourceDirName:"edge/consensus",slug:"/edge/consensus/pos-concepts",permalink:"/matic-docs/docs/edge/consensus/pos-concepts",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/edge/consensus/pos-concepts.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"pos-concepts",title:"Proof of Stake",description:"Explanation and instructions regarding Proof of Stake.",keywords:["docs","polygon","edge","PoS","stake"]},sidebar:"edge",previous:{title:"Proof of Authority (PoA)",permalink:"/matic-docs/docs/edge/consensus/poa"},next:{title:"Set up and use Proof of Stake (PoS)",permalink:"/matic-docs/docs/edge/consensus/pos-stake-unstake"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"PoS Features",id:"pos-features",level:2},{value:"Epochs",id:"epochs",level:3},{value:"Staking",id:"staking",level:3},{value:"Unstaking",id:"unstaking",level:3},{value:"Epoch Blocks",id:"epoch-blocks",level:2},{value:"Contract pre-deployment",id:"contract-pre-deployment",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This section aims to give a better overview of some concepts currently present in the Proof of Stake (PoS)\nimplementation of the Polygon Edge."),(0,r.kt)("p",null,"The Polygon Edge Proof of Stake (PoS) implementation is meant to be an alternative to the existing PoA IBFT implementation,\ngiving node operators the ability to easily choose between the two when starting a chain."),(0,r.kt)("h2",{id:"pos-features"},"PoS Features"),(0,r.kt)("p",null,"The core logic behind the Proof of Stake implementation is situated within\nthe ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/0xPolygon/staking-contracts/blob/main/contracts/Staking.sol"},"Staking Smart Contract")),"."),(0,r.kt)("p",null,"This contract is pre-deployed whenever a PoS mechanism Polygon Edge chain is initialized, and is available on the address\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001001")," from block ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h3",{id:"epochs"},"Epochs"),(0,r.kt)("p",null,"Epochs are a concept introduced with the addition of PoS to the Polygon Edge."),(0,r.kt)("p",null,"Epochs are considered to be a special time frame (in blocks) in which a certain set of validators can produce blocks.\nTheir lengths are modifiable, meaning node operators can configure the length of an epoch during genesis generation."),(0,r.kt)("p",null,"At the end of each epoch, an ",(0,r.kt)("em",{parentName:"p"},"epoch block")," is created, and after that event a new epoch starts. To learn more about\nepoch blocks, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/edge/consensus/pos-concepts#epoch-blocks"},"Epoch Blocks")," section."),(0,r.kt)("p",null,"Validator sets are updated at the end of each epoch. Nodes query the validator set from the Staking Smart Contract\nduring the creation of the epoch block, and save the obtained data to local storage. This query and save cycle is\nrepeated at the end of each epoch."),(0,r.kt)("p",null,"Essentially, it ensures that the Staking Smart Contract has full control over the addresses in the validator set, and\nleaves nodes with only 1 responsibility - to query the contract once during an epoch for fetching the latest validator\nset information. This alleviates the responsibility from individual nodes from taking care of validator sets."),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,"Addresses can stake funds on the Staking Smart Contract by invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"stake")," method, and by specifying a value for\nthe staked amount in the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const StakingContractFactory = await ethers.getContractFactory("Staking");\nlet stakingContract = await StakingContractFactory.attach(STAKING_CONTRACT_ADDRESS)\nas\nStaking;\nstakingContract = stakingContract.connect(account);\n\nconst tx = await stakingContract.stake({value: STAKE_AMOUNT})\n')),(0,r.kt)("p",null,"By staking funds on the Staking Smart Contract, addresses can enter the validator set and thus be able to participate in\nthe block production process."),(0,r.kt)("admonition",{title:"Threshold for staking",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently, the minimum threshold for entering the validator set is staking ",(0,r.kt)("inlineCode",{parentName:"p"},"1 ETH"))),(0,r.kt)("h3",{id:"unstaking"},"Unstaking"),(0,r.kt)("p",null,"Addresses that have staked funds can only ",(0,r.kt)("strong",{parentName:"p"},"unstake all of their staked funds at once"),"."),(0,r.kt)("p",null,"Unstaking can be invoked by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"unstake")," method on the Staking Smart Contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const StakingContractFactory = await ethers.getContractFactory("Staking");\nlet stakingContract = await StakingContractFactory.attach(STAKING_CONTRACT_ADDRESS)\nas\nStaking;\nstakingContract = stakingContract.connect(account);\n\nconst tx = await stakingContract.unstake()\n')),(0,r.kt)("p",null,"After unstaking their funds, addresses are removed from the validator set on the Staking Smart Contract, and will not be\nconsidered validators during the next epoch."),(0,r.kt)("h2",{id:"epoch-blocks"},"Epoch Blocks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Epoch Blocks")," are a concept introduced in the PoS implementation of IBFT in Polygon Edge."),(0,r.kt)("p",null,"Essentially, epoch blocks are special blocks that contain ",(0,r.kt)("strong",{parentName:"p"},"no transactions")," and occur only at ",(0,r.kt)("strong",{parentName:"p"},"the end of an epoch"),".\nFor example, if the ",(0,r.kt)("strong",{parentName:"p"},"epoch size")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"50")," blocks, epoch blocks would be considered to be blocks ",(0,r.kt)("inlineCode",{parentName:"p"},"50"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"150")," and so on."),(0,r.kt)("p",null,"They are used to performing additional logic that shouldn't occur during regular block production."),(0,r.kt)("p",null,"Most importantly, they are an indication to the node that ",(0,r.kt)("strong",{parentName:"p"},"it needs to fetch the latest validator set")," information\nfrom the Staking Smart Contract."),(0,r.kt)("p",null,"After updating the validator set at the epoch block, the validator set (either changed or unchanged)\nis used for the subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"epochSize - 1")," blocks, until it gets updated again by pulling the latest information from\nthe Staking Smart Contract."),(0,r.kt)("p",null,"Epoch lengths (in blocks) are modifiable when generating the genesis file, by using a special flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--epoch-size"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge genesis --epoch-size 50 ...\n")),(0,r.kt)("p",null,"The default size of an epoch is ",(0,r.kt)("inlineCode",{parentName:"p"},"100000")," blocks in the Polygon Edge."),(0,r.kt)("h2",{id:"contract-pre-deployment"},"Contract pre-deployment"),(0,r.kt)("p",null,"The Polygon Edge ",(0,r.kt)("em",{parentName:"p"},"pre-deploys"),"\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xPolygon/staking-contracts/blob/main/contracts/Staking.sol"},"Staking Smart Contract"),"\nduring ",(0,r.kt)("strong",{parentName:"p"},"genesis generation")," to the address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001001"),"."),(0,r.kt)("p",null,"It does so without a running EVM, by modifying the blockchain state of the Smart Contract directly, using the passed in\nconfiguration values to the genesis command."))}h.isMDXComponent=!0}}]);