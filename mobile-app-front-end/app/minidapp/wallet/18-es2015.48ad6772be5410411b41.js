(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{"6jz6":function(n,l,t){"use strict";var o=t("8Y7J"),e=t("MKJQ"),i=t("sZkV"),u=t("SVse");t("LmEr"),t("J9yG"),t("TOdT"),t.d(l,"a",(function(){return c})),t.d(l,"b",(function(){return r}));var c=o.nb({encapsulation:0,styles:[[""]],data:{}});function s(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,e.mb,e.D)),o.ob(1,49152,null,0,i.ob,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function r(n){return o.Jb(0,[o.Fb(671088640,1,{gimme50Btn:0}),(n()(),o.pb(1,0,null,null,6,"ion-footer",[["class","border-t"]],null,null,null,e.S,e.j)),o.ob(2,49152,null,0,i.y,[o.h,o.k,o.x],null,null),(n()(),o.pb(3,0,null,0,4,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.gimme50()&&o),o}),e.L,e.c)),o.ob(4,49152,[[1,4],["gimme50Btn",4]],0,i.j,[o.h,o.k,o.x],{fill:[0,"fill"]},null),(n()(),o.Hb(5,0,[" "," "])),(n()(),o.eb(16777216,null,0,1,null,s)),o.ob(7,16384,null,0,u.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,"none"),n(l,7,0,""===t.status)}),(function(n,l){n(l,5,0,l.component.status)}))}},DvwX:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),e=t("mrSG"),i=t("TOdT"),u=t("BYse"),c=t("J9yG"),s=t("NCHd"),r=t("oWBL");class a{constructor(n,l,t,o,e,i,u){this.menu=n,this.modalController=l,this.popoverController=t,this.alertController=o,this.contactService=e,this.api=i,this.myTools=u,this.editMode=!1,this.contacts=[]}ngOnInit(){}ionViewWillEnter(){this.$contactSubscription=this.contactService.data.subscribe(n=>{this.contacts=n})}ionViewWillLeave(){this.$contactSubscription&&this.$contactSubscription.unsubscribe()}presentContactSettings(n){return e.a(this,void 0,void 0,(function*(){const l=yield this.popoverController.create({component:u.a,translucent:!0,event:n});yield l.present()}))}openMenu(){this.menu.open()}queryContacts(n){(n=n.toUpperCase()).length>0?this.contacts=this.contacts.filter(l=>l.NAME.toUpperCase().includes(n)||l.ADDRESS.toUpperCase().includes(n)):this.contactService.data.subscribe(n=>{this.contacts=n})}toggleDeleteMode(){this.editMode=!this.editMode}removeContact(n){this.presentAlert(n)}giveMe50(){this.api.giveMe50().then(n=>{this.myTools.presentAlert("Gimme50",!0===n.status?"Successful":n.message,"Status")})}copyAddress(n){this.myTools.copy(n)}presentAlert(n){return e.a(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Delete Contact",subHeader:"Once this contact is deleted, you can't revert!",message:"Are you sure?",buttons:[{text:"Cancel",role:"cancel"},{text:"Ok",handler:()=>{this.contactService.removeContact(n)}}]});yield l.present()}))}presentAddContactForm(){return e.a(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:s.a,cssClass:"contactsModal"});return yield n.present()}))}}class b{}var p=t("pMnS"),d=t("MKJQ"),m=t("sZkV"),h=t("SVse"),g=t("s7LF"),f=t("6jz6"),v=t("LmEr"),k=o.nb({encapsulation:0,styles:[["#deleteButton[_ngcontent-%COMP%]{font-size:1.8rem;cursor:pointer}#addButton[_ngcontent-%COMP%]{font-size:2rem;color:var(--ion-color-color);cursor:pointer}ion-list.tools[_ngcontent-%COMP%]{padding:7px 0 0}ion-list.tools[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:27px;--inner-padding-end:27px}ion-item.contactItem[_ngcontent-%COMP%]{padding:0;--padding-start:27px;--inner-padding-end:27px;--border-color:var(--ion-color-item-border)}ion-item.contactItem[_ngcontent-%COMP%]:hover{--background:var(--ion-color-item-hover)}ion-searchbar[_ngcontent-%COMP%]{padding:0;--box-shadow:0;--icon-color:#001C32;--background:var(--ion-color-inputs);--border:1px solid #f0f0fa;color:#001c32;font-size:12px}ion-item-option[_ngcontent-%COMP%]   div.block[_ngcontent-%COMP%]{width:100%;text-transform:none;display:inline-block;vertical-align:middle;text-align:center;font-size:.85rem}ion-item-option[_ngcontent-%COMP%]   div.block[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.2rem}ion-icon.trashIcon[_ngcontent-%COMP%]{cursor:pointer}ion-icon.export[_ngcontent-%COMP%]{cursor:pointer;color:var(--ion-color-color);position:absolute;right:0}ion-icon.trashIcon[_ngcontent-%COMP%]:hover{color:var(--ion-color-secondary)}.center[_ngcontent-%COMP%]{right:2%;align-items:center!important;justify-content:center!important;display:inline-flex!important;text-align:center!important}ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:manrope-bold}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-color);opacity:.7}"]],data:{}});function x(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,8,"ion-grid",[["class","ion-no-padding"]],null,null,null,d.T,d.k)),o.ob(1,49152,null,0,m.z,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,6,"ion-row",[],null,null,null,d.ib,d.z)),o.ob(3,49152,null,0,m.fb,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,d.Q,d.h)),o.ob(5,49152,null,0,m.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(n()(),o.pb(6,0,null,0,2,"ion-label",[["style","padding-left: 27px"]],null,null,null,d.bb,d.s)),o.ob(7,49152,null,0,m.M,[o.h,o.k,o.x],null,null),(n()(),o.Hb(-1,0,["No contact to display..."]))],(function(n,l){n(l,5,0,"12")}),null)}function C(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","trashIcon"],["name","trash-outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.removeContact(n.parent.context.$implicit.ADDRESS)&&o),o}),d.V,d.m)),o.ob(1,49152,null,0,m.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"trash-outline")}),null)}function M(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,25,"ion-list",[["class","ion-no-padding contacts"]],null,null,null,d.db,d.t)),o.ob(1,49152,[[1,4],["contactList",4]],0,m.N,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,23,"ion-item-sliding",[],null,null,null,d.Z,d.r)),o.ob(3,49152,null,0,m.L,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,12,"ion-item",[["class","contactItem ion-no-padding"],["lines","none"]],null,null,null,d.ab,d.o)),o.ob(5,49152,null,0,m.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(6,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,d.K,d.b)),o.ob(7,49152,null,0,m.f,[o.h,o.k,o.x],null,null),(n()(),o.pb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.pb(9,0,null,0,5,"ion-label",[],null,null,null,d.bb,d.s)),o.ob(10,49152,null,0,m.M,[o.h,o.k,o.x],null,null),(n()(),o.pb(11,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),o.Hb(12,null,["",""])),(n()(),o.pb(13,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(14,null,["",""])),(n()(),o.eb(16777216,null,0,1,null,C)),o.ob(16,16384,null,0,h.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(17,0,null,0,8,"ion-item-options",[["side","end"]],null,null,null,d.Y,d.q)),o.ob(18,49152,null,0,m.K,[o.h,o.k,o.x],{side:[0,"side"]},null),(n()(),o.pb(19,0,null,0,6,"ion-item-option",[["color","primary"],["expandable",""]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.copyAddress(n.context.$implicit.ADDRESS)&&o),o}),d.X,d.p)),o.ob(20,49152,null,0,m.J,[o.h,o.k,o.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(n()(),o.pb(21,0,null,0,4,"div",[["class","block"]],null,null,null,null,null)),(n()(),o.pb(22,0,null,null,1,"ion-icon",[["name","copy"]],null,null,null,d.V,d.m)),o.ob(23,49152,null,0,m.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.pb(24,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Copy Address "]))],(function(n,l){var t=l.component;n(l,5,0,"none"),n(l,16,0,t.editMode),n(l,18,0,"end"),n(l,20,0,"primary",""),n(l,23,0,"copy")}),(function(n,l){n(l,8,0,o.tb(1,"",l.context.$implicit.AVATAR,"")),n(l,12,0,l.context.$implicit.NAME),n(l,14,0,l.context.$implicit.ADDRESS)}))}function y(n){return o.Jb(0,[o.Fb(671088640,1,{ContactList:0}),(n()(),o.pb(1,0,null,null,15,"ion-header",[["class","page-header ion-no-border"]],null,null,null,d.U,d.l)),o.ob(2,49152,null,0,m.A,[o.h,o.k,o.x],null,null),(n()(),o.pb(3,0,null,0,13,"ion-toolbar",[],null,null,null,d.rb,d.I)),o.ob(4,49152,null,0,m.yb,[o.h,o.k,o.x],null,null),(n()(),o.pb(5,0,null,0,11,"ion-title",[],null,null,null,d.pb,d.G)),o.ob(6,49152,null,0,m.wb,[o.h,o.k,o.x],null,null),(n()(),o.pb(7,0,null,0,6,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,d.ab,d.o)),o.ob(8,49152,null,0,m.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(9,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openMenu()&&o),o}),d.V,d.m)),o.ob(10,49152,null,0,m.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.Hb(-1,0,[" Contacts "])),(n()(),o.pb(12,0,null,0,1,"ion-icon",[["class","export"],["name","ellipsis-horizontal-circle-outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.presentContactSettings(t)&&o),o}),d.V,d.m)),o.ob(13,49152,null,0,m.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.pb(14,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,d.ab,d.o)),o.ob(15,49152,null,0,m.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.Hb(-1,0,[" All your contacts "])),(n()(),o.pb(17,0,null,null,20,"ion-content",[],null,null,null,d.R,d.i)),o.ob(18,49152,null,0,m.t,[o.h,o.k,o.x],null,null),(n()(),o.pb(19,0,null,0,14,"ion-list",[["class","ion-no-padding tools"]],null,null,null,d.db,d.t)),o.ob(20,49152,null,0,m.N,[o.h,o.k,o.x],null,null),(n()(),o.pb(21,0,null,0,12,"ion-item",[["class","ion-no-padding"],["lines","none"]],null,null,null,d.ab,d.o)),o.ob(22,49152,null,0,m.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(23,0,null,0,3,"ion-searchbar",[["class","searchbarinput"],["placeholder","Search..."]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==o.Bb(n,26)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Bb(n,26)._handleInputEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.queryContacts(t.target.value)&&e),e}),d.jb,d.A)),o.Eb(5120,null,g.h,(function(n){return[n]}),[m.Kb]),o.ob(25,49152,null,0,m.gb,[o.h,o.k,o.x],{placeholder:[0,"placeholder"]},null),o.ob(26,4341760,null,0,m.Kb,[o.p,o.k],null,null),(n()(),o.pb(27,0,null,0,1,"ion-icon",[["id","addButton"],["name","add"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.presentAddContactForm()&&o),o}),d.V,d.m)),o.ob(28,49152,null,0,m.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.pb(29,0,null,0,4,"ion-icon",[["id","deleteButton"],["name","trash-outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.toggleDeleteMode()&&o),o}),d.V,d.m)),o.Eb(512,null,h.r,h.s,[o.k,o.r,o.B]),o.ob(31,278528,null,0,h.m,[h.r],{ngStyle:[0,"ngStyle"]},null),o.Db(32,{color:0}),o.ob(33,49152,null,0,m.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.eb(16777216,null,0,1,null,x)),o.ob(35,16384,null,0,h.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.eb(16777216,null,0,1,null,M)),o.ob(37,278528,null,0,h.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(n()(),o.pb(38,0,null,null,1,"app-footer",[],null,null,null,f.b,f.a)),o.ob(39,114688,null,0,v.a,[c.a,i.a],null,null)],(function(n,l){var t=l.component;n(l,8,0,"none"),n(l,10,0,"assets/menuIcon.svg"),n(l,13,0,"ellipsis-horizontal-circle-outline"),n(l,15,0,"none"),n(l,22,0,"none"),n(l,25,0,"Search..."),n(l,28,0,"add");var o=n(l,32,0,t.editMode?"#EE5C5C":"var(--ion-color-tertiary)");n(l,31,0,o),n(l,33,0,"trash-outline"),n(l,35,0,t.contacts&&0===t.contacts.length),n(l,37,0,t.contacts),n(l,39,0)}),null)}function S(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-contacts",[],null,null,null,y,k)),o.ob(1,114688,null,0,a,[m.Db,m.Eb,m.Hb,m.a,r.a,c.a,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var O=o.lb("app-contacts",a,S,{},{},[]),A=t("iInd"),z=t("IA6j");t.d(l,"ContactsPageModuleNgFactory",(function(){return B}));var B=o.mb(b,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[p.a,O]],[3,o.j],o.v]),o.zb(4608,h.l,h.k,[o.s,[2,h.u]]),o.zb(4608,g.p,g.p,[]),o.zb(4608,m.b,m.b,[o.x,o.g]),o.zb(4608,m.Eb,m.Eb,[m.b,o.j,o.p]),o.zb(4608,m.Hb,m.Hb,[m.b,o.j,o.p]),o.zb(1073742336,h.c,h.c,[]),o.zb(1073742336,g.o,g.o,[]),o.zb(1073742336,g.e,g.e,[]),o.zb(1073742336,m.Ab,m.Ab,[]),o.zb(1073742336,A.q,A.q,[[2,A.v],[2,A.m]]),o.zb(1073742336,z.a,z.a,[]),o.zb(1073742336,b,b,[]),o.zb(1024,A.k,(function(){return[[{path:"",component:a}]]}),[])])}))},IA6j:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));class o{}},LmEr:function(n,l,t){"use strict";t.d(l,"a",(function(){return o})),t("TOdT"),t("J9yG");class o{constructor(n,l){this.minimaApiService=n,this.tools=l,this.status="Gimme 50"}ngOnInit(){}gimme50(){this.status="",this.gimme50Btn.disabled=!0,this.minimaApiService.giveMe50().then(n=>{n.status?(this.tools.presentAlert("Gimme50","Successful","Status"),this.status="Gimme 50",this.gimme50Btn.disabled=!1):(this.tools.presentAlert("Gimme50",n.message,"Status"),this.status="Unavailable",setTimeout(()=>{this.gimme50Btn.disabled=!1,this.status="Gimme 50"},4e3))})}}}}]);