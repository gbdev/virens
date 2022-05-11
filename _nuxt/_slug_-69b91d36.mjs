import{_ as w,e as x,f as S,w as G,u as D,r as g,g as j,o as s,c as n,b as e,h as a,i as h,t as l,d as o,j as i,F as v,k as T,l as k,m as A,n as E}from"./entry-44b6ea6b.mjs";import{u as O}from"./fetch-a3550f8e.mjs";const R={name:"Game",props:{msg:String},data(){return{tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},M=Object.assign(R,{async setup(p,{expose:y}){y();let r,t;const u=x(),b=S().public,m=b.BASE_API_URL+"/api/entry/"+u.params.slug+".json",{data:_}=([r,t]=G(()=>O(m)),r=await r,t(),r),f=_.value,c=_.value.title;D({title:c});const d={route:u,config:b,url:m,data:_,game:f,gametitle:c};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),N={class:"grid"},P=e("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),V={class:"col-12 lg:col-6 xl:col-5"},F={class:"card mb-0"},L={class:"flex justify-content-between mb-6"},U={class:"col-12 lg:col-6 xl:col-5"},H={class:"card mb-0"},I={class:"flex justify-content-between mb-6"},X={key:0},Z=e("br",null,null,-1),q={key:1},z=o("\xA0 "),J=e("br",null,null,-1),K={key:3},Q=e("br",null,null,-1),W={key:4},Y=e("br",null,null,-1),$=o(" Type: "),ee=o(" - "),te=e("br",null,null,-1),oe=e("br",null,null,-1),se=e("br",null,null,-1),ne=["href"],le=["href"],ae=o("\xA0"),ce=e("br",null,null,-1),ie=e("div",{class:"card mb-0"},[e("h2",null,"Controls"),o(" A: Z, B: X, Start: Enter, Select: Shift "),e("br"),o(" Arrows ")],-1),re=e("div",null,[e("div",{class:"p-grid"},[e("div",{class:"p-col"}),e("div",{class:"p-col"})])],-1);function _e(p,y,r,t,u,b){const m=g("Emulator"),_=g("Mgba"),f=E,c=g("Chip"),d=g("Button"),B=j("tooltip");return s(),n(v,null,[e("div",N,[P,e("div",V,[e("div",F,[e("div",L,[e("div",null,[a(f,null,{default:h(()=>[a(m,{gameData:t.game},null,8,["gameData"]),a(_)]),_:1})])])])]),e("div",U,[e("div",H,[e("div",I,[e("div",null,[e("h1",null,l(t.game.title)+" "+l(p.romblob),1),t.game.developer?(s(),n("span",X,[o(" Developer: "+l(t.game.developer)+" ",1),Z])):i("",!0),t.game.tags?(s(),n("span",q," Tags: ")):i("",!0),t.game.tags?(s(!0),n(v,{key:2},T(t.game.tags,C=>(s(),n(v,null,[a(c,null,{default:h(()=>[o(l(C),1)]),_:2},1024),z],64))),256)):i("",!0),J,t.game.license?(s(),n("span",K,[o(" License: "+l(t.game.license),1),Q])):i("",!0),t.game.date?(s(),n("span",W,[o(" Creation date: "+l(t.game.date),1),Y])):i("",!0),$,a(c,null,{default:h(()=>[o(l(t.game.typetag),1)]),_:1}),ee,k((s(),A(c,null,{default:h(()=>[o(l(t.game.platform),1)]),_:1})),[[B,u.tooltip[t.game.platform]]]),te,oe,se,e("a",{href:p.rom_endpoint},[k(a(d,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[B,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,ne),t.game.repository?(s(),n("a",{key:5,href:t.game.repository,target:"_blank"},[ae,a(d,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,le)):i("",!0)])])]),ce,ie])]),re],64)}var me=w(M,[["render",_e]]);export{me as default};
