(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6jz6":function(t,n,e){"use strict";var i=e("8Y7J"),s=e("MKJQ"),r=e("sZkV"),o=e("SVse");e("LmEr"),e("J9yG"),e("TOdT"),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return a}));var c=i.nb({encapsulation:0,styles:[[""]],data:{}});function l(t){return i.Kb(0,[(t()(),i.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,s.fb,s.A)),i.ob(1,49152,null,0,r.ob,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null)],(function(t,n){t(n,1,0,"gray-one","dots")}),null)}function a(t){return i.Kb(0,[i.Gb(671088640,1,{gimme50Btn:0}),(t()(),i.pb(1,0,null,null,6,"ion-footer",[],null,null,null,s.M,s.h)),i.ob(2,49152,null,0,r.y,[i.h,i.k,i.x],null,null),(t()(),i.pb(3,0,null,0,4,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.gimme50()&&i),i}),s.H,s.c)),i.ob(4,49152,[[1,4],["gimme50Btn",4]],0,r.j,[i.h,i.k,i.x],{fill:[0,"fill"]},null),(t()(),i.Ib(5,0,[" "," "])),(t()(),i.eb(16777216,null,0,1,null,l)),i.ob(7,16384,null,0,o.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,4,0,"none"),t(n,7,0,""===e.status)}),(function(t,n){t(n,5,0,n.component.status)}))}},"74mu":function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return c}));const i=(t,n)=>null!==n.closest(t),s=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},n):n,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},o=/^[a-z][a-z0-9+\-.]*:/,c=async(t,n,e,i)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=n&&n.preventDefault(),s.push(t,e,i)}return!1}},IA6j:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{}},JbSX:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("wEJo"),s=e("qULd"),r=e("iWo5");const o=(t,n)=>{let e,o;const c=(t,i,s)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&n(r)?r!==e&&(a(),l(r,s)):a()},l=(t,n)=>{e=t,o||(o=e);const s=e;Object(i.f)(()=>s.classList.add("ion-activated")),n()},a=(t=!1)=>{if(!e)return;const n=e;Object(i.f)(()=>n.classList.remove("ion-activated")),t&&o!==e&&e.click(),e=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,s.a),onMove:t=>c(t.currentX,t.currentY,s.b),onEnd:()=>{a(!0),Object(s.e)(),o=void 0}})}},LmEr:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e("TOdT"),e("J9yG");class i{constructor(t,n){this.minimaApiService=t,this.tools=n,this.status="Gimme 50"}ngOnInit(){}gimme50(){this.status="",this.gimme50Btn.disabled=!0,this.minimaApiService.giveMe50().then(t=>{t.status?(this.status="Gimme 50",this.gimme50Btn.disabled=!1):(this.tools.presentAlert("Gimme50",t.message,"Status"),this.status="Unavailable",setTimeout(()=>{this.gimme50Btn.disabled=!1,this.status="Gimme 50"},4e3))})}}},acej:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return r}));var i=e("1vRN");const s=async(t,n,e,s,r)=>{if(t)return t.attachViewToDom(n,e,r,s);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return s&&s.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),n.appendChild(o),await new Promise(t=>Object(i.c)(o,t)),o},r=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=t*n/e-t+"ms",s=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,s=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{i.selection()},r=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},l=t=>{i.impact(t)}}}]);