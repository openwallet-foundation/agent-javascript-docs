"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[6407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="REST API",s={unversionedId:"extensions/rest",id:"version-0.4/extensions/rest",title:"REST API",description:"The Aries Framework JavaScript (AFJ) REST API provides simple RESTful endpoints for AFJ methods, to allow you stand up an agent for communication over the internet instantly. You simply provide your agent configuration. The REST endpoints allow you to interact with your agent over HTTP and WebSockets.",source:"@site/versioned_docs/version-0.4/extensions/rest.md",sourceDirName:"extensions",slug:"/extensions/rest",permalink:"/guides/0.4/extensions/rest",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/guides/0.4/extensions/"},next:{title:"React Hooks",permalink:"/guides/0.4/extensions/react-hooks"}},l={},p=[{value:"Quick Setup",id:"quick-setup",level:2},{value:"Directly on computer",id:"directly-on-computer",level:3},{value:"Configuration",id:"configuration",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"The Aries Framework JavaScript (AFJ) REST API provides simple RESTful endpoints for AFJ methods, to allow you stand up an agent for communication over the internet instantly. You simply provide your agent configuration. The REST endpoints allow you to interact with your agent over HTTP and WebSockets."),(0,o.kt)("p",null,"The AFJ REST API is the most convenient way for self-sovereign identity (SSI) developers to interact with SSI agents."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 ",(0,o.kt)("strong",{parentName:"li"},"Endpoints")," to create connections, issue credentials, and request proofs."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcbb ",(0,o.kt)("strong",{parentName:"li"},"CLI")," that makes it super easy to start an instance of the REST API."),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udf10 ",(0,o.kt)("strong",{parentName:"li"},"Interoperable")," with all major Aries implementations.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@aries-framework/rest")," package has not been updated to work with the latest version (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"0.4.x")),") of ",(0,o.kt)("inlineCode",{parentName:"p"},"@aries-framework/core"),". The documentation in this section is for version ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"0.9.x"))," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@aries-framework/rest")," package, that works with ",(0,o.kt)("inlineCode",{parentName:"p"},"@aries-framework/core")," version ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"0.2.x")),". Extension packages (such as REST API) are versioned separately from the core packages.")),(0,o.kt)("h2",{id:"quick-setup"},"Quick Setup"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide assumes you have followed the install guides for the framework (See ",(0,o.kt)("a",{parentName:"p",href:"../../getting-started/index.md"},"Getting Started")," section) for your platform and a valid ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," project setup.")),(0,o.kt)("p",null,"Using the CLI is the easiest way to get started with REST API."),(0,o.kt)("p",null,"You can do this directly on your machine."),(0,o.kt)("h3",{id:"directly-on-computer"},"Directly on computer"),(0,o.kt)("p",null,"After installing and confirming that Libindy is installed, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'npx -p @aries-framework/rest afj-rest start \\\n  --label "AFJ Rest" \\\n  --wallet-id "walletId" \\\n  --wallet-key "walletKey" \\\n  --endpoint http://localhost:5000 \\\n  --admin-port 3000 \\\n  --outbound-transport http \\\n  --inbound-transport http 5000\n')),(0,o.kt)("p",null,"The REST API provides an OpenAPI schema that can easily be viewed using the SwaggerUI that is provided with the server. The endpoint documentation can be viewed at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/docs")," endpoint (e.g. ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/docs"},"http://localhost:3000/docs"),")."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To find out all available configuration options from the CLI, you can run the CLI command with ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),". This will print a full list of all available options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx -p @aries-framework/rest afj-rest start --help\n")))}d.isMDXComponent=!0}}]);