import{_ as A,e as E,f as D,w as T,u as R,r as b,g as j,o as l,c as i,b as e,h as s,i as _,t as r,d as n,j as p,F as k,k as L,l as x,m as P,n as O,p as M}from"./entry-2fa37a33.mjs";import{u as N}from"./fetch-1d5c7b4a.mjs";const U={name:"Game",props:{msg:String},data(){return{buttonClass:{A:"ab-button",B:"ab-button",Start:"ss-button",Select:"ss-button","\u2190 \u2191 \u2192 \u2193":"arrows"},controls:[{gb:"A",kb:"Z"},{gb:"B",kb:"X"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Tab"},{gb:"\u2190 \u2191 \u2192 \u2193",kb:"\u2190 \u2191 \u2192 \u2193"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},V=Object.assign(U,{async setup(G,{expose:C}){C();let h,t;const d=E(),f=D().public,v=f.BASE_API_URL+"/api/entry/"+d.params.slug+".json",{data:y}=([h,t]=T(()=>N(v)),h=await h,t(),h),o=y.value;let c="";const m=y.value.title;o.developer&&(c=o.developer);let u="";o.typetag?u=o.typetag:u=o;const B=`A Game Boy homebrew ${u} by ${c}. Play online for free.`;let g="";o.screenshots[0]&&(g=f.BASE_API_URL+"/entries/"+d.params.slug+"/"+o.screenshots[0]);let a="";o.files.forEach(S=>{S.playable&&(a=f.BASE_API_URL+"/entries/"+o.slug+"/"+S.filename)}),R({title:m+" - Homebrew Hub",meta:[{name:"og:title",content:m},{name:"og:description",content:B},{name:"og:image",content:g}]});const w={route:d,config:f,url:v,data:y,game:o,developer:c,gametitle:m,type:u,gamedescription:B,screenshot_url:g,rom_endpoint:a};return Object.defineProperty(w,"__isScriptSetup",{enumerable:!1,value:!0}),w}}),F={class:"grid"},H=e("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),I={class:"col-12 lg:col-6 xl:col-5"},K={class:"card mb-0"},z={class:"flex justify-content-between mb-6"},X={class:"col-12 lg:col-6 xl:col-5"},Z={class:"card mb-0"},q={class:"flex justify-content-between mb-6"},J={key:0},Q=e("br",null,null,-1),W={key:1},Y=n("\xA0 "),$=e("br",null,null,-1),ee={key:3},te=e("br",null,null,-1),oe={key:4},ne=e("br",null,null,-1),se=n(" Type: "),ae=n(" - "),le=e("br",null,null,-1),re=e("br",null,null,-1),ce=e("br",null,null,-1),ie=["href"],_e=["href"],de=n("\xA0"),ue=e("br",null,null,-1),me={class:"card mb-0"},ge=e("h2",null,"Controls",-1),be=e("div",null,[e("div",{class:"p-grid"},[e("div",{class:"p-col"}),e("div",{class:"p-col"})])],-1);function pe(G,C,h,t,d,f){const v=b("Emulator"),y=b("Mgba"),o=O,c=b("Chip"),m=b("Button"),u=b("Column"),B=b("DataTable"),g=j("tooltip");return l(),i(k,null,[e("div",F,[H,e("div",I,[e("div",K,[e("div",z,[e("div",null,[s(o,null,{default:_(()=>[s(v,{gameData:t.game,romEndpoint:t.rom_endpoint},null,8,["gameData","romEndpoint"]),s(y)]),_:1})])])])]),e("div",X,[e("div",Z,[e("div",q,[e("div",null,[e("h1",null,r(t.game.title),1),t.game.developer?(l(),i("span",J,[n(" Developer: "+r(t.game.developer)+" ",1),Q])):p("",!0),t.game.tags?(l(),i("span",W," Tags: ")):p("",!0),t.game.tags?(l(!0),i(k,{key:2},L(t.game.tags,a=>(l(),i(k,null,[s(c,null,{default:_(()=>[n(r(a),1)]),_:2},1024),Y],64))),256)):p("",!0),$,t.game.license?(l(),i("span",ee,[n(" License: "+r(t.game.license),1),te])):p("",!0),t.game.date?(l(),i("span",oe,[n(" Creation date: "+r(t.game.date),1),ne])):p("",!0),se,s(c,null,{default:_(()=>[n(r(t.game.typetag),1)]),_:1}),ae,x((l(),P(c,null,{default:_(()=>[n(r(t.game.platform),1)]),_:1})),[[g,d.tooltip[t.game.platform]]]),le,re,ce,e("a",{href:t.rom_endpoint},[x(s(m,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[g,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,ie),t.game.repository?(l(),i("a",{key:5,href:t.game.repository,target:"_blank"},[de,s(m,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,_e)):p("",!0)])])]),ue,e("div",me,[ge,s(B,{value:d.controls,responsiveLayout:"scroll"},{default:_(()=>[s(u,{field:"gb",header:"Game Boy"},{body:_(a=>[s(c,{class:M(d.buttonClass[a.data.gb])},{default:_(()=>[n(r(a.data.gb),1)]),_:2},1032,["class"])]),_:1}),s(u,{field:"kb",header:"Keyboard"},{body:_(a=>[n(r(a.data.kb),1)]),_:1})]),_:1},8,["value"])])])]),be],64)}var ye=A(V,[["render",pe]]);export{ye as default};
