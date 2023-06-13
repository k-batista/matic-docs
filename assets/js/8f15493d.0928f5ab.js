"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[31237],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(44996),s=["components"],l={id:"core_concepts",title:"Core Concepts",description:"Bor is state chain in Polygon architecture",keywords:["docs","matic","Core Concepts","polygon","state chain","architecture"],image:"https://matic.network/banners/matic-network-16x9.png"},c="Core Concepts",p={unversionedId:"pos/bor/core_concepts",id:"pos/bor/core_concepts",title:"Core Concepts",description:"Bor is state chain in Polygon architecture",source:"@site/docs/pos/bor/core_concepts.md",sourceDirName:"pos/bor",slug:"/pos/bor/core_concepts",permalink:"/matic-docs/docs/pos/bor/core_concepts",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/pos/bor/core_concepts.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"core_concepts",title:"Core Concepts",description:"Bor is state chain in Polygon architecture",keywords:["docs","matic","Core Concepts","polygon","state chain","architecture"],image:"https://matic.network/banners/matic-network-16x9.png"},sidebar:"pos",previous:{title:"Bor Architecture",permalink:"/matic-docs/docs/pos/bor/"},next:{title:"Bor Consensus",permalink:"/matic-docs/docs/pos/bor/consensus"}},d={},u=[{value:"Consensus",id:"consensus",level:2},{value:"Genesis",id:"genesis",level:2},{value:"EVM/Solidity as VM",id:"evmsolidity-as-vm",level:2},{value:"MATIC as Native token (Gas token)",id:"matic-as-native-token-gas-token",level:2},{value:"Fees",id:"fees",level:3},{value:"Transfer receipt logs",id:"transfer-receipt-logs",level:3},{value:"Deposit native token",id:"deposit-native-token",level:3},{value:"Withdraw native token",id:"withdraw-native-token",level:3},{value:"In-built contracts (Genesis contracts)",id:"in-built-contracts-genesis-contracts",level:2},{value:"Bor validator set",id:"bor-validator-set",level:3},{value:"State receiver",id:"state-receiver",level:3},{value:"MATIC ERC20 token",id:"matic-erc20-token",level:3},{value:"System Call",id:"system-call",level:2},{value:"Span Management",id:"span-management",level:2},{value:"Propose Span Transaction",id:"propose-span-transaction",level:3},{value:"Commit span Tx",id:"commit-span-tx",level:3},{value:"State Management (State-sync)",id:"state-management-state-sync",level:2},{value:"State sender",id:"state-sender",level:3},{value:"State Receiver Interface",id:"state-receiver-interface",level:3},{value:"Transaction Speed",id:"transaction-speed",level:2},{value:"Attacks",id:"attacks",level:2},{value:"Censorship",id:"censorship",level:3},{value:"Fraud",id:"fraud",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,o.kt)("p",null,"Bor is state chain in Polygon architecture. It is a fork of Geth ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum"},"https://github.com/ethereum/go-ethereum")," with new consensus called Bor."),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/bor"},"https://github.com/maticnetwork/bor")),(0,o.kt)("h2",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"Bor uses new improved consensus, inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-225"},"Clique consensus")),(0,o.kt)("p",null,"More details on consensus and specifications: ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Bor-Consensus-5e52461f01ef4291bc1caad9ab8419c5"},"Bor Consensus")),(0,o.kt)("h2",{id:"genesis"},"Genesis"),(0,o.kt)("p",null,"The genesis block contains all the essential information to configure the network. It's basically the config file for Bor chain. To boot up Bor chain, the user needs to pass in the location of the file as a param."),(0,o.kt)("p",null,"Bor uses ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," as Genesis block and params.  Here is an example for Bor genesis ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n    "chainId": 15001,\n    "homesteadBlock": 1,\n    "eip150Block": 0,\n    "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "eip155Block": 0,\n    "eip158Block": 0,\n    "byzantiumBlock": 0,\n    "constantinopleBlock": 0,\n    "bor": {\n      "period": 1,\n      "producerDelay": 4,\n      "sprint": 64,\n      "validatorContract": "0x0000000000000000000000000000000000001000",\n      "stateReceiverContract": "0x0000000000000000000000000000000000001001"\n    }\n  }\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/15ab7eb6e8124142a3641939762d6d67"},"Config")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/17a8a10c3bd44b8caf34432c057e401c"},"Consensus specific config")),(0,o.kt)("h2",{id:"evmsolidity-as-vm"},"EVM/Solidity as VM"),(0,o.kt)("p",null,"Bor uses un-modified EVM as a VM for a transaction. Developers can deploy any contract they wish using the same Ethereum tools and compiler like ",(0,o.kt)("inlineCode",{parentName:"p"},"solc")," without any changes."),(0,o.kt)("h2",{id:"matic-as-native-token-gas-token"},"MATIC as Native token (Gas token)"),(0,o.kt)("p",null,"Bor has a MATIC token as a native token similar to ETH in Ethereum. It is often called the gas token. This token works correctly as to how ETH works currently on the Ethereum chain."),(0,o.kt)("p",null,"In addition to that, Bor provides an in-built wrapped ERC20 token for the native token (similar to WETH token), which means applications can use wrapped MATIC ERC20 token in their applications without creating their own wrapped ERC20 version of the Matic native token."),(0,o.kt)("p",null,"Wrapped ERC20 token is deployed at ",(0,o.kt)("inlineCode",{parentName:"p"},"0000000000000000000000000000000000001010")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"[MRC20.sol](https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MRC20.sol)")," on Bor as one of the genesis contracts."),(0,o.kt)("h3",{id:"fees"},"Fees"),(0,o.kt)("p",null,"Native token is used as fees while sending transaction on Bor. This prevents spam on Bor and provides incentives to Block Producers to run the chain for longer period and discourages bad behaviour."),(0,o.kt)("p",null,"A transaction sender defines ",(0,o.kt)("inlineCode",{parentName:"p"},"GasLimit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GasPrice")," for each transaction and broadcasts it on Bor. Each producer can define how much minimum gas price they can accept using ",(0,o.kt)("inlineCode",{parentName:"p"},"--gas-price")," while starting Bor node. If user-defined ",(0,o.kt)("inlineCode",{parentName:"p"},"GasPrice")," on the transaction is the same or greater than producer defined gas price, the producer will accept the transaction and includes it in the next available block. This enables each producer to allow its own minimum gas price requirement."),(0,o.kt)("p",null,"Transaction fees will be deducted from sender's account in terms of Native token."),(0,o.kt)("p",null,"Here is the formula for transaction fees:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"Tx.Fee = Tx.GasUsed * Tx.GasPrice\n")),(0,o.kt)("p",null,"Collected fees for all transactions in a block are transferred to the producer's account using coinbase transfer. Since having more staking power increases your probability to become a producer, it will allow a validator with high staking power to collect more rewards (in terms of fees) accordingly."),(0,o.kt)("h3",{id:"transfer-receipt-logs"},"Transfer receipt logs"),(0,o.kt)("p",null,"Each Plasma compatible ERC20 token on Bor adds a special transfer receipt log. The Matic token is no exception to that."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LogTransfer")," is a special log that is added to all plasma compatible ERC20/721 tokens.  Consider it as one 2-inputs-2-outputs UTXO for transfer.  Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"output1 = input1 - amount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"output2 = input2 + amount"),"  This allows plasma fraud-proof contracts to verify a transfer of Matic ERC20 tokens (here, Native token) on the Ethereum chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * @param token    ERC20 token address\n * @param from     Sender address\n * @param to       Recipient address\n * @param amount   Transferred amount\n * @param input1   Sender's amount before the transfer is executed\n * @param input2   Recipient's amount before the transfer is executed\n * @param output1  Sender's amount after the transfer is executed\n * @param output2  Recipient's amount after the transfer is executed\n */\nevent LogTransfer(\n    address indexed token,\n    address indexed from,\n    address indexed to,\n    uint256 amount,\n    uint256 input1,\n    uint256 input2,\n    uint256 output1,\n    uint256 output2\n);\n")),(0,o.kt)("p",null,"Since, MATIC token is the native token and doesn't have Native ERC20 token, Bor adds receipt log for each transfer made for Native token using following Golang code. Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/bor/blob/develop/core/state_transition.go#L241-L252"},"https://github.com/maticnetwork/bor/blob/develop/core/state_transition.go#L241-L252")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// addTransferLog adds transfer log into state\nfunc addTransferLog(\n    state vm.StateDB,\n    eventSig common.Hash,\n\n    sender,\n    recipient common.Address,\n\n    amount,\n    input1,\n    input2,\n    output1,\n    output2 *big.Int,\n) {\n    // ignore if amount is 0\n    if amount.Cmp(bigZero) <= 0 {\n        return\n    }\n\n    dataInputs := []*big.Int{\n        amount,\n        input1,\n        input2,\n        output1,\n        output2,\n    }\n\n    var data []byte\n    for _, v := range dataInputs {\n        data = append(data, common.LeftPadBytes(v.Bytes(), 32)...)\n    }\n\n    // add transfer log\n    state.AddLog(&types.Log{\n        Address: feeAddress,\n        Topics: []common.Hash{\n            eventSig,\n            feeAddress.Hash(),\n            sender.Hash(),\n            recipient.Hash(),\n        },\n        Data: data,\n    })\n}\n")),(0,o.kt)("h3",{id:"deposit-native-token"},"Deposit native token"),(0,o.kt)("p",null,"A user can receive native token by depositing MATIC tokens on Ethereum main-chain to ",(0,o.kt)("inlineCode",{parentName:"p"},"DepositManager")," contract (deployed on Ethereum chain). Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/depositManager/DepositManager.sol#L68"},"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/depositManager/DepositManager.sol#L68")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Moves ERC20 tokens from Ethereum chain to Bor.\n * Allowance for the `_amount` tokens to DepositManager is needed before calling this function.\n * @param _token   Ethereum ERC20 token address which needs to be deposited\n * @param _amount  Transferred amount\n */\nfunction depositERC20(address _token, uint256 _amount) external;\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"depositERC20")," tokens, users can move Matic ERC20 token (Native token) or any other ERC20 tokens from the Ethereum chain to Bor chain."),(0,o.kt)("h3",{id:"withdraw-native-token"},"Withdraw native token"),(0,o.kt)("p",null,"Withdraw from Bor chain to Ethereum chain works exactly like any other ERC20 tokens. A user can call ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function on ERC20 contract, deployed on Bor, at ",(0,o.kt)("inlineCode",{parentName:"p"},"0000000000000000000000000000000000001010"),"  to initiate withdraw process for the same.  Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MaticChildERC20.sol#L47-L61"},"https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MaticChildERC20.sol#L47-L61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Withdraw tokens from Bor chain to Ethereum chain\n * @param amount     Withdraw amount\n */\nfunction withdraw(uint256 amount) public payable;\n")),(0,o.kt)("h2",{id:"in-built-contracts-genesis-contracts"},"In-built contracts (Genesis contracts)"),(0,o.kt)("p",null,"Bor starts with three in-built contracts, often called genesis contracts. These contracts are available at block 0. Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/genesis-contracts"},"https://github.com/maticnetwork/genesis-contracts")),(0,o.kt)("p",null,"These contracts are compiled using ",(0,o.kt)("inlineCode",{parentName:"p"},"solc --bin-runtime"),". Example, following command emits compiled code for ",(0,o.kt)("inlineCode",{parentName:"p"},"contract.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solc --bin-runtime contract.sol\n")),(0,o.kt)("p",null,"Genesis contract is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json"),". When bor starts at block 0, it loads all contracts with the mentioned code and balance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"0x0000000000000000000000000000000000001010": {\n    "balance": "0x0",\n    "code" : "0x..."\n}\n')),(0,o.kt)("p",null,"Below are the details for each genesis contract."),(0,o.kt)("h3",{id:"bor-validator-set"},"Bor validator set"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/BorValidatorSet.sol"},"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/BorValidatorSet.sol")),(0,o.kt)("p",null,"Deployed at: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001000")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BorValidatorSet.sol")," contract manages validator set for spans. Having a current validator set and span information into a contract allows other contracts to use that information. Since Bor uses producers from Heimdall (external source), it uses system call to change the contract state."),(0,o.kt)("p",null,"For first sprint all producers are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"BorValidatorSet.sol")," directly."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setInitialValidators")," is called when the second span is being set. Since Bor doesn't support constructor for genesis contract, the first validator set needs to be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"spans")," map."),(0,o.kt)("p",null,"First span details are following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"firstSpan = {\n  number: 0,\n    startBlock: 0,\n    endBlock: 255\n}\n")),(0,o.kt)("p",null,"Solidity contract definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"contract BorValidatorSet {\n  // Current sprint value\n  uint256 public sprint = 64;\n\n  // Validator details\n  struct Validator {\n    uint256 id;\n    uint256 power;\n    address signer;\n  }\n\n  // Span details\n  struct Span {\n    uint256 number;\n    uint256 startBlock;\n    uint256 endBlock;\n  }\n\n  // set of all validators\n  mapping(uint256 => Validator[]) public validators;\n\n  // set of all producers\n  mapping(uint256 => Validator[]) public producers;\n\n  mapping (uint256 => Span) public spans; // span number => span\n  uint256[] public spanNumbers; // recent span numbers\n\n    /// Initializes initial validators to spans mapping since there is no way to initialize through constructor for genesis contract\n    function setInitialValidators() internal\n\n    /// Get current validator set (last enacted or initial if no changes ever made) with a current stake.\n    function getInitialValidators() public view returns (address[] memory, uint256[] memory;\n\n  /// Returns bor validator set at given block number\n  function getBorValidators(uint256 number) public view returns (address[] memory, uint256[] memory);\n\n  /// Proposes new span in case of force-ful span change\n  function proposeSpan() external;\n\n  /// Commits span (called through system call)\n  function commitSpan(\n    uint256 newSpan,\n    uint256 startBlock,\n    uint256 endBlock,\n    bytes calldata validatorBytes,\n    bytes calldata producerBytes\n  ) external onlySystem;\n\n  /// Returns current span number based on current block number\n  function currentSpanNumber() public view returns (uint256);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proposeSpan")," can be called by any valid validator with zero fees. Bor allows ",(0,o.kt)("inlineCode",{parentName:"p"},"proposeSpan")," transaction to be free transaction since it is part of the system."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"commitSpan")," is being called through the ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/maticnetwork/Overview-c8bdb110cd4d4090a7e1589ac1006bab#bba582b9e9c441d983aeec851b9421f9"},"system call"),"."),(0,o.kt)("h3",{id:"state-receiver"},"State receiver"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol"},"https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol")),(0,o.kt)("p",null,"Deployed at: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001001")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver")," contract provides a mechanism for receiving and storing state data from other contracts and notifying interested parties (i.e., contracts) of state changes.\nThe state-sync mechanism allows for the transfer of state data from the Ethereum chain to Bor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'contract StateReceiver is System {\n  using RLPReader for bytes;\n  using RLPReader for RLPReader.RLPItem;\n\n  uint256 public lastStateId;\n\n  function commitState(uint256 syncTime, bytes calldata recordBytes) onlySystem external returns(bool success) {\n    // parse state data\n    RLPReader.RLPItem[] memory dataList = recordBytes.toRlpItem().toList();\n    uint256 stateId = dataList[0].toUint();\n    require(\n      lastStateId + 1 == stateId,\n      "StateIds are not sequential"\n    );\n    lastStateId++;\n\n    address receiver = dataList[1].toAddress();\n    bytes memory stateData = dataList[2].toBytes();\n    // notify state receiver contract, in a non-revert manner\n    if (isContract(receiver)) {\n      uint256 txGas = 5000000;\n      bytes memory data = abi.encodeWithSignature("onStateReceive(uint256,bytes)", stateId, stateData);\n      // solium-disable-next-line security/no-inline-assembly\n      assembly {\n        success := call(txGas, receiver, 0, add(data, 0x20), mload(data), 0, 0)\n      }\n    }\n  }\n\n  // check if address is contract\n  function isContract(address _addr) private view returns (bool){\n    uint32 size;\n    assembly {\n      size := extcodesize(_addr)\n    }\n    return (size > 0);\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commitState"),": Called by authorized contracts, this function updates the contract's state by parsing state data and checking its sequential order. If the data is from a contract, it calls the ",(0,o.kt)("inlineCode",{parentName:"li"},"onStateReceive")," function on that contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isContract"),": This function checks whether a given address belongs to a contract or not by checking its bytecode size, used in ",(0,o.kt)("inlineCode",{parentName:"li"},"commitState"),".")),(0,o.kt)("h3",{id:"matic-erc20-token"},"MATIC ERC20 token"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MaticChildERC20.sol"},"https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MaticChildERC20.sol")),(0,o.kt)("p",null,"Deployed at: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001010")),(0,o.kt)("p",null,"This is special contract that wraps native coin (like $ETH in Ethereum) and provides an ERC20 token interface. Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," on this contract transfers native tokens. ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," method in ERC20 token allows users to move their tokens from Bor to Ethereum chain."),(0,o.kt)("p",null,"Note: This contract doesn't support ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance"),". This is same for every plasma compatible ERC20 token contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'contract MaticChildERC20 is BaseERC20 {\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  uint256 public currentSupply;\n  uint8 private constant DECIMALS = 18;\n\n  constructor() public {}\n\n  // Initializes state since genesis contract doesn\'t support constructor\n  function initialize(address _childChain, address _token) public;\n\n  /**\n   * Deposit tokens to the user account\n   * This deposit is only made through state receiver address\n   * @param user   Deposit address\n   * @param amount Withdraw amount\n   */\n  function deposit(address user, uint256 amount) public onlyOwner;\n\n  /**\n   * Withdraw amount to Ethereum chain\n   * @param amount Withdraw amount\n   */\n  function withdraw(uint256 amount) public payable;\n\n  function name() public pure returns (string memory) {\n      return "Matic Token";\n  }\n\n  function symbol() public pure returns (string memory) {\n      return "MATIC";\n  }\n\n  function decimals() public pure returns (uint8) {\n      return DECIMALS;\n  }\n\n  /**\n   * Total supply for the token.\n   * This is 10b tokens, same as total Matic supply on Ethereum chain\n   */\n  function totalSupply() public view returns (uint256) {\n      return 10000000000 * 10**uint256(DECIMALS);\n  }\n\n  /**\n   * Balance of particular account\n   * @param account Target address\n   */\n  function balanceOf(address account) public view returns (uint256) {\n      return account.balance;\n  }\n\n  /**\n   *  Function that is called when a user or another contract wants to transfer funds\n   *  @param to Address of token receiver\n   *  @param value Number of tokens to transfer\n   *  @return Returns success of function call\n   */\n  function transfer(address to, uint256 value) public payable returns (bool) {\n    if (msg.value != value) {\n          return false;\n    }\n    return _transferFrom(msg.sender, to, value);\n  }\n\n  /**\n   * This enables to transfer native token between users\n   * while keeping the interface the same as that of an ERC20 Token\n   * @param _transfer is invoked by _transferFrom method that is inherited from BaseERC20\n   */\n  function _transfer(address sender, address recipient, uint256 amount) internal {\n    address(uint160(recipient)).transfer(amount);\n    emit Transfer(sender, recipient, amount);\n  }\n}\n')),(0,o.kt)("h2",{id:"system-call"},"System Call"),(0,o.kt)("p",null,"Only system address, ",(0,o.kt)("inlineCode",{parentName:"p"},"2^160-2"),", allows making a system call. Bor calls it internally with the system address as ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender"),". It changes the contract state and updates the state root for a particular block. Inspired from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-210.md"},"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-210.md")," and ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.parity.io/Validator-Set#contracts"},"https://wiki.parity.io/Validator-Set#contracts")),(0,o.kt)("p",null,"System call is helpful to change state to contract without making any transaction."),(0,o.kt)("p",null,"Limitation: Currently events emitted by system call are not observable and not-included in any transaction or block."),(0,o.kt)("h2",{id:"span-management"},"Span Management"),(0,o.kt)("p",null,"Span is a logically defined set of blocks for which a set of validators is chosen from among all the available validators. Heimdall will select the committee of producers out of all validators. The producers will include a subset of validators depending upon the number of validators in the system."),(0,o.kt)("img",{src:(0,i.Z)("img/Bor/span-management.svg")}),(0,o.kt)("h3",{id:"propose-span-transaction"},"Propose Span Transaction"),(0,o.kt)("p",null,"Type: ",(0,o.kt)("strong",{parentName:"p"},"Heimdall transaction")),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/heimdall/blob/develop/bor/handler.go#L27"},"https://github.com/maticnetwork/heimdall/blob/develop/bor/handler.go#L27")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spanProposeTx")," sets validators\u2019 committee for a given ",(0,o.kt)("inlineCode",{parentName:"p"},"span")," in case of successful transaction inclusion. One transaction for each span must be included in Heimdall. It is called ",(0,o.kt)("inlineCode",{parentName:"p"},"spanProposeTx")," on Heimdall. ",(0,o.kt)("inlineCode",{parentName:"p"},"spanProposeTx")," must revert if being sent frequently or there is no less than 33% stake change occurred within the current committee (for, given ",(0,o.kt)("inlineCode",{parentName:"p"},"span"),")."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bor")," module on Heimdall handles span management. Here is how Bor chooses producers out of all validators:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Bor creates multiple slots based on validators' power. Example: A with power 10 will have 10 slots, B with power 20 with have 20 slots."),(0,o.kt)("li",{parentName:"ol"},"With all slots, ",(0,o.kt)("inlineCode",{parentName:"li"},"shuffle")," function shuffles them using ",(0,o.kt)("inlineCode",{parentName:"li"},"seed")," and selects first ",(0,o.kt)("inlineCode",{parentName:"li"},"producerCount")," producers.  ",(0,o.kt)("inlineCode",{parentName:"li"},"bor")," module on Heimdall uses ETH 2.0 shuffle algorithm to choose producers out of all validators. Each span ",(0,o.kt)("inlineCode",{parentName:"li"},"n")," uses block hash of Ethereum (ETH 1.0) block ",(0,o.kt)("inlineCode",{parentName:"li"},"n"),"  as ",(0,o.kt)("inlineCode",{parentName:"li"},"seed"),". Note that slots based selection allows validators to get selected based on their power. The higher power validator will have a higher probability to get selected. Source: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/maticnetwork/heimdall/blob/develop/bor/selection.go"},"https://github.com/maticnetwork/heimdall/blob/develop/bor/selection.go"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// SelectNextProducers selects producers for the next span by converting power to slots\n// spanEligibleVals - all validators eligible for next span\nfunc SelectNextProducers(blkHash common.Hash, spanEligibleVals []hmTypes.Validator, producerCount uint64) (selectedIDs []uint64, err error) {\n    if len(spanEligibleVals) <= int(producerCount) {\n        for _, val := range spanEligibleVals {\n            selectedIDs = append(selectedIDs, uint64(val.ID))\n        }\n        return\n    }\n\n    // extract seed from hash\n    seed := helper.ToBytes32(blkHash.Bytes()[:32])\n    validatorIndices := convertToSlots(spanEligibleVals)\n    selectedIDs, err = ShuffleList(validatorIndices, seed)\n    if err != nil {\n        return\n    }\n    return selectedIDs[:producerCount], nil\n}\n\n// converts validator power to slots\nfunc convertToSlots(vals []hmTypes.Validator) (validatorIndices []uint64) {\n    for _, val := range vals {\n        for val.VotingPower >= types.SlotCost {\n            validatorIndices = append(validatorIndices, uint64(val.ID))\n            val.VotingPower = val.VotingPower - types.SlotCost\n        }\n    }\n    return validatorIndices\n}\n")),(0,o.kt)("h3",{id:"commit-span-tx"},"Commit span Tx"),(0,o.kt)("p",null,"Type: ",(0,o.kt)("strong",{parentName:"p"},"Bor transaction")),(0,o.kt)("p",null,"There are two way to commit span in Bor."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic span change")),(0,o.kt)("p",{parentName:"li"},"At the end of the current span, at last block of the last sprint, Bor queries the next span from Heimdall and set validators and producers for the next span using a system call."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function commitSpan(\n    bytes newSpan,\n    address proposer,\n    uint256 startBlock,\n    uint256 endBlock,\n    bytes validatorBytes,\n    bytes producerBytes\n ) public onlySystem;\n")),(0,o.kt)("p",{parentName:"li"},"Bor uses new producers as block producers for their next blocks.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Force commit")),(0,o.kt)("p",{parentName:"li"},"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"span")," proposed on Heimdall, the validator can force push span if span needs to be changed before the current span ends. A transaction to propose a ",(0,o.kt)("inlineCode",{parentName:"p"},"span")," must be committed to Bor by any validator. Bor then updates and commits the proposed span at end of the current sprint using a system call."))),(0,o.kt)("h2",{id:"state-management-state-sync"},"State Management (State-sync)"),(0,o.kt)("p",null,"State management sends the state from the Ethereum chain to Bor chain. It is called ",(0,o.kt)("inlineCode",{parentName:"p"},"state-sync"),". This is a way to move data from the Ethereum chain to Bor chain."),(0,o.kt)("img",{src:(0,i.Z)("img/Bor/state-managment.svg")}),(0,o.kt)("h3",{id:"state-sender"},"State sender"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol"},"https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol")),(0,o.kt)("p",null,"To sync state sync, call following method ",(0,o.kt)("strong",{parentName:"p"},"state sender contract")," on Ethereum chain. The ",(0,o.kt)("inlineCode",{parentName:"p"},"state-sync")," mechanism is basically a way to move state data from the Ethereum chain to Bor."),(0,o.kt)("p",null,"A user, who wants to move ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," from contract on Ethereum chain to Bor chain, calls ",(0,o.kt)("inlineCode",{parentName:"p"},"syncSate")," method on ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSender.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"contract StateSender {\n    /**\n     * Emits `stateSynced` events to start sync process on Ethereum chain\n     * @param receiver    Target contract on Bor chain\n     * @param data        Data to send\n     */\n    function syncState (\n        address receiver,\n        bytes calldata data\n    ) external;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"receiver")," contract must be present on the child chain, which receives state ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," once the process is complete. ",(0,o.kt)("inlineCode",{parentName:"p"},"syncState")," emits ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSynced")," event on Ethereum, which is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Emits `stateSynced` events to start sync process on Ethereum chain\n * @param id                  State id\n * @param contractAddress     Target contract address on Bor\n * @param data                Data to send to Bor chain for Target contract address\n */\nevent StateSynced (\n    uint256 indexed id,\n    address indexed contractAddress,\n    bytes data\n);\n")),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"StateSynced")," event emitted on ",(0,o.kt)("inlineCode",{parentName:"p"},"stateSender")," contract on the Ethereum chain, any validator sends ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgEventRecord")," transaction on Heimdall."),(0,o.kt)("p",null,"After confirmation of a tx on Heimdall, a validator proposes ",(0,o.kt)("inlineCode",{parentName:"p"},"proposeState")," on Bor with the simple transaction and at end of the sprint, Bor commits and finalizes ",(0,o.kt)("inlineCode",{parentName:"p"},"state-sync")," by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"commitState")," using a ",(0,o.kt)("inlineCode",{parentName:"p"},"system")," call."),(0,o.kt)("p",null,"During ",(0,o.kt)("inlineCode",{parentName:"p"},"commitState"),", Bor executes ",(0,o.kt)("inlineCode",{parentName:"p"},"onStateReceive"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"stateId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," as args, on target contract."),(0,o.kt)("h3",{id:"state-receiver-interface"},"State Receiver Interface"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"receiver")," contract on Bor chain must implement following interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// IStateReceiver represents interface to receive state\ninterface IStateReceiver {\n  function onStateReceive(uint256 stateId, bytes calldata data) external;\n}\n")),(0,o.kt)("p",null,"Only ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000001001")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"StateReceiver.sol"),", must be allowed to call ",(0,o.kt)("inlineCode",{parentName:"p"},"onStateReceive")," function on target contract."),(0,o.kt)("h2",{id:"transaction-speed"},"Transaction Speed"),(0,o.kt)("p",null,"Bor currently works as expected with ~2 to 4 seconds' block time with 100 validators and 4 block producers. After multiple stress testing with huge number of transactions, exact block time will be decided."),(0,o.kt)("p",null,"Using sprint-based architecture helps Bor to create faster bulk blocks without changing the producer during the current sprint. Having delay between two sprints gives other producers to receive a broadcasted block, often called as ",(0,o.kt)("inlineCode",{parentName:"p"},"producerDelay")),(0,o.kt)("p",null,"Note that time between two sprints is higher than normal blocks to buffer to reduce the latency issues between multiple producers."),(0,o.kt)("h2",{id:"attacks"},"Attacks"),(0,o.kt)("h3",{id:"censorship"},"Censorship"),(0,o.kt)("p",null,"Bor uses a very small set of producers to create faster blocks. It means it is prone to more censorship attacks than Heimdall. In order to deal with that, multiple testing will be done to find out the max number of producers for acceptable block time in the system."),(0,o.kt)("p",null,"Apart from that there are few attacks possible:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"One producer is censoring the transaction"),(0,o.kt)("p",{parentName:"li"},"In that case, the transaction sender can wait for the next producer's sprint and try to send the transaction again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"All validators are colluding with each-other and censoring particular transaction"),(0,o.kt)("p",{parentName:"li"},"In this case, Polygon system will provide a way to submit a transaction on Ethereum chain and ask validators to include the transaction in next ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," checkpoints. If validators fail to include it during that time window, the user can slash the validators. Note that this is not currently implemented."))),(0,o.kt)("h3",{id:"fraud"},"Fraud"),(0,o.kt)("p",null,"Producers can include invalid transaction during their turn. It can be possible at multiple levels:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"One producer is fraudulent"),(0,o.kt)("p",{parentName:"li"},"If a producer includes invalid transaction at any height, other producers can create a fork and exclude that transaction since their valid node ignores invalid blocks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Span producers are fraudulent"),(0,o.kt)("p",{parentName:"li"},"If other producers don't create a fork, other validators who are validating the block can forcefully change the span by creating their own fork. This is not currently implemented since it requires how Geth works internally. However, this is in our future roadmap.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"All validators are fraudulent"),(0,o.kt)("p",{parentName:"li"},"Assumption is that \u2154+1 validators must be honest to work this system correctly."))))}h.isMDXComponent=!0}}]);