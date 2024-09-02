"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[73],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Total Value Locked calculation",i={unversionedId:"integrations/tvl",id:"integrations/tvl",title:"Total Value Locked calculation",description:"Total Value Locked (TVL) - Total amount of locked tokens in Drop Protocol.",source:"@site/docs/integrations/tvl.md",sourceDirName:"integrations",slug:"/integrations/tvl",permalink:"/integrations/tvl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Liquidity Staking Module",permalink:"/integrations/lsm_staking"},next:{title:"Overview",permalink:"/validators/overview"}},c={},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"total-value-locked-calculation"},"Total Value Locked calculation"),(0,r.kt)("p",null,"Total Value Locked (TVL) - Total amount of locked tokens in Drop Protocol."),(0,r.kt)("p",null,"Steps to get current TVL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/neutron-1/"},"celat.one")," page, search for the core contract of your instance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/neutron-1/contracts/neutron1mla0gsxwueanhqnq8hknagxcqujr3zjnhll9ut9dma7pvc3yl9mse254ql"},"Example")))),(0,r.kt)("li",{parentName:"ul"},"Query config and go to puppeteer contract",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/neutron-1/interact-contract?selectedType=query&contract=neutron1mla0gsxwueanhqnq8hknagxcqujr3zjnhll9ut9dma7pvc3yl9mse254ql&msg=ewogICJjb25maWciOiB7fQp9"},"Example")))),(0,r.kt)("li",{parentName:"ul"},"Query ",(0,r.kt)("inlineCode",{parentName:"li"},"extension")," message to get all current delegations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/neutron-1/interact-contract?selectedType=query&contract=neutron100pftltglp5xeffy5z6mawhhm5xp0f0je4jj4cxqrc3u4t6vhy3qqvd5y8&msg=eyJleHRlbnNpb24iOnsibXNnIjp7ImRlbGVnYXRpb25zIjp7fX19fQ=="},"Example"))))),(0,r.kt)("p",null,"Example of output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "delegations": {\n      "delegations": [\n        {\n          "delegator": "cosmos1nujy3vl3rww3cy8tf8pdru5jp3f9ppmkadws553ck3qryg2tjanqt39xnv",\n          "validator": "cosmosvaloper1rndyjagfg0nsedl2uy5n92vssn8aj5n67t0nfx",\n          "amount": {\n            "denom": "stake",\n            "amount": "78518979151"\n          }\n        },\n        {\n          "delegator": "cosmos1nujy3vl3rww3cy8tf8pdru5jp3f9ppmkadws553ck3qryg2tjanqt39xnv",\n          "validator": "cosmosvaloper1gh4vzw9wsfgl2h37qqnetet0m4wrzm7v7x3j9x",\n          "amount": {\n            "denom": "stake",\n            "amount": "78518979151"\n          }\n        }\n      ]\n    },\n    "remote_height": 1021162,\n    "local_height": 17515817,\n    "timestamp": "1722427080795445398"\n  }\n}\n')),(0,r.kt)("p",null,"The sum of all ",(0,r.kt)("inlineCode",{parentName:"p"},"delegations.delegations[i].amount.amount")," is current TVL"),(0,r.kt)("p",null,"As you can see the result number is a sum of all current delegations. We could get an ICA address through ",(0,r.kt)("inlineCode",{parentName:"p"},"ica")," query and then do the specific query to retrieve all current delegations, however, puppeteer contract do that bunch of operations instead of us using ICQ so we can trust this information."),(0,r.kt)("p",null,"We don't include in total TVL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unprocessed unbond batches"),(0,r.kt)("li",{parentName:"ul"},"Unbonded funds that are currently held by ICA"),(0,r.kt)("li",{parentName:"ul"},"Pending tokens that should be bonded soon through staker ICA")),(0,r.kt)("p",null,"Because it only makes insignificant difference and makes the logic of calculations complicated (and also because in any case these actions will affect on our current delegations, so it's a question of several hours that these information will be noted in delegation balances). In case if you want to get a precise TVL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/pion-1/"},"celat.one")," page, search for the core contract of your instance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/pion-1/contracts/neutron1qqts44x06g4x430z3heszgczjhfpqf0jq6yxhnufy4w70cvklm7qswywwq"},"Example")))),(0,r.kt)("li",{parentName:"ul"},"Query ",(0,r.kt)("inlineCode",{parentName:"li"},"exchange_rate"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/pion-1/interact-contract?selectedType=query&contract=neutron1qqts44x06g4x430z3heszgczjhfpqf0jq6yxhnufy4w70cvklm7qswywwq&msg=ewogICJleGNoYW5nZV9yYXRlIjoge30KfQ%3D%3D"},"Example")))),(0,r.kt)("li",{parentName:"ul"},"Query config and go to token contract",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/pion-1/interact-contract?selectedType=query&contract=neutron1qqts44x06g4x430z3heszgczjhfpqf0jq6yxhnufy4w70cvklm7qswywwq&msg=ewogICJjb25maWciOiB7fQp9"},"Example")))),(0,r.kt)("li",{parentName:"ul"},"Query config on that token contract, copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"denom")," field",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neutron.celat.one/pion-1/interact-contract?selectedType=query&contract=neutron1nlmq2mzt932w2pnpr4gdxu0pex5gnqvyjgmrm3sv2gdwvw9n6evs4ja2gy&msg=ewogICJjb25maWciOiB7fQp9"},"Example")))),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://rest-falcron.pion-1.ntrn.tech/swagger/#/Query/SupplyOf"},"swagger")," and paste denom from previous step, execute it and you'll get a total supply of dTOKEN"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exchange_rate")," ","*"," dTOKEN_total_supply = TVL")))}m.isMDXComponent=!0}}]);