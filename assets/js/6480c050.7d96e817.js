"use strict";(self.webpackChunknear_wiki=self.webpackChunknear_wiki||[]).push([[1958],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),k=r,m=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},124:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},p="Running a Validator (KR)",u={unversionedId:"validator/validator-guides/running-a-validator-kr",id:"validator/validator-guides/running-a-validator-kr",isDocsHomePage:!1,title:"Running a Validator (KR)",description:"\uacf5\uc2dd \ubc30\ud0c0\ub137\uc5d0 \uc2a4\ud14c\uc774\ud0b9\ud558\uae30",source:"@site/docs/validator/validator-guides/running-a-validator-kr.md",sourceDirName:"validator/validator-guides",slug:"/validator/validator-guides/running-a-validator-kr",permalink:"/near-wiki/docs/validator/validator-guides/running-a-validator-kr",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/validator/validator-guides/running-a-validator-kr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/near-wiki/docs/validator/validator-guides/intro"},next:{title:"Running a Validator (PT)",permalink:"/near-wiki/docs/validator/validator-guides/running-a-validator-pt"}},d=[{value:"\uacf5\uc2dd \ubc30\ud0c0\ub137\uc5d0 \uc2a4\ud14c\uc774\ud0b9\ud558\uae30",id:"\uacf5\uc2dd-\ubc30\ud0c0\ub137\uc5d0-\uc2a4\ud14c\uc774\ud0b9\ud558\uae30",children:[{value:"\uc2dc\uc791\uc804 \uc774\ubd80\ubd84\uc744 \uc77d\uc5b4\uc8fc\uc138\uc694_",id:"\uc2dc\uc791\uc804-\uc774\ubd80\ubd84\uc744-\uc77d\uc5b4\uc8fc\uc138\uc694_",children:[],level:3}],level:2},{value:"\ub178\ub4dc \uc694\uad6c\uc0ac\ud56d",id:"\ub178\ub4dc-\uc694\uad6c\uc0ac\ud56d",children:[],level:2},{value:"\ud658\uacbd\uc744 \uc124\uc815\ud558\uc138\uc694.",id:"\ud658\uacbd\uc744-\uc124\uc815\ud558\uc138\uc694",children:[{value:"\ub178\ub4dc \uc2e4\ud589",id:"\ub178\ub4dc-\uc2e4\ud589",children:[],level:3}],level:2},{value:"\uc2a4\ud14c\uc774\ud0b9 \ud2b8\ub80c\uc81d\uc158\uc758 \uc804\uc1a1",id:"\uc2a4\ud14c\uc774\ud0b9-\ud2b8\ub80c\uc81d\uc158\uc758-\uc804\uc1a1",children:[],level:2},{value:"\uac80\uc99d\uc778\uc774 \ub418\uae30 \uc704\ud574 \uc120\ud0dd\ubc1b\uae30",id:"\uac80\uc99d\uc778\uc774-\ub418\uae30-\uc704\ud574-\uc120\ud0dd\ubc1b\uae30",children:[],level:2},{value:"\uac80\uc99d\uc778\uc758 \ud604\uc7ac \ub9ac\uc2a4\ud2b8\uc640 \uc2a4\ud14c\uc774\ud06c \uc218\ub7c9 \ubcf4\uae30",id:"\uac80\uc99d\uc778\uc758-\ud604\uc7ac-\ub9ac\uc2a4\ud2b8\uc640-\uc2a4\ud14c\uc774\ud06c-\uc218\ub7c9-\ubcf4\uae30",children:[],level:2},{value:"Automatically re-staking",id:"automatically-re-staking",children:[],level:2},{value:"\uc790\ub3d9\ud654\ub41c \uc7ac-\uc2a4\ud14c\uc774\ud0b9",id:"\uc790\ub3d9\ud654\ub41c-\uc7ac-\uc2a4\ud14c\uc774\ud0b9",children:[],level:2}],s={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"running-a-validator-kr"},"Running a Validator (KR)"),(0,l.kt)("h2",{id:"\uacf5\uc2dd-\ubc30\ud0c0\ub137\uc5d0-\uc2a4\ud14c\uc774\ud0b9\ud558\uae30"},"\uacf5\uc2dd \ubc30\ud0c0\ub137\uc5d0 \uc2a4\ud14c\uc774\ud0b9\ud558\uae30"),(0,l.kt)("h3",{id:"\uc2dc\uc791\uc804-\uc774\ubd80\ubd84\uc744-\uc77d\uc5b4\uc8fc\uc138\uc694_"},"\uc2dc\uc791\uc804 \uc774\ubd80\ubd84\uc744 \uc77d\uc5b4\uc8fc\uc138\uc694","_"),(0,l.kt)("p",null,"Wait until your node is fully synced before you send a staking transaction. \uc2a4\ud14c\uc774\ud0b9 \ud2b8\ub80c\uc81d\uc158\uc744 \uc804\uc1a1\ud558\uae30 \uc804, \ub2f9\uc2e0\uc758 \ub178\ub4dc\uac00 \uc644\uc804\ud788 \uc2f1\ud06c\ub420\ub54c \uae4c\uc9c0 \uae30\ub2e4\ub9ac\uc138\uc694. \uc2f1\ud06c\uac00 \ub418\uc9c0 \uc54a\uc740 \ub178\ub4dc\ub294 \ube14\ub85d\uc744 \uc0dd\uc131\ud558\uac70\ub098 \uac80\uc99d\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uac80\uc99d\uc778\uc5d0 \uc120\uc815\ub418\ub354\ub77c\ub3c4 \uac80\uc99d\uc778 \ud480\uc5d0\uc11c \ucad2\uaca8\ub098\uac70\ub098, \uc801\ub2f9\ud55c \uc5c5\ud0c0\uc784\uc744 \uc720\uc9c0\ud558\uc9c0 \ubabb\ud560 \uacbd\uc6b0 \ub2f9\uc2e0\uc758 \ubcf4\uc0c1\uc744 \uc783\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\uc608\uc2dc: \ud574\ub2f9 epoch\uc5d0 \ud560\ub2f9\ub41c \uc22b\uc790\uc758 \ube14\ub85d\uc744 \uac80\uc99d\ud558\uac70\ub098 \uc0dd\uc131)"),(0,l.kt)("p",null,"\ud604\uc7ac \uc2a4\ud14c\uc774\ud0b9\uc740 ",(0,l.kt)("em",{parentName:"p"},"TestNet")," \uc5d0\uc11c \ube44\ud65c\uc131\ud654 \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0, ","_","BetaNet","_","\uc5d0\uc11c \uc791\uc5c5\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \ub2f9\uc2e0\uc758 NEAR CLI \ub2e4\uc74c \ub450\ub2e8\uacc4\ub97c \ud1b5\ud574 BetaNet\uc73c\ub85c \uc124\uc815\ud558\uc138\uc694."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ud604\uc7ac \uc138\uc158\uc744 \uc704\ud574\uc11c: ",(0,l.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=betanet")," \ub97c \uc2e4\ud589\ud558\uc138\uc694."),(0,l.kt)("li",{parentName:"ol"},"\uba38\uc2e0\uc758 \uc7ac\uc2dc\uc791\uc5d0\ub3c4 \ub3d9\uc77c\ud55c \ud658\uacbd\uc744 \uc720\uc9c0\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.bashrc"),"\uc758 \ub05d\uc5d0, \ub3d9\uc77c\ud55c \ub77c\uc778\uc778 (",(0,l.kt)("inlineCode",{parentName:"li"},"export NODE_ENV=betanet"),") \ub97c \ucd94\uac00\ud558\uc138\uc694.")),(0,l.kt)("p",null,"\ub2e4\uc74c\uc758 \uc11c\ube44\uc2a4\ub4e4\uc744 \uc0ac\uc6a9\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u26d4\ufe0f TestNet"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u2705 BetaNet"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org"},"https://explorer.testnet.near.org")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://explorer.betanet.near.org"},"https://explorer.betanet.near.org"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://wallet.testnet.near.org"},"https://wallet.testnet.near.org")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://wallet.betanet.near.org"},"https://wallet.betanet.near.org"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://rpc.testnet.near.org"},"https://rpc.testnet.near.org")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://rpc.betanet.near.org"},"https://rpc.betanet.near.org"))))),(0,l.kt)("p",null,"BetaNet\uc740\uc8fc\uac04 Release\ub97c \uc704\ud574 \ub9e4\uc8fc \ud654\uc694\uc77c \uc624\ud6c4 6\uc2dc\uc5d0 \uc7ac\uc124\uc815\ub429\ub2c8\ub2e4. \uac80\uc99d\uc778 \uc0c1\ud0dc\ub97c \uc783\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8\ub97c \ud65c\uc131\ud654 \ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"nearup"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub178\ub4dc\ub97c \uc7ac\uc2dc\uc791\ud574\uc57c \ud560 \uac83\uc785\ub2c8\ub2e4. \ucd5c\uc2e0 \ub9b4\ub9ac\uc988\uac00 \uc5b8\uc81c \ubc30\ud3ec\ub420 \uac83\uc778\uc9c0 \uadf8\ub9ac\uace0 \uc5b8\uc81c \ub2f9\uc2e0\uc758 \ub178\ub4dc\ub97c \uc548\uc804\ud558\uac8c \uc7ac\uc2dc\uc791\ud560\uc9c0\ub97c \uc54c\uae30 \uc704\ud574\uc11c NEAR Protocol ",(0,l.kt)("a",{parentName:"p",href:"https://t.me/near_validators"},"validator channel on Telegram")," \uc774\ub098 ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/ZMPr3VB"},"Discord")," \uc5d0\uac00\uc785\ud558\uc138\uc694."),(0,l.kt)("h2",{id:"\ub178\ub4dc-\uc694\uad6c\uc0ac\ud56d"},"\ub178\ub4dc \uc694\uad6c\uc0ac\ud56d"),(0,l.kt)("p",null,"\uac80\uc99d\uc778\uc774 \ub418\uae30 \uc704\ud574\uc11c, \ub85c\uceec \uba38\uc2e0\uc5d0 \ub178\ub4dc\ub97c \uc6b4\uc601\ud558\uac70\ub098 \ub2e4\uc74c\uc758 \ucd5c\uc18c \uc694\uad6c\uc0ac\uc591\uc744 \uac00\uc9c4 \ud074\ub77c\uc6b0\ub4dc \uba38\uc2e0\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"At least 2 CPUs\nAt least 4GB RAM\nAt least 50 GB free disk\n")),(0,l.kt)("h2",{id:"\ud658\uacbd\uc744-\uc124\uc815\ud558\uc138\uc694"},"\ud658\uacbd\uc744 \uc124\uc815\ud558\uc138\uc694."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc911\uc694: \ucd5c\uc2e0 \ubc84\uc804\uc758 NEAR CLI 12.x"),"\uc758 \ub178\ub4dc\ubc84\uc804\uc744 \ud655\uc778\ud558\uc138\uc694."),(0,l.kt)("p",null,"\uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0, \ub2f9\uc2e0\uc758 \ud658\uacbd \uc124\uc815\uc744 \uc704\ud574 \uc544\ub798\uc758 \ub2e8\uacc4\ub97c \ub530\ub77c\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc624\ub798\uac78\ub9ac\uc9c0\uc54a\uc73c\ub2c8 \uac71\uc815 \ub9c8\uc2ed\uc2dc\uc624. \uc2a4\ud14c\uc774\ud06c\ub97c \uc704\ud574 \ub2e4\uc74c\uc744 \ud655\uc778\ud558\uc138\uc694"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud1a0\ud070\uc774 \uc788\ub294 ",(0,l.kt)("strong",{parentName:"li"},"BetaNet"),"\uc758 \uacc4\uc815. \ub9cc\uc77c \uc544\uc9c1 \uacc4\uc815\uc744 \uc124\uc815\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74, \ub2e4\uc74c\uc758 \ud398\uc774\ub85c \uac00\uc154\uc11c \uc124\uc815\uc744 \ud558\uace0 \ub3cc\uc544\uc624\uc2ed\uc2dc\uc624:",(0,l.kt)("a",{parentName:"li",href:"../../docs/develop/basics/create-account/"},"Create Account"),". \ub2e4\uc74c \ub9c1\ud06c\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9c8\uc2ed\uc2dc\uc624 ",(0,l.kt)("a",{parentName:"li",href:"https://wallet.betanet.near.org"},"BetaNet wallet"),"!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"near-cli"),", \uc740 \uc6b0\ub9ac\uc758 CLI \ub3c4\uad6c\ub85c\uc11c ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"node.js")," \uc640 ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm"),"\ub97c \uc694\uad6c\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc758 \ubc29\ubc95\uc73c\ub85c \uc774\ubbf8 node.js\uc640 npm\uc774 \uc124\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\ucee4\ub9e8\ub4dc \ub77c\uc778\uc744 \uc5fd\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ub2e4\uc74c\uc758 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"      node -v\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  \uc774 \uba85\ub839\uc5b4\ub294 \ub2f9\uc2e0\uc758 \ub178\ub4dc\ubc84\uc804\uc744 \ucee4\ub9e8\ub4dc\ub77c\uc778\uc5d0 \ubcf4\uc5ec\uc904 \uac83\uc785\ub2c8\ub2e4.\n  ```bash\n  npm -v\n")),(0,l.kt)("p",null,"\uc774 \uba85\ub839\uc5b4\ub294 \ub2f9\uc2e0\uc758 npm\ubc84\uc804\uc744 \ucee4\ub9e8\ub4dc\ub77c\uc778\uc5d0 \ubcf4\uc5ec\uc904 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74, \ub2e4\uc74c\uc758 \ub9c1\ud06c\ub85c \uac00\uc11c \uc124\uce58\ub97c \uc9c4\ud589\ud558\uc138\uc694",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js"),". \ub178\ub4dc\ub294 \uc8fc\ub85c npm\uc744 \uc790\ub3d9\uc73c\ub85c \uc124\uce58\ud55c\ub2e4\ub294 \uac83\uc744 \uae30\uc5b5\ud558\uc138\uc694. \uadf8\ub7ec\ub098 \ub9cc\uc57d npm\uc774 \uc124\uce58\ub418\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc124\uce58\ud558\uc138\uc694."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node\uc640 npm\uc774 \uc124\uce58\ub418\uc5c8\ub2e4\uba74 NEAR CLI \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uace0 \ub2e4\uc74c\uc744 \ub2f9\uc2e0\uc758 \ud130\ubbf8\ub110\uc5d0 \uc785\ub825\ud558\uc138\uc694.\n\n```bash\n# npm\uc73c\ub85c NEAR CLI \ub2e4\uc6b4 \ubc1b\uae30:\nnpm i -g near-cli\n")),(0,l.kt)("p",null,"NEAR CLIl\uc774 \uc124\uce58\ub418\uba74, \ub178\ub4dc\ub97c \uc2e4\ud589\ud558\uc138\uc694."),(0,l.kt)("h3",{id:"\ub178\ub4dc-\uc2e4\ud589"},"\ub178\ub4dc \uc2e4\ud589"),(0,l.kt)("p",null,"\uc774\uc81c \ubcf4\uc720\ud55c NEAR CLI \ub2f9\uc2e0\uc758 \ub178\ub4dc\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc744 \ucc38\uc870\ud558\uc138\uc694",(0,l.kt)("a",{parentName:"p",href:"https://github.com/near/nearup"},"Nearup documentation"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc911\uc694 \uc774 \ubd80\ubd84\uc5d0\uc11c \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ub9cc\ub4e4\uc5c8\ub2e8 \ub2f9\uc2e0\uc758 \uacc4\uc815\uc758 \uc774\ub984\uc778 \uacc4\uc815 ID\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\uc804\uc758 \ub2e8\uacc4\ub4e4\uc744 \uc644\ub8cc\ud588\ub358 \uc2a4\ud06c\ub9b0\uc73c\ub85c \ub3cc\uc544\uc624\uc138\uc694."),(0,l.kt)("p",null,"\uacc4\uc815 ID\uac00 \uc694\uad6c\ub420 \uacbd\uc6b0 \ub2f9\uc2e0\uc774 \uc2a4\ud14c\uc774\ud06c\ud558\uae38 \uc6d0\ud558\ub294 \uacc4\uc815\uc758 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694. \ub2f9\uc2e0\uc740 \uc2a4\ud0dc\uc774\ud0b9\uc744 \uc704\ud55c \uacf5\uac1c\ud0a4\ub97c \ubc18\ud658\ubc1b\uac8c \ub429\ub2c8\ub2e4; \uc774\uac83\uc740 \ub2e4\uc74c \ucc98\ub7fc \ubcf4\uc77c \uac83\uc785\ub2c8\ub2e4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Stake for user 'thefutureisnear.test' with 'ed25519:97JLghrxUQMaX2pcerVB5FNFu4qk8rx8J3fnWRyoEB7M'\n")),(0,l.kt)("p",null,"\ub2e4\uc74c \ub2e8\uacc4\ub97c \uc704\ud574 \uc774 validator_key \ub97c \ubcf5\uc0ac\ud574\ub450\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc774 \ud37c\ube14\ub9ac\ud0a4\ub294 \ub2e4\uc74c\uc758 near \ud30c\uc77c\ub4e4\uc5d0\uc11c\ub3c4 \ucc3e\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.near/betanet/validator_key.json")),(0,l.kt)("h2",{id:"\uc2a4\ud14c\uc774\ud0b9-\ud2b8\ub80c\uc81d\uc158\uc758-\uc804\uc1a1"},"\uc2a4\ud14c\uc774\ud0b9 \ud2b8\ub80c\uc81d\uc158\uc758 \uc804\uc1a1"),(0,l.kt)("p",null,"\uc218\uace0\ud558\uc168\uc2b5\ub2c8\ub2e4! \uc774\uc804\uc758 \ubaa8\ub4e0 \ub2e8\uacc4\ub97c \uc644\ub8cc\ud558\uc168\ub2e4\uba74 \uc2a4\ud14c\uc774\ud0b9\uc744 \uc704\ud55c \uc124\uc815\uc774 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uccab\ubc88\uc9f8\ub85c, ","`","near login'\uc744 \uba85\ub839\uc5b4\ub97c \uc218\ud589\ud558\uc5ec near cli\uc744 \uc778\uc99d\ud574\ubd05\uc2dc\ub2e4."),(0,l.kt)("p",null,"\ub2f9\uc2e0\uc740 \uc2a4\ud14c\uc774\ud0b9 \uacc4\uc815\uc744 \uc778\uc99d\ud558\uae30 \uc704\ud55c url\uc744 \uc694\uccad\ubc1b\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Please navigate to this url and follow the instructions to log in:\nhttps://wallet.betanet.near.org/login/?title=NEAR+CLI&public_key=FSgxX7YwuCveCeYqsSAB3sD8dgdy3XBWztCQcEjimpaN\n")),(0,l.kt)("p",null,"\uc774\ud6c4, \uacc4\uc815 ID\ub97c cli\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Please enter the accountId that you logged in with:\n")),(0,l.kt)("p",null,"\ub2f9\uc2e0\uc758 \uacc4\uc815ID\ub97c \uc785\ub825\ud558\uba74, \ub2e4\uc74c\uc758 \uba54\uc2dc\uc9c0\uac00 \ub098\ud0c0\ub0a0 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Missing public key for <asdfasdf> in default")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Logged in with masternode24")),(0,l.kt)("p",null,"\uc774 \uba54\uc2dc\uc9c0\ub294 \uc624\ub958\uac00 \uc544\ub2c8\uba70, \ub2f9\uc2e0\uc758 \uacf5\uac1c\ud0a4\ub97c \uc0c8\ub86d\uac8c \uc0dd\uc131\ud560 \uac83\uc784\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uc81c \uc2a4\ud14c\uc774\ud0b9 \ud2b8\ub80c\uc81d\uc158\uc744 \uc804\uc1a1\ud560 \uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"near stake <accountId> <staking public key> <amount to stake>\n")),(0,l.kt)("p",null,"50,000 NEAR\ub97c \uc2a4\ud14c\uc774\ud0b9 \ud558\ub294 \uac83\uc740 BetaNet\uc5d0\uc11c \ucda9\ubd84\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2f9\uc2e0\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc131\uacf5 \uba54\uc2dc\uc9c0\ub97c \ubcfc\uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Staking 50000 on thefutureisnear with public key = A4inyaard6yzt1HQL8u5BYdWhWQgCB87RbRRHKPepfrn.\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"heads up")),(0,l.kt)("p",{parentName:"blockquote"},"NEAR Protocol provides contract-based delegation. Take some time to learn more, reading the Stake Wars Ep.II ",(0,l.kt)("a",{parentName:"p",href:"https://near.org/blog/stake-wars-episode-ii/"},"blog post"),".")),(0,l.kt)("h2",{id:"\uac80\uc99d\uc778\uc774-\ub418\uae30-\uc704\ud574-\uc120\ud0dd\ubc1b\uae30"},"\uac80\uc99d\uc778\uc774 \ub418\uae30 \uc704\ud574 \uc120\ud0dd\ubc1b\uae30"),(0,l.kt)("p",null,"\ubaa8\ub4e0\uac83\uc744 \uc644\ub8cc\ud6c4, \ub9cc\uc57d \uac80\uc99d\uc778\uc774 \ub418\uae30\uc704\ud55c \ucda9\ubd84\ud55c \uc2a4\ud14c\uc774\ud06c\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4\uba74, BetaNet\uc5d0\uc11c \uc57d ","~",'6\uc2dc\uac04\uc744 \uae30\ub2e4\ub824\uc57c \ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \ub2f9\uc2e0\uc774 \uac80\uc99d\uc778\uc73c\ub85c \uc120\ucd9c\ub41c\uac83\uc744 \ub178\ub4dc\uc758 "V/"\ub85c\uadf8\ub85c\ub3c4 \ud655\uc778\ud560\uc218 \uc788\uc73c\uba70, V\ub294 \ub178\ub4dc\uac00 \ud604\uc7ac \uac80\uc99d\uc778\uc784\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.'),(0,l.kt)("p",null,"![Legend: # 7153 | BlockHeight V/1 | 'V' (validator) or '\u2014' (regular node)]"),(0,l.kt)("p",null,"0/0/40\ub294 \ud604\uc7ac \uc804\uccb4 \uac80\uc99d\uc778\uc758 \uc218: \uc5f0\uacb0\ub41c \ud53c\uc5b4/ \uac31\uc2e0\ub41c \ud53c\uc5b4/ \ub098\uc758 \ud53c\uc5b4 \ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \uc22b\uc790\ub294 \uc2dc\uac04\uc5d0 \ub530\ub77c \ubc14\ub014 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uac80\uc99d\uc778\uc758 \uc120\uc815\uc5d0 \ub300\ud574 \uc870\uae08\ub354 \ubc30\uc6b0\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c\uc744 \ucc38\uc870\ud558\uc138\uc694",(0,l.kt)("a",{parentName:"p",href:"/near-wiki/docs/validator/validator-support/faq"},"Staking FAQ"),"."),(0,l.kt)("h2",{id:"\uac80\uc99d\uc778\uc758-\ud604\uc7ac-\ub9ac\uc2a4\ud2b8\uc640-\uc2a4\ud14c\uc774\ud06c-\uc218\ub7c9-\ubcf4\uae30"},"\uac80\uc99d\uc778\uc758 \ud604\uc7ac \ub9ac\uc2a4\ud2b8\uc640 \uc2a4\ud14c\uc774\ud06c \uc218\ub7c9 \ubcf4\uae30"),(0,l.kt)("p",null,"\ud604\uc7ac \uac80\uc99d\uc778 \ub9ac\uc2a4\ud2b8\ub97c \ubcf4\uae30 \uc704\ud574\uc11c \ub2e4\uc74c\uc744 \ucc38\uc870\ud558\uc138\uc694:",(0,l.kt)("a",{parentName:"p",href:"https://rpc.betanet.near.org/status"},"https://rpc.betanet.near.org/status")),(0,l.kt)("p",null,"\ub9cc\uc57d \uac80\uc99d\uc790\uac00 \uc5bc\ub9c8\ub098 \uc2a4\ud14c\uc774\ud0b9\uc744 \ud558\uace0 \uc788\ub294\uc9c0 \ubcf4\uae30 \uc704\ud574\uc11c, \ub2f9\uc2e0\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"near state <account name>")," \uba85\ub839\uc5b4\ub97c NEAR CLI\uc5d0\uc11c \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  amount: '100011163887239132720351',\n  code_hash: '11111111111111111111111111111111',\n  locked: '97985903901882082761',\n  storage_paid_at: 25,\n  storage_usage: 182\n}\n")),(0,l.kt)("h2",{id:"automatically-re-staking"},"Automatically re-staking"),(0,l.kt)("h2",{id:"\uc790\ub3d9\ud654\ub41c-\uc7ac-\uc2a4\ud14c\uc774\ud0b9"},"\uc790\ub3d9\ud654\ub41c \uc7ac-\uc2a4\ud14c\uc774\ud0b9"),(0,l.kt)("p",null,"NEAR \ud504\ub85c\ud1a0\ucf5c\uc740 \uc790\uc0b0\uc744 \uc7a0\uae08\ud574\uc81c \ud558\uae30 \uc6d0\uce58 \uc54a\uc744 \uacbd\uc6b0, \ub2f9\uc2e0\uc758 \ubcf4\uc0c1\uc744 \uc790\ub3d9\uc73c\ub85c \uc7ac\uc2a4\ud14c\uc774\ud0b9 \ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"near stake")," \uba85\ub839\uc5b4\ub97c \ub0ae\uc740 \uac00\uce58\ub85c \uc785\ub825\ud55c\ub2e4\uba74, \ub2f9\uc2e0\uc758 \uc790\uc0b0\uc740 3 epoch(","~","9 \uc2dc\uac04, BetaNet\uae30\uc900, ","~","36\uc2dc\uac04, TestNet\uae30\uc900) \ub4a4\uc5d0 \uc7a0\uae08\uc774 \ud574\uc81c\ub420 \uac83\uc785\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);