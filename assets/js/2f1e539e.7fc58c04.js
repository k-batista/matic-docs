"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[96347],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"erc20",title:"ERC-20",sidebar_label:"ERC-20",description:"Learn about the predefined ERC-20 token standards for Polygon Supernets.",keywords:["docs","polygon","supernets","erc","erc20","token","native"]},d=void 0,c={unversionedId:"supernets/design/bridge/assets/erc/erc20",id:"supernets/design/bridge/assets/erc/erc20",title:"ERC-20",description:"Learn about the predefined ERC-20 token standards for Polygon Supernets.",source:"@site/docs/supernets/design/bridge/assets/erc/erc20.md",sourceDirName:"supernets/design/bridge/assets/erc",slug:"/supernets/design/bridge/assets/erc/erc20",permalink:"/matic-docs/docs/supernets/design/bridge/assets/erc/erc20",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/design/bridge/assets/erc/erc20.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"erc20",title:"ERC-20",sidebar_label:"ERC-20",description:"Learn about the predefined ERC-20 token standards for Polygon Supernets.",keywords:["docs","polygon","supernets","erc","erc20","token","native"]},sidebar:"supernets",previous:{title:"Native assets",permalink:"/matic-docs/docs/category/native-assets"},next:{title:"ERC-721",permalink:"/matic-docs/docs/supernets/design/bridge/assets/erc/erc721"}},l={},p=[{value:"ChildERC20",id:"childerc20",level:2},{value:"NativeERC20",id:"nativeerc20",level:2},{value:"Deposits and Withdrawals",id:"deposits-and-withdrawals",level:2},{value:"EIP1559Burn",id:"eip1559burn",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document presents an overview on the ERC-20 standard available in Supernets."),(0,o.kt)("p",null,"Supernets provide developers with two standards for creating ERC-20 fungible tokens on their networks: ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeERC20")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChildERC20"),". These standards are based on the widely-used ERC-20 standard and offer similar functionality, including the ability to transfer tokens between addresses, approve others to spend tokens on your behalf, and check your balance. However, there are significant differences in their deployment and management."),(0,o.kt)("h2",{id:"childerc20"},"ChildERC20"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/interfaces/erc20/childerc20"},(0,o.kt)("inlineCode",{parentName:"a"},"ChildERC20"))," token standard is used for tokens mapping and enables developers to create tokens on both the Supernet and the associated rootchain. To create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ChildERC20")," token, developers can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChildERC20")," contract as a template and deploy it on their Supernet. The contract requires a name, symbol, and number of decimals to determine the minimum unit of the token."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ChildERC20")," tokens are minted and burned on the Supernet through the corresponding ",(0,o.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/interfaces/erc20/childerc20-predicate"},(0,o.kt)("inlineCode",{parentName:"a"},"ERC20Predicate"))," contract. This ensures that the supply of tokens on the rootchain and the Supernet remains in sync. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20Predicate")," contract also allows for the transfer of tokens between the two networks using the native bridge."),(0,o.kt)("h2",{id:"nativeerc20"},"NativeERC20"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/matic-docs/docs/supernets/interfaces/erc20/native-erc20"},(0,o.kt)("inlineCode",{parentName:"a"},"NativeERC20"))," token standard represents native tokens on the Supernets and offers fast and inexpensive transactions. It is deployed only on the Supernet and relies on the native transfer precompile to make transfers. The ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeERC20")," tokens can be minted and burned by the associated predicate contract."),(0,o.kt)("p",null,"In addition, developers can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeERC20Mintable")," contract to create and manage ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeMintable")," tokens, which are fungible tokens that represent assets on the Supernet. These tokens can be managed through the native bridge contract and transferred between a Supernet and rootchain networks."),(0,o.kt)("h2",{id:"deposits-and-withdrawals"},"Deposits and Withdrawals"),(0,o.kt)("p",null,"The deposit and withdrawal functionality plays a critical role in bridging ERC-20 tokens between a rootchain and a Supernet. "),(0,o.kt)("p",null,"When a user wants to deposit ERC-20 tokens into a Supernet, they call the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," function. This function maps the root token to a child token and then mints the equivalent amount of child tokens to the user's address on the Supernet. By doing this, the ERC-20 tokens are effectively transferred from the rootchain to the Supernet. The user can then use these tokens on the Supernet or transfer them to other addresses on the network."),(0,o.kt)("p",null,"On the other hand, when a user wants to withdraw ERC-20 tokens from a Supernet to the rootchain, they call the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function. This function burns the equivalent amount of child tokens on the Supernet and then triggers a function on the rootchain that transfers the equivalent amount of root tokens to the user's address on the rootchain. By doing this, the ERC-20 tokens are effectively transferred from the Supernet back to the rootchain."),(0,o.kt)("p",null,"Both the ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," functions emit events that log the amount and token involved in the transaction. This provides transparency and allows users to track the movement of their tokens between the two networks."),(0,o.kt)("h3",{id:"eip1559burn"},"EIP1559Burn"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP1559Burn")," contract is an additional feature that allows users to convert their ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeERC20")," tokens into ERC-20 tokens. This is useful for users who want to move their native tokens to the Polygon PoS network or other networks that support ERC-20 tokens. To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"EIP1559Burn")," contract, users first need to specify the address of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChildERC20Predicate")," contract on the Supernet and the destination address on the rootchain where the ERC-20 tokens will be sent after burning. Once initialized, users can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," function, which will burn the native tokens and send the equivalent amount of ERC-20 tokens to the specified destination address."))}h.isMDXComponent=!0}}]);