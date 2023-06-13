"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[53975],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"technical-prerequisites",title:"Technical Prerequisites",description:"Technical prerequisites before setting up the validator node along with mandatory checks and best practices after setting up the Validator node.",keywords:["docs","polygon","technical prerequisites","validator node","ansible"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,d={unversionedId:"maintain/validate/technical-prerequisites",id:"maintain/validate/technical-prerequisites",title:"Technical Prerequisites",description:"Technical prerequisites before setting up the validator node along with mandatory checks and best practices after setting up the Validator node.",source:"@site/docs/maintain/validate/technical-prerequisites.md",sourceDirName:"maintain/validate",slug:"/maintain/validate/technical-prerequisites",permalink:"/matic-docs/docs/maintain/validate/technical-prerequisites",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/maintain/validate/technical-prerequisites.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"technical-prerequisites",title:"Technical Prerequisites",description:"Technical prerequisites before setting up the validator node along with mandatory checks and best practices after setting up the Validator node.",keywords:["docs","polygon","technical prerequisites","validator node","ansible"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"maintain",previous:{title:"Port Configuration Details for Nodes",permalink:"/matic-docs/docs/maintain/validate/kb/additional-info/port-config"},next:{title:"Reporting Issues",permalink:"/matic-docs/docs/maintain/reporting-issues"}},p={},c=[{value:"Before setting up the Validator node",id:"before-setting-up-the-validator-node",level:2},{value:"Downloading the Snapshot",id:"downloading-the-snapshot",level:3},{value:"RPC Endpoint for Node Setup",id:"rpc-endpoint-for-node-setup",level:3},{value:"Open necessary ports",id:"open-necessary-ports",level:3},{value:"Install RabbitMQ",id:"install-rabbitmq",level:3},{value:"Mandatory Checklist for Validator Setup",id:"mandatory-checklist-for-validator-setup",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document provides a detailed description of the mandatory technical prerequisites before setting up a Validator node on the Polygon network. It also provides useful checks along with best practices to operate Validator nodes."),(0,o.kt)("h2",{id:"before-setting-up-the-validator-node"},"Before setting up the Validator node"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend running the Validator node with Sentry. Otherwise, you may encounter security concerns and issues with your Validator node.")),(0,o.kt)("h3",{id:"downloading-the-snapshot"},"Downloading the Snapshot"),(0,o.kt)("p",null,"It is recommended that you keep your snapshots handy before setting up the Validator node. Link to download and extract the snapshots: ",(0,o.kt)("a",{parentName:"p",href:"https://snapshots.polygon.technology/"},"https://snapshots.polygon.technology/")),(0,o.kt)("h3",{id:"rpc-endpoint-for-node-setup"},"RPC Endpoint for Node Setup"),(0,o.kt)("p",null,"Validator nodes require an Ethereum-based RPC endpoint. You may use your own Ethereum node or utilize external infrastructure providers in our list. In order to see the list, click on the dropdown menu labeled ",(0,o.kt)("strong",{parentName:"p"},"Infra Providers")," in the navigation bar."),(0,o.kt)("h3",{id:"open-necessary-ports"},"Open necessary ports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Port 26656")," ","\u2192"," Heimdall service will connect your node to another node's Heimdall service using this port.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Port 30303")," ","\u2192"," Bor service will connect your node to another node's Bor service using this port.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Port 22")," ","\u2192"," for the Validator to be able to SSH from wherever they are."))),(0,o.kt)("h3",{id:"install-rabbitmq"},"Install RabbitMQ"),(0,o.kt)("p",null,"It is recommended to install the ",(0,o.kt)("strong",{parentName:"p"},"RabbitMQ")," service before setting up your Validator node. Please utilize the below commands to set up RabbitMQ (if not already installed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt install build-essential\nsudo apt install erlang\nwget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.10.8/rabbitmq-server_3.10.8-1_all.deb\nsudo dpkg -i rabbitmq-server_3.10.8-1_all.deb\n")),(0,o.kt)("h2",{id:"mandatory-checklist-for-validator-setup"},"Mandatory Checklist for Validator Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Please follow the below checklist in order to set up your Validator node using Binaries, Ansible or Packages."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Checklist"),(0,o.kt)("th",{parentName:"tr",align:null},"Binaries"),(0,o.kt)("th",{parentName:"tr",align:null},"Ansible"),(0,o.kt)("th",{parentName:"tr",align:null},"Packages"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Machines Required")),(0,o.kt)("td",{parentName:"tr",align:null},"2 Machines - ",(0,o.kt)("strong",{parentName:"td"},"Sentry")," & ",(0,o.kt)("strong",{parentName:"td"},"Validator")),(0,o.kt)("td",{parentName:"tr",align:null},"3 Machines - ",(0,o.kt)("strong",{parentName:"td"},"Local Machine"),", ",(0,o.kt)("strong",{parentName:"td"},"Sentry")," and ",(0,o.kt)("strong",{parentName:"td"},"Validator")),(0,o.kt)("td",{parentName:"tr",align:null},"2 Machines - ",(0,o.kt)("strong",{parentName:"td"},"Sentry")," & ",(0,o.kt)("strong",{parentName:"td"},"Validator"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Install Go Packages")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Install Python")),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (only on the ",(0,o.kt)("strong",{parentName:"td"},"Local Machine")," where the ",(0,o.kt)("strong",{parentName:"td"},"Ansible Playbook")," runs)"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Install Ansible")),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (only on one machine)"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Install Bash")),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Run Build Essential")),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Node Setup")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/matic-docs/docs/maintain/validate/run-validator-binaries"},"Using Binaries")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/matic-docs/docs/maintain/validate/run-validator-ansible"},"Using Ansible")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/matic-docs/docs/maintain/validate/run-validator"},"Using Packages")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once your Sentry and Validator nodes are synced and running, head over to our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/0xPolygon"},"Discord server")," and ask the community to health-check your nodes. You may check the logs by using the following commands:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Heimdall logs ","\u2192")," ",(0,o.kt)("inlineCode",{parentName:"li"},"journalctl -u heimdalld.service -f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bor logs ","\u2192")," ",(0,o.kt)("inlineCode",{parentName:"li"},"journalctl -u bor.service -f")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It is highly recommended to maintain a backup of the key files on your local machine. These might be needed in the situation of migration or outage. You may access the files using the commands below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi ~/.heimdalld/config/priv_validator_key.json\nvi ~/.bor/keystore/UTC--XXXXX\nvi ~/.bor/password.txt\nvi /etc/matic/metadata\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure that Bor and Heimdall are on their right versions. Commands to verify the versions are provided below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"heimdalld version\nbor version\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It is recommended to always maintain 2 sentries to maximize your node uptime.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Constantly keep checking the peer count on Heimdall and Bor service using the following commands:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Heimdall\ncurl localhost:26657/net_info? | jq .result.n_peers\n\n# Bor\nbor attach .bor/data/bor.ipcadmin.peers.length\n")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For Validators, ",(0,o.kt)("strong",{parentName:"p"},"the output should be only one peer, which has to be a Sentry"),". Validators should connect only to the Sentry and not with external peers."),(0,o.kt)("p",{parentName:"admonition"},"Sentry can connect with multiple peers.")))))}u.isMDXComponent=!0}}]);