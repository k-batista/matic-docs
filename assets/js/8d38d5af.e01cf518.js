"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[59042],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},17522:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"reward-pool",title:"RewardPool",description:"The smart contract for the reward mechanism for Edge",keywords:["docs","polygon","edge","reward","rewards","pool"]},d=void 0,c={unversionedId:"supernets/contracts/reward-pool",id:"supernets/contracts/reward-pool",title:"RewardPool",description:"The smart contract for the reward mechanism for Edge",source:"@site/docs/supernets/contracts/reward-pool.md",sourceDirName:"supernets/contracts",slug:"/supernets/contracts/reward-pool",permalink:"/matic-docs/docs/supernets/contracts/reward-pool",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/supernets/contracts/reward-pool.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"reward-pool",title:"RewardPool",description:"The smart contract for the reward mechanism for Edge",keywords:["docs","polygon","edge","reward","rewards","pool"]}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Functions",id:"functions",level:2},{value:"distributeReward",id:"distributereward",level:3},{value:"deposit",id:"deposit",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"claimRewards",id:"claimrewards",level:3},{value:"balanceOf",id:"balanceof",level:3},{value:"totalRewardsEarned",id:"totalrewardsearned",level:3},{value:"claimableRewards",id:"claimablerewards",level:3},{value:"magnitude",id:"magnitude",level:3}],s={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RewardPool")," is library for the management and distributiion validator rewards.\nEach validator has a reward pool for delegators delegating funds to them."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"distributereward"},"distributeReward"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function distributeReward(RewardPool storage pool, uint256 amount) internal {\n    if (amount == 0) return;\n    if (pool.supply == 0) revert NoTokensDelegated(pool.validator);\n    pool.magnifiedRewardPerShare += (amount * magnitude()) / pool.supply;\n}\n")),(0,o.kt)("p",null,"This function distributes an amount of rewards to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool"),".\nIf amount is 0 or ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.supply")," is 0, this function does nothing.\nOtherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardPerShare")," is incremented by amount multiplied\nby ",(0,o.kt)("inlineCode",{parentName:"p"},"magnitude")," divided by ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.supply"),"."),(0,o.kt)("h3",{id:"deposit"},"deposit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function deposit(\n    RewardPool storage pool,\n    address account,\n    uint256 amount\n) internal {\n    pool.balances[account] += amount;\n    pool.supply += amount;\n    pool.magnifiedRewardCorrections[account] -= (pool.magnifiedRewardPerShare * amount).toInt256Safe();\n}\n")),(0,o.kt)("p",null,"This function credits the balance of account in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool")," by amount.\n",(0,o.kt)("inlineCode",{parentName:"p"},"pool.balances[account]")," is incremented by amount, ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.supply"),"\nis incremented by amount, and ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardCorrections[account]")," is\ndecremented by amount multiplied by ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardPerShare")," after being\nconverted to an int256 using ",(0,o.kt)("inlineCode",{parentName:"p"},"toInt256Safe"),"."),(0,o.kt)("h3",{id:"withdraw"},"withdraw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function withdraw(\n    RewardPool storage pool,\n    address account,\n    uint256 amount\n) internal {\n    pool.balances[account] -= amount;\n    pool.supply -= amount;\n    pool.magnifiedRewardCorrections[account] += (pool.magnifiedRewardPerShare * amount).toInt256Safe();\n}\n")),(0,o.kt)("p",null,"This function decrements the balance of account in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool")," by\namount. ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.balances[account]")," is decremented by amount, ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.supply")," is\ndecremented by amount, and ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardCorrections[account]")," is\nincremented by amount multiplied by ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardPerShare")," after being\nconverted to an int256 using ",(0,o.kt)("inlineCode",{parentName:"p"},"toInt256Safe()"),"."),(0,o.kt)("h3",{id:"claimrewards"},"claimRewards"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function claimRewards(RewardPool storage pool, address account) internal returns (uint256 reward) {\n    reward = claimableRewards(pool, account);\n    pool.claimedRewards[account] += reward;\n}\n")),(0,o.kt)("p",null,"This function increments ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.claimedRewards[account]")," by the claimable rewards\nfor account in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool"),", and returns the amount of rewards claimed. The claimable\nrewards for account can be calculated using ",(0,o.kt)("inlineCode",{parentName:"p"},"claimableRewards")," ."),(0,o.kt)("h3",{id:"balanceof"},"balanceOf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function balanceOf(RewardPool storage pool, address account) internal view returns (uint256) {\n    return pool.balances[account];\n}\n")),(0,o.kt)("p",null,"This function returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"balance")," (i.e. amount delegated) of account in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool"),"."),(0,o.kt)("h3",{id:"totalrewardsearned"},"totalRewardsEarned"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function totalRewardsEarned(RewardPool storage pool, address account) internal view returns (uint256) {\n    int256 magnifiedRewards = (pool.magnifiedRewardPerShare * pool.balances[account]).toInt256Safe();\n    uint256 correctedRewards = (magnifiedRewards + pool.magnifiedRewardCorrections[account]).toUint256Safe();\n    return correctedRewards / magnitude();\n}\n")),(0,o.kt)("p",null,"This function returns the total rewards earned by account in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool"),".\nThis is calculated by first multiplying ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardPerShare")," by\n",(0,o.kt)("inlineCode",{parentName:"p"},"pool.balances[account]"),", converting the result to an int256 using ",(0,o.kt)("inlineCode",{parentName:"p"},"toInt256Safe"),",\nand then adding ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.magnifiedRewardCorrections[account]"),".\nThe final result is then divided by ",(0,o.kt)("inlineCode",{parentName:"p"},"magnitude")," and returned as a ",(0,o.kt)("inlineCode",{parentName:"p"},"uint256"),"."),(0,o.kt)("h3",{id:"claimablerewards"},"claimableRewards"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function claimableRewards(RewardPool storage pool, address account) internal view returns (uint256) {\n    return totalRewardsEarned(pool, account).sub(pool.claimedRewards[account]);\n}\n")),(0,o.kt)("p",null,"This function returns the amount of claimable rewards for account in the pool.\nThis is calculated by subtracting ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.claimedRewards[account]")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"totalRewardsEarned"),"."),(0,o.kt)("h3",{id:"magnitude"},"magnitude"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function magnitude() private pure returns (uint256) {\n        return 1e18;\n    }\n")),(0,o.kt)("p",null,"This function returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"magnitude")," of the reward multiplier."))}m.isMDXComponent=!0}}]);