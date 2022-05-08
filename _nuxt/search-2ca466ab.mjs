import{_ as r}from"./list-85d50445.mjs";import{_ as v,r as a,o as p,c as d,b as l,g as s}from"./entry-84d62699.mjs";const b={methods:{handlesearch:function(){let u="http://localhost:8000/api/search?",o={results:1e3},n=[];this.selectedTags&&this.selectedTags.forEach(e=>{n.push(e.value)}),this.selectedPlatform&&(o.platform=this.selectedPlatform.code),n!=[]&&(o.tags=n),this.selectedType.name!="All"&&(o.typetag=this.selectedType.code);let c=u+new URLSearchParams(o);console.log(c),fetch(c).then(e=>{e.json().then(i=>{this.entries=i.entries})})}},mounted:function(){console.log("mounted")},data(){return{entries:null,selectedPlatform:null,platforms:[{name:"GB",code:"GB"},{name:"GBC",code:"GBC"},{name:"GBA",code:"GBA"}],selectedType:{name:"All",code:"all"},types:[{name:"All",code:"all"},{name:"Game",code:"game"},{name:"Demo",code:"demo"},{name:"Music",code:"music"},{name:"Tool",code:"homebrew"}],selectedTags:null,groupedCities:[{label:"Gameplay",code:"gameplay",items:[{label:"Open Source",value:"Open Source"},{label:"RPG",value:"RPG"},{label:"Action",value:"Action"},{label:"Puzzle",value:"Puzzle"},{label:"Platform",value:"Platform"}]},{label:"Events",code:"events",items:[{label:"GBA Jam 2021",value:"gbajam21"},{label:"GB Compo 21",value:"gbcompo21"},{label:"GB Compo 21 - Finalists",value:"gbcompo21-shortlist"}]}]}},components:{List:r}},B=l("h5",null,"Filters",-1),y={class:"grid p-fluid"},G={class:"col-12 md:col-4 xl:col-2"},P={class:"p-inputgroup"},T=l("span",{class:"p-inputgroup-addon"}," Platform ",-1),V={class:"col-12 md:col-4 xl:col-2"},C={class:"p-inputgroup"},S=l("span",{class:"p-inputgroup-addon"}," Type ",-1),A={class:"col-12 md:col-4"},L={class:"p-inputgroup"},x=l("span",{class:"p-inputgroup-addon"}," Tags ",-1),k={class:"col-12 md:col-2"},w={class:"p-inputgroup"},z={key:0},U={key:1};function D(u,o,n,c,e,i){const m=a("SelectButton"),_=a("Dropdown"),h=a("MultiSelect"),g=a("Button"),f=r;return p(),d("div",null,[B,l("div",y,[l("div",G,[l("div",P,[T,s(m,{modelValue:e.selectedPlatform,"onUpdate:modelValue":o[0]||(o[0]=t=>e.selectedPlatform=t),options:e.platforms,optionLabel:"name"},null,8,["modelValue","options"])])]),l("div",V,[l("div",C,[S,s(_,{modelValue:e.selectedType,"onUpdate:modelValue":o[1]||(o[1]=t=>e.selectedType=t),options:e.types,optionLabel:"name"},null,8,["modelValue","options"])])]),l("div",A,[l("div",L,[x,s(h,{modelValue:e.selectedTags,"onUpdate:modelValue":o[2]||(o[2]=t=>e.selectedTags=t),options:e.groupedCities,optionLabel:"label",placeholder:"Select Tags",display:"chip",optionGroupLabel:"label",optionGroupChildren:"items"},null,8,["modelValue","options"])])]),l("div",k,[l("div",w,[s(g,{label:"Search",icon:"pi pi-search",iconPos:"right",class:"p-button-outlined",onClick:o[3]||(o[3]=t=>i.handlesearch())})])])]),e.entries!=null?(p(),d("div",z,[s(f,{entries:e.entries},null,8,["entries"])])):(p(),d("div",U,"No data yet.."))])}var N=v(b,[["render",D]]);export{N as default};
