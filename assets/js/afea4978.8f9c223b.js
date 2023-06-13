"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[60295],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(86010),r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),s=n(76775),l=n(91980),u=n(67392),d=n(50012);function c(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,o.useCallback)((function(e){if(i){var t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[i,r])]}function f(e){var t,n,a,r,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,c=h(e),f=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:c})})),g=f[0],v=f[1],b=m({queryString:l,groupId:u}),k=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),S=w[0],T=w[1],E=function(){var e=null!=k?k:S;return p({value:e,tabValues:c})?e:null}();return(0,o.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:g,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),T(e)}),[y,T,c]),tabValues:c}}var g=n(72389),v="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,d=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(c(t),l(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,o=d.indexOf(e.currentTarget)+1;n=null!=(a=d[o])?a:d[0];break;case"ArrowLeft":var r,i=d.indexOf(e.currentTarget)-1;n=null!=(r=d[i])?r:d[d.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return d.push(e)},onKeyDown:p,onClick:h},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var r=n.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function S(e){var t=(0,g.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},98659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(74866),s=n(85162),l=["components"],u={id:"supernets-faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions",description:"The most common questions and answers about Supernets",keywords:["docs","Polygon","edge","supernets","network","modular","faqs","questions"]},d=void 0,c={unversionedId:"supernets/supernets-faq",id:"supernets/supernets-faq",title:"Frequently Asked Questions",description:"The most common questions and answers about Supernets",source:"@site/docs/supernets/faq.md",sourceDirName:"supernets",slug:"/supernets/supernets-faq",permalink:"/matic-docs/docs/supernets/supernets-faq",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/faq.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"supernets-faq",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions",description:"The most common questions and answers about Supernets",keywords:["docs","Polygon","edge","supernets","network","modular","faqs","questions"]},sidebar:"supernets",previous:{title:"Bridge",permalink:"/matic-docs/docs/supernets/api/json-rpc-bridge"},next:{title:"Changelog",permalink:"/matic-docs/docs/supernets/supernets-changelog"}},h={},p=[{value:"What is the relation between Supernets and Edge?",id:"what-is-the-relation-between-supernets-and-edge",level:2},{value:"Why should I use Supernets instead of Edge?",id:"why-should-i-use-supernets-instead-of-edge",level:2},{value:"What are some use cases for Supernets?",id:"what-are-some-use-cases-for-supernets",level:2},{value:"Is Edge the only consensus client for Supernets?",id:"is-edge-the-only-consensus-client-for-supernets",level:2},{value:"What tools are available for Supernets?",id:"what-tools-are-available-for-supernets",level:2},{value:"What infrastructure providers support Supernets?",id:"what-infrastructure-providers-support-supernets",level:2},{value:"Can you use Supernets with native Ethereum tooling?",id:"can-you-use-supernets-with-native-ethereum-tooling",level:2},{value:"Do Supernets address the need for large blockspace requirements?",id:"do-supernets-address-the-need-for-large-blockspace-requirements",level:2},{value:"Can the native bridge be deployed on any chain?",id:"can-the-native-bridge-be-deployed-on-any-chain",level:2},{value:"What assets are supported on the bridge?",id:"what-assets-are-supported-on-the-bridge",level:2},{value:"When will the Supernets mainnet be live?",id:"when-will-the-supernets-mainnet-be-live",level:2},{value:"When are the audits taking place?",id:"when-are-the-audits-taking-place",level:2},{value:"What will be the result of the audits?",id:"what-will-be-the-result-of-the-audits",level:2},{value:"How will the results of the audits be communicated if any issues are found?",id:"how-will-the-results-of-the-audits-be-communicated-if-any-issues-are-found",level:2},{value:"Can I migrate from an older version of Edge to Supernets?",id:"can-i-migrate-from-an-older-version-of-edge-to-supernets",level:2},{value:"Will there be migration support for v0.9 to v1.0?",id:"will-there-be-migration-support-for-v09-to-v10",level:2},{value:"What is the minimum and maximum validator size?",id:"what-is-the-minimum-and-maximum-validator-size",level:2},{value:"How do validator rewards work?",id:"how-do-validator-rewards-work",level:2},{value:"How should I handle validator secrets to ensure network security?",id:"how-should-i-handle-validator-secrets-to-ensure-network-security",level:2},{value:"Should I consider running a node in &quot;relayer&quot; mode?",id:"should-i-consider-running-a-node-in-relayer-mode",level:2},{value:"How can I monitor my nodes?",id:"how-can-i-monitor-my-nodes",level:2},{value:"Can a Supernet use a custom token standard instead of the default token contracts?",id:"can-a-supernet-use-a-custom-token-standard-instead-of-the-default-token-contracts",level:2},{value:"What is the recommended way to create and manage assets on a Supernet?",id:"what-is-the-recommended-way-to-create-and-manage-assets-on-a-supernet",level:2},{value:"Do I have to use the native bridge integration for Supernets?",id:"do-i-have-to-use-the-native-bridge-integration-for-supernets",level:2},{value:"Can the gas token be different from the staking token in Supernets?",id:"can-the-gas-token-be-different-from-the-staking-token-in-supernets",level:2},{value:"How can I create the initial supply of tokens when launching a new Supernet instance?",id:"how-can-i-create-the-initial-supply-of-tokens-when-launching-a-new-supernet-instance",level:2},{value:"What is the block interval in Edge?",id:"what-is-the-block-interval-in-edge",level:2},{value:"Why can&#39;t two blocks have the same timestamp?",id:"why-cant-two-blocks-have-the-same-timestamp",level:2},{value:"What causes the variability in block production times?",id:"what-causes-the-variability-in-block-production-times",level:2},{value:"Is it possible to phase lock the system clock and block production in Edge?",id:"is-it-possible-to-phase-lock-the-system-clock-and-block-production-in-edge",level:2},{value:"What is the recommended RPC endpoint for the rootchain?",id:"what-is-the-recommended-rpc-endpoint-for-the-rootchain",level:2},{value:"Can existing rootchain contracts be used instead of needing to deploy new ones?",id:"can-existing-rootchain-contracts-be-used-instead-of-needing-to-deploy-new-ones",level:2},{value:"Is it necessary to deploy new instances of rootchain contracts for each Supernet instance when running multiple Supernets?",id:"is-it-necessary-to-deploy-new-instances-of-rootchain-contracts-for-each-supernet-instance-when-running-multiple-supernets",level:2},{value:"Is the identity of a Supernet instance linked to the rootchain contract address on the rootchain?",id:"is-the-identity-of-a-supernet-instance-linked-to-the-rootchain-contract-address-on-the-rootchain",level:2},{value:"Can an allowlist be added after genesis if it was not configured during chain configuration?",id:"can-an-allowlist-be-added-after-genesis-if-it-was-not-configured-during-chain-configuration",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document contains answers to frequently asked questions (FAQs) about Supernets."),(0,r.kt)("p",null,"If you're new to Supernets and need general information, please navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Common FAQs tab"),". If you're ready to deploy a Supernet or have technical deployment questions, please navigate the rest of the ",(0,r.kt)("strong",{parentName:"p"},"FAQ tabs"),". ",(0,r.kt)("strong",{parentName:"p"},"If you have any further questions about configuring Supernets, please consult the documentation or reach out to the Supernets team for support.")),(0,r.kt)(i.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Migration",value:"migrate"},{label:"Validators",value:"validator"},{label:"Assets",value:"assets"},{label:"Blocks",value:"blocks"},{label:"Rootchain",value:"rootchain"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"common",mdxType:"TabItem"},(0,r.kt)("h2",{id:"what-is-the-relation-between-supernets-and-edge"},"What is the relation between Supernets and Edge?"),(0,r.kt)("p",null,"Supernets are built on top of an updated version of the legacy Edge client. This iteration of the client is designed specifically to enable next-generation EVM-compatible, application-specific sovereign blockchains. The logic for Supernets was first introduced in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xPolygon/polygon-edge/releases/tag/v0.7.0-alpha1"},"v0.7.0 release")," of the Edge client."),(0,r.kt)("admonition",{title:"The state of Polygon Edge",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The releases of the Edge client, ",(0,r.kt)("strong",{parentName:"p"},"starting from version 0.7.x and beyond,\nare related explicitly to Supernets, while versions 0.6.x and older are\nfor the older versions of the Polygon Edge client"),"."),(0,r.kt)("p",{parentName:"admonition"},"However, it's important to note that ",(0,r.kt)("strong",{parentName:"p"},"as of ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/0xPolygon/./polygon-edge/releases/tag/v0.8.0"},"v0.8.0"),", the legacy Edge client will no longer be supported by Polygon Labs"),". The ",(0,r.kt)("strong",{parentName:"p"},"Edge documentation on the Polygon Wiki will also be archived"),". Developers are encouraged to build with Polygon Supernets for support.")),(0,r.kt)("h2",{id:"why-should-i-use-supernets-instead-of-edge"},"Why should I use Supernets instead of Edge?"),(0,r.kt)("p",null,"Supernets are a product suite; a more advanced and feature-rich version of the Edge client that are specifically designed for building and deploying sovereign blockchains. It includes additional tools, features, and optimizations that make it easier to develop and deploy blockchain applications, while addressing the limitations of the legacy Edge client. Additionally, because the legacy Edge client will no longer be supported, developers are encouraged to transition to Supernets for ongoing support and development."),(0,r.kt)("p",null,"In addition, please check out the ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/get-started/why-supernets"},"why Supernets document")," for more context."),(0,r.kt)("h2",{id:"what-are-some-use-cases-for-supernets"},"What are some use cases for Supernets?"),(0,r.kt)("p",null,"Supernets are highly flexible and customizable blockchain platforms that can be used to create tailored solutions for a wide range of use cases. Here are some examples of potential use cases for Supernets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gaming applications and platforms"),(0,r.kt)("li",{parentName:"ul"},"Decentralized finance (DeFi) applications"),(0,r.kt)("li",{parentName:"ul"},"Supply chain management solutions"),(0,r.kt)("li",{parentName:"ul"},"Identity verification and management systems"),(0,r.kt)("li",{parentName:"ul"},"Social networks and content platforms"),(0,r.kt)("li",{parentName:"ul"},"Tokenization of assets such as real estate, art, and intellectual property"),(0,r.kt)("li",{parentName:"ul"},"Decentralized autonomous organizations (DAOs) and governance systems"),(0,r.kt)("li",{parentName:"ul"},"IoT and machine-to-machine communication"),(0,r.kt)("li",{parentName:"ul"},"E-commerce platforms and payment systems"),(0,r.kt)("li",{parentName:"ul"},"Insurance and risk management solutions")),(0,r.kt)("h2",{id:"is-edge-the-only-consensus-client-for-supernets"},"Is Edge the only consensus client for Supernets?"),(0,r.kt)("p",null,"Yes, Edge is the sole consensus client for Supernets and is integrated into the product suite."),(0,r.kt)("h2",{id:"what-tools-are-available-for-supernets"},"What tools are available for Supernets?"),(0,r.kt)("p",null,"Developers will have access to a variety of tools for building and launching blockchains on the Supernets network. Polygon Labs has partnered with multiple infrastructure providers, tool providers, and implementation partners to offer an all-inclusive development experience."),(0,r.kt)("p",null,"Supernets will eventually provide native tooling supplemented by third-party integrations and support. As the ecosystem grows, more resources are expected to become available, making it even easier for developers to build and deploy blockchain solutions on the Supernets network."),(0,r.kt)("h2",{id:"what-infrastructure-providers-support-supernets"},"What infrastructure providers support Supernets?"),(0,r.kt)("p",null,"Several infrastructure providers are currently onboarded to support Supernets and more are expected to join in the future. These providers offer a range of services including node hosting, developer tools, and technical support to help developers build and deploy applications on the Supernets network."),(0,r.kt)("p",null,"In addition to providing infrastructure and technical support, many of these providers also offer their own resources and documentation to aid in the utilization of Supernets. As the Supernets ecosystem continues to grow, we expect to see even more infrastructure providers joining the platform, further expanding the resources and support available to developers."),(0,r.kt)("h2",{id:"can-you-use-supernets-with-native-ethereum-tooling"},"Can you use Supernets with native Ethereum tooling?"),(0,r.kt)("p",null,"Yes, Supernets are EVM compatible and support Ethereum libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.8.2/#"},"Web3.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.org/v5/"},"Ether.js"),", making it easy for developers familiar with the Ethereum ecosystem to build and deploy applications on the Supernet. Additionally, popular Ethereum development environments such as ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," and ",(0,r.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle")," can also be used with Supernets."),(0,r.kt)("h2",{id:"do-supernets-address-the-need-for-large-blockspace-requirements"},"Do Supernets address the need for large blockspace requirements?"),(0,r.kt)("p",null,"Yes, Supernets are designed to meet the need for large blockspace requirements by providing a highly scalable, customizable blockchain solution. Developers can create application-specific blockchains that cater to their unique needs by extending the blockspace of a rootchain. The PolyBFT consensus mechanism used by Supernets is specifically designed to provide high throughput, low latency, and instant network finality, making it ideal for a wide range of applications already on Polygon PoS mainnet."),(0,r.kt)("h2",{id:"can-the-native-bridge-be-deployed-on-any-chain"},"Can the native bridge be deployed on any chain?"),(0,r.kt)("p",null,"Yes, the bridge can connect to any EVM-compatible rootchain (e.g. Polygon PoS). By leveraging the capabilities of the bridge and the modular design of Supernets, developers can create tailored solutions that are customized for their specific needs, including how they utilize assets."),(0,r.kt)("h2",{id:"what-assets-are-supported-on-the-bridge"},"What assets are supported on the bridge?"),(0,r.kt)("p",null,"The bridge currently supports ERC-20, ERC-721, and ERC-1155 tokens on Supernets for transfer. However, support for other asset types will soon be available. It is important to keep in mind that not all tokens on Supernets have the same functionality and capabilities. Users should review the ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/design/bridge/overview"},"bridge document")," to understand how to use tokens on Supernets and with the bridge."),(0,r.kt)("p",null,"As the Supernets ecosystem evolves, the bridge will support additional assets, enhancing interoperability between various blockchain networks and applications."),(0,r.kt)("h2",{id:"when-will-the-supernets-mainnet-be-live"},"When will the Supernets mainnet be live?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There is no mainnet for Supernets")," - Supernets are a product suite. The production release of Supernets is currently ",(0,r.kt)("strong",{parentName:"p"},"targeted for Q2 2023, subject to the completion of an ongoing audit"),"."),(0,r.kt)("p",null,"The development team is committed to ensuring that the platform is thoroughly tested and secure before release. In the meantime, developers and users can experiment with the latest test release, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xPolygon/polygon-edge/releases/tag/v1.0.0-rc1"},"v1.0.0-rc1"),", which serves as a valuable testing ground for applications on the platform."),(0,r.kt)("h2",{id:"when-are-the-audits-taking-place"},"When are the audits taking place?"),(0,r.kt)("p",null,"The audits are currently underway and scheduled to conclude in Q2 2023."),(0,r.kt)("h2",{id:"what-will-be-the-result-of-the-audits"},"What will be the result of the audits?"),(0,r.kt)("p",null,"The audits will assess the security and functionality of the v1.0 release. If any issues are found, they will be addressed before the official release."),(0,r.kt)("h2",{id:"how-will-the-results-of-the-audits-be-communicated-if-any-issues-are-found"},"How will the results of the audits be communicated if any issues are found?"),(0,r.kt)("p",null,"If any issues are found during the audits, they will be communicated through official channels. ",(0,r.kt)("strong",{parentName:"p"},"Please stay tuned for more information regarding the audits."))),(0,r.kt)(s.Z,{value:"migrate",mdxType:"TabItem"},(0,r.kt)("h2",{id:"can-i-migrate-from-an-older-version-of-edge-to-supernets"},"Can I migrate from an older version of Edge to Supernets?"),(0,r.kt)("p",null,"Yes, it's possible to migrate from a blockchain running on an older version of Edge with IBFT 1.0 consensus to a new blockchain running on Supernets with PolyBFT consensus using IBFT 2.0. However, please note that the migration process will require a hard fork, as IBFT 2.0 is not fully backward compatible with IBFT 1.0."),(0,r.kt)("p",null,"To upgrade to a new blockchain with PolyBFT consensus using IBFT 2.0, you'll need to follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new genesis block for the new blockchain with PolyBFT consensus using IBFT 2.0."),(0,r.kt)("li",{parentName:"ul"},"Migrate the data and state from the old blockchain to the new blockchain. ",(0,r.kt)("strong",{parentName:"li"},"Currently, the product suite only support state migration."))),(0,r.kt)("p",null,"For more information on the migration process, please refer to the migration guide available ",(0,r.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/operate/supernets-ibft-to-polybft"},(0,r.kt)("ins",null,"here")),"."),(0,r.kt)("h2",{id:"will-there-be-migration-support-for-v09-to-v10"},"Will there be migration support for v0.9 to v1.0?"),(0,r.kt)("p",null,"Yes, regenesis support for state migration from v0.9 to v1.0 is planned. For production releases beyond v1.0, the goal is to support the migration of both state and data and provide clear upgrade paths."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that further details on migration support will be provided as they become available."))),(0,r.kt)(s.Z,{value:"validator",mdxType:"TabItem"},(0,r.kt)("h2",{id:"what-is-the-minimum-and-maximum-validator-size"},"What is the minimum and maximum validator size?"),(0,r.kt)("p",null,"The minimum number of validators required is ",(0,r.kt)("strong",{parentName:"p"},"three")," in order to fulfill the requirements of IBFT 2.0 and achieve consensus, as at least two-thirds of the network are required to reach consensus."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"However, to achieve fault tolerance in PolyBFT, it is recommended to run at least four validators.")," "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PolyBFT does not support single validator architecture at this time.")),(0,r.kt)("p",null,"The maximum validator size is estimated to be 100, which is currently the upper limit for network stability and performance. However, this may change in the future as the network evolves and undergoes further testing and optimization."),(0,r.kt)("h2",{id:"how-do-validator-rewards-work"},"How do validator rewards work?"),(0,r.kt)("p",null,"The reward mechanism in the network incentivizes validators with block rewards for producing valid blocks each epoch. As of now, there is no separate predicate in place to withdraw rewards over the bridge. The details regarding the reward distribution and schedule are still being determined by the development team. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Once the implementation is ready, the specifics will be communicated.")),(0,r.kt)("h2",{id:"how-should-i-handle-validator-secrets-to-ensure-network-security"},"How should I handle validator secrets to ensure network security?"),(0,r.kt)("p",null,"To maintain the security of the network, it is recommended that you keep the validator secrets secure and only retrieve them when necessary. Avoid storing them in an unsecured location or sharing them with unauthorized parties."),(0,r.kt)("h2",{id:"should-i-consider-running-a-node-in-relayer-mode"},'Should I consider running a node in "relayer" mode?'),(0,r.kt)("p",null,'Running one Supernet node in "relayer" mode can enable automatic execution of deposit events. This can help streamline the deposit process and improve the overall efficiency of the network.'),(0,r.kt)("h2",{id:"how-can-i-monitor-my-nodes"},"How can I monitor my nodes?"),(0,r.kt)("p",null,"You can use common tools like ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," and ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," to monitor your nodes. These tools can help you track important metrics like CPU usage, memory consumption, and network activity. Additionally, you can use block explorers like Polygonscan to monitor your node's health and activity."),(0,r.kt)("p",null,"We will also provide monitoring node guides, as well as tutorials on how to ",(0,r.kt)("em",{parentName:"p"},"upgrade")," or ",(0,r.kt)("em",{parentName:"p"},"migrate")," and test shortly.")),(0,r.kt)(s.Z,{value:"assets",mdxType:"TabItem"},(0,r.kt)("h2",{id:"can-a-supernet-use-a-custom-token-standard-instead-of-the-default-token-contracts"},"Can a Supernet use a custom token standard instead of the default token contracts?"),(0,r.kt)("p",null,"Although it is recommended to use the standard ERC-20, ERC-721, and ERC-1155 contracts, it is not a requirement for a Supernet to use them. However, any custom standard employed by a Supernet must adhere to the chain configuration to ensure compatibility with the bridge. Additionally, generating a native ERC-based asset using the default core contracts involves deploying, mapping, and bridging. If a custom standard is used, it will also need to follow the same procedure."),(0,r.kt)("h2",{id:"what-is-the-recommended-way-to-create-and-manage-assets-on-a-supernet"},"What is the recommended way to create and manage assets on a Supernet?"),(0,r.kt)("p",null,"To create and manage native assets on a Supernet or enable asset bridging between a Supernet and rootchain, it is recommended to use the core contracts provided by the network."),(0,r.kt)("h2",{id:"do-i-have-to-use-the-native-bridge-integration-for-supernets"},"Do I have to use the native bridge integration for Supernets?"),(0,r.kt)("p",null,"Yes, the native bridge integration is now mandatory with the latest v0.9 test release. The native bridge integration utilizes PolyBFT consensus, allowlisting, and a range of premium tools, which are crucial for the proper functioning of the network."),(0,r.kt)("p",null,"The bridge logic consists of predicate contracts for cross-chain message passing, a relayer to execute calls and transactions, and a JSON-RPC endpoint to the rootchain."),(0,r.kt)("h2",{id:"can-the-gas-token-be-different-from-the-staking-token-in-supernets"},"Can the gas token be different from the staking token in Supernets?"),(0,r.kt)("p",null,"Yes, Supernets allows for the decoupling of the native gas token and the staking token, as per the v0.9 release. You can set any ERC-20 token as your gas token, and use MATIC for staking."),(0,r.kt)("p",null,"Decoupling the gas token and the staking token provides greater flexibility and enables more use cases for the network. However, it's important to note that the specifics of how this is configured may depend on the specific implementation of the network you're using."),(0,r.kt)("h2",{id:"how-can-i-create-the-initial-supply-of-tokens-when-launching-a-new-supernet-instance"},"How can I create the initial supply of tokens when launching a new Supernet instance?"),(0,r.kt)("p",null,"To create the initial supply of tokens when launching a new Supernet instance, premining or minting can be used. This can help ensure that the network has the necessary tokens to facilitate transactions and operations.")),(0,r.kt)(s.Z,{value:"blocks",mdxType:"TabItem"},(0,r.kt)("h2",{id:"what-is-the-block-interval-in-edge"},"What is the block interval in Edge?"),(0,r.kt)("p",null,"Edge is configured to generate blocks every second, but the interval between blocks can vary due to the dynamic nature of block production. The ",(0,r.kt)("inlineCode",{parentName:"p"},"edge_consensus_block_interval")," is computed based on the difference between block headers, which have a timestamp field with only 1-second precision. The interval can never be 0 based on the PolyBFT consensus rules."),(0,r.kt)("h2",{id:"why-cant-two-blocks-have-the-same-timestamp"},"Why can't two blocks have the same timestamp?"),(0,r.kt)("p",null,"The timestamp field in the block headers only has 1-second precision. Therefore, it's not possible for two blocks to have the same timestamp. Based on the PolyBFT consensus rules, two blocks won't be produced in the same second."),(0,r.kt)("h2",{id:"what-causes-the-variability-in-block-production-times"},"What causes the variability in block production times?"),(0,r.kt)("p",null,"Because the system clock and block production are not phase-locked, there can be slight variations in the time it takes to produce each block. These variations can be caused by a number of factors, such as network latency, differences in computational power between validators, and the availability of resources like memory and disk space. Additionally, PolyBFT ensures that blocks are not produced too frequently or too infrequently, which can also contribute to variations in block production times. Still, the system is designed to ensure that blocks are produced reliably and at a predictable rate."),(0,r.kt)("h2",{id:"is-it-possible-to-phase-lock-the-system-clock-and-block-production-in-edge"},"Is it possible to phase lock the system clock and block production in Edge?"),(0,r.kt)("p",null,"No, it's not possible to phase lock the system because we wouldn't produce a block in less than a second. This dynamic is fundamental to the way that times are being stored in the block headers and the rate at which blocks are being produced. It doesn't speak to the variability of block production times.")),(0,r.kt)(s.Z,{value:"rootchain",mdxType:"TabItem"},(0,r.kt)("h2",{id:"what-is-the-recommended-rpc-endpoint-for-the-rootchain"},"What is the recommended RPC endpoint for the rootchain?"),(0,r.kt)("p",null,"You may use any available JSON-RPC endpoint for an associated rootchain."),(0,r.kt)("p",null,"However, selecting a reliable and publicly available RPC endpoint for the rootchain is crucial to ensure proper handling of checkpoint information. To guarantee validators can facilitate specific requests, it is suggested to connect directly to a node endpoint instead of a load balancer."),(0,r.kt)("h2",{id:"can-existing-rootchain-contracts-be-used-instead-of-needing-to-deploy-new-ones"},"Can existing rootchain contracts be used instead of needing to deploy new ones?"),(0,r.kt)("p",null,"In theory, existing rootchain contracts can be used, but it is not practical with the current contract configuration."),(0,r.kt)("p",null,"Manually updating the Supernet configuration to point to existing rootchain contract addresses may disrupt or challenge checkpoints and chain state, leading to problems if there is a fork on the Supernet. Furthermore, updating the checkpoint manager's address could trigger an exit with the wrong checkpoint manager, leading to incorrect state transitions and potential loss of funds. Deploying new contracts on the rootchain ensures all necessary dependencies are available and properly configured, avoiding compatibility issues or other unforeseen problems."),(0,r.kt)("h2",{id:"is-it-necessary-to-deploy-new-instances-of-rootchain-contracts-for-each-supernet-instance-when-running-multiple-supernets"},"Is it necessary to deploy new instances of rootchain contracts for each Supernet instance when running multiple Supernets?"),(0,r.kt)("p",null,"Yes, new instances of rootchain contracts must be deployed for each Supernet instance. Each Supernet instance is independent and requires its own set of contracts to function properly. Deploying and managing multiple instances of contracts can be complex and requires careful consideration of factors such as cost, security, and scalability. It is essential to plan and test thoroughly before implementing a solution with multiple Supernets."),(0,r.kt)("h2",{id:"is-the-identity-of-a-supernet-instance-linked-to-the-rootchain-contract-address-on-the-rootchain"},"Is the identity of a Supernet instance linked to the rootchain contract address on the rootchain?"),(0,r.kt)("p",null,"Yes, the identity of a Supernet instance is linked to the rootchain contract address on the rootchain. Each Supernet instance is associated with a specific set of rootchain contracts, and its identity is determined by the address of those contracts on the rootchain.")),(0,r.kt)(s.Z,{value:"access",mdxType:"TabItem"},(0,r.kt)("h2",{id:"can-an-allowlist-be-added-after-genesis-if-it-was-not-configured-during-chain-configuration"},"Can an allowlist be added after genesis if it was not configured during chain configuration?"),(0,r.kt)("p",null,"No, it's not possible to add an allowlist after the genesis configuration. This is because the allowlist serves to specify the initial \"admins\" of the network who are responsible for the initial authority and adding new addresses thereafter. If the allowlist were to be changed after genesis, it would alter the initial authority of the network, potentially introducing security risks and undermining the integrity of the system. As such, it's important to carefully consider and configure the allowlist during the genesis setup to ensure the network's security and functionality."))))}f.isMDXComponent=!0}}]);