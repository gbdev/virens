import{L as r}from"./list-a5d49aa8.mjs";import{_ as u,u as m,f as h,w as f,o as _,c as v,b as e,t as p,h as b,d,a as g}from"./entry-44b6ea6b.mjs";import{u as y}from"./fetch-a3550f8e.mjs";const w={data(){return{entries:[]}},mounted:function(){["dangan","unearthed","rhythm-land","shock-lobster","ucity","dango-dash"].forEach(i=>{fetch(this.config.BASE_API_URL+"/api/entry/"+i+".json").then(t=>t.json()).then(t=>{this.entries.push(t)})})}},x=Object.assign(w,{async setup(i,{expose:t}){t();let s,a;m({title:"Homebrew Hub"});const o=h().public;let n=o.BASE_API_URL+"/api/all?results=1000";const{data:l}=([s,a]=f(()=>y(n)),s=await s,a(),s),c={config:o,url:n,data:l};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),j={class:"grid"},k={class:"col-12 lg:col-12 xl:col-12"},B={class:"card mb-0"},S={class:"flex justify-content-between mb-6"},A={class:"block font-medium mb-3 main-text"},E=d(" Homebrew Hub is a community-led attempt to collect, archive and preserve every unofficial game and homebrew released for Game Boy produced through decades of passionate work. We currently have "),H=d(" entries in the database."),L={class:"col-12 lg:col-12 xl:col-12"},N=g('<div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Your game here?</h3><span class="block font-medium text-lg mb-3"> Anyone can contribute adding games to the database. Whatever it&#39;s something you just finished building with your friends or a lost ROM from the 90s, a Pull Request is all you need to add a new entry. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Digital Preservation</h3><span class="block font-medium text-lg mb-3"> We are committed to digitally preserve the past and the present of the Game Boy homebrew development scene. We salvaged some of the first ever unofficial software from the 90s and we keep working to harvest more. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Open and accessible</h3><span class="block font-medium text-lg mb-3"> The database powering this project is maintained on a public git repository. Everyone can contribute and audit. Each game has a manifest following a well defined JSON schema and the full data set is released under a permissive license. </span></div></div></div></div>',3);function O(i,t,s,a,o,n){const l=r;return _(),v("div",j,[e("div",k,[e("div",B,[e("div",S,[e("div",null,[e("span",A,[E,e("b",null,p(a.data.results),1),H])])])])]),e("div",L,[e("div",null,[e("div",null,[e("div",null,[b(l,{entries:o.entries,paginator:!1},null,8,["entries"])])])])]),N])}var W=u(x,[["render",O]]);export{W as default};
