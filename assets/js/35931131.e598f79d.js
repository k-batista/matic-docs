"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[67687],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"set-up-hashicorp-vault",title:"Set up Hashicorp Vault",description:"Set up the Hashicorp Vault for Polygon Edge.",keywords:["docs","polygon","edge","hashicorp","vault","secrets","manager"]},l=void 0,p={unversionedId:"edge/configuration/secret-managers/set-up-hashicorp-vault",id:"edge/configuration/secret-managers/set-up-hashicorp-vault",title:"Set up Hashicorp Vault",description:"Set up the Hashicorp Vault for Polygon Edge.",source:"@site/docs/edge/configuration/secret-managers/set-up-hashicorp-vault.md",sourceDirName:"edge/configuration/secret-managers",slug:"/edge/configuration/secret-managers/set-up-hashicorp-vault",permalink:"/matic-docs/docs/edge/configuration/secret-managers/set-up-hashicorp-vault",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/edge/configuration/secret-managers/set-up-hashicorp-vault.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"set-up-hashicorp-vault",title:"Set up Hashicorp Vault",description:"Set up the Hashicorp Vault for Polygon Edge.",keywords:["docs","polygon","edge","hashicorp","vault","secrets","manager"]},sidebar:"edge",previous:{title:"Set up GCP Secrets Manager",permalink:"/matic-docs/docs/edge/configuration/secret-managers/set-up-gcp-secrets-manager"},next:{title:"Work with a node",permalink:"/matic-docs/docs/category/work-with-a-node"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Generate the secrets manager configuration",id:"step-1---generate-the-secrets-manager-configuration",level:2},{value:"Step 2 - Initialize secret keys using the configuration",id:"step-2---initialize-secret-keys-using-the-configuration",level:2},{value:"Step 3 - Generate the genesis file",id:"step-3---generate-the-genesis-file",level:2},{value:"Step 4 - Start the Polygon Edge client",id:"step-4---start-the-polygon-edge-client",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Currently, the Polygon Edge is concerned with keeping 2 major runtime secrets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"validator private key")," used by the node, if the node is a validator"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"networking private key")," used by libp2p, for participating and communicating with other peers")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The validator private key is unique to each validator node. The same key is ",(0,i.kt)("b",null,"not")," to be shared across all validators, as this may compromise the security of your chain.")),(0,i.kt)("p",null,"For additional information, please read through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/edge/configuration/manage-private-keys"},"Managing Private Keys Guide")),(0,i.kt)("p",null,"The modules of the Polygon Edge ",(0,i.kt)("strong",{parentName:"p"},"should not need to know how to keep secrets"),". Ultimately, a module should not care if\na secret is stored on a far-away server or locally on the node's disk."),(0,i.kt)("p",null,"Everything a module needs to know about secret-keeping is ",(0,i.kt)("strong",{parentName:"p"},"knowing to use the secret"),", ",(0,i.kt)("strong",{parentName:"p"},"knowing which secrets to get\nor save"),". The finer implementation details of these operations are delegated away to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SecretsManager"),", which of course is an abstraction."),(0,i.kt)("p",null,"The node operator that's starting the Polygon Edge can now specify which secrets manager they want to use, and as soon\nas the correct secrets manager is instantiated, the modules deal with the secrets through the mentioned interface -\nwithout caring if the secrets are stored on a disk or on a server."),(0,i.kt)("p",null,"This article details the necessary steps to get the Polygon Edge up and running with a ",(0,i.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Hashicorp Vault")," server."),(0,i.kt)("admonition",{title:"previous guides",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is ",(0,i.kt)("strong",{parentName:"p"},"highly recommended")," that before going through this article, articles on ",(0,i.kt)("a",{parentName:"p",href:"/docs/edge/get-started/set-up-ibft-locally"},(0,i.kt)("strong",{parentName:"a"},"Local Setup")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/docs/edge/get-started/set-up-ibft-on-the-cloud"},(0,i.kt)("strong",{parentName:"a"},"Cloud Setup"))," are read.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This article assumes that a functioning instance of the Hashicorp Vault server ",(0,i.kt)("strong",{parentName:"p"},"is already set up"),"."),(0,i.kt)("p",null,"Additionally, it is required that the Hashicorp Vault server being used for the Polygon Edge should have ",(0,i.kt)("strong",{parentName:"p"},"enabled KV storage"),"."),(0,i.kt)("p",null,"Required information before continuing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The server URL")," (the API URL of the Hashicorp Vault server)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token")," (access token used for access to the KV storage engine)")),(0,i.kt)("h2",{id:"step-1---generate-the-secrets-manager-configuration"},"Step 1 - Generate the secrets manager configuration"),(0,i.kt)("p",null,"In order for the Polygon Edge to be able to seamlessly communicate with the Vault server, it needs to parse an already\ngenerated config file, which contains all the necessary information for secret storage on Vault."),(0,i.kt)("p",null,"To generate the configuration, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge secrets generate --dir <PATH> --token <TOKEN> --server-url <SERVER_URL> --name <NODE_NAME>\n")),(0,i.kt)("p",null,"Parameters present:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," is the path to which the configuration file should be exported to. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"./secretsManagerConfig.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN")," is the access token previously mentioned in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/edge/configuration/secret-managers/set-up-hashicorp-vault#prerequisites"},"prerequisites section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SERVER_URL")," is the URL of the API for the Vault server, also mentioned in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/edge/configuration/secret-managers/set-up-hashicorp-vault#prerequisites"},"prerequisites section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NODE_NAME")," is the name of the current node for which the Vault configuration is being set up as. It can be an arbitrary value. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"polygon-edge-node"))),(0,i.kt)("admonition",{title:"Node names",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be careful when specifying node names."),(0,i.kt)("p",{parentName:"admonition"},"The Polygon Edge uses the specified node name to keep track of the secrets it generates and uses on the Vault instance.\nSpecifying an existing node name can have consequences of data being overwritten on the Vault server."),(0,i.kt)("p",{parentName:"admonition"},"Secrets are stored on the following base path: ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets/node_name"))),(0,i.kt)("h2",{id:"step-2---initialize-secret-keys-using-the-configuration"},"Step 2 - Initialize secret keys using the configuration"),(0,i.kt)("p",null,"Now that the configuration file is present, we can initialize the required secret keys with the configuration\nfile set up in step 1, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge secrets init --config <PATH>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," param is the location of the previously generated secrets manager param from step 1."),(0,i.kt)("h2",{id:"step-3---generate-the-genesis-file"},"Step 3 - Generate the genesis file"),(0,i.kt)("p",null,"The genesis file should be generated in a similar manner to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/edge/get-started/set-up-ibft-locally"},(0,i.kt)("strong",{parentName:"a"},"Local Setup")),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/docs/edge/get-started/set-up-ibft-on-the-cloud"},(0,i.kt)("strong",{parentName:"a"},"Cloud Setup"))," guides, with minor changes."),(0,i.kt)("p",null,"Since Hashicorp Vault is being used instead of the local file system, validator addresses should be added through the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ibft-validator")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge genesis --ibft-validator <VALIDATOR_ADDRESS> ...\n")),(0,i.kt)("h2",{id:"step-4---start-the-polygon-edge-client"},"Step 4 - Start the Polygon Edge client"),(0,i.kt)("p",null,"Now that the keys are set up, and the genesis file is generated, the final step to this process would be starting the\nPolygon Edge with the ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," command."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," command is used in the same manner as in the previously mentioned guides, with a minor addition - the ",(0,i.kt)("inlineCode",{parentName:"p"},"--secrets-config")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"polygon-edge server --secrets-config <PATH> ...\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," param is the location of the previously generated secrets manager param from step 1."))}g.isMDXComponent=!0}}]);