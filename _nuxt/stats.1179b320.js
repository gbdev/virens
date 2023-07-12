import{j as l,f as r,l as n,m as e,q as o,P as c,k as u}from"./entry.6802bb13.js";const d={class:"grid"},i={class:"col-12 md:col-6 lg:col-3 xl:col-3"},p={class:"card mb-0"},g=e("h3",null,"Platform",-1),h={class:"block font-regular mb-3 main-text"},y={class:"col-12 md:col-6 lg:col-3 xl:col-3"},m={class:"card mb-0"},_=e("h3",null,"Type",-1),b={class:"block font-regular mb-3 main-text"},P={class:"col-12 md:col-6 lg:col-3 xl:col-3"},V={class:"card mb-0"},f=e("h3",null,"Tags",-1),C={class:"block font-regular mb-3 main-text"},v={data(){return{stats:null,entries:[],chartData:null,chartTypeData:null,chartTagsData:null,chartOptions:null}},mounted:function(){let t=c().public;fetch(t.BASE_API_URL+"/api/stats").then(a=>a.json()).then(a=>{this.stats=a,this.chartData=this.setChartData(),this.chartTypeData=this.setchartTypeData(),this.chartTagsData=this.setchartTagsData(),this.chartOptions=this.setChartOptions()})},methods:{setChartOptions(){return{plugins:{legend:{labels:{usePointStyle:!0}}}}},setChartData(){const t=getComputedStyle(document.body);return{labels:["GB","GBC","GBA"],datasets:[{data:[this.stats.platforms.gb,this.stats.platforms.gbc,this.stats.platforms.gba],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400")]}]}},setchartTypeData(){const t=getComputedStyle(document.body);return{labels:["Game","Demo","Music","Tools"],datasets:[{data:[this.stats.typetag.game,this.stats.typetag.demo,this.stats.typetag.music,this.stats.typetag.tools],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500"),t.getPropertyValue("--red-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400"),t.getPropertyValue("--red-400")]}]}},setchartTagsData(){const t=getComputedStyle(document.body);return{labels:["OSS","RPG","Puzzle","Platform"],datasets:[{data:[this.stats.tags.oss,this.stats.tags.rpg,this.stats.tags.puzzle,this.stats.tags.platform],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500"),t.getPropertyValue("--red-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400"),t.getPropertyValue("--red-400")]}]}}}},k=Object.assign(v,{__name:"stats",setup(t){return l({title:"Homebrew Hub - Stats"}),(a,D)=>{const s=r("Chart");return u(),n("div",d,[e("div",i,[e("div",p,[e("div",null,[g,e("span",h,[o(s,{type:"doughnut",data:a.chartData,options:a.chartOptions},null,8,["data","options"])])])])]),e("div",y,[e("div",m,[e("div",null,[_,e("span",b,[o(s,{type:"doughnut",data:a.chartTypeData,options:a.chartOptions},null,8,["data","options"])])])])]),e("div",P,[e("div",V,[e("div",null,[f,e("span",C,[o(s,{type:"bar",data:a.chartTagsData,options:a.chartOptions},null,8,["data","options"])])])])])])}}});export{k as default};
