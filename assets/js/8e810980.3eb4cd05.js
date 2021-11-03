"use strict";(self.webpackChunknear_wiki=self.webpackChunknear_wiki||[]).push([[9338],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=i(n),d=o,y=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(y,c(c({ref:t},u),{},{components:n})):a.createElement(y,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),c=["components"],s={},l="Access Keys",i={unversionedId:"technology/technical-documentation/access-keys",id:"technology/technical-documentation/access-keys",isDocsHomePage:!1,title:"Access Keys",description:"How Access Keys Work on Other Blockchains",source:"@site/docs/technology/technical-documentation/access-keys.md",sourceDirName:"technology/technical-documentation",slug:"/technology/technical-documentation/access-keys",permalink:"/wiki/docs/technology/technical-documentation/access-keys",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/technology/technical-documentation/access-keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical Documentation",permalink:"/wiki/docs/technology/technical-documentation/README"},next:{title:"Analytics",permalink:"/wiki/docs/resources/analytics"}},u=[{value:"How Access Keys Work on Other Blockchains",id:"how-access-keys-work-on-other-blockchains",children:[],level:2},{value:"What does NEAR do Instead?",id:"what-does-near-do-instead",children:[],level:2},{value:"Full and FunctionCall Access Keys",id:"full-and-functioncall-access-keys",children:[{value:"Why should you care?",id:"why-should-you-care",children:[],level:3},{value:"Full Access Keys",id:"full-access-keys",children:[],level:3},{value:"FunctionCall Access Keys",id:"functioncall-access-keys",children:[],level:3}],level:2},{value:"How can you get Started?",id:"how-can-you-get-started",children:[],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-keys"},"Access Keys"),(0,r.kt)("h2",{id:"how-access-keys-work-on-other-blockchains"},"How Access Keys Work on Other Blockchains"),(0,r.kt)("p",null,"On other blockchains, access keys often follow the Public and Private Key Pair pattern. Public keys are used to identify an account, and Private Keys are used for signing transactions."),(0,r.kt)("p",null,"If anyone has access to your private key, they have access to all the cryptocurrency in your account."),(0,r.kt)("h2",{id:"what-does-near-do-instead"},"What does NEAR do Instead?"),(0,r.kt)("p",null,"NEAR uses a human-readable account system where the public identifier is the name you create. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Bob100.near"))," is what you would find on NEAR"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Public Key: 0x123xxxxx....."))," is what you would find on other blockchains as a means of identifying accounts")),(0,r.kt)("p",null,"Instead of a crazy string of random numbersInstead of a crazy string of random numbers that you have to write down and keep safe, you simply use an account name similar to that of your average social media username."),(0,r.kt)("p",null,"On NEAR, there are two types of Access Keys that these accounts manage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full Access Keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FunctionCall Access Keys"))),(0,r.kt)("h2",{id:"full-and-functioncall-access-keys"},"Full and FunctionCall Access Keys"),(0,r.kt)("p",null,"Let's talk about what these keys are and how do they work. The difference between these keys is based on the level of permissions a user wants to grant a decentralized application (or dApp)."),(0,r.kt)("h3",{id:"why-should-you-care"},"Why should you care?"),(0,r.kt)("p",null,"FunctionCall access keys adds a layer of protection from malicious Apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requires user's approval per transaction"),(0,r.kt)("li",{parentName:"ul"},"Limits excessive Gas fees")),(0,r.kt)("h3",{id:"full-access-keys"},"Full Access Keys"),(0,r.kt)("p",null,"First, let's review full access keys in detail. An application with a full access key has the ability to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Freely utilize all of your tokens"),(0,r.kt)("li",{parentName:"ul"},"Create new accounts funded and managed by your account"),(0,r.kt)("li",{parentName:"ul"},"Delete accounts"),(0,r.kt)("li",{parentName:"ul"},"Make Contract Calls with no ",(0,r.kt)("a",{parentName:"li",href:"https://docs.near.org/docs/concepts/gas"},"Gas")," limit"),(0,r.kt)("li",{parentName:"ul"},"Deploy ",(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/topics/smart-contracts"},"Contracts")," onto the account (each account can have one contract deployed onto it at a time)"),(0,r.kt)("li",{parentName:"ul"},"Full access to your NEAR tokens with the ability to stake them or transfer them without secondary approval"),(0,r.kt)("li",{parentName:"ul"},"Create additional keys"),(0,r.kt)("li",{parentName:"ul"},"Delete keys")),(0,r.kt)("p",null,"The NEAR wallet, for example, is a dApp that utilizes a Full Access Key and is given the key-pair to that account upon the account's creation."),(0,r.kt)("p",null,"There can be multiple full access keys per one account, which can be a good or a bad thing. For example, say you find out that someone has one of your full-access keys. You can resecure your account by deleting a full access key."),(0,r.kt)("p",null,"Of course, you should be very careful with what applications you give full access to. Generally, you do not want to grant full access to any application if you can avoid it."),(0,r.kt)("p",null,"To protect users from malicious applications, NEAR can limit the kinds of permission an application has. That's where FunctionCall Access Key comes in."),(0,r.kt)("h3",{id:"functioncall-access-keys"},"FunctionCall Access Keys"),(0,r.kt)("p",null,"FunctionCall Access Keys Have unique restrictions designed to help protect users."),(0,r.kt)("p",null,"These kinds of keys require the user's approval to transfer NEAR via redirect to the NEAR wallet."),(0,r.kt)("p",null,"The developer can specify with View and Change Methods the user can interact with using their account."),(0,r.kt)("p",null,"Each transaction that changes the state of the NEAR blockchain incurs a fee. However, FunctionCall Keys allows fees of up to only ",(0,r.kt)("strong",{parentName:"p"},"0.25 NEAR")," to be accrued per transaction."),(0,r.kt)("h2",{id:"how-can-you-get-started"},"How can you get Started?"),(0,r.kt)("p",null,"Head on over to ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.near.org"},"wallet.near.org")," to get started creating your ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet")," wallet and find me on the ",(0,r.kt)("a",{parentName:"p",href:"https://near.chat"},"NEAR Discord channel"),"."),(0,r.kt)("p",null,"Then head on over to ",(0,r.kt)("a",{parentName:"p",href:"https://awesomenear.com"},"awesomenear.com")," to explore some of the cool applications out there built on NEAR, or head on over to ",(0,r.kt)("a",{parentName:"p",href:"https://near.org"},"near.org")," to get started on developing your NEAR project."))}h.isMDXComponent=!0}}]);