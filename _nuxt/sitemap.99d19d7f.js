import{y as u,z as i,a as c,o as r,b as n,C as _,u as p,F as m,f,t as g}from"./entry.1272de68.js";import{u as d}from"./fetch.645ef3c8.js";const h=["href"],C={__name:"sitemap",async setup(y){let e,t;const l=u().public,{data:s}=([e,t]=i(()=>d(l.BASE_API_URL+"/api/all?results=2000","$lKzzU37qOM")),e=await e,t(),e),o=s.value.entries;return s.value.results,c({title:"HH - Sitemap"}),(B,x)=>(r(!0),n(m,null,_(p(o),a=>(r(),n("li",null,[f("a",{href:"/game/"+a.slug},g(a.slug),9,h)]))),256))}};export{C as default};
