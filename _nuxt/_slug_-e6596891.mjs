import{_ as k,u as x,w,r as g,e as C,o as s,a as n,b as e,f as c,g as u,t as l,d as o,h as i,F as f,i as G,j as D,k as S,l as j}from"./entry-82015094.mjs";import{u as T}from"./fetch-509dc205.mjs";const N={name:"Game",props:{msg:String},data(){return{tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},O=Object.assign(N,{async setup(m,{expose:v}){v();let r,t;const _=x(),p="https://hh3.gbdev.io/api/entry/"+_.params.slug+".json",{data:d}=([r,t]=w(()=>T(p)),r=await r,t(),r),h=d.value,a={route:_,url:p,data:d,game:h};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),V={class:"grid"},E=e("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),F={class:"col-12 lg:col-6 xl:col-5"},P={class:"card mb-0"},L={class:"flex justify-content-between mb-6"},R={class:"col-12 lg:col-6 xl:col-5"},A={class:"card mb-0"},M={class:"flex justify-content-between mb-6"},q={key:0},z=e("br",null,null,-1),H={key:1},I=o("\xA0 "),J=e("br",null,null,-1),K={key:3},Q=e("br",null,null,-1),U=o(" Type: "),W=o(" - "),X=e("br",null,null,-1),Y=e("br",null,null,-1),Z=e("br",null,null,-1),$=["href"],ee=["href"],te=o("\xA0"),oe=e("div",null,[e("div",{class:"p-grid"},[e("div",{class:"p-col"}),e("div",{class:"p-col"})])],-1);function se(m,v,r,t,_,p){const d=g("Emulator"),h=j,a=g("Chip"),b=g("Button"),y=C("tooltip");return s(),n(f,null,[e("div",V,[E,e("div",F,[e("div",P,[e("div",L,[e("div",null,[c(h,null,{default:u(()=>[c(d,{gameData:t.game},null,8,["gameData"])]),_:1})])])])]),e("div",R,[e("div",A,[e("div",M,[e("div",null,[e("h1",null,l(t.game.title)+" "+l(m.romblob),1),t.game.developer?(s(),n("span",q,[o(" Developer: "+l(t.game.developer)+" ",1),z])):i("",!0),t.game.tags?(s(),n("span",H," Tags: ")):i("",!0),t.game.tags?(s(!0),n(f,{key:2},G(t.game.tags,B=>(s(),n(f,null,[c(a,null,{default:u(()=>[o(l(B),1)]),_:2},1024),I],64))),256)):i("",!0),J,t.game.license?(s(),n("span",K,[o(" License: "+l(t.game.license),1),Q])):i("",!0),U,c(a,null,{default:u(()=>[o(l(t.game.typetag),1)]),_:1}),W,D((s(),S(a,null,{default:u(()=>[o(l(t.game.platform),1)]),_:1})),[[y,_.tooltip[t.game.platform]]]),X,Y,Z,e("a",{href:m.rom_endpoint},[c(b,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"})],8,$),t.game.repository?(s(),n("a",{key:4,href:t.game.repository,target:"_blank"},[te,c(b,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,ee)):i("",!0)])])])])]),oe],64)}var ae=k(O,[["render",se]]);export{ae as default};
