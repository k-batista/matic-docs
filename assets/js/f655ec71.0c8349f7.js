"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[59172],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return o?r.createElement(d,a(a({ref:t},l),{},{components:o})):r.createElement(d,a({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},15384:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return f}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=["components"],p={id:"set-proof-api",title:"Set ProofApi",keywords:["setProofApi","polygon","sdk"],description:"Configure proof API."},c=void 0,s={unversionedId:"develop/ethereum-polygon/matic-js/set-proof-api",id:"develop/ethereum-polygon/matic-js/set-proof-api",title:"Set ProofApi",description:"Configure proof API.",source:"@site/docs/develop/ethereum-polygon/matic-js/set-proof-api.md",sourceDirName:"develop/ethereum-polygon/matic-js",slug:"/develop/ethereum-polygon/matic-js/set-proof-api",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/set-proof-api",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/ethereum-polygon/matic-js/set-proof-api.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"set-proof-api",title:"Set ProofApi",keywords:["setProofApi","polygon","sdk"],description:"Configure proof API."},sidebar:"maticjs",previous:{title:"FxPortal",permalink:"/matic-docs/docs/develop/ethereum-polygon/matic-js/fx-portal"},next:{title:"Advanced",permalink:"/matic-docs/docs/category/advanced-1"}},l={},f=[],u={toc:f};function m(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some of the functions in matic.js are suffixed with the term faster. As the name suggests, they generate results faster compared to their non-faster counterparts. They do so by utilizing the Proof Generation API as the backend which can be hosted by anyone."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apis/matic.network"},"https://apis/matic.network")," is a publicly available Proof Generation API, hosted by Polygon."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setProofApi")," method can help in setting the Proof Generation API\u2019s URL to the matic.js instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { setProofApi } from '@maticnetwork/maticjs'\n\nsetProofApi(\"https://apis.matic.network/\");\n")),(0,i.kt)("p",null,"Utilizing a self-hosted Proof Generation API service will offer better performance compared to a publicly hosted one."),(0,i.kt)("p",null,"Please follow the installation instructions provided in the README.md file of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/proof-generation-api"},"https://github.com/maticnetwork/proof-generation-api")," to self-host the service."),(0,i.kt)("p",null,"e.g - if you have deployed the proof API and the base URL is - ",(0,i.kt)("inlineCode",{parentName:"p"},"https://abc.com/"),", then you need to set base URL in ",(0,i.kt)("inlineCode",{parentName:"p"},"setProofApi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { setProofApi } from '@maticnetwork/maticjs'\n\nsetProofApi(\"https://abc.com/\");\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend using faster API's, because some API's, particularly where proof is being generated, make a lot of RPC calls and it might be very slow with public RPC's.")))}m.isMDXComponent=!0}}]);