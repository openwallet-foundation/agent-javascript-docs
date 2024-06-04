"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[9196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,h=u["".concat(c,".").concat(p)]||u[p]||g[p]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(67294),a=n(86010),i=n(53438),o=n(39960),s=n(13919),c=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:o},o))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return r.createElement(m,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},58856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(52991);const o={},s="Updating Credo",c={unversionedId:"updating/index",id:"updating/index",title:"Updating Credo",description:"This section will cover everything you need to know about updating Credo to a newer version.",source:"@site/guides/updating/index.md",sourceDirName:"updating",slug:"/updating/",permalink:"/guides/updating/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mediation",permalink:"/guides/tutorials/mediation"},next:{title:"Update Assistant",permalink:"/guides/updating/update-assistant"}},l={},d=[{value:"Versioning",id:"versioning",level:2},{value:"Types of breaking changes",id:"types-of-breaking-changes",level:2},{value:"Breaking Code Changes",id:"breaking-code-changes",level:3},{value:"Breaking Storage Changes",id:"breaking-storage-changes",level:3},{value:"Migration Guides",id:"migration-guides",level:2}],u={toc:d},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updating-credo"},"Updating Credo"),(0,a.kt)("p",null,"This section will cover everything you need to know about updating Credo to a newer version."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Credo follows ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),". This means that major version changes (",(0,a.kt)("strong",{parentName:"p"},"1"),".0.0) are considered breaking changes. When features are added this is a minor version change (0.",(0,a.kt)("strong",{parentName:"p"},"1"),".0). For bug fixes the patch version change is used (0.0.",(0,a.kt)("strong",{parentName:"p"},"1"),")."),(0,a.kt)("p",null,"While Credo is still in pre-1.0.0 version, the version change types are shifted to the right. This means a major version change is now a minor change (0.",(0,a.kt)("strong",{parentName:"p"},"1"),".0) and a minor change is now a patch change (0.0.",(0,a.kt)("strong",{parentName:"p"},"1"),"). This is done to keep the version below 1.0.0, indicating the framework is still in early development and users can expect more breaking changes that when the version has already reached 1.0.0."),(0,a.kt)("p",null,"This means if the second number in the version (0.",(0,a.kt)("strong",{parentName:"p"},"1"),".0) changes, you need to be careful with updating and always consult this page for update instructions. If only the third number changes (0.0.",(0,a.kt)("strong",{parentName:"p"},"1"),"), you can update without any issues."),(0,a.kt)("h2",{id:"types-of-breaking-changes"},"Types of breaking changes"),(0,a.kt)("p",null,"Updates to Credo bring new features and improvements to the framework. To better adapt the framework to new features we sometimes make breaking changes that will improve how Credo works. There's two parts to updates with breaking changes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Breaking code changes"),(0,a.kt)("li",{parentName:"ol"},"Breaking storage changes")),(0,a.kt)("h3",{id:"breaking-code-changes"},"Breaking Code Changes"),(0,a.kt)("p",null,"Breaking changes to code means changes to how you interact with Credo. This includes methods being renamed, moved to another module or extended to better integrate with new features. We'll try to cover all breaking changes in migration guides, so you know exactly what is needed to update to a new version and keep the same functionality."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you encounter any breaking changes that aren't mentioned in the migration docs, please open an issue in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openwallet-foundation/credo-ts-docs/issues"},"Credo Docs")," repository, or directly create a PR describing the change.")),(0,a.kt)("h3",{id:"breaking-storage-changes"},"Breaking Storage Changes"),(0,a.kt)("p",null,"Breaking changes to storage are a bit more complex to deal with. While breaking changes to code only require you to update your code once, breaking changes to storage needs to be updated for every agent instance. Luckily, we've made the migration as easy as possible for you using the ",(0,a.kt)("a",{parentName:"p",href:"/guides/updating/update-assistant"},"Update Assistant"),". The Update Assistant will update all storage objects to the storage model that is expected by the newest version. If a version made changes to the storage, this will be explicitly mentioned in the migration guide. See the ",(0,a.kt)("a",{parentName:"p",href:"/guides/updating/update-assistant"},"Update Assistant")," documentation for detailed instructions on how to use the update assistant."),(0,a.kt)("h2",{id:"migration-guides"},"Migration Guides"),(0,a.kt)("p",null,"Currently the following migration guides are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/updating/versions/0.1-to-0.2"},"Migrating from Credo 0.1.0 to 0.2.x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/updating/versions/0.2-to-0.3"},"Migrating from Credo 0.2.x to 0.3.x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/updating/versions/0.3-to-0.4"},"Migrating from Credo 0.3.x to 0.4.x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/updating/update-indy-sdk-to-askar"},"Migrating from an Indy SDK Wallet to Aries Askar"))))}p.isMDXComponent=!0}}]);