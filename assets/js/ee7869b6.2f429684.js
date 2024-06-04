"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[7240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},o="macOS (ARM)",l={unversionedId:"getting-started/set-up/indy-sdk/macos-arm",id:"version-0.4/getting-started/set-up/indy-sdk/macos-arm",title:"macOS (ARM)",description:"To install Indy SDK on macOS, a couple of dependencies are required. This guide covers the installation of the Indy SDK for macs with an ARM processor. For installing the Indy SDK on Intel based macs, please refer to the Indy SDK macOS (Intel) guide.",source:"@site/versioned_docs/version-0.4/getting-started/set-up/indy-sdk/macos-arm.md",sourceDirName:"getting-started/set-up/indy-sdk",slug:"/getting-started/set-up/indy-sdk/macos-arm",permalink:"/guides/0.4/getting-started/set-up/indy-sdk/macos-arm",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"macOS (Intel)",permalink:"/guides/0.4/getting-started/set-up/indy-sdk/macos-intel"},next:{title:"React Native",permalink:"/guides/0.4/getting-started/set-up/indy-sdk/react-native"}},s={},d=[{value:"Libsodium",id:"libsodium",level:3},{value:"Libzmq",id:"libzmq",level:3},{value:"Indy SDK",id:"indy-sdk",level:3},{value:"Confirm installation",id:"confirm-installation",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macos-arm"},"macOS (ARM)"),(0,a.kt)("p",null,"To install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"Indy SDK")," on macOS, a couple of dependencies are required. This guide covers the installation of the Indy SDK for macs with an ARM processor. For installing the Indy SDK on Intel based macs, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"./macos-intel"},"Indy SDK macOS (Intel)")," guide."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This installation assumes that you have ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"brew")," installed. If not, please install it via this command:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'))),(0,a.kt)("h3",{id:"libsodium"},"Libsodium"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jedisct1/libsodium"},"Libsodium")," is used by the Indy SDK for encryption, decryption, hashing and signing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"brew install libsodium\n")),(0,a.kt)("h3",{id:"libzmq"},"Libzmq"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromq/libzmq"},"Libzmq")," is a lightweight messaging queue used by the Indy SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"brew install zeromq\n")),(0,a.kt)("h3",{id:"indy-sdk"},"Indy SDK"),(0,a.kt)("p",null,"The Indy SDK does not been distributed properly for macOS. We have a pre-built library available that can\nbe downloaded. If you prefer to build from source, you can follow the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk#how-to-build-indy-sdk-from-source"},"Indy SDK repository")),(0,a.kt)("p",null,"First, download the pre-built library from ",(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1JaRqAEAyodjeh120YYZ0t42zfhN3wHiW/view"},"Google Drive"),"."),(0,a.kt)("p",null,"After this, open ",(0,a.kt)("inlineCode",{parentName:"p"},"Finder"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"control+click")," on the library and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"open"),".\nThis is something that has to be done as the library is not properly signed."),(0,a.kt)("p",null,"Lastly the library just has to be moved to the correct location."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you downloaded the file in another directory, please change the first part of this command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo mv ~/Downloads/libindy.dylib /usr/local/lib/\n")),(0,a.kt)("h3",{id:"confirm-installation"},"Confirm installation"),(0,a.kt)("p",null,"To see whether the Indy SDK is correctly installed on your system, run the following command and it should not error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npx -p @aries-framework/node@^0.3 is-indy-installed\n")))}m.isMDXComponent=!0}}]);