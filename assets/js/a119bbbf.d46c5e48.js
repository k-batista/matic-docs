"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[36309],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=s,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"consensus",title:"Consensus",description:"Explanation for the consensus module of Polygon Edge.",keywords:["docs","polygon","edge","architecture","module","consensus","ibft"]},l=void 0,c={unversionedId:"edge/architecture/modules/consensus",id:"edge/architecture/modules/consensus",title:"Consensus",description:"Explanation for the consensus module of Polygon Edge.",source:"@site/docs/edge/architecture/modules/consensus.md",sourceDirName:"edge/architecture/modules",slug:"/edge/architecture/modules/consensus",permalink:"/matic-docs/docs/edge/architecture/modules/consensus",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/edge/architecture/modules/consensus.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"consensus",title:"Consensus",description:"Explanation for the consensus module of Polygon Edge.",keywords:["docs","polygon","edge","architecture","module","consensus","ibft"]},sidebar:"edge",previous:{title:"JSON RPC",permalink:"/matic-docs/docs/edge/architecture/modules/json-rpc"},next:{title:"Storage",permalink:"/matic-docs/docs/edge/architecture/modules/storage"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Consensus Interface",id:"consensus-interface",level:2},{value:"Consensus Configuration",id:"consensus-configuration",level:2},{value:"IBFT",id:"ibft",level:2},{value:"ExtraData",id:"extradata",level:3},{value:"Signing Data",id:"signing-data",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Snapshot Store",id:"snapshot-store",level:4},{value:"IBFT Startup",id:"ibft-startup",level:3},{value:"MessageReq",id:"messagereq",level:4},{value:"IBFT States",id:"ibft-states",level:3},{value:"SyncState",id:"syncstate",level:4},{value:"AcceptState",id:"acceptstate",level:4},{value:"ValidateState",id:"validatestate",level:4}],h={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Consensus")," module provides an interface for consensus mechanisms."),(0,r.kt)("p",null,"Currently, the following consensus engines are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IBFT PoA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IBFT PoS"))),(0,r.kt)("p",null,"The Polygon Edge wants to maintain a state of modularity and pluggability. ",(0,r.kt)("br",null),"\nThis is why the core consensus logic has been abstracted away, so new consensus mechanisms can be built on top, without\ncompromising on usability and ease of use."),(0,r.kt)("h2",{id:"consensus-interface"},"Consensus Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/consensus.go"',title:'"consensus/consensus.go"'},"// Consensus is the interface for consensus\ntype Consensus interface {\n    // VerifyHeader verifies the header is correct\n    VerifyHeader(parent, header *types.Header) error\n\n    // Start starts the consensus\n    Start() error\n\n    // Close closes the connection\n    Close() error\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Consensus"))," interface is the core of the mentioned abstraction. ",(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"VerifyHeader")," method represents a helper function which the consensus layer exposes to the ",(0,r.kt)("strong",{parentName:"li"},"blockchain")," layer\nIt is there to handle header verification"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Start")," method simply starts the consensus process, and everything associated with it. This includes synchronization,\nsealing, everything that needs to be done"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Close")," method closes the consensus connection")),(0,r.kt)("h2",{id:"consensus-configuration"},"Consensus Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/consensus.go"',title:'"consensus/consensus.go"'},"// Config is the configuration for the consensus\ntype Config struct {\n    // Logger to be used by the backend\n    Logger *log.Logger\n\n    // Params are the params of the chain and the consensus\n    Params *chain.Params\n\n    // Specific configuration parameters for the backend\n    Config map[string]interface{}\n\n    // Path for the consensus protocol to store information\n    Path string\n}\n")),(0,r.kt)("p",null,"There may be times when you might want to pass in a custom location for the consensus protocol to store data, or perhaps\na custom key-value map that you want the consensus mechanism to use. This can be achieved through the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Config"))," struct,\nwhich gets read when a new consensus instance is created."),(0,r.kt)("h2",{id:"ibft"},"IBFT"),(0,r.kt)("h3",{id:"extradata"},"ExtraData"),(0,r.kt)("p",null,"The blockchain header object, among other fields, has a field called ",(0,r.kt)("strong",{parentName:"p"},"ExtraData"),"."),(0,r.kt)("p",null,"IBFT uses this extra field to store operational information regarding the block, answering questions like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Who signed this block?"'),(0,r.kt)("li",{parentName:"ul"},'"Who are the validators for this block?"')),(0,r.kt)("p",null,"These extra fields for IBFT are defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/extra.go"',title:'"consensus/ibft/extra.go"'},"type IstanbulExtra struct {\n    Validators    []types.Address\n    Seal          []byte\n    CommittedSeal [][]byte\n}\n")),(0,r.kt)("h3",{id:"signing-data"},"Signing Data"),(0,r.kt)("p",null,"In order for the node to sign information in IBFT, it leverages the ",(0,r.kt)("em",{parentName:"p"},"signHash")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/sign.go"',title:'"consensus/ibft/sign.go"'},"func signHash(h *types.Header) ([]byte, error) {\n    //hash := istambulHeaderHash(h)\n    //return hash.Bytes(), nil\n\n    h = h.Copy() // make a copy since we update the extra field\n\n    arena := fastrlp.DefaultArenaPool.Get()\n    defer fastrlp.DefaultArenaPool.Put(arena)\n\n    // when hashign the block for signing we have to remove from\n    // the extra field the seal and commitedseal items\n    extra, err := getIbftExtra(h)\n    if err != nil {\n        return nil, err\n    }\n    putIbftExtraValidators(h, extra.Validators)\n\n    vv := arena.NewArray()\n    vv.Set(arena.NewBytes(h.ParentHash.Bytes()))\n    vv.Set(arena.NewBytes(h.Sha3Uncles.Bytes()))\n    vv.Set(arena.NewBytes(h.Miner.Bytes()))\n    vv.Set(arena.NewBytes(h.StateRoot.Bytes()))\n    vv.Set(arena.NewBytes(h.TxRoot.Bytes()))\n    vv.Set(arena.NewBytes(h.ReceiptsRoot.Bytes()))\n    vv.Set(arena.NewBytes(h.LogsBloom[:]))\n    vv.Set(arena.NewUint(h.Difficulty))\n    vv.Set(arena.NewUint(h.Number))\n    vv.Set(arena.NewUint(h.GasLimit))\n    vv.Set(arena.NewUint(h.GasUsed))\n    vv.Set(arena.NewUint(h.Timestamp))\n    vv.Set(arena.NewCopyBytes(h.ExtraData))\n\n    buf := keccak.Keccak256Rlp(nil, vv)\n    return buf, nil\n}\n")),(0,r.kt)("p",null,"Another notable method is the ",(0,r.kt)("em",{parentName:"p"},"VerifyCommittedFields")," method, which verifies that the committed seals are from valid validators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/sign.go',title:'"consensus/ibft/sign.go'},'func verifyCommitedFields(snap *Snapshot, header *types.Header) error {\n    extra, err := getIbftExtra(header)\n    if err != nil {\n        return err\n    }\n    if len(extra.CommittedSeal) == 0 {\n        return fmt.Errorf("empty committed seals")\n    }\n\n    // get the message that needs to be signed\n    signMsg, err := signHash(header)\n    if err != nil {\n        return err\n    }\n    signMsg = commitMsg(signMsg)\n\n    visited := map[types.Address]struct{}{}\n    for _, seal := range extra.CommittedSeal {\n        addr, err := ecrecoverImpl(seal, signMsg)\n        if err != nil {\n            return err\n        }\n\n        if _, ok := visited[addr]; ok {\n            return fmt.Errorf("repeated seal")\n        } else {\n            if !snap.Set.Includes(addr) {\n                return fmt.Errorf("signed by non validator")\n            }\n            visited[addr] = struct{}{}\n        }\n    }\n\n    validSeals := len(visited)\n    if validSeals <= 2*snap.Set.MinFaultyNodes() {\n        return fmt.Errorf("not enough seals to seal block")\n    }\n    return nil\n}\n')),(0,r.kt)("h3",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Snapshots, as the name implies, are there to provide a ",(0,r.kt)("em",{parentName:"p"},"snapshot"),", or the ",(0,r.kt)("em",{parentName:"p"},"state")," of a system at any block height (number)."),(0,r.kt)("p",null,"Snapshots contain a set of nodes who are validators, as well as voting information (validators can vote for other validators).\nValidators include voting information in the ",(0,r.kt)("strong",{parentName:"p"},"Miner")," header filed, and change the value of the ",(0,r.kt)("strong",{parentName:"p"},"nonce"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nonce is ",(0,r.kt)("strong",{parentName:"li"},"all 1s")," if the node wants to remove a validator"),(0,r.kt)("li",{parentName:"ul"},"Nonce is ",(0,r.kt)("strong",{parentName:"li"},"all 0s")," if the node wants to add a validator")),(0,r.kt)("p",null,"Snapshots are calculated using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"processHeaders"))," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/snapshot.go"',title:'"consensus/ibft/snapshot.go"'},'func (i *Ibft) processHeaders(headers []*types.Header) error {\n    if len(headers) == 0 {\n        return nil\n    }\n\n    parentSnap, err := i.getSnapshot(headers[0].Number - 1)\n    if err != nil {\n        return err\n    }\n    snap := parentSnap.Copy()\n\n    saveSnap := func(h *types.Header) error {\n        if snap.Equal(parentSnap) {\n            return nil\n        }\n\n        snap.Number = h.Number\n        snap.Hash = h.Hash.String()\n\n        i.store.add(snap)\n\n        parentSnap = snap\n        snap = parentSnap.Copy()\n        return nil\n    }\n\n    for _, h := range headers {\n        number := h.Number\n\n        validator, err := ecrecoverFromHeader(h)\n        if err != nil {\n            return err\n        }\n        if !snap.Set.Includes(validator) {\n            return fmt.Errorf("unauthroized validator")\n        }\n\n        if number%i.epochSize == 0 {\n            // during a checkpoint block, we reset the voles\n            // and there cannot be any proposals\n            snap.Votes = nil\n            if err := saveSnap(h); err != nil {\n                return err\n            }\n\n            // remove in-memory snaphots from two epochs before this one\n            epoch := int(number/i.epochSize) - 2\n            if epoch > 0 {\n                purgeBlock := uint64(epoch) * i.epochSize\n                i.store.deleteLower(purgeBlock)\n            }\n            continue\n        }\n\n        // if we have a miner address, this might be a vote\n        if h.Miner == types.ZeroAddress {\n            continue\n        }\n\n        // the nonce selects the action\n        var authorize bool\n        if h.Nonce == nonceAuthVote {\n            authorize = true\n        } else if h.Nonce == nonceDropVote {\n            authorize = false\n        } else {\n            return fmt.Errorf("incorrect vote nonce")\n        }\n\n        // validate the vote\n        if authorize {\n            // we can only authorize if they are not on the validators list\n            if snap.Set.Includes(h.Miner) {\n                continue\n            }\n        } else {\n            // we can only remove if they are part of the validators list\n            if !snap.Set.Includes(h.Miner) {\n                continue\n            }\n        }\n\n        count := snap.Count(func(v *Vote) bool {\n            return v.Validator == validator && v.Address == h.Miner\n        })\n        if count > 1 {\n            // there can only be one vote per validator per address\n            return fmt.Errorf("more than one proposal per validator per address found")\n        }\n        if count == 0 {\n            // cast the new vote since there is no one yet\n            snap.Votes = append(snap.Votes, &Vote{\n                Validator: validator,\n                Address:   h.Miner,\n                Authorize: authorize,\n            })\n        }\n\n        // check the tally for the proposed validator\n        tally := snap.Count(func(v *Vote) bool {\n            return v.Address == h.Miner\n        })\n\n        if tally > snap.Set.Len()/2 {\n            if authorize {\n                // add the proposal to the validator list\n                snap.Set.Add(h.Miner)\n            } else {\n                // remove the proposal from the validators list\n                snap.Set.Del(h.Miner)\n\n                // remove any votes casted by the removed validator\n                snap.RemoveVotes(func(v *Vote) bool {\n                    return v.Validator == h.Miner\n                })\n            }\n\n            // remove all the votes that promoted this validator\n            snap.RemoveVotes(func(v *Vote) bool {\n                return v.Address == h.Miner\n            })\n        }\n\n        if err := saveSnap(h); err != nil {\n            return nil\n        }\n    }\n\n    // update the metadata\n    i.store.updateLastBlock(headers[len(headers)-1].Number)\n    return nil\n}\n')),(0,r.kt)("p",null,"This method is usually called with 1 header, but the flow is the same even with multiple headers. ",(0,r.kt)("br",null),"\nFor each passed-in header, IBFT needs to verify that the proposer of the header is the validator. This can be done easily by\ngrabbing the latest snapshot, and checking if the node is in the validator set."),(0,r.kt)("p",null,"Next, the nonce is checked. The vote is included, and tallied - and if there are enough votes a node is added/removed from\nthe validator set, following which the new snapshot is saved."),(0,r.kt)("h4",{id:"snapshot-store"},"Snapshot Store"),(0,r.kt)("p",null,"The snapshot service manages and updates an entity called the ",(0,r.kt)("strong",{parentName:"p"},"snapshotStore"),", which stores the list of all available snapshots.\nUsing it, the service is able to quickly figure out which snapshot is associated with which block height."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/snapshot.go"',title:'"consensus/ibft/snapshot.go"'},"type snapshotStore struct {\n    lastNumber uint64\n    lock       sync.Mutex\n    list       snapshotSortedList\n}\n")),(0,r.kt)("h3",{id:"ibft-startup"},"IBFT Startup"),(0,r.kt)("p",null,"To start up IBFT, the Polygon Edge firstly needs to set up the IBFT transport:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/ibft.go"',title:'"consensus/ibft/ibft.go"'},'func (i *Ibft) setupTransport() error {\n    // use a gossip protocol\n    topic, err := i.network.NewTopic(ibftProto, &proto.MessageReq{})\n    if err != nil {\n        return err\n    }\n\n    err = topic.Subscribe(func(obj interface{}) {\n        msg := obj.(*proto.MessageReq)\n\n        if !i.isSealing() {\n            // if we are not sealing we do not care about the messages\n            // but we need to subscribe to propagate the messages\n            return\n        }\n\n        // decode sender\n        if err := validateMsg(msg); err != nil {\n            i.logger.Error("failed to validate msg", "err", err)\n            return\n        }\n\n        if msg.From == i.validatorKeyAddr.String() {\n            // we are the sender, skip this message since we already\n            // relay our own messages internally.\n            return\n        }\n        i.pushMessage(msg)\n    })\n    if err != nil {\n        return err\n    }\n\n    i.transport = &gossipTransport{topic: topic}\n    return nil\n}\n')),(0,r.kt)("p",null,"It essentially creates a new topic with IBFT proto, with a new proto buff message.",(0,r.kt)("br",null),"\nThe messages are meant to be used by validators. The Polygon Edge then subscribes to the topic and handles messages accordingly."),(0,r.kt)("h4",{id:"messagereq"},"MessageReq"),(0,r.kt)("p",null,"The message exchanged by validators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/proto/ibft.proto"',title:'"consensus/ibft/proto/ibft.proto"'},"message MessageReq {\n    // type is the type of the message\n    Type type = 1;\n\n    // from is the address of the sender\n    string from = 2;\n\n    // seal is the committed seal if message is commit\n    string seal = 3;\n\n    // signature is the crypto signature of the message\n    string signature = 4;\n\n    // view is the view assigned to the message\n    View view = 5;\n\n    // hash of the locked block\n    string digest = 6;\n\n    // proposal is the rlp encoded block in preprepare messages\n    google.protobuf.Any proposal = 7;\n\n    enum Type {\n        Preprepare = 0;\n        Prepare = 1;\n        Commit = 2;\n        RoundChange = 3;\n    }\n}\n\nmessage View {\n    uint64 round = 1;\n    uint64 sequence = 2;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"View")," field in the ",(0,r.kt)("strong",{parentName:"p"},"MessageReq")," represents the current node position inside the chain.\nIt has a ",(0,r.kt)("em",{parentName:"p"},"round"),", and a ",(0,r.kt)("em",{parentName:"p"},"sequence")," attribute."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"round")," represents the proposer round for the height"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sequence")," represents the height of the blockchain")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"msgQueue")," filed in the IBFT implementation has the purpose of storing message requests. It orders messages by\nthe ",(0,r.kt)("em",{parentName:"p"},"View")," (firstly by sequence, then by round). The IBFT implementation also possesses different queues for different states in the system."),(0,r.kt)("h3",{id:"ibft-states"},"IBFT States"),(0,r.kt)("p",null,"After the consensus mechanism is started using the ",(0,r.kt)("strong",{parentName:"p"},"Start")," method, it runs into an infinite loop which simulates a state machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="consensus/ibft/ibft.go"',title:'"consensus/ibft/ibft.go"'},'func (i *Ibft) start() {\n    // consensus always starts in SyncState mode in case it needs\n    // to sync with other nodes.\n    i.setState(SyncState)\n\n    header := i.blockchain.Header()\n    i.logger.Debug("current sequence", "sequence", header.Number+1)\n\n    for {\n        select {\n        case <-i.closeCh:\n            return\n        default:\n        }\n\n        i.runCycle()\n    }\n}\n\nfunc (i *Ibft) runCycle() {\n    if i.state.view != nil {\n        i.logger.Debug(\n            "cycle",\n            "state",\n            i.getState(),\n            "sequence",\n            i.state.view.Sequence,\n            "round",\n            i.state.view.Round,\n        )\n    }\n\n    switch i.getState() {\n    case AcceptState:\n        i.runAcceptState()\n\n    case ValidateState:\n        i.runValidateState()\n\n    case RoundChangeState:\n        i.runRoundChangeState()\n\n    case SyncState:\n        i.runSyncState()\n    }\n}\n')),(0,r.kt)("h4",{id:"syncstate"},"SyncState"),(0,r.kt)("p",null,"All nodes initially start in the ",(0,r.kt)("strong",{parentName:"p"},"Sync")," state."),(0,r.kt)("p",null,"This is because fresh data needs to be fetched from the blockchain. The client needs to find out if it's the validator,\nfind the current snapshot. This state resolves any pending blocks."),(0,r.kt)("p",null,"After the sync finishes, and the client determines it is indeed a validator, it needs to transfer to ",(0,r.kt)("strong",{parentName:"p"},"AcceptState"),".\nIf the client is ",(0,r.kt)("strong",{parentName:"p"},"not")," a validator, it will continue syncing, and stay in ",(0,r.kt)("strong",{parentName:"p"},"SyncState")),(0,r.kt)("h4",{id:"acceptstate"},"AcceptState"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Accept")," state always check the snapshot and the validator set. If the current node is not in the validators set,\nit moves back to the ",(0,r.kt)("strong",{parentName:"p"},"Sync")," state."),(0,r.kt)("p",null,"On the other hand, if the node ",(0,r.kt)("strong",{parentName:"p"},"is")," a validator, it calculates the proposer. If it turns out that the current node is the\nproposer, it builds a block, and sends preprepare and then prepare messages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preprepare messages - messages sent by proposers to validators, to let them know about the proposal"),(0,r.kt)("li",{parentName:"ul"},"Prepare messages - messages where validators agree on a proposal. All nodes receive all prepare messages"),(0,r.kt)("li",{parentName:"ul"},"Commit messages - messages containing commit information for the proposal")),(0,r.kt)("p",null,"If the current node ",(0,r.kt)("strong",{parentName:"p"},"is not")," a validator, it uses the ",(0,r.kt)("em",{parentName:"p"},"getNextMessage")," method to read a message from the previously shown queue. ",(0,r.kt)("br",null),"\nIt waits for the preprepare messages. Once it is confirmed everything is correct, the node moves to the ",(0,r.kt)("strong",{parentName:"p"},"Validate")," state."),(0,r.kt)("h4",{id:"validatestate"},"ValidateState"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Validate")," state is rather simple - all nodes do in this state is read messages and add them to their local snapshot state."))}d.isMDXComponent=!0}}]);