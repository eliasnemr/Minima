(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"748j":function(n,l,t){"use strict";t.r(l);var i=t("8Y7J"),o=t("IzEk"),e=t("TOdT"),u=t("J9yG"),a=t("wd/R");class c{constructor(n,l,t,i,o,e,u){this.menu=n,this.router=l,this.modalController=t,this.popoverController=i,this.config=o,this.myTools=e,this.minimaApiService=u,this.$history=[]}ngOnInit(){}ionViewWillEnter(){this.minimaApiService.initHistory(),this.$subscribe()}ionViewWillLeave(){this.$historySubscription&&this.$historySubscription.unsubscribe()}$subscribe(){this.prompt="Fetching your history...",this.$historySubscription=this.minimaApiService.$history.pipe(Object(o.a)(1)).subscribe(n=>{n.history.sort(this.byDescDate),this.prompt=0===n.history.length?"No recent transactions found.":"",this.$history=n.history?n.history:[],this.$history.forEach(n=>{if(n.values[0]&&n.values.length>0&&"{"===n.values[0].name.substring(0,1)){const l=JSON.parse(n.values[0].name);n.values[0].name=l.name}n.time=a(parseInt(n.txpow.header.timemilli,10)).format("hh:mm a"),n.day=a(parseInt(n.txpow.header.timemilli,10)).format("DD"),n.month=a(parseInt(n.txpow.header.timemilli,10)).format("MMM"),n.year=a(parseInt(n.txpow.header.timemilli,10)).format("YYYY")})})}openMenu(){this.menu.open()}byDescDate(n,l){return l.txpow.header.timemilli.localeCompare(n.txpow.header.timemilli)}}const r=()=>t.e(5).then(t.bind(null,"Sfwq")).then(n=>n.ViewTXNPageModuleNgFactory);class s{}var p=t("pMnS"),b=t("MKJQ"),m=t("sZkV"),g=t("SVse"),d=t("iInd"),x=t("6jz6"),h=t("LmEr"),f=i.nb({encapsulation:0,styles:[["ion-icon.icon[_ngcontent-%COMP%]{width:36.83px;height:36.83px;display:inline-block;vertical-align:middle;justify-content:center;align-content:center}ion-card-content[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{margin-top:10px}ion-list[_ngcontent-%COMP%]{background-color:transparent;margin:0;padding:2px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-background);--min-height:75px;--padding-start:27px;--inner-padding-end:27px;--border-width:0px 0px 0px 0px;opacity:1;--background-activated:var(--ion-color-token)!important;--background-activated-opacity:0.2!important;--background-hover:var(--ion-color-item-hover);--background-hover-opacity:1;--border-color:var(--ion-color-item-border)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{height:36.83px;width:36.83px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.transaction-type[_ngcontent-%COMP%]{display:flex;flex-direction:column}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.transaction-type[_ngcontent-%COMP%]   div.name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{padding:0 0 5px;margin:0;line-height:17px;max-width:20vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:manrope-medium}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.transaction-type[_ngcontent-%COMP%]   div.amount[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{padding:0;margin:0;max-width:20vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:manrope-semibold}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.transaction-type[_ngcontent-%COMP%]   div.amount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:0;max-width:20vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;opacity:.3}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.date[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px;color:#aaaabe;padding:0;margin:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;color:#aaaabe;padding:0;margin:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-child{margin-top:7px}ion-list.date-time[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-top:20px}ion-list.date-time[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{line-height:10px;color:#aaaabe;font-size:14px;padding:0;margin:0}ion-list.date-time[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:13px;color:#aaaabe;margin:0;padding:0;font-size:12px}ion-label[_ngcontent-%COMP%]{max-width:auto;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-label.transactionLabel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:0;margin:0;font-family:manrope-medium;font-size:16px}ion-label.transactionLabel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:manrope-light;color:#abacbf;padding:0;margin:0}ion-label.transactionLabel[_ngcontent-%COMP%]   p.time[_ngcontent-%COMP%]{color:var(--ion-color-gray-three);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-label.token-name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:manrope-medium;padding:0;margin:0;line-height:17px;text-overflow:ellipsis;max-width:20vw;overflow:hidden;white-space:nowrap}ion-label.transaction-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{max-width:22vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-label.transaction-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:0;margin:0;max-width:22vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-family:manrope-semibold}ion-label.transaction-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:8px;padding:0;margin:0;font-size:10px;font-family:manrope-light;max-width:22vw;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}ion-content[_ngcontent-%COMP%]{overflow-y:scroll}#filter-settings[_ngcontent-%COMP%]{position:absolute;right:5%;top:15%;cursor:pointer}"]],data:{}});function v(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,b.ab,b.o)),i.ob(1,49152,null,0,m.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.Hb(-1,0,[" Transaction history "]))],(function(n,l){n(l,1,0,"none")}),null)}function w(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"ion-icon",[["alt","send-receive"],["class","icon"],["src","assets/sendIcon.svg"],["style","fill: var(--ion-color-secondary) !important"]],null,null,null,b.V,b.m)),i.ob(1,49152,null,0,m.B,[i.h,i.k,i.x],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,"assets/sendIcon.svg")}),null)}function M(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"ion-icon",[["alt","send-receive"],["class","icon"],["src","assets/receiveIcon.svg"],["style","fill:var(--ion-color-primary) !important"]],null,null,null,b.V,b.m)),i.ob(1,49152,null,0,m.B,[i.h,i.k,i.x],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,"assets/receiveIcon.svg")}),null)}function y(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"ion-icon",[["alt","send-receive"],["class","icon"],["src","assets/createIcon.svg"]],null,null,null,b.V,b.m)),i.ob(1,49152,null,0,m.B,[i.h,i.k,i.x],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,"assets/createIcon.svg")}),null)}function C(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),i.Hb(1,null,[" ",""]))],null,(function(n,l){n(l,1,0,null==l.parent.context.$implicit.values[0]?null:l.parent.context.$implicit.values[0].name)}))}function O(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Hb(1,null,[" ",""]))],null,(function(n,l){n(l,1,0,null==l.parent.context.$implicit.values[0]||null==l.parent.context.$implicit.values[0].name?null:l.parent.context.$implicit.values[0].name.name)}))}function P(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),i.Hb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.txpow.body.txn.tokengen.token)}))}function _(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),i.Hb(1,null,["Transaction: ",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.txpow.txpowid)}))}function $(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,1,"h6",[["class","minima-numeric left"]],null,null,null,null,null)),(n()(),i.Hb(2,null,["",""]))],null,(function(n,l){n(l,2,0,null==l.parent.parent.context.$implicit.values[0]?null:l.parent.parent.context.$implicit.values[0].amount)}))}function k(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,1,"h6",[["class","minima-numeric left"]],null,null,null,null,null)),(n()(),i.Hb(2,null,["",""]))],null,(function(n,l){n(l,2,0,"+"+(null==l.parent.parent.context.$implicit.values[0]?null:l.parent.parent.context.$implicit.values[0].amount))}))}function I(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,4,"div",[["class","amount"]],null,null,null,null,null)),(n()(),i.eb(16777216,null,null,1,null,$)),i.ob(2,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,k)),i.ob(4,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.parent.context.$implicit.values[0]&&"-"===(null==l.parent.context.$implicit.values[0]||null==l.parent.context.$implicit.values[0].amount?null:l.parent.context.$implicit.values[0].amount.substring(0,1));n(l,2,0,t);var i=l.parent.context.$implicit.values[0]&&"-"!==(null==l.parent.context.$implicit.values[0]||null==l.parent.context.$implicit.values[0].amount?null:l.parent.context.$implicit.values[0].amount.substring(0,1));n(l,4,0,i)}),null)}function J(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,5,"div",[["class","amount"]],null,null,null,null,null)),(n()(),i.pb(1,0,null,null,4,"span",[["class","minima-numeric left"]],null,null,null,null,null)),(n()(),i.pb(2,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),i.Hb(3,null,["",""])),(n()(),i.pb(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i.Hb(5,null,["",""]))],null,(function(n,l){n(l,3,0,"+"+l.parent.context.$implicit.txpow.body.txn.tokengen.total),n(l,5,0,"-"+(null==l.parent.context.$implicit.values[0]?null:l.parent.context.$implicit.values[0].amount)+" Mini")}))}function z(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,30,"ion-item",[["class","ion-no-padding no-ripple"],["lines","none"],["routerDirection","forward"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==i.Bb(n,2).onClick()&&o),"click"===l&&(o=!1!==i.Bb(n,3).onClick(t)&&o),o}),b.ab,b.o)),i.ob(1,49152,null,0,m.G,[i.h,i.k,i.x],{lines:[0,"lines"],routerDirection:[1,"routerDirection"]},null),i.ob(2,16384,null,0,d.n,[d.m,d.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.ob(3,737280,null,0,m.Ib,[g.h,m.Fb,i.k,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),i.pb(4,0,null,0,7,"ion-avatar",[["slot","start"]],null,null,null,b.K,b.b)),i.ob(5,49152,null,0,m.f,[i.h,i.k,i.x],null,null),(n()(),i.eb(16777216,null,0,1,null,w)),i.ob(7,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,0,1,null,M)),i.ob(9,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,0,1,null,y)),i.ob(11,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.pb(12,0,null,0,13,"div",[["class","transaction-type"]],null,null,null,null,null)),(n()(),i.pb(13,0,null,null,8,"div",[["class","name"]],null,null,null,null,null)),(n()(),i.eb(16777216,null,null,1,null,C)),i.ob(15,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,O)),i.ob(17,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,P)),i.ob(19,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,_)),i.ob(21,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,I)),i.ob(23,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.eb(16777216,null,null,1,null,J)),i.ob(25,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.pb(26,0,null,0,4,"div",[["class","date"],["slot","end"]],null,null,null,null,null)),(n()(),i.pb(27,0,null,null,1,"h6",[["class","ion-no-padding ion-no-margin"]],null,null,null,null,null)),(n()(),i.Hb(28,null,[" "," "," "," "])),(n()(),i.pb(29,0,null,null,1,"p",[["class","ion-no-padding ion-no-margin ion-text-right"]],null,null,null,null,null)),(n()(),i.Hb(30,null,["",""]))],(function(n,l){n(l,1,0,"none","forward"),n(l,2,0,i.tb(1,"/view-txn/",l.context.$implicit.txpow.txpowid,"")),n(l,3,0,"forward");var t="-"===(null==l.context.$implicit.values[0]?null:l.context.$implicit.values[0].amount.substring(0,1))&&!l.context.$implicit.txpow.body.txn.tokengen;n(l,7,0,t);var o="-"!==(null==l.context.$implicit.values[0]?null:l.context.$implicit.values[0].amount.substring(0,1))&&!l.context.$implicit.txpow.body.txn.tokengen;n(l,9,0,o),n(l,11,0,l.context.$implicit.txpow.body.txn.tokengen),n(l,15,0,!(l.context.$implicit.txpow.body.txn.tokengen||null!=l.context.$implicit.values[0]&&null!=l.context.$implicit.values[0].name&&l.context.$implicit.values[0].name.name)),n(l,17,0,!l.context.$implicit.txpow.body.txn.tokengen&&(null==l.context.$implicit.values[0]||null==l.context.$implicit.values[0].name?null:l.context.$implicit.values[0].name.name)),n(l,19,0,l.context.$implicit.txpow.body.txn.tokengen),n(l,21,0,!l.context.$implicit.txpow.body.txn.tokengen&&!l.context.$implicit.values[0]),n(l,23,0,!l.context.$implicit.txpow.body.txn.tokengen),n(l,25,0,l.context.$implicit.txpow.body.txn.tokengen)}),(function(n,l){n(l,28,0,l.context.$implicit.day,l.context.$implicit.month,l.context.$implicit.year),n(l,30,0,l.context.$implicit.time)}))}function j(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,8,"ion-grid",[],null,null,null,b.T,b.k)),i.ob(1,49152,null,0,m.z,[i.h,i.k,i.x],null,null),(n()(),i.pb(2,0,null,0,6,"ion-row",[],null,null,null,b.ib,b.z)),i.ob(3,49152,null,0,m.fb,[i.h,i.k,i.x],null,null),(n()(),i.pb(4,0,null,0,4,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,b.Q,b.h)),i.ob(5,49152,null,0,m.s,[i.h,i.k,i.x],{size:[0,"size"]},null),(n()(),i.pb(6,0,null,0,2,"ion-label",[],null,null,null,b.bb,b.s)),i.ob(7,49152,null,0,m.M,[i.h,i.k,i.x],null,null),(n()(),i.Hb(8,0,["",""]))],(function(n,l){n(l,5,0,"12")}),(function(n,l){n(l,8,0,l.component.prompt)}))}function H(n){return i.Jb(0,[i.Fb(402653184,1,{historyList:0}),(n()(),i.pb(1,0,null,null,24,"ion-app",[],null,null,null,b.J,b.a)),i.ob(2,49152,null,0,m.e,[i.h,i.k,i.x],null,null),(n()(),i.pb(3,0,null,0,12,"ion-header",[["class","page-header ion-no-border"]],null,null,null,b.U,b.l)),i.ob(4,49152,null,0,m.A,[i.h,i.k,i.x],null,null),(n()(),i.pb(5,0,null,0,10,"ion-toolbar",[],null,null,null,b.rb,b.I)),i.ob(6,49152,null,0,m.yb,[i.h,i.k,i.x],null,null),(n()(),i.pb(7,0,null,0,8,"ion-title",[["class","large-text"]],null,null,null,b.pb,b.G)),i.ob(8,49152,null,0,m.wb,[i.h,i.k,i.x],null,null),(n()(),i.pb(9,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,b.ab,b.o)),i.ob(10,49152,null,0,m.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.pb(11,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.openMenu()&&i),i}),b.V,b.m)),i.ob(12,49152,null,0,m.B,[i.h,i.k,i.x],{src:[0,"src"]},null),(n()(),i.Hb(-1,0,[" History "])),(n()(),i.eb(16777216,null,0,1,null,v)),i.ob(15,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.pb(16,0,null,0,7,"ion-content",[],null,null,null,b.R,b.i)),i.ob(17,49152,null,0,m.t,[i.h,i.k,i.x],null,null),(n()(),i.pb(18,0,null,0,3,"ion-list",[["class","ion-no-padding"],["lines","none"]],null,null,null,b.db,b.t)),i.ob(19,49152,[[1,4],["historyList",4]],0,m.N,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.eb(16777216,null,0,1,null,z)),i.ob(21,278528,null,0,g.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(n()(),i.eb(16777216,null,0,1,null,j)),i.ob(23,16384,null,0,g.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.pb(24,0,null,0,1,"app-footer",[],null,null,null,x.b,x.a)),i.ob(25,114688,null,0,h.a,[u.a,e.a],null,null)],(function(n,l){var t=l.component;n(l,10,0,"none"),n(l,12,0,"assets/menuIcon.svg"),n(l,15,0,t.$history.length>0),n(l,19,0,"none"),n(l,21,0,t.$history),n(l,23,0,0==t.$history.length),n(l,25,0)}),null)}function D(n){return i.Jb(0,[(n()(),i.pb(0,0,null,null,1,"app-history",[],null,null,null,H,f)),i.ob(1,114688,null,0,c,[m.Db,d.q,m.Eb,m.Hb,m.d,e.a,u.a],null,null)],(function(n,l){n(l,1,0)}),null)}var L=i.lb("app-history",c,D,{},{},[]),S=t("s7LF"),V=t("IA6j");t.d(l,"HistoryPageModuleNgFactory",(function(){return F}));var F=i.mb(s,[],(function(n){return i.yb([i.zb(512,i.j,i.X,[[8,[p.a,L]],[3,i.j],i.v]),i.zb(4608,g.l,g.k,[i.s,[2,g.u]]),i.zb(4608,S.p,S.p,[]),i.zb(4608,m.b,m.b,[i.x,i.g]),i.zb(4608,m.Eb,m.Eb,[m.b,i.j,i.p]),i.zb(4608,m.Hb,m.Hb,[m.b,i.j,i.p]),i.zb(1073742336,g.c,g.c,[]),i.zb(1073742336,S.o,S.o,[]),i.zb(1073742336,S.e,S.e,[]),i.zb(1073742336,m.Ab,m.Ab,[]),i.zb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),i.zb(1073742336,V.a,V.a,[]),i.zb(1073742336,s,s,[]),i.zb(1024,d.k,(function(){return[[{path:"",component:c,children:[{path:"view-txn",loadChildren:r}]}]]}),[])])}))}}]);