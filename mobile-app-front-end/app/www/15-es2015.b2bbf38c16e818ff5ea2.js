(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6gQK":function(l,n,o){"use strict";o.r(n);var i=o("8Y7J"),t=o("TOdT"),u=o("J9yG"),e=o("aaBP");class c{constructor(l,n,o){this.route=l,this._minimaApiService=n,this.myTools=o,this.expand=!1,this.urlTokenid=this.route.snapshot.paramMap.get("id")?this.route.snapshot.paramMap.get("id"):"",this.prompt=""}ngOnInit(){}ionViewWillEnter(){this.urlTokenid&&this.urlTokenid.length>0?this.$subscription=this._minimaApiService.$balance.subscribe(l=>{l?this.$token=l.filter(l=>l.tokenid===this.urlTokenid):console.log("Your tokens have not been found."),this.$token.length>0&&this.$token[0].tokenid&&"0x00"===this.$token[0].tokenid&&(this.$token[0].description="Minima's Official Token.")}):this.prompt="Token ID not found, please try again later",this.$subscription.closed?this.prompt="Token subscription failed.":(this.prompt="",0===this.$token.length&&(this.prompt="Token not found."))}ionViewWillLeave(){this.$subscription&&this.$subscription.unsubscribe()}validateProof(l){this._minimaApiService.validateTokenID(l).then(l=>{!0===l.response.valid?this.myTools.presentToast("This proof is valid.","success","bottom"):this.myTools.presentToast("Proof mismatch - not a valid proof","danger","bottom")})}createIcon(l){return this.avatar="https://www.gravatar.com/avatar/"+e.hash(l)+"?d=identicon"}copy(l,n){document.getElementById(n).innerHTML="Copied",document.getElementById(n).style.color="var(--ion-color-success",this.myTools.copy(l),setTimeout(()=>{document.getElementById(n)&&(document.getElementById(n).innerHTML="Copy",document.getElementById(n).style.color="var(--ion-color-primary")},2e3)}expandImage(){this.expand=!this.expand}}class a{}var r=o("pMnS"),p=o("MKJQ"),s=o("sZkV"),b=o("SVse"),m=o("iInd"),d=o("6jz6"),x=o("LmEr"),g=i.nb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover{background:0 0;--background-hover:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.description[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1em;font-family:manrope-semibold}.item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{background-color:transparent!important}ion-label#name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:manrope-bold;font-size:16px}ion-list[_ngcontent-%COMP%]{margin-top:7px;background:0 0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0;color:var(--ion-color-tertiary);border:1px solid var(--ion-color-item-border);--border-color:var(--ion-color-item-border);padding-right:10px;padding-left:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:27px;height:27px;display:none;color:var(--ion-color-primary);position:absolute}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]:hover   img.custom-icon[_ngcontent-%COMP%]{opacity:.5}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font-family:manrope-semibold;font-size:16px;float:left;text-overflow:ellipsis;max-width:inherit;white-space:normal;word-wrap:normal}.nft[_ngcontent-%COMP%]{color:var(--ion-color-secondary);font-family:manrope-semibold}.value[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.7;font-size:16px;font-family:manrope-regular;text-align:right;float:right;white-space:nowrap;text-overflow:ellipsis;max-width:inherit;overflow:hidden;margin:0;padding:0}.value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;opacity:.8}.description[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.7}.copy[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;font-size:.8rem}.active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-item.nft-large[_ngcontent-%COMP%]{padding:15px}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{display:none;position:absolute;font-size:32px;color:var(--ion-color-primary)}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{display:block}ion-item.nft-large[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.5}ion-button.validate-btn[_ngcontent-%COMP%]{text-transform:none;color:var(--ion-color-tertiary)}ion-label.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:normal}.center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.prompt[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);padding:5px}"]],data:{}});function f(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"div",[["class","center prompt"]],null,null,null,null,null)),(l()(),i.Ib(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.prompt)}))}function h(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.createIcon(null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.tokenid))}))}function k(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,0,"img",[["class","custom-icon-big"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,null==n.parent.parent.context.$implicit?null:n.parent.parent.context.$implicit.icon)}))}function I(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,0,"img",[["alt","minima"],["class","custom-icon-big"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function $(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,10,"ion-item",[["class","ion-no-padding ion-no-margin nft-large"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],null,null),(l()(),i.pb(2,0,null,0,8,"div",[],null,[[null,"click"]],(function(l,n,o){var i=!0;return"click"===n&&(i=!1!==l.component.expandImage()&&i),i}),null,null)),(l()(),i.pb(3,0,null,null,1,"ion-icon",[["name","resize-outline"]],null,null,null,p.N,p.j)),i.ob(4,49152,null,0,s.B,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.eb(16777216,null,null,1,null,h)),i.ob(6,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,null,1,null,k)),i.ob(8,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,null,1,null,I)),i.ob(10,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,"resize-outline"),l(n,6,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&0==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)),l(n,8,0,"0x00"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid)&&(null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon.length)>0),l(n,10,0,"0x00"===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid))}),null)}function M(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.createIcon(null==n.parent.context.$implicit?null:n.parent.context.$implicit.tokenid))}))}function v(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.icon)}))}function C(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,0,"img",[["alt","minima"],["class","custom-icon"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function P(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,5,"ion-label",[["class","description"]],null,null,null,p.T,p.p)),i.ob(3,49152,null,0,s.M,[i.h,i.k,i.x],null,null),(l()(),i.pb(4,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),i.Ib(-1,null,["Token Description"])),(l()(),i.pb(6,0,null,0,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),i.Ib(7,null,["",""]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.description)}))}function O(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Scale "])),(l()(),i.pb(5,0,null,0,2,"ion-col",[["class","minima-numeric value"]],null,null,null,p.I,p.e)),i.ob(6,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(7,0,[" "," "]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.scale)}))}function y(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),i.Ib(-1,0,[" Confirmed Amount "])),(l()(),i.pb(5,0,null,0,2,"ion-col",[["class","minima-numeric value"]],null,null,null,p.I,p.e)),i.ob(6,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(7,0,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.confirmed)}))}function _(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),i.Ib(-1,0,[" Unconfirmed Amount "])),(l()(),i.pb(5,0,null,0,2,"ion-col",[["class","minima-numeric value"]],null,null,null,p.I,p.e)),i.ob(6,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(7,0,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.unconfirmed)}))}function z(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),i.Ib(-1,0,[" Sendable Amount "])),(l()(),i.pb(5,0,null,0,2,"ion-col",[["class","value minima-numeric"]],null,null,null,p.I,p.e)),i.ob(6,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(7,0,[" "," "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"3","4")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.sendable)}))}function w(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,2,"ion-col",[["class","minima-numeric value"]],null,null,null,p.I,p.e)),i.ob(1,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(2,0,[" "," "]))],null,(function(l,n){l(n,2,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.mempool)}))}function j(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,2,"ion-col",[["class","value"]],null,null,null,p.I,p.e)),i.ob(1,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Value transfer "]))],null,null)}function T(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,2,"ion-col",[["class","value nft"]],null,null,null,p.I,p.e)),i.ob(1,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" NFT "]))],null,null)}function J(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Token Type "])),(l()(),i.eb(16777216,null,0,1,null,j)),i.ob(6,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,T)),i.ob(8,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none"),l(n,6,0,"44"!==(null==n.parent.context.$implicit?null:n.parent.context.$implicit.scale)),l(n,8,0,"44"===(null==n.parent.context.$implicit?null:n.parent.context.$implicit.scale))}),null)}function K(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Proof "])),(l()(),i.pb(5,0,null,0,2,"ion-col",[["class","value"],["style","white-space: normal;"]],null,null,null,p.I,p.e)),i.ob(6,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(7,0,[" "," "]))],(function(l,n){l(n,1,0,"none")}),(function(l,n){l(n,7,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.proof)}))}function S(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,2,"ion-button",[["class","small-text validate-btn"],["fill","outline"],["size","small"]],null,[[null,"click"]],(function(l,n,o){var i=!0;return"click"===n&&(i=!1!==l.component.validateProof(null==l.parent.parent.context.$implicit?null:l.parent.parent.context.$implicit.tokenid)&&i),i}),p.G,p.c)),i.ob(1,49152,null,0,s.j,[i.h,i.k,i.x],{fill:[0,"fill"],size:[1,"size"]},null),(l()(),i.Ib(-1,0,[" Validate "]))],(function(l,n){l(n,1,0,"outline","small")}),null)}function G(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,8,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(1,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(2,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(3,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Validate Proof "])),(l()(),i.pb(5,0,null,0,3,"ion-col",[["class","value"]],null,null,null,p.I,p.e)),i.ob(6,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.eb(16777216,null,0,1,null,S)),i.ob(8,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none"),l(n,8,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.proof)}),null)}function X(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,81,"ion-list",[["lines","none"]],null,null,null,p.V,p.q)),i.ob(1,49152,null,0,s.N,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(l()(),i.eb(16777216,null,0,1,null,$)),i.ob(3,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(4,0,null,0,15,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(5,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(6,0,null,0,9,"ion-avatar",[["slot","start"]],null,[[null,"click"]],(function(l,n,o){var i=!0;return"click"===n&&(i=!1!==l.component.expandImage()&&i),i}),p.F,p.b)),i.ob(7,49152,null,0,s.f,[i.h,i.k,i.x],null,null),(l()(),i.pb(8,0,null,0,1,"ion-icon",[["name","expand-outline"]],null,null,null,p.N,p.j)),i.ob(9,49152,null,0,s.B,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.eb(16777216,null,0,1,null,M)),i.ob(11,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,v)),i.ob(13,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,C)),i.ob(15,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(16,0,null,0,3,"ion-label",[["id","name"]],null,null,null,p.T,p.p)),i.ob(17,49152,null,0,s.M,[i.h,i.k,i.x],null,null),(l()(),i.pb(18,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),i.Ib(19,null,["",""])),(l()(),i.eb(16777216,null,0,1,null,P)),i.ob(21,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(22,0,null,0,7,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(23,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(24,0,null,0,2,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(25,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Name "])),(l()(),i.pb(27,0,null,0,2,"ion-col",[["class","value"]],null,null,null,p.I,p.e)),i.ob(28,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(29,0,[" "," "])),(l()(),i.pb(30,0,null,0,9,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(31,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(32,0,null,0,4,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(33,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Token ID "])),(l()(),i.pb(35,0,null,0,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,o){var i=!0;return"click"===n&&(i=!1!==l.component.copy(null==l.context.$implicit?null:l.context.$implicit.tokenid,"tokenid"+(null==l.context.$implicit?null:l.context.$implicit.tokenid))&&i),i}),null,null)),(l()(),i.Ib(-1,null,[" Copy "])),(l()(),i.pb(37,0,null,0,2,"ion-col",[["class","value"]],null,null,null,p.I,p.e)),i.ob(38,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(39,0,[" "," "])),(l()(),i.pb(40,0,null,0,9,"ion-item",[["class","ion-no-padding"],["color","none"]],[[8,"hidden",0]],null,null,p.S,p.l)),i.ob(41,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(42,0,null,0,4,"ion-col",[["class","title"]],null,null,null,p.I,p.e)),i.ob(43,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(-1,0,[" Coin ID "])),(l()(),i.pb(45,0,null,0,1,"a",[["class","copy"]],[[8,"id",0]],[[null,"click"]],(function(l,n,o){var i=!0;return"click"===n&&(i=!1!==l.component.copy(null==l.context.$implicit?null:l.context.$implicit.coinid,"coinid"+(null==l.context.$implicit?null:l.context.$implicit.coinid))&&i),i}),null,null)),(l()(),i.Ib(-1,null,[" Copy "])),(l()(),i.pb(47,0,null,0,2,"ion-col",[["class","minima-numeric value"]],null,null,null,p.I,p.e)),i.ob(48,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.Ib(49,0,[" "," "])),(l()(),i.pb(50,0,null,0,10,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(51,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(52,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.I,p.e)),i.ob(53,49152,null,0,s.s,[i.h,i.k,i.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),i.Ib(-1,0,[" Total Supply "])),(l()(),i.pb(55,0,null,0,5,"ion-col",[["class","minima-numeric value"]],null,null,null,p.I,p.e)),i.ob(56,49152,null,0,s.s,[i.h,i.k,i.x],null,null),(l()(),i.pb(57,0,null,0,1,"h6",[["class","ion-no-padding ion-no-margin"]],null,null,null,null,null)),(l()(),i.Ib(58,null,[" ",""])),(l()(),i.pb(59,0,null,0,1,"p",[["class","ion-no-padding ion-no-margin"]],null,null,null,null,null)),(l()(),i.Ib(60,null,[" ",""])),(l()(),i.eb(16777216,null,0,1,null,O)),i.ob(62,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,y)),i.ob(64,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,_)),i.ob(66,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,z)),i.ob(68,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(69,0,null,0,6,"ion-item",[["class","ion-no-padding"],["color","none"]],null,null,null,p.S,p.l)),i.ob(70,49152,null,0,s.G,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.pb(71,0,null,0,2,"ion-col",[["class","title"],["size","3"],["sizeXs","4"]],null,null,null,p.I,p.e)),i.ob(72,49152,null,0,s.s,[i.h,i.k,i.x],{size:[0,"size"],sizeXs:[1,"sizeXs"]},null),(l()(),i.Ib(-1,0,[" Mempool Amount "])),(l()(),i.eb(16777216,null,0,1,null,w)),i.ob(75,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,J)),i.ob(77,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,K)),i.ob(79,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,G)),i.ob(81,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var o=n.component;l(n,1,0,"none"),l(n,3,0,o.expand),l(n,5,0,"none"),l(n,9,0,"expand-outline"),l(n,11,0,"0x00"!==(null==n.context.$implicit?null:n.context.$implicit.tokenid)&&0==(null==n.context.$implicit?null:n.context.$implicit.icon.length)),l(n,13,0,"0x00"!==(null==n.context.$implicit?null:n.context.$implicit.tokenid)&&(null==n.context.$implicit?null:n.context.$implicit.icon.length)>0),l(n,15,0,"0x00"===(null==n.context.$implicit?null:n.context.$implicit.tokenid)),l(n,21,0,(null==n.context.$implicit?null:n.context.$implicit.description)&&(null==n.context.$implicit?null:n.context.$implicit.description.length)>0),l(n,23,0,"none"),l(n,31,0,"none"),l(n,41,0,"none"),l(n,51,0,"none"),l(n,53,0,"3","4"),l(n,62,0,null==n.context.$implicit?null:n.context.$implicit.scale),l(n,64,0,null==n.context.$implicit?null:n.context.$implicit.confirmed),l(n,66,0,null==n.context.$implicit?null:n.context.$implicit.unconfirmed),l(n,68,0,null==n.context.$implicit?null:n.context.$implicit.sendable),l(n,70,0,"none"),l(n,72,0,"3","4"),l(n,75,0,null==n.context.$implicit?null:n.context.$implicit.mempool),l(n,77,0,null==n.context.$implicit?null:n.context.$implicit.scale),l(n,79,0,"0x00"!==(null==n.context.$implicit?null:n.context.$implicit.tokenid)&&(null==n.context.$implicit?null:n.context.$implicit.proof)),l(n,81,0,"0x00"!==(null==n.context.$implicit?null:n.context.$implicit.tokenid)&&(null==n.context.$implicit?null:n.context.$implicit.proof))}),(function(l,n){l(n,19,0,null==n.context.$implicit?null:n.context.$implicit.token),l(n,29,0,null==n.context.$implicit?null:n.context.$implicit.token),l(n,35,0,"tokenid"+(null==n.context.$implicit?null:n.context.$implicit.tokenid)),l(n,39,0,null==n.context.$implicit?null:n.context.$implicit.tokenid),l(n,40,0,"0x00"==(null==n.context.$implicit?null:n.context.$implicit.tokenid)),l(n,45,0,"coinid"+(null==n.context.$implicit?null:n.context.$implicit.coinid)),l(n,49,0,null==n.context.$implicit?null:n.context.$implicit.coinid),l(n,58,0,null==n.context.$implicit?null:n.context.$implicit.total),l(n,60,0,null==n.context.$implicit?null:n.context.$implicit.totalamount)}))}function B(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,15,"ion-header",[["class","page-header ion-no-border"]],null,null,null,p.M,p.i)),i.ob(1,49152,null,0,s.A,[i.h,i.k,i.x],null,null),(l()(),i.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,p.hb,p.D)),i.ob(3,49152,null,0,s.yb,[i.h,i.k,i.x],null,null),(l()(),i.pb(4,0,null,0,11,"ion-title",[],null,null,null,p.gb,p.C)),i.ob(5,49152,null,0,s.wb,[i.h,i.k,i.x],null,null),(l()(),i.pb(6,0,null,0,6,"ion-item",[["class","no-ripple ion-no-padding"],["id","title"],["lines","none"]],null,null,null,p.S,p.l)),i.ob(7,49152,null,0,s.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(l()(),i.pb(8,0,null,0,3,"ion-icon",[["class","back-btn"],["name","arrow-back"],["routerLink","/balance"]],null,[[null,"click"]],(function(l,n,o){var t=!0;return"click"===n&&(t=!1!==i.Bb(l,10).onClick()&&t),"click"===n&&(t=!1!==i.Bb(l,11).onClick(o)&&t),t}),p.N,p.j)),i.ob(9,49152,null,0,s.B,[i.h,i.k,i.x],{name:[0,"name"]},null),i.ob(10,16384,null,0,m.n,[m.m,m.a,[8,null],i.B,i.k],{routerLink:[0,"routerLink"]},null),i.ob(11,737280,null,0,s.Ib,[b.h,s.Fb,i.k,m.m,[2,m.n]],null,null),(l()(),i.Ib(-1,0,[" Balance "])),(l()(),i.pb(13,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding active"],["id","subtitle"],["lines","none"]],null,null,null,p.S,p.l)),i.ob(14,49152,null,0,s.G,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(l()(),i.Ib(-1,0,[" Token details "])),(l()(),i.pb(16,0,null,null,5,"ion-content",[["class","page-content"]],null,null,null,p.J,p.f)),i.ob(17,49152,null,0,s.t,[i.h,i.k,i.x],null,null),(l()(),i.eb(16777216,null,0,1,null,f)),i.ob(19,16384,null,0,b.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.eb(16777216,null,0,1,null,X)),i.ob(21,278528,null,0,b.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.pb(22,0,null,null,1,"app-footer",[],null,null,null,d.b,d.a)),i.ob(23,245760,null,0,x.a,[u.a,t.a],null,null)],(function(l,n){var o=n.component;l(n,7,0,"none"),l(n,9,0,"arrow-back"),l(n,10,0,"/balance"),l(n,11,0),l(n,14,0,"none"),l(n,19,0,o.prompt&&o.prompt.length>0),l(n,21,0,o.$token),l(n,23,0)}),null)}function A(l){return i.Kb(0,[(l()(),i.pb(0,0,null,null,1,"app-view-tokens",[],null,null,null,B,g)),i.ob(1,114688,null,0,c,[m.a,u.a,t.a],null,null)],(function(l,n){l(n,1,0)}),null)}var E=i.lb("app-view-tokens",c,A,{},{},[]),V=o("s7LF"),L=o("IA6j");o.d(n,"ViewTokensPageModuleNgFactory",(function(){return F}));var F=i.mb(a,[],(function(l){return i.yb([i.zb(512,i.j,i.X,[[8,[r.a,E]],[3,i.j],i.v]),i.zb(4608,b.l,b.k,[i.s,[2,b.u]]),i.zb(4608,V.o,V.o,[]),i.zb(4608,s.b,s.b,[i.x,i.g]),i.zb(4608,s.Eb,s.Eb,[s.b,i.j,i.p]),i.zb(4608,s.Hb,s.Hb,[s.b,i.j,i.p]),i.zb(1073742336,b.c,b.c,[]),i.zb(1073742336,V.n,V.n,[]),i.zb(1073742336,V.e,V.e,[]),i.zb(1073742336,s.Ab,s.Ab,[]),i.zb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),i.zb(1073742336,L.a,L.a,[]),i.zb(1073742336,a,a,[]),i.zb(1024,m.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);