"use strict";(self.webpackChunkextension_documentation=self.webpackChunkextension_documentation||[]).push([[828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="Coding Standards",c={unversionedId:"code_configuration/coding-standards",id:"code_configuration/coding-standards",title:"Coding Standards",description:"Start by creating a coding-standards.json file in your root workspace folder. The file should look like the one below:",source:"@site/docs/05_code_configuration/coding-standards.md",sourceDirName:"05_code_configuration",slug:"/code_configuration/coding-standards",permalink:"/extension-documentation/docs/code_configuration/coding-standards",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code Configuration",permalink:"/extension-documentation/docs/category/code-configuration"},next:{title:"Entities",permalink:"/extension-documentation/docs/code_configuration/entities"}},d={},s=[],l={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-standards"},"Coding Standards"),(0,o.kt)("p",null,"Start by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"coding-standards.json")," file in your root workspace folder. The file should look like the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "entityRelations": {\n    "component": {\n      "model": ["PROPERTY"],\n      "service": ["CONSTRUCTOR"],\n      "router": ["CONSTRUCTOR"],\n      "activatedRoute": ["CONSTRUCTOR"]\n    },\n    "service": {\n      "httpClient": ["CONSTRUCTOR"],\n      "model": ["PARAMETER", "RETURN"]\n    }\n  },\n  "external": {\n    "httpClient": {\n      "type": "HttpClient",\n      "module": "@angular/common/http"\n    },\n    "router": {\n      "type": "Router",\n      "module": "@angular/router"\n    },\n    "activatedRoute": {\n      "type": "ActivatedRoute",\n      "module": "@angular/router"\n    }\n  },\n  "entities": {\n    "component": {\n      "type": "ANGULAR_COMPONENT",\n      "folder": "components/$name$",\n      "config": {\n        "stylesExtension": "none",\n        "viewEncapsulation": "None",\n        "selector": "generated",\n        "changeDetectionStrategy": "OnPush"\n      }\n    },\n    "model": {\n      "type": "DATA_STRUCTURE"\n    },\n    "service": {\n      "type": "ANGULAR_SERVICE"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);