"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[90711],{3905:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=l(e.components);return n.createElement(s.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?n.createElement(h,i(i({ref:o},u),{},{components:t})):n.createElement(h,i({ref:o},u))}));function d(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var s in o)hasOwnProperty.call(o,s)&&(p[s]=o[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4769:function(e,o,t){t.r(o),t.d(o,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"how-to-propose",title:"How to Propose",description:"Learn how to raise proposals in the PIP program.",keywords:["docs","matic","polygon","ethereum"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,l={unversionedId:"maintain/govern/pips/how-to-propose",id:"maintain/govern/pips/how-to-propose",title:"How to Propose",description:"Learn how to raise proposals in the PIP program.",source:"@site/docs/maintain/govern/pips/how-to-pip.md",sourceDirName:"maintain/govern/pips",slug:"/maintain/govern/pips/how-to-propose",permalink:"/matic-docs/docs/maintain/govern/pips/how-to-propose",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/maintain/govern/pips/how-to-pip.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"how-to-propose",title:"How to Propose",description:"Learn how to raise proposals in the PIP program.",keywords:["docs","matic","polygon","ethereum"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"govern",previous:{title:"Overview",permalink:"/matic-docs/docs/maintain/govern/pips/"},next:{title:"Community Forum",permalink:"/matic-docs/docs/maintain/govern/pips/pips-forum"}},u={},c=[{value:"Is it a PIP or an advertisment?",id:"is-it-a-pip-or-an-advertisment",level:3},{value:"Is the proposal unique?",id:"is-the-proposal-unique",level:3},{value:"Why are you writing a PIP?",id:"why-are-you-writing-a-pip",level:3},{value:"OK, I have checked the PIP framework, and consulted with the above questions. What now?",id:"ok-i-have-checked-the-pip-framework-and-consulted-with-the-above-questions-what-now",level:3},{value:"Polygon Improvement Proposal (PIP) vs Polygon Request for Comments (PRC)",id:"polygon-improvement-proposal-pip-vs-polygon-request-for-comments-prc",level:3},{value:"Here are some tips that will help you with moving the PIP forward!",id:"here-are-some-tips-that-will-help-you-with-moving-the-pip-forward",level:3}],m={toc:c};function d(e){var o=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Polygon Improvement Proposals, or PIPs, are a way for the Polygon community\nto propose and develop solutions to improve the Polygon protocols. PIPs are\nan important part of the Polygon development process and provide a way for\ndevelopers, researchers, and users to contribute to the future of the Polygon\nnetwork."),(0,a.kt)("p",null,"In this guide, we will cover the basics of how to write and submit a PIP for\nconsideration. Whether you're a seasoned Polygon developer or just starting to\nexplore blockchain development, this guide will provide you with the information\nand resources you need to get started with PIPs and make your voice heard in the\nPolygon community."),(0,a.kt)("p",null,"So before you begin crafting your proposal, ask yourself the following questions\nthat will help you decide whether your idea is a PIP or a forum post!"),(0,a.kt)("h3",{id:"is-it-a-pip-or-an-advertisment"},"Is it a PIP or an advertisment?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do not use the PIP framework to promote your project!")),(0,a.kt)("h3",{id:"is-the-proposal-unique"},"Is the proposal unique?"),(0,a.kt)("p",null,"Make sure that your proposed PIP is not a duplicate of a previous proposal."),(0,a.kt)("h3",{id:"why-are-you-writing-a-pip"},"Why are you writing a PIP?"),(0,a.kt)("p",null,"A Polygon Improvement Proposal (PIP) is a document that outlines changes or\nimprovements to the Polygon network."),(0,a.kt)("p",null,"PIPs can be written for a variety of valid reasons, including addressing technical\nissues, improving scalability, adding new features, enhancing security, and standardizing\nprocesses."),(0,a.kt)("h3",{id:"ok-i-have-checked-the-pip-framework-and-consulted-with-the-above-questions-what-now"},"OK, I have checked the PIP framework, and consulted with the above questions. What now?"),(0,a.kt)("p",null,"A Polygon Improvement Proposal (PIP) is a design document that proposes new features,\nimprovements, or standards for the Polygon protocols. The following is a guide on how\nto write and submit a PIP:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose a topic: Choose a topic that you want to propose a change for. It could be a\nnew feature, an improvement, or a novel standard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Research and gather information: Gather information about the topic, including relevant\nbackground information, technical details, and any relevant existing solutions or standards.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write the PIP: We suggest using the PIP template provided in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/Polygon-Improvement-Proposals"},"GitHub repository"),".\nThe template includes sections for introduction, motivation, specification, and rationale.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gather feedback: Share your PIP with the Polygon community on the Polygon community Forum\nand get feedback from experts, developers, and users. You can do this by sharing the PIP\non forums, social media, or by reaching out to relevant individuals.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Submit the PIP: Submit the PIP to the Polygon Improvement Proposal repository on Github.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Revise and finalize: Revise your PIP based on the feedback you receive and finalize it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Community review: The Polygon community will review the PIP and provide feedback. You\nmay need to revise the PIP based on the feedback received.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Approval: If the PIP is approved, it will be included in the Polygon protocol."))),(0,a.kt)("h3",{id:"polygon-improvement-proposal-pip-vs-polygon-request-for-comments-prc"},"Polygon Improvement Proposal (PIP) vs Polygon Request for Comments (PRC)"),(0,a.kt)("p",null,"Polygon Improvement Proposal (PIP) and Polygon Request for Comments (PRC) are similar in\nthat they both serve as a standard for proposing improvements and additions to the Polygon\nprotocols. However, there is a subtle difference in the scope of the proposals they represent."),(0,a.kt)("p",null,"PIPs are broader in scope and can encompass proposals for improvements to the Polygon protocols,\nsuch as changes to the protocol, upgrades to the blockchain, and new"),(0,a.kt)("h3",{id:"here-are-some-tips-that-will-help-you-with-moving-the-pip-forward"},"Here are some tips that will help you with moving the PIP forward!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",{parentName:"li",href:"https://forum.polygon.technology/"},"Polygon Community Forum")," to engage with the community."),(0,a.kt)("li",{parentName:"ul"},"Reach out to projects that are relevant to your proposal and ask them for feedback and ideas!")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tip: Under the Verified Group in the Polygon Forum you will find a wide range of dApps and projects deployed on Polygon PoS.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write an article about the relevance of the PIP, explain your rationale, inspiration and how it can be used to improve the protocol/community."),(0,a.kt)("li",{parentName:"ul"},"Engage in the discussion taking place in the Forum. Great minds work better together!")))}d.isMDXComponent=!0}}]);