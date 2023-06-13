"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[59145],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69786:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"erc1155",title:"ERC-1155",sidebar_label:"ERC-1155",description:"Learn about the predefined token standards on a Supernet.",keywords:["docs","Polygon","edge","supernets","erc","erc1155","bridge"]},s=void 0,d={unversionedId:"supernets/design/bridge/assets/erc/erc1155",id:"supernets/design/bridge/assets/erc/erc1155",title:"ERC-1155",description:"Learn about the predefined token standards on a Supernet.",source:"@site/docs/supernets/design/bridge/assets/erc/erc1155.md",sourceDirName:"supernets/design/bridge/assets/erc",slug:"/supernets/design/bridge/assets/erc/erc1155",permalink:"/matic-docs/docs/supernets/design/bridge/assets/erc/erc1155",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/design/bridge/assets/erc/erc1155.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"erc1155",title:"ERC-1155",sidebar_label:"ERC-1155",description:"Learn about the predefined token standards on a Supernet.",keywords:["docs","Polygon","edge","supernets","erc","erc1155","bridge"]},sidebar:"supernets",previous:{title:"ERC-721",permalink:"/matic-docs/docs/supernets/design/bridge/assets/erc/erc721"},next:{title:"P2P Networking",permalink:"/matic-docs/docs/supernets/design/supernets-libp2p"}},l={},p=[{value:"ChildERC1155",id:"childerc1155",level:2},{value:"Predicates",id:"predicates",level:2},{value:"Deposits and Withdrawals",id:"deposits-and-withdrawals",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document presents an overview on the ERC-1155 standard available in Supernets."),(0,i.kt)("p",null,"ERC-1155 is a token standard that enables the creation of both fungible and non-fungible tokens on a blockchain network. In the context of Supernets, ERC-1155 tokens can be used to represent multiple instances of a single fungible or non-fungible asset on a Supernet."),(0,i.kt)("h2",{id:"childerc1155"},"ChildERC1155"),(0,i.kt)("p",null,"Developers can use the ",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/interfaces/erc1155/childerc1155"},(0,i.kt)("inlineCode",{parentName:"a"},"ChildERC1155"))," token standard to create ERC-1155 tokens on a Supernet. To create a new ChildERC1155 token, developers can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155")," contract as a template and deploy it on the Supernet. The contract requires a name and symbol to determine the unique identity of the token."),(0,i.kt)("p",null,"Once created, ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155")," tokens can be minted and burned on the Supernet through the corresponding ERC1155Predicate contract. This ensures that the supply of tokens on the rootchain and the Supernet remains in sync. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ERC1155Predicate")," contract also allows for the transfer of tokens between the two."),(0,i.kt)("h2",{id:"predicates"},"Predicates"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/interfaces/erc1155/rooterc1155-predicate"},(0,i.kt)("inlineCode",{parentName:"a"},"RootERC1155Predicate"))," contract serves as the root token contract, while the ",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/interfaces/erc1155/childerc1155-predicate"},(0,i.kt)("inlineCode",{parentName:"a"},"ChildERC1155Predicate"))," contract serves as the child token contract. When a user wants to deposit an ERC-1155 token on the rootchain into the Supernet, they call the deposit function on the ",(0,i.kt)("inlineCode",{parentName:"p"},"RootERC1155Predicate")," contract with the appropriate parameters, including the token ID, sender, and receiver addresses."),(0,i.kt)("p",null,"Once the child contract instance is created, the ",(0,i.kt)("inlineCode",{parentName:"p"},"RootERC1155Predicate")," contract maps the root token to the child token using a mapping, allowing users to deposit and withdraw tokens between the root and Supernet. The ChildERC1155Predicate contract includes functions for minting and burning child tokens, which are triggered when the deposit and withdrawal functions are called."),(0,i.kt)("p",null,"To withdraw a child token back to the rootchain, a user calls the appropriate function on the ChildERC1155Predicate contract with the necessary parameters, including the token ID, the amount to withdraw, and the receiver address. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155Predicate")," contract then burns the child token and emits a withdrawal event. The ",(0,i.kt)("inlineCode",{parentName:"p"},"RootERC1155Predicate")," contract listens for these events and relays them to the rootchain using the ",(0,i.kt)("inlineCode",{parentName:"p"},"L2StateSender")," contract."),(0,i.kt)("h2",{id:"deposits-and-withdrawals"},"Deposits and Withdrawals"),(0,i.kt)("p",null,"Depositing and withdrawing ERC-1155 tokens between the rootchain and Supernet can be done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," functions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RootERC1155Predicate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155Predicate")," contracts, respectively. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155Predicate")," contract includes functions for minting and burning child tokens, which are triggered when the deposit and withdrawal functions are called. To withdraw a child token back to the rootchain, a user calls the appropriate function on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155Predicate")," contract with the necessary parameters, including the token ID, the amount to withdraw, and the receiver address. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ChildERC1155Predicate")," contract then burns the child token and emits a withdrawal event."))}h.isMDXComponent=!0}}]);