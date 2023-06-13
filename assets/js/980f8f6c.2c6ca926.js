"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[74961],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28702:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={id:"bn256g2",title:"BN256G2 Interface",sidebar_label:"BN256G2",description:"Learn about the access control module and how to allowlist validators.",keywords:["docs","polygon","edge","consensus","interface"]},c=void 0,l={unversionedId:"supernets/interfaces/cryptography/bn256g2",id:"supernets/interfaces/cryptography/bn256g2",title:"BN256G2 Interface",description:"Learn about the access control module and how to allowlist validators.",source:"@site/docs/supernets/interfaces/cryptography/bn256g2.md",sourceDirName:"supernets/interfaces/cryptography",slug:"/supernets/interfaces/cryptography/bn256g2",permalink:"/matic-docs/docs/supernets/interfaces/cryptography/bn256g2",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/interfaces/cryptography/bn256g2.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"bn256g2",title:"BN256G2 Interface",sidebar_label:"BN256G2",description:"Learn about the access control module and how to allowlist validators.",keywords:["docs","polygon","edge","consensus","interface"]},sidebar:"supernets",previous:{title:"BLS",permalink:"/matic-docs/docs/supernets/interfaces/cryptography/bls"},next:{title:"Performance Benchmarks",permalink:"/matic-docs/docs/supernets/operate/supernets-performance"}},s={},u=[{value:"Functions",id:"functions",level:2},{value:"ecTwistAdd()",id:"ectwistadd",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Usage",id:"usage",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IBN256G2")," interface provides functionality for performing addition operations on points in the G2 subgroup of the BN256 elliptic curve. This user guide will explain how to interact with the function provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBN256G2")," interface."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"ectwistadd"},"ecTwistAdd()"),(0,o.kt)("p",null,"This function performs the addition operation on two points in the G2 subgroup of the BN256 elliptic curve."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt1xx")," (uint256): The xx-coordinate of the first point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt1xy")," (uint256): The xy-coordinate of the first point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt1yx")," (uint256): The yx-coordinate of the first point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt1yy")," (uint256): The yy-coordinate of the first point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt2xx")," (uint256): The xx-coordinate of the second point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt2xy")," (uint256): The xy-coordinate of the second point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt2yx")," (uint256): The yx-coordinate of the second point."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pt2yy")," (uint256): The yy-coordinate of the second point.")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To perform the addition operation on two points in the G2 subgroup of the BN256 elliptic curve, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"ecTwistAdd()")," function with the required parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"IBN256G2 bn256g2Instance = IBN256G2(bn256g2Address);\n\n(uint256 pt3xx, uint256 pt3xy, uint256 pt3yx, uint256 pt3yy) = bn256g2Instance.ecTwistAdd(\n    pt1xx, pt1xy, pt1yx, pt1yy,\n    pt2xx, pt2xy, pt2yx, pt2yy\n);\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"bn256g2Address")," with the address of an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"IBN256G2")," implementation. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"pt1xx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt1xy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt1yx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt1yy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt2xx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt2xy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt2yx"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"pt2yy")," with the coordinates of the points you want to add. The resulting point, ",(0,o.kt)("inlineCode",{parentName:"p"},"pt3"),", will have the coordinates (",(0,o.kt)("inlineCode",{parentName:"p"},"pt3xx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt3xy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt3yx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pt3yy"),")."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ecTwistAdd()")," function allows you to perform elliptic curve operations on the BN256 curve in the G2 subgroup, which can be useful for cryptographic applications such as zero-knowledge proofs, signature schemes, and more."))}f.isMDXComponent=!0}}]);