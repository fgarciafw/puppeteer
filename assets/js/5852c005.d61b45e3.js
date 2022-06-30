"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=p,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),p=(r(67294),r(3905));const o={},a="HTTPResponse.headers() method",s={unversionedId:"api/puppeteer.httpresponse.headers",id:"api/puppeteer.httpresponse.headers",title:"HTTPResponse.headers() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.headers.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.headers",permalink:"/puppeteer/api/puppeteer.httpresponse.headers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"HTTPResponse.fromServiceWorker() method",permalink:"/puppeteer/api/puppeteer.httpresponse.fromserviceworker"},next:{title:"HTTPResponse.json() method",permalink:"/puppeteer/api/puppeteer.httpresponse.json"}},i={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponseheaders-method"},"HTTPResponse.headers() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"headers(): Record<string, string>;\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Record","<","string, string",">"),(0,p.kt)("p",null,"An object with HTTP headers associated with the response. All header names are lower-case."))}u.isMDXComponent=!0}}]);