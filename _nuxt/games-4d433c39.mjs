import{_ as m,u as b,w as y,r as p,o as h,j as g,f as u,a as t,t as l,e as x,b as S,y as w,z as V}from"./entry-00f9b3a2.mjs";import{u as $}from"./fetch-7aba07d5.mjs";const k={name:"List",props:{msg:String},data(){return{total_entries:0,layout:"grid",responsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"600px",numVisible:2,numScroll:2},{breakpoint:"480px",numVisible:1,numScroll:1}]}}},I=Object.assign(k,{async setup(o,{expose:r}){r();let c,i;const a=b(),d=a.params;let e="https://hh3.gbdev.io/api/all?results=1000";a.name=="music"?e="https://hh3.gbdev.io/api/search?type=music":a.name=="demos"?e="https://hh3.gbdev.io/api/search?type=demo":e="https://hh3.gbdev.io/api/all?results=1000";const{data:n}=([c,i]=y(()=>$(e)),c=await c,i(),c),s=n.value.entries,f=n.value.results,_={route:a,a:d,url:e,data:n,entries:s,total_entries:f};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),v=o=>(w("data-v-f7058fa8"),o=o(),V(),o),j={class:"col-12 sm:col-6 lg:col-4 xl:col-3"},B={class:"product-grid-item card"},C={class:"product-grid-item-top"},D=v(()=>t("i",{class:"pi pi-tag product-category-icon"},null,-1)),N={class:"product-category"},O={class:"product-grid-item-content"},L=["src","alt"],z={class:"product-name"},A={class:"product-description"},F=v(()=>t("div",{class:"product-grid-item-bottom"},null,-1));function R(o,r,c,i,a,d){const e=p("router-link"),n=p("DataView");return h(),g(n,{value:i.entries,layout:a.layout,paginator:!0,rows:20},{grid:u(s=>[t("div",j,[t("div",B,[t("div",C,[t("div",null,[D,t("span",N,l(s.data.typetag),1)])]),t("div",O,[t("img",{src:"https://hh3.gbdev.io/entries/"+s.data.slug+"/"+s.data.screenshots[0],class:"product-image",alt:s.data.title},null,8,L),t("div",z,[x(e,{tag:"li",to:"/game/"+s.data.slug},{default:u(()=>[S(l(s.data.title),1)]),_:2},1032,["to"])]),t("div",A,l(s.data.developer),1)]),F])])]),_:1},8,["value","layout"])}var T=m(I,[["render",R],["__scopeId","data-v-f7058fa8"]]);const q={};function E(o,r,c,i,a,d){const e=T;return h(),g(e)}var J=m(q,[["render",E]]);export{J as default};
