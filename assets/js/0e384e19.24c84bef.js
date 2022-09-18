"use strict";(self.webpackChunkextension_documentation=self.webpackChunkextension_documentation||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Lowgular Intro",l={unversionedId:"intro",id:"intro",title:"Lowgular Intro",description:"Let's discover Lowgular in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/extension-documentation/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Configure Coding Standards",permalink:"/extension-documentation/docs/category/configure-coding-standards"}},s={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Create New...",id:"create-new",level:3},{value:"Actions...",id:"actions",level:3},{value:"Create Library",id:"create-library",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lowgular-intro"},"Lowgular Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Lowgular in less than 5 minutes"),"."),(0,a.kt)("p",null,"We put a lot of effort to make your Angular development easier, we have designed a lot of features that help you write a better Angular apps faster."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"downloading a plugin")," from the Marketplace."),(0,a.kt)("p",null,"Now you have a few options:"),(0,a.kt)("h3",{id:"create-new"},"Create New..."),(0,a.kt)("p",null,"Right click in the project tree, select ",(0,a.kt)("inlineCode",{parentName:"p"},"New")," > ",(0,a.kt)("img",{src:"https://avatars.githubusercontent.com/u/109138416",width:"20"})," ",(0,a.kt)("inlineCode",{parentName:"p"},"Create New...")),(0,a.kt)("p",null,"Or you can use a shortcut, in the project explorer and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + D")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd + Shift + D")," on Mac)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create New",src:n(8997).Z,width:"1037",height:"661"})),(0,a.kt)("p",null,"Then you will see a list of entities to create."),(0,a.kt)("p",null,"The default setup ships with a simple architecture: Component, Model and Service."),(0,a.kt)("p",null,"You can configure the list, head in to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"category/configure-coding-standards"},"coding standards configuration"))," section for more info."),(0,a.kt)("h3",{id:"actions"},"Actions..."),(0,a.kt)("p",null,"Open generated typescript or html file in the editor, then right click on it and select: ",(0,a.kt)("img",{src:"https://avatars.githubusercontent.com/u/109138416",width:"20"})," ",(0,a.kt)("inlineCode",{parentName:"p"},"Actions...")),(0,a.kt)("p",null,"Or you can use a shortcut, in the editor and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + X")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd + Shift + X")," on Mac)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Actions",src:n(6150).Z,width:"1033",height:"659"})),(0,a.kt)("p",null,"Then you will see a list of with available actions."),(0,a.kt)("p",null,"The actions will differ depending on what type of file is open in the editor."),(0,a.kt)("p",null,"You can explore more about actions when you head in to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"category/features"},"features"))," section"),(0,a.kt)("h3",{id:"create-library"},"Create Library"),(0,a.kt)("p",null,"You can also create a library that will already setup a linter and testing targets as well scaffold some library code for you."),(0,a.kt)("p",null,"In a basic setup, it is not very useful because everything is created inside of an App project type, however if you decide to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"category/configure-coding-standards"},"configure your coding standards"))," then you it becomes very useful"))}u.isMDXComponent=!0},6150:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/actions-d7d66cc639b4c8aeb79c01daaf69d49d.png"},8997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-new-361a09b05a8a1355ba2fcb56578853a4.png"}}]);