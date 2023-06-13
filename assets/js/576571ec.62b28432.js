"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[41561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"nftstorage",title:"Mint NFTs",description:"Mint with NFT.storage and Polygon.",keywords:["nft.storage","filecoin","matic","polygon","docs","mint nfts"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},s=void 0,c={unversionedId:"develop/nftstorage",id:"develop/nftstorage",title:"Mint NFTs",description:"Mint with NFT.storage and Polygon.",source:"@site/docs/develop/nftstorage.md",sourceDirName:"develop",slug:"/develop/nftstorage",permalink:"/matic-docs/docs/develop/nftstorage",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/develop/nftstorage.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"nftstorage",title:"Mint NFTs",description:"Mint with NFT.storage and Polygon.",keywords:["nft.storage","filecoin","matic","polygon","docs","mint nfts"],image:"https://wiki.polygon.technology/img/polygon-logo.png"},sidebar:"develop",previous:{title:"Crust Network",permalink:"/matic-docs/docs/develop/crusthelpers"},next:{title:"Data",permalink:"/matic-docs/docs/category/data"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Get an API key for NFT.storage",id:"get-an-api-key-for-nftstorage",level:3},{value:"Set up your workspace",id:"set-up-your-workspace",level:3},{value:"Minting your NFT",id:"minting-your-nft",level:2},{value:"Storing asset data with NFT.Storage",id:"storing-asset-data-with-nftstorage",level:3},{value:"Creating your NFT on Polygon",id:"creating-your-nft-on-polygon",level:3},{value:"Create the smart contract for minting",id:"create-the-smart-contract-for-minting",level:4},{value:"Deploy the Smart Contract to Polygon",id:"deploy-the-smart-contract-to-polygon",level:4},{value:"Minting the NFT on Polygon",id:"minting-the-nft-on-polygon",level:4},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Content disclaimer",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please view the third-party content disclaimer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/matic-docs/blob/master/CONTENT_DISCLAIMER.md"},(0,r.kt)("ins",null,"here")),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This tutorial will teach you to mint an NFT using the Polygon blockchain and IPFS/Filecoin storage via NFT.Storage. Polygon, a Layer 2 scaling solution for Ethereum, is often chosen by developers for its speed and lower transaction costs while maintaining full compatibility with Ethereum's EVM. The tutorial will walk you through the creation and deployment of a standardized smart contract, storing metadata and assets on IPFS and Filecoin via the NFT.Storage API and minting the NFT to your own wallet on Polygon."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial we will aim to fulfill three characteristics with our minting process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Scalability")," of the minting process in terms of cost and throughput. If the use case aims to rapidly create NFTs, the underlying technology needs to handle all minting requests and the minting should be cheap."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Durability")," of the NFT, as assets can be long-lived and therefore need to remain usable during their full lifetime."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"Immutability")," of the NFT and the asset it represents to prevent unwanted changes and malicious actors from changing the digital asset the NFT represents.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polygon.technology"},"Polygon")," addresses the ",(0,r.kt)("em",{parentName:"p"},"scalability")," characteristic with their protocol and framework. They are also compatible with Ethereum and its virtual machine, enabling developers to move their code freely between the two blockchains. Likewise, ",(0,r.kt)("a",{parentName:"p",href:"https://nft.storage"},"NFT.Storage")," guarantees ",(0,r.kt)("em",{parentName:"p"},"durability")," with the power of the underlying ",(0,r.kt)("a",{parentName:"p",href:"https://filecoin.io"},"Filecoin")," network and ",(0,r.kt)("em",{parentName:"p"},"immutability")," by using IPFS' ",(0,r.kt)("a",{parentName:"p",href:"https://nftschool.dev/concepts/content-addressing/"},"content addressing"),"."),(0,r.kt)("p",null,"In this tutorial you will get an overview of the NFT minting process, learn how to store a digital asset with NFT.Storage and use this digital asset to mint your NFT on Polygon."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"General knowledge about NFTs will give you background and context. ",(0,r.kt)("a",{parentName:"p",href:"https://nftschool.dev/concepts/non-fungible-tokens/"},"NFT School covers NFT basics"),", advanced topics and has more tutorials."),(0,r.kt)("p",null,"To test and run the code found in this tutorial, you will need a working ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"Node.js installation"),"."),(0,r.kt)("p",null,"You'll also need a Polygon wallet on the Mumbai testnet with a small amount of the MATIC token. Follow the instructions below to get started:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Download and install ",(0,r.kt)("a",{parentName:"strong",href:"https://metamask.io/"},"Metamask")),". MetaMask is a crypto wallet and gateway to blockchain apps. It's very easy to use and simplifies a lot of steps, e.g., setting up a Polygon wallet."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Connect MetaMask to Polygon's ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.polygon.technology/docs/develop/metamask/overview"},"Mumbai testnet"))," and select it in the dropdown menu. We will use Polygon's testnet to mint our NFT as it's free of charge."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Receive MATIC token")," to your wallet by using the ",(0,r.kt)("a",{parentName:"li",href:"https://faucet.polygon.technology/"},"faucet"),". Select the Mumbai testnet and paste your wallet address from MetaMask into the form. To mint an NFT, we need to pay a small amount of MATIC, which is a fee charged by miners for operations to add new transactions to the blockchain, e.g., minting an NFT or creating a new smart contract."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Copy your private key")," from MetaMask by clicking on the three dots in the top right corner and selecting 'Account details'. On the bottom you can find a button to export your private key. Click it and enter your password when prompted. You can copy and paste the private key in a text file for now. We will use it later in the tutorial when interacting with the blockchain.")),(0,r.kt)("p",null,"Lastly, you will need a text or code editor. For more convenience, choose an editor with language support for both JavaScript and Solidity. A good option is ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity"},"solidity")," extension enabled."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("h3",{id:"get-an-api-key-for-nftstorage"},"Get an API key for NFT.storage"),(0,r.kt)("p",null,"In order to use NFT.Storage you need an API key. First, ",(0,r.kt)("a",{parentName:"p",href:"https://nft.storage/login/"},"head over to NFT.Storage to log in with your email address"),". You will receive an email with a magic link that signs you in -- no password needed. After you successfully logged in, go to API Keys via the navigation bar. You will find a button to create a ",(0,r.kt)("strong",{parentName:"p"},"New Key"),". When prompted for an API key name, you can freely choose one or use \u201cpolygon + NFT.Storage\u201d. You can copy the content of the key column now or reference back to NFT.Storage later in the tutorial."),(0,r.kt)("h3",{id:"set-up-your-workspace"},"Set up your workspace"),(0,r.kt)("p",null,"Create a new empty folder that we can use as our workspace for this tutorial. Feel free to choose any name and location on your file system. Open up a terminal and navigate to the newly created folder."),(0,r.kt)("p",null,"Next, we will install the following Node.js dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hardhat and Hardhat-Ethers"),", a development environment for Ethereum (and Ethereum compatible blockchains like Polygon)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenZeppelin"),", a collection of smart contracts featuring standardized NFT base contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT.Storage"),", a library to connect to the NFT.Storage API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dotenv"),", a library to handle environment files for configuration (e.g., injecting private keys into the script).")),(0,r.kt)("p",null,"Use the following command to install all dependencies at once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install hardhat @openzeppelin/contracts nft.storage dotenv @nomiclabs/hardhat-ethers\n")),(0,r.kt)("p",null,"Hardhat needs to be initialized in the current folder. In order to start the initialization, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat\n")),(0,r.kt)("p",null,"When prompted, choose ",(0,r.kt)("strong",{parentName:"p"},"Create an empty hardhat.config.js"),". Your console output should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 What do you want to do? \xb7 Create an empty hardhat.config.js\n\u2728 Config file created \u2728\n")),(0,r.kt)("p",null,"We will do some modifications to the hardhat configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," to support the Polygon Mumbai test network. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," that was created in the last step. Please note that we are loading your Polygon wallet private key from an environment file and that this environment file must be kept safe. You can even use other rpc ",(0,r.kt)("a",{parentName:"p",href:"https://docs.polygon.technology/docs/operate/network"},"link"),", as per requirement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n* @type import(\'hardhat/config\').HardhatUserConfig\n*/\nrequire("@nomiclabs/hardhat-ethers");\nrequire(\'dotenv\').config();\nconst { PRIVATE_KEY } = process.env;\nmodule.exports = {\n  defaultNetwork: "PolygonMumbai",\n  networks: {\n    hardhat: {\n    },\n    PolygonMumbai : {\n      url: "https://rpc-mumbai.maticvigil.com",\n      accounts: [PRIVATE_KEY]\n    }\n  },\n  solidity: {\n    version: "0.8.12",\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200\n      }\n    }\n  },\n}\n')),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," which will hold your API key for NFT.Storage and your Polygon wallet private key. The content of the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file should look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PRIVATE_KEY="Your Private Key"\nNFT_STORAGE_API_KEY="Your Api Key"\n')),(0,r.kt)("p",null,"Replace the placeholders with the API key you created during preparation and your Polygon wallet private key."),(0,r.kt)("p",null,"To keep our project organized, we'll create three new folders:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"contracts"),", for the Polygon contracts written in Solidity."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"assets"),", containing the digital asset we will mint as an NFT."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"scripts"),", as helpers to drive the preparation and minting process.")),(0,r.kt)("p",null,"Execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir contracts assets scripts\n")),(0,r.kt)("p",null,"Lastly, we will add an image to the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," folder. This image will be our artwork that we will upload to NFT.Storage and mint on Polygon. We will name it ",(0,r.kt)("inlineCode",{parentName:"p"},"MyExampleNFT.png")," for now. If you do not have some nice art ready, you can ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/bafkreiawxb4aji744637trok275odl33ioiijsvvahnat2kw5va3at45mu"},"download a simple pattern"),"."),(0,r.kt)("h2",{id:"minting-your-nft"},"Minting your NFT"),(0,r.kt)("h3",{id:"storing-asset-data-with-nftstorage"},"Storing asset data with NFT.Storage"),(0,r.kt)("p",null,"We will use NFT.Storage to store our digital asset and its metadata. NFT.Storage guarantees immutability and durability by uploading your digital asset to Filecoin and IPFS automatically. IPFS and Filecoin operate on content identifiers (CID) for immutable referencing. IPFS will provide fast retrieval with its geo-replicated caching and Filecoin guarantees durability with incentivized storage providers."),(0,r.kt)("p",null,"Create a script called ",(0,r.kt)("inlineCode",{parentName:"p"},"store-asset.mjs")," below the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," directory. The contents are listed below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NFTStorage, File } from \"nft.storage\"\nimport fs from 'fs'\nimport dotenv from 'dotenv'\ndotenv.config()\n\nconst { NFT_STORAGE_API_KEY } = process.env\n\nasync function storeAsset() {\n   const client = new NFTStorage({ token: NFT_STORAGE_API_KEY })\n   const metadata = await client.store({\n       name: 'ExampleNFT',\n       description: 'My ExampleNFT is an awesome artwork!',\n       image: new File(\n           [await fs.promises.readFile('assets/MyExampleNFT.png')],\n           'MyExampleNFT.png',\n           { type: 'image/png' }\n       ),\n   })\n   console.log(\"Metadata stored on Filecoin and IPFS with URL:\", metadata.url)\n}\n\nstoreAsset()\n   .then(() => process.exit(0))\n   .catch((error) => {\n       console.error(error);\n       process.exit(1);\n   });\n")),(0,r.kt)("p",null,"The main part of the script is the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeAsset")," function. It creates a new client connecting to NFT.Storage using the API key you created earlier. Next we introduce the metadata consisting of name, description, and the image. Note that we are reading the NFT asset directly from the file system from the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," directory. At the end of the function we will print the metadata URL as we will use it later when creating the NFT on Polygon."),(0,r.kt)("p",null,"After setting up the script, you can execute it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/store-asset.mjs\n")),(0,r.kt)("p",null,"Your output should look like the listing below, where ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH")," is the CID to the art you just stored."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Metadata stored on Filecoin/IPFS at URL: ipfs://HASH/metadata.json\n")),(0,r.kt)("h3",{id:"creating-your-nft-on-polygon"},"Creating your NFT on Polygon"),(0,r.kt)("h4",{id:"create-the-smart-contract-for-minting"},"Create the smart contract for minting"),(0,r.kt)("p",null,"First, we will create a smart contract that will be used to mint the NFT. Since Polygon is compatible with Ethereum, we will write the smart contract in ",(0,r.kt)("a",{parentName:"p",href:"https://soliditylang.org"},"Solidity"),". Create a new file for our NFT smart contract called ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleNFT.sol")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," directory. You can copy the code of the listing below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.12;\n\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/utils/Counters.sol";\nimport "@openzeppelin/contracts/access/Ownable.sol";\n\ncontract ExampleNFT is ERC721URIStorage, Ownable {\n   using Counters for Counters.Counter;\n   Counters.Counter private _tokenIds;\n\n   constructor() ERC721("NFT", "ENFT") {}\n\n   function mintNFT(address recipient, string memory tokenURI)\n       public onlyOwner\n       returns (uint256)\n   {\n       _tokenIds.increment();\n\n       uint256 newItemId = _tokenIds.current();\n       _mint(recipient, newItemId);\n       _setTokenURI(newItemId, tokenURI);\n\n       return newItemId;\n   }\n}\n')),(0,r.kt)("p",null,"To be a valid NFT, your smart contract must implement all the methods of the ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721 standard"),". We use the implementation of the ",(0,r.kt)("a",{parentName:"p",href:"https://openzeppelin.com"},"OpenZeppelin")," library, which already provides a set of basic functionalities and adheres to the standard."),(0,r.kt)("p",null,"At the top of our smart contract, we import three OpenZeppelin smart contract classes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\\@openzeppelin/contracts/token/ERC721/ERC721.sol")," contains the implementation of the basic methods of the ERC-721 standard, which our NFT smart contract will inherit. We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ERC721URIStorage,")," which is an extension to store not just the assets but also metadata as a JSON file off-chain. Like the contract, this JSON file needs to adhere to ERC-721.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\\@openzeppelin/contracts/utils/Counters.sol")," provides counters that can only be incremented or decremented by one. Our smart contract uses a counter to keep track of the total number of NFTs minted and to set the unique ID on our new NFT.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\\@openzeppelin/contracts/access/Ownable.sol")," sets up access control on our smart contract, so only the owner of the smart contract (you) can mint NFTs."))),(0,r.kt)("p",null,"After our import statements, we have our custom NFT smart contract, which contains a counter, a constructor, and a method to actually mint the NFT. Most of the hard work is done by the base contract inherited from OpenZeppelin, which implements most of the methods we require to create an NFT adhering to the ERC-721 standard."),(0,r.kt)("p",null,"The counter keeps track of the total number of NFTs minted, which is used in the minting method as a unique identifier for the NFT."),(0,r.kt)("p",null,"In the constructor, we pass in two string arguments for the name of the smart contract and the symbol (represented in wallets). You can change them to whatever you like."),(0,r.kt)("p",null,"Finally, we have our method ",(0,r.kt)("inlineCode",{parentName:"p"},"mintNFT")," that allows us to actually mint the NFT. The method is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyOwner")," to make sure it can only be executed by the owner of the smart contract."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"address recipient")," specifies the address that will receive the NFT at first."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string memory tokenURI")," is a URL that should resolve to a JSON document that describes the NFT's metadata. In our case it's already stored on NFT.Storage. We can use the returned IPFS link to the metadata JSON file during the execution of the method."),(0,r.kt)("p",null,"Inside the method, we increment the counter to receive a new unique identifier for our NFT. Then we call the methods provided by the base contract from OpenZeppelin to mint the NFT to the recipient with the newly created identifier and setting the URI of the metadata. The method returns the unique identifier after execution."),(0,r.kt)("h4",{id:"deploy-the-smart-contract-to-polygon"},"Deploy the Smart Contract to Polygon"),(0,r.kt)("p",null,"Now, it's time to deploy our smart contract to Polygon. Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy-contract.mjs")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," directory. Copy the contents of the listing below into that file and save it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function deployContract() {\n const ExampleNFT = await ethers.getContractFactory("ExampleNFT")\n const exampleNFT = await ExampleNFT.deploy()\n await exampleNFT.deployed()\n // This solves the bug in Mumbai network where the contract address is not the real one\n const txHash = exampleNFT.deployTransaction.hash\n const txReceipt = await ethers.provider.waitForTransaction(txHash)\n const contractAddress = txReceipt.contractAddress\n console.log("Contract deployed to address:", contractAddress)\n}\n\ndeployContract()\n .then(() => process.exit(0))\n .catch((error) => {\n   console.error(error);\n   process.exit(1);\n });\n')),(0,r.kt)("p",null,"Deploying the contract is done with the helper functions provided by the hardhat library. First, we get the smart contract we created in the previous step with the provided factory. Then we deploy it by calling the respective method and wait for the deployment to be completed. There are a few more lines below the described code to get the correct address in the testnet environment. Save the ",(0,r.kt)("inlineCode",{parentName:"p"},"mjs")," file."),(0,r.kt)("p",null,"Execute the script with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai\n")),(0,r.kt)("p",null,"If everything is correct, you will see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Contract deployed to address: 0x{YOUR_CONTRACT_ADDRESS}\n")),(0,r.kt)("p",null,"Note that you will need the printed contract address in the minting step. You can copy and paste it into a separate text file and save it for later. This is necessary so the minting script can call the minting method of that specific contract."),(0,r.kt)("h4",{id:"minting-the-nft-on-polygon"},"Minting the NFT on Polygon"),(0,r.kt)("p",null,"Minting the NFT is now merely calling the contract we just deployed to Polygon. Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"mint-nft.mjs")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," directory and copy this code from the listing below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'const CONTRACT_ADDRESS = "0x00"\nconst META_DATA_URL = "ipfs://XX"\n\nasync function mintNFT(contractAddress, metaDataURL) {\n   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")\n   const [owner] = await ethers.getSigners()\n   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)\n   console.log("NFT minted to: ", owner.address)\n}\n\nmintNFT(CONTRACT_ADDRESS, META_DATA_URL)\n   .then(() => process.exit(0))\n   .catch((error) => {\n       console.error(error);\n       process.exit(1);\n   });\n')),(0,r.kt)("p",null,"Edit the first two lines to insert your ",(0,r.kt)("strong",{parentName:"p"},"contract address")," from the earlier deployment and the ",(0,r.kt)("strong",{parentName:"p"},"metadata URL")," that was returned when storing the asset with NFT.Storage. The rest of the script sets up the call to your smart contract with you as the to-be owner of the NFT and the pointer to the metadata stored on IPFS."),(0,r.kt)("p",null,"Next, run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run scripts/mint-nft.mjs --network PolygonMumbai\n")),(0,r.kt)("p",null,"You can expect to see the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NFT minted to: 0x<YOUR_WALLET_ADDRESS>\n")),(0,r.kt)("p",null,"Looking for the sample code from this tutorial? You can find it in the polygon-nft.storage-demo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/itsPiyushMaheshwari/Polygon-nft.storage-demo"},"link")," Github repo."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, we learned how to mint a NFT end-to-end with Polygon and NFT.Storage. This technology combination results in proper decentralization and guarantees ",(0,r.kt)("em",{parentName:"p"},"scalability"),", ",(0,r.kt)("em",{parentName:"p"},"durability"),", and ",(0,r.kt)("em",{parentName:"p"},"immutability"),"."),(0,r.kt)("p",null,"We deployed a custom smart contract to mint our NFT specific to our needs. For this tutorial, we used a simple example based on the ERC-721 standard. However, you can also define complex logic that governs your NFT life cycle. For more complex use cases, the successor standard ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/"},"ERC-1155")," is a good place to start. OpenZeppelin, the library we use in our tutorial offers a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/wizard"},"contracts wizard")," that helps create NFT contracts."),(0,r.kt)("p",null,"Successful minting can be seen as the start of the valuable phase of the NFT. The NFT can then be used to prove ownership and can be transferred to other users. Reasons to transfer a NFT might include a successful sale on one of the NFT marketplaces like ",(0,r.kt)("a",{parentName:"p",href:"https://opensea.io"},"OpenSea"),", or a different type of event such as acquiring an item in a NFT based game. Exploring the rich possibilities for NFTs is definitely an exciting next step."),(0,r.kt)("p",null,"If you'd like help building your NFT project with NFT.storage, we encourage you to join the ",(0,r.kt)("inlineCode",{parentName:"p"},"#nft-storage")," channel on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Z4H6tdECb9"},"Discord")," and ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C021JJRH26B"},"Slack"),"."))}u.isMDXComponent=!0}}]);