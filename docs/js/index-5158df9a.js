import{d as e,R as r,S as t,U as o,V as n,u as s,c as i,W as a}from"./@vue-20d92ce8.js";import{c as l}from"./pinia-694d7107.js";import{c}from"./pinia-plugin-persistedstate-7d404db2.js";import{c as u,a as d}from"./vue-router-d904d407.js";/* empty css                      */import"./vue-global-api-87c0c727.js";import{z as m,_ as p}from"./ant-design-vue-4d79b567.js";import{d as f}from"./dayjs-b1f08694.js";import"./vue-demi-71ba0ef2.js";import"./@babel-48e78a4a.js";import"./@emotion-e00a17c0.js";import"./@ant-design-928fc8b0.js";import"./@ctrl-4982d949.js";import"./stylis-e805dc06.js";import"./vue-types-6bcea8eb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const h={},y=function(e,r,t){if(!r||0===r.length)return e();const o=document.getElementsByTagName("link");return Promise.all(r.map((e=>{if(e=function(e,r){return new URL(e,r).href}(e,t),e in h)return;h[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(!!t)for(let t=o.length-1;t>=0;t--){const n=o[t];if(n.href===e&&(!r||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":"modulepreload",r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r?new Promise(((r,t)=>{s.addEventListener("load",r),s.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e}))},g=["/"],j=[{path:"/",name:"Home",component:()=>y((()=>import("./index-0bbd39aa.js")),["./index-0bbd39aa.js","./@vue-20d92ce8.js","./@ant-design-928fc8b0.js","./@ctrl-4982d949.js","..\\css\\index-401ff5e1.css"],import.meta.url)}],v=u({history:d(),routes:j});v.beforeEach((async(e,r,t)=>{if(g.indexOf(e.fullPath)>-1)return t();t("/")}));const E=a(e({__name:"App",setup(e){function a(e,r){return r?r.getDialogWrap():document.body}return f.locale("zh-cn"),(e,l)=>{const c=r("router-view"),u=p;return t(),o(u,{"component-size":"middle",locale:s(m),getPopupContainer:a},{default:n((()=>[i(c)])),_:1},8,["locale"])}}})),b=l();b.use(c({auto:!0})),E.use(b).use(v),E.mount("#app");
