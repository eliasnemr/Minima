(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{hlMj:function(n,l,t){"use strict";t.r(l);var i=t("8Y7J"),e=t("TOdT"),o=t("J9yG"),u=t("aaBP");class a{constructor(n,l,t,i,e){this.menu=n,this.minimaApiService=l,this.myTools=t,this.route=i,this.popoverController=e,this.tokenArr=[],this.tokenSpoof=[]}ionViewWillEnter(){this.$balanceSubscription=this.minimaApiService.$balance.subscribe(n=>{this.$balance=this.minimaApiService.$balance})}ionViewWillLeave(){this.$balanceSubscription.unsubscribe()}ngOnInit(){}giveMe50(){this.minimaApiService.giveMe50().then(n=>{this.myTools.presentAlert("Gimme50",!0===n.status?"Successful":n.message,"Status")})}loadData(n){setTimeout(()=>{console.log("Done"),n.target.complete(),5===this.tokenArr.length&&(n.target.disabled=!0)},500)}closeSliding(n){n.close()}createIdenticon(n){return this.avatar="https://www.gravatar.com/avatar/"+u.hash(n)+"?d=identicon"}sendTokenOver(n,l){n.close(),this.route.navigate(["/send-funds/"+l])}instanceOfToken(n){return"script"in n}}const r=()=>t.e(15).then(t.bind(null,"6gQK")).then(n=>n.ViewTokensPageModuleNgFactory);class c{}var b=t("pMnS"),s=t("MKJQ"),p=t("sZkV"),m=t("SVse"),d=t("iInd");class g{constructor(){}ngOnInit(){}createIcon(n){return this.avatar="https://www.gravatar.com/avatar/"+u.hash(n)+"?d=identicon"}}var f=i.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.custom-icon[_ngcontent-%COMP%], .minima-icon[_ngcontent-%COMP%]{width:38px;height:35px}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:75px!important;max-height:75px!important}span.confirmed-amount[_ngcontent-%COMP%]{font-family:manrope-regular;color:#9898a3;white-space:nowrap;max-width:30vw;text-overflow:ellipsis;overflow:hidden}ion-avatar[_ngcontent-%COMP%]{margin-top:2%;height:36px;width:36px}#token-name[_ngcontent-%COMP%]{margin:0;display:inline-block;white-space:nowrap;font-size:1rem!important;max-width:inherit;text-overflow:ellipsis;overflow:hidden;font-family:manrope-bold;color:var(--ion-color-tertiary)}ion-item[_ngcontent-%COMP%]:first-child{margin-top:1%}ion-item[_ngcontent-%COMP%]{opacity:1;--background:var(--ion-color-token);--background-activated:var(--ion-color-token);--background-activated-opacity:0.2;--background-hover:var(--ion-color-item-hover);--background-hover-opacity:1;background:var(--ion-color-token);border:1px solid var(--ion-color-item-border);border-radius:10px;margin-bottom:2%}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0}ion-item[_ngcontent-%COMP%]   ion-label#token-name[_ngcontent-%COMP%]{max-width:220px;text-overflow:ellipsis;font-family:manrope-medium}ion-list[_ngcontent-%COMP%]{overflow:scroll}div.token-wrapper[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);display:flex;flex-direction:column;max-width:150px}.blink_me[_ngcontent-%COMP%]{animation:1s linear infinite blinker}@keyframes blinker{50%{opacity:0}}"]],data:{}});function h(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.createIcon(l.parent.parent.context.$implicit.tokenid))}))}function k(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.parent.context.$implicit.icon)}))}function v(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,0,"img",[["alt","minima"],["class","minima-icon"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function x(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,1,"span",[["class","blink_me confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),i.Ib(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable)}))}function w(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,1,"span",[["class","confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),i.Ib(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable+"/"+l.parent.parent.context.$implicit.unconfirmed)}))}function M(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,1,"span",[["class","confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),i.Ib(1,null,[""," "]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable)}))}function I(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,18,null,null,null,null,null,null,null)),(n()(),i.pb(1,0,null,null,7,"ion-avatar",[["slot","start"]],null,null,null,s.F,s.b)),i.ob(2,49152,null,0,p.f,[i.h,i.k,i.x],null,null),(n()(),i.eb(16777216,null,0,1,null,h)),i.ob(4,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,0,1,null,k)),i.ob(6,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,0,1,null,v)),i.ob(8,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.pb(9,0,null,null,9,"div",[["class","token-wrapper"]],null,null,null,null,null)),(n()(),i.pb(10,0,null,null,2,"ion-label",[["id","token-name"]],null,null,null,s.T,s.p)),i.ob(11,49152,null,0,p.M,[i.h,i.k,i.x],null,null),(n()(),i.Ib(12,0,["",""])),(n()(),i.eb(16777216,null,null,1,null,x)),i.ob(14,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,w)),i.ob(16,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,M)),i.ob(18,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,4,0,"0x00"!==l.parent.context.$implicit.tokenid&&0==l.parent.context.$implicit.icon.length),n(l,6,0,"0x00"!==l.parent.context.$implicit.tokenid&&l.parent.context.$implicit.icon.length>0),n(l,8,0,"0x00"===l.parent.context.$implicit.tokenid),n(l,14,0,"0"==l.parent.context.$implicit.unconfirmed&&"0"!==l.parent.context.$implicit.mempool),n(l,16,0,"0"!=l.parent.context.$implicit.unconfirmed),n(l,18,0,"0"==l.parent.context.$implicit.unconfirmed&&"0"==l.parent.context.$implicit.mempool)}),(function(n,l){n(l,12,0,l.parent.context.$implicit.token)}))}function O(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,6,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==i.Bb(n,2).onClick()&&e),"click"===l&&(e=!1!==i.Bb(n,4).onClick(t)&&e),e}),s.S,s.l)),i.ob(1,49152,null,0,p.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),i.ob(2,16384,null,0,d.n,[d.m,d.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.Cb(3,1),i.ob(4,737280,null,0,p.Ib,[m.h,p.Fb,i.k,d.m,[2,d.n]],null,null),(n()(),i.eb(16777216,null,0,1,null,I)),i.ob(6,16384,null,0,m.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"none");var t=n(l,3,0,"view-tokens/"+l.context.$implicit.tokenid);n(l,2,0,t),n(l,4,0),n(l,6,0,"ERROR_UNKNOWN_TOKEN"!==l.context.$implicit.token)}),null)}function $(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,4,"ion-list",[],null,null,null,s.V,s.q)),i.ob(1,49152,null,0,p.N,[i.h,i.k,i.x],null,null),(n()(),i.eb(16777216,null,0,2,null,O)),i.ob(3,278528,null,0,m.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),i.Db(131072,m.b,[i.h])],(function(n,l){var t=l.component;n(l,3,0,i.Jb(l,3,0,i.Bb(l,4).transform(t.tokenArr)))}),null)}var y=t("6jz6"),C=t("LmEr"),_=i.nb({encapsulation:0,styles:[[""]],data:{}});function P(n){return i.Kb(0,[i.Gb(671088640,1,{gimme50Btn:0}),(n()(),i.pb(1,0,null,null,22,"ion-app",[],null,null,null,s.E,s.a)),i.ob(2,49152,null,0,p.e,[i.h,i.k,i.x],null,null),(n()(),i.pb(3,0,null,0,13,"ion-header",[["class","page-header ion-no-border"]],null,null,null,s.M,s.i)),i.ob(4,49152,null,0,p.A,[i.h,i.k,i.x],null,null),(n()(),i.pb(5,0,null,0,11,"ion-toolbar",[],null,null,null,s.hb,s.D)),i.ob(6,49152,null,0,p.yb,[i.h,i.k,i.x],null,null),(n()(),i.pb(7,0,null,0,9,"ion-title",[],null,null,null,s.gb,s.C)),i.ob(8,49152,null,0,p.wb,[i.h,i.k,i.x],null,null),(n()(),i.pb(9,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,s.S,s.l)),i.ob(10,49152,null,0,p.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.pb(11,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.menu.open()&&i),i}),s.N,s.j)),i.ob(12,49152,null,0,p.B,[i.h,i.k,i.x],{src:[0,"src"]},null),(n()(),i.Ib(-1,0,[" Balance "])),(n()(),i.pb(14,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,s.S,s.l)),i.ob(15,49152,null,0,p.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.Ib(-1,0,[" All tokens "])),(n()(),i.pb(17,0,null,0,4,"ion-content",[["class","page-content"]],null,null,null,s.J,s.f)),i.ob(18,49152,null,0,p.t,[i.h,i.k,i.x],null,null),(n()(),i.pb(19,0,null,0,2,"div",[["class","body"]],null,null,null,null,null)),(n()(),i.pb(20,0,null,null,1,"app-list-view",[],null,null,null,$,f)),i.ob(21,114688,null,0,g,[],{tokenArr:[0,"tokenArr"]},null),(n()(),i.pb(22,0,null,0,1,"app-footer",[],null,null,null,y.b,y.a)),i.ob(23,245760,null,0,C.a,[o.a,e.a],null,null)],(function(n,l){var t=l.component;n(l,10,0,"none"),n(l,12,0,"assets/menuIcon.svg"),n(l,15,0,"none"),n(l,21,0,t.$balance),n(l,23,0)}),null)}function z(n){return i.Kb(0,[(n()(),i.pb(0,0,null,null,1,"app-balance",[],null,null,null,P,_)),i.ob(1,114688,null,0,a,[p.Db,o.a,e.a,d.m,p.Hb],null,null)],(function(n,l){n(l,1,0)}),null)}var j=i.lb("app-balance",a,z,{},{},[]),A=t("s7LF"),J=t("IA6j");t.d(l,"BalancePageModuleNgFactory",(function(){return K}));var K=i.mb(c,[],(function(n){return i.yb([i.zb(512,i.j,i.X,[[8,[b.a,j]],[3,i.j],i.v]),i.zb(4608,m.l,m.k,[i.s,[2,m.u]]),i.zb(4608,p.b,p.b,[i.x,i.g]),i.zb(4608,p.Eb,p.Eb,[p.b,i.j,i.p]),i.zb(4608,p.Hb,p.Hb,[p.b,i.j,i.p]),i.zb(4608,A.o,A.o,[]),i.zb(1073742336,m.c,m.c,[]),i.zb(1073742336,p.Ab,p.Ab,[]),i.zb(1073742336,J.a,J.a,[]),i.zb(1073742336,A.n,A.n,[]),i.zb(1073742336,A.e,A.e,[]),i.zb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),i.zb(1073742336,c,c,[]),i.zb(1024,d.k,(function(){return[[{path:"",component:a,pathMatch:"full"},{path:"view-tokens/:id",loadChildren:r}]]}),[])])}))}}]);