import{i as Z,r as F,j as q,b as p,Z as T,D as b,U as X,R as W,k as O,o as l,c as y,l as c,w as u,m as J,p as G,t as d,q as m,s as S,e as g,T as Q,v as $,x as ee,y as te,z as ne,a as ie,A as _,u as n,f as o,B as I,F as P,C as oe}from"./entry.1272de68.js";import{u as ae}from"./fetch.645ef3c8.js";const le=Z({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:i,attrs:s}){const f=F(!1);return q(()=>{f.value=!0}),r=>{var k;if(f.value)return(k=i.default)==null?void 0:k.call(i);const a=i.fallback||i.placeholder;if(a)return a();const x=r.fallback||r.placeholder||"",e=r.fallbackTag||r.placeholderTag||"span";return p(e,s,x)}}});var V={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&T.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(t){this.autoZIndex&&T.set("modal",t,this.baseZIndex+this.$primevue.config.zIndex.modal),t.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&b.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(t){this.autoZIndex&&T.clear(t),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(t){this.dismissableMask&&this.closable&&this.modal&&this.mask===t.target&&this.close()},focus(){let t=this.container.querySelector("[autofocus]");t&&t.focus()},maximize(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?b.addClass(document.body,"p-overflow-hidden"):b.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&b.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&b.removeClass(document.body,"p-overflow-hidden")},onKeyDown(t){if(t.which===9){t.preventDefault();let i=b.getFocusableElements(this.container);if(i&&i.length>0)if(!document.activeElement)i[0].focus();else{let s=i.indexOf(document.activeElement);t.shiftKey?s==-1||s===0?i[i.length-1].focus():i[s-1].focus():s==-1||s===i.length-1?i[0].focus():i[s+1].focus()}}else t.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(s=>s===this.position);return i?`p-dialog-${i}`:""},containerRef(t){this.container=t},maskRef(t){this.mask=t},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let i in this.breakpoints)t+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(t){b.hasClass(t.target,"p-dialog-header-icon")||b.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",b.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=t=>{if(this.dragging){let i=b.getOuterWidth(this.container),s=b.getOuterHeight(this.container),f=t.pageX-this.lastPageX,r=t.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),x=a.left+f,e=a.top+r,k=b.getViewport();this.container.style.position="fixed",this.keepInViewport?(x>=this.minX&&x+i<k.width&&(this.lastPageX=t.pageX,this.container.style.left=x+"px"),e>=this.minY&&e+s<k.height&&(this.lastPageY=t.pageY,this.container.style.top=e+"px")):(this.lastPageX=t.pageX,this.container.style.left=x+"px",this.lastPageY=t.pageY,this.container.style.top=e+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=t=>{this.dragging&&(this.dragging=!1,b.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return X()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return X()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:W}};const se={class:"p-dialog-header-icons"},de=c("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),re={key:1,class:"p-dialog-footer"};function ce(t,i,s,f,r,a){const x=O("ripple");return l(),y($,{to:a.appendTarget,disabled:a.appendDisabled},[r.containerVisible?(l(),y("div",{key:0,ref:a.maskRef,class:a.maskClass,onClick:i[4]||(i[4]=(...e)=>a.onMaskClick&&a.onMaskClick(...e))},[c(Q,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:u(()=>[s.visible?(l(),y("div",J({key:0,ref:a.containerRef,class:a.dialogClass},t.$attrs,{role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":s.modal}),[s.showHeader?(l(),y("div",{key:0,class:"p-dialog-header",onMousedown:i[3]||(i[3]=(...e)=>a.initDrag&&a.initDrag(...e))},[G(t.$slots,"header",{},()=>[s.header?(l(),y("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},d(s.header),9,["id"])):m("",!0)]),c("div",se,[s.maximizable?S((l(),y("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:i[1]||(i[1]=(...e)=>a.maximize&&a.maximize(...e)),type:"button",tabindex:"-1"},[c("span",{class:a.maximizeIconClass},null,2)],512)),[[x]]):m("",!0),s.closable?S((l(),y("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:i[2]||(i[2]=(...e)=>a.close&&a.close(...e)),"aria-label":s.ariaCloseLabel,type:"button",tabindex:"-1"},[de],8,["aria-label"])),[[x]]):m("",!0)])],32)):m("",!0),c("div",{class:a.contentStyleClass,style:s.contentStyle},[G(t.$slots,"default")],6),s.footer||t.$slots.footer?(l(),y("div",re,[G(t.$slots,"footer",{},()=>[g(d(s.footer),1)])])):m("",!0)],16,["aria-labelledby","aria-modal"])):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)],8,["to","disabled"])}function me(t,i){i===void 0&&(i={});var s=i.insertAt;if(!(!t||typeof document>"u")){var f=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&f.firstChild?f.insertBefore(r,f.firstChild):f.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var pe=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: .75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;me(pe);V.render=ce;const ge=o("p",null,[g(" This information is provided by "),o("a",{href:"https://github.com/bbbbbr/gbtoolsid",target:"_blank"},"gbtoolsid"),g(", a tool which "),o("i",null,"attempts"),g(" to detect the tools used to develop a Game Boy ROM through binary fingerprints. ")],-1),ue=o("p",null," Game engine (e.g. GB Studio), Audio driver (e.g. Carillon Player), Toolchain (e.g. GBDK) and Sound FX driver (e.g. FX Hammer) can be identified. ",-1),fe=o("p",null," If the line is not present, the tool returned no results. Please report any bug or failed detection in the repository. ",-1),he={class:"grid"},be=o("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),ye={class:"col-12 lg:col-6 xl:col-5"},xe={class:"card mb-0"},ve={class:"col-12 lg:col-6 xl:col-5"},ke={class:"card mb-0"},_e={class:"flex justify-content-between mb-6"},we={class:"gametitle"},De={key:0},Le=o("td",{class:"value-title"},"Platform",-1),Be={key:1},Ce=o("td",{class:"value-title"},"Tags",-1),Ee={key:2},Se=o("td",{class:"value-title"},"Developer",-1),ze={key:3},Ae=o("td",{class:"value-title"},"License",-1),Te={key:4},Ge=o("td",{class:"value-title"},"Release Date",-1),Ie={key:5},Pe=o("td",{class:"value-title"},"Type",-1),Ne={key:6},Me={class:"value-title devtoolinfo"},je={class:"devtoolinfo"},Ke={key:0},Re={key:1},Xe={key:0},Oe={key:1},Ve={key:2},Ye=o("br",null,null,-1),He=["href"],Ue=["href"],Ze=["href"],Fe=o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})],-1),qe=o("br",null,null,-1),We=o("br",null,null,-1),Je={style:{"font-size":"0.9rem"}},Qe=["href"],$e=o("br",null,null,-1),et=o("br",null,null,-1),tt={class:"card mb-0"},nt=o("h2",null,"Controls",-1),it={name:"Game",props:{msg:String},data(){return{display:!1,buttonClass:{A:"ab-button",B:"ab-button",Start:"ss-button",Select:"ss-button","← ↑ → ↓":"arrows"},controls:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Tab"},{gb:"← ↑ → ↓",kb:"← ↑ → ↓"}],controls_gba:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Backspace"},{gb:"← ↑ → ↓",kb:"← ↑ → ↓"},{gb:"L",kb:"A"},{gb:"R",kb:"S"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},lt=Object.assign(it,{async setup(t){let i,s;const f=ee(),r=te().public,a=r.BASE_API_URL+"/api/entry/"+f.params.slug+".json",{data:x}=([i,s]=ne(()=>ae(a,"$xkDbIKOSHX")),i=await i,s(),i),e=x.value;let k=new Date;isNaN(e.date)!=!0?k=new Date(e.date*1e3):typeof e.date=="string"&&(k=new Date(e.date));const N=k.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric"});let z="";const M=x.value.title;e.developer&&(z=e.developer);let D="";e.typetag?D=e.typetag:D=e;let A="";D=="music"?A=`A Game Boy music cartridge by ${z}. Listen online for free.`:A=`A Game Boy homebrew ${D} by ${z}. Play online for free.`;let j="";e.screenshots[0]&&(j=r.BASE_API_URL+"/entries/"+f.params.slug+"/"+e.screenshots[0]);let L="";return e.files.forEach(v=>{v.playable&&(L=r.BASE_API_URL+"/entries/"+e.slug+"/"+v.filename)}),ie({title:M+" - Homebrew Hub",meta:[{name:"og:title",content:M},{name:"og:description",content:A},{name:"og:image",content:j},{name:"twitter:card",content:"summary_large_image"}]}),(v,B)=>{const Y=_("Medusa"),H=_("Emulator"),U=le,w=_("Chip"),C=_("Button"),E=_("Column"),K=_("DataTable"),R=O("tooltip");return l(),p(P,null,[c(n(V),{modal:!0,position:"left",dismissableMask:!0,header:"''Developed with'' info",visible:v.display,"onUpdate:visible":B[0]||(B[0]=h=>v.display=h)},{default:u(()=>[ge,ue,fe]),_:1},8,["visible"]),o("div",he,[be,o("div",ye,[o("div",xe,[c(U,null,{default:u(()=>[n(e).platform=="GBA"?(l(),y(Y,{key:0,gameData:n(e),romEndpoint:n(L)},null,8,["gameData","romEndpoint"])):(l(),y(H,{key:1,gameData:n(e),romEndpoint:n(L)},null,8,["gameData","romEndpoint"]))]),_:1})])]),o("div",ve,[o("div",ke,[o("div",_e,[o("div",null,[o("span",we,d(n(e).title),1),o("table",null,[n(e).platform?(l(),p("tr",De,[Le,o("td",null,[S((l(),y(w,{class:I(n(e).platform)},{default:u(()=>[g(d({GBA:"Game Boy Advance",GB:"Game Boy",GBC:"Game Boy Color"}[n(e).platform]),1)]),_:1},8,["class"])),[[R,v.tooltip[n(e).platform]]])])])):m("",!0),n(e).tags?(l(),p("tr",Be,[Ce,o("td",null,[(l(!0),p(P,null,oe(n(e).tags,h=>(l(),p(P,null,[c(w,null,{default:u(()=>[g(d(h),1)]),_:2},1024),g("  ")],64))),256))])])):m("",!0),n(e).developer?(l(),p("tr",Ee,[Se,o("td",null,d(n(e).developer),1)])):m("",!0),n(e).license?(l(),p("tr",ze,[Ae,o("td",null,d(n(e).license),1)])):m("",!0),n(N)!="Invalid Date"&&n(e).date?(l(),p("tr",Te,[Ge,o("td",null,d(n(N)),1)])):m("",!0),n(e).typetag?(l(),p("tr",Ie,[Pe,o("td",null,[c(w,null,{default:u(()=>[g(d(n(e).typetag),1)]),_:1})])])):m("",!0),n(e).devtoolinfo.musicName||n(e).devtoolinfo.toolsName||n(e).devtoolinfo.engineName||n(e).devtoolinfo.soundfxName?(l(),p("tr",Ne,[o("td",Me,[g(" Developed with"),c(C,{onClick:B[1]||(B[1]=h=>v.display=!0),icon:"pi pi-question-circle",class:"p-button-text",style:{padding:"0px"}}),g("   ")]),o("td",je,[n(e).devtoolinfo.engineName?(l(),p("span",Ke,d(n(e).devtoolinfo.engineName)+" "+d(n(e).devtoolinfo.engineVersion)+" (Engine) ",1)):(l(),p("div",Re,[n(e).devtoolinfo.musicName?(l(),p("span",Xe,d(n(e).devtoolinfo.musicName)+" "+d(n(e).devtoolinfo.musicVersion)+" (Music) ",1)):m("",!0),n(e).devtoolinfo.toolsName?(l(),p("span",Oe,d(n(e).devtoolinfo.toolsName)+" "+d(n(e).devtoolinfo.toolsVersion)+" (Toolchains) ",1)):m("",!0),n(e).devtoolinfo.soundfxName?(l(),p("span",Ve,d(n(e).devtoolinfo.soundfxName)+" "+d(n(e).devtoolinfo.soundfxVersion)+" (Sound FX) ",1)):m("",!0)]))])])):m("",!0)]),Ye,o("a",{href:n(L)},[S(c(C,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[R,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,He),n(e).repository?(l(),p("a",{key:0,href:n(e).repository,target:"_blank"},[g(" "),c(C,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,Ue)):m("",!0),n(e).website?(l(),p("a",{key:1,href:n(e).website,target:"_blank"},[g(" "),c(C,{class:"p-button-outlined",label:"Website",icon:"pi pi-external-link",iconPos:"right"},{default:u(()=>[g(" Website "),Fe]),_:1})],8,Ze)):m("",!0),qe,We,o("span",Je,[o("a",{href:`https://github.com/gbdev/database/tree/master/entries/${n(e).slug}/game.json`,target:"_blank"}," Improve metadata for this entry ",8,Qe),$e])])])]),et,o("div",tt,[nt,n(e).platform=="GBA"?(l(),y(K,{key:0,value:v.controls_gba,responsiveLayout:"scroll"},{default:u(()=>[c(E,{field:"gb",header:"Game Boy Advance"},{body:u(h=>[c(w,{class:I(v.buttonClass[h.data.gb])},{default:u(()=>[g(d(h.data.gb),1)]),_:2},1032,["class"])]),_:1}),c(E,{field:"kb",header:"Keyboard"},{body:u(h=>[g(d(h.data.kb),1)]),_:1})]),_:1},8,["value"])):(l(),y(K,{key:1,value:v.controls,responsiveLayout:"scroll"},{default:u(()=>[c(E,{field:"gb",header:"Game Boy"},{body:u(h=>[c(w,{class:I(v.buttonClass[h.data.gb])},{default:u(()=>[g(d(h.data.gb),1)]),_:2},1032,["class"])]),_:1}),c(E,{field:"kb",header:"Keyboard"},{body:u(h=>[g(d(h.data.kb),1)]),_:1})]),_:1},8,["value"]))])])])],64)}}});export{lt as default};
