"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7844],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7294),i=n(4334),a=n(3438),o=n(9960),c=n(3919),s=n(5999),l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},n)}function d(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:i?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e})))))}},4766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),i=(n(7294),n(3905)),a=n(2991);const o={},c="Getting started",s={unversionedId:"getting-started/index",id:"version-0.3/getting-started/index",title:"Getting started",description:"In this section we will go over everything you need to get started on a technical level. First there are specific installation guides for NodeJS and React Native. Aries JavaScript works for creating both serverside application (commonly but not always issuer and verifyer) and mobile applications (commonly holder apps). Depending on your use case you can follow the installation guides for NodeJS, React Native, or both.",source:"@site/versioned_docs/version-0.3/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/guides/getting-started/",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/guides/"},next:{title:"Installation",permalink:"/guides/getting-started/installation/"}},l={},u=[],d={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"In this section we will go over everything you need to get started on a technical level. First there are specific installation guides for NodeJS and React Native. Aries JavaScript works for creating both serverside application (commonly but not always issuer and verifyer) and mobile applications (commonly holder apps). Depending on your use case you can follow the installation guides for ",(0,i.kt)("a",{parentName:"p",href:"/guides/getting-started/installation/nodejs/"},"NodeJS"),", ",(0,i.kt)("a",{parentName:"p",href:"/guides/getting-started/installation/react-native/"},"React Native"),", or both."),(0,i.kt)("p",null,"After the installation of your prerequisites is complete, we'll walk you through the ",(0,i.kt)("a",{parentName:"p",href:"/guides/getting-started/set-up/"},"initial setup")," of the framework."),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);