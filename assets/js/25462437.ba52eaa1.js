"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[85424],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"exit-helper",title:"ExitHelper",description:"The ExitHelper contract for Polygon Edge",keywords:["docs","polygon","edge","core","exit","exit helper"]},c=void 0,s={unversionedId:"supernets/contracts/exit-helper",id:"supernets/contracts/exit-helper",title:"ExitHelper",description:"The ExitHelper contract for Polygon Edge",source:"@site/docs/supernets/contracts/exit-helper.md",sourceDirName:"supernets/contracts",slug:"/supernets/contracts/exit-helper",permalink:"/matic-docs/docs/supernets/contracts/exit-helper",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/contracts/exit-helper.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"exit-helper",title:"ExitHelper",description:"The ExitHelper contract for Polygon Edge",keywords:["docs","polygon","edge","core","exit","exit helper"]}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Mappings",id:"mappings",level:2},{value:"Events",id:"events",level:2},{value:"ExitProcessed",id:"exitprocessed",level:3},{value:"Functions",id:"functions",level:2},{value:"initialize",id:"initialize",level:3},{value:"exit",id:"exit",level:3},{value:"batchExit",id:"batchexit",level:3},{value:"_exit",id:"_exit",level:3}],h={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ExitHelper contract is a smart contract that allows for the process of\nexits, when a user wants to withdraw their assets from a ",(0,r.kt)("inlineCode",{parentName:"p"},"childchain")," to a\n",(0,r.kt)("inlineCode",{parentName:"p"},"rootchain"),". It uses a Merkle tree to check whether a state transition is included\nin a block and provides functions to process exits and batch exits. The contract\nalso has an event trigger that is emitted when an exit is processed. The contract\nis initialized with a ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/contracts/checkpoint-manager"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckpointManager"))," address."),(0,r.kt)("h2",{id:"mappings"},"Mappings"),(0,r.kt)("p",null,"The following mappings are used in the contract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"processedExits"),": a mapping from uint256 (exit id) to bool indicating whether an\nexit with a particular ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," has already been processed")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"processedExits")," mapping is used to track which exits have already been processed and\nprevent duplicate processing of the same exit."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"exitprocessed"},"ExitProcessed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event ExitProcessed(uint256 indexed id, bool indexed success, bytes returnData);\n")),(0,r.kt)("p",null,"The contract includes an event called ",(0,r.kt)("inlineCode",{parentName:"p"},"ExitProcessed"),", which is emitted when an exit\nis processed. The event includes the following indexed fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": the identifier of the exit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success"),": the result of processing the exit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"returnData"),": return data from the onL2StateReceive function")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function initialize(ICheckpointManager newCheckpointManager) external initializer {\n    require(\n        address(newCheckpointManager) != address(0) && address(newCheckpointManager).code.length != 0,\n        "ExitHelper: INVALID_ADDRESS"\n    );\n    checkpointManager = newCheckpointManager;\n}\n')),(0,r.kt)("p",null,"This function is used to initialize the contract with the address of the\n",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/contracts/checkpoint-manager"},"CheckpointManager")," contract. It takes the following parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"newCheckpointManager"),": the address of the checkpoint manager contract")),(0,r.kt)("p",null,"The function requires that the address of the checkpoint manager contract is not the\nzero address and that the contract has deployed code. If either of these checks fail,\nthe contract will revert with an appropriate error message."),(0,r.kt)("h3",{id:"exit"},"exit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function exit(\n    uint256 blockNumber,\n    uint256 leafIndex,\n    bytes calldata unhashedLeaf,\n    bytes32[] calldata proof\n) external onlyInitialized {\n    // Implementation details ...\n}\n")),(0,r.kt)("p",null,"This function allows anyone to initiate an exit by calling the function\nand passing in the block ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", leaf ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", unhashed ",(0,r.kt)("inlineCode",{parentName:"p"},"leaf"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"proof"),".\nThe function will check that the contract has been initialized by calling the\n",(0,r.kt)("inlineCode",{parentName:"p"},"onlyInitialized")," modifier, which checks that the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkpointManager")," address\nis not the zero address."),(0,r.kt)("p",null,"The function will then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"_exit")," function and pass the parameters to it."),(0,r.kt)("h3",{id:"batchexit"},"batchExit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function batchExit(BatchExitInput[] calldata inputs) external onlyInitialized{\n    // Implementation details ...\n}\n")),(0,r.kt)("p",null,"This function allows anyone to initiate multiple exits at once by calling the\nfunction and passing in an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchExitInput")," structs. The function will\ncheck that the contract has been initialized by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyInitialized")," modifier,\nwhich checks that the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkpointManager")," address is not the zero address."),(0,r.kt)("p",null,"The function will then loop through the inputs array, calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"_exit")," function for\neach input."),(0,r.kt)("h3",{id:"_exit"},"_exit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function _exit(\n    uint256 blockNumber,\n    uint256 leafIndex,\n    bytes calldata unhashedLeaf,\n    bytes32[] calldata proof,\n    bool isBatch\n) private{\n   // Implementation details ...\n}\n")),(0,r.kt)("p",null,"This function is the internal function that handles the actual execution of an ",(0,r.kt)("inlineCode",{parentName:"p"},"exit"),".\nIt takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blockNumber"),": the block number of the state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leafIndex"),": the leaf index of the state in the Merkle tree"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unhashedLeaf"),": the unhashed leaf of the state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proof"),": the Merkle proof of the state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isBatch"),": a boolean indicating whether the exit is part of a batch or not")),(0,r.kt)("p",null,"This function first checks the ",(0,r.kt)("inlineCode",{parentName:"p"},"processedExits")," mapping to make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit"),"\nwith the given ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," has not been processed before."),(0,r.kt)("p",null,"Then it calls the checkpointManager's ",(0,r.kt)("inlineCode",{parentName:"p"},"getEventMembershipByBlockNumber")," function and\npassing ",(0,r.kt)("inlineCode",{parentName:"p"},"blockNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keccak256(unhashedLeaf)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"leafIndex"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"proof")," as arguments,\nthis function verifies the proof of inclusion of the unhashed leaf in the Merkle tree\nof the given block number. If the proof is valid, it marks the exit as processed and\ncalls the ",(0,r.kt)("inlineCode",{parentName:"p"},"onL2StateReceive")," function of the receiver contract with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sender"),"\nand data of the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," and emits the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExitProcessed")," event to indicate whether the call\nwas successful or not."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isBatch")," parameter is used to determine if this is a single exit or part of a batch\nof exits, if it's a batch, the function will not revert and just return if the exit has\nbeen processed before."))}u.isMDXComponent=!0}}]);