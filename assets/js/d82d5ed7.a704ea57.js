/*! For license information please see d82d5ed7.a704ea57.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14799],{49524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(85893),a=n(11151);const s={sidebar_label:"Page.setCacheEnabled"},c="Page.setCacheEnabled() method",l={id:"api/puppeteer.page.setcacheenabled",title:"Page.setCacheEnabled() method",description:"Toggles ignoring cache for each request based on the enabled state. By default, caching is enabled.",source:"@site/../docs/api/puppeteer.page.setcacheenabled.md",sourceDirName:"api",slug:"/api/puppeteer.page.setcacheenabled",permalink:"/next/api/puppeteer.page.setcacheenabled",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.setCacheEnabled"},sidebar:"api",previous:{title:"Page.setBypassServiceWorker",permalink:"/next/api/puppeteer.page.setbypassserviceworker"},next:{title:"Page.setContent",permalink:"/next/api/puppeteer.page.setcontent"}},i={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Default value:",id:"default-value",level:4}];function o(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagesetcacheenabled-method",children:"Page.setCacheEnabled() method"}),"\n",(0,r.jsx)(t.p,{children:"Toggles ignoring cache for each request based on the enabled state. By default, caching is enabled."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setCacheEnabled(enabled?: boolean): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"boolean"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," sets the ",(0,r.jsx)(t.code,{children:"enabled"})," state of cache"]})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h4,{id:"default-value",children:"Default value:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"true"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,t,n)=>{var r=n(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,o=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:o,props:s,_owner:l.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var r=n(67294);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);