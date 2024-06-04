"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[5313],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},43097:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={},a="The Credo Ecosystem",s={unversionedId:"ecosystem/index",id:"ecosystem/index",title:"The Credo Ecosystem",description:"The Credo ecosystem includes various components that are spread across multiple repositories. In this section we'll go over what these components are and how the relate to one another.",source:"@site/guides/ecosystem/index.md",sourceDirName:"ecosystem",slug:"/ecosystem/",permalink:"/guides/ecosystem/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrating from Credo 0.3.x to 0.4.x",permalink:"/guides/updating/versions/0.3-to-0.4"},next:{title:"Extensions",permalink:"/guides/extensions/"}},l={},c=[{value:"Repositories",id:"repositories",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Credo",id:"credo",level:3},{value:"Contributing in the Credo Ecosystem",id:"contributing-in-the-credo-ecosystem",level:2},{value:"Developer Contributions",id:"developer-contributions",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-credo-ecosystem"},"The Credo Ecosystem"),(0,n.kt)("p",null,"The Credo ecosystem includes various components that are spread across multiple repositories. In this section we'll go over what these components are and how the relate to one another."),(0,n.kt)("h2",{id:"repositories"},"Repositories"),(0,n.kt)("p",null,"Currently, Credo is composed out of two separate repositories:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/openwallet-foundation/credo-ts"},"Credo")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/openwallet-foundation/credo-ts-ext"},"Credo Extensions"))),(0,n.kt)("p",null,"In addition, there are several open-source applications and building blocks built on top of Credo. One example is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-mobile-agent-react-native"},"Aries Mobile Agent React Native (Bifold)"),", which is a white-label mobile wallet you can use to bootstrap your own custom wallet."),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"You can find their documentation here:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://credo.js.org/guides"},"Credo (core)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://credo.js.org/guides/extensions"},"Credo Extensions"))),(0,n.kt)("h3",{id:"credo"},"Credo"),(0,n.kt)("p",null,"Credo (core) is at the core of the Credo ecosystem. Credo provides all the functionality related to cryptography, storage, messaging and more that is required"),(0,n.kt)("h2",{id:"contributing-in-the-credo-ecosystem"},"Contributing in the Credo Ecosystem"),(0,n.kt)("p",null,"Consider attending our weekly meetings to become aware of the current development cadence."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/openwallet-foundation/credo-ts/wiki/Meeting-Information"},"Credo Working Group Meeting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.hyperledger.org/display/ARIES/Aries+Working+Group"},"Aries Working Group Meeting"))),(0,n.kt)("h3",{id:"developer-contributions"},"Developer Contributions"),(0,n.kt)("p",null,"Each project maintains its own CONTRIBUTING guidance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/openwallet-foundation/credo-ts/blob/main/CONTRIBUTING.md"},"Credo CONTRIBUTING.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/openwallet-foundation/credo-ts-ext/blob/main/CONTRIBUTING.md"},"Credo Extensions CONTRIBUTING.md"))),(0,n.kt)("p",null,"Each project has a significant set of developer conventions, checklists, templates, and actions to provide guidance and boundaries for a contribution.\nConsider looking at previous issues and their corresponding PRs to get a sense of the latest."))}d.isMDXComponent=!0}}]);