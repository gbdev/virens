import{_,r as s,o as p,l as u,h as c,b as t,t as a,g as m,d as g,A as h,B as v}from"./entry-84d62699.mjs";const x={name:"List",props:{msg:String,entries:Array},data(){return{total_entries:0,layout:"grid",responsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"600px",numVisible:2,numScroll:2},{breakpoint:"480px",numVisible:1,numScroll:1}]}}},i=o=>(h("data-v-1c94823a"),o=o(),v(),o),b={class:"col-12 sm:col-6 lg:col-4 xl:col-3"},y={class:"product-grid-item card"},S={class:"product-grid-item-top"},V=i(()=>t("i",{class:"pi pi-tag product-category-icon"},null,-1)),k={class:"product-category"},f={class:"product-grid-item-content"},w=["src","alt"],B={class:"product-name"},I={class:"product-description"},D=i(()=>t("div",{class:"product-grid-item-bottom"},null,-1));function N(o,A,n,C,r,$){const d=s("router-link"),l=s("DataView");return p(),u(l,{value:n.entries,layout:r.layout,paginator:!0,rows:20},{grid:c(e=>[t("div",b,[t("div",y,[t("div",S,[t("div",null,[V,t("span",k,a(e.data.typetag),1)])]),t("div",f,[t("img",{src:"https://hh3.gbdev.io/entries/"+e.data.slug+"/"+e.data.screenshots[0],class:"product-image",alt:e.data.title},null,8,w),t("div",B,[m(d,{tag:"li",to:"/game/"+e.data.slug},{default:c(()=>[g(a(e.data.title),1)]),_:2},1032,["to"])]),t("div",I,a(e.data.developer),1)]),D])])]),_:1},8,["value","layout"])}var O=_(x,[["render",N],["__scopeId","data-v-1c94823a"]]);export{O as _};
