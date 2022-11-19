import{_ as A,e as T,f as E,w as P,u as R,r as v,g as L,o as n,c as s,h as i,i as _,b as t,t as a,F as w,j as V,k as d,l as N,m as j,s as O,d as r,n as F,p as I}from"./entry-ae4d70fe.mjs";import{u as U}from"./fetch-bdb514e0.mjs";const M={name:"Game",props:{msg:String},data(){return{display:!1,buttonClass:{A:"ab-button",B:"ab-button",Start:"ss-button",Select:"ss-button","\u2190 \u2191 \u2192 \u2193":"arrows"},controls:[{gb:"A",kb:"Z"},{gb:"B",kb:"X"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Tab"},{gb:"\u2190 \u2191 \u2192 \u2193",kb:"\u2190 \u2191 \u2192 \u2193"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},H=Object.assign(M,{async setup(x,{expose:g}){g();let f,e;const c=T(),b=E().public,y=b.BASE_API_URL+"/api/entry/"+c.params.slug+".json",{data:p}=([f,e]=P(()=>U(y)),f=await f,e(),f),o=p.value;let m=new Date;isNaN(o.date)!=!0?m=new Date(o.date*1e3):typeof o.date=="string"&&(m=new Date(o.date));const k=m.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric"});let u="";const h=p.value.title;o.developer&&(u=o.developer);let l="";o.typetag?l=o.typetag:l=o;let B="";l=="music"?B=`A Game Boy music cartridge by ${u}. Listen online for free.`:B=`A Game Boy homebrew ${l} by ${u}. Play online for free.`;let S="";o.screenshots[0]&&(S=b.BASE_API_URL+"/entries/"+c.params.slug+"/"+o.screenshots[0]);let C="";o.files.forEach(G=>{G.playable&&(C=b.BASE_API_URL+"/entries/"+o.slug+"/"+G.filename)}),R({title:h+" - Homebrew Hub",meta:[{name:"og:title",content:h},{name:"og:description",content:B},{name:"og:image",content:S},{name:"twitter:card",content:"summary_large_image"}]});const D={route:c,config:b,url:y,data:p,game:o,dateObject:m,dateString:k,developer:u,gametitle:h,type:l,gamedescription:B,screenshot_url:S,rom_endpoint:C,Dialog:O};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}),X=t("p",null,[r(" This information is provided by "),t("a",{href:"https://github.com/bbbbbr/gbtoolsid",target:"_blank"},"gbtoolsid"),r(", a tool which "),t("i",null,"attempts"),r(" to detect the tools used to develop a Game Boy ROM through binary fingerprints. ")],-1),K=t("p",null," Game engine (e.g. GB Studio), Audio driver (e.g. Carillon Player), Toolchain (e.g. GBDK) and Sound FX driver (e.g. FX Hammer) can be identified. ",-1),z=t("p",null," If the line is not present, the tool returned no results. Please report any bug or failed detection in the repository. ",-1),q={class:"grid"},Z=t("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),J={class:"col-12 lg:col-6 xl:col-5"},Q={class:"card mb-0"},W={class:"col-12 lg:col-6 xl:col-5"},Y={class:"card mb-0"},$={class:"flex justify-content-between mb-6"},ee={class:"gametitle"},te={key:0},oe=t("td",{class:"value-title"},"Tags",-1),ne=r("\xA0 "),ae={key:1},se=t("td",{class:"value-title"},"Developer",-1),le={key:2},ie=t("td",{class:"value-title"},"License",-1),re={key:3},de=t("td",{class:"value-title"},"Release Date",-1),ce={key:4},_e=t("td",{class:"value-title"},"Type",-1),me={key:5},ge=t("td",{class:"value-title"},"Platform",-1),ue={key:6},he={class:"value-title devtoolinfo"},fe=r(" Developed with"),be=r(" \xA0 "),pe={class:"devtoolinfo"},ve={key:0},ye={key:1},ke={key:0},Be={key:1},Se={key:2},we=t("br",null,null,-1),Ce=["href"],De=["href"],Ge=r("\xA0"),Ne=t("br",null,null,-1),xe=t("br",null,null,-1),Ae={style:{"font-size":"0.9rem"}},Te=["href"],Ee=t("br",null,null,-1),Pe=t("br",null,null,-1),Re={class:"card mb-0"},Le=t("h2",null,"Controls",-1);function Ve(x,g,f,e,c,b){const y=v("Emulator"),p=F,o=v("Chip"),m=v("Button"),k=v("Column"),u=v("DataTable"),h=L("tooltip");return n(),s(w,null,[i(e.Dialog,{modal:!0,position:"left",dismissableMask:!0,header:"''Developed with'' info",visible:c.display,"onUpdate:visible":g[0]||(g[0]=l=>c.display=l)},{default:_(()=>[X,K,z]),_:1},8,["visible"]),t("div",q,[Z,t("div",J,[t("div",Q,[i(p,null,{default:_(()=>[i(y,{gameData:e.game,romEndpoint:e.rom_endpoint},null,8,["gameData","romEndpoint"])]),_:1})])]),t("div",W,[t("div",Y,[t("div",$,[t("div",null,[t("span",ee,a(e.game.title),1),t("table",null,[e.game.tags?(n(),s("tr",te,[oe,t("td",null,[(n(!0),s(w,null,V(e.game.tags,l=>(n(),s(w,null,[i(o,null,{default:_(()=>[r(a(l),1)]),_:2},1024),ne],64))),256))])])):d("",!0),e.game.developer?(n(),s("tr",ae,[se,t("td",null,a(e.game.developer),1)])):d("",!0),e.game.license?(n(),s("tr",le,[ie,t("td",null,a(e.game.license),1)])):d("",!0),e.dateString!="Invalid Date"?(n(),s("tr",re,[de,t("td",null,a(e.dateString),1)])):d("",!0),e.game.typetag?(n(),s("tr",ce,[_e,t("td",null,[i(o,null,{default:_(()=>[r(a(e.game.typetag),1)]),_:1})])])):d("",!0),e.game.platform?(n(),s("tr",me,[ge,t("td",null,[N((n(),j(o,null,{default:_(()=>[r(a(e.game.platform),1)]),_:1})),[[h,c.tooltip[e.game.platform]]])])])):d("",!0),e.game.devtoolinfo.musicName||e.game.devtoolinfo.toolsName||e.game.devtoolinfo.engineName||e.game.devtoolinfo.soundfxName?(n(),s("tr",ue,[t("td",he,[fe,i(m,{onClick:g[1]||(g[1]=l=>c.display=!0),icon:"pi pi-question-circle",class:"p-button-text"}),be]),t("td",pe,[e.game.devtoolinfo.engineName?(n(),s("p",ve,a(e.game.devtoolinfo.engineName)+" "+a(e.game.devtoolinfo.engineVersion)+" (Engine) ",1)):(n(),s("div",ye,[e.game.devtoolinfo.musicName?(n(),s("p",ke,a(e.game.devtoolinfo.musicName)+" "+a(e.game.devtoolinfo.musicVersion)+" (Music) ",1)):d("",!0),e.game.devtoolinfo.toolsName?(n(),s("p",Be,a(e.game.devtoolinfo.toolsName)+" "+a(e.game.devtoolinfo.toolsVersion)+" (Toolchains) ",1)):d("",!0),e.game.devtoolinfo.soundfxName?(n(),s("p",Se,a(e.game.devtoolinfo.soundfxName)+" "+a(e.game.devtoolinfo.soundfxVersion)+" (Sound FX) ",1)):d("",!0)]))])])):d("",!0)]),we,t("a",{href:e.rom_endpoint},[N(i(m,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[h,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,Ce),e.game.repository?(n(),s("a",{key:0,href:e.game.repository,target:"_blank"},[Ge,i(m,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,De)):d("",!0),Ne,xe,t("span",Ae,[t("a",{href:`https://github.com/gbdev/database/tree/master/entries/${e.game.slug}/game.json`,target:"_blank"}," Improve metadata for this entry ",8,Te),Ee])])])]),Pe,t("div",Re,[Le,i(u,{value:c.controls,responsiveLayout:"scroll"},{default:_(()=>[i(k,{field:"gb",header:"Game Boy"},{body:_(l=>[i(o,{class:I(c.buttonClass[l.data.gb])},{default:_(()=>[r(a(l.data.gb),1)]),_:2},1032,["class"])]),_:1}),i(k,{field:"kb",header:"Keyboard"},{body:_(l=>[r(a(l.data.kb),1)]),_:1})]),_:1},8,["value"])])])])],64)}var Fe=A(H,[["render",Ve]]);export{Fe as default};
