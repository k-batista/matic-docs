"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[97751],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return d}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),N=l(t),d=s,k=N["".concat(p,".").concat(d)]||N[d]||c[d]||i;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=N;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,r[1]=m;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},35478:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var n=t(87462),s=t(63366),i=(t(67294),t(3905)),r=["components"],m={id:"execution-context",title:"Execution Contexts",sidebar_label:"Execution Contexts",description:"An execution context defines its own memory space which is not accessible from other execution contexts.",keywords:["docs","wiki","polygon","miden","execution context"],image:"https://wiki.polygon.technology/img/thumbnail/polygon-miden.png"},p=void 0,l={unversionedId:"miden/user_docs/assembly/execution-context",id:"miden/user_docs/assembly/execution-context",title:"Execution Contexts",description:"An execution context defines its own memory space which is not accessible from other execution contexts.",source:"@site/docs/miden/user_docs/assembly/execution_contexts.md",sourceDirName:"miden/user_docs/assembly",slug:"/miden/user_docs/assembly/execution-context",permalink:"/matic-docs/docs/miden/user_docs/assembly/execution-context",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/miden/user_docs/assembly/execution_contexts.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"execution-context",title:"Execution Contexts",sidebar_label:"Execution Contexts",description:"An execution context defines its own memory space which is not accessible from other execution contexts.",keywords:["docs","wiki","polygon","miden","execution context"],image:"https://wiki.polygon.technology/img/thumbnail/polygon-miden.png"},sidebar:"miden",previous:{title:"Cryptographic Operations",permalink:"/matic-docs/docs/miden/user_docs/assembly/cryptographic_operations"},next:{title:"Miden Standard Library",permalink:"/matic-docs/docs/category/miden-standard-library"}},o={},c=[{value:"Procedure invocation semantics",id:"procedure-invocation-semantics",level:3},{value:"Invoking via <code>call</code> and <code>syscall</code> instructions",id:"invoking-via-call-and-syscall-instructions",level:4},{value:"Invoking via <code>exec</code> instruction",id:"invoking-via-exec-instruction",level:4},{value:"Kernels",id:"kernels",level:3},{value:"Memory layout",id:"memory-layout",level:3},{value:"Example",id:"example",level:3}],N={toc:c};function d(e){var a=e.components,m=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},N,m,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Miden assembly program execution can span multiple isolated contexts. An execution context defines its own memory space which is not accessible from other execution contexts."),(0,i.kt)("p",null,"All programs start executing in a ",(0,i.kt)("em",{parentName:"p"},"root")," context. Thus, the main procedure of a program is always executed in the root context. To move execution into a different context, we can invoke a procedure using the ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," instruction. In fact, any time we invoke a procedure using the ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," instruction, the procedure is executed in a new context. We refer to all non-root contexts as ",(0,i.kt)("em",{parentName:"p"},"user contexts"),"."),(0,i.kt)("p",null,"While executing in a user context, we can request to execute some procedures in the root context. This can be done via the ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," instruction. The set of procedures which can be invoked via the ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," instruction is limited by the ",(0,i.kt)("a",{parentName:"p",href:"#kernels"},"kernel")," against which a program is compiled. Once the procedure called via ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," returns, the execution moves back to the user context from which it was invoked. The diagram below illustrates this graphically:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"context transitions",src:t(38129).Z,width:"592",height:"449"})),(0,i.kt)("h3",{id:"procedure-invocation-semantics"},"Procedure invocation semantics"),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/miden/user_docs/assembly/code_organization"},"previous section"),", procedures in Miden assembly can be invoked via three different instructions: ",(0,i.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"call"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall"),". Invocation semantics of ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," instructions are basically the same, the only difference being that the ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," instruction can be used only with procedures which are defined in the program's kernel. The ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," instruction is different, and we explain these differences below."),(0,i.kt)("h4",{id:"invoking-via-call-and-syscall-instructions"},"Invoking via ",(0,i.kt)("inlineCode",{parentName:"h4"},"call")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"syscall")," instructions"),(0,i.kt)("p",null,"When a procedure is invoked via a ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall")," instruction, the following happens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Execution moves into a different context. In case of a ",(0,i.kt)("inlineCode",{parentName:"li"},"call")," instruction, a new user context is created. In case of a ",(0,i.kt)("inlineCode",{parentName:"li"},"syscall")," instruction, the execution moves back into the root context."),(0,i.kt)("li",{parentName:"ul"},'All stack items beyond the 16th item get "hidden" from the invoked procedure. That is, from the standpoint of the invoked procedure, the initial stack depth is set to 16.')),(0,i.kt)("p",null,"When a procedure returns from a ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"syscall"),", the following happens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Execution moves back to the context from which the procedure was invoked."),(0,i.kt)("li",{parentName:"ul"},"Stack depth is set to its original depth. Before the stack depth is reset, the VM checks if the current stack depth is exactly 16, and fails otherwise.")),(0,i.kt)("p",null,"The manipulations of the stack depth described above have the following implications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The top 16 elements of the stack can be used to pass parameters and return values between the caller and the callee."),(0,i.kt)("li",{parentName:"ul"},"Caller's stack beyond the top 16 elements is inaccessible to the callee, and thus, is guaranteed not to change as the result of the call."),(0,i.kt)("li",{parentName:"ul"},"At the end of its execution, the callee must ensure that stack depth is exactly 16. If this is difficult to ensure manually, the ",(0,i.kt)("a",{parentName:"li",href:"/matic-docs/docs/miden/user_docs/stdlib/sys"},(0,i.kt)("inlineCode",{parentName:"a"},"truncate_stack"))," procedure can be used to drop all elements from the stack except for the top 16.")),(0,i.kt)("h4",{id:"invoking-via-exec-instruction"},"Invoking via ",(0,i.kt)("inlineCode",{parentName:"h4"},"exec")," instruction"),(0,i.kt)("p",null,"Procedures invoked via the ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," instruction, are inlined at their call sites during compilation. Thus, from the standpoint of the final program, executing procedures this way is indistinguishable from manually including procedure code in place of the ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," instruction. This also means that procedures invoked via the ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," instruction are executed in the same context as the caller."),(0,i.kt)("h3",{id:"kernels"},"Kernels"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"kernel")," defines a set of procedures which can be invoked from user contexts to be executed in the root context. Miden assembly programs are always compiled against some kernel. The default kernel is empty - i.e., it does not contain any procedures. To compile a program against a non-empty kernel, the kernel needs to be specified when instantiating the ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/miden-assembly"},"Miden Assembler"),"."),(0,i.kt)("p",null,"A kernel can be defined similarly to a regular ",(0,i.kt)("a",{parentName:"p",href:"/matic-docs/docs/miden/user_docs/assembly/code_organization#library-modules"},"library module")," - i.e., it can have internal and exported procedures. However, there are some small differences between what procedures can do in a kernel module vs. what they can do in a regular library module. Specifically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Procedures in a kernel module cannot use ",(0,i.kt)("inlineCode",{parentName:"li"},"call")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"syscall")," instructions. This means that creating a new context from within a ",(0,i.kt)("inlineCode",{parentName:"li"},"syscall")," is not possible."),(0,i.kt)("li",{parentName:"ul"},"Unlike procedures in regular library modules, procedures in a kernel module can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"caller")," instruction. This instruction puts the hash of the procedure which initiated the parent context onto the stack.")),(0,i.kt)("h3",{id:"memory-layout"},"Memory layout"),(0,i.kt)("p",null,"As mentioned earlier, procedures executed within a given context can access memory only of that context. This is true for both memory reads and memory writes."),(0,i.kt)("p",null,"Address space of every context is the same: the smallest accessible address is ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"0")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0")))))," and the largest accessible address is ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"32")),(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mn",{parentName:"mrow"},"1")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{32} - 1")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"32"))))))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"))))),". Any code executed in a given context has access to its entire address space. However, by convention, we assign different meanings to different regions of the address space."),(0,i.kt)("p",null,"For user contexts we have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30")))))))))))))," words (each word is 4 field elements) are assumed to be global memory."),(0,i.kt)("li",{parentName:"ul"},"The next ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30")))))))))))))," words are reserved for memory locals of procedures executed in the same context (i.e., via the ",(0,i.kt)("inlineCode",{parentName:"li"},"exec")," instruction)."),(0,i.kt)("li",{parentName:"ul"},"The remaining address space has no special meaning.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"user memory layout",src:t(26628).Z,width:"1038",height:"137"})),(0,i.kt)("p",null,"For the root context we have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30")))))))))))))," words are assumed to be global memory."),(0,i.kt)("li",{parentName:"ul"},"The next ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30")))))))))))))," words are reserved for memory locals of procedures executed in the root context."),(0,i.kt)("li",{parentName:"ul"},"The next ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30")))))))))))))," words are reserved for memory locals of procedures executed from within a ",(0,i.kt)("inlineCode",{parentName:"li"},"syscall"),"."),(0,i.kt)("li",{parentName:"ul"},"The remaining address space has no special meaning.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"root memory layout",src:t(99895).Z,width:"1038",height:"137"})),(0,i.kt)("p",null,"For both types of contexts, writing directly into regions of memory reserved for procedure locals is not advisable. Instead, ",(0,i.kt)("inlineCode",{parentName:"p"},"loc_load"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"loc_store")," and other similar dedicated instructions should be used to access procedure locals."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"To better illustrate what happens as we execute procedures in different contexts, let's go over the following example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kernel\n--------------------\nexport.baz.2\n    <instructions>\n    caller\n    <instructions>\nend\n\nprogram\n--------------------\nproc.bar.1\n    <instructions>\n    syscall.baz\n    <instructions>\nend\n\nproc.foo.3\n    <instructions>\n    call.bar\n    <instructions>\n    exec.bar\n    <instructions>\nend\n\nbegin\n    <instructions>\n    call.foo\n    <instructions>\nend\n")),(0,i.kt)("p",null,"Execution of the above program proceeds as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The VM starts executing instructions immediately following the ",(0,i.kt)("inlineCode",{parentName:"li"},"begin")," statement. These instructions are executed in the ",(0,i.kt)("em",{parentName:"li"},"root")," context (let's call this context ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx0"),")."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"call.foo")," is executed, a new context is created (",(0,i.kt)("inlineCode",{parentName:"li"},"ctx1"),"). Memory in this context is isolated from ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx0"),". Additionally, any elements on the stack beyond the top 16 are hidden from ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),"."),(0,i.kt)("li",{parentName:"ol"},"Instructions executed inside ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," can access memory of ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx1")," only. The address of the first procedure local in ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," (e.g., accessed via ",(0,i.kt)("inlineCode",{parentName:"li"},"loc_load.0"),") is ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30"))))))))))))),"."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"call.bar")," is executed, a new context is created (",(0,i.kt)("inlineCode",{parentName:"li"},"ctx2"),"). The stack depth is set to 16 again, and any instruction executed in this context can access memory of ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx2")," only. The first procedure local of ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," is also located at address ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30"))))))))))))),"."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"syscall.baz")," is executed, the execution moves back into the root context. That is, instructions executed inside ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," have access to the memory of ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx0"),". The first procedure local of ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," is located at address ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"31"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{31}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"31"))))))))))))),". When ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," starts executing, the stack depth is again set to 16."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"caller")," is executed inside ",(0,i.kt)("inlineCode",{parentName:"li"},"baz"),", the first 4 elements of the stack are populated with the hash of ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," since ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," was invoked from ",(0,i.kt)("inlineCode",{parentName:"li"},"bar"),"'s context."),(0,i.kt)("li",{parentName:"ol"},"Once ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," returns, execution moves back to ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx2"),", and then, when ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," returns, execution moves back to ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx1"),". We assume that instructions executed right before each procedure returns ensure that the stack depth is exactly 16 right before procedure's end."),(0,i.kt)("li",{parentName:"ol"},"Next, when ",(0,i.kt)("inlineCode",{parentName:"li"},"exec.bar")," is executed, ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," is executed again, but this time it is executed in the same context as ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),". Thus, it can access memory of ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx1"),". Moreover, the stack depth is not changed, and thus, ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," can access the entire stack of ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),". Lastly, this first procedure local of ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," now will be at address ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"30")),(0,i.kt)("mo",{parentName:"mrow"},"+"),(0,i.kt)("mn",{parentName:"mrow"},"3")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{30} + 3")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"30"))))))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," (since the first 3 locals in this context are reserved for ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),")."),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"syscall.baz")," is executed the second time, execution moves into the root context again. However, now, when ",(0,i.kt)("inlineCode",{parentName:"li"},"caller")," is executed inside ",(0,i.kt)("inlineCode",{parentName:"li"},"baz"),", the first 4 elements of the stack are populated with the hash of ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," (not ",(0,i.kt)("inlineCode",{parentName:"li"},"bar"),"). This happens because this time around ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," does not have its own context and ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," is invoked from ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),"'s context."),(0,i.kt)("li",{parentName:"ol"},"Finally, when ",(0,i.kt)("inlineCode",{parentName:"li"},"baz")," returns, execution moves back to ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx1"),", and then as ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," return, back to ",(0,i.kt)("inlineCode",{parentName:"li"},"ctx0"),", and the program terminates.")))}d.isMDXComponent=!0},38129:function(e,a,t){a.Z=t.p+"assets/images/context_transitions-a6e06d84cd1cf92b7edc0e1e6d778f15.png"},99895:function(e,a,t){a.Z=t.p+"assets/images/root_mem_layout-88d3b70c58cf2cd10eefe0b7e3a5bcd2.png"},26628:function(e,a,t){a.Z=t.p+"assets/images/user_mem_layout-f0adc7fb9981df3be4f9331aaff68c72.png"}}]);