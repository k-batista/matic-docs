"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[74763],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),u=n(76775),i=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,n,r,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,p=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),h=v[0],k=v[1],b=f({queryString:i,groupId:s}),g=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],T=w[1],j=function(){var e=null!=g?g:N;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){j&&k(j)}),[j]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var h=n(72389),k="tabList__CuJ",b="tabItem_LNqP";function g(e){var t=e.className,n=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(p(t),i(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},19432:function(e,t,n){n.r(t),n.d(t,{JsonRpcTerminal:function(){return m},assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=n(67294),l=n(3905),u=(n(74866),n(85162),["components"]),i={id:"json-rpc-net",title:"Net",description:"List of Net JSON RPC commands for Polygon Edge.",keywords:["docs","polygon","edge","json","rpc","commands"]},s=void 0,c={unversionedId:"main-edge/api/json-rpc-net",id:"main-edge/api/json-rpc-net",title:"Net",description:"List of Net JSON RPC commands for Polygon Edge.",source:"@site/docs/main-edge/api/json-rpc-net.md",sourceDirName:"main-edge/api",slug:"/main-edge/api/json-rpc-net",permalink:"/matic-docs/docs/main-edge/api/json-rpc-net",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/main-edge/api/json-rpc-net.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"json-rpc-net",title:"Net",description:"List of Net JSON RPC commands for Polygon Edge.",keywords:["docs","polygon","edge","json","rpc","commands"]}},p={},d=[{value:"net_version",id:"net_version",level:2},{value:"net_listening",id:"net_listening",level:2},{value:"net_peerCount",id:"net_peercount",level:2}],m=function(e){var t=(0,o.useState)(""),n=t[0],r=t[1],a=e.method,u=e.params,i=e.network;return(0,l.kt)("div",null,(0,l.kt)("div",null,""!=n?(0,l.kt)("pre",{className:"json_rpc_terminal"},n):null),(0,l.kt)("div",null,""==n?(0,l.kt)("button",{className:"json_rpc_terminal_button",onClick:function(){fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",method:a,params:u,id:1})}).then((function(e){return e.json()})).then((function(e){r(JSON.stringify(e))}))}},"Run command"):(0,l.kt)("button",{className:"json_rpc_terminal_button",onClick:function(){r("")}},"Clear Terminal")))},f={toc:d,JsonRpcTerminal:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"net_version"},"net_version"),(0,l.kt)("p",null,"Returns the current network id."),(0,l.kt)("hr",null),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Parameters:")),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Returns:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null," String ")," - The current network id.")),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Example:")),(0,l.kt)("p",null,"Run the command and see live results from our testnet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"net_version","params":[],"id":83}\'\n')),(0,l.kt)(m,{method:"net_version",params:[],network:"https://rpc.poa.psdk.io:8545",mdxType:"JsonRpcTerminal"}),(0,l.kt)("h2",{id:"net_listening"},"net_listening"),(0,l.kt)("p",null,"Returns true if a client is actively listening for network connections."),(0,l.kt)("hr",null),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Parameters:")),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Returns:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null," Boolean ")," - true when listening, otherwise false.")),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Example:")),(0,l.kt)("p",null,"Run the command and see live results from our testnet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"net_listening","params":[],"id":83}\'\n')),(0,l.kt)(m,{method:"net_listening",params:[],network:"https://rpc.poa.psdk.io:8545",mdxType:"JsonRpcTerminal"}),(0,l.kt)("h2",{id:"net_peercount"},"net_peerCount"),(0,l.kt)("p",null,"Returns number of peers currently connected to the client."),(0,l.kt)("hr",null),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Parameters:")),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Returns:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null," QUANTITY ")," - integer of the number of connected peers.")),(0,l.kt)("h4",null,(0,l.kt)("i",null,"Example:")),(0,l.kt)("p",null,"Run the command and see live results from our testnet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl  https://rpc.poa.psdk.io:8545 -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\'\n')),(0,l.kt)(m,{method:"net_peerCount",params:[],network:"https://rpc.poa.psdk.io:8545",mdxType:"JsonRpcTerminal"}))}v.isMDXComponent=!0}}]);