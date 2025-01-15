import{L as d}from"./list.1ccf939f.js";import{j as r,P as i,l as h,m as e,v as a,t as m,S as b,q as _,z as u,k as g}from"./entry.59e64371.js";import{u as v}from"./fetch.bc95e062.js";const p={class:"grid"},f=e("div",{class:"col-12 lg:col-3 xl:col-3"},null,-1),y={class:"col-12 lg:col-6 xl:col-6"},w={class:"brand-card card mb-0"},k={class:""},x=e("h3",{class:"main-text-title"},"Welcome!",-1),j={class:"block font-regular mb-3 main-text"},A=e("a",{href:"https://gbdev.io"},"community-led",-1),B=e("a",{href:"https://en.wikipedia.org/wiki/Homebrew_(video_games)",target:"_blank"},"homebrew",-1),S=e("a",{href:"https://en.wikipedia.org/wiki/Demoscene",target:"_blank"},"demoscene",-1),E=e("br",null,null,-1),H=e("br",null,null,-1),N={href:"/stats"},G=u('<div class="col-12 lg:col-3 xl:col-3"></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Emulation</h3><span class="block font-regular text-lg mb-3"> We use WebAssembly builds of <a href="https://mgba.io/" target="_blank">mGBA</a>, <a href="https://github.com/binji/binjnes" target="_blank">binjnes</a> and <a href="https://github.com/binji/binjgb" target="_blank">binjgb</a> to provide seamless and accurate emulation capabilities directly in the browser. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Digital Preservation</h3><span class="block font-regular text-lg mb-3"> We are committed to build a digital memory of the homebrew development scene. We salvaged some of the first ever unofficial software from the 90s and we keep working to harvest more. </span></div></div></div></div><div class="col-12 lg:col-6 xl:col-4"><div class="card mb-0"><div class="flex justify-content-between mb-6"><div><h3>Open and accessible</h3><span class="block font-regular text-lg mb-3"> The database is maintained on public git repositories (<a href="https://github.com/gbdev/database">Game Boy</a>, <a href="https://github.com/gbadev-org/games"> Game Boy Advance</a>, <a href="https://github.com/nesdev-org/homebrew-db"> NES</a>). Everyone can contribute and audit. Homebrew metadata follows a well defined JSON schema and datasets are released under a permissive license. </span></div></div></div></div>',4),L={class:"col-12 lg:col-12 xl:col-12"},P={class:"card mb-0"},W={class:"home-cards"},R=e("h3",null,"Games Showcase",-1),V={data(){return{stats:null,entries:[]}},mounted:function(){let o=i().public;fetch(o.BASE_API_URL+"/api/stats").then(t=>t.json()).then(t=>{this.stats=t}),["dangan","unearthed","rhythm-land","gbamicrojam23","ucity","dango-dash","varooom3d","skyland","inheritors-of-the-oubliette","inky-and-the-alien-aquarium-demo","sym-merged","hero-core-gba-port","core-machina","gumpyfunction__feed-it-souls","patmorita__hermano-game-boy","apotris","sips","porklike-gb"].forEach(t=>{fetch(o.BASE_API_URL+"/api/entry/"+t+".json").then(s=>s.json()).then(s=>{this.entries.push(s)})})}},q=Object.assign(V,{__name:"index",setup(o){r({title:"Homebrew Hub"});let t=i().public.BASE_API_URL+"/api/stats",s=v(t,"$PslAyef5YX").data;return(l,D)=>{const c=d;return g(),h("div",p,[f,e("div",y,[e("div",w,[e("div",k,[e("div",null,[x,e("span",j,[a(" Homebrew Hub is a "),A,a(" initiative to collect, archive and preserve "),B,a(" and "),S,a(" software developed for Game Boy (Color), Game Boy Advance and NES. "),E,a(" We're on a mission to build an open digital repository providing accurate metadata and emulating capabilities directly in the browser. "),H,e("small",null,[e("a",N,m(b(s).total),1),a(" total entries are currently in the database. ")])])])])])]),G,e("div",L,[e("div",null,[e("div",null,[e("div",null,[e("div",P,[e("div",W,[e("div",null,[R,_(c,{entries:l.entries,paginator:!1},null,8,["entries"])])])])])])])])])}}});export{q as default};
