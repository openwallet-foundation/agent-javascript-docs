"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[840],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=o.createContext({}),s=function(e){var n=o.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(g,".").concat(d)]||u[d]||p[d]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6770:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return g},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={},g="Logging",s={unversionedId:"tutorials/agent-config/logging",id:"tutorials/agent-config/logging",title:"Logging",description:"Using the Default ConsoleLogger",source:"@site/guides/tutorials/agent-config/logging.md",sourceDirName:"tutorials/agent-config",slug:"/tutorials/agent-config/logging",permalink:"/guides/tutorials/agent-config/logging",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent Config",permalink:"/guides/tutorials/agent-config/"},next:{title:"Create a connection",permalink:"/guides/tutorials/create-a-connection"}},c={},p=[{value:"Using the Default ConsoleLogger",id:"using-the-default-consolelogger",level:2},{value:"Creating your own Logger",id:"creating-your-own-logger",level:2},{value:"Indy Logs",id:"indy-logs",level:2}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging"},"Logging"),(0,a.kt)("h2",{id:"using-the-default-consolelogger"},"Using the Default ConsoleLogger"),(0,a.kt)("p",null,"To enable logging inside the framework a logger must be passed to the agent config. A simple ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsoleLogger")," can be imported from the framework."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { InitConfig } from '@aries-framework/core'\nimport { ConsoleLogger, LogLevel } from '@aries-framework/core'\n\nconst agentConfig: InitConfig = {\n  // ... other config properties ...\n  logger: new ConsoleLogger(LogLevel.info),\n}\n")),(0,a.kt)("h2",{id:"creating-your-own-logger"},"Creating your own Logger"),(0,a.kt)("p",null,"For more advanced use cases the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," interface can be implemented. See the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, LogLevel } from '@aries-framework/core'\n\nclass MyCustomLogger implements Logger {\n  public logLevel: LogLevel\n\n  public constructor(logLevel: LogLevel = LogLevel.off) {\n    this.logLevel = logLevel\n  }\n\n  public test(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public trace(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public debug(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public info(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public warn(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public error(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n\n  public fatal(message: string, data?: Record<string, any>): void {\n    console.log(message, data)\n  }\n}\n")),(0,a.kt)("h2",{id:"indy-logs"},"Indy Logs"),(0,a.kt)("p",null,"To enable logging in the underlying Rust framework, either ",(0,a.kt)("inlineCode",{parentName:"p"},"setLogger")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"setDefaultLogger")," must be called on the indy dependency, as seen ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/tree/master/wrappers/nodejs#logger"},"here"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u26a0\ufe0f"),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setLogger")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setDefaultLogger")," methods have only been implemented in the Node.JS wrapper of the indy sdk. This won't work when importing from ",(0,a.kt)("inlineCode",{parentName:"p"},"@aries-framework/react-native")))),(0,a.kt)("p",null,"The easiest way to do this from AFJ is through the ",(0,a.kt)("inlineCode",{parentName:"p"},"indy")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"agentDependencies"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { agentDependencies } from '@aries-framework/node'\nagentDependencies.indy.setDefaultLogger('trace')\n\n// OR\n\nagentDependencies.indy.setLogger((level, target, message, modulePath, file, line) => {\n  console.log('libindy said:', level, target, message, modulePath, file, line)\n})\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"WARNING: You can only set the logger once. Call indy_set_default_logger, indy_set_logger, not both. Once it's been set, libindy won't let you change it.")),(0,a.kt)("p",null,"You can also set the environement variable ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," to log at specified log levels.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/env_logger"},"https://crates.io/crates/env_logger")," for more information."))}d.isMDXComponent=!0}}]);