"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[28373],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(g,s(s({ref:t},u),{},{components:n})):i.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],o={id:"supernets-runtime-allowlist",title:"Access Control Lists",sidebar_label:"Access control lists",description:"Learn about the authorization capabilities available in Supernets.",keywords:["docs","polygon","allowlist","blocklist","acl","bridge","contract","transaction"]},l=void 0,c={unversionedId:"supernets/design/runtime/supernets-runtime-allowlist",id:"supernets/design/runtime/supernets-runtime-allowlist",title:"Access Control Lists",description:"Learn about the authorization capabilities available in Supernets.",source:"@site/docs/supernets/design/runtime/allowlist.md",sourceDirName:"supernets/design/runtime",slug:"/supernets/design/runtime/supernets-runtime-allowlist",permalink:"/matic-docs/docs/supernets/design/runtime/supernets-runtime-allowlist",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/design/runtime/allowlist.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"supernets-runtime-allowlist",title:"Access Control Lists",sidebar_label:"Access control lists",description:"Learn about the authorization capabilities available in Supernets.",keywords:["docs","polygon","allowlist","blocklist","acl","bridge","contract","transaction"]},sidebar:"supernets",previous:{title:"Overview",permalink:"/matic-docs/docs/supernets/design/runtime/supernets-runtime"},next:{title:"Blockchain Mechanics",permalink:"/matic-docs/docs/supernets/design/supernets-blockchain"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Roles",id:"roles",level:2},{value:"Initializing and Managing Admins in ACLs",id:"initializing-and-managing-admins-in-acls",level:2},{value:"Designating Multiple Admins",id:"designating-multiple-admins",level:2},{value:"ACL Types",id:"acl-types",level:2},{value:"Bridge ACLs",id:"bridge-acls",level:3},{value:"Current Limitations",id:"current-limitations",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides an overview of the authorization capabilities of Supernets."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Supernets offer access control lists (ACLs) to manage and control access to specific network resources, contracts, or functionalities. Network operators can limit access to certain addresses using ACLs, ensuring a controlled and secure environment for their applications."),(0,a.kt)("h2",{id:"roles"},"Roles"),(0,a.kt)("p",null,"There are currently two primary roles within the ACL system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Admin"),": An address with full control over the list, capable of adding, modifying, or removing entries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enabled"),": An address that has been granted access to the specific resource or functionality covered by the list.")),(0,a.kt)("h2",{id:"initializing-and-managing-admins-in-acls"},"Initializing and Managing Admins in ACLs"),(0,a.kt)("p",null,"To effectively manage ACLs, at least one address with the Admin role should be assigned when initializing each list in your blockchain application. Admins have the authority to modify the roles of other addresses, granting or revoking access to resources or functionalities as needed."),(0,a.kt)("p",null,"When setting up ACLs, you should:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select trusted addresses to serve as admins."),(0,a.kt)("li",{parentName:"ul"},"Assign the ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin")," role to these addresses using the appropriate flag for each list type."),(0,a.kt)("li",{parentName:"ul"},"Admin addresses will manage the respective ACLs, including adding or removing new addresses. Ensure that the admin addresses are secure and that only authorized users have access to them to maintain the integrity and security of your application.")),(0,a.kt)("h2",{id:"designating-multiple-admins"},"Designating Multiple Admins"),(0,a.kt)("p",null,"You can designate multiple admin addresses for redundancy and better access control management. Having more than one admin can help:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prevent single points of failure."),(0,a.kt)("li",{parentName:"ul"},"Distribute the responsibility of managing the ACLs among multiple trusted entities.")),(0,a.kt)("p",null,"However, assigning multiple admins also increases the potential attack surface. It is essential to strike the right balance between security and flexibility when managing admin addresses or use your best judgment based on the needs and purpose of the network."),(0,a.kt)("h2",{id:"acl-types"},"ACL Types"),(0,a.kt)("p",null,"Supernets support several types of ACLs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contract Deployer Allow/Block Lists"),": Controls which can deploy contracts on the network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transactions Allow/Block Lists"),": Controls which addresses can send transactions on the network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bridge Allow/Block Lists"),": Controls that can interact with the bridge functionality.")),(0,a.kt)("p",null,"Each list type serves a different purpose and can be configured separately to provide fine-grained control over various aspects of the network. Network operators can use a combination of these lists to maintain a secure and controlled environment for their applications."),(0,a.kt)("h3",{id:"bridge-acls"},"Bridge ACLs"),(0,a.kt)("p",null,"Bridge ACLs are an additional layer of security for cross-chain transactions, allowing only specific authorized contracts to interact with a particular bridge. By using an alternative ACL-enabled contract, network operators can have greater control over cross-chain interactions, ensuring that only trusted parties can perform certain actions."),(0,a.kt)("p",null,"However, it's essential to note that using an alternative ACL-enabled contract comes with a trade-off in terms of gas consumption. Since these contracts introduce additional checks and restrictions on transactions, they require more computational resources, leading to higher gas fees. Network operators must carefully weigh the benefits of increased security against the potential increased costs for users."),(0,a.kt)("h2",{id:"current-limitations"},"Current Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Limited role definitions"),": The current implementation only supports two primary roles (Admin and Enabled). You must modify the implementation if your application requires more granular access control or additional roles."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Granularity"),": The current implementation applies the ACLs at the network level. More granular control may require custom implementation, such as using ACLs for specific contracts or functionalities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Static call limitation"),": Write operations are not allowed in static calls, which might be a constraint in specific scenarios where you would want to perform a write operation within a static call.")))}m.isMDXComponent=!0}}]);