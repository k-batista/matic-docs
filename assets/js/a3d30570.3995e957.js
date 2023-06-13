"use strict";(self.webpackChunkmatic_docs=self.webpackChunkmatic_docs||[]).push([[7895],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17146:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],s={id:"report-bug",title:"Report an issue",description:"Template and instructions for reporting a Polygon Edge issue.",keywords:["docs","polygon","edge","issue","bug","report","template"]},a=void 0,l={unversionedId:"edge/community/report-bug",id:"edge/community/report-bug",title:"Report an issue",description:"Template and instructions for reporting a Polygon Edge issue.",source:"@site/docs/edge/community/report-bug.md",sourceDirName:"edge/community",slug:"/edge/community/report-bug",permalink:"/matic-docs/docs/edge/community/report-bug",draft:!1,editUrl:"https://github.com/maticnetwork/matic-docs/tree/master/docs/edge/community/report-bug.md",tags:[],version:"current",lastUpdatedBy:"k-batista",lastUpdatedAt:1686624865,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{id:"report-bug",title:"Report an issue",description:"Template and instructions for reporting a Polygon Edge issue.",keywords:["docs","polygon","edge","issue","bug","report","template"]},sidebar:"edge",previous:{title:"Propose a new feature",permalink:"/matic-docs/docs/edge/community/propose-new-feature"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Issue Template",id:"issue-template",level:2},{value:"Subject of the issue",id:"subject-of-the-issue",level:2},{value:"Description",id:"description",level:3},{value:"Your environment",id:"your-environment",level:3},{value:"Steps to reproduce",id:"steps-to-reproduce",level:3},{value:"Expected behaviour",id:"expected-behaviour",level:3},{value:"Actual behaviour",id:"actual-behaviour",level:3},{value:"Logs",id:"logs",level:3},{value:"Proposed solution",id:"proposed-solution",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Sometimes things break. ",(0,i.kt)("br",null),"\nIt's always better to let the team know about any issues you might be encountering.",(0,i.kt)("br",null),"\nOn the Polygon Edge GitHub page, you can file a new issue, and start discussing it with the team."),(0,i.kt)("h2",{id:"issue-template"},"Issue Template"),(0,i.kt)("h2",{id:"subject-of-the-issue"},"[Subject of the issue]"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Describe your issue in as much detail as possible here"),(0,i.kt)("h3",{id:"your-environment"},"Your environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OS and version"),(0,i.kt)("li",{parentName:"ul"},"version of the Polygon Edge"),(0,i.kt)("li",{parentName:"ul"},"branch that causes this issue")),(0,i.kt)("h3",{id:"steps-to-reproduce"},"Steps to reproduce"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tell us how to reproduce this issue ",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"Where the issue is, if you know ",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"Which commands triggered the issue, if any")),(0,i.kt)("h3",{id:"expected-behaviour"},"Expected behaviour"),(0,i.kt)("p",null,"Tell us what should happen"),(0,i.kt)("h3",{id:"actual-behaviour"},"Actual behaviour"),(0,i.kt)("p",null,"Tell us what happens instead"),(0,i.kt)("h3",{id:"logs"},"Logs"),(0,i.kt)("p",null,"Please paste any logs here that demonstrate the issue, if they exist"),(0,i.kt)("h3",{id:"proposed-solution"},"Proposed solution"),(0,i.kt)("p",null,"If you have an idea of how to fix this issue, please write it down here, so we can begin discussing it"))}m.isMDXComponent=!0}}]);