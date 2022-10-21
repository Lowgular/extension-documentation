"use strict";(self.webpackChunkextension_documentation=self.webpackChunkextension_documentation||[]).push([[494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Forms and inputs",p={unversionedId:"templates_configuration/forms_and_inputs",id:"templates_configuration/forms_and_inputs",title:"Forms and inputs",description:"You can configure ready to use forms, which can be connected with data properties from the component. These will appear in the Actions... -> Display Data list for Reactive Forms types of properties, like FormGroup.",source:"@site/docs/06_templates_configuration/05_forms_and_inputs.md",sourceDirName:"06_templates_configuration",slug:"/templates_configuration/forms_and_inputs",permalink:"/extension-documentation/docs/templates_configuration/forms_and_inputs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/extension-documentation/docs/templates_configuration/lists"},next:{title:"Recipies",permalink:"/extension-documentation/docs/category/recipies"}},l={},s=[{value:"Properties of forms templates",id:"properties-of-forms-templates",level:2},{value:"form",id:"form",level:3},{value:"input",id:"input",level:3},{value:"formSubmit",id:"formsubmit",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forms-and-inputs"},"Forms and inputs"),(0,o.kt)("p",null,"You can configure ready to use forms, which can be connected with data properties from the component. These will appear in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actions...")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Display Data")," list for Reactive Forms types of properties, like ",(0,o.kt)("inlineCode",{parentName:"p"},"FormGroup"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "inputs": {\n    "input-default": "<input matInput type=\\"text\\" placeholder=\\"$label$\\" formControlName=\\"$formControlName$\\" required>",\n    "input-text": "<input matInput type=\\"text\\" placeholder=\\"$label$\\" formControlName=\\"$formControlName$\\" required>",\n    "input-number": "<input matInput type=\\"number\\" placeholder=\\"$label$\\" formControlName=\\"$formControlName$\\" required>",\n    "input-submit": "<button type=\\"submit\\" mat-raised-button color=\\"primary\\">$content$</button>"\n  },\n  "forms": {\n    "mat-form": {\n      "form": "<form [formGroup]=\\"$formVariable$\\" (ngSubmit)=\\"$submitCallback$\\">$content$</form>",\n      "input": "<div><mat-form-field appearance=\\"fill\\"><mat-label>$label$</mat-label>$inputs.input-text$<mat-error *ngIf=\\"$formVariable$.get(\'$formControlName$\')!.invalid\\">$formControlName$ is invalid</mat-error></mat-form-field></div>",\n      "formSubmit": "<div>$inputs.input-submit$</div>"\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"properties-of-forms-templates"},"Properties of forms templates"),(0,o.kt)("h3",{id:"form"},"form"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")," property."),(0,o.kt)("p",null,"This is how Lowgular will display container of the form. You can decide if you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," with submit or add custom container of the form."),(0,o.kt)("h3",{id:"input"},"input"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")," property."),(0,o.kt)("p",null,"This is how Lowgular will display single input of the form. You can decide if you want use traditional ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," or material ",(0,o.kt)("inlineCode",{parentName:"p"},"matInput"),". In this section you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"$inputs.custom-type$")," variables to display correct input base on type."),(0,o.kt)("p",null,"Inputs can be set by adding new types to ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," section."),(0,o.kt)("h3",{id:"formsubmit"},"formSubmit"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")," property."),(0,o.kt)("p",null,"This is how Lowgular will display submit button. You can decide what you want to use. Also here you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"$inputs.custom-type$")," variables to display correct input base on type."))}m.isMDXComponent=!0}}]);