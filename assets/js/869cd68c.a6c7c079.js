"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8691],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,v=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9220:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},d="Android",s={unversionedId:"getting-started/installation/react-native/android",id:"getting-started/installation/react-native/android",title:"Android",description:"Setting up React Native for Android can be a bit of a hassle, but following",source:"@site/guides/getting-started/installation/react-native/android.md",sourceDirName:"getting-started/installation/react-native",slug:"/getting-started/installation/react-native/android",permalink:"/guides/getting-started/installation/react-native/android",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/guides/getting-started/installation/react-native/ios"},next:{title:"Setup",permalink:"/guides/getting-started/set-up/"}},p={},c=[{value:"Set the minimum SDK version",id:"set-the-minimum-sdk-version",level:3},{value:"Add the Sovrin maven repository",id:"add-the-sovrin-maven-repository",level:3},{value:"Adding the JNA library dependency",id:"adding-the-jna-library-dependency",level:3},{value:"Adding the Android indy-sdk libaries",id:"adding-the-android-indy-sdk-libaries",level:3},{value:"React Native &gt;= 0.70.0",id:"react-native--0700",level:4},{value:"React Native 0.62.0 - 0.69.5",id:"react-native-0620---0695",level:4},{value:"React Native &lt;= 0.61.5",id:"react-native--0615",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android"},"Android"),(0,r.kt)("p",null,"Setting up React Native for Android can be a bit of a hassle, but following\nthese steps below it should be possible."),(0,r.kt)("h3",{id:"set-the-minimum-sdk-version"},"Set the minimum SDK version"),(0,r.kt)("p",null,"inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," add the minimum sdk version of 21"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="android/build.gradle"',title:'"android/build.gradle"'},"buildscript {\n    ext {\n        ...\n        minSdkVersion = 21\n        ...\n    }\n}\n")),(0,r.kt)("h3",{id:"add-the-sovrin-maven-repository"},"Add the Sovrin maven repository"),(0,r.kt)("p",null,"inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," add the url for the Sovrin maven repository."),(0,r.kt)("p",null,"Note: ensure that the following is added to the correct maven braces as there are other near this location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="android/build.gradle"',title:'"android/build.gradle"'},"allprojects {\n    repositories {\n        ...\n        maven {\n            url 'https://repo.sovrin.org/repository/maven-public'\n        }\n        ...\n    }\n}\n")),(0,r.kt)("h3",{id:"adding-the-jna-library-dependency"},"Adding the JNA library dependency"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/java-native-access/jna"},"JNA"),", Java Native Access,\nlibrary has to be added in order to communicate with the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},"dependencies {\n    ...\n    implementation 'net.java.dev.jna:jna:5.2.0'\n    ...\n}\n")),(0,r.kt)("h3",{id:"adding-the-android-indy-sdk-libaries"},"Adding the Android indy-sdk libaries"),(0,r.kt)("p",null,"The following steps will add the correct dependencies at the correct location\nfor everything to work properly"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guide presumes that you execute every command from the root of your\nproject")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"create a ",(0,r.kt)("inlineCode",{parentName:"li"},"jniLibs")," directory")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mkdir android/app/src/main/jniLibs\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"create the architecture specific sub-directories")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mkdir android/app/src/main/jniLibs/arm64-v8a\nmkdir android/app/src/main/jniLibs/armeabi-v7a\nmkdir android/app/src/main/jniLibs/x86\nmkdir android/app/src/main/jniLibs/x86_64\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Downlaod the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," libraries\nto the correct location")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="arm64-v8a"',title:'"arm64-v8a"'},"curl https://repo.sovrin.org/android/libindy/stable/1.16.0/libindy_android_arm64_1.16.0.zip --output arm64.zip\nunzip arm64.zip\nmv libindy_arm64/lib/libindy.so android/app/src/main/jniLibs/arm64-v8a/libindy.so\nrm arm64.zip\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="armeabi-v7a"',title:'"armeabi-v7a"'},"curl https://repo.sovrin.org/android/libindy/stable/1.16.0/libindy_android_armv7_1.16.0.zip --output armv7.zip\nunzip armv7.zip\nmv libindy_armv7/lib/libindy.so android/app/src/main/jniLibs/armeabi-v7a/libindy.so\nrm armv7.zip\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="x86"',title:'"x86"'},"curl https://repo.sovrin.org/android/libindy/stable/1.16.0/libindy_android_x86_1.16.0.zip --output x86.zip\nunzip x86.zip\nmv libindy_x86/lib/libindy.so android/app/src/main/jniLibs/x86/libindy.so\nrm x86.zip\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="x86_64"',title:'"x86_64"'},"curl https://repo.sovrin.org/android/libindy/stable/1.16.0/libindy_android_x86_64_1.16.0.zip --output x86_64.zip\nunzip x86_64.zip\nmv libindy_x86_64/lib/libindy.so android/app/src/main/jniLibs/x86_64/libindy.so\nrm x86_64.zip\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Download the JNA libraries")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="arm64-v8a"',title:'"arm64-v8a"'},"curl -LO https://github.com/java-native-access/jna/raw/5.5.0/lib/native/android-aarch64.jar\n\njar xf android-aarch64.jar\nmv libjnidispatch.so android/app/src/main/jniLibs/arm64-v8a/libjnidispatch.so\nrm android-aarch64.jar libjnidispatch.so\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="armeabi-v7a"',title:'"armeabi-v7a"'},"curl -LO https://github.com/java-native-access/jna/raw/5.5.0/lib/native/android-armv7.jar\n\njar xf android-armv7.jar\nmv libjnidispatch.so android/app/src/main/jniLibs/armeabi-v7a/libjnidispatch.so\nrm android-armv7.jar libjnidispatch.so\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="x86"',title:'"x86"'},"curl -LO https://github.com/java-native-access/jna/raw/5.5.0/lib/native/android-x86.jar\n\njar xf android-x86.jar\nmv libjnidispatch.so android/app/src/main/jniLibs/x86/libjnidispatch.so\nrm android-x86.jar libjnidispatch.so\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="x86_64"',title:'"x86_64"'},"curl -LO https://github.com/java-native-access/jna/raw/5.5.0/lib/native/android-x86-64.jar\n\njar xf android-x86-64.jar\nmv libjnidispatch.so android/app/src/main/jniLibs/x86_64/libjnidispatch.so\nrm android-x86-64.jar libjnidispatch.so\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Load the library inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"MainActivity.java"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainActivity.java"',title:'"MainActivity.java"'},'...\nimport android.os.Bundle;\nimport android.system.ErrnoException;\nimport android.system.Os;\nimport java.io.File;\n...\n\npublic class MainActivity extends ReactActivity {\n  ...\n\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    try {\n      Os.setenv("EXTERNAL_STORAGE", getExternalFilesDir(null).getAbsolutePath(), true);\n      System.loadLibrary("indy");\n    } catch (ErrnoException e) {\n      e.printStackTrace();\n    }\n  }\n}\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Hermes")),(0,r.kt)("p",null,"Hermes is required in order to perform ledger operations using the Indy SDK."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more info, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk/issues/2346#issuecomment-841000640"},"this Indy-SDK issue"),".")),(0,r.kt)("h4",{id:"react-native--0700"},"React Native >= 0.70.0"),(0,r.kt)("p",null,"Hermes is enabled by default"),(0,r.kt)("h4",{id:"react-native-0620---0695"},"React Native 0.62.0 - 0.69.5"),(0,r.kt)("p",null,"Add or adjust the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},"project.ext.react = [\n    enableHermes: true,  // clean and rebuild if changing\n]\n")),(0,r.kt)("h4",{id:"react-native--0615"},"React Native <= 0.61.5"),(0,r.kt)("p",null,"Hermes is not required for older versions of React Native"))}u.isMDXComponent=!0}}]);