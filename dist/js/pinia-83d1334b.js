import{i as t}from"./vue-demi-71ba0ef2.js";import{x as s,r as a,y as n}from"./@vue-0cf78d4d.js";
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const o=Symbol();var c;function e(){const c=s(!0),e=c.run((()=>a({})));let i=[],r=[];const p=n({install(t){p._a=t,t.provide(o,p),t.config.globalProperties.$pinia=p,r.forEach((t=>i.push(t))),r=[]},use(s){return this._a||t?i.push(s):r.push(s),this},_p:i,_a:null,_e:c,_s:new Map,state:e});return p}!function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"}(c||(c={}));export{e as c};
