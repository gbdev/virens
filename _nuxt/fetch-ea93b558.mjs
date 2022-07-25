import{q as C,s as B,v as O,x as P,y as x,z as k,A as U,B as H}from"./entry-9e6e29ea.mjs";const M=s=>C(s)?s:B(s),R=()=>null;function F(s,n,r={}){var u,d,l,w,b;if(typeof s!="string")throw new TypeError("asyncData key must be a string");if(typeof n!="function")throw new TypeError("asyncData handler must be a function");r={server:!0,default:R,...r},r.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),r.lazy=(d=(u=r.lazy)!=null?u:r.defer)!=null?d:!1,r.initialCache=(l=r.initialCache)!=null?l:!0;const t=O(),e=U();if(e&&!e._nuxtOnBeforeMountCbs){const p=e._nuxtOnBeforeMountCbs=[];e&&(P(()=>{p.forEach(f=>{f()}),p.splice(0,p.length)}),x(()=>p.splice(0,p.length)))}const o=()=>r.initialCache&&t.payload.data[s]!==void 0,a={data:M((w=t.payload.data[s])!=null?w:r.default()),pending:B(!o()),error:B((b=t.payload._errors[s])!=null?b:null)};a.refresh=(p={})=>t._asyncDataPromises[s]?t._asyncDataPromises[s]:p._initial&&o()?t.payload.data[s]:(a.pending.value=!0,t._asyncDataPromises[s]=Promise.resolve(n(t)).then(f=>{r.transform&&(f=r.transform(f)),r.pick&&(f=E(f,r.pick)),a.data.value=f,a.error.value=null}).catch(f=>{a.error.value=f,a.data.value=r.default()}).finally(()=>{a.pending.value=!1,t.payload.data[s]=a.data.value,a.error.value&&(t.payload._errors[s]=!0),delete t._asyncDataPromises[s]}),t._asyncDataPromises[s]);const c=()=>a.refresh({_initial:!0}),i=r.server!==!1&&t.payload.serverRendered;{i&&t.isHydrating?a.pending.value=!1:e&&(t.isHydrating||r.lazy)?e._nuxtOnBeforeMountCbs.push(c):c(),r.watch&&k(r.watch,()=>a.refresh());const p=t.hook("app:data:refresh",f=>{if(!f||f.includes(s))return a.refresh()});e&&x(p)}const h=Promise.resolve(t._asyncDataPromises[s]).then(()=>a);return Object.assign(h,a),h}function E(s,n){const r={};for(const t of n)r[t]=s[t];return r}const N={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function T(s,n={}){n={...N,...n};const r=D(n);return r.dispatch(s),r.toString()}function D(s){const n=[];let r=[];const t=e=>{n.push(e)};return{toString(){return n.join("")},getContext(){return r},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const o=/\[object (.*)\]/i,a=Object.prototype.toString.call(e),c=o.exec(a),i=c?c[1].toLowerCase():"unknown:["+a.toLowerCase()+"]";let h=null;if((h=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+h+"]");if(r.push(e),typeof Buffer!="undefined"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](e);else{if(s.ignoreUnknown)return t("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let u=Object.keys(e);return s.unorderedObjects&&(u=u.sort()),s.respectType!==!1&&!v(e)&&u.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(u=u.filter(function(d){return!s.excludeKeys(d)})),t("object:"+u.length+":"),u.forEach(d=>{this.dispatch(d),t(":"),s.excludeValues||this.dispatch(e[d]),t(",")})}},_array(e,o){if(o=typeof o!="undefined"?o:s.unorderedArrays!==!1,t("array:"+e.length+":"),!o||e.length<=1)return e.forEach(i=>this.dispatch(i));const a=[],c=e.map(i=>{const h=D(s);return h.dispatch(i),a.push(h.getContext()),h.toString()});return r=r.concat(a),c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),v(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const o=Array.from(e);return this._array(o,s.unorderedSets!==!1)},_set(e){t("set:");const o=Array.from(e);return this._array(o,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function v(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class _{constructor(n,r){n=this.words=n||[],r!==void 0?this.sigBytes=r:this.sigBytes=n.length*4}toString(n){return(n||L).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _(this.words.slice(0))}}const L={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;n.push((t>>>4).toString(16)),n.push((t&15).toString(16))}return n.join("")}},I={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,o=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,a=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|o<<8|a;for(let i=0;i<4&&t*8+i*6<s.sigBytes*8;i++)r.push(n.charAt(c>>>6*(3-i)&63))}return r.join("")}},W={parse(s){const n=s.length,r=[];for(let t=0;t<n;t++)r[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new _(r,n)}},K={parse(s){return W.parse(unescape(encodeURIComponent(s)))}};class ${constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new _,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=K.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,o=Math.min(e*4,this._data.sigBytes);if(e){for(let a=0;a<e;a+=this.blockSize)this._doProcessBlock(this._data.words,a);r=this._data.words.splice(0,e),this._data.sigBytes-=o}return new _(r,o)}}class q extends ${update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const J=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],V=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],y=[];class G extends q{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new _(J.slice(0))}_doProcessBlock(n,r){const t=this._hash.words;let e=t[0],o=t[1],a=t[2],c=t[3],i=t[4],h=t[5],u=t[6],d=t[7];for(let l=0;l<64;l++){if(l<16)y[l]=n[r+l]|0;else{const g=y[l-15],A=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,m=y[l-2],j=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;y[l]=A+y[l-7]+j+y[l-16]}const w=i&h^~i&u,b=e&o^e&a^o&a,p=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),f=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),S=d+f+w+V[l]+y[l],z=p+b;d=u,u=h,h=i,i=c+S|0,c=a,a=o,o=e,e=S+z|0}t[0]=t[0]+e|0,t[1]=t[1]+o|0,t[2]=t[2]+a|0,t[3]=t[3]+c|0,t[4]=t[4]+i|0,t[5]=t[5]+h|0,t[6]=t[6]+u|0,t[7]=t[7]+d|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Q(s){return new G().finalize(s).toString(I)}function X(s,n={}){const r=typeof s=="string"?s:T(s,n);return Q(r).substr(0,10)}function Z(s,n={}){const r="$f_"+(n.key||X([s,n])),t=H(()=>{let c=s;return typeof c=="function"&&(c=c()),C(c)?c.value:c}),e={...n,cache:typeof n.cache=="boolean"?void 0:n.cache},o={...n,watch:[t,...n.watch||[]]};return F(r,()=>$fetch(t.value,e),o)}export{Z as u};
