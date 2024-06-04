"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[8980],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=o.createContext({}),s=function(e){var n=o.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(g.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,m=p["".concat(g,".").concat(u)]||p[u]||d[u]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const a={},i="Logging",l={unversionedId:"tutorials/agent-config/logging",id:"version-0.3/tutorials/agent-config/logging",title:"Logging",description:"Using the Default ConsoleLogger",source:"@site/versioned_docs/version-0.3/tutorials/agent-config/logging.md",sourceDirName:"tutorials/agent-config",slug:"/tutorials/agent-config/logging",permalink:"/guides/0.3/tutorials/agent-config/logging",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent Config",permalink:"/guides/0.3/tutorials/agent-config/"},next:{title:"Create a connection",permalink:"/guides/0.3/tutorials/create-a-connection"}},g={},s=[{value:"Using the Default ConsoleLogger",id:"using-the-default-consolelogger",level:2},{value:"Creating your own Logger",id:"creating-your-own-logger",level:2},{value:"Indy Logs",id:"indy-logs",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logging"},"Logging"),(0,r.kt)("h2",{id:"using-the-default-consolelogger"},"Using the Default ConsoleLogger"),(0,r.kt)("p",null,"To enable logging inside the framework a logger must be passed to the agent config. A simple ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsoleLogger")," can be imported from the framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { InitConfig } from '@aries-framework/core'\nimport { ConsoleLogger, LogLevel } from '@aries-framework/core'\n\nconst agentConfig: InitConfig = {\n  // ... other config properties ...\n  logger: new ConsoleLogger(LogLevel.info),\n}\n")),(0,r.kt)("h2",{id:"creating-your-own-logger"},"Creating your own Logger"),(0,r.kt)("p",null,"For more advanced use cases the ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger")," interface can be implemented. See the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, LogLevel } from '@aries-framework/core'\n\nclass MyCustomLogger implements Logger {\n  public logLevel: LogLevel\n\n  public constructor(logLevel: LogLevel = LogLevel.off) {\n    this.logLevel = logLevel\n  }\n\n  public test(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public trace(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public debug(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public info(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public warn(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public error(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public fatal(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n}\n")),(0,r.kt)("h2",{id:"indy-logs"},"Indy Logs"),(0,r.kt)("p",null,"To enable logging in the underlying Rust framework, either ",(0,r.kt)("inlineCode",{parentName:"p"},"setLogger")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"setDefaultLogger")," must be called on the indy dependency, as seen ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/tree/master/wrappers/nodejs#logger"},"here"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"setLogger")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setDefaultLogger")," methods have only been implemented in the Node.JS wrapper of the indy sdk. This won't work when importing from ",(0,r.kt)("inlineCode",{parentName:"p"},"@aries-framework/react-native"))),(0,r.kt)("p",null,"The easiest way to do this from AFJ is through the ",(0,r.kt)("inlineCode",{parentName:"p"},"indy")," property of ",(0,r.kt)("inlineCode",{parentName:"p"},"agentDependencies"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { agentDependencies } from '@aries-framework/node'\nagentDependencies.indy.setDefaultLogger('trace')\n\n// OR\n\nagentDependencies.indy.setLogger((level, target, message, modulePath, file, line) => {\n  console.log('libindy said:', level, target, message, modulePath, file, line)\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WARNING: You can only set the logger once. Call indy_set_default_logger, indy_set_logger, not both. Once it's been set, libindy won't let you change it.")),(0,r.kt)("p",null,"You can also set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," to log at specified log levels.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/env_logger"},"https://crates.io/crates/env_logger")," for more information."))}d.isMDXComponent=!0}}]);