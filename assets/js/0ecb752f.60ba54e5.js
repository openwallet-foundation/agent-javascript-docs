"use strict";(self.webpackChunkcredo_ts_docs=self.webpackChunkcredo_ts_docs||[]).push([[7824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="Migrating from an Indy SDK Wallet to Aries Askar",d={unversionedId:"updating/update-indy-sdk-to-askar",id:"updating/update-indy-sdk-to-askar",title:"Migrating from an Indy SDK Wallet to Aries Askar",description:"This documentation explains the process of migrating your Indy SDK wallet to Aries Askar.",source:"@site/guides/updating/update-indy-sdk-to-askar.md",sourceDirName:"updating",slug:"/updating/update-indy-sdk-to-askar",permalink:"/guides/updating/update-indy-sdk-to-askar",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update Assistant",permalink:"/guides/updating/update-assistant"},next:{title:"Migrating from Credo 0.1.0 to 0.2.x",permalink:"/guides/updating/versions/0.1-to-0.2"}},s={},l=[{value:"What does the migration do internally?",id:"what-does-the-migration-do-internally",level:2},{value:"Create a backup",id:"create-a-backup",level:3},{value:"Migrate the database to an Aries Askar structure",id:"migrate-the-database-to-an-aries-askar-structure",level:3},{value:"Try to open the wallet in the new Aries Askar structure",id:"try-to-open-the-wallet-in-the-new-aries-askar-structure",level:3},{value:"Update the keys",id:"update-the-keys",level:3},{value:"Update the DIDs",id:"update-the-dids",level:3},{value:"Update the credential definitions",id:"update-the-credential-definitions",level:3},{value:"Update the link secret(s) (master secret)",id:"update-the-link-secrets-master-secret",level:3},{value:"Update the credentials",id:"update-the-credentials",level:3},{value:"All the other records",id:"all-the-other-records",level:3},{value:"How to update",id:"how-to-update",level:2},{value:"Migrate code to Aries Askar, Indy VDR, AnonCreds.",id:"migrate-code-to-aries-askar-indy-vdr-anoncreds",level:3},{value:"Add the required dependencies",id:"add-the-required-dependencies",level:3},{value:"Getting the database path",id:"getting-the-database-path",level:3},{value:"React Native",id:"react-native",level:4},{value:"Node.JS",id:"nodejs",level:4}],p={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-an-indy-sdk-wallet-to-aries-askar"},"Migrating from an Indy SDK Wallet to Aries Askar"),(0,r.kt)("p",null,"This documentation explains the process of migrating your Indy SDK wallet to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-askar"},"Aries Askar"),"."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"While the migration script technically works on Node.JS, it is strongly advised not to use it, yet. The migration of issuer records (such as Schemas and Credential Definitions) is not implemented yet. When a credential definition is detected it will revert the migration process and no harm is done.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Postgres is not supported. If you are using postgres with Indy SDK and need to update to Aries Askar, please open an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openwallet-foundation/credo-ts"},"GitHub"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The migration script is supported to run on 0.3.x before migrating from 0.3.x to 0.4.x. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/versions/0.3-to-0.4"},"Migrating from Credo 0.3.x to 0.4.x")," to get to 0.4.x afterwards."),(0,r.kt)("p",{parentName:"admonition"},"It is important to note that this script must be ran before you update from 0.3.x to 0.4.x.")),(0,r.kt)("h2",{id:"what-does-the-migration-do-internally"},"What does the migration do internally?"),(0,r.kt)("p",null,"The migration script does the following to make sure everything is migrated properly, and if anything goes wrong, it will revert back to a working state."),(0,r.kt)("h3",{id:"create-a-backup"},"Create a backup"),(0,r.kt)("p",null,"Because undefined behavior might occur, we create a backup in the new ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp")," directory from Credo. if some error occurs, it will be reverted back to the backed-up state and if no error occurs, it will delete the backup from the temporary directory."),(0,r.kt)("h3",{id:"migrate-the-database-to-an-aries-askar-structure"},"Migrate the database to an Aries Askar structure"),(0,r.kt)("p",null,"The Indy-sdk and Aries Askar have different database structures. So first of all we need to change some table names, decrypt all the items with the old Indy keys, encrypt the items with the new Aries Askar keys and store them inside the new structure."),(0,r.kt)("h3",{id:"try-to-open-the-wallet-in-the-new-aries-askar-structure"},"Try to open the wallet in the new Aries Askar structure"),(0,r.kt)("p",null,"When the wallet is correctly transformed, the wallet will be attempted to be opened."),(0,r.kt)("h3",{id:"update-the-keys"},"Update the keys"),(0,r.kt)("p",null,"Aries Askar has a specific way to store keys and every key, defined by the category of ",(0,r.kt)("inlineCode",{parentName:"p"},"Indy::Key")," will be migrated."),(0,r.kt)("h3",{id:"update-the-dids"},"Update the DIDs"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This update script does not transform did records. This is fine for something like ",(0,r.kt)("inlineCode",{parentName:"p"},"did:peer"),", but will cause issues with ",(0,r.kt)("inlineCode",{parentName:"p"},"indy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sov")," DIDs. For more information, please check out the ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/versions/0.3-to-0.4#removal-of-publicdidseed-and-publicdid"},"Migrating from Credo 0.3.x to 0.4.x"))),(0,r.kt)("h3",{id:"update-the-credential-definitions"},"Update the credential definitions"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Updating of credential definitions is not yet supported. This is why it is strongly advised not to run this script in a node.js environment.")),(0,r.kt)("h3",{id:"update-the-link-secrets-master-secret"},"Update the link secret(s) (master secret)"),(0,r.kt)("p",null,"The link secrets, identified by the category ",(0,r.kt)("inlineCode",{parentName:"p"},"Indy::MasterSecret"),", are updated next. They are stored inside a new ",(0,r.kt)("inlineCode",{parentName:"p"},"AnonCredsLinkSecretRecord"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since we have to set a default link secret, some additional logic is added to detect this. You can either supply a ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLinkSercetId")," as a constructor parameter or it will be based on your ",(0,r.kt)("inlineCode",{parentName:"p"},"walletId"),"."),(0,r.kt)("p",{parentName:"admonition"},"If there is no Indy record with the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLinkSecretId")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"walletId"),", an error will be thrown and the migration will be restored.")),(0,r.kt)("h3",{id:"update-the-credentials"},"Update the credentials"),(0,r.kt)("p",null,"The credentials, identified by the category ",(0,r.kt)("inlineCode",{parentName:"p"},"Indy::Credential")," are updated last. They are stored in the new ",(0,r.kt)("inlineCode",{parentName:"p"},"AnonCredsCredentialRecord")," as a one-to-one copy. This means that they now support more tags and will make querying a lot easier."),(0,r.kt)("h3",{id:"all-the-other-records"},"All the other records"),(0,r.kt)("p",null,"All the other records will be transferred without any updates as they are not Indy specific."),(0,r.kt)("h2",{id:"how-to-update"},"How to update"),(0,r.kt)("p",null,"Updating does not require a lot of code, but must be done with caution."),(0,r.kt)("p",null,"It is very important to note that the migration script only has to be run once. If it runs for a second time, it will error saying that the database is already migrated. Also, when the migration is finished, it is common practice to store this state in your persistent app storage. This script does not provide a way to detect if an update has happened, so storing this value will prevent the script from running every time. For more information regarding this topic, please check out ",(0,r.kt)("a",{parentName:"p",href:"/guides/updating/update-assistant#storing-the-agent-storage-version-outside-of-the-agent-storage"},"Update Assistant"),"."),(0,r.kt)("h3",{id:"migrate-code-to-aries-askar-indy-vdr-anoncreds"},"Migrate code to Aries Askar, Indy VDR, AnonCreds."),(0,r.kt)("p",null,"Since Credo 0.4, there have been three new packages introduced that replace Indy SDK: Aries Askar (secure storage and cryptography), Indy VDR (integration with Hyperledger Indy blockchain), and AnonCreds (AnonCreds credential format)."),(0,r.kt)("p",null,"Before setting up the migration script for Aries Askar (the storage), it is advised to first update your code with the new dependencies, and test it in a fresh environment to make sure everything works as expected."),(0,r.kt)("p",null,"To update your code to use the new packages, remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"@aries-framework/indy-sdk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indy-sdk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"indy-sdk-react-native"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/indy-sdk")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/indy-sdk-react-native")," packages from the dependencies of your project, and remove all related imports from your code."),(0,r.kt)("p",null,"Then, setup the required dependencies for Aries Askar, Indy VDR, and AnonCreds. It is not required to set up all dependencies. This guide focuses on migration the storage from Indy SDK to Aries Askar, so only the Aries Askar dependency is required."),(0,r.kt)("p",null,"To setup the new dependencies, follow the getting started guide for each package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guides/getting-started/set-up/aries-askar"},"Aries Askar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guides/getting-started/set-up/anoncreds"},"AnonCreds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guides/getting-started/set-up/indy-vdr"},"Indy VDR"))),(0,r.kt)("p",null,"Once this has been set-up, make sure all code works on a ",(0,r.kt)("strong",{parentName:"p"},"fresh environment")," before continuing with the migration script."),(0,r.kt)("h3",{id:"add-the-required-dependencies"},"Add the required dependencies"),(0,r.kt)("p",null,"Once all the new dependencies have been configured for your platform, you can add the migration script to your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @credo-ts/indy-sdk-to-askar-migration@^0.5.3\n")),(0,r.kt)("p",null,"Below is the minimal code required for the migration to work. It is recommended to turn the logger on as it gives a lot of information regarding the migration."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The agent is not allowed to be initialized to run this script. This makes sure nothing else happens during the migration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { agentDependencies } from '@credo-ts/react-native' // or @credo-ts/node\nimport { AskarModule } from '@credo-ts/askar'\nimport { IndySdkToAskarMigrationUpdater } from '@credo-ts/indy-sdk-to-askar-migration'\nimport { ariesAskar } from '@hyperledger/aries-askar-react-native'\n\nconst oldAgent = new Agent({\n  config: {\n    /* ... */\n  },\n  modules: {\n    // ... other modules (including optionally IndyVdrModule and AnonCredsModule)\n    ariesAskar: new AskarModule({\n      ariesAskar,\n    }),\n  },\n  dependencies: agentDependencies,\n})\n\n// See section below for getting the database path\nconst dbPath = getMobileIndySdkDatabasePath(oldAgent.config.walletConfig.id)\n\nconst updater = await IndySdkToAskarMigrationUpdater.initialize({ dbPath, agent: oldAgent })\nawait updater.update()\n")),(0,r.kt)("h3",{id:"getting-the-database-path"},"Getting the database path"),(0,r.kt)("h4",{id:"react-native"},"React Native"),(0,r.kt)("p",null,"On Android, the database is commonly located under the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExternalDirectoryPath"),". If you did not follow the default Indy SDK for React Native setup on Android, your path might differ. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-archives/indy-sdk-react-native#5-load-indy-library"},"Indy SDK React Native Android Setup")," for the default behavior."),(0,r.kt)("p",null,"On iOS, the database is commonly located under the ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentDirectoryPath"),". For iOS this can only change if your phone does not have the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOME")," environment variable set. This is not usual behavior, and if ",(0,r.kt)("inlineCode",{parentName:"p"},"HOME")," is not set, the ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," in the code section below will be ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/indy/Documents"),"."),(0,r.kt)("p",null,"To get the path to the database, you can use the following code, where ",(0,r.kt)("inlineCode",{parentName:"p"},"walletId")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"walletConfig.id"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Platform } from 'react-native'\nimport fs from 'react-native-fs'\n\n/**\n * Get the path to and Indy SDK SQlite wallet database on mobile.\n *\n * @note this assumes you are using the default configuration.\n * If you are not, you will need to adjust the path accordingly.\n */\nfunction getMobileIndySdkDatabasePath(walletId: string) {\n  const base = Platform.OS === 'android' ? fs.ExternalDirectoryPath : fs.DocumentDirectoryPath\n\n  return `${base}/.indy_client/wallet/${walletId}/sqlite.db`\n}\n")),(0,r.kt)("h4",{id:"nodejs"},"Node.JS"),(0,r.kt)("p",null,"Migration of data from Indy SDK to Aries Askar is not supported yet in Node.JS. If you are using Node.JS or Postgres and need to update to Aries Askar, please open an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openwallet-foundation/credo-ts"},"GitHub"),"."))}c.isMDXComponent=!0}}]);