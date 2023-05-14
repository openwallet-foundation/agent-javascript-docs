"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,c=m["".concat(p,".").concat(u)]||m[u]||g[u]||r;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Agent Config",l={unversionedId:"tutorials/agent-config/index",id:"tutorials/agent-config/index",title:"Agent Config",description:"The Aries agent provided by [Aries Framework",source:"@site/guides/tutorials/agent-config/index.md",sourceDirName:"tutorials/agent-config",slug:"/tutorials/agent-config/",permalink:"/guides/next/tutorials/agent-config/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/guides/next/tutorials/"},next:{title:"Logging",permalink:"/guides/next/tutorials/agent-config/logging"}},p={},s=[{value:"<code>label</code>*",id:"label",level:2},{value:"<code>walletConfig</code>",id:"walletconfig",level:2},{value:"<code>walletConfig.id</code>*",id:"walletconfigid",level:3},{value:"<code>walletConfig.key</code>*",id:"walletconfigkey",level:3},{value:"<code>walletConfig.keyDerivationMethod</code>",id:"walletconfigkeyderivationmethod",level:3},{value:"<code>walletConfig.storage</code>",id:"walletconfigstorage",level:3},{value:"<code>endpoints</code>",id:"endpoints",level:2},{value:"<code>logger</code>",id:"logger",level:2},{value:"<code>didCommMimeType</code>",id:"didcommmimetype",level:2},{value:"<code>useDidSovPrefixWhereAllowed</code>",id:"usedidsovprefixwhereallowed",level:2},{value:"<code>useDidKeyInProtocols</code>",id:"usedidkeyinprotocols",level:2},{value:"<code>connectionImageUrl</code>",id:"connectionimageurl",level:2},{value:"<code>autoUpdateStorageOnStartup</code>",id:"autoupdatestorageonstartup",level:2}],d={toc:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agent-config"},"Agent Config"),(0,i.kt)("p",null,"The Aries agent provided by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries Framework\nJavaScript")," is very\nextensible. These are all the configuration options with a short description:"),(0,i.kt)("h2",{id:"label"},(0,i.kt)("inlineCode",{parentName:"h2"},"label"),"*"),(0,i.kt)("p",null,"The label is seen by other users when creating a connection. This should not\nbe used as a base for authenticity, as it is entirely up to the user to\nset this."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"label: 'my-demo-agent'\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"walletconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"walletConfig")),(0,i.kt)("p",null,"Configuration for the setup of the wallet. Including this in the agent\nconfiguration makes it possible that, when initializing the agent, the wallet\nwill also be initialized. When an application requires the agent without an\ninitialized wallet for any reason, this can be omitted and later on the wallet\ncan be initialized separately."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"WalletConfig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { KeyDerivationMethod } from '@aries-framework/core'\n\nwalletConfig: {\n  id: 'foo',\n  key: 'testkey000000000000000000000',\n  keyDerivationMethod: KeyDerivationMethod.Argon2IMod,\n  storage: {\n    type: 'postgres_storage',\n    ... // depends on the storage type\n  }\n}\n")),(0,i.kt)("h3",{id:"walletconfigid"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.id"),"*"),(0,i.kt)("p",null,"Identifier string. Using another value here will open a new wallet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"walletconfigkey"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.key"),"*"),(0,i.kt)("p",null,"Key to unlock the wallet with. This value MUST be kept as a secret and should\nbe seem like a password."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h3",{id:"walletconfigkeyderivationmethod"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.keyDerivationMethod")),(0,i.kt)("p",null,"The method used for key derivation of the\n",(0,i.kt)("a",{parentName:"p",href:"#walletconfigkey"},(0,i.kt)("inlineCode",{parentName:"a"},"walletConfig.key")),"."),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyDerivationMethod.Raw"),", it is strongly recommended to get the raw\nkey via\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/blob/1c7096dd95d0fd53881070f66907df4b9e61b874/libindy/src/api/wallet.rs#L560"},(0,i.kt)("inlineCode",{parentName:"a"},"indy_generate_wallet_key")),".\nIf you really must implement your own key generation, it is required to be a\nbase58-encoded\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ChaCha20-Poly1305"},"ChaCha20-Poly1305")," key."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For the advanced readers\n",(0,i.kt)("a",{parentName:"p",href:"https://www.password-hashing.net/argon2-specs.pdf"},"here")," is the\nspecification of Argon2.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"enum KeyDerivationMethod")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyDerivationMethod.Argon2IMod")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyDerivationMethod.Argon2IMod"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," uses Argon2I modular (most secure option, but slower)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyDerivationMethod.Argon2Int"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," uses Argon2 integer (less secure, but faster)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"KeyDerivationMethod.Raw"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0"," uses no derivation method.\nIt is recommended to use the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/blob/1c7096dd95d0fd53881070f66907df4b9e61b874/libindy/src/api/wallet.rs#L560"},(0,i.kt)("inlineCode",{parentName:"a"},"indy_generate_wallet_key")),"\nfor key generation."),(0,i.kt)("h3",{id:"walletconfigstorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"walletConfig.storage")),(0,i.kt)("p",null,"Specify which storage is being used for the wallet. The default is an SQLite\ndatabase, but a Postgres database could be used as well."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": An SQLite database"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"endpoints"},(0,i.kt)("inlineCode",{parentName:"h2"},"endpoints")),(0,i.kt)("p",null,"A list of endpoints (schema + host + port) used for invitations and where other\nagents might reach you. This could be used to host a website that would\nredirect, for example with deep linking, to a wallet where the invitation can be\naccepted."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"endpoints: ['https://example.org:3000']\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"logger"},(0,i.kt)("inlineCode",{parentName:"h2"},"logger")),(0,i.kt)("p",null,"A logger instance that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," interface. This can be extremely\nhelpful for debugging. Aries Framework JavaScript exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsoleLogger"),"\nthat can be used for simple logs. See ",(0,i.kt)("a",{parentName:"p",href:"./logging"},"Logging")," for more details on creating your own logger instance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { ConsoleLogger, LogLevel } from '@aries-framework/core'\n\nlogger: new ConsoleLogger(LogLevel.Test)\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"didcommmimetype"},(0,i.kt)("inlineCode",{parentName:"h2"},"didCommMimeType")),(0,i.kt)("p",null,"The mime-type used for sending and receiving messages. ",(0,i.kt)("inlineCode",{parentName:"p"},"application/jwe")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," are used as fallback but are less desirable as they are\nmuch more ambiguous in their specification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"enum DidCommMimeType")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DidCommMimeType.v0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Members"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DidCommMimeType.v0"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0",' "application/ssi-agent-wire"'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DidCommMimeType.v1"))),(0,i.kt)("p",null,"\xa0","\xa0","\xa0",' "application/didcomm-envelope-enc"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"import { DidCommMimeType } from '@aries-framework/core'\n\ndidCommMimeType: DidCommMimeType.v0\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"usedidsovprefixwhereallowed"},(0,i.kt)("inlineCode",{parentName:"h2"},"useDidSovPrefixWhereAllowed")),(0,i.kt)("p",null,"Whether to emit the legacy did:sov prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"did:sov:BzCbsNYhMrjHiqZDTUASHg;spec")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@type")," of messages for messages that allow it. A message can allow emitting the legacy prefix by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"allowDidSovPrefix")," on the message class. This is the case for all core messages that have been defined before the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0348-transition-msg-type-to-https/README.md"},"Migration to ",(0,i.kt)("inlineCode",{parentName:"a"},"https://didcomm.org")," message type"),", to allow for the best possible interoperability with other agents."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"useDidSovPrefixWhereAllowed: true\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"usedidkeyinprotocols"},(0,i.kt)("inlineCode",{parentName:"h2"},"useDidKeyInProtocols")),(0,i.kt)("p",null,"Whether to use ",(0,i.kt)("inlineCode",{parentName:"p"},"did:key")," in protocols by default as defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0360-use-did-key/README.md"},"RFC 0360: did:key Usage"),". Adopting this RFC can break interop with agents that haven't adopted this RFC yet. The framework does it best to automatically detect whether the other agent supports ",(0,i.kt)("inlineCode",{parentName:"p"},"did:key"),", however in some cases we can't determine this. In those cases this parameter can be used to force the framework to use ",(0,i.kt)("inlineCode",{parentName:"p"},"did:key")," or not."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"useDidKeyInProtocols: true\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"connectionimageurl"},(0,i.kt)("inlineCode",{parentName:"h2"},"connectionImageUrl")),(0,i.kt)("p",null,"A URL to an image used so that other agents can display this. Like the\n",(0,i.kt)("a",{parentName:"p",href:"#label"},(0,i.kt)("inlineCode",{parentName:"a"},"Label"))," this is completely up to the user to define\nthis. It MUST not be used got any base of authenticity."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"connectionImageUrl: 'https://picsum.photos/200'\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"autoupdatestorageonstartup"},(0,i.kt)("inlineCode",{parentName:"h2"},"autoUpdateStorageOnStartup")),(0,i.kt)("p",null,"Whether the storage should automatically be updated when a newer version of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries Framework\nJavaScript")," is used."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="example"',title:'"example"'},"autoUpdateStorageOnStartup: true\n")),(0,i.kt)("hr",null))}g.isMDXComponent=!0}}]);