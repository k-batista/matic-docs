"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[42657],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85109:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"networking",title:"Networking",description:"Explanation for the networking module of Polygon Edge.",keywords:["docs","polygon","edge","architecture","module","networking","libp2p","GRPC"]},l=void 0,p={unversionedId:"main-edge/architecture/modules/networking",id:"main-edge/architecture/modules/networking",title:"Networking",description:"Explanation for the networking module of Polygon Edge.",source:"@site/docs/main-edge/architecture/modules/networking.md",sourceDirName:"main-edge/architecture/modules",slug:"/main-edge/architecture/modules/networking",permalink:"/matic-docs/docs/main-edge/architecture/modules/networking",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/architecture/modules/networking.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"networking",title:"Networking",description:"Explanation for the networking module of Polygon Edge.",keywords:["docs","polygon","edge","architecture","module","networking","libp2p","GRPC"]}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"GRPC",id:"grpc",level:2},{value:"GRPC for Node Operators",id:"grpc-for-node-operators",level:3},{value:"GRPC for Other Nodes",id:"grpc-for-other-nodes",level:3},{value:"\ud83d\udcdc Resources",id:"-resources",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A node has to communicate with other nodes on the network, in order to exchange useful information.",(0,a.kt)("br",null),"\nTo accomplish this task, the Polygon Edge leverages the battle-tested ",(0,a.kt)("strong",{parentName:"p"},"libp2p")," framework."),(0,a.kt)("p",null,"The choice to go with ",(0,a.kt)("strong",{parentName:"p"},"libp2p")," is primarily focused on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Speed")," - libp2p has a significant performance improvement over devp2p (used in GETH and other clients)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Extensibility")," - it serves as a great foundation for other features of the system"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modularity")," - libp2p is modular by nature, just like the Polygon Edge. This gives greater flexibility, especially when parts of the Polygon Edge need to be swappable")),(0,a.kt)("h2",{id:"grpc"},"GRPC"),(0,a.kt)("p",null,"On top of ",(0,a.kt)("strong",{parentName:"p"},"libp2p"),", the Polygon Edge uses the ",(0,a.kt)("strong",{parentName:"p"},"GRPC")," protocol. ",(0,a.kt)("br",null),"\nTechnically, the Polygon Edge uses several GRPC protocols, which will be covered later on."),(0,a.kt)("p",null,"The GRPC layer helps abstract all the request/reply protocols and simplifies the streaming protocols needed for the Polygon Edge to function."),(0,a.kt)("p",null,"GRPC relies on ",(0,a.kt)("strong",{parentName:"p"},"Protocol Buffers")," to define ",(0,a.kt)("em",{parentName:"p"},"services")," and ",(0,a.kt)("em",{parentName:"p"},"message structures"),". ",(0,a.kt)("br",null),"\nThe services and structures are defined in ",(0,a.kt)("em",{parentName:"p"},".proto")," files, which are compiled and are language-agnostic."),(0,a.kt)("p",null,"Earlier, we mentioned that the Polygon Edge leverages several GRPC protocols.",(0,a.kt)("br",null),"\nThis was done to boost the overall UX for the node operator, something which often lags with clients like GETH and Parity."),(0,a.kt)("p",null,"The node operator has a better overview of what is going on with the system by calling the GRPC service, instead of sifting through logs to find the information they're looking for."),(0,a.kt)("h3",{id:"grpc-for-node-operators"},"GRPC for Node Operators"),(0,a.kt)("p",null,"The following section might seem familiar because it was briefly covered in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/edge/get-started/cli-commands"},"CLI Commands")," section."),(0,a.kt)("p",null,"The GRPC service that is intended to be used by ",(0,a.kt)("strong",{parentName:"p"},"node operators")," is defined like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="minimal/proto/system.proto"',title:'"minimal/proto/system.proto"'},"service System {\n    // GetInfo returns info about the client\n    rpc GetStatus(google.protobuf.Empty) returns (ServerStatus);\n\n    // PeersAdd adds a new peer\n    rpc PeersAdd(PeersAddRequest) returns (google.protobuf.Empty);\n\n    // PeersList returns the list of peers\n    rpc PeersList(google.protobuf.Empty) returns (PeersListResponse);\n\n    // PeersInfo returns the info of a peer\n    rpc PeersStatus(PeersStatusRequest) returns (Peer);\n\n    // Subscribe subscribes to blockchain events\n    rpc Subscribe(google.protobuf.Empty) returns (stream BlockchainEvent);\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The CLI commands actually call the implementations of these service methods."),(0,a.kt)("p",{parentName:"admonition"},"These methods are implemented in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"minimal/system_service.go")),".")),(0,a.kt)("h3",{id:"grpc-for-other-nodes"},"GRPC for Other Nodes"),(0,a.kt)("p",null,"The Polygon Edge also implements several service methods that are used by other nodes on the network. ",(0,a.kt)("br",null),"\nThe mentioned service is described in the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"docs/edge/architecture/modules/consensus"},"Protocol"))," section."),(0,a.kt)("h2",{id:"-resources"},"\ud83d\udcdc Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://libp2p.io/"},"libp2p"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://grpc.io/"},"gRPC")))))}m.isMDXComponent=!0}}]);