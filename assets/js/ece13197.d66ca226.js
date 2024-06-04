"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[9852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Agents",s={unversionedId:"concepts/agents",id:"version-0.4/concepts/agents",title:"Agents",description:"When working with any Aries implementation, you will interact with an Aries",source:"@site/versioned_docs/version-0.4/concepts/agents.md",sourceDirName:"concepts",slug:"/concepts/agents",permalink:"/guides/0.4/concepts/agents",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/guides/0.4/concepts/"},next:{title:"DIDs and DIDComm",permalink:"/guides/0.4/concepts/did-and-didcomm"}},l={},c=[{value:"Characteristics",id:"characteristics",level:3},{value:"Categories",id:"categories",level:3},{value:"Examples",id:"examples",level:3},{value:"Useful resources",id:"useful-resources",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agents"},"Agents"),(0,a.kt)("p",null,"When working with any Aries implementation, you will interact with an Aries\nagent. This will be either directly or via a REST API, like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openwallet-foundation/credo-ts-ext/tree/main/packages/rest"},"the Credo REST\nAPI"),"."),(0,a.kt)("h3",{id:"characteristics"},"Characteristics"),(0,a.kt)("p",null,"An Aries agent has three essential characteristics:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It acts as a fiduciary on behalf of a single identity owner (or, for agents\nof things like IoT devices, pets, and similar things, a single controller)."),(0,a.kt)("li",{parentName:"ol"},"It holds cryptographic keys that uniquely embody its delegated\nauthorization."),(0,a.kt)("li",{parentName:"ol"},"It interacts using interoperable DIDComm protocols, more on that later.")),(0,a.kt)("p",null,"What this means is that an Aries agent will act your behalf to issue create\nconnections, issue credentials, send messages etc. It also have a cryptographic\ntoolkit with which it can uniquely, securely and verifiably operate. And lastly\nit interacts with other entities, this could be another agent, via ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm\nprotocols")," later on. The\nAries agent in the context of the Aries JavaScript ecosystem is your entry-point\nto all of the functionality."),(0,a.kt)("h3",{id:"categories"},"Categories"),(0,a.kt)("p",null,'There are many categories of Aries agents and we will group them into two\ncategories; a mobile agent and a cloud agent. These agents are grouped based on\ntheir "location", e.g. a mobile wallet or server. Some other categories are a\nstatic, thin, thick and rich Aries agents. These agents are grouped based on\ntheir complexity instead of their "location". The Aries JavaScript ecosystem\nallows you to create a mobile agent and a cloud agent. It also allows any of\nthe complexity categorized agents.'),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Some examples of things that are Aries agent-like (since the definition can be\nbit loose, these examples might help to get a clearer picture):"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A mobile wallet")),(0,a.kt)("p",null,"A mobile wallet, like\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-mobile-agent-react-native"},"aries-mobile-agent-react-native"),"\n, can be used to create connections, send basic messages, hold credentials,\netc. In the real world this could be an application that contains data like an\nofficial drivers license."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"An Identity hub")),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"https://didproject.azurewebsites.net/docs/hub-overview.html"},"Identity Hub"),"\nis a personal data store that gives complete control to their owner. It allows\nfor secure sensitive data storage and sharing. Since everyone has multiple\ndevices these can be used as a more central point for your data."),(0,a.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/concepts/0004-agents/README.md"},"Hyperledger Aries RFC - 004:\nAgents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openwallet-foundation/credo-ts-docs/tree/main/versioned_docs/version-0.4/getting-started"},"Credo - Getting\nStarted"))))}d.isMDXComponent=!0}}]);