"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[67157],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"writing-style",title:"General Writing Guidelines",sidebar_label:"General writing guidelines",description:"Follow the following guidelines when writing.",keywords:["docs","matic","polygon","documentation","writing","contribute","style"],image:"https://wiki.polygon.technology/img/polygon-logo.png",slug:"writing-style"},l=void 0,u={unversionedId:"contribute/writing-style",id:"contribute/writing-style",title:"General Writing Guidelines",description:"Follow the following guidelines when writing.",source:"@site/docs/contribute/writing-style.md",sourceDirName:"contribute",slug:"/contribute/writing-style",permalink:"/matic-docs/docs/contribute/writing-style",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/contribute/writing-style.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"writing-style",title:"General Writing Guidelines",sidebar_label:"General writing guidelines",description:"Follow the following guidelines when writing.",keywords:["docs","matic","polygon","documentation","writing","contribute","style"],image:"https://wiki.polygon.technology/img/polygon-logo.png",slug:"writing-style"},sidebar:"contribute",previous:{title:"Style Guide",permalink:"/matic-docs/docs/category/style-guide"},next:{title:"Tutorial template",permalink:"/matic-docs/docs/contribute/tutorial-template"}},c={},p=[{value:"Primary guidelines",id:"primary-guidelines",level:2},{value:"Static-site generator",id:"static-site-generator",level:3},{value:"Share the experience with the reader",id:"share-the-experience-with-the-reader",level:3},{value:"Being swift and concise",id:"being-swift-and-concise",level:3},{value:"Structure",id:"structure",level:2},{value:"Product documentation",id:"product-documentation",level:2},{value:"API documentation",id:"api-documentation",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guideline focuses on best practices for writing technical documentation and\non the style conventions to use when developing documentation for the Polygon Wiki.\nThe goal of this guide is to help contributors write content that is clear, concise,\nand consistent. The Polygon team treats the Polygon Wiki as an official Docs product."),(0,o.kt)("h2",{id:"primary-guidelines"},"Primary guidelines"),(0,o.kt)("p",null,"We believe one of the things that makes Polygon special is its coherent design and we\nseek to retain this defining characteristic. The Polygon team treats the Polygon Wiki\nas an official Docs product. From the outset we defined some guidelines to ensure new\ncontributions only ever enhance the overall project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Quality"),": Code in the Polygon project should meet the\xa0style guidelines, with\nsufficient test-cases, descriptive commit messages, evidence that the contribution\ndoes not break any compatibility commitments or cause adverse feature interactions,\nand evidence of high-quality peer-review."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Size"),": The Polygon project\u2019s culture is one of small pull-requests, regularly\nsubmitted. The larger a pull-request, the more likely it is that you will be asked\nto resubmit as a series of self-contained and individually reviewable smaller PRs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maintainability"),": If the feature will require ongoing maintenance (e.g. support\nfor a particular brand of database), we may ask you to accept responsibility for\nmaintaining this feature.")),(0,o.kt)("p",null,"The Style guide takes motivation from the following style manuals:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are unable to find the answer to a style, voice, or terminology question\nin this guide, please consult these resources.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/styleguide/blob/gh-pages/docguide/style.md"},"Google's Style Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://global.oup.com/academic/product/new-oxford-style-manual-9780198767251?cc=nl&lang=en&"},"The Oxford Style Manual")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/style-guide/welcome/"},"The Microsoft Manual of Style"))),(0,o.kt)("h3",{id:"static-site-generator"},"Static-site generator"),(0,o.kt)("p",null,"The Wiki is built using ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),", a static-site generator for\nbuilding documentation sites in markdown. The Wiki follows the following metadata\ntemplate for its markdown files and should be adpated for each new document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\nid: wiki-maintainers\ntitle: Wiki Maintainers\nsidebar_label: Maintainers\ndescription: A list of Polygon Wiki maintainers\nkeywords:\n  - docs\n  - matic\n  - polygon\n  - wiki\n  - docs\n  - maintainers\n  - contributors\nimage: https://matic.network/banners/matic-network-16x9.png\nslug: community-maintainers\n---\n")),(0,o.kt)("p",null,"There are some important aspects to consider when writing the metadata for a markdown file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We ask contributors to use a ",(0,o.kt)("strong",{parentName:"p"},"unique id"),"; avoid ",(0,o.kt)("strong",{parentName:"p"},"only"),' using generic words or sentences like "Introduction" or "Overview".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"title"),' is the sentence used at the beginning of the article, "General Writing Guidelines" for this article. So, it is not necessary to add an H1/H2 header to introduce each article. Instead, use this ',(0,o.kt)("strong",{parentName:"p"},"title")," from the metadata.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"description"),' can not be too lengthy, since it is used on the index tiles which has a limitation for the number of characters. For example, the description "Blockchain is an immutable ledger for recording transactions" for the ',(0,o.kt)("em",{parentName:"p"},"basics-blockchain.md")," appears on an index tile as such:\n",(0,o.kt)("img",{alt:"img",src:n(89210).Z,width:"730",height:"220"})),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("strong",{parentName:"p"},"description")," then should have ",(0,o.kt)("strong",{parentName:"p"},"up to 60 characters"),", considering spaces between characters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keywords are important to increase SEO and describe the article. Try to aim for at least five keywords."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please see the\n",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter"},"official metadata documentation")," for more details.")),(0,o.kt)("h3",{id:"share-the-experience-with-the-reader"},"Share the experience with the reader"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'First Person: Do not use "I" or "me". Use the first person point of view sparingly and\nwith intention. When overused, the first person narrative can overwhelm the sense of a\nshared experience and obscure the reader\u2019s journey.'),(0,o.kt)("li",{parentName:"ul"},"Second Person: In most cases, address the reader directly. For tutorials, use either first\nperson plural\u2014we, us, our, ours\u2014or second person point of view. Because tutorials provide\na more guided approach to a topic, using the first person plural is a more natural and\ncommonly-accepted practice than in other types of documentation."),(0,o.kt)("li",{parentName:"ul"},"Third Person: Do not use \u201cwe\u201d to refer to Polygon or Polygon Technology."),(0,o.kt)("li",{parentName:"ul"},"Active Voice: Use present tense whenever possible. There are situations where a passive\nvoice is appropriate; revert to passive voice when the agent needs to be the focus."),(0,o.kt)("li",{parentName:"ul"},"Keep the human presence in mind: having a dynamic tone when describing technical concepts\nreally helps a reader connect with the material as opposed to describing software (or code)\nonly for what it does."),(0,o.kt)("li",{parentName:"ul"},"Pronouns: use gender-neutral pronouns, like \u201cthey\u201d whenever possible. Generally, you can\nchange any noun from singular to plural to have subject-verb-pronoun agreement and avoid the\nuse of gender-specific pronouns like \u201che\u201d, \u201chim\u201d, \u201chis\u201d or \u201cshe\u201d, \u201cher\u201d, \u201chers\u201d.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Be wary of impersonal and potentially ambiguous pronouns. If you use any of the following\nimpersonal pronouns, be sure you answer \u201cof what?\u201d, \u201cof which?\u201d, or \u201cas what?\u201d in the sentence.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"all, another, any"),(0,o.kt)("li",{parentName:"ul"},"each, either"),(0,o.kt)("li",{parentName:"ul"},"few, many, neither, none,"),(0,o.kt)("li",{parentName:"ul"},"one, other"),(0,o.kt)("li",{parentName:"ul"},"same, several, some, such"),(0,o.kt)("li",{parentName:"ul"},"that, them, these, those")))))),(0,o.kt)("h3",{id:"being-swift-and-concise"},"Being swift and concise"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documentation is strong and meaningful when the necessary words and right phrases are used.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use common, well-known words whenever possible."),(0,o.kt)("li",{parentName:"ul"},"Avoid flowery language and excessive literary phrases."),(0,o.kt)("li",{parentName:"ul"},"Avoid jargon, colloquialisms, and idiomatic phrases."),(0,o.kt)("li",{parentName:"ul"},"Avoid adverbs and subjective statements. For example, don\u2019t use words and phrases that include\neasily, rapidly, simply, quickly. If need be, it is also better to underexaggerate than to\noverexaggerate."),(0,o.kt)("li",{parentName:"ul"},"Don\u2019t use phrases that introduce ambiguity. For example, instead of \u201cWhen this release is live...\u201d\nuse \u201cAfter this release is live...\u201d."),(0,o.kt)("li",{parentName:"ul"},"Pay extra attention to with word choice. Choosing to use \u201csince\u201d (implying a period of time) instead\nof \u201cbecause\u201d (implying cause and result) or using \u201conce\u201d (single occurrence) instead of \u201cafter\u201d\n(each time)."),(0,o.kt)("li",{parentName:"ul"},"Avoid exclamation marks."))),(0,o.kt)("li",{parentName:"ul"},"Avoid adding unnecessary words or phrases. Some examples:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rather than saying \u201cand then\u201d, just use \u201cthen\u201d."),(0,o.kt)("li",{parentName:"ul"},"Rather than saying \u201cIn order to\u201d, just use \u201cto\u201d."),(0,o.kt)("li",{parentName:"ul"},"Rather than saying \u201cas well as\u201d, just use \u201cand\u201d."),(0,o.kt)("li",{parentName:"ul"},"Rather than saying \u201cvia\u201d, use an appropriate English substitute such as \u201cusing\u201d, \u201cthrough\u201d, or \u201cby\u201d."))),(0,o.kt)("li",{parentName:"ul"},"Use a conversational tone that is not too formal, but should still be professional."),(0,o.kt)("li",{parentName:"ul"},"Clarity: give life to the word or phrase where possible. For example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rather than saying \u201ce.g.\u201d, use \u201cfor example\u201d."),(0,o.kt)("li",{parentName:"ul"},"Rather than saying \u201ci.e.\u201d, use \u201cthat is\u201d or rewrite the sentence to make the meaning clear without\nneeding extra qualification."),(0,o.kt)("li",{parentName:"ul"},'Rather than saying \u201cetc.\u201d, use \u201cand so on\u201d or revise the content to make the term unnecessary. Instead\nof \u201cetc.\u201d to end a list of examples, focus on an example or two and use "such as" or "like".'),(0,o.kt)("li",{parentName:"ul"},"Instead of \u201ccaveat\u201d, use an appropriate English substitute such as \u201cnotice\u201d, \u201ccaution\u201d, or \u201cwarning\u201d."),(0,o.kt)("li",{parentName:"ul"},"Contractions give documentation a more natural conversational tone\u2014at least for English speakers.\nBe conscious of when and why you use contractions.")))),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Documents should be organized in sections. Each section should be responsible for\npresenting a theme or topic. Within each section, one or multiple paragraphs will exist.\nEach paragraph should convey only one thought. Try to avoid repeating the same thoughts\nin different sections, and split paragraphs that have multiple points of discussion.\nThe reader should understand what a paragraph is about from its first sentence."),(0,o.kt)("h2",{id:"product-documentation"},"Product documentation"),(0,o.kt)("p",null,"If you are writing about a specific product, ensure the document resembles that\nproduct. Previously, the Polygon documentation was generalized, based around Polygon PoS.\nNow that there are multiple Polygon-based products, contributors need be wary about their\nadditions."),(0,o.kt)("p",null,'For instance, "Deploying a smart contract on Polygon using ####" is ambiguous. If this tutorial\nwas referring to Polygon PoS, it should be clear, as in,\n"Deploying a smart contract on Polygon PoS using ####". Using the same example with a\nPolygon Rollup, like Polygon Hermez, "Deploying a smart contract on Polygon Hermez using ####".'),(0,o.kt)("p",null,'Ensure that the product documentation, whether a general guide or tutorial, is added\nto the right product documentation Hub. For most documents, their reference should exist under\none of the general Hubs (e.g. "Develop" or "Validate"), but the actual document\nwill live under its product documentation. You will need reference the document in the Hub by\nadding it to ',(0,o.kt)("inlineCode",{parentName:"p"},"sidebars.js"),".\nHowever, the actual document itself will exist in its respective product documentation Hub,\nand it will redirect the user once they click on it. The same guideline applies to most\ndocuments. Their reference should exist under one of the general Hubs, but the actual document\nwill live under its product documentation."),(0,o.kt)("p",null,"Most of the API-based documentation on the Polygon Wiki are in the form of\nreference documentation, with the exception of the APIs mentioned in tutorials.\nFor instance, the API documentation on Matic.js provides information about the\nstructure, parameters, and return values for each function or method in the API."),(0,o.kt)("h2",{id:"api-documentation"},"API documentation"),(0,o.kt)("p",null,"Consider the following when documenting an API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A solid introduction that provides a starting point."),(0,o.kt)("li",{parentName:"ul"},"A clear description of the call or request. Describe what the endpoint does."),(0,o.kt)("li",{parentName:"ul"},"A full parameter list:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Parameter types"),(0,o.kt)("li",{parentName:"ul"},"Syntax expressions with placeholders showing available parameters"),(0,o.kt)("li",{parentName:"ul"},"Special formatting"))),(0,o.kt)("li",{parentName:"ul"},"Code examples for multiple languages."),(0,o.kt)("li",{parentName:"ul"},"A sample call with the expected output."),(0,o.kt)("li",{parentName:"ul"},"Error Codes. Edge cases."),(0,o.kt)("li",{parentName:"ul"},"Instructions on how to acquire API keys, if needed."),(0,o.kt)("li",{parentName:"ul"},"Noting common FAQs or scenarios is always useful."),(0,o.kt)("li",{parentName:"ul"},"Links to additional resources such as social media posts, blogs, or video content.")))}h.isMDXComponent=!0},89210:function(e,t,n){t.Z=n.p+"assets/images/index-tile-4679b2a6ea038f97a3a0b4f965fef2ad.png"}}]);