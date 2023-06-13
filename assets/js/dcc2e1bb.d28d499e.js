"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[97169],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62922:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"supernets-how-to-allowlist",title:"How to Allowlist Validators",sidebar_label:"How to Allowlist Validators",description:"Learn how to allowlist addresses on a Supernet.",keywords:["docs","polygon","allowlist","allow","access","access control","block","blocklist"]},s=void 0,d={unversionedId:"supernets/operate/deploy/access-control/supernets-how-to-allowlist",id:"supernets/operate/deploy/access-control/supernets-how-to-allowlist",title:"How to Allowlist Validators",description:"Learn how to allowlist addresses on a Supernet.",source:"@site/docs/supernets/operate/deploy/access-control/allowlist.md",sourceDirName:"supernets/operate/deploy/access-control",slug:"/supernets/operate/deploy/access-control/supernets-how-to-allowlist",permalink:"/matic-docs/docs/supernets/operate/deploy/access-control/supernets-how-to-allowlist",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/operate/deploy/access-control/allowlist.md",tags:[],version:"current",lastUpdatedBy:"Kennedy Batista",lastUpdatedAt:1686621530,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"supernets-how-to-allowlist",title:"How to Allowlist Validators",sidebar_label:"How to Allowlist Validators",description:"Learn how to allowlist addresses on a Supernet.",keywords:["docs","polygon","allowlist","allow","access","access control","block","blocklist"]},sidebar:"supernets",previous:{title:"How to Configure the Rootchain",permalink:"/matic-docs/docs/supernets/operate/deploy/supernets-how-to-configure-rootchain"},next:{title:"Staking on the Rootchain",permalink:"/matic-docs/docs/category/staking-on-the-rootchain"}},p={},c=[{value:"i. Allowlist validators on the rootchain",id:"i-allowlist-validators-on-the-rootchain",level:2},{value:"ii. Register validators on the rootchain",id:"ii-register-validators-on-the-rootchain",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we'll look at how to allowlist validators on the rootchain."),(0,o.kt)("h2",{id:"i-allowlist-validators-on-the-rootchain"},"i. Allowlist validators on the rootchain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract on the rootchain is responsible for managing the PolyBFT network."),(0,o.kt)("p",null,"Before validators can be registered on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract on the rootchain, they need to be allowlisted by the deployer of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract. Validators can register themselves, or a registrator can register them on their behalf. Once registered, validators can stake and start validating transactions."),(0,o.kt)("p",null,"This can be done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"polygon-edge polybft whitelist-validators")," command. The deployer can specify the hex-encoded private key of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract deployer or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--data-dir")," flag if they have initialized their secrets."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Flags \u2193"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Flag"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--private-key")),(0,o.kt)("td",{parentName:"tr",align:null},"Hex-encoded private key of the account that deploys the SupernetManager contract"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--private-key <hex_encoded_rootchain_account_private_key_of_CustomSupernetManager_deployer>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--addresses")),(0,o.kt)("td",{parentName:"tr",align:null},"Comma-separated list of hex-encoded addresses of validators to be whitelisted"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--addresses 0x8a98f47a9820e3f3a6C16f44194F1d7eCCe3A110,0x8a98f47a9820e3f3a6C16f44194F1d7eCCe3A110"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--supernet-manager"),(0,o.kt)("td",{parentName:"tr",align:null},"Address of the SupernetManager contract on the rootchain"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--supernet-manager 0x3c6f8c6Fd90b2Bee1E78E2B2D1e7aB6cFf9Dc113"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--data-dir")),(0,o.kt)("td",{parentName:"tr",align:null},"Directory for the Polygon Edge data if the local FS is used"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--data-dir ./polygon-edge/data"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--jsonrpc")),(0,o.kt)("td",{parentName:"tr",align:null},"JSON-RPC interface"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--jsonrpc 0.0.0.0:8545"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")),(0,o.kt)("td",{parentName:"tr",align:null},"Path to the SecretsManager config file. If omitted, the local FS secrets manager is used"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config /path/to/config/file.yaml")))))),(0,o.kt)("p",null,"In the following example command, we are using a placeholder private key for the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract deployer. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If running the demo geth instance, the test account private key has been hardcoded: ",(0,o.kt)("inlineCode",{parentName:"p"},"aa75e9a7d427efc732f8e4f1a5b7646adcc61fd5bae40f80d13c8419c9f43d6d"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--addresses")," flag is a comma-separated list of the first two validators generated earlier. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--supernet-manager")," flag specifies the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract address that was deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge polybft whitelist-validators \\\n  --private-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \\\n  --addresses 0x61324166B0202DB1E7502924326262274Fa4358F,0xFE5E166BA5EA50c04fCa00b07b59966E6C2E9570 \\\n  --supernet-manager 0x75aA024A2292A3FD3C17d67b54B3d00435437246\n")),(0,o.kt)("h2",{id:"ii-register-validators-on-the-rootchain"},"ii. Register validators on the rootchain"),(0,o.kt)("p",null,"Each validator needs to register themselves on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSupernetManager")," contract. This is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"polygon-edge polybft register-validator")," command. ",(0,o.kt)("strong",{parentName:"p"},"Note that this command is for testing purposes only.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Flags \u2193"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Flag"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")),(0,o.kt)("td",{parentName:"tr",align:null},"Path to the SecretsManager config file. If omitted, the local FS secrets manager is used."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config /path/to/config/file.yaml"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--data-dir")),(0,o.kt)("td",{parentName:"tr",align:null},"The directory path where the new validator key is stored."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--data-dir /path/to/validator1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--jsonrpc")),(0,o.kt)("td",{parentName:"tr",align:null},"The JSON-RPC interface. Default is ",(0,o.kt)("inlineCode",{parentName:"td"},"0.0.0.0:8545"),"."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--jsonrpc 0.0.0.0:8545"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--supernet-manager")),(0,o.kt)("td",{parentName:"tr",align:null},"Address of the SupernetManager contract on the rootchain."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--supernet-manager 0x75aA024A2292A3FD3C17d67b54B3d00435437246")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./polygon-edge polybft register-validator --data-dir ./test-chain-1 \\\n--supernet-manager --supernet-manager 0x75aA024A2292A3FD3C17d67b54B3d00435437246\n")))}m.isMDXComponent=!0}}]);