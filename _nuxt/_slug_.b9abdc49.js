import{i as q,r as W,j as J,b as d,k as Q,Z as P,D as y,U as H,R as $,F as ee,s as te,l as B,m as j,o as l,c as C,w as g,p as w,q as h,T as ne,t as D,v as R,x as N,y as c,z as u,f as o,e as m,A as oe,B as ie,C as ae,E as le,a as se,u as n,G as M,H as de,I as re,J as ce}from"./entry.665ef5fb.js";import{u as ue}from"./fetch.464c30d4.js";const me=q({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:i,attrs:s}){const b=W(!1);return J(()=>{b.value=!0}),r=>{var _;if(b.value)return(_=i.default)==null?void 0:_.call(i);const a=i.fallback||i.placeholder;if(a)return a();const v=r.fallback||r.placeholder||"",e=r.fallbackTag||r.placeholderTag||"span";return d(e,s,v)}}});var Y={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:Q(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusable:!1}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&P.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(t){t.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&P.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&y.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusable=!1},onAfterLeave(){this.autoZIndex&&P.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(t){this.dismissableMask&&this.modal&&this.mask===t.target&&this.close()},focus(){const t=s=>s.querySelector("[autofocus]");let i=this.$slots.footer&&t(this.footerContainer);i||(i=this.$slots.header&&t(this.headerContainer),i||(i=this.$slots.default&&t(this.content),i||(i=t(this.container)))),i&&(this.focusable=!0,i.focus())},maximize(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?y.addClass(document.body,"p-overflow-hidden"):y.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&y.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&y.removeClass(document.body,"p-overflow-hidden")},onKeyDown(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(s=>s===this.position);return i?`p-dialog-${i}`:""},containerRef(t){this.container=t},maskRef(t){this.mask=t},contentRef(t){this.content=t},headerContainerRef(t){this.headerContainer=t},footerContainerRef(t){this.footerContainer=t},maximizableRef(t){this.maximizableButton=t},closeButtonRef(t){this.closeButton=t},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let i in this.breakpoints)t+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(t){y.hasClass(t.target,"p-dialog-header-icon")||y.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",y.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=t=>{if(this.dragging){let i=y.getOuterWidth(this.container),s=y.getOuterHeight(this.container),b=t.pageX-this.lastPageX,r=t.pageY-this.lastPageY,a=this.container.getBoundingClientRect(),v=a.left+b,e=a.top+r,_=y.getViewport();this.container.style.position="fixed",this.keepInViewport?(v>=this.minX&&v+i<_.width&&(this.lastPageX=t.pageX,this.container.style.left=v+"px"),e>=this.minY&&e+s<_.height&&(this.lastPageY=t.pageY,this.container.style.top=e+"px")):(this.lastPageX=t.pageX,this.container.style.left=v+"px",this.lastPageY=t.pageY,this.container.style.top=e+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=t=>{this.dragging&&(this.dragging=!1,y.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return H()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return H()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:$,focustrap:ee},components:{Portal:te}};const pe=["aria-labelledby","aria-modal"],ge=["id"],fe={class:"p-dialog-header-icons"},he=["autofocus","tabindex"],be=["autofocus","aria-label"];function ye(t,i,s,b,r,a){const v=B("Portal"),e=j("ripple"),_=j("focustrap");return l(),C(v,{appendTo:s.appendTo},{default:g(()=>[r.containerVisible?(l(),d("div",{key:0,ref:a.maskRef,class:w(a.maskClass),onClick:i[3]||(i[3]=(...k)=>a.onMaskClick&&a.onMaskClick(...k))},[h(ne,{name:"p-dialog",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},{default:g(()=>[s.visible?D((l(),d("div",R({key:0,ref:a.containerRef,class:a.dialogClass,role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":s.modal},t.$attrs),[s.showHeader?(l(),d("div",{key:0,ref:a.headerContainerRef,class:"p-dialog-header",onMousedown:i[2]||(i[2]=(...k)=>a.initDrag&&a.initDrag(...k))},[N(t.$slots,"header",{},()=>[s.header?(l(),d("span",{key:0,id:a.ariaLabelledById,class:"p-dialog-title"},c(s.header),9,ge)):u("",!0)]),o("div",fe,[s.maximizable?D((l(),d("button",{key:0,ref:a.maximizableRef,autofocus:r.focusable,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:i[0]||(i[0]=(...k)=>a.maximize&&a.maximize(...k)),type:"button",tabindex:s.maximizable?"0":"-1"},[o("span",{class:w(a.maximizeIconClass)},null,2)],8,he)),[[e]]):u("",!0),s.closable?D((l(),d("button",R({key:1,ref:a.closeButtonRef,autofocus:r.focusable,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:i[1]||(i[1]=(...k)=>a.close&&a.close(...k)),"aria-label":a.closeAriaLabel,type:"button"},s.closeButtonProps),[o("span",{class:w(["p-dialog-header-close-icon",s.closeIcon])},null,2)],16,be)),[[e]]):u("",!0)])],544)):u("",!0),o("div",R({ref:a.contentRef,class:a.contentStyleClass,style:s.contentStyle},s.contentProps),[N(t.$slots,"default")],16),s.footer||t.$slots.footer?(l(),d("div",{key:1,ref:a.footerContainerRef,class:"p-dialog-footer"},[N(t.$slots,"footer",{},()=>[m(c(s.footer),1)])],512)):u("",!0)],16,pe)),[[_,{disabled:!s.modal}]]):u("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):u("",!0)]),_:3},8,["appendTo"])}function ve(t,i){i===void 0&&(i={});var s=i.insertAt;if(!(!t||typeof document>"u")){var b=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",s==="top"&&b.firstChild?b.insertBefore(r,b.firstChild):b.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var _e=`
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
`;ve(_e);Y.render=ye;const p=t=>(re("data-v-3ee15f0b"),t=t(),ce(),t),xe=p(()=>o("p",null,[m(" This information is provided by "),o("a",{href:"https://github.com/bbbbbr/gbtoolsid",target:"_blank"},"gbtoolsid"),m(", a tool which "),o("i",null,"attempts"),m(" to detect the tools used to develop a Game Boy ROM through binary fingerprints. ")],-1)),ke=p(()=>o("p",null," Game engine (e.g. GB Studio), Audio driver (e.g. Carillon Player), Toolchain (e.g. GBDK) and Sound FX driver (e.g. FX Hammer) can be identified. ",-1)),we=p(()=>o("p",null," If the line is not present, the tool returned no results. Please report any bug or failed detection in the repository. ",-1)),Be={class:"grid"},Ce=p(()=>o("div",{class:"col-12 lg:col-0 xl:col-1"},null,-1)),Le={class:"col-12 lg:col-6 xl:col-5"},De={class:"card mb-0"},Ee={class:"col-12 lg:col-6 xl:col-5"},Se={class:"card mb-0"},ze={class:"flex justify-content-between mb-6"},Ie={class:"gametitle"},Ae={key:0},Ge=p(()=>o("td",{class:"value-title"},"Platform",-1)),Te={key:1},Pe=p(()=>o("td",{class:"value-title"},"Type",-1)),Re={key:2},Ne=p(()=>o("td",{class:"value-title"},"Tags",-1)),Me={key:3},je=p(()=>o("td",{class:"value-title"},"Developer",-1)),Ke={key:4},Xe=p(()=>o("td",{class:"value-title"},"License",-1)),Ve={key:5},Oe=p(()=>o("td",{class:"value-title"},"Release Date",-1)),He={key:6},Ye={class:"value-title devtoolinfo"},Ue={class:"devtoolinfo"},Ze={key:0},Fe={key:1},qe={key:0},We={key:1},Je={key:2},Qe=p(()=>o("br",null,null,-1)),$e=["href"],et=["href"],tt=["href"],nt=p(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"icon"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"})],-1)),ot=p(()=>o("br",null,null,-1)),it=p(()=>o("br",null,null,-1)),at={style:{"font-size":"0.9rem"}},lt=["href"],st=p(()=>o("br",null,null,-1)),dt=p(()=>o("br",null,null,-1)),rt={class:"card mb-0"},ct=p(()=>o("h2",null,"Controls",-1)),ut={name:"Game",props:{msg:String},data(){return{display:!1,buttonClass:{A:"ab-button",B:"ab-button",Start:"ss-button",Select:"ss-button","← ↑ → ↓":"arrows"},controls:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Tab"},{gb:"← ↑ → ↓",kb:"← ↑ → ↓"}],controls_gba:[{gb:"A",kb:"X"},{gb:"B",kb:"Z"},{gb:"Start",kb:"Enter"},{gb:"Select",kb:"Backspace"},{gb:"← ↑ → ↓",kb:"← ↑ → ↓"},{gb:"L",kb:"A"},{gb:"R",kb:"S"}],columns:[{field:"gb",header:"Game Boy"},{field:"kb",header:"Keyboard"}],tooltip:{GB:"The cartridge was designed to be played on the original Game Boy",GBC:"The game supports Game Boy Color features",SGB:"The game supports Super Game Boy features"}}}},mt=Object.assign(ut,{async setup(t){let i,s;const b=ie(),r=ae().public,a=r.BASE_API_URL+"/api/entry/"+b.params.slug+".json",{data:v}=([i,s]=le(()=>ue(a,"$xkDbIKOSHX")),i=await i,s(),i),e=v.value;let _=new Date;isNaN(e.date)!=!0?_=new Date(e.date*1e3):typeof e.date=="string"&&(_=new Date(e.date));const k=_.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric"});let G="";const K=v.value.title;e.developer&&(G=e.developer);let E="";e.typetag?E=e.typetag:E=e;let T="";E=="music"?T=`A Game Boy music cartridge by ${G}. Listen online for free.`:T=`A Game Boy homebrew ${E} by ${G}. Play online for free.`;let X="";e.screenshots[0]&&(X=r.BASE_API_URL+"/entries/"+b.params.slug+"/"+e.screenshots[0]);let S="";return e.files.forEach(x=>{x.playable&&(S=r.BASE_API_URL+"/entries/"+e.slug+"/"+x.filename)}),se({title:K+" - Homebrew Hub",meta:[{name:"og:title",content:K},{name:"og:description",content:T},{name:"og:image",content:X},{name:"twitter:card",content:"summary_large_image"}]}),(x,z)=>{const U=B("Medusa"),Z=B("Emulator"),F=me,L=B("Chip"),I=B("Button"),A=B("Column"),V=B("DataTable"),O=j("tooltip");return l(),d(M,null,[h(n(Y),{modal:!0,position:"left",dismissableMask:!0,header:"''Developed with'' info",visible:x.display,"onUpdate:visible":z[0]||(z[0]=f=>x.display=f)},{default:g(()=>[xe,ke,we]),_:1},8,["visible"]),o("div",Be,[Ce,o("div",Le,[o("div",De,[h(F,null,{default:g(()=>[n(e).platform=="GBA"?(l(),C(U,{key:0,gameData:n(e),romEndpoint:n(S)},null,8,["gameData","romEndpoint"])):(l(),C(Z,{key:1,gameData:n(e),romEndpoint:n(S)},null,8,["gameData","romEndpoint"]))]),_:1})])]),o("div",Ee,[o("div",Se,[o("div",ze,[o("div",null,[o("span",Ie,c(n(e).title),1),o("table",null,[n(e).platform?(l(),d("tr",Ae,[Ge,o("td",null,[D((l(),C(L,{class:w(n(e).platform+" tag")},{default:g(()=>[m(c({GBA:"Game Boy Advance",GB:"Game Boy",GBC:"Game Boy Color"}[n(e).platform]),1)]),_:1},8,["class"])),[[O,x.tooltip[n(e).platform]]])])])):u("",!0),n(e).typetag?(l(),d("tr",Te,[Pe,o("td",null,[h(L,{class:w("typetag "+n(e).typetag)},{default:g(()=>[m(c(n(e).typetag),1)]),_:1},8,["class"])])])):u("",!0),n(e).tags?(l(),d("tr",Re,[Ne,o("td",null,[(l(!0),d(M,null,de(n(e).tags,f=>(l(),d(M,null,[h(L,{class:w("tag "+f.replace(" ","-").toLowerCase())},{default:g(()=>[m(c(f),1)]),_:2},1032,["class"]),m("  ")],64))),256))])])):u("",!0),n(e).developer?(l(),d("tr",Me,[je,o("td",null,c(n(e).developer),1)])):u("",!0),n(e).license?(l(),d("tr",Ke,[Xe,o("td",null,c(n(e).license),1)])):u("",!0),n(k)!="Invalid Date"&&n(e).date?(l(),d("tr",Ve,[Oe,o("td",null,c(n(k)),1)])):u("",!0),n(e).devtoolinfo.musicName||n(e).devtoolinfo.toolsName||n(e).devtoolinfo.engineName||n(e).devtoolinfo.soundfxName?(l(),d("tr",He,[o("td",Ye,[m(" Developed with"),h(I,{onClick:z[1]||(z[1]=f=>x.display=!0),icon:"pi pi-question-circle",class:"p-button-text",style:{padding:"0px"}}),m("   ")]),o("td",Ue,[n(e).devtoolinfo.engineName?(l(),d("span",Ze,c(n(e).devtoolinfo.engineName)+" "+c(n(e).devtoolinfo.engineVersion)+" (Engine) ",1)):(l(),d("div",Fe,[n(e).devtoolinfo.musicName?(l(),d("span",qe,c(n(e).devtoolinfo.musicName)+" "+c(n(e).devtoolinfo.musicVersion)+" (Music) ",1)):u("",!0),n(e).devtoolinfo.toolsName?(l(),d("span",We,c(n(e).devtoolinfo.toolsName)+" "+c(n(e).devtoolinfo.toolsVersion)+" (Toolchains) ",1)):u("",!0),n(e).devtoolinfo.soundfxName?(l(),d("span",Je,c(n(e).devtoolinfo.soundfxName)+" "+c(n(e).devtoolinfo.soundfxVersion)+" (Sound FX) ",1)):u("",!0)]))])])):u("",!0)]),Qe,o("a",{href:n(S)},[D(h(I,{label:"Download ROM",icon:"pi pi-download",iconPos:"right"},null,512),[[O,"Use an emulator like BGB or Gambatte to play downloaded ROMs"]])],8,$e),n(e).repository?(l(),d("a",{key:0,href:n(e).repository,target:"_blank"},[m(" "),h(I,{class:"p-button-outlined",label:"Get Source Code",icon:"pi pi-external-link",iconPos:"right"})],8,et)):u("",!0),n(e).website?(l(),d("a",{key:1,href:n(e).website,target:"_blank"},[m(" "),h(I,{class:"p-button-outlined",label:"Website",icon:"pi pi-external-link",iconPos:"right"},{default:g(()=>[m(" Website "),nt]),_:1})],8,tt)):u("",!0),ot,it,o("span",at,[o("a",{href:`https://github.com/gbdev/database/tree/master/entries/${n(e).slug}/game.json`,target:"_blank"}," Improve metadata for this entry ",8,lt),st])])])]),dt,o("div",rt,[ct,n(e).platform=="GBA"?(l(),C(V,{key:0,value:x.controls_gba,responsiveLayout:"scroll"},{default:g(()=>[h(A,{field:"gb",header:"Game Boy Advance"},{body:g(f=>[h(L,{class:w(x.buttonClass[f.data.gb])},{default:g(()=>[m(c(f.data.gb),1)]),_:2},1032,["class"])]),_:1}),h(A,{field:"kb",header:"Keyboard"},{body:g(f=>[m(c(f.data.kb),1)]),_:1})]),_:1},8,["value"])):(l(),C(V,{key:1,value:x.controls,responsiveLayout:"scroll"},{default:g(()=>[h(A,{field:"gb",header:"Game Boy"},{body:g(f=>[h(L,{class:w(x.buttonClass[f.data.gb])},{default:g(()=>[m(c(f.data.gb),1)]),_:2},1032,["class"])]),_:1}),h(A,{field:"kb",header:"Keyboard"},{body:g(f=>[m(c(f.data.kb),1)]),_:1})]),_:1},8,["value"]))])])])],64)}}}),ft=oe(mt,[["__scopeId","data-v-3ee15f0b"]]);export{ft as default};
