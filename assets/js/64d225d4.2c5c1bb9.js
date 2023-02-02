"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[477],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={},l="React Native",u={unversionedId:"getting-started/installation/react-native/index",id:"getting-started/installation/react-native/index",title:"React Native",description:"The setup for React Native is rather different than Node.js. We do not have to install dependencies on the host-platform, but for the build target. This would be the",source:"@site/guides/getting-started/installation/react-native/index.md",sourceDirName:"getting-started/installation/react-native",slug:"/getting-started/installation/react-native/",permalink:"/guides/getting-started/installation/react-native/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apple (Arm)",permalink:"/guides/getting-started/installation/nodejs/apple-arm"},next:{title:"iOS",permalink:"/guides/getting-started/installation/react-native/ios"}},c={},d=[{value:"Known Errors",id:"known-errors",level:2},{value:"Add setup of external storage permissions (Android)",id:"add-setup-of-external-storage-permissions-android",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-native"},"React Native"),(0,a.kt)("p",null,"The setup for React Native is rather different than Node.js. We do not have to install dependencies on the host-platform, but for the build target. This would be the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," for Android and iOS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/getting-started/installation/react-native/android"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/getting-started/installation/react-native/ios"},"iOS"))),(0,a.kt)("h2",{id:"known-errors"},"Known Errors"),(0,a.kt)("h3",{id:"add-setup-of-external-storage-permissions-android"},"Add setup of external storage permissions (Android)"),(0,a.kt)("p",null,"If you find the following error when using this package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2020-01-27 16:25:02.300 9955-10044/com.usereactnativeindysdk E/log_panics: thread 'unnamed' panicked at 'called `Result::unwrap()` on an `Err` value: Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }': libcore/result.rs:945\n")),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreate")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"MainActivity")," of your project where you want to use this library in a following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MainActivity extends ReactActivity {\n  ...\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    ...\n    File externalFilesDir = getExternalFilesDir(null);\n    String path = externalFilesDir.getAbsolutePath();\n    System.out.println("externalFilesDir=" + path);\n\n    try {\n      Os.setenv("EXTERNAL_STORAGE", path, true);\n    } catch (ErrnoException e) {\n      e.printStackTrace();\n    }\n    ...\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"This should resolve the issue with permissions."))}f.isMDXComponent=!0}}]);