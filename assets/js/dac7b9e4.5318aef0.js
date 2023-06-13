"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[64424],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"erigon-client",title:"Setup an Archive Node Using Erigon Client",sidebar_label:"Using Erigon Client",description:"System requirements and client setup for Erigon based Archive Nodes.",keywords:["erigon","archive","node","docs","polygon","client"],image:"https://wiki.polygon.technology/img/polygon-wiki.png"},c=void 0,s={unversionedId:"operate/erigon-client",id:"operate/erigon-client",title:"Setup an Archive Node Using Erigon Client",description:"System requirements and client setup for Erigon based Archive Nodes.",source:"@site/docs/operate/client-setup.md",sourceDirName:"operate",slug:"/operate/erigon-client",permalink:"/matic-docs/docs/operate/erigon-client",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/operate/client-setup.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"erigon-client",title:"Setup an Archive Node Using Erigon Client",sidebar_label:"Using Erigon Client",description:"System requirements and client setup for Erigon based Archive Nodes.",keywords:["erigon","archive","node","docs","polygon","client"],image:"https://wiki.polygon.technology/img/polygon-wiki.png"},sidebar:"operatepos",previous:{title:"Using Binaries/Ansible",permalink:"/matic-docs/docs/operate/archive-node"},next:{title:"Using NodeReal",permalink:"/matic-docs/docs/operate/archive-node-nodereal"}},p={},u=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Install Erigon Client",id:"install-erigon-client",level:2},{value:"Start Erigon Client",id:"start-erigon-client",level:2},{value:"Configure Erigon Client",id:"configure-erigon-client",level:2},{value:"Tips for Faster Sync",id:"tips-for-faster-sync",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For an Archive node of Polygon Mainnet: 8TB"),(0,o.kt)("li",{parentName:"ul"},"For an Archive node of Mumbai Testnet: 1TB"),(0,o.kt)("li",{parentName:"ul"},"SSD or NVMe. Bear in mind that SSD performance deteriorates when close to capacity"),(0,o.kt)("li",{parentName:"ul"},"RAM: >= 32GB, 64-bit architecture"),(0,o.kt)("li",{parentName:"ul"},"Golang version >= 1.18, GCC 10+ ")),(0,o.kt)("admonition",{title:"HDD not recommended",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On HDDs, Erigon will always stay N blocks behind the chain tip, but will not fall behind. ")),(0,o.kt)("h2",{id:"install-erigon-client"},"Install Erigon Client"),(0,o.kt)("p",null,"Run the following commands to install Erigon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recurse-submodules -j8 https://github.com/maticnetwork/erigon.git\ncd erigon\ngit checkout v0.0.6\nmake erigon\n")),(0,o.kt)("p",null,"This should create the binary at ",(0,o.kt)("inlineCode",{parentName:"p"},"./build/bin/erigon")),(0,o.kt)("p",null,"Use the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.0.6")," on our forked repo to have a stable version. "),(0,o.kt)("h2",{id:"start-erigon-client"},"Start Erigon Client"),(0,o.kt)("p",null,"To start Erigon, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"erigon --chain=mumbai\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"chain=mumbai")," for Mumbai testnet"),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"chain=bor-mainnet")," for Polygon Mainnet")),(0,o.kt)("h2",{id:"configure-erigon-client"},"Configure Erigon Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you want to store Erigon files in a non-default location, use ",(0,o.kt)("inlineCode",{parentName:"li"},"-datadir"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"erigon --chain=mumbai --datadir=<your_data_dir>\n"))),(0,o.kt)("li",{parentName:"ul"},"If you are not using local ",(0,o.kt)("strong",{parentName:"li"},"heimdall"),", use ",(0,o.kt)("inlineCode",{parentName:"li"},"-bor.heimdall=<your heimdall url>"),". By default, it will try to connect to ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:1317"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-makefile"},"erigon --chain=mumbai --bor.heimdall=<your heimdall url> --datadir=<your_data_dir>\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you want to connect to Polygon Mumbai Testnet use: ",(0,o.kt)("a",{parentName:"li",href:"https://heimdall-api-testnet.polygon.technology"},"https://heimdall-api-testnet.polygon.technology")),(0,o.kt)("li",{parentName:"ul"},"For Polygon Mainnet: ",(0,o.kt)("a",{parentName:"li",href:"https://heimdall-api.polygon.technology"},"https://heimdall-api.polygon.technology"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Remote heimdall is not recommended for production use, Only use it for testing purposes."),(0,o.kt)("h2",{id:"tips-for-faster-sync"},"Tips for Faster Sync"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the machine with high IOPS and RAM for the faster initial sync"),(0,o.kt)("li",{parentName:"ul"},"Memory optimized nodes are recommended for faster sync, For example, AWS EC2 ",(0,o.kt)("inlineCode",{parentName:"li"},"r5")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"r6")," series instances.")))}d.isMDXComponent=!0}}]);