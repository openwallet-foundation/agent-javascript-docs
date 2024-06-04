"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[6142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),u=n(67392),d=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},51e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={},s="Linux",u={unversionedId:"getting-started/installation/nodejs/linux",id:"version-0.3/getting-started/installation/nodejs/linux",title:"Linux",description:"In this section, we will discuss the specific installation of the dependencies",source:"@site/versioned_docs/version-0.3/getting-started/installation/nodejs/linux.md",sourceDirName:"getting-started/installation/nodejs",slug:"/getting-started/installation/nodejs/linux",permalink:"/guides/0.3/getting-started/installation/nodejs/linux",draft:!1,tags:[],version:"0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NodeJS",permalink:"/guides/0.3/getting-started/installation/nodejs/"},next:{title:"Windows",permalink:"/guides/0.3/getting-started/installation/nodejs/windows"}},d={},c=[{value:"NodeJS",id:"nodejs",level:3},{value:"Arch Linux",id:"arch-linux",level:4},{value:"Debian",id:"debian",level:4},{value:"Red Hat",id:"red-hat",level:4},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"Libsodium",id:"libsodium",level:3},{value:"Arch Linux",id:"arch-linux-1",level:4},{value:"Debian",id:"debian-1",level:4},{value:"Red Hat",id:"red-hat-1",level:4},{value:"Libzmq",id:"libzmq",level:3},{value:"Arch Linux",id:"arch-linux-2",level:4},{value:"Debian",id:"debian-2",level:4},{value:"Red Hat",id:"red-hat-2",level:4},{value:"Indy-sdk",id:"indy-sdk",level:3},{value:"Confirm installation",id:"confirm-installation",level:3}],p={toc:c},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux"},"Linux"),(0,r.kt)("p",null,"In this section, we will discuss the specific installation of the dependencies\nfor the more popular Linux distributions."),(0,r.kt)("h3",{id:"nodejs"},"NodeJS"),(0,r.kt)("p",null,"NodeJS is the most popular JavaScript runtime environment excluding\nbrowsers. It can run on your desktop or even a server."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Arch Linux",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pacman -S nodejs npm\n"))),(0,r.kt)(i.Z,{label:"Debian",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -fsSL https://deb.nodesource.com/setup_18.x | bash -\napt-get install -y nodejs\n"))),(0,r.kt)(i.Z,{label:"Red Hat",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -sL https://rpm.nodesource.com/setup_18.x | bash -\nyum install nodejs\n")))),(0,r.kt)("h3",{id:"npm"},"npm"),(0,r.kt)("p",null,"The Node Package Manager comes pre-bundles with the NodeJS installation from\nabove."),(0,r.kt)("h3",{id:"yarn"},"yarn"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only required when not using npm")),(0,r.kt)("p",null,"For every platform, the installation of yarn is the same."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install --global yarn\n")),(0,r.kt)("h3",{id:"libsodium"},"Libsodium"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jedisct1/libsodium"},"Libsodium")," is used by the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," for encryption, decryption,\nhashing and signing."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Arch Linux",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pacman -S libsodium\n"))),(0,r.kt)(i.Z,{label:"Debian",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get install libsodium-dev\n"))),(0,r.kt)(i.Z,{label:"Red Hat",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum install libsodium libsodium-devel\n")))),(0,r.kt)("h3",{id:"libzmq"},"Libzmq"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromq/libzmq"},"Libzmq")," is a lightweight messaging queue\nused by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk"),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Arch Linux",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pacman -S zeromq\n"))),(0,r.kt)(i.Z,{label:"Debian",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt-get install libzmq3-dev\n"))),(0,r.kt)(i.Z,{label:"Red Hat",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yum install libsodium zeromq-devel\n")))),(0,r.kt)("h3",{id:"indy-sdk"},"Indy-sdk"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All the steps mentioned below are distribution independent.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," is used by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-framework-javascript"},"Aries\nFramework\nJavaScript")," for all\nof its lower level functionality, like cryptography, ledger interaction and\nmuch more."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," has not been\nproperly for many distributions so here we will build it from source. This does\nmean that some additional requirements are necessary, like\n",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust"),"."),(0,r.kt)("p",null,"Downloading ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org"},"Rust")," is as easy as executing the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,r.kt)("p",null,"This will install ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs"},"Rustup")," which is the installer for\n",(0,r.kt)("a",{parentName:"p",href:"https://rust-lang.org"},"Rust"),"."),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"https://rust-lang.org"},"Rust"),", we can now build the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," from source."),(0,r.kt)("p",null,"First, clone the repository in a temporary directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/hyperledger/indy-sdk\n")),(0,r.kt)("p",null,"Secondly, go to the correct directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd indy-sdk/libindy\n")),(0,r.kt)("p",null,"Third, build the library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cargo build --release\n")),(0,r.kt)("p",null,"Lastly, move the library to the correct location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo mv target/release/libindy.so /usr/lib/libindy.so\n")),(0,r.kt)("h3",{id:"confirm-installation"},"Confirm installation"),(0,r.kt)("p",null,"To see whether the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," is\nproperly installed, run the following command and it should not error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npx -p @aries-framework/node@^0.3 is-indy-installed\n")))}b.isMDXComponent=!0}}]);