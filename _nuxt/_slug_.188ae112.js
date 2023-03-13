import{i as F,r as q,j as W,b as d,k as J,Z as T,D as b,U as O,R as Q,F as $,s as ee,l as x,m as M,o as l,c as w,w as p,p as B,q as g,T as te,t as L,v as P,x as R,y as c,z as u,f as o,e as m,A as ne,B as oe,C as ie,a as ae,u as n,E as N,G as le}from"./entry.ba07664c.js";import{u as se}from"./fetch.ad239383.js";const de=F({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:i,attrs:s}){const f=q(!1);return W(()=>{f.value=!0}),r=>{var v;if(f.value)return(v=i.default)==null?void 0:v.call(i);const a=i.fallback||i.placeholder;if(a)return a();const y=r.fallback||r.placeholder||"",e=r.fallbackTag||r.placeholderTag||"span";return d(e,s,y)}}});var Y={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:J(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusable:!1}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&T.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(t){t.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&T.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&b.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusable=!1},onAfterLeave(){this.autoZIndex&&T.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(t){this.dismissableMask&&this.modal&&this.mask===t.target&&this.close()},focus(){const t=s=>s.querySelector("[autofocus]");let i=this.$slots.footer&&t(this.footerContainer);i||(i=this.$slots.header&&t(this.headerContainer),i||(i=this.$slots.default&&t(this.content),i||(i=t(this.container)))),i&&(this.focusable=!0,i.focus())},maximize(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?b.addClass(document.body,"p-overflow-hidden"):b.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&b.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&b.removeClass(document.body,"p-overflow-hidden")},onKeyDown(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(s=>s===this.position);return i?`p-dialog-${i}`:""},containerRef(t){this.container=t},maskRef(t){this.mask=t},contentRef(t){this.content=t},headerContainerRef(t){this.headerContainer=t},footerContainerRef(t){this.footerContainer=t},maximizableRef(t){this.maximizableButton=t},closeButtonRef(t){this.closeButton=t},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let i in this.breakpoints)t+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(t){b.hasClass(t.target,"p-dialog-header-icon")||b.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",b.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=t=>{if(this.dragging){let i=b.getOuterWidth(this.container),s=b.getOuterHeight(this.container),f=t.pageX-this.lastPageX,r=t.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),y=a.left+f,e=a.top+r,v=b.getViewport();this.container.style.position="fixed",this.keepInViewport?(y>=this.minX&&y+i<v.width&&(this.lastPageX=t.pageX,this.container.style.left=y+"px"),e>=this.minY&&e+s<v.height&&(this.lastPageY=t.pageY,this.container.style.top=e+"px")):(this.lastPageX=t.pageX,this.container.style.left=y+"px",this.lastPageY=t.pageY,this.container.style.top=e+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=t=>{this.dragging&&(this.dragging=!1,b.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return O()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return O()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:Q,focustrap:$},components:{Portal:ee}};const re=["aria-labelledby","aria-modal"],ce=["id"],ue={class:"p-dialog-header-icons"},me=["autofocus","tabindex"],pe=["autofocus","aria-label"];function ge(t,i,s,f,r,a){const y=x("Portal"),e=M("ripple"),v=M("focustrap");return l(),w(y,{appendTo:s.appendTo},{default:p(()=>[r.containerVisible?(l(),d("div",{key:0,ref:a.maskRef,class:B(a.maskClass),onClick:i[3]||(i[3]=(...k)=>a.onMaskClick&&a.onMaskClick(...k))},[g(te,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:p(()=>[s.visible?L((l(),d("div",P({key:0,ref:a.containerRef,class:a.dialogClass,role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":s.modal},t.$attrs),[s.showHeader?(l(),d("div",{key:0,ref:a.headerContainerRef,class:"p-dialog-header",onMousedown:i[2]||(i[2]=(...k)=>a.initDrag&&a.initDrag(...k))},[R(t.$slots,"header",{},()=>[s.header?(l(),d("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},c(s.header),9,ce)):u("",!0)]),o("div",ue,[s.maximizable?L((l(),d("button",{key:0,ref:a.maximizableRef,autofocus:r.focusable,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:i[0]||(i[0]=(...k)=>a.maximize&&a.maximize(...k)),type:"button",tabindex:s.maximizable?"0":"-1"},[o("span",{class:B(a.maximizeIconClass)},null,2)],8,me)),[[e]]):u("",!0),s.closable?L((l(),d("button",P({key:1,ref:a.closeButtonRef,autofocus:r.focusable,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:i[1]||(i[1]=(...k)=>a.close&&a.close(...k)),"aria-label":a.closeAriaLabel,type:"button"},s.closeButtonProps),[o("span",{class:B(["p-dialog-header-close-icon",s.closeIcon])},null,2)],16,pe)),[[e]]):u("",!0)])],544)):u("",!0),o("div",P({ref:a.contentRef,class:a.contentStyleClass,style:s.contentStyle},s.contentProps),[R(t.$slots,"default")],16),s.footer||t.$slots.footer?(l(),d("div",{key:1,ref:a.footerContainerRef,class:"p-dialog-footer"},[R(t.$slots,"footer",{},()=>[m(c(s.footer),1)])],512)):u("",!0)],16,re)),[[v,{disabled:!s.modal}]]):u("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):u("",!0)]),_:3},8,["appendTo"])}function fe(t,i){i===void 0&&(i={});var s=i.insertAt;if(!(!t||typeof document>"u")){var f=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&f.firstChild?f.insertBefore(r,f.firstChild):f.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var he=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
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
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
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
    margin: 0.75rem;
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
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;fe(he);Y.render=ge;const be=o("p",null,[m(" This information is provided by "),o("a",{href:"https://github.com/bbbbbr/gbtoolsid",target:"_blank"},"gbtoolsid"),m(", a tool which "),o("i",null,"attempts"),m(" to detect the tools used to develop a Game Boy ROM through binary fingerprints. ")],-1),ye=o("p",null," Game engine (e.g. GB Studio), Audio driver (e.g. Carillon Player), Toolchain (e.g. GBDK) and Sound FX driver (e.g. FX Hammer) can be identified. ",-1),ve=o("p",null," If the line is not present, the tool returned no results. Please report any bug or failed detection in the repository. ",-1),_e={class:"grid"},ke=o("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1),xe={class:"col-12 lg:col-6 xl:col-5"},we={class:"card mb-0"},Be={class:"col-12 lg:col-6 xl:col-5"},Ce={class:"card mb-0"},Le={class:"flex justify-content-between mb-6"},De={class:"gametitle"},Ee={key:0},Se=o("td",{class:"value-title"},"Platform",-1),ze={key:1},Ae=o("td",{class:"value-title"},"Tags",-1),Ge={key:2},Ie=o("td",{class:"value-title"},"Developer",-1),Te={key:3},Pe=o("td",{class:"value-title"},"License",-1),Re={key:4},Ne=o("td",{class:"value-title"},"Release Date",-1),Me={key:5},je=o("td",{class:"value-title"},"Type",-1),Ke={key:6},Xe={class:"value-title devtoolinfo"},Ve={class:"devtoolinfo"},Oe={key:0},Ye={key:1},He={key:0},Ue={key:1},Ze={key:2},Fe=o("br",null,null,-1),qe=["href"],We=["href"],Je=["href"],Qe=o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})],-1),$e=o("br",null,null,-1),et=o("br",null,null,-1),tt={style:{"font-size":"0.9rem"}},nt=["href"],ot=o("br",null,null,-1),it=o("br",null,null,-1),at={class:"card mb-0"},lt=o("h2",null,"Controls",-1),st={name:"Game",props:{msg:String},data(){return{display:!1,buttonClass:{A:"ab-button",B:"ab-button",Start:"ss-button",Select:"ss-button","← ↑ → ↓":"arrows"},controls:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Tab"},{gb:"← ↑ → ↓",kb:"← ↑ → ↓"}],controls_gba:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Backspace"},{gb:"← ↑ → ↓",kb:"← ↑ → ↓"},{gb:"L",kb:"A"},{gb:"R",kb:"S"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},ct=Object.assign(st,{async setup(t){let i,s;const f=ne(),r=oe().public,a=r.BASE_API_URL+"/api/entry/"+f.params.slug+".json",{data:y}=([i,s]=ie(()=>se(a,"$xkDbIKOSHX")),i=await i,s(),i),e=y.value;let v=new Date;isNaN(e.date)!=!0?v=new Date(e.date*1e3):typeof e.date=="string"&&(v=new Date(e.date));const k=v.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric"});let G="";const j=y.value.title;e.developer&&(G=e.developer);let D="";e.typetag?D=e.typetag:D=e;let I="";D=="music"?I=`A Game Boy music cartridge by ${G}. Listen online for free.`:I=`A Game Boy homebrew ${D} by ${G}. Play online for free.`;let K="";e.screenshots[0]&&(K=r.BASE_API_URL+"/entries/"+f.params.slug+"/"+e.screenshots[0]);let E="";return e.files.forEach(_=>{_.playable&&(E=r.BASE_API_URL+"/entries/"+e.slug+"/"+_.filename)}),ae({title:j+" - Homebrew Hub",meta:[{name:"og:title",content:j},{name:"og:description",content:I},{name:"og:image",content:K},{name:"twitter:card",content:"summary_large_image"}]}),(_,S)=>{const H=x("Medusa"),U=x("Emulator"),Z=de,C=x("Chip"),z=x("Button"),A=x("Column"),X=x("DataTable"),V=M("tooltip");return l(),d(N,null,[g(n(Y),{modal:!0,position:"left",dismissableMask:!0,header:"''Developed with'' info",visible:_.display,"onUpdate:visible":S[0]||(S[0]=h=>_.display=h)},{default:p(()=>[be,ye,ve]),_:1},8,["visible"]),o("div",_e,[ke,o("div",xe,[o("div",we,[g(Z,null,{default:p(()=>[n(e).platform=="GBA"?(l(),w(H,{key:0,gameData:n(e),romEndpoint:n(E)},null,8,["gameData","romEndpoint"])):(l(),w(U,{key:1,gameData:n(e),romEndpoint:n(E)},null,8,["gameData","romEndpoint"]))]),_:1})])]),o("div",Be,[o("div",Ce,[o("div",Le,[o("div",null,[o("span",De,c(n(e).title),1),o("table",null,[n(e).platform?(l(),d("tr",Ee,[Se,o("td",null,[L((l(),w(C,{class:B(n(e).platform)},{default:p(()=>[m(c({GBA:"Game Boy Advance",GB:"Game Boy",GBC:"Game Boy Color"}[n(e).platform]),1)]),_:1},8,["class"])),[[V,_.tooltip[n(e).platform]]])])])):u("",!0),n(e).tags?(l(),d("tr",ze,[Ae,o("td",null,[(l(!0),d(N,null,le(n(e).tags,h=>(l(),d(N,null,[g(C,null,{default:p(()=>[m(c(h),1)]),_:2},1024),m("  ")],64))),256))])])):u("",!0),n(e).developer?(l(),d("tr",Ge,[Ie,o("td",null,c(n(e).developer),1)])):u("",!0),n(e).license?(l(),d("tr",Te,[Pe,o("td",null,c(n(e).license),1)])):u("",!0),n(k)!="Invalid Date"&&n(e).date?(l(),d("tr",Re,[Ne,o("td",null,c(n(k)),1)])):u("",!0),n(e).typetag?(l(),d("tr",Me,[je,o("td",null,[g(C,null,{default:p(()=>[m(c(n(e).typetag),1)]),_:1})])])):u("",!0),n(e).devtoolinfo.musicName||n(e).devtoolinfo.toolsName||n(e).devtoolinfo.engineName||n(e).devtoolinfo.soundfxName?(l(),d("tr",Ke,[o("td",Xe,[m(" Developed with"),g(z,{onClick:S[1]||(S[1]=h=>_.display=!0),icon:"pi pi-question-circle",class:"p-button-text",style:{padding:"0px"}}),m("   ")]),o("td",Ve,[n(e).devtoolinfo.engineName?(l(),d("span",Oe,c(n(e).devtoolinfo.engineName)+" "+c(n(e).devtoolinfo.engineVersion)+" (Engine) ",1)):(l(),d("div",Ye,[n(e).devtoolinfo.musicName?(l(),d("span",He,c(n(e).devtoolinfo.musicName)+" "+c(n(e).devtoolinfo.musicVersion)+" (Music) ",1)):u("",!0),n(e).devtoolinfo.toolsName?(l(),d("span",Ue,c(n(e).devtoolinfo.toolsName)+" "+c(n(e).devtoolinfo.toolsVersion)+" (Toolchains) ",1)):u("",!0),n(e).devtoolinfo.soundfxName?(l(),d("span",Ze,c(n(e).devtoolinfo.soundfxName)+" "+c(n(e).devtoolinfo.soundfxVersion)+" (Sound FX) ",1)):u("",!0)]))])])):u("",!0)]),Fe,o("a",{href:n(E)},[L(g(z,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[V,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,qe),n(e).repository?(l(),d("a",{key:0,href:n(e).repository,target:"_blank"},[m(" "),g(z,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,We)):u("",!0),n(e).website?(l(),d("a",{key:1,href:n(e).website,target:"_blank"},[m(" "),g(z,{class:"p-button-outlined",label:"Website",icon:"pi pi-external-link",iconPos:"right"},{default:p(()=>[m(" Website "),Qe]),_:1})],8,Je)):u("",!0),$e,et,o("span",tt,[o("a",{href:`https://github.com/gbdev/database/tree/master/entries/${n(e).slug}/game.json`,target:"_blank"}," Improve metadata for this entry ",8,nt),ot])])])]),it,o("div",at,[lt,n(e).platform=="GBA"?(l(),w(X,{key:0,value:_.controls_gba,responsiveLayout:"scroll"},{default:p(()=>[g(A,{field:"gb",header:"Game Boy Advance"},{body:p(h=>[g(C,{class:B(_.buttonClass[h.data.gb])},{default:p(()=>[m(c(h.data.gb),1)]),_:2},1032,["class"])]),_:1}),g(A,{field:"kb",header:"Keyboard"},{body:p(h=>[m(c(h.data.kb),1)]),_:1})]),_:1},8,["value"])):(l(),w(X,{key:1,value:_.controls,responsiveLayout:"scroll"},{default:p(()=>[g(A,{field:"gb",header:"Game Boy"},{body:p(h=>[g(C,{class:B(_.buttonClass[h.data.gb])},{default:p(()=>[m(c(h.data.gb),1)]),_:2},1032,["class"])]),_:1}),g(A,{field:"kb",header:"Keyboard"},{body:p(h=>[m(c(h.data.kb),1)]),_:1})]),_:1},8,["value"]))])])])],64)}}});export{ct as default};
