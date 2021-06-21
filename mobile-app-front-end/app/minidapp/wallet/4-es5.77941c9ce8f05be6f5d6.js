function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7NHC":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("mrSG"),s=u("TOdT"),o=u("J9yG"),i=function(){function l(n,u,t,e){_classCallCheck(this,l),this.menu=n,this.myTools=u,this.alertController=t,this._minimaApiService=e}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this._minimaApiService.initStatus(),this.updateStatus()}},{key:"ionViewWillLeave",value:function(){this.statusSubscription&&this.statusSubscription.unsubscribe()}},{key:"presentAlert",value:function(l,n,u){return e.a(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({cssClass:"alertContainer",header:l,subHeader:u,message:n,buttons:["OK"]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"openMenu",value:function(){this.menu.open()}},{key:"giveMe50",value:function(){var l=this;this._minimaApiService.giveMe50().then((function(n){l.myTools.presentAlert("Gimme50",!0===n.status?"Successful":n.message,"Status")}))}},{key:"updateStatus",value:function(){var l=this;this.statusSubscription=this._minimaApiService.$status.subscribe((function(n){l.$status=n,l.$status.uptime=n.uptime.replace(/\b0 Years\b|\b0 Months\b|\b0 Weeks\b|\b0 Days\b|\b0 Hours\b|\b0 Minutes\b|\b0 Seconds\b|\b0 Milliseconds\b/gi," ")}))}}]),l}(),a=function l(){_classCallCheck(this,l)},r=u("pMnS"),b=u("MKJQ"),c=u("sZkV"),p=u("SVse"),h=u("6jz6"),f=u("LmEr"),m=t.nb({encapsulation:0,styles:[["ion-icon.status-icon[_ngcontent-%COMP%]{margin-left:7px;margin-right:7px;width:20px;height:20px}ion-chip[_ngcontent-%COMP%]{background-color:var(--ion-color-chip)}ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:manrope-bold}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:var(--ion-color-item-border);--inner-padding-end:0}.title[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:1rem;text-overflow:ellipsis;max-width:inherit;white-space:normal;word-wrap:normal;color:var(--ion-color-tertiary)}.value[_ngcontent-%COMP%]{-moz-user-select:text;user-select:text;font-family:manrope-regular;text-align:left;white-space:nowrap;text-overflow:ellipsis;max-width:inherit;overflow:hidden;color:var(--ion-color-tertiary);opacity:.7}"]],data:{}});function d(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"ion-icon",[["class","status-icon"],["src","assets/statusCross.svg"]],null,null,null,b.N,b.j)),t.ob(1,49152,null,0,c.B,[t.h,t.k,t.x],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,"assets/statusCross.svg")}),null)}function g(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"ion-icon",[["class","status-icon"],["src","assets/statusTick.svg"]],null,null,null,b.N,b.j)),t.ob(1,49152,null,0,c.B,[t.h,t.k,t.x],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,"assets/statusTick.svg")}),null)}function v(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(1,null,["v",""]))],null,(function(l,n){var u=n.component;l(n,1,0,null==u.$status?null:u.$status.version)}))}function k(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,8,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,b.S,b.l)),t.ob(1,49152,null,0,c.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.Jb(-1,0,[" Current status "])),(l()(),t.eb(16777216,null,0,1,null,d)),t.ob(4,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,g)),t.ob(6,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,v)),t.ob(8,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"none"),l(n,4,0,!(null!=u.$status&&u.$status.version)),l(n,6,0,null==u.$status?null:u.$status.version),l(n,8,0,null==u.$status?null:u.$status.version)}),null)}function x(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,6,"ion-grid",[],null,null,null,b.L,b.h)),t.ob(1,49152,null,0,c.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,4,"ion-row",[["class","ion-no-padding ion-no-margin"]],null,null,null,b.Z,b.v)),t.ob(3,49152,null,0,c.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,2,"ion-col",[["class","ion-no-padding ion-no-margin ion-text-center"],["color","tertiary"]],null,null,null,b.I,b.e)),t.ob(5,49152,null,0,c.s,[t.h,t.k,t.x],null,null),(l()(),t.Jb(-1,0,[" Node is currently offline. "]))],null,null)}function M(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,49,"ion-list",[["class","ion-no-padding"]],null,null,null,b.V,b.q)),t.ob(1,49152,null,0,c.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,7,"ion-item",[["class","ion-no-padding"]],null,null,null,b.S,b.l)),t.ob(3,49152,null,0,c.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),t.ob(5,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Uptime"])),(l()(),t.pb(8,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Jb(9,null,["",""])),(l()(),t.pb(10,0,null,0,7,"ion-item",[["class","ion-no-padding"]],null,null,null,b.S,b.l)),t.ob(11,49152,null,0,c.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(12,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),t.ob(13,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Last block"])),(l()(),t.pb(16,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Jb(17,null,["",""])),(l()(),t.pb(18,0,null,0,7,"ion-item",[["class","ion-no-padding"]],null,null,null,b.S,b.l)),t.ob(19,49152,null,0,c.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(20,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),t.ob(21,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(22,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Host IP"])),(l()(),t.pb(24,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Jb(25,null,["",""])),(l()(),t.pb(26,0,null,0,7,"ion-item",[["class","ion-no-padding"]],null,null,null,b.S,b.l)),t.ob(27,49152,null,0,c.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),t.ob(29,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(30,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["MiniDAPP server port"])),(l()(),t.pb(32,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Jb(33,null,["",""])),(l()(),t.pb(34,0,null,0,7,"ion-item",[["class","ion-no-padding"]],null,null,null,b.S,b.l)),t.ob(35,49152,null,0,c.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(36,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),t.ob(37,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(38,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["RAM usage"])),(l()(),t.pb(40,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Jb(41,null,["",""])),(l()(),t.pb(42,0,null,0,7,"ion-item",[["class","ion-no-padding"]],null,null,null,b.S,b.l)),t.ob(43,49152,null,0,c.G,[t.h,t.k,t.x],null,null),(l()(),t.pb(44,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),t.ob(45,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(46,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Tip"])),(l()(),t.pb(48,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Jb(49,null,["",""]))],null,(function(l,n){var u=n.component;l(n,9,0,null==u.$status?null:u.$status.uptime),l(n,17,0,null==u.$status?null:u.$status.lastblock),l(n,25,0,null==u.$status?null:u.$status.host),l(n,33,0,null==u.$status?null:u.$status.minidappserver),l(n,41,0,null==u.$status?null:u.$status.ram),l(n,49,0,null==u.$status?null:u.$status.tip)}))}function $(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,22,"ion-app",[],null,null,null,b.E,b.a)),t.ob(1,49152,null,0,c.e,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,12,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,b.M,b.i)),t.ob(3,49152,null,0,c.A,[t.h,t.k,t.x],{mode:[0,"mode"]},null),(l()(),t.pb(4,0,null,0,10,"ion-toolbar",[],null,null,null,b.hb,b.D)),t.ob(5,49152,null,0,c.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,8,"ion-title",[["class","large-text"]],null,null,null,b.gb,b.C)),t.ob(7,49152,null,0,c.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,b.S,b.l)),t.ob(9,49152,null,0,c.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(10,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openMenu()&&t),t}),b.N,b.j)),t.ob(11,49152,null,0,c.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.Jb(-1,0,[" Status "])),(l()(),t.eb(16777216,null,0,1,null,k)),t.ob(14,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(15,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,b.J,b.f)),t.ob(16,49152,null,0,c.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,x)),t.ob(18,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,M)),t.ob(20,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(21,0,null,0,1,"app-footer",[],null,null,null,h.b,h.a)),t.ob(22,245760,null,0,f.a,[o.a,s.a],null,null)],(function(l,n){var u=n.component;l(n,3,0,"md"),l(n,9,0,"none"),l(n,11,0,"assets/menuIcon.svg"),l(n,14,0,null==u.$status?null:u.$status.version),l(n,18,0,!(null!=u.$status&&u.$status.version)),l(n,20,0,null==u.$status?null:u.$status.version),l(n,22,0)}),null)}var J=t.lb("app-mini-status",i,(function(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-mini-status",[],null,null,null,$,m)),t.ob(1,114688,null,0,i,[c.Db,s.a,c.a,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),y=u("s7LF"),w=u("iInd"),C=u("IA6j");u.d(n,"MiniStatusPageModuleNgFactory",(function(){return S}));var S=t.mb(a,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[r.a,J]],[3,t.j],t.v]),t.zb(4608,p.l,p.k,[t.s,[2,p.u]]),t.zb(4608,y.p,y.p,[]),t.zb(4608,c.b,c.b,[t.x,t.g]),t.zb(4608,c.Eb,c.Eb,[c.b,t.j,t.p]),t.zb(4608,c.Ib,c.Ib,[c.b,t.j,t.p]),t.zb(1073742336,p.c,p.c,[]),t.zb(1073742336,y.o,y.o,[]),t.zb(1073742336,y.e,y.e,[]),t.zb(1073742336,c.Ab,c.Ab,[]),t.zb(1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),t.zb(1073742336,C.a,C.a,[]),t.zb(1073742336,a,a,[]),t.zb(1024,w.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);