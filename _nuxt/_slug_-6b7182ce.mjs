import{_ as T,e as M,f as L,w as R,u as P,r as p,g as j,o,c as s,h as r,i as d,b as t,t as n,j as N,k as B,n as S,l as _,F as A,m as V,s as O,d as i,p as F}from"./entry-db026ea2.mjs";import{u as I}from"./fetch-0fe97470.mjs";const U={name:"Game",props:{msg:String},data(){return{display:!1,buttonClass:{A:"ab-button",B:"ab-button",Start:"ss-button",Select:"ss-button","\u2190 \u2191 \u2192 \u2193":"arrows"},controls:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Tab"},{gb:"\u2190 \u2191 \u2192 \u2193",kb:"\u2190 \u2191 \u2192 \u2193"}],controls_gba:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Backspace"},{gb:"\u2190 \u2191 \u2192 \u2193",kb:"\u2190 \u2191 \u2192 \u2193"},{gb:"L",kb:"A"},{gb:"R",kb:"S"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},X=Object.assign(U,{async setup(E,{expose:b}){b();let y,e;const c=M(),v=L().public,w=v.BASE_API_URL+"/api/entry/"+c.params.slug+".json",{data:k}=([y,e]=R(()=>I(w)),y=await y,e(),y),l=k.value;let m=new Date;isNaN(l.date)!=!0?m=new Date(l.date*1e3):typeof l.date=="string"&&(m=new Date(l.date));const h=m.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric"});let g="";const f=k.value.title;l.developer&&(g=l.developer);let u="";l.typetag?u=l.typetag:u=l;let a="";u=="music"?a=`A Game Boy music cartridge by ${g}. Listen online for free.`:a=`A Game Boy homebrew ${u} by ${g}. Play online for free.`;let G="";l.screenshots[0]&&(G=v.BASE_API_URL+"/entries/"+c.params.slug+"/"+l.screenshots[0]);let C="";l.files.forEach(x=>{x.playable&&(C=v.BASE_API_URL+"/entries/"+l.slug+"/"+x.filename)}),P({title:f+" - Homebrew Hub",meta:[{name:"og:title",content:f},{name:"og:description",content:a},{name:"og:image",content:G},{name:"twitter:card",content:"summary_large_image"}]});const D={route:c,config:v,url:w,data:k,game:l,dateObject:m,dateString:h,developer:g,gametitle:f,type:u,gamedescription:a,screenshot_url:G,rom_endpoint:C,Dialog:O};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}),H=t("p",null,[i(" This information is provided by "),t("a",{href:"https://github.com/bbbbbr/gbtoolsid",target:"_blank"},"gbtoolsid"),i(", a tool which "),t("i",null,"attempts"),i(" to detect the tools used to develop a Game Boy ROM through binary fingerprints. ")],-1),K=t("p",null," Game engine (e.g. GB Studio), Audio driver (e.g. Carillon Player), Toolchain (e.g. GBDK) and Sound FX driver (e.g. FX Hammer) can be identified. ",-1),z=t("p",null," If the line is not present, the tool returned no results. Please report any bug or failed detection in the repository. ",-1),W={class:"grid"},Z=t("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),q={class:"col-12 lg:col-6 xl:col-5"},J={class:"card mb-0"},Q={class:"col-12 lg:col-6 xl:col-5"},Y={class:"card mb-0"},$={class:"flex justify-content-between mb-6"},ee={class:"gametitle"},te={key:0},oe=t("td",{class:"value-title"},"Platform",-1),ae={key:1},ne=t("td",{class:"value-title"},"Tags",-1),se=i("\xA0 "),le={key:2},ie=t("td",{class:"value-title"},"Developer",-1),re={key:3},de=t("td",{class:"value-title"},"License",-1),ce={key:4},_e=t("td",{class:"value-title"},"Release Date",-1),me={key:5},ge=t("td",{class:"value-title"},"Type",-1),ue={key:6},be={class:"value-title devtoolinfo"},he=i(" Developed with"),fe=i(" \xA0 "),pe={class:"devtoolinfo"},ye={key:0},ve={key:1},ke={key:0},Be={key:1},we={key:2},Ge=t("br",null,null,-1),Se=["href"],Ae=["href"],Ce=i("\xA0"),De=["href"],xe=i("\xA0"),Ne=i(" Website "),Ee=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})],-1),Te=t("br",null,null,-1),Me=t("br",null,null,-1),Le={style:{"font-size":"0.9rem"}},Re=["href"],Pe=t("br",null,null,-1),je=t("br",null,null,-1),Ve={class:"card mb-0"},Oe=t("h2",null,"Controls",-1);function Fe(E,b,y,e,c,v){const w=p("Medusa"),k=p("Emulator"),l=F,m=p("Chip"),h=p("Button"),g=p("Column"),f=p("DataTable"),u=j("tooltip");return o(),s(A,null,[r(e.Dialog,{modal:!0,position:"left",dismissableMask:!0,header:"''Developed with'' info",visible:c.display,"onUpdate:visible":b[0]||(b[0]=a=>c.display=a)},{default:d(()=>[H,K,z]),_:1},8,["visible"]),t("div",W,[Z,t("div",q,[t("div",J,[r(l,null,{default:d(()=>[e.game.platform=="GBA"?(o(),B(w,{key:0,gameData:e.game,romEndpoint:e.rom_endpoint},null,8,["gameData","romEndpoint"])):(o(),B(k,{key:1,gameData:e.game,romEndpoint:e.rom_endpoint},null,8,["gameData","romEndpoint"]))]),_:1})])]),t("div",Q,[t("div",Y,[t("div",$,[t("div",null,[t("span",ee,n(e.game.title),1),t("table",null,[e.game.platform?(o(),s("tr",te,[oe,t("td",null,[N((o(),B(m,{class:S(e.game.platform)},{default:d(()=>[i(n({GBA:"Game Boy Advance",GB:"Game Boy",GBC:"Game Boy Color"}[e.game.platform]),1)]),_:1},8,["class"])),[[u,c.tooltip[e.game.platform]]])])])):_("",!0),e.game.tags?(o(),s("tr",ae,[ne,t("td",null,[(o(!0),s(A,null,V(e.game.tags,a=>(o(),s(A,null,[r(m,null,{default:d(()=>[i(n(a),1)]),_:2},1024),se],64))),256))])])):_("",!0),e.game.developer?(o(),s("tr",le,[ie,t("td",null,n(e.game.developer),1)])):_("",!0),e.game.license?(o(),s("tr",re,[de,t("td",null,n(e.game.license),1)])):_("",!0),e.dateString!="Invalid Date"&&e.game.date?(o(),s("tr",ce,[_e,t("td",null,n(e.dateString),1)])):_("",!0),e.game.typetag?(o(),s("tr",me,[ge,t("td",null,[r(m,null,{default:d(()=>[i(n(e.game.typetag),1)]),_:1})])])):_("",!0),e.game.devtoolinfo.musicName||e.game.devtoolinfo.toolsName||e.game.devtoolinfo.engineName||e.game.devtoolinfo.soundfxName?(o(),s("tr",ue,[t("td",be,[he,r(h,{onClick:b[1]||(b[1]=a=>c.display=!0),icon:"pi pi-question-circle",class:"p-button-text"}),fe]),t("td",pe,[e.game.devtoolinfo.engineName?(o(),s("p",ye,n(e.game.devtoolinfo.engineName)+" "+n(e.game.devtoolinfo.engineVersion)+" (Engine) ",1)):(o(),s("div",ve,[e.game.devtoolinfo.musicName?(o(),s("p",ke,n(e.game.devtoolinfo.musicName)+" "+n(e.game.devtoolinfo.musicVersion)+" (Music) ",1)):_("",!0),e.game.devtoolinfo.toolsName?(o(),s("p",Be,n(e.game.devtoolinfo.toolsName)+" "+n(e.game.devtoolinfo.toolsVersion)+" (Toolchains) ",1)):_("",!0),e.game.devtoolinfo.soundfxName?(o(),s("p",we,n(e.game.devtoolinfo.soundfxName)+" "+n(e.game.devtoolinfo.soundfxVersion)+" (Sound FX) ",1)):_("",!0)]))])])):_("",!0)]),Ge,t("a",{href:e.rom_endpoint},[N(r(h,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[u,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,Se),e.game.repository?(o(),s("a",{key:0,href:e.game.repository,target:"_blank"},[Ce,r(h,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,Ae)):_("",!0),e.game.website?(o(),s("a",{key:1,href:e.game.website,target:"_blank"},[xe,r(h,{class:"p-button-outlined",label:"Website",icon:"pi pi-external-link",iconPos:"right"},{default:d(()=>[Ne,Ee]),_:1})],8,De)):_("",!0),Te,Me,t("span",Le,[t("a",{href:`https://github.com/gbdev/database/tree/master/entries/${e.game.slug}/game.json`,target:"_blank"}," Improve metadata for this entry ",8,Re),Pe])])])]),je,t("div",Ve,[Oe,e.game.platform=="GBA"?(o(),B(f,{key:0,value:c.controls_gba,responsiveLayout:"scroll"},{default:d(()=>[r(g,{field:"gb",header:"Game Boy Advance"},{body:d(a=>[r(m,{class:S(c.buttonClass[a.data.gb])},{default:d(()=>[i(n(a.data.gb),1)]),_:2},1032,["class"])]),_:1}),r(g,{field:"kb",header:"Keyboard"},{body:d(a=>[i(n(a.data.kb),1)]),_:1})]),_:1},8,["value"])):(o(),B(f,{key:1,value:c.controls,responsiveLayout:"scroll"},{default:d(()=>[r(g,{field:"gb",header:"Game Boy"},{body:d(a=>[r(m,{class:S(c.buttonClass[a.data.gb])},{default:d(()=>[i(n(a.data.gb),1)]),_:2},1032,["class"])]),_:1}),r(g,{field:"kb",header:"Keyboard"},{body:d(a=>[i(n(a.data.kb),1)]),_:1})]),_:1},8,["value"]))])])])],64)}var Xe=T(X,[["render",Fe]]);export{Xe as default};
