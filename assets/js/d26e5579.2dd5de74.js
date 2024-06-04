"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[9080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var f=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},69533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={},u="Linux",s={unversionedId:"getting-started/set-up/indy-sdk/linux",id:"version-0.4/getting-started/set-up/indy-sdk/linux",title:"Linux",description:"To install Indy SDK on Linux, a couple of dependencies are required. This guide covers the installation for the more popular Linux distributions.",source:"@site/versioned_docs/version-0.4/getting-started/set-up/indy-sdk/linux.md",sourceDirName:"getting-started/set-up/indy-sdk",slug:"/getting-started/set-up/indy-sdk/linux",permalink:"/guides/0.4/getting-started/set-up/indy-sdk/linux",draft:!1,tags:[],version:"0.4",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Indy SDK",permalink:"/guides/0.4/getting-started/set-up/indy-sdk/"},next:{title:"Windows",permalink:"/guides/0.4/getting-started/set-up/indy-sdk/windows"}},c={},d=[{value:"Libsodium",id:"libsodium",level:3},{value:"Arch Linux",id:"arch-linux",level:4},{value:"Debian",id:"debian",level:4},{value:"Red Hat",id:"red-hat",level:4},{value:"Libzmq",id:"libzmq",level:3},{value:"Arch Linux",id:"arch-linux-1",level:4},{value:"Debian",id:"debian-1",level:4},{value:"Red Hat",id:"red-hat-1",level:4},{value:"Indy SDK",id:"indy-sdk",level:3},{value:"Confirm installation",id:"confirm-installation",level:3}],p={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux"},"Linux"),(0,a.kt)("p",null,"To install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"Indy SDK")," on Linux, a couple of dependencies are required. This guide covers the installation for the more popular Linux distributions."),(0,a.kt)("h3",{id:"libsodium"},"Libsodium"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jedisct1/libsodium"},"Libsodium")," is used by the Indy SDK for encryption, decryption, hashing and signing."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{label:"Arch Linux",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pacman -S libsodium\n"))),(0,a.kt)(i.Z,{label:"Debian",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt-get install libsodium-dev\n"))),(0,a.kt)(i.Z,{label:"Red Hat",value:"tab3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install libsodium libsodium-devel\n")))),(0,a.kt)("h3",{id:"libzmq"},"Libzmq"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeromq/libzmq"},"Libzmq")," is a lightweight messaging queue used by the Indy SDK."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{label:"Arch Linux",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pacman -S zeromq\n"))),(0,a.kt)(i.Z,{label:"Debian",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt-get install libzmq3-dev\n"))),(0,a.kt)(i.Z,{label:"Red Hat",value:"tab3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum install libsodium zeromq-devel\n")))),(0,a.kt)("h3",{id:"indy-sdk"},"Indy SDK"),(0,a.kt)("p",null,"All the steps mentioned here are distribution independent. As the Indy SDK doesn't provide binaries for many releases, we will build it from source. This does mean that some additional requirements are necessary, like\n",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust"),"."),(0,a.kt)("p",null,"Downloading ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust")," is as easy as executing the\nfollowing command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("p",null,"This will install ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs"},"Rustup")," which is the installer for\n",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.org"},"Rust"),"."),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://rust-lang.org"},"Rust"),", we can now build the\nIndy SDK from source."),(0,a.kt)("p",null,"First, clone the repository in a temporary directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/hyperledger/indy-sdk\n")),(0,a.kt)("p",null,"Secondly, go to the correct directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd indy-sdk/libindy\n")),(0,a.kt)("p",null,"Third, build the library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cargo build --release\n")),(0,a.kt)("p",null,"Lastly, move the library to the correct location"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo mv target/release/libindy.so /usr/lib/libindy.so\n")),(0,a.kt)("h3",{id:"confirm-installation"},"Confirm installation"),(0,a.kt)("p",null,"To see whether the Indy SDK is correctly installed on your system, run the following command and it should not error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npx -p @aries-framework/node@^0.3 is-indy-installed\n")))}b.isMDXComponent=!0}}]);