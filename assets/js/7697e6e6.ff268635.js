"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[7867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Verifiable Credentials",s={unversionedId:"features/credentials",id:"features/credentials",title:"Verifiable Credentials",description:"One of the main features of Credo is the issuance and verification of Verifiable Credentials.",source:"@site/guides/features/credentials.md",sourceDirName:"features",slug:"/features/credentials",permalink:"/guides/0.5/features/credentials",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decentralized Identifiers",permalink:"/guides/0.5/features/dids"},next:{title:"Tutorials",permalink:"/guides/0.5/tutorials/"}},l={},c=[{value:"W3C Verifiable Credentials",id:"w3c-verifiable-credentials",level:2},{value:"SD-JWT VC",id:"sd-jwt-vc",level:2},{value:"AnonCreds",id:"anoncreds",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verifiable-credentials"},"Verifiable Credentials"),(0,a.kt)("p",null,"One of the main features of Credo is the issuance and verification of Verifiable Credentials."),(0,a.kt)("h2",{id:"w3c-verifiable-credentials"},"W3C Verifiable Credentials"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials")," are probably the most widely known credential format, and defined the World Wide Web Consortium (W3C)."),(0,a.kt)("p",null,"Credo currently supports the issuance and verification of W3C Verifiable Credentials according to the ",(0,a.kt)("strong",{parentName:"p"},"Data Model v1.1"),", and support both the ",(0,a.kt)("strong",{parentName:"p"},"Linked Data Proof")," and ",(0,a.kt)("strong",{parentName:"p"},"Json Web Token (JWT)")," proof formats."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issuance of W3C JWT credentials is not supported over DIDComm"),", while verification ",(0,a.kt)("strong",{parentName:"p"},"is supported")),(0,a.kt)("h2",{id:"sd-jwt-vc"},"SD-JWT VC"),(0,a.kt)("p",null,"Selective Disclosure JWT Verifiable Credentials are a special type of JWT Verifiable Credentials, that allow for selective disclosure of the claims in the credential."),(0,a.kt)("p",null,"Credo currently supports ",(0,a.kt)("a",{parentName:"p",href:"https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-01.html"},"SD-JWT-based Verifiable Credentials (SD-JWT VC) - Draft 01"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issuance of SD-JWT credentials is not supported over DIDComm"),", while verification ",(0,a.kt)("strong",{parentName:"p"},"is supported"),"."),(0,a.kt)("h2",{id:"anoncreds"},"AnonCreds"),(0,a.kt)("p",null,"Credo supports the issuance and verification of ",(0,a.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/anoncreds-spec/"},"AnonCreds")," credentials. AnonCreds credentials are a bit 'heavier' to implement and support than other credential formats, but allow for the best unlinkability."),(0,a.kt)("p",null,"Issuance and verification of AnonCreds credentials is ",(0,a.kt)("strong",{parentName:"p"},"only available over DIDComm"),"."))}u.isMDXComponent=!0}}]);