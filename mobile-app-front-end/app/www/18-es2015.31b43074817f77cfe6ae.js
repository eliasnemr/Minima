(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{yaoq:function(n,l,e){"use strict";e.r(l);var o=e("8Y7J"),u=e("mrSG"),t=e("TOdT"),i=e("J9yG"),a=e("s7LF");class r{constructor(n,l,e,o,u){this.menu=n,this.api=l,this.formBuilder=e,this.myTools=o,this.http=u,this.status="",this.isNft=!1,this.loading=!1,this.success=!1,this.descrEntry={isChecked:!1},this.iconEntry={isChecked:!1},this.proofEntry={isChecked:!1},this.nft={isNonFungible:!1},this.creationStatus="Create Token",this.customToken={name:"",amount:0,icon:"",proof:"",script:"",description:""},this.advancedFormInputsChecked={description:!1,icon:!1,proof:!1,nft:!1}}ionViewDidEnter(){}ngOnInit(){this.formInit()}openMenu(){this.menu.open()}createTokenAdvanced(){this.creationStatus="",this.loading=!0;const n=this.tokenCreationForm.value;try{this.create(n)}catch(l){console.log(l)}}create(n){return u.a(this,void 0,void 0,(function*(){if(this.myTools.scrollToBottom(this.pageContent),n.nft){this.submitBtn.disabled=!0;const l=yield this.api.createToken(n);l.status?(this.myTools.presentAlert("Success","Token "+this.customToken.name+" has been created.","Token Creation Status"),this.creationStatus="Token created!",this.resetForm()):(setTimeout(()=>{this.creationStatus="Create Token",this.submitBtn.disabled=!1},500),this.creationStatus="Creation failed!",this.myTools.presentAlert("Error",l.message,"Token Creation Status"))}else{this.submitBtn.disabled=!0;const l=yield this.api.createToken(n);l.status?(this.myTools.presentAlert("Success","Token "+this.customToken.name+" has been created.","Token Creation Status"),this.creationStatus="Token created!",this.resetForm()):(setTimeout(()=>{this.creationStatus="Create Token",this.submitBtn.disabled=!1},500),this.myTools.presentAlert("Error",l.message,"Token Creation Status"))}}))}formInit(){this.tokenCreationForm=this.formBuilder.group({name:["",[a.m.required,a.m.maxLength(255)]],amount:["",[a.m.required,a.m.maxLength(255),a.m.pattern("^[0-9]*$")]],description:"",script:"",icon:["",[a.m.pattern("(http(s?):)([\\/|\\.|\\w|\\s|\\-])*.(?:jpg|jpeg|png|gif|svg)$"),a.m.maxLength(255)]],proof:["",[a.m.pattern("(http(s?):)([\\/|\\.|\\w|\\s|\\-])*.(?:txt)$"),a.m.maxLength(255)]],nft:!1})}resetForm(){setTimeout(()=>{this.creationStatus="Create Token"},2e3),this.submitBtn.disabled=!1,this.tokenCreationForm.reset(),this.formInit()}get name(){return this.tokenCreationForm.get("name")}get descr(){return this.tokenCreationForm.get("description")}get icon(){return this.tokenCreationForm.get("icon")}get proof(){return this.tokenCreationForm.get("proof")}get amount(){return this.tokenCreationForm.get("amount")}get myNft(){return this.tokenCreationForm.get("nft")}}class s{}var c=e("pMnS"),b=e("MKJQ"),p=e("sZkV"),g=e("SVse"),d=e("6jz6"),m=e("LmEr"),h=e("IheW"),f=o.nb({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%]{color:#000;font-size:.875rem;background-color:var(--ion-color-inputs);border:1px solid #f0f0fa;padding-left:10px!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);font-size:1.25rem;font-family:manrope-bold;white-space:normal;margin-bottom:10px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span#optional[_ngcontent-%COMP%]{font-family:manrope-light;color:var(--ion-color-tertiary)}ion-list[_ngcontent-%COMP%]:first-child{padding-top:0}ion-checkbox[_ngcontent-%COMP%]{--border-color:var(--ion-color-tertiary);--size:1.875rem}ion-item#nft[_ngcontent-%COMP%]{display:inline;vertical-align:middle}ion-item#nft[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-top:12px}ion-item#nft[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{margin-top:7px}ion-icon.nftIcon[_ngcontent-%COMP%]{margin-right:7px;font-size:1.875rem}ion-label.nft[_ngcontent-%COMP%]{font-size:1rem!important}ion-textarea[_ngcontent-%COMP%]{padding-left:10px;font-size:.875rem;color:var(--ion-color-text);background:var(--ion-color-inputs)}ion-card-content[_ngcontent-%COMP%]{background:var(--ion-card-color)}ion-card-header[_ngcontent-%COMP%]{--color:var(--ion-text-color,#000);font-family:manrope-bold}.input[_ngcontent-%COMP%]{font-family:manrope-light}.length[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end;font-family:manrope-light;font-size:.875rem;color:var(--ion-color-tertiary)}.length[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-family:manrope-light!important;color:var(--ion-color-tertiary)!important}ion-item.createtoken-wrapper[_ngcontent-%COMP%]{display:flex;float:right;justify-content:right;align-items:flex-end}ion-button.create-token[_ngcontent-%COMP%]{height:35px;width:164px;float:right;background-color:var(--ion-color-primary);color:#fff;text-transform:none;font-family:manrope-bold}ion-button.create-token[_ngcontent-%COMP%]:hover{--background:#346EE5}span#nftOptional[_ngcontent-%COMP%]{font-size:.875rem;font-family:manrope-light;color:var(--ion-color-tertiary)}"]],data:{}});function k(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function C(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Token name required!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Maximum length of 255 characters."]))],null,null)}function B(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function v(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,7,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Token amount required!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" No decimals allowed."])),(n()(),o.pb(6,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Must be a digit and greater than 0."]))],null,null)}function x(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function I(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Invalid icon URL!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,["Maximum length of 255 characters. URL must end in .jpg, .png, .gif or .svg to be valid."]))],null,null)}function y(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.N,b.j)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function M(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.Y,b.u)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Invalid proof URL!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Ib(-1,null,[" Maximum length of 255 characters.\xa0Must include a .txt file within the URL."]))],null,null)}function T(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,2,"ion-label",[["class","length ion-no-margin"]],null,null,null,b.T,b.p)),o.ob(1,49152,null,0,p.M,[o.h,o.k,o.x],null,null),(n()(),o.Ib(2,0,[" ",""]))],null,(function(n,l){n(l,2,0,l.component.customToken.description.length+"/255")}))}function P(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,b.db,b.z)),o.ob(1,49152,null,0,p.ob,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function _(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,2,"ion-note",[],null,null,null,b.Y,b.u)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.Ib(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.status)}))}function O(n){return o.Kb(0,[o.Gb(671088640,1,{submitBtn:0}),o.Gb(671088640,2,{pageContent:0}),(n()(),o.pb(2,0,null,null,137,"ion-app",[],null,null,null,b.E,b.a)),o.ob(3,49152,null,0,p.e,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,13,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,b.M,b.i)),o.ob(5,49152,null,0,p.A,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(n()(),o.pb(6,0,null,0,11,"ion-toolbar",[],null,null,null,b.hb,b.D)),o.ob(7,49152,null,0,p.yb,[o.h,o.k,o.x],null,null),(n()(),o.pb(8,0,null,0,9,"ion-title",[],null,null,null,b.gb,b.C)),o.ob(9,49152,null,0,p.wb,[o.h,o.k,o.x],null,null),(n()(),o.pb(10,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(11,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.openMenu()&&o),o}),b.N,b.j)),o.ob(13,49152,null,0,p.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.Ib(-1,0,[" Token "])),(n()(),o.pb(15,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(16,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.Ib(-1,0,[" Create a custom token "])),(n()(),o.pb(18,0,null,0,119,"ion-content",[["class","page-content"]],null,null,null,b.J,b.f)),o.ob(19,49152,[[2,4],["pageContent",4]],0,p.t,[o.h,o.k,o.x],null,null),(n()(),o.pb(20,0,null,0,117,"form",[["id","tokenCreationForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var u=!0,t=n.component;return"submit"===l&&(u=!1!==o.Bb(n,22).onSubmit(e)&&u),"reset"===l&&(u=!1!==o.Bb(n,22).onReset()&&u),"ngSubmit"===l&&(u=!1!==t.createTokenAdvanced()&&u),u}),null,null)),o.ob(21,16384,null,0,a.q,[],null,null),o.ob(22,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Fb(2048,null,a.a,null,[a.d]),o.ob(24,16384,null,0,a.k,[[4,a.a]],null,null),(n()(),o.pb(25,0,null,null,112,"ion-list",[["lines","none"]],null,null,null,b.V,b.q)),o.ob(26,49152,null,0,p.N,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(27,0,null,0,13,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(28,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(29,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),o.ob(30,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.Ib(-1,0,["Name"])),(n()(),o.pb(32,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","name"],["name","name"],["placeholder","Enter a token name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==o.Bb(n,33)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.Bb(n,33)._handleInputEvent(e.target)&&u),u}),b.O,b.k)),o.ob(33,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(35,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),o.Fb(2048,null,a.i,null,[a.c]),o.ob(37,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(38,49152,[["nameTextArea",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,k)),o.ob(40,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,C)),o.ob(42,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(43,0,null,0,13,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(44,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(45,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),o.ob(46,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.Ib(-1,0,["Amount"])),(n()(),o.pb(48,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","amount"],["name","amount"],["placeholder","Enter token amount"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==o.Bb(n,49)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.Bb(n,49)._handleIonChange(e.target)&&u),u}),b.O,b.k)),o.ob(49,4341760,null,0,p.Gb,[o.p,o.k],null,null),o.Fb(1024,null,a.h,(function(n){return[n]}),[p.Gb]),o.ob(51,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),o.Fb(2048,null,a.i,null,[a.c]),o.ob(53,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(54,49152,[["amountRef",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),o.eb(16777216,null,0,1,null,B)),o.ob(56,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,v)),o.ob(58,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(59,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(60,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(61,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),o.ob(62,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.Ib(-1,0,[" Icon "])),(n()(),o.pb(64,0,null,0,1,"span",[["id","optional"]],null,null,null,null,null)),(n()(),o.Ib(-1,null,["(optional)"])),(n()(),o.pb(66,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","icon"],["name","icon"],["placeholder","Enter a valid icon URL"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==o.Bb(n,67)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.Bb(n,67)._handleInputEvent(e.target)&&u),u}),b.O,b.k)),o.ob(67,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(69,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),o.Fb(2048,null,a.i,null,[a.c]),o.ob(71,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(72,49152,[["iconURL",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,x)),o.ob(74,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,I)),o.ob(76,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(77,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(78,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(79,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),o.ob(80,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.Ib(-1,0,[" Proof "])),(n()(),o.pb(82,0,null,0,1,"span",[["id","optional"]],null,null,null,null,null)),(n()(),o.Ib(-1,null,["(optional)"])),(n()(),o.pb(84,0,null,0,8,"ion-input",[["class","medium-text input"],["formControlName","proof"],["name","proof"],["placeholder","Enter URL of website hosting token ID text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==o.Bb(n,85)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.Bb(n,85)._handleInputEvent(e.target)&&u),u}),b.O,b.k)),o.ob(85,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(87,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),o.Fb(2048,null,a.i,null,[a.c]),o.ob(89,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(90,49152,[["proofURL",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,y)),o.ob(92,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,M)),o.ob(94,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(95,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(96,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(97,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.T,b.p)),o.ob(98,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.Ib(-1,0,["Description "])),(n()(),o.pb(100,0,null,0,1,"span",[["id","optional"]],null,null,null,null,null)),(n()(),o.Ib(-1,null,["(optional)"])),(n()(),o.pb(102,0,null,0,8,"ion-textarea",[["class","medium-text input"],["formControlName","description"],["maxlength","255"],["name","description"],["placeholder","Enter a description"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,t=n.component;return"ionBlur"===l&&(u=!1!==o.Bb(n,105)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.Bb(n,105)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(t.customToken.description=e)&&u),u}),b.fb,b.B)),o.ob(103,540672,null,0,a.f,[],{maxlength:[0,"maxlength"]},null),o.Fb(1024,null,a.g,(function(n){return[n]}),[a.f]),o.ob(105,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Fb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(107,671744,null,0,a.c,[[3,a.a],[6,a.g],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,a.i,null,[a.c]),o.ob(109,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(110,49152,[["description",4]],0,p.ub,[o.h,o.k,o.x],{maxlength:[0,"maxlength"],name:[1,"name"],placeholder:[2,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,T)),o.ob(112,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(113,0,null,0,14,"ion-item",[["class","no-ripple ion-no-padding"],["id","nft"]],null,null,null,b.S,b.l)),o.ob(114,49152,null,0,p.G,[o.h,o.k,o.x],null,null),(n()(),o.pb(115,0,null,0,5,"ion-label",[],null,null,null,b.T,b.p)),o.ob(116,49152,null,0,p.M,[o.h,o.k,o.x],null,null),(n()(),o.pb(117,0,null,0,1,"ion-icon",[["class","nftIcon"],["src","assets/nft2.svg"]],null,null,null,b.N,b.j)),o.ob(118,49152,null,0,p.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.pb(119,0,null,0,1,"span",[["id","nftOptional"]],null,null,null,null,null)),(n()(),o.Ib(-1,null,["(optional)"])),(n()(),o.pb(121,0,null,0,6,"ion-checkbox",[["color","primary"],["formControlName","nft"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==o.Bb(n,122)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.Bb(n,122)._handleIonChange(e.target)&&u),u}),b.H,b.d)),o.ob(122,4341760,null,0,p.c,[o.p,o.k],null,null),o.Fb(1024,null,a.h,(function(n){return[n]}),[p.c]),o.ob(124,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.p]],{name:[0,"name"]},null),o.Fb(2048,null,a.i,null,[a.c]),o.ob(126,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(127,49152,null,0,p.q,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.pb(128,0,null,0,9,"ion-item",[["class","createtoken-wrapper ion-no-padding"],["lines","none"]],null,null,null,b.S,b.l)),o.ob(129,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(130,0,null,0,7,"div",[["style","display: flex; flex-direction:column; justify-content:right; align-items:flex-end"]],null,null,null,null,null)),(n()(),o.pb(131,0,null,null,4,"ion-button",[["class","create-token"],["fill","clear"],["slot","end"],["type","submit"]],null,null,null,b.G,b.c)),o.ob(132,49152,[[1,4],["submitBtn",4]],0,p.j,[o.h,o.k,o.x],{disabled:[0,"disabled"],fill:[1,"fill"],type:[2,"type"]},null),(n()(),o.Ib(133,0,[" "," "])),(n()(),o.eb(16777216,null,0,1,null,P)),o.ob(135,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,null,1,null,_)),o.ob(137,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(138,0,null,0,1,"app-footer",[],null,null,null,d.b,d.a)),o.ob(139,245760,null,0,m.a,[i.a,t.a],null,null)],(function(n,l){var e=l.component;n(l,5,0,"md"),n(l,11,0,"none"),n(l,13,0,"assets/menuIcon.svg"),n(l,16,0,"none"),n(l,22,0,e.tokenCreationForm),n(l,26,0,"none"),n(l,28,0,"none"),n(l,30,0,"stacked"),n(l,35,0,"name"),n(l,38,0,"name","Enter a token name"),n(l,40,0,e.name.invalid&&e.name.touched),n(l,42,0,e.name.invalid&&e.name.touched),n(l,44,0,"none"),n(l,46,0,"stacked"),n(l,51,0,"amount"),n(l,54,0,"amount","Enter token amount","number"),n(l,56,0,e.amount.invalid&&e.amount.touched),n(l,58,0,e.amount.invalid&&e.amount.touched),n(l,60,0,"none"),n(l,62,0,"stacked"),n(l,69,0,"icon"),n(l,72,0,"icon","Enter a valid icon URL"),n(l,74,0,e.icon.invalid&&e.icon.touched),n(l,76,0,e.icon.invalid&&e.icon.touched),n(l,78,0,"none"),n(l,80,0,"stacked"),n(l,87,0,"proof"),n(l,90,0,"proof","Enter URL of website hosting token ID text"),n(l,92,0,e.proof.invalid&&e.proof.touched),n(l,94,0,e.proof.invalid&&e.proof.touched),n(l,96,0,"none"),n(l,98,0,"stacked"),n(l,103,0,"255"),n(l,107,0,"description",e.customToken.description),n(l,110,0,"255","description","Enter a description"),n(l,112,0,e.customToken.description&&e.customToken.description.length>0),n(l,118,0,"assets/nft2.svg"),n(l,124,0,"nft"),n(l,127,0,"primary"),n(l,129,0,"none"),n(l,132,0,e.tokenCreationForm.invalid,"clear","submit"),n(l,135,0,""===e.creationStatus),n(l,137,0,e.status.length>0),n(l,139,0)}),(function(n,l){var e=l.component;n(l,20,0,o.Bb(l,24).ngClassUntouched,o.Bb(l,24).ngClassTouched,o.Bb(l,24).ngClassPristine,o.Bb(l,24).ngClassDirty,o.Bb(l,24).ngClassValid,o.Bb(l,24).ngClassInvalid,o.Bb(l,24).ngClassPending),n(l,32,0,o.Bb(l,37).ngClassUntouched,o.Bb(l,37).ngClassTouched,o.Bb(l,37).ngClassPristine,o.Bb(l,37).ngClassDirty,o.Bb(l,37).ngClassValid,o.Bb(l,37).ngClassInvalid,o.Bb(l,37).ngClassPending),n(l,48,0,o.Bb(l,53).ngClassUntouched,o.Bb(l,53).ngClassTouched,o.Bb(l,53).ngClassPristine,o.Bb(l,53).ngClassDirty,o.Bb(l,53).ngClassValid,o.Bb(l,53).ngClassInvalid,o.Bb(l,53).ngClassPending),n(l,66,0,o.Bb(l,71).ngClassUntouched,o.Bb(l,71).ngClassTouched,o.Bb(l,71).ngClassPristine,o.Bb(l,71).ngClassDirty,o.Bb(l,71).ngClassValid,o.Bb(l,71).ngClassInvalid,o.Bb(l,71).ngClassPending),n(l,84,0,o.Bb(l,89).ngClassUntouched,o.Bb(l,89).ngClassTouched,o.Bb(l,89).ngClassPristine,o.Bb(l,89).ngClassDirty,o.Bb(l,89).ngClassValid,o.Bb(l,89).ngClassInvalid,o.Bb(l,89).ngClassPending),n(l,102,0,o.Bb(l,103).maxlength?o.Bb(l,103).maxlength:null,o.Bb(l,109).ngClassUntouched,o.Bb(l,109).ngClassTouched,o.Bb(l,109).ngClassPristine,o.Bb(l,109).ngClassDirty,o.Bb(l,109).ngClassValid,o.Bb(l,109).ngClassInvalid,o.Bb(l,109).ngClassPending),n(l,121,0,o.Bb(l,126).ngClassUntouched,o.Bb(l,126).ngClassTouched,o.Bb(l,126).ngClassPristine,o.Bb(l,126).ngClassDirty,o.Bb(l,126).ngClassValid,o.Bb(l,126).ngClassInvalid,o.Bb(l,126).ngClassPending),n(l,133,0,e.creationStatus)}))}function F(n){return o.Kb(0,[(n()(),o.pb(0,0,null,null,1,"app-create-token",[],null,null,null,O,f)),o.ob(1,114688,null,0,r,[p.Db,i.a,a.b,t.a,h.c],null,null)],(function(n,l){n(l,1,0)}),null)}var j=o.lb("app-create-token",r,F,{},{},[]),S=e("iInd"),E=e("IA6j");e.d(l,"CreateTokenPageModuleNgFactory",(function(){return z}));var z=o.mb(s,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[c.a,j]],[3,o.j],o.v]),o.zb(4608,a.b,a.b,[]),o.zb(4608,a.o,a.o,[]),o.zb(4608,g.l,g.k,[o.s,[2,g.u]]),o.zb(4608,p.b,p.b,[o.x,o.g]),o.zb(4608,p.Eb,p.Eb,[p.b,o.j,o.p]),o.zb(4608,p.Hb,p.Hb,[p.b,o.j,o.p]),o.zb(1073742336,a.n,a.n,[]),o.zb(1073742336,a.l,a.l,[]),o.zb(1073742336,g.c,g.c,[]),o.zb(1073742336,a.e,a.e,[]),o.zb(1073742336,p.Ab,p.Ab,[]),o.zb(1073742336,S.q,S.q,[[2,S.v],[2,S.m]]),o.zb(1073742336,E.a,E.a,[]),o.zb(1073742336,s,s,[]),o.zb(1024,S.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);