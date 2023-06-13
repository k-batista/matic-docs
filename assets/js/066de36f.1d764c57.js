"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[68716],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=m,h=c["".concat(l,".").concat(k)]||c[k]||N[k]||s;return t?n.createElement(h,r(r({ref:e},o),{},{components:t})):n.createElement(h,r({ref:e},o))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},24520:function(a,e,t){t.r(e),t.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return N}});var n=t(87462),m=t(63366),s=(t(67294),t(3905)),r=["components"],p={id:"cryptographic_operations",title:"Cryptographic Operations",sidebar_label:"Cryptographic Operations",description:"Instructions for performing common cryptographic operations.",keywords:["docs","matic","polygon","miden","cryptographic"],image:"https://wiki.polygon.technology/img/thumbnail/polygon-miden.png"},l=void 0,i={unversionedId:"miden/user_docs/assembly/cryptographic_operations",id:"miden/user_docs/assembly/cryptographic_operations",title:"Cryptographic Operations",description:"Instructions for performing common cryptographic operations.",source:"@site/docs/miden/user_docs/assembly/cryptographic_operations.md",sourceDirName:"miden/user_docs/assembly",slug:"/miden/user_docs/assembly/cryptographic_operations",permalink:"/matic-docs/docs/miden/user_docs/assembly/cryptographic_operations",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/miden/user_docs/assembly/cryptographic_operations.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"cryptographic_operations",title:"Cryptographic Operations",sidebar_label:"Cryptographic Operations",description:"Instructions for performing common cryptographic operations.",keywords:["docs","matic","polygon","miden","cryptographic"],image:"https://wiki.polygon.technology/img/thumbnail/polygon-miden.png"},sidebar:"miden",previous:{title:"I/O Operations",permalink:"/matic-docs/docs/miden/user_docs/assembly/io_operations"},next:{title:"Execution Contexts",permalink:"/matic-docs/docs/miden/user_docs/assembly/execution-context"}},o={},N=[{value:"Hashing and Merkle trees",id:"hashing-and-merkle-trees",level:3}],c={toc:N};function k(a){var e=a.components,t=(0,m.Z)(a,r);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Miden assembly provides a set of instructions for performing common cryptographic operations. These instructions are listed in the table below."),(0,s.kt)("h3",{id:"hashing-and-merkle-trees"},"Hashing and Merkle trees"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2022/1577"},"Rescue Prime Optimized")," is the native hash function of Miden VM. The parameters of the hash function were chosen to provide 128-bit security level against preimage and collision attacks. The function operates over a state of 12 field elements, and requires 7 rounds for a single permutation. However, due to its special status within the VM, computing Rescue Prime Optimized hashes can be done very efficiently. For example, applying a permutation of the hash function can be done in a single VM cycle."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Instruction"),(0,s.kt)("th",{parentName:"tr",align:null},"Stack_input"),(0,s.kt)("th",{parentName:"tr",align:null},"Stack_output"),(0,s.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"hash ",(0,s.kt)("br",null)," - ",(0,s.kt)("em",{parentName:"td"},"(20 cycles)")),(0,s.kt)("td",{parentName:"tr",align:null},"[A, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"[B, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,s.kt)("mo",{parentName:"mrow"},"\u2190"),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\{B\\} \\leftarrow hash(A)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2190"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ha"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," ",(0,s.kt)("br",null)," where, ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"hash()")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ha"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," computes a 1-to-1 Rescue Prime Optimized hash.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"hperm  ",(0,s.kt)("br",null)," - ",(0,s.kt)("em",{parentName:"td"},"(1 cycle)")),(0,s.kt)("td",{parentName:"tr",align:null},"[C, B, A, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"[F, E, D, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"D"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"F"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,s.kt)("mo",{parentName:"mrow"},"\u2190"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\{D, E, F\\} \\leftarrow permute(A, B, C)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2190"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," ",(0,s.kt)("br",null)," where, ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"permute()")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," computes a Rescue Prime Optimized permutation.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"hmerge  ",(0,s.kt)("br",null)," - ",(0,s.kt)("em",{parentName:"td"},"(16 cycles)")),(0,s.kt)("td",{parentName:"tr",align:null},"[B, A, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"[C, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow"},"\u2190"),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"A"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"B"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C \\leftarrow hash(A,B)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2190"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ha"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," ",(0,s.kt)("br",null)," where, ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"hash()")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ha"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," computes a 2-to-1 Rescue Prime Optimized hash.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mtree_get  ",(0,s.kt)("br",null)," - ",(0,s.kt)("em",{parentName:"td"},"(9 cycles)")),(0,s.kt)("td",{parentName:"tr",align:null},"[d, i, R, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"[V, R, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"Verifies that a Merkle tree with root ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")))))," opens to node ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"V")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V")))))," at depth ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," and index ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),". Merkle tree with root ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")))))," must be present in the advice provider, otherwise execution fails.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mtree_set ",(0,s.kt)("br",null)," - ",(0,s.kt)("em",{parentName:"td"},"(29 cycles)")),(0,s.kt)("td",{parentName:"tr",align:null},"[d, i, R, V', ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"[V, R', ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"Updates a node in the Merkle tree with root ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")))))," at depth ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," and index ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," to value ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"V"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V'")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7519em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))),". ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"R"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R'")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7519em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))," is the Merkle root of the resulting tree and ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"V")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V")))))," is old value of the node. Merkle tree with root ",(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R")))))," must be present in the advice provider, otherwise execution fails. At the end of the operation the advice provider will contain both Merkle trees.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mtree_merge ",(0,s.kt)("br",null)," - ",(0,s.kt)("em",{parentName:"td"},"(16 cycles)")),(0,s.kt)("td",{parentName:"tr",align:null},"[R, L, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"[M, ...]"),(0,s.kt)("td",{parentName:"tr",align:null},"Merges two Merkle trees with the provided roots R (right), L (left) into a new Merkle tree with root M (merged). The input trees are retained in the advice provider.")))))}k.isMDXComponent=!0}}]);