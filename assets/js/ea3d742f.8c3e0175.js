"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[47009],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"state-receiver",title:"StateReceiver",description:"The State receiver contract for Polygon Edge",keywords:["docs","polygon","edge","core","checkpoint","manager"]},l=void 0,c={unversionedId:"supernets/contracts/state-receiver",id:"supernets/contracts/state-receiver",title:"StateReceiver",description:"The State receiver contract for Polygon Edge",source:"@site/docs/supernets/contracts/state-receiver.md",sourceDirName:"supernets/contracts",slug:"/supernets/contracts/state-receiver",permalink:"/matic-docs/docs/supernets/contracts/state-receiver",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/contracts/state-receiver.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"state-receiver",title:"StateReceiver",description:"The State receiver contract for Polygon Edge",keywords:["docs","polygon","edge","core","checkpoint","manager"]}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Structs",id:"structs",level:2},{value:"StateSync",id:"statesync",level:3},{value:"StateSyncCommitment",id:"statesynccommitment",level:3},{value:"Mappings",id:"mappings",level:2},{value:"Constants",id:"constants",level:2},{value:"Events",id:"events",level:2},{value:"StateSyncResult",id:"statesyncresult",level:3},{value:"NewCommitment",id:"newcommitment",level:3},{value:"Functions",id:"functions",level:2},{value:"commit",id:"commit",level:3},{value:"execute",id:"execute",level:3},{value:"batchExecute",id:"batchexecute",level:3},{value:"getRootByStateSyncId",id:"getrootbystatesyncid",level:3},{value:"getCommitmentByStateSyncId",id:"getcommitmentbystatesyncid",level:3},{value:"_executeStateSync",id:"_executestatesync",level:3},{value:"_checkPubkeyAggregation",id:"_checkpubkeyaggregation",level:3}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The StateReceiver contract is a smart contract that allows for the execution\nand relay of state data on a child blockchain. It uses a Merkle tree to commit\nto a batch of state sync objects and provides functions to verify the inclusion\nof individual state sync objects in a commitment. It also allows for the execution\nof multiple state sync events at once and has a mapping to keep track of processed\nstate sync events. The contract also has several event triggers that are emitted\nwhen specific actions are taken, such as when a new commitment is added, when a\nstate sync event is executed, and when the execution of a state sync event fails."),(0,r.kt)("h2",{id:"structs"},"Structs"),(0,r.kt)("h3",{id:"statesync"},"StateSync"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"struct StateSync {\n    uint256 id;\n    address sender;\n    address receiver;\n    bytes data;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSync")," struct is used to represent a single state sync event.\nIt includes the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": a unique identifier for the state sync event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender"),": the address of the sender of the state sync event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiver"),": the address of the receiver of the state sync event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": the data associated with the state sync event")),(0,r.kt)("h3",{id:"statesynccommitment"},"StateSyncCommitment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"struct StateSyncCommitment {\n        uint256 startId;\n        uint256 endId;\n        bytes32 root;\n    }\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSyncCommitment")," struct is used to represent a group of state\nsync events that are processed together. It includes the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startId"),": the identifier of the first state sync event in the bundle"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endId"),": the identifier of the last state sync event in the bundle"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": the root of the Merkle tree formed by the state sync events in"),(0,r.kt)("li",{parentName:"ul"},"the bundle")),(0,r.kt)("h2",{id:"mappings"},"Mappings"),(0,r.kt)("p",null,"The following mappings are used in the contract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"processedStateSyncs"),": a mapping from uint256 (state sync id) to bool indicating\nwhether a state sync event with a particular id has already been processed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commitments"),": a mapping from uint256 (commitment id) to StateSyncCommitment struct\nindicating the commitment associated with a particular state sync id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commitmentIds"),": an array of uint256 representing the ids of all commitments in the\ncontract")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"processedStateSyncs")," mapping is used to track which state sync events have already\nbeen executed and prevent duplicate execution of the same event. The ",(0,r.kt)("inlineCode",{parentName:"p"},"commitments")," mapping\nis used to store ",(0,r.kt)("inlineCode",{parentName:"p"},"commitments")," and retrieve them later by state sync id. ",(0,r.kt)("inlineCode",{parentName:"p"},"commitmentIds")," is\nused to keep track of the order of ",(0,r.kt)("inlineCode",{parentName:"p"},"commitments")," in the contract."),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uint256 private constant MAX_GAS = 300000;\n")),(0,r.kt)("p",null,"The contract defines a constant called ",(0,r.kt)("inlineCode",{parentName:"p"},"MAX_GAS"),", which represents the maximum\ngas allowed for each message call."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"statesyncresult"},"StateSyncResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event StateSyncResult(uint256 indexed counter, ResultStatus indexed status, bytes32 message);\n")),(0,r.kt)("p",null,"The contract includes an event called ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSyncResult"),", which is emitted when a ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSync"),"\nevent is processed. The event includes the following indexed fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"counter"),": the identifier of the state sync event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": the result of processing the state sync event (success, failure, or skip)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),": a message associated with the result of processing the state sync event")),(0,r.kt)("h3",{id:"newcommitment"},"NewCommitment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"event NewCommitment(uint256 indexed startId, uint256 indexed endId, bytes32 root);\n")),(0,r.kt)("p",null,"The contract also includes an event called ",(0,r.kt)("inlineCode",{parentName:"p"},"NewCommitment"),", which is emitted when a new\ncommitment is made. The event includes the following indexed fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startId"),": the startId of the commitment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endId"),": the endId of the commitment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": the root of the Merkle tree of the commitment")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"commit"},"commit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function commit(\n    StateSyncCommitment calldata commitment,\n    bytes calldata signature,\n    bytes calldata bitmap\n) external onlySystemCall\n")),(0,r.kt)("p",null,"This function is used to commit the root of a Merkle tree formed by a group of\nstate sync events. It takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commitment"),": a StateSyncCommitment struct representing the group of state sync events\nto be committed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature"),": the signature of the commitment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitmap"),": a bitmap indicating which validators signed the commitment")),(0,r.kt)("p",null,"The function checks that the ",(0,r.kt)("inlineCode",{parentName:"p"},"startId")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitment")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"lastCommittedId")," plus 1,\nand that the ",(0,r.kt)("inlineCode",{parentName:"p"},"endId")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitment")," is greater than or equal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"startId"),". It then\nverifies the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitment")," using an aggregation of public keys.\nIf the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," is valid, it stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitment")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitments")," mapping\nand updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"lastCommittedId"),"."),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function execute(bytes32[] calldata proof, StateSync[] calldata objs) external\n")),(0,r.kt)("p",null,"This function is used to submit a leaf of a Merkle tree formed by a group of state\nsync events for execution. It takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proof"),": an array of Merkle proofs for the state sync events in the group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objs"),": an array of StateSync structs representing the state sync events in the group")),(0,r.kt)("p",null,"The function first checks that there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bundles")," mapping that has not\nyet been executed. It then calculates the data hash of the objs array and verifies that the\ndata hash is a leaf in the Merkle tree rooted at the root of the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSyncBundle"),"\nstruct. If the data hash is a valid leaf, the function increments the counter and updates the\n",(0,r.kt)("inlineCode",{parentName:"p"},"currentLeafIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastExecutedBundleCounter")," as necessary. Finally, it processes each state\nsync event in the objs array by calling the processSync function for each event."),(0,r.kt)("h3",{id:"batchexecute"},"batchExecute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function batchExecute(bytes32[][] calldata proofs, StateSync[] calldata objs) external\n")),(0,r.kt)("p",null,"This function is similar to the execute function but allows for multiple state sync events\nto be executed at once. It takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proofs"),": an array of arrays of Merkle proofs for the state sync events in the group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objs"),": an array of StateSync structs representing the state sync events in the group")),(0,r.kt)("p",null,"The function first checks that the length of ",(0,r.kt)("inlineCode",{parentName:"p"},"proofs")," is equal to the length of ",(0,r.kt)("inlineCode",{parentName:"p"},"objs"),".\nIt then checks that there is a commitment in the commitments mapping that has not yet been\nexecuted for each element in ",(0,r.kt)("inlineCode",{parentName:"p"},"objs"),". It then calculates the data hash of each ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," and\nverifies that the data hash is a leaf in the Merkle tree rooted at the root of the\ncorresponding commitment. If the proof is valid, it executes the corresponding state\nsync event."),(0,r.kt)("h3",{id:"getrootbystatesyncid"},"getRootByStateSyncId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getRootByStateSyncId(uint256 id) external view returns (bytes32)\n")),(0,r.kt)("p",null,"This function allows for retrieval of the root data for a specific state sync event.\nIt takes the following parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": the id of the state sync event")),(0,r.kt)("p",null,"It first retrieves the root from the commitment with the highest ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," lower than or\nequal to the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". It then checks if the root is not equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and returns\nit if it is not, otherwise it throws an error."),(0,r.kt)("h3",{id:"getcommitmentbystatesyncid"},"getCommitmentByStateSyncId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getCommitmentByStateSyncId(uint256 id) public view returns (StateSyncCommitment memory)\n")),(0,r.kt)("p",null,"This function allows to retrieve the commitment for a state sync ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,"It takes the following parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": the state sync id to get the commitment for")),(0,r.kt)("p",null,"The function first retrieves the index of the commitment in ",(0,r.kt)("inlineCode",{parentName:"p"},"commitmentIds"),"\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"findUpperBound")," function, passing the given ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". It then checks if the index is\nnot equal to the length of ",(0,r.kt)("inlineCode",{parentName:"p"},"commitmentIds"),", if not, it returns the commitment from\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"commitments")," mapping using the calculated ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),". If it is, it will throw an error\n",(0,r.kt)("inlineCode",{parentName:"p"},"StateReceiver: NO_COMMITMENT_FOR_ID")),(0,r.kt)("h3",{id:"_executestatesync"},"_executeStateSync"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function _executeStateSync(StateSync calldata obj) private\n")),(0,r.kt)("p",null,"This function is an internal function to execute a state sync object."),(0,r.kt)("p",null,"It takes the following parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"obj"),": the ",(0,r.kt)("inlineCode",{parentName:"li"},"StateSync")," object to be executed")),(0,r.kt)("p",null,"The function first checks if the state sync has already been processed\nby checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"processedStateSyncs")," mapping."),(0,r.kt)("p",null,"If it has, it will throw an error ",(0,r.kt)("inlineCode",{parentName:"p"},"StateReceiver: STATE_SYNC_IS_PROCESSED"),".\nIf not, it will check if the receiver address has no code, if so, it will emit\na ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSyncResult")," event with false status, otherwise, it will mark the state\nsync as processed and call the receiver address with the onStateReceive function\nand the obj ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", sender and data as parameters. It will then emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"StateSyncResult"),"\nevent with the success status and return data of the call."),(0,r.kt)("h3",{id:"_checkpubkeyaggregation"},"_checkPubkeyAggregation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function _checkPubkeyAggregation(bytes32 message, bytes calldata signature, bytes calldata bitmap) internal view\n")),(0,r.kt)("p",null,"This function verifies an aggregated BLS signature using BLS precompile.\nIt takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),": plaintext of signed message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature"),": the signed message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bitmap"),": bitmap of which validators have signed")),(0,r.kt)("p",null,"The function uses the V",(0,r.kt)("inlineCode",{parentName:"p"},"ALIDATOR_PKCHECK_PRECOMPILE")," address to call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"staticcall")," function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"abi.encode")," of the message, ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"bitmap")," passed as parameters. It then decodes the return data to a bool and\nchecks if the call was successful and the signature is verified. If not it will\nthrow an error ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGNATURE_VERIFICATION_FAILED"),"."))}u.isMDXComponent=!0}}]);