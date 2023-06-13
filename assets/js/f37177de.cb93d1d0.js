"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[31998],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36321:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={id:"installation",title:"Installation",description:"How to install Polygon Edge.",keywords:["docs","polygon","edge","install","installation"]},s=void 0,c={unversionedId:"main-edge/get-started/installation",id:"main-edge/get-started/installation",title:"Installation",description:"How to install Polygon Edge.",source:"@site/docs/main-edge/get-started/installation.md",sourceDirName:"main-edge/get-started",slug:"/main-edge/get-started/installation",permalink:"/matic-docs/docs/main-edge/get-started/installation",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/get-started/installation.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"installation",title:"Installation",description:"How to install Polygon Edge.",keywords:["docs","polygon","edge","install","installation"]}},u={},d=[{value:"Pre-built releases",id:"pre-built-releases",level:2},{value:"Docker image",id:"docker-image",level:2},{value:"Building from source",id:"building-from-source",level:2},{value:"Using <code>go install</code>",id:"using-go-install",level:2}],p={toc:d};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Please refer to the installation method more applicable to you."),(0,l.kt)("p",null,"Our recommendation is to use the pre-built releases and verify the provided checksums."),(0,l.kt)("h2",{id:"pre-built-releases"},"Pre-built releases"),(0,l.kt)("p",null,"Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/0xPolygon/polygon-edge/releases"},"GitHub Releases")," page for a list of releases."),(0,l.kt)("p",null,"Polygon Edge comes with cross-compiled AMD64/ARM64 binaries for Darwin and Linux."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"docker-image"},"Docker image"),(0,l.kt)("p",null,"Official Docker images are hosted under the ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/0xpolygon/polygon-edge"},"hub.docker.com registry"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker pull 0xpolygon/polygon-edge:latest")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"building-from-source"},"Building from source"),(0,l.kt)("p",null,"Prior to using ",(0,l.kt)("inlineCode",{parentName:"p"},"go install")," make sure that you have Go ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.18")," installed and properly configured."),(0,l.kt)("p",null,"The stable branch is the branch of the latest release."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/0xPolygon/polygon-edge.git\ncd polygon-edge/\ngo build -o polygon-edge main.go\nsudo mv polygon-edge /usr/local/bin\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"using-go-install"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"go install")),(0,l.kt)("p",null,"Prior to using ",(0,l.kt)("inlineCode",{parentName:"p"},"go install")," make sure that you have Go ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.17")," installed and properly configured."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"go install github.com/0xPolygon/polygon-edge@release/<latest release>")),(0,l.kt)("p",null,"The binary will be available in your ",(0,l.kt)("inlineCode",{parentName:"p"},"GOBIN")," environment variable, and will include the changes from the latest release. You can checkout out ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/0xPolygon/polygon-edge/releases"},"GitHub Releases")," to find out which one is the latest."))}g.isMDXComponent=!0}}]);