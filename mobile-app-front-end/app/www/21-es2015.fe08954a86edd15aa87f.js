(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{"6jz6":function(n,l,t){"use strict";var o=t("8Y7J"),e=t("MKJQ"),i=t("sZkV"),u=t("SVse");t("LmEr"),t("J9yG"),t("TOdT"),t.d(l,"a",(function(){return s})),t.d(l,"b",(function(){return a}));var s=o.nb({encapsulation:0,styles:[[""]],data:{}});function r(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,e.mb,e.D)),o.ob(1,49152,null,0,i.ob,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function a(n){return o.Jb(0,[o.Fb(671088640,1,{gimme50Btn:0}),(n()(),o.pb(1,0,null,null,6,"ion-footer",[["class","border-t"]],null,null,null,e.S,e.j)),o.ob(2,49152,null,0,i.y,[o.h,o.k,o.x],null,null),(n()(),o.pb(3,0,null,0,4,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.gimme50()&&o),o}),e.L,e.c)),o.ob(4,49152,[[1,4],["gimme50Btn",4]],0,i.j,[o.h,o.k,o.x],{fill:[0,"fill"]},null),(n()(),o.Hb(5,0,[" "," "])),(n()(),o.eb(16777216,null,0,1,null,r)),o.ob(7,16384,null,0,u.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"none"),n(l,7,0,""===t.status)}),(function(n,l){n(l,5,0,l.component.status)}))}},HPYO:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=t("TOdT"),i=t("J9yG"),u=t("Kmpd");class s{constructor(n,l,t){this.menu=n,this.myTools=l,this.api=t,this.qrCode="",this.lastCode=""}ngOnInit(){}ionViewWillEnter(){u.Minima.file.load("lastAddress.txt",n=>{if(n.success){const l=JSON.parse(n.data);0===l.address.length?this.newAddress():(this.qrCode=l.address,this.isEmpty=!0)}else this.newAddress()})}openMenu(){this.menu.open()}generateAddress(){this.newAddress(),this.generateAddressBtn.disabled=!0,this.myTools.presentToast("Generated a new address","primary","bottom"),setTimeout(()=>{this.generateAddressBtn.disabled=!1},2e3)}newAddress(){setTimeout(()=>{this.api.newAddress().then(n=>{if(n.status){this.qrCode=n.response.address.miniaddress,this.isEmpty=!0;let l=JSON.stringify({address:this.qrCode});u.Minima.file.save(l,"lastAddress.txt",n=>{})}})},0)}giveMe50(){this.api.giveMe50().then(n=>{this.myTools.presentAlert("Gimme50",!0===n.status?"Successful":n.message,"Status")})}copy(n){this.myTools.copy(n)}}class r{}var a=t("pMnS"),c=t("MKJQ"),b=t("sZkV"),d=t("SVse"),p=t("6jz6"),g=t("LmEr"),m=o.nb({encapsulation:0,styles:[["@media screen and (min-width:900px){.skeleton-address[_ngcontent-%COMP%]{height:auto;width:auto;--background:var(--ion-background-color, #f2f2f2)}}ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-content[_ngcontent-%COMP%]{--overflow:hidden}ion-card-content[_ngcontent-%COMP%]{background:var(--ion-card-color)}ion-card-header[_ngcontent-%COMP%]{--color:var(--ion-text-color,#000)}.ios[_ngcontent-%COMP%]   .skeleton-address[_ngcontent-%COMP%]{height:280px;width:100%}.qrCanvas[_ngcontent-%COMP%]{width:50px;height:auto}.addr-title[_ngcontent-%COMP%]{padding:10px}ion-button.copy-btn[_ngcontent-%COMP%]{text-transform:none;font-family:manrope-bold;color:#fff;background-color:var(--ion-color-primary);height:35px;width:164px;margin-left:0;margin-right:7px}ion-button.copy-btn[_ngcontent-%COMP%]:hover{--background:#346EE5}ion-button.gen-btn[_ngcontent-%COMP%]{height:35px;width:164px;text-transform:none;font-family:manrope-bold;color:var(--ion-color-color);border:1px solid var(--ion-color-color);box-shadow:none;margin-left:0}ion-button.gen-btn[_ngcontent-%COMP%]:hover{--background:var(--ion-color-color);color:var(--ion-color-item-hover);--border-radius:0;border-color:var(--ion-color-color)}ion-badge[_ngcontent-%COMP%]:hover{transform:scale(1.01)}ion-badge[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;cursor:pointer;--background:#FF512F}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;align-items:left;justify-content:left}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:first-child{margin-top:5px}input.qrcode-box[_ngcontent-%COMP%]{background-color:var(--ion-color-inputs);color:#000;border:none;width:100%;margin-bottom:0;margin-top:12px;padding:1%;font-size:15px}input.qrcode-box[_ngcontent-%COMP%]:focus{outline-color:var(--ion-color-primary)}.toast[_ngcontent-%COMP%]{--width:50%}.notes[_ngcontent-%COMP%]{color:rgba(var(--ion-color-tertiary),.65);opacity:.5;margin:10px 0 0;font-size:14px}.center[_ngcontent-%COMP%]{right:2%;align-items:center!important;justify-content:center!important;display:inline-flex!important;text-align:center!important}div.qr-box[_ngcontent-%COMP%]{width:226px;height:226px;padding:10%;background-color:var(--ion-color-inputs);display:flex;align-items:center;justify-content:center;outline:#001c32 solid 1px}div.qr-box[_ngcontent-%COMP%]:hover{outline-color:var(--ion-color-primary)}@media only screen and (max-width:600px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:175px}}@media only screen and (max-width:411px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:175px}}@media only screen and (max-width:401px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:165px}}.mt-18[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function h(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,c.ab,c.o)),o.ob(1,49152,null,0,b.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.Hb(-1,0,[" Your wallet address "]))],(function(n,l){n(l,1,0,"none")}),null)}function f(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,12,"ion-grid",[],null,null,null,c.T,c.k)),o.ob(1,49152,null,0,b.z,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,10,"ion-row",[],null,null,null,c.ib,c.z)),o.ob(3,49152,null,0,b.fb,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,4,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,c.Q,c.h)),o.ob(5,49152,null,0,b.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.pb(6,0,null,0,2,"ion-label",[],null,null,null,c.bb,c.s)),o.ob(7,49152,null,0,b.M,[o.h,o.k,o.x],null,null),(n()(),o.Hb(-1,0,["Fetching an address..."])),(n()(),o.pb(9,0,null,0,3,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,c.Q,c.h)),o.ob(10,49152,null,0,b.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.pb(11,0,null,0,1,"ion-spinner",[["name","crescent"]],null,null,null,c.mb,c.D)),o.ob(12,49152,null,0,b.ob,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"12"),n(l,10,0,"12"),n(l,12,0,"crescent")}),null)}function x(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,24,"ion-grid",[["class","ion-no-padding"]],null,null,null,c.T,c.k)),o.ob(1,49152,null,0,b.z,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,4,"ion-row",[["class","mt-18"]],null,null,null,c.ib,c.z)),o.ob(3,49152,null,0,b.fb,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,2,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,c.Q,c.h)),o.ob(5,49152,null,0,b.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.pb(6,0,null,0,0,"input",[["class","qrcode-box"]],[[8,"value",0]],null,null,null,null)),(n()(),o.pb(7,0,null,0,9,"ion-row",[["class","mt-18"]],null,null,null,c.ib,c.z)),o.ob(8,49152,null,0,b.fb,[o.h,o.k,o.x],null,null),(n()(),o.pb(9,0,null,0,7,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,c.Q,c.h)),o.ob(10,49152,null,0,b.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.pb(11,0,null,0,2,"ion-button",[["class","copy-btn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var o=!0,e=n.component;return"click"===l&&(o=!1!==e.copy(e.qrCode)&&o),o}),c.L,c.c)),o.ob(12,49152,null,0,b.j,[o.h,o.k,o.x],{fill:[0,"fill"]},null),(n()(),o.Hb(-1,0,[" Copy Address "])),(n()(),o.pb(14,0,null,0,2,"ion-button",[["class","gen-btn"],["fill","none"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.generateAddress()&&o),o}),c.L,c.c)),o.ob(15,49152,[[1,4],["generateAddressBtn",4]],0,b.j,[o.h,o.k,o.x],{fill:[0,"fill"]},null),(n()(),o.Hb(-1,0,[" Generate Address "])),(n()(),o.pb(17,0,null,0,7,"ion-row",[],null,null,null,c.ib,c.z)),o.ob(18,49152,null,0,b.fb,[o.h,o.k,o.x],null,null),(n()(),o.pb(19,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["You can use this address a thousand times."])),(n()(),o.pb(21,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["This address can be used for any Minima token or Minima custom token transaction."])),(n()(),o.pb(23,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["Click 'Generate Address' to create a new address when needed."]))],(function(n,l){n(l,5,0,"12"),n(l,10,0,"12"),n(l,12,0,"clear"),n(l,15,0,"none")}),(function(n,l){n(l,6,0,o.tb(1,"",l.component.qrCode,""))}))}function k(n){return o.Jb(0,[o.Fb(671088640,1,{generateAddressBtn:0}),(n()(),o.pb(1,0,null,null,22,"ion-app",[],null,null,null,c.J,c.a)),o.ob(2,49152,null,0,b.e,[o.h,o.k,o.x],null,null),(n()(),o.pb(3,0,null,0,12,"ion-header",[["class","page-header ion-no-border"]],null,null,null,c.U,c.l)),o.ob(4,49152,null,0,b.A,[o.h,o.k,o.x],null,null),(n()(),o.pb(5,0,null,0,10,"ion-toolbar",[],null,null,null,c.rb,c.I)),o.ob(6,49152,null,0,b.yb,[o.h,o.k,o.x],null,null),(n()(),o.pb(7,0,null,0,8,"ion-title",[],null,null,null,c.pb,c.G)),o.ob(8,49152,null,0,b.wb,[o.h,o.k,o.x],null,null),(n()(),o.pb(9,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,c.ab,c.o)),o.ob(10,49152,null,0,b.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(11,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openMenu()&&o),o}),c.V,c.m)),o.ob(12,49152,null,0,b.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.Hb(-1,0,[" Receive "])),(n()(),o.eb(16777216,null,0,1,null,h)),o.ob(15,16384,null,0,d.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(16,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,c.R,c.i)),o.ob(17,49152,null,0,b.t,[o.h,o.k,o.x],null,null),(n()(),o.eb(16777216,null,0,1,null,f)),o.ob(19,16384,null,0,d.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,x)),o.ob(21,16384,null,0,d.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(22,0,null,0,1,"app-footer",[],null,null,null,p.b,p.a)),o.ob(23,114688,null,0,g.a,[i.a,e.a],null,null)],(function(n,l){var t=l.component;n(l,10,0,"none"),n(l,12,0,"assets/menuIcon.svg"),n(l,15,0,t.qrCode.length>0),n(l,19,0,0==t.qrCode.length),n(l,21,0,t.qrCode.length>0),n(l,23,0)}),null)}function y(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-my-address",[],null,null,null,k,m)),o.ob(1,114688,null,0,s,[b.Db,e.a,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=o.lb("app-my-address",s,y,{},{},[]),v=t("s7LF"),C=t("iInd"),w=t("IA6j");t.d(l,"MyAddressPageModuleNgFactory",(function(){return O}));var O=o.mb(r,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[a.a,M]],[3,o.j],o.v]),o.zb(4608,d.l,d.k,[o.s,[2,d.u]]),o.zb(4608,v.p,v.p,[]),o.zb(4608,b.b,b.b,[o.x,o.g]),o.zb(4608,b.Eb,b.Eb,[b.b,o.j,o.p]),o.zb(4608,b.Hb,b.Hb,[b.b,o.j,o.p]),o.zb(1073742336,d.c,d.c,[]),o.zb(1073742336,v.o,v.o,[]),o.zb(1073742336,v.e,v.e,[]),o.zb(1073742336,b.Ab,b.Ab,[]),o.zb(1073742336,C.q,C.q,[[2,C.v],[2,C.m]]),o.zb(1073742336,w.a,w.a,[]),o.zb(1073742336,r,r,[]),o.zb(1024,C.k,(function(){return[[{path:"",component:s}]]}),[])])}))},IA6j:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));class o{}},LmEr:function(n,l,t){"use strict";t.d(l,"a",(function(){return o})),t("TOdT"),t("J9yG");class o{constructor(n,l){this.minimaApiService=n,this.tools=l,this.status="Gimme 50"}ngOnInit(){}gimme50(){this.status="",this.gimme50Btn.disabled=!0,this.minimaApiService.giveMe50().then(n=>{n.status?(this.tools.presentAlert("Gimme50","Successful","Status"),this.status="Gimme 50",this.gimme50Btn.disabled=!1):(this.tools.presentAlert("Gimme50",n.message,"Status"),this.status="Unavailable",setTimeout(()=>{this.gimme50Btn.disabled=!1,this.status="Gimme 50"},4e3))})}}}}]);