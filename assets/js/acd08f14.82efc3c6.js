"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[63157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"state",title:"State",description:"Explanation for the state module of Polygon Edge.",keywords:["docs","polygon","edge","architecture","module","state","trie"]},c=void 0,l={unversionedId:"main-edge/architecture/modules/state",id:"main-edge/architecture/modules/state",title:"State",description:"Explanation for the state module of Polygon Edge.",source:"@site/docs/main-edge/architecture/modules/state.md",sourceDirName:"main-edge/architecture/modules",slug:"/main-edge/architecture/modules/state",permalink:"/matic-docs/docs/main-edge/architecture/modules/state",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/architecture/modules/state.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"state",title:"State",description:"Explanation for the state module of Polygon Edge.",keywords:["docs","polygon","edge","architecture","module","state","trie"]}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Executor",id:"executor",level:2},{value:"Runtime",id:"runtime",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To truly understand how ",(0,s.kt)("strong",{parentName:"p"},"State")," works, you must understand some basic Ethereum concepts.",(0,s.kt)("br",null)),(0,s.kt)("p",null,"We highly recommend reading the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://ethereum.github.io/execution-specs/autoapi/ethereum/frontier/state/index.html"},"State in Ethereum guide")),"."),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Now that we've familiarized ourselves with basic Ethereum concepts, the next overview should be easy."),(0,s.kt)("p",null,"We mentioned that the ",(0,s.kt)("strong",{parentName:"p"},"World state trie")," has all the Ethereum accounts that exist. ",(0,s.kt)("br",null),"\nThese accounts are the leaves of the Merkle trie. Each leaf has encoded ",(0,s.kt)("strong",{parentName:"p"},"Account State")," information."),(0,s.kt)("p",null,"This enables the Polygon Edge to get a specific Merkle trie, for a specific point in time. ",(0,s.kt)("br",null),"\nFor example, we can get the hash of the state at block 10."),(0,s.kt)("p",null,"The Merkle trie, at any point in time, is called a ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Snapshot")),"."),(0,s.kt)("p",null,"We can have ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Snapshots"))," for the ",(0,s.kt)("strong",{parentName:"p"},"state trie"),", or for the ",(0,s.kt)("strong",{parentName:"p"},"storage trie")," - they are basically the same. ",(0,s.kt)("br",null),"\nThe only difference is in what the leaves represent:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In the case of the storage trie, the leaves contain an arbitrary state, which we cannot process or know what's in there"),(0,s.kt)("li",{parentName:"ul"},"In the case of the state trie, the leaves represent accounts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="state/state.go',title:'"state/state.go'},"type State interface {\n    // Gets a snapshot for a specific hash\n    NewSnapshotAt(types.Hash) (Snapshot, error)\n\n    // Gets the latest snapshot\n    NewSnapshot() Snapshot\n\n    // Gets the codeHash\n    GetCode(hash types.Hash) ([]byte, bool)\n}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Snapshot")," interface is defined as such:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="state/state.go',title:'"state/state.go'},"type Snapshot interface {\n    // Gets a specific value for a leaf\n    Get(k []byte) ([]byte, bool)\n\n    // Commits new information\n    Commit(objs []*Object) (Snapshot, []byte)\n}\n")),(0,s.kt)("p",null,"The information that can be committed is defined by the ",(0,s.kt)("em",{parentName:"p"},"Object struct"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="state/state.go',title:'"state/state.go'},"// Object is the serialization of the radix object\ntype Object struct {\n    Address  types.Address\n    CodeHash types.Hash\n    Balance  *big.Int\n    Root     types.Hash\n    Nonce    uint64\n    Deleted  bool\n\n    DirtyCode bool\n    Code      []byte\n\n    Storage []*StorageObject\n}\n")),(0,s.kt)("p",null,"The implementation for the Merkle trie is in the ",(0,s.kt)("em",{parentName:"p"},"state/immutable-trie")," folder. ",(0,s.kt)("br",null),"\n",(0,s.kt)("em",{parentName:"p"},"state/immutable-trie/state.go")," implements the ",(0,s.kt)("strong",{parentName:"p"},"State")," interface."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"state/immutable-trie/trie.go")," is the main Merkle trie object. It represents an optimized version of the Merkle trie,\nwhich reuses as much memory as possible."),(0,s.kt)("h2",{id:"executor"},"Executor"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"state/executor.go")," includes all the information needed for the Polygon Edge to decide how a block changes the current\nstate. The implementation of ",(0,s.kt)("em",{parentName:"p"},"ProcessBlock")," is located here."),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"apply")," method does the actual state transition. The executor calls the EVM."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="state/executor.go"',title:'"state/executor.go"'},"func (t *Transition) apply(msg *types.Transaction) ([]byte, uint64, bool, error) {\n    // check if there is enough gas in the pool\n    if err := t.subGasPool(msg.Gas); err != nil {\n        return nil, 0, false, err\n    }\n\n    txn := t.state\n    s := txn.Snapshot()\n\n    gas, err := t.preCheck(msg)\n    if err != nil {\n        return nil, 0, false, err\n    }\n    if gas > msg.Gas {\n        return nil, 0, false, errorVMOutOfGas\n    }\n\n    gasPrice := new(big.Int).SetBytes(msg.GetGasPrice())\n    value := new(big.Int).SetBytes(msg.Value)\n\n    // Set the specific transaction fields in the context\n    t.ctx.GasPrice = types.BytesToHash(msg.GetGasPrice())\n    t.ctx.Origin = msg.From\n\n    var subErr error\n    var gasLeft uint64\n    var returnValue []byte\n\n    if msg.IsContractCreation() {\n        _, gasLeft, subErr = t.Create2(msg.From, msg.Input, value, gas)\n    } else {\n        txn.IncrNonce(msg.From)\n        returnValue, gasLeft, subErr = t.Call2(msg.From, *msg.To, msg.Input, value, gas)\n    }\n\n    if subErr != nil {\n        if subErr == runtime.ErrNotEnoughFunds {\n            txn.RevertToSnapshot(s)\n            return nil, 0, false, subErr\n        }\n    }\n\n    gasUsed := msg.Gas - gasLeft\n    refund := gasUsed / 2\n    if refund > txn.GetRefund() {\n        refund = txn.GetRefund()\n    }\n\n    gasLeft += refund\n    gasUsed -= refund\n\n    // refund the sender\n    remaining := new(big.Int).Mul(new(big.Int).SetUint64(gasLeft), gasPrice)\n    txn.AddBalance(msg.From, remaining)\n\n    // pay the coinbase\n    coinbaseFee := new(big.Int).Mul(new(big.Int).SetUint64(gasUsed), gasPrice)\n    txn.AddBalance(t.ctx.Coinbase, coinbaseFee)\n\n    // return gas to the pool\n    t.addGasPool(gasLeft)\n\n    return returnValue, gasUsed, subErr != nil, nil\n}\n")),(0,s.kt)("h2",{id:"runtime"},"Runtime"),(0,s.kt)("p",null,"When a state transition is executed, the main module that executes the state transition is the EVM (located in\nstate/runtime/evm)."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"dispatch table")," does a match between the ",(0,s.kt)("strong",{parentName:"p"},"opcode")," and the instruction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="state/runtime/evm/dispatch_table.go"',title:'"state/runtime/evm/dispatch_table.go"'},"func init() {\n    // unsigned arithmetic operations\n    register(STOP, handler{opStop, 0, 0})\n    register(ADD, handler{opAdd, 2, 3})\n    register(SUB, handler{opSub, 2, 3})\n    register(MUL, handler{opMul, 2, 5})\n    register(DIV, handler{opDiv, 2, 5})\n    register(SDIV, handler{opSDiv, 2, 5})\n    register(MOD, handler{opMod, 2, 5})\n    register(SMOD, handler{opSMod, 2, 5})\n    register(EXP, handler{opExp, 2, 10})\n\n    ...\n\n    // jumps\n    register(JUMP, handler{opJump, 1, 8})\n    register(JUMPI, handler{opJumpi, 2, 10})\n    register(JUMPDEST, handler{opJumpDest, 0, 1})\n}\n")),(0,s.kt)("p",null,"The core logic that powers the EVM is the ",(0,s.kt)("em",{parentName:"p"},"Run")," loop. ",(0,s.kt)("br",null)),(0,s.kt)("p",null,"This is the main entry point for the EVM. It does a loop and checks the current opcode, fetches the instruction, checks\nif it can be executed, consumes gas and executes the instruction until it either fails or stops."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="state/runtime/evm/state.go"',title:'"state/runtime/evm/state.go"'},"\n// Run executes the virtual machine\nfunc (c *state) Run() ([]byte, error) {\n    var vmerr error\n\n    codeSize := len(c.code)\n\n    for !c.stop {\n        if c.ip >= codeSize {\n            c.halt()\n            break\n        }\n\n        op := OpCode(c.code[c.ip])\n\n        inst := dispatchTable[op]\n\n        if inst.inst == nil {\n            c.exit(errOpCodeNotFound)\n            break\n        }\n\n        // check if the depth of the stack is enough for the instruction\n        if c.sp < inst.stack {\n            c.exit(errStackUnderflow)\n            break\n        }\n\n        // consume the gas of the instruction\n        if !c.consumeGas(inst.gas) {\n            c.exit(errOutOfGas)\n            break\n        }\n\n        // execute the instruction\n        inst.inst(c)\n\n        // check if stack size exceeds the max size\n        if c.sp > stackSize {\n            c.exit(errStackOverflow)\n            break\n        }\n\n        c.ip++\n    }\n\n    if err := c.err; err != nil {\n        vmerr = err\n    }\n\n    return c.ret, vmerr\n}\n")))}h.isMDXComponent=!0}}]);