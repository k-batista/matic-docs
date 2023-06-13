"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[38138],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return h}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=l(t),h=s,k=N["".concat(i,".").concat(h)]||N[h]||c[h]||m;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},84875:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=t(87462),s=t(63366),m=(t(67294),t(3905)),r=["components"],p={id:"architecture",title:"Architecture of Miden VM",sidebar_label:"Architecture",description:"Miden components and structure.",keywords:["docs","matic","polygon","miden","component"],image:"https://wiki.polygon.technology/img/thumbnail/polygon-miden.png"},i=void 0,l={unversionedId:"miden/intro/architecture",id:"miden/intro/architecture",title:"Architecture of Miden VM",description:"Miden components and structure.",source:"@site/docs/miden/intro/architecture.md",sourceDirName:"miden/intro",slug:"/miden/intro/architecture",permalink:"/matic-docs/docs/miden/intro/architecture",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/miden/intro/architecture.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"architecture",title:"Architecture of Miden VM",sidebar_label:"Architecture",description:"Miden components and structure.",keywords:["docs","matic","polygon","miden","component"],image:"https://wiki.polygon.technology/img/thumbnail/polygon-miden.png"},sidebar:"miden",previous:{title:"Introduction",permalink:"/matic-docs/docs/miden/intro/main"},next:{title:"Performance",permalink:"/matic-docs/docs/miden/intro/performance"}},o={},c=[{value:"Writing programs",id:"writing-programs",level:2},{value:"Inputs and outputs",id:"inputs-and-outputs",level:2},{value:"Stack depth restrictions",id:"stack-depth-restrictions",level:3},{value:"Nondeterministic inputs",id:"nondeterministic-inputs",level:3}],N={toc:c};function h(e){var a=e.components,p=(0,s.Z)(e,r);return(0,m.kt)("wrapper",(0,n.Z)({},N,p,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Miden VM is a stack machine. The base data type of the MV is a field element in a 64-bit ",(0,m.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Finite_field"},"prime field")," defined by modulus ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"64")),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"32")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p = 2^{64} - 2^{32} + 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"64"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"32"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),". This means that all values that the VM operates with are field elements in this field (i.e., values between ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"0")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"0")))))," and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"64")),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"32"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{64} - 2^{32}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"64"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"32"))))))))))))),", both inclusive)."),(0,m.kt)("p",null,"Miden VM consists of three high-level components as illustrated below."),(0,m.kt)("p",null,(0,m.kt)("img",{src:t(20293).Z,width:"1081",height:"651"})),(0,m.kt)("p",null,"These components are:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Stack")," which is a push-down stack where each item is a field element. Most assembly instructions operate with values located on the stack. The stack can grow up to ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"32"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{32}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"32")))))))))))))," items deep, however, only the top 16 items are directly accessible."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Memory")," which is a linear random-access read-write memory. The memory is word-addressable, meaning, four elements are located at each address, and we can read and write elements to/from memory in batches of four. Memory addresses can be in the range ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"32")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[0, 2^{32})")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"32"))))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Advice provider")," which is a way for the prover to provide nondeterministic inputs to the VM. The advice provider is composed of a single ",(0,m.kt)("em",{parentName:"li"},"advice stack"),", an ",(0,m.kt)("em",{parentName:"li"},"advice map"),", and a ",(0,m.kt)("em",{parentName:"li"},"merkle store"),". The ",(0,m.kt)("em",{parentName:"li"},"advice stack")," yields elements to the VM stack; the ",(0,m.kt)("em",{parentName:"li"},"advice map")," stores key-mapped element lists which can be pushed onto the advice stack; finally, the Merkle store contains structured Merkle tree data and serves Merkle paths to the VM.")),(0,m.kt)("p",null,"In the future, additional components (e.g., storage, logs) may be added to the VM."),(0,m.kt)("h2",{id:"writing-programs"},"Writing programs"),(0,m.kt)("p",null,"Our goal is to make Miden VM an easy compilation target for high-level blockchain-centric languages such as Solidity, Move, Sway, and others. We believe it is important to let people write programs in the languages of their choice. However, compilers to help with this have not been developed yet. Thus, for now, the primary way to write programs for Miden VM is to use ",(0,m.kt)("a",{parentName:"p",href:"/matic-docs/docs/miden/user_docs/assembly/main"},"Miden assembly"),"."),(0,m.kt)("p",null,"While writing programs in assembly is far from ideal, Miden assembly does make this task a little bit easier by supporting high-level flow control structures and named procedures."),(0,m.kt)("h2",{id:"inputs-and-outputs"},"Inputs and outputs"),(0,m.kt)("p",null,"External inputs can be provided to Miden VM in two ways:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"Public inputs can be supplied to the VM by initializing the stack with desired values before a program starts executing. Any number of stack items can be initialized in this way, but providing a large number of public inputs will increase the cost for the verifier."),(0,m.kt)("li",{parentName:"ol"},"Secret (or nondeterministic) inputs can be supplied to the VM via the ",(0,m.kt)("a",{parentName:"li",href:"#nondeterministic-inputs"},(0,m.kt)("em",{parentName:"a"},"advice provider")),". There is no limit on how much data the advice provider can hold.")),(0,m.kt)("p",null,"After a program finishes executing, the elements remaining on the stack become the outputs of the program. Since these outputs will be public inputs for the verifier, having a large stack at the end of execution will increase cost to the verifier. Therefore, it's best to drop unneeded output values. We've provided the ",(0,m.kt)("a",{parentName:"p",href:"/matic-docs/docs/miden/user_docs/stdlib/sys"},(0,m.kt)("inlineCode",{parentName:"a"},"truncate_stack"))," utility function in the standard library for this purpose."),(0,m.kt)("p",null,"The number of public inputs and outputs of a program can be reduced by making use of the advice stack and Merkle trees. Just 4 elements are sufficient to represent a root of a Merkle tree, which can be expanded into an arbitrary number of values."),(0,m.kt)("p",null,"For example, if we wanted to provide a thousand public input values to the VM, we could put these values into a Merkle tree, initialize the stack with the root of this tree, initialize the advice provider with the tree itself, and then retrieve values from the tree during program execution using ",(0,m.kt)("inlineCode",{parentName:"p"},"mtree_get")," instruction (described ",(0,m.kt)("a",{parentName:"p",href:"/matic-docs/docs/miden/user_docs/assembly/cryptographic_operations#hashing-and-merkle-trees"},"here"),")."),(0,m.kt)("p",null,"In the future, other ways of providing public inputs and reading public outputs (e.g., storage commitments) may be added to the VM."),(0,m.kt)("h3",{id:"stack-depth-restrictions"},"Stack depth restrictions"),(0,m.kt)("p",null,"For reasons explained ",(0,m.kt)("a",{parentName:"p",href:"/matic-docs/docs/miden/design/stack/main"},"here"),", the VM imposes the restriction that the stack depth cannot be smaller than ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"16")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"16"))))),". This has the following effects:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"When initializing a program with fewer than ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"16")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"16")))))," inputs, the VM will pad the stack with zeros to ensure the depth is ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"16")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"16")))))," at the beginning of execution."),(0,m.kt)("li",{parentName:"ul"},"If an operation would result in the stack depth dropping below ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"16")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"16"))))),", the VM will insert a zero at the deep end of the stack to make sure the depth stays at ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"16")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"16"))))),".")),(0,m.kt)("h3",{id:"nondeterministic-inputs"},"Nondeterministic inputs"),(0,m.kt)("p",null,"The ",(0,m.kt)("em",{parentName:"p"},"advice provider")," component is responsible for supplying nondeterministic inputs to the VM. These inputs only need to be known to the prover (i.e., they do not need to be shared with the verifier)."),(0,m.kt)("p",null,"The advice provider consists of three components:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Advice stack")," which is a one-dimensional array of field elements. Being a stack, the VM can either push new elements onto the advice stack, or pop the elements from its top."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Advice map")," which is a key-value map where keys are words and values are vectors of field elements. The VM can copy values from the advice map onto the advice stack as well as insert new values into the advice map (e.g., from a region of memory)."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Merkle store")," which contain structured data reducible to Merkle paths. Some examples of such structures are: Merkle tree, Sparse Merkle tree, and a collection of Merkle paths. The VM can request Merkle paths from the Merkle store, as well as mutate it by updating or merging nodes contained in the store.")),(0,m.kt)("p",null,"The prover initializes the advice provider prior to executing a program, and from that point on the advice provider is manipulated solely by executing operations on the VM."))}h.isMDXComponent=!0},20293:function(e,a,t){a.Z=t.p+"assets/images/vm_components-bff91c0d3f477742debd22d0d679cbce.png"}}]);