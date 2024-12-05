"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,v=c["".concat(l,".").concat(g)]||c[g]||p[g]||o;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a="Receiving and Proving Credentials using the OpenID4VC Holder Module",s={unversionedId:"tutorials/openid4vc/receiving-and-proving-credentials-using-openid4vc-holder-module",id:"tutorials/openid4vc/receiving-and-proving-credentials-using-openid4vc-holder-module",title:"Receiving and Proving Credentials using the OpenID4VC Holder Module",description:"This tutorial will guide you through the process of receiving and proving credentials using the OpenID4VC Holder Module. Before starting this tutorial, make sure you have completed the OpenID4VC Holder Module Setup.",source:"@site/guides/tutorials/openid4vc/receiving-and-proving-credentials-using-openid4vc-holder-module.md",sourceDirName:"tutorials/openid4vc",slug:"/tutorials/openid4vc/receiving-and-proving-credentials-using-openid4vc-holder-module",permalink:"/guides/tutorials/openid4vc/receiving-and-proving-credentials-using-openid4vc-holder-module",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Issuing Credentials using the OpenID4VC Issuer Module",permalink:"/guides/tutorials/openid4vc/issuing-credentials-using-openid4vc-issuer-module"},next:{title:"Verifying Credentials using the OpenID4VC Verifier Module",permalink:"/guides/tutorials/openid4vc/verifying-credentials-using-openid4vc-verifier-module"}},l={},u=[{value:"Resolving and accepting a credential offer",id:"resolving-and-accepting-a-credential-offer",level:2},{value:"Resolving and accepting an authorization request (presentation request)",id:"resolving-and-accepting-an-authorization-request-presentation-request",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"receiving-and-proving-credentials-using-the-openid4vc-holder-module"},"Receiving and Proving Credentials using the OpenID4VC Holder Module"),(0,i.kt)("p",null,"This tutorial will guide you through the process of receiving and proving credentials using the OpenID4VC Holder Module. Before starting this tutorial, make sure you have completed the ",(0,i.kt)("a",{parentName:"p",href:"/guides/getting-started/set-up/openid4vc"},"OpenID4VC Holder Module Setup"),"."),(0,i.kt)("p",null,"This guides only covers the receiving and proving of credentials using the OpenID4VC Holder Module. Follow the ",(0,i.kt)("a",{parentName:"p",href:"/guides/tutorials/openid4vc/issuing-credentials-using-openid4vc-issuer-module"},"Issuing Credentials using the OpenID4VC Issuer Module")," and ",(0,i.kt)("a",{parentName:"p",href:"/guides/tutorials/openid4vc/verifying-credentials-using-openid4vc-verifier-module"},"Verifying Credentials using the OpenID4VC Verifier Module")," guides to learn how to issue and verify credentials using the OpenID4VC Issuer and Verifier Modules."),(0,i.kt)("h2",{id:"resolving-and-accepting-a-credential-offer"},"Resolving and accepting a credential offer"),(0,i.kt)("p",null,"Once you have set-up your agent (under ",(0,i.kt)("inlineCode",{parentName:"p"},"holder")," variable), and have a credential offer (either created using the issuer module, or an external OpenID4VC issuer), we can resolve and accept the credential offer."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"credentialBindingResolver")," is a method you need to provide that configures how the credential should be bound to the wallet. The implemented binding resolver in this tutorial first checks if the issuer supports ",(0,i.kt)("inlineCode",{parentName:"p"},"did:key")," and will use that. Otherwise it will check if jwk is supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers sd-jwt-vc-openid4vc.ts section-6",showLineNumbers:!0,"sd-jwt-vc-openid4vc.ts":!0,"section-6":!0},"")),(0,i.kt)("p",null,"Finally the credentials are stored using the SD JWT VC and W3C modules. In a wallet application you could choose to first show the credential to the user before storing it in the wallet."),(0,i.kt)("h2",{id:"resolving-and-accepting-an-authorization-request-presentation-request"},"Resolving and accepting an authorization request (presentation request)"),(0,i.kt)("p",null,"Once you have a credential in your wallet, you can start presenting it based on a receive authorization request including an OpenID4VP presentation request (either created using the verifier module, or an external OpenID4VC verifier). First we resolve the authorization request, and then we accept it and present the credential in our wallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers sd-jwt-vc-openid4vc.ts section-9",showLineNumbers:!0,"sd-jwt-vc-openid4vc.ts":!0,"section-9":!0},"")))}p.isMDXComponent=!0}}]);