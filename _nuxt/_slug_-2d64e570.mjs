import{_ as A,e as D,f as R,w as T,u as P,r as m,g as j,o,c as s,b as e,h as r,i as v,t as i,d as n,j as u,F as B,k as x,l as G,m as E,n as L}from"./entry-fbc20775.mjs";import{u as O}from"./fetch-268ce9be.mjs";const M={name:"Game",props:{msg:String},data(){return{controls:[{gb:"A",kb:"Z"},{gb:"B",kb:"X"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Right Shift"},{gb:"\u2190 \u2191 \u2192 \u2193",kb:"\u2190 \u2191 \u2192 \u2193"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},N=Object.assign(M,{async setup(C,{expose:w}){w();let g,t;const c=D(),h=R().public,y=h.BASE_API_URL+"/api/entry/"+c.params.slug+".json",{data:p}=([g,t]=T(()=>O(y)),g=await g,t(),g),l=p.value;let _="";const d=p.value.title;l.developer&&(_=l.developer);const k="A Game Boy homebrew game by "+_+". Play online for free.";let b="";l.screenshots[0]&&(b=h.BASE_API_URL+"/entries/"+c.params.slug+"/"+l.screenshots[0]);let f="";l.files.forEach(S=>{S.playable&&(f=h.BASE_API_URL+"/entries/"+l.slug+"/"+S.filename)}),P({title:d+"- Homebrew Hub",meta:[{name:"og:title",content:d},{name:"og:description",content:k},{name:"og:image",content:b}]});const a={route:c,config:h,url:y,data:p,game:l,developer:_,gametitle:d,gamedescription:k,screenshot_url:b,rom_endpoint:f};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),U={class:"grid"},V=e("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),F={class:"col-12 lg:col-6 xl:col-5"},H={class:"card mb-0"},I={class:"flex justify-content-between mb-6"},K={class:"col-12 lg:col-6 xl:col-5"},X={class:"card mb-0"},Z={class:"flex justify-content-between mb-6"},q={key:0},z=e("br",null,null,-1),J={key:1},Q=n("\xA0 "),W=e("br",null,null,-1),Y={key:3},$=e("br",null,null,-1),ee={key:4},te=e("br",null,null,-1),oe=n(" Type: "),ne=n(" - "),le=e("br",null,null,-1),se=e("br",null,null,-1),ae=e("br",null,null,-1),re=["href"],ie=["href"],ce=n("\xA0"),_e=e("br",null,null,-1),de={class:"card mb-0"},me=e("h2",null,"Controls",-1),ue=e("div",null,[e("div",{class:"p-grid"},[e("div",{class:"p-col"}),e("div",{class:"p-col"})])],-1);function ge(C,w,g,t,c,h){const y=m("Emulator"),p=m("Mgba"),l=L,_=m("Chip"),d=m("Button"),k=m("Column"),b=m("DataTable"),f=j("tooltip");return o(),s(B,null,[e("div",U,[V,e("div",F,[e("div",H,[e("div",I,[e("div",null,[r(l,null,{default:v(()=>[r(y,{gameData:t.game,romEndpoint:t.rom_endpoint},null,8,["gameData","romEndpoint"]),r(p)]),_:1})])])])]),e("div",K,[e("div",X,[e("div",Z,[e("div",null,[e("h1",null,i(t.game.title)+" "+i(C.romblob),1),t.game.developer?(o(),s("span",q,[n(" Developer: "+i(t.game.developer)+" ",1),z])):u("",!0),t.game.tags?(o(),s("span",J," Tags: ")):u("",!0),t.game.tags?(o(!0),s(B,{key:2},x(t.game.tags,a=>(o(),s(B,null,[r(_,null,{default:v(()=>[n(i(a),1)]),_:2},1024),Q],64))),256)):u("",!0),W,t.game.license?(o(),s("span",Y,[n(" License: "+i(t.game.license),1),$])):u("",!0),t.game.date?(o(),s("span",ee,[n(" Creation date: "+i(t.game.date),1),te])):u("",!0),oe,r(_,null,{default:v(()=>[n(i(t.game.typetag),1)]),_:1}),ne,G((o(),E(_,null,{default:v(()=>[n(i(t.game.platform),1)]),_:1})),[[f,c.tooltip[t.game.platform]]]),le,se,ae,e("a",{href:t.rom_endpoint},[G(r(d,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[f,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,re),t.game.repository?(o(),s("a",{key:5,href:t.game.repository,target:"_blank"},[ce,r(d,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,ie)):u("",!0)])])]),_e,e("div",de,[me,r(b,{value:c.controls,responsiveLayout:"scroll"},{default:v(()=>[(o(!0),s(B,null,x(c.columns,a=>(o(),E(k,{field:a.field,header:a.header,key:a.field},null,8,["field","header"]))),128))]),_:1},8,["value"])])])]),ue],64)}var be=A(N,[["render",ge]]);export{be as default};
