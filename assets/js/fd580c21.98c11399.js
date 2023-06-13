"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[42590],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function l(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},e)}},74866:function(t,e,n){n.d(e,{Z:function(){return v}});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(76775),p=n(91980),s=n(67392),u=n(50012);function c(t){return function(t){return r.Children.map(t,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function m(t){var e=t.values,n=t.children;return(0,r.useMemo)((function(){var t=null!=e?e:c(n);return function(t){var e=(0,s.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function d(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function k(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId,o=(0,i.k6)(),l=function(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((function(t){if(l){var e=new URLSearchParams(o.location.search);e.set(l,t),o.replace(Object.assign({},o.location,{search:e.toString()}))}}),[l,o])]}function h(t){var e,n,a,o,l=t.defaultValue,i=t.queryString,p=void 0!==i&&i,s=t.groupId,c=m(t),h=(0,r.useState)((function(){return function(t){var e,n=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),f=h[0],g=h[1],N=k({queryString:p,groupId:s}),y=N[0],b=N[1],w=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:s}.groupId),n=(0,u.Nk)(e),a=n[0],o=n[1],[a,(0,r.useCallback)((function(t){e&&o.set(t)}),[e,o])]),v=w[0],P=w[1],T=function(){var t=null!=y?y:v;return d({value:t,tabValues:c})?t:null}();return(0,r.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:f,selectValue:(0,r.useCallback)((function(t){if(!d({value:t,tabValues:c}))throw new Error("Can't select invalid tab value="+t);g(t),b(t),P(t)}),[b,P,c]),tabValues:c}}var f=n(72389),g="tabList__CuJ",N="tabItem_LNqP";function y(t){var e=t.className,n=t.block,i=t.selectedValue,p=t.selectValue,s=t.tabValues,u=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(t){var e=t.currentTarget,n=u.indexOf(e),a=s[n].value;a!==i&&(c(e),p(a))},d=function(t){var e,n=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":var a,r=u.indexOf(t.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,l=u.indexOf(t.currentTarget)-1;n=null!=(o=u[l])?o:u[u.length-1]}null==(e=n)||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},s.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:function(t){return u.push(t)},onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":i===e})}),null!=n?n:e)})))}function b(t){var e=t.lazy,n=t.children,a=t.selectedValue;if(n=Array.isArray(n)?n:[n],e){var o=n.find((function(t){return t.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})})))}function w(t){var e=h(t);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},t,e)),r.createElement(b,(0,a.Z)({},t,e)))}function v(t){var e=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(e)},t))}},12108:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(74866),i=n(85162),p=["components"],s={id:"network-rpc-endpoints",title:"Network Endpoints",sidebar_label:"Network Endpoints",description:"Network endpoints for Polyon PoS Mainnet and Mumbai Testnet.",keywords:["docs","polygon","remote procedure call","network endpoints","rpcs","http","websocket","wss"],image:"https://wiki.polygon.technology/img/polygon-wiki.png"},u=void 0,c={unversionedId:"operate/network-rpc-endpoints",id:"operate/network-rpc-endpoints",title:"Network Endpoints",description:"Network endpoints for Polyon PoS Mainnet and Mumbai Testnet.",source:"@site/docs/operate/network.md",sourceDirName:"operate",slug:"/operate/network-rpc-endpoints",permalink:"/matic-docs/docs/operate/network-rpc-endpoints",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/operate/network.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"network-rpc-endpoints",title:"Network Endpoints",sidebar_label:"Network Endpoints",description:"Network endpoints for Polyon PoS Mainnet and Mumbai Testnet.",keywords:["docs","polygon","remote procedure call","network endpoints","rpcs","http","websocket","wss"],image:"https://wiki.polygon.technology/img/polygon-wiki.png"},sidebar:"operatepos",previous:{title:"Using Packages",permalink:"/matic-docs/docs/operate/full-node"},next:{title:"Default Ports",permalink:"/matic-docs/docs/operate/default-ports"}},m={},d=[{value:"Mumbai PoS testnet",id:"mumbai-pos-testnet",level:2},{value:"Polygon PoS Mainnet",id:"polygon-pos-mainnet",level:2},{value:"RPC API Methods",id:"rpc-api-methods",level:2},{value:"Infrastructure Providers",id:"infrastructure-providers",level:3}],k={toc:d};function h(t){var e=t.components,n=(0,r.Z)(t,p);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This index guide contains network details for the Polygon Mumbai testnet and Polygon PoS Mainnet and\nlists their associated RPC and node endpoints."),(0,o.kt)(l.Z,{defaultValue:"mainnet",values:[{label:"PoS Mainnet",value:"mainnet"},{label:"PoS Testnet",value:"mumbai"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mumbai",mdxType:"TabItem"},(0,o.kt)("h2",{id:"mumbai-pos-testnet"},"Mumbai PoS testnet"),(0,o.kt)("p",null,"Mumbai Testnet replicates the Polygon Mainnet and is used for testing. Users can obtain\ntestnet tokens from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"faucet"),".\nTestnet tokens are valueless and are different from value-bearing assets like MATIC.\nThis allows developers or network maintainers to test configurations and experiment implementations."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Network Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NetworkName"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Mumbai"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ParentChain"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"https://goerli.net/"},"Go\xebrli")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chainId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"80001"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gas Token"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"gas-token"},"MATIC"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gas Station"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://gasstation-mumbai.matic.today/v2"},"Mumbai Gas Station")," (learn more ",(0,o.kt)("a",{parentName:"td",href:"https://docs.polygon.technology/docs/develop/tools/polygon-gas-station/"},"here"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RPC Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://rpc-mumbai.matic.today"},"https://rpc-mumbai.matic.today"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"wss://rpc-mumbai.matic.today"},"wss://rpc-mumbai.matic.today"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Heimdall API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://heimdall-api-testnet.polygon.technology"},"https://heimdall-api-testnet.polygon.technology"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/"},"https://mumbai.polygonscan.com/"))))),(0,o.kt)("admonition",{title:"More details",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"See the following ",(0,o.kt)("a",{parentName:"p",href:"https://static.matic.network/network/testnet/mumbai/index.json"},(0,o.kt)("strong",{parentName:"a"},"JSON data"))," containing\nnetwork details."))),(0,o.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},(0,o.kt)("h2",{id:"polygon-pos-mainnet"},"Polygon PoS Mainnet"),(0,o.kt)("p",null,"The native token of the Polygon PoS is MATIC and is used for gas."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Network Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NetworkName"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Polygon"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ParentChain"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Ethereum"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chainId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"137"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gas Token"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"gas-token"},"MATIC"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gas Station"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://polygonscan.com/gastracker"},"PolygonScan Gas Tracker (",(0,o.kt)("strong",{parentName:"a"},"recommended"),")")," or ",(0,o.kt)("a",{parentName:"td",href:"https://gasstation-mainnet.matic.network/v2"},"Matic Network Gas Station")," (learn more ",(0,o.kt)("a",{parentName:"td",href:"https://docs.polygon.technology/docs/develop/tools/polygon-gas-station/"},"here"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RPC Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://polygon-rpc.com/"},"https://polygon-rpc.com/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"wss://rpc-mainnet.matic.network"},"wss://rpc-mainnet.matic.network"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Heimdall API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://heimdall-api.polygon.technology"},"https://heimdall-api.polygon.technology"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://polygonscan.com/"},"https://polygonscan.com/"))))),(0,o.kt)("admonition",{title:"More details",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"See the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json"},(0,o.kt)("strong",{parentName:"a"},"JSON data")),"\ncontaining network details.")))),(0,o.kt)("h2",{id:"rpc-api-methods"},"RPC API Methods"),(0,o.kt)("p",null,"Developers can interact with on-chain data and send different types of transactions to\nthe network by utilizing network endpoints. The APIs follow a JSON-RPC standard;\nJSON-RPC is a stateless, lightweight, remote procedure call (RPC) protocol that is\ncommonly used when interacting with a blockchain network."),(0,o.kt)("admonition",{title:"Get started with RPC calls",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Start by visiting the complete set of API documentation for standard\n",(0,o.kt)("a",{parentName:"p",href:"https://edge-docs.polygon.technology/docs/get-started/json-rpc-commands/"},(0,o.kt)("strong",{parentName:"a"},"Polygon JSON-RPC calls")),"."),(0,o.kt)("p",{parentName:"admonition"},"If you want to get started with API requests that require no setup, fix failing requests, or,\nexplore new methods on the Polygon network, try out the ",(0,o.kt)("a",{parentName:"p",href:"https://composer.alchemyapi.io?composer_state=%7B%22chain%22%3A2%2C%22network%22%3A401%2C%22methodName%22%3A%22eth_getBlockByNumber%22%2C%22paramValues%22%3A%5B%22latest%22%2Cfalse%5D%7D"},(0,o.kt)("strong",{parentName:"a"},"Composer App")),".")),(0,o.kt)("p",null,"A user can also run their own node when interacting with the Polygon PoS chain or utilize\none of the public endpoints provided by infrastructure and API service providers to connect to\nthe network. Dagger is the best way to get realtime updates from the chain as it provides a way\nfor your dApps and backend system to get blockchain events in realtime over a socket or websocket."),(0,o.kt)("h3",{id:"infrastructure-providers"},"Infrastructure Providers"),(0,o.kt)("p",null,"Public RPCs may have traffic or rate-limits depending on usage.\nYou can sign up for a dedicated free RPC URL at the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.alchemy.com/"},"Alchemy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polygon.publicnode.com"},"Allnodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ankr.com/"},"Ankr")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blastapi.io/"},"Blast (Bware Labs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blockpi.io/"},"BlockPI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.blockspaces.com/web3-infrastructure"},"BlockSpaces")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chainnodes.org/"},"Chainnodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chainstack.com/build-better-with-polygon/"},"Chainstack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datahub.figment.io"},"DataHub (Figment)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblock.io/en/"},"GetBlock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://infura.io"},"Infura")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc.maticvigil.com/"},"MaticVigil")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moralis.io"},"Moralis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodereal.io"},"NodeReal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://onfinality.io/"},"OnFinality")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.portal.pokt.network/"},"Pocket Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.quicknode.com/chains/matic"},"QuickNode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.settlemint.com/docs/polygon-connect-to-a-node"},"SettleMint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.watchdata.io/blockchain-apis/polygon-api"},"WatchData")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nownodes.io/nodes/polygon-matic"},"NOWNodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kriptonio.com/"},"Kriptonio"))),(0,o.kt)("p",null,"View all public endpoints on ",(0,o.kt)("a",{parentName:"p",href:"https://www.alchemy.com/chain-connect/chain/polygon-pos"},"Alchemy's Chain Connect")," and ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/?search=Polygon+Mainnet"},"Chainlist"),"."))}h.isMDXComponent=!0}}]);