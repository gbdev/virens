import{L as d}from"./list.379a2cd3.js";import{a as r,C as i,b as h,f as e,e as a,y as m,u,q as _,h as v,o as b}from"./entry.e67f4a4e.js";import{u as f}from"./fetch.e06a9135.js";const p={class:"grid"},g=e("div",{class:"col-12 lg:col-3 xl:col-3"},null,-1),y={class:"col-12 lg:col-6 xl:col-6"},x={class:"brand-card card mb-0"},w={class:""},k=e("h3",{class:"main-text-title"},"Welcome!",-1),B={class:"block font-regular mb-3 main-text"},A=e("a",{href:"https://gbdev.io"},"community-led",-1),j=e("i",null,"homebrew",-1),E=e("br",null,null,-1),S={href:"/stats"},L=e("div",{class:"col-12 lg:col-3 xl:col-3"},null,-1),W={class:"col-12 lg:col-12 xl:col-12"},G={class:"card mb-0"},H={class:"home-cards"},N=e("h3",null,"Games Showcase",-1),P=v('<div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Emulation</h3><span class="block font-regular text-lg mb-3"> We use Webassembly builds of mGBA and binjb to provide seamless and accurate emulation capabilities directly in the browser. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Digital Preservation</h3><span class="block font-regular text-lg mb-3"> We are committed to build a digital memory of the Game Boy homebrew development scene. We salvaged some of the first ever unofficial software from the 90s and we keep working to harvest more. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Open and accessible</h3><span class="block font-regular text-lg mb-3"> The database is maintained on a <a href="https://github.com/gbdev/database">public git repository</a>. Everyone can contribute and audit. Entries metadata follows a well defined JSON schema and the full dataset is released under a permissive license. </span></div></div></div></div>',3),R={data(){return{stats:null,entries:[]}},mounted:function(){let o=i().public;fetch(o.BASE_API_URL+"/api/stats").then(t=>t.json()).then(t=>{this.stats=t}),["dangan","unearthed","rhythm-land","shock-lobster","ucity","dango-dash","varooom3d","skyland","inheritors-of-the-oubliette","feline","sym-merged","hero-core-gba-port","core-machina","is-that-a-demo-in-your-pocket","oh","apotris","sips","porklike-gb"].forEach(t=>{fetch(o.BASE_API_URL+"/api/entry/"+t+".json").then(s=>s.json()).then(s=>{this.entries.push(s)})})}},U=Object.assign(R,{__name:"index",setup(o){r({title:"Homebrew Hub"});let t=i().public.BASE_API_URL+"/api/stats",s=f(t,"$PslAyef5YX").data;return(n,V)=>{const c=d;return b(),h("div",p,[g,e("div",y,[e("div",x,[e("div",w,[e("div",null,[k,e("span",B,[a(" Homebrew Hub is a "),A,a(" initiative to collect, archive and preserve "),j,a(" software developed for Game Boy (Color) and the Game Boy Advance. We're building an open digital repository providing accurate metadata and emulating capabilities directly in the browser. "),E,e("small",null,[e("a",S,m(u(s).total),1),a(" total entries are currently in the database. ")])])])])])]),L,e("div",W,[e("div",null,[e("div",null,[e("div",null,[e("div",G,[e("div",H,[e("div",null,[N,_(c,{entries:n.entries,paginator:!1},null,8,["entries"])])])])])])])]),P])}}});export{U as default};
