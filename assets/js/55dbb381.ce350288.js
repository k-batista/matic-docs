"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[40336],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||i[u]||l;return a?n.createElement(f,d(d({ref:t},s),{},{components:a})):n.createElement(f,d({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var c=2;c<l;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function d(e){var t=e.children,a=e.hidden,d=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,d),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(87462),r=a(67294),l=a(86010),d=a(12466),o=a(76775),p=a(91980),c=a(67392),s=a(50012);function i(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:i(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,o.k6)(),d=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,p._X)(d),(0,r.useCallback)((function(e){if(d){var t=new URLSearchParams(l.location.search);t.set(d,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[d,l])]}function b(e){var t,a,n,l,d=e.defaultValue,o=e.queryString,p=void 0!==o&&o,c=e.groupId,i=m(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:d,tabValues:i})})),k=b[0],g=b[1],h=f({queryString:p,groupId:c}),N=h[0],E=h[1],D=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,s.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),y=D[0],C=D[1],x=function(){var e=null!=N?N:y;return u({value:e,tabValues:i})?e:null}();return(0,r.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!u({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);g(e),E(e),C(e)}),[E,C,i]),tabValues:i}}var k=a(72389),g="tabList__CuJ",h="tabItem_LNqP";function N(e){var t=e.className,a=e.block,o=e.selectedValue,p=e.selectValue,c=e.tabValues,s=[],i=(0,d.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=s.indexOf(t),n=c[a].value;n!==o&&(i(t),p(n))},u=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,r=s.indexOf(e.currentTarget)+1;a=null!=(n=s[r])?n:s[0];break;case"ArrowLeft":var l,d=s.indexOf(e.currentTarget)-1;a=null!=(l=s[d])?l:s[s.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((function(e){var t=e.value,a=e.label,d=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return s.push(e)},onKeyDown:u,onClick:m},d,{className:(0,l.Z)("tabs__item",h,null==d?void 0:d.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function E(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var l=a.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function D(e){var t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(E,(0,n.Z)({},e,t)))}function y(e){var t=(0,k.Z)();return r.createElement(D,(0,n.Z)({key:String(t)},e))}},9044:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),d=a(74866),o=a(85162),p=["components"],c={id:"mapped-tokens",title:"Mapped Tokens",sidebar_label:"Mapped tokens",description:"Examples about different mapped tokens on Polygon Mainnet",keywords:["docs","matic","polygon","mainnet","mapped tokens"],image:"https://wiki.polygon.technology/img/polygon-wiki.png"},s=void 0,i={unversionedId:"operate/mapped-tokens",id:"operate/mapped-tokens",title:"Mapped Tokens",description:"Examples about different mapped tokens on Polygon Mainnet",source:"@site/docs/operate/mapped-tokens.md",sourceDirName:"operate",slug:"/operate/mapped-tokens",permalink:"/matic-docs/docs/operate/mapped-tokens",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/operate/mapped-tokens.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"mapped-tokens",title:"Mapped Tokens",sidebar_label:"Mapped tokens",description:"Examples about different mapped tokens on Polygon Mainnet",keywords:["docs","matic","polygon","mainnet","mapped tokens"],image:"https://wiki.polygon.technology/img/polygon-wiki.png"},sidebar:"develop",previous:{title:"ERC721",permalink:"/matic-docs/docs/develop/nft-tutorial"},next:{title:"Smart Contracts",permalink:"/matic-docs/docs/category/smart-contracts"}},m={},u=[],f={toc:u};function b(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document provides examples of different mapped tokens on the Polygon PoS mainnet and Mumbai PoS testnet. The table in the document lists token name, bridge, parent chain address, and child chain for various tokens, including Plasma-DAI, PoS-DAI, PoS-USDT, PoS-WETH, and PoS-ETH, among others. The documnet also includes instructions for getting a token mapped via ",(0,l.kt)("a",{parentName:"p",href:"https://mapper.polygon.technology/"},"mapper.polygon.technology"),"."),(0,l.kt)("admonition",{title:"Mapping",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to get your token mapped then please send your mapping request via ",(0,l.kt)("a",{parentName:"p",href:"https://mapper.polygon.technology/"},"mapper.polygon.technology"),".")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Below are tables that provide several examples of various mapped tokens for each network. It is important to note that these are not exhaustive lists."),(0,l.kt)(d.Z,{defaultValue:"mainnet",values:[{label:"PoS mainnet",value:"mainnet"},{label:"Mumbai testnet",value:"mumbai"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"mumbai",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Token Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Bridge"),(0,l.kt)("th",{parentName:"tr",align:null},"Parent Chain Address: Goerli"),(0,l.kt)("th",{parentName:"tr",align:null},"Child Chain: MUMBAI"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Polygon"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae"},"0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000001010"},"0x0000000000000000000000000000000000001010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ERC20","-","TestToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x3f152B63Ec5CA5831061B2DccFb29a874C317502"},"0x3f152B63Ec5CA5831061B2DccFb29a874C317502")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e"},"0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plasma","-","WETH"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc"},"0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0x4DfAe612aaCB5b448C12A591cD0879bFa2e51d62"},"0x4DfAe612aaCB5b448C12A591cD0879bFa2e51d62"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ERC721","-","TestToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0xfA08B72137eF907dEB3F202a60EfBc610D2f224b"},"0xfA08B72137eF907dEB3F202a60EfBc610D2f224b")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0x33FC58F12A56280503b04AC7911D1EceEBcE179c"},"0x33FC58F12A56280503b04AC7911D1EceEBcE179c"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","WETH"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc"},"0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"},"0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DummyERC20Token"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x655F2166b0709cd575202630952D71E2bB0d61Af"},"0x655F2166b0709cd575202630952D71E2bB0d61Af")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"},"0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DummyERC721Token"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x084297B12F204Adb74c689be08302FA3f12dB8A7"},"0x084297B12F204Adb74c689be08302FA3f12dB8A7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0x757b1BD7C12B81b52650463e7753d7f5D0565C0e"},"0x757b1BD7C12B81b52650463e7753d7f5D0565C0e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DummyERC1155Token"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x2e3Ef7931F2d0e4a7da3dea950FF3F19269d9063"},"0x2e3Ef7931F2d0e4a7da3dea950FF3F19269d9063")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/address/0xA07e45A987F19E25176c877d98388878622623FA"},"0xA07e45A987F19E25176c877d98388878622623FA")))))),(0,l.kt)(o.Z,{value:"mainnet",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Token Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Bridge"),(0,l.kt)("th",{parentName:"tr",align:null},"Parent Chain Address: Ethereum Mainnet"),(0,l.kt)("th",{parentName:"tr",align:null},"Child Chain: Polygon Network"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Polygon"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"},"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x0000000000000000000000000000000000001010"},"0x0000000000000000000000000000000000001010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plasma","-","DAI"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f"},"0x6b175474e89094c44da98b954eedeac495271d0f")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x84000b263080BC37D1DD73A29D92794A6CF1564e"},"0x84000b263080BC37D1DD73A29D92794A6CF1564e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ERC20","-","TestToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x3db715989dA05C1D17441683B5b41d4510512722"},"0x3db715989dA05C1D17441683B5b41d4510512722")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x5E1DDF2e5a0eCDD923692d4b4429d8603825A8C6"},"0x5E1DDF2e5a0eCDD923692d4b4429d8603825A8C6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plasma","-","WETH"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xa45b966996374E9e65ab991C6FE4Bfce3a56DDe8"},"0xa45b966996374E9e65ab991C6FE4Bfce3a56DDe8")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x8cc8538d60901d19692F5ba22684732Bc28F54A3"},"0x8cc8538d60901d19692F5ba22684732Bc28F54A3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ERC721","-","TestToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Plasma"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x96CDDF45C0Cd9a59876A2a29029d7c54f6e54AD3"},"0x96CDDF45C0Cd9a59876A2a29029d7c54f6e54AD3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xa35363CFf92980F8268299D0132D5f45834A9527"},"0xa35363CFf92980F8268299D0132D5f45834A9527"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","WETH"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"},"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","USDC"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"},"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"},"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","COMP"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xc00e94cb662c3520282e6f5717214004a7f26888"},"0xc00e94cb662c3520282e6f5717214004a7f26888")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c"},"0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","LEND"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03"},"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x313d009888329C9d1cf4f75CA3f32566335bd604"},"0x313d009888329C9d1cf4f75CA3f32566335bd604"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","YFI"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"},"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xDA537104D6A5edd53c6fBba9A898708E465260b6"},"0xDA537104D6A5edd53c6fBba9A898708E465260b6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","USDT"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7"},"0xdac17f958d2ee523a2206206994597c13d831ec7")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xc2132D05D31c914a87C6611C10748AEb04B58e8F"},"0xc2132D05D31c914a87C6611C10748AEb04B58e8F"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","DAI"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f"},"0x6b175474e89094c44da98b954eedeac495271d0f")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"},"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","BUSD"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x4fabb145d64652a948d72533023f6e7a623c7c53"},"0x4fabb145d64652a948d72533023f6e7a623c7c53")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7"},"0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","MANA"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x0f5d2fb29fb7d3cfee444a200298f468908cc942"},"0x0f5d2fb29fb7d3cfee444a200298f468908cc942")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"},"0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","WBTC"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"},"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"},"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","0xBTC"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xb6ed7644c69416d67b522e20bc294a9a9b405b31"},"0xb6ed7644c69416d67b522e20bc294a9a9b405b31")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x71B821aa52a49F32EEd535fCA6Eb5aa130085978"},"0x71B821aa52a49F32EEd535fCA6Eb5aa130085978"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","KIWI"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D"},"0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x578360AdF0BbB2F10ec9cEC7EF89Ef495511ED5f"},"0x578360AdF0BbB2F10ec9cEC7EF89Ef495511ED5f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","DUST"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xbca3c97837a39099ec3082df97e28ce91be14472"},"0xbca3c97837a39099ec3082df97e28ce91be14472")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x556f501CF8a43216Df5bc9cC57Eb04D4FFAA9e6D"},"0x556f501CF8a43216Df5bc9cC57Eb04D4FFAA9e6D"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PoS","-","SPN"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a"},"0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xeAb9Cfb094db203e6035c2e7268A86DEbeD5BD14"},"0xeAb9Cfb094db203e6035c2e7268A86DEbeD5BD14"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DummyERC20Token"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xf2F3bD7Ca5746C5fac518f67D1BE87805a2Be82A"},"0xf2F3bD7Ca5746C5fac518f67D1BE87805a2Be82A")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xeFfdCB49C2D0EF813764B709Ca3c6fe71f230E3e"},"0xeFfdCB49C2D0EF813764B709Ca3c6fe71f230E3e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DummyERC721Token"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x71B821aa52a49F32EEd535fCA6Eb5aa130085978"},"0x71B821aa52a49F32EEd535fCA6Eb5aa130085978")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0x6EBEAC13f6403D19C95b6B75008B12fd21a93Aab"},"0x6EBEAC13f6403D19C95b6B75008B12fd21a93Aab"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DummyERC1155Token"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x556f501CF8a43216Df5bc9cC57Eb04D4FFAA9e6D"},"0x556f501CF8a43216Df5bc9cC57Eb04D4FFAA9e6D")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xA0c68C638235ee32657e8f720a23ceC1bFc77C77"},"0xA0c68C638235ee32657e8f720a23ceC1bFc77C77"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WDEV"),(0,l.kt)("td",{parentName:"tr",align:null},"PoS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x4a5df63b0c37b38515e4ee51baf40edd420bf7d5"},"0x4a5df63b0c37b38515e4ee51baf40edd420bf7d5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polygonscan.com/address/0xa5577d1cec2583058a6bd6d5deac44797c205701"},"0xa5577d1cec2583058a6bd6d5deac44797c205701"))))))))}b.isMDXComponent=!0}}]);