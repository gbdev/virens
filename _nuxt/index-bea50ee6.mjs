import{L as r}from"./list-df7acb5a.mjs";import{u as d,f as h,w as u,o as m,c as v,b as e,t as b,j as f,h as _,d as s,a as g}from"./entry-9e6e29ea.mjs";import{u as p}from"./fetch-ea93b558.mjs";const y={class:"grid"},w={class:"col-12 lg:col-12 xl:col-12"},x={class:"card mb-0"},k={class:""},j=e("h3",null,"Welcome to the new version of Homebrew Hub!",-1),B={class:"block font-regular mb-3 main-text"},E=s(" Homebrew Hub is a community-led attempt to collect, archive and preserve every unofficial game and homebrew for Game Boy (Color) released through decades of passionate work. Each ROM can be easily downloaded or played directly in the browser, through an accurate emulator. "),H=e("br",null,null,-1),A=s("We currently have "),C=s(" entries in the database."),L={class:"col-12 lg:col-12 xl:col-12"},N=g('<div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Contribute</h3><span class="block font-regular text-lg mb-3"> Anyone can add new entries or improve the existing ones. Whatever it&#39;s something you just finished creating with your friends or a lost music cartridge from 20 years ago, check out the <a href="https://github.com/gbdev/database">database repository </a>to get involved. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Digital Preservation</h3><span class="block font-regular text-lg mb-3"> We are committed to build a digital memory of the Game Boy homebrew development scene. We salvaged some of the first ever unofficial software from the 90s and we keep working to harvest more. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Open and accessible</h3><span class="block font-regular text-lg mb-3"> The database is maintained on a public git repository. Everyone can contribute and audit. Entries metadata follows a well defined JSON schema and the full data set is released under a permissive license. </span></div></div></div></div>',3),S={data(){return{entries:[]}},mounted:function(){["dangan","unearthed","rhythm-land","shock-lobster","ucity","dango-dash"].forEach(a=>{fetch(this.config.BASE_API_URL+"/api/entry/"+a+".json").then(t=>t.json()).then(t=>{this.entries.push(t)})})}},P=Object.assign(S,{__name:"index",async setup(a){let t,o;d({title:"Homebrew Hub"});let i=h().public.BASE_API_URL+"/api/all?results=1000";const{data:n}=([t,o]=u(()=>p(i,"$gX3TibwChG")),t=await t,o(),t);return(l,O)=>{const c=r;return m(),v("div",y,[e("div",w,[e("div",x,[e("div",k,[e("div",null,[j,e("span",B,[E,H,A,e("b",null,b(f(n).results),1),C])])])])]),e("div",L,[e("div",null,[e("div",null,[e("div",null,[_(c,{entries:l.entries,paginator:!1},null,8,["entries"])])])])]),N])}}});export{P as default};
