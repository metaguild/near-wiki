"use strict";(self.webpackChunknear_wiki=self.webpackChunknear_wiki||[]).push([[3390],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6384:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"hardware",title:"Hardware Requirements for Validator Node",sidebar_label:"Hardware Requirements",description:"NEAR Validator Node Hardware Requirements"},p="Hardware requirements",d={unversionedId:"validator/validator-docs/hardware",id:"validator/validator-docs/hardware",isDocsHomePage:!1,title:"Hardware Requirements for Validator Node",description:"NEAR Validator Node Hardware Requirements",source:"@site/docs/validator/validator-docs/hardware-requirements.md",sourceDirName:"validator/validator-docs",slug:"/validator/validator-docs/hardware",permalink:"/docs/validator/validator-docs/hardware",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/validator/validator-docs/hardware-requirements.md",tags:[],version:"current",frontMatter:{id:"hardware",title:"Hardware Requirements for Validator Node",sidebar_label:"Hardware Requirements",description:"NEAR Validator Node Hardware Requirements"},sidebar:"tutorialSidebar",previous:{title:"Training",permalink:"/docs/validator/validator-training"},next:{title:"Docs",permalink:"/docs/validator/validator-docs/intro"}},c=[{value:"Recommended Hardware Specifications",id:"recommended-hardware-specifications",children:[],level:2},{value:"Minimal Hardware Specifications",id:"minimal-hardware-specifications",children:[],level:2},{value:"Cost Estimation",id:"cost-estimation",children:[],level:2}],m={toc:c};function s(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hardware-requirements"},"Hardware requirements"),(0,i.kt)("p",null,"This page covers the minimum and recommended hardware requirements for engaging with the NEAR platform as a validator node."),(0,i.kt)("h2",{id:"recommended-hardware-specifications"},"Recommended Hardware Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Hardware"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Recommended Specifications"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4-Core ","(","8-Thread",")"," Intel i7/Xeon or equivalent with AVX support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,i.kt)("td",{parentName:"tr",align:"left"},"16GB DDR4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,i.kt)("td",{parentName:"tr",align:"left"},"200GB SSD ","(","HDD will be enough for localnet only",")")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Verify AVX support on Linux by issuing the command ",(0,i.kt)("inlineCode",{parentName:"em"},"$ lscpu | grep -oh avx"),". If the output is empty, your CPU is not supported.")),(0,i.kt)("h2",{id:"minimal-hardware-specifications"},"Minimal Hardware Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Hardware"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Minimal Specifications"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2-Core ","(","4-Thread",")"," Intel i7/Xeon or equivalent with AVX support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"RAM"),(0,i.kt)("td",{parentName:"tr",align:"left"},"8GB DDR4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage"),(0,i.kt)("td",{parentName:"tr",align:"left"},"150GB SSD ","(","HDD will be enough for localnet only",")")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Verify AVX support on Linux by issuing the command ",(0,i.kt)("inlineCode",{parentName:"em"},"$ lscpu | grep -oh avx"),". If the output is empty, your CPU is not supported.")),(0,i.kt)("h2",{id:"cost-estimation"},"Cost Estimation"),(0,i.kt)("p",null,"Estimated monthly costs depending on operating system:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Cloud Provider"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Machine Size"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Linux"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"AWS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"c5.2xlarge"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$250 CPU + $20 storage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GCP"),(0,i.kt)("td",{parentName:"tr",align:"left"},"c2-standard-8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$220 CPU + $20 storage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Azure"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard","_","F8s","_","v2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"$180 CPU + $10 storage")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Resources for Cost Estimation"),"  "),(0,i.kt)("p",{parentName:"blockquote"}," All prices reflect ",(0,i.kt)("em",{parentName:"p"},"reserved instances")," which offer deep discounts on all platforms with a 1 year commitment "),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"AWS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cpu: ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ec2/pricing/reserved-instances/pricing"},"https://aws.amazon.com/ec2/pricing/reserved-instances/pricing")),(0,i.kt)("li",{parentName:"ul"},"storage: ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ebs/pricing"},"https://aws.amazon.com/ebs/pricing")))),(0,i.kt)("li",{parentName:"ul"},"GCP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cpu: ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/vm-instance-pricing"},"https://cloud.google.com/compute/vm-instance-pricing")),(0,i.kt)("li",{parentName:"ul"},"storage: ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/disks-image-pricing"},"https://cloud.google.com/compute/disks-image-pricing")))),(0,i.kt)("li",{parentName:"ul"},"Azure \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/calculator"},"https://azure.microsoft.com/en-us/pricing/calculator")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Got a question?  ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/nearprotocol"},"Ask it on StackOverflow!"))))}s.isMDXComponent=!0}}]);