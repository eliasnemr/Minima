(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Sfwq:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("IzEk"),i=u("TOdT"),e=u("J9yG");const s=u("wd/R");class a{constructor(l,n,u,t){this.route=l,this.minimaApiService=n,this.myTools=u,this.ngZone=t,this.transactionID="",this.hide=!1,this.message="",this.prompt="Fetching your transaction details..."}ionViewWillEnter(){this.fetchHistory().then(l=>{l?(this.transactionID=this.route.snapshot.paramMap.get("id"),this.transactionID&&this.transactionID.length>0&&(this.$subscription=this.minimaApiService.$history.pipe(Object(o.a)(1)).subscribe(l=>{if(l.history?this.myTxn=l.history.filter(l=>l.txpow.txpowid===this.transactionID):console.log("Transaction with id:"+this.transactionID+"not found.."),this.myTxn.length>0){let l="";this.myTxn[0].txpow.body.txn.state[1]&&this.myTxn[0].txpow.body.txn.state[1].data&&(l=this.myTxn[0].txpow.body.txn.state[1].data),this.myTxn.length>0?(this.relaytime=new Date(parseInt(this.myTxn[0].txpow.header.timemilli,10)).toISOString(),this.relaytime=s(this.relaytime).format("DD/MM/YYYY - hh:mm:ss a",!0),this.myTxn[0].txpow.body.txn.state&&this.myTxn[0].txpow.body.txn.state[0]&&"[01000100]"===this.myTxn[0].txpow.body.txn.state[0].data&&(this.message=l.substring(1,l.length-1)),this.type=this.myTxn[0].txpow.body.txn.tokengen?"Token Creation.":"Value Transfer."):this.prompt="Your transaction does not exist."}else console.log("No transaction found.")}),this.prompt=this.$subscription.closed&&this.myTxn.length>0?"":"No transaction details found.")):this.prompt="History failed to load.  Please try again."})}ionViewWillLeave(){this.$subscription&&this.$subscription.unsubscribe()}fetchHistory(){return this.minimaApiService.initHistory()}ngOnInit(){}copy(l,n){document.getElementById(n).innerHTML="Copied",document.getElementById(n).style.color="var(--ion-color-success",this.myTools.copy(l),setTimeout(()=>{document.getElementById(n)&&(document.getElementById(n).innerHTML="Copy",document.getElementById(n).style.color="var(--ion-color-primary")},2e3)}}class p{}var b=u("pMnS"),c=u("MKJQ"),r=u("sZkV"),d=u("SVse"),m=u("iInd"),x=u("6jz6"),h=u("LmEr"),g=t.nb({encapsulation:0,styles:[["ion-list#input-details[_ngcontent-%COMP%], ion-list#output-details[_ngcontent-%COMP%], ion-list#transaction-details[_ngcontent-%COMP%]{margin:0;padding:0}div#inputs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], div#outputs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-list#transaction-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-item-border)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-list#input-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(0), ion-list#output-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(0){margin-left:0!important}ion-list#input-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-list#output-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:16px;padding-left:0}ion-list#input-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-list#output-details[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%;border-bottom:1px solid var(--ion-color-item-border)}ion-list#transaction-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-child   ion-label[_ngcontent-%COMP%]{margin-top:3px!important}ion-list#transaction-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:0;margin-bottom:6px}ion-item#last-child[_ngcontent-%COMP%]{--border-color:#001C32!important;--border-width:0 0 1px 0}.copy[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;font-size:.8rem}ion-list-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-color:var(--ion-color-ruler);--border-width:0px 0px 1px 0px;--inner-padding-end:0;font-size:16px;font-family:manrope-bold;color:var(--ion-color-tertiary)}.title[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:1rem;text-overflow:ellipsis;max-width:inherit;white-space:normal;word-wrap:normal;color:var(--ion-color-tertiary)}.value[_ngcontent-%COMP%]{font-family:manrope-regular;text-align:left;white-space:nowrap;text-overflow:ellipsis;max-width:inherit;overflow:hidden;color:var(--ion-color-tertiary);opacity:.7}.wrap[_ngcontent-%COMP%]{white-space:normal!important;text-overflow:clip!important;overflow:auto!important}.relay[_ngcontent-%COMP%]{display:inline-block;width:100%}.chevron[_ngcontent-%COMP%]{width:15px}.completed[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-primary)}.active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.prompt[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}.center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]],data:{}});function y(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,8,"ion-grid",[],null,null,null,c.L,c.h)),t.ob(1,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,6,"ion-row",[],null,null,null,c.Z,c.v)),t.ob(3,49152,null,0,r.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,4,"ion-col",[["class","center"],["size","12"]],null,null,null,c.I,c.e)),t.ob(5,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(6,0,null,0,2,"ion-label",[["class","prompt"]],null,null,null,c.T,c.p)),t.ob(7,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(8,0,["",""]))],(function(l,n){l(n,5,0,"12")}),(function(l,n){l(n,8,0,n.component.prompt)}))}function k(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(1,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(2,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(3,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Public message"])),(l()(),t.pb(6,0,null,0,1,"p",[["class","value"],["style","white-space: normal;"]],null,null,null,null,null)),(l()(),t.Ib(7,null,[" ",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,n.component.message)}))}function f(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(1,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(2,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(3,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Token name"])),(l()(),t.pb(6,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(7,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){var u=n.component;l(n,7,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.body.txn.tokengen.token)}))}function I(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(1,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(2,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(3,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Token total"])),(l()(),t.pb(6,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(7,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){var u=n.component;l(n,7,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.body.txn.tokengen.total)}))}function M(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,35,null,null,null,null,null,null,null)),(l()(),t.pb(1,0,null,null,34,"div",[["id","inputs"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(3,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(4,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(5,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Index"])),(l()(),t.pb(8,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(9,null,["",""])),(l()(),t.pb(10,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(11,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(12,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(13,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Coin ID"])),(l()(),t.pb(16,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(17,null,["",""])),(l()(),t.pb(18,0,null,null,9,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(19,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(20,0,null,0,7,"ion-label",[],null,null,null,c.T,c.p)),t.ob(21,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(22,0,null,0,3,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Recipient address "])),(l()(),t.pb(24,0,null,null,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.copy(l.context.$implicit.mxaddress,"Input"+l.context.index)&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Copy "])),(l()(),t.pb(26,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(27,null,["",""])),(l()(),t.pb(28,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","full"]],null,null,null,c.S,c.l)),t.ob(29,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(30,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(31,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(32,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Amount"])),(l()(),t.pb(34,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(35,null,["",""]))],(function(l,n){l(n,3,0,"none"),l(n,11,0,"none"),l(n,19,0,"none"),l(n,29,0,"full")}),(function(l,n){l(n,9,0,"#"+n.context.index),l(n,17,0,n.context.$implicit.coinid),l(n,24,0,"Input"+n.context.index),l(n,27,0,n.context.$implicit.mxaddress),l(n,35,0,n.context.$implicit.amount)}))}function T(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,35,null,null,null,null,null,null,null)),(l()(),t.pb(1,0,null,null,34,"div",[["id","outputs"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(3,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(4,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(5,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Index"])),(l()(),t.pb(8,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(9,null,["",""])),(l()(),t.pb(10,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(11,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(12,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(13,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Coin ID"])),(l()(),t.pb(16,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(17,null,["",""])),(l()(),t.pb(18,0,null,null,9,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(19,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(20,0,null,0,7,"ion-label",[],null,null,null,c.T,c.p)),t.ob(21,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(22,0,null,0,3,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Outgoing address "])),(l()(),t.pb(24,0,null,null,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.copy(l.context.$implicit.mxaddress,"Output"+l.context.index)&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Copy "])),(l()(),t.pb(26,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(27,null,["",""])),(l()(),t.pb(28,0,null,null,7,"ion-item",[["class","ion-no-padding"],["lines","full"]],null,null,null,c.S,c.l)),t.ob(29,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(30,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(31,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(32,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Amount"])),(l()(),t.pb(34,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(35,null,["",""]))],(function(l,n){l(n,3,0,"none"),l(n,11,0,"none"),l(n,19,0,"none"),l(n,29,0,"full")}),(function(l,n){l(n,9,0,"#"+n.context.index),l(n,17,0,n.context.$implicit.coinid),l(n,24,0,"Output"+n.context.index),l(n,27,0,n.context.$implicit.mxaddress),l(n,35,0,n.context.$implicit.amount)}))}function w(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,77,"ion-grid",[["class","ion-no-padding"]],null,null,null,c.L,c.h)),t.ob(1,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,57,"ion-list",[["class","ion-no-padding"],["id","transaction-details"]],null,null,null,c.V,c.q)),t.ob(3,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(5,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(6,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(7,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Status"])),(l()(),t.pb(10,0,null,0,1,"p",[["class","value completed"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Completed"])),(l()(),t.pb(12,0,null,0,9,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(13,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(14,0,null,0,7,"ion-label",[],null,null,null,c.T,c.p)),t.ob(15,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,0,3,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Hash "])),(l()(),t.pb(18,0,null,null,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.copy(null==o.myTxn[0]||null==o.myTxn[0].txpow?null:o.myTxn[0].txpow.txpowid,"Hash")&&t),t}),null,null)),(l()(),t.Ib(-1,null,[" Copy "])),(l()(),t.pb(20,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(21,null,[" ",""])),(l()(),t.pb(22,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(23,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(24,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(25,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Date & time"])),(l()(),t.pb(28,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(29,null,[" ",""])),(l()(),t.eb(16777216,null,0,1,null,k)),t.ob(31,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(32,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(33,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(34,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(35,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(36,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Size"])),(l()(),t.pb(38,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(39,null,[" ",""])),(l()(),t.pb(40,0,null,0,7,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(41,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(42,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(43,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(44,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["In block"])),(l()(),t.pb(46,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(47,null,["",""])),(l()(),t.eb(16777216,null,0,1,null,f)),t.ob(49,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,I)),t.ob(51,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(52,0,null,0,7,"ion-item",[["class","ion-no-padding"],["id","last-child"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(53,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(54,0,null,0,5,"ion-label",[],null,null,null,c.T,c.p)),t.ob(55,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(56,0,null,0,1,"h6",[["class","title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Transaction type"])),(l()(),t.pb(58,0,null,0,1,"p",[["class","value"]],null,null,null,null,null)),(l()(),t.Ib(59,null,["",""])),(l()(),t.pb(60,0,null,0,8,"ion-list",[["id","input-details"]],null,null,null,c.V,c.q)),t.ob(61,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(62,0,null,0,4,"ion-list-header",[],null,null,null,c.U,c.r)),t.ob(63,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.pb(64,0,null,0,2,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(65,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.Ib(-1,0,[" Transaction inputs "])),(l()(),t.eb(16777216,null,0,1,null,M)),t.ob(68,278528,null,0,d.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(69,0,null,0,8,"ion-list",[["id","output-details"]],null,null,null,c.V,c.q)),t.ob(70,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.pb(71,0,null,0,4,"ion-list-header",[["class","ion-no-padding"]],null,null,null,c.U,c.r)),t.ob(72,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.pb(73,0,null,0,2,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(74,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.Ib(-1,0,[" Transaction outputs "])),(l()(),t.eb(16777216,null,0,1,null,T)),t.ob(77,278528,null,0,d.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"none"),l(n,13,0,"none"),l(n,23,0,"none"),l(n,31,0,u.message&&u.message.length>0),l(n,33,0,"none"),l(n,41,0,"none"),l(n,49,0,"Token Creation."===u.type),l(n,51,0,"Token Creation."===u.type),l(n,53,0,"none"),l(n,65,0,"none"),l(n,68,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.body.txn.inputs),l(n,74,0,"none"),l(n,77,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.body.txn.outputs)}),(function(l,n){var u=n.component;l(n,18,0,"Hash"),l(n,21,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.txpowid),l(n,29,0,u.relaytime),l(n,39,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.size),l(n,47,0,null==u.myTxn[0]||null==u.myTxn[0].txpow?null:u.myTxn[0].txpow.header.block),l(n,59,0,u.type)}))}function v(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,15,"ion-header",[["class","page-header ion-no-border"]],null,null,null,c.M,c.i)),t.ob(1,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,c.hb,c.D)),t.ob(3,49152,null,0,r.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,11,"ion-title",[],null,null,null,c.gb,c.C)),t.ob(5,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,6,"ion-item",[["class","no-ripple ion-no-padding"],["id","title"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(7,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(8,0,null,0,3,"ion-icon",[["class","back-btn"],["name","arrow-back"],["routerLink","/history"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Bb(l,10).onClick()&&o),"click"===n&&(o=!1!==t.Bb(l,11).onClick(u)&&o),o}),c.N,c.j)),t.ob(9,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),t.ob(10,16384,null,0,m.n,[m.m,m.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.ob(11,737280,null,0,r.Ib,[d.h,r.Fb,t.k,m.m,[2,m.n]],null,null),(l()(),t.Ib(-1,0,[" History "])),(l()(),t.pb(13,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding active"],["id","subtitle"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(14,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.Ib(-1,0,[" Transaction details "])),(l()(),t.pb(16,0,null,null,5,"ion-content",[["class","page-content"]],null,null,null,c.J,c.f)),t.ob(17,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,y)),t.ob(19,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,w)),t.ob(21,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(22,0,null,null,1,"app-footer",[],null,null,null,x.b,x.a)),t.ob(23,245760,null,0,h.a,[e.a,i.a],null,null)],(function(l,n){var u=n.component;l(n,7,0,"none"),l(n,9,0,"arrow-back"),l(n,10,0,"/history"),l(n,11,0),l(n,14,0,"none"),l(n,19,0,u.prompt.length>0),l(n,21,0,0===u.prompt.length&&u.myTxn&&(null==u.myTxn[0]?null:u.myTxn[0].txpow)),l(n,23,0)}),null)}function C(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-view-txn",[],null,null,null,v,g)),t.ob(1,114688,null,0,a,[m.a,e.a,i.a,t.x],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.lb("app-view-txn",a,C,{},{},[]),P=u("s7LF"),_=u("IA6j");u.d(n,"ViewTXNPageModuleNgFactory",(function(){return S}));var S=t.mb(p,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[b.a,O]],[3,t.j],t.v]),t.zb(4608,d.l,d.k,[t.s,[2,d.u]]),t.zb(4608,P.o,P.o,[]),t.zb(4608,r.b,r.b,[t.x,t.g]),t.zb(4608,r.Eb,r.Eb,[r.b,t.j,t.p]),t.zb(4608,r.Hb,r.Hb,[r.b,t.j,t.p]),t.zb(1073742336,d.c,d.c,[]),t.zb(1073742336,P.n,P.n,[]),t.zb(1073742336,P.e,P.e,[]),t.zb(1073742336,r.Ab,r.Ab,[]),t.zb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),t.zb(1073742336,_.a,_.a,[]),t.zb(1073742336,p,p,[]),t.zb(1024,m.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);