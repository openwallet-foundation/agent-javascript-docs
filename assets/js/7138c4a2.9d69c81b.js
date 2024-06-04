"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[6718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="REST API",s={unversionedId:"extensions/rest/index",id:"version-0.3/extensions/rest/index",title:"REST API",description:"The Aries Framework JavaScript (AFJ) REST API provides simple RESTful endpoints for AFJ methods, to allow you stand up an agent for communication over the internet instantly. You simply provide your agent configuration. The REST endpoints allow you to interact with your agent over HTTP and WebSockets.",source:"@site/versioned_docs/version-0.3/extensions/rest/index.md",sourceDirName:"extensions/rest",slug:"/extensions/rest/",permalink:"/guides/0.3/extensions/rest/",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/guides/0.3/extensions/"},next:{title:"Setup",permalink:"/guides/0.3/extensions/rest/setup"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"The Aries Framework JavaScript (AFJ) REST API provides simple RESTful endpoints for AFJ methods, to allow you stand up an agent for communication over the internet instantly. You simply provide your agent configuration. The REST endpoints allow you to interact with your agent over HTTP and WebSockets."),(0,o.kt)("p",null,"The AFJ REST API is the most convenient way for self-sovereign identity (SSI) developers to interact with SSI agents."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 ",(0,o.kt)("strong",{parentName:"li"},"Endpoints")," to create connections, issue credentials, and request proofs."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcbb ",(0,o.kt)("strong",{parentName:"li"},"CLI")," that makes it super easy to start an instance of the REST API."),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udf10 ",(0,o.kt)("strong",{parentName:"li"},"Interoperable")," with all major Aries implementations.")))}d.isMDXComponent=!0}}]);