function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"Ix+L":function(n,e,t){"use strict";t.r(e);var l=t("8Y7J"),i=t("mrSG"),o=t("TOdT"),r=t("J9yG"),a=t("a7y9"),u=t("iGhG"),s=t("Kmpd"),c=function(){function n(e,t,l,i,o,r,a,u){_classCallCheck(this,n),this.menu=e,this.loadingController=t,this.navCtrl=l,this.popoverController=i,this.userTerminal=o,this.myTools=r,this.api=a,this.renderer=u,this.host="",this.lastLine=""}return _createClass(n,[{key:"keyEvent",value:function(n){"ArrowDown"!=n.key&&"ArrowLeft"!=n.key&&"ArrowRight"!=n.key&&"ArrowUp"!=n.key||n.preventDefault()}},{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.initTerminal()}},{key:"ionViewWillLeave",value:function(){this.$fontSubscription.unsubscribe(),window.removeEventListener("keydown",(function(n){[37,38,39,40].indexOf(n.keyCode)>-1&&n.preventDefault()}),!0)}},{key:"openMenu",value:function(){this.menu.open()}},{key:"initTerminal",value:function(){var n=this,e=parseInt(localStorage.getItem("userdefaultfontsize"),10);this.fontSize=localStorage.getItem("userdefaultfontsize")?e:16,this.updateFontSizeSubject(this.fontSize),this.$fontSubscription=this.userTerminal.fontSizeEmitter.subscribe((function(e){n.fontSize=e.size}))}},{key:"updateFontSizeSubject",value:function(n){this.userTerminal.fontSizeEmitter.next({size:n}),localStorage.setItem("userdefaultfontsize",JSON.stringify(n))}},{key:"ngAfterViewInit",value:function(){var n=this;this.terminal.nativeElement.value+="**********************************************\n",this.terminal.nativeElement.value+="*  __  __  ____  _  _  ____  __  __    __    *\n",this.terminal.nativeElement.value+="* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n",this.terminal.nativeElement.value+="*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n",this.terminal.nativeElement.value+="* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n",this.terminal.nativeElement.value+="*                                            *\n",this.terminal.nativeElement.value+="**********************************************\n",this.terminal.nativeElement.value+="Welcome to Minima. For assistance type help. Then press enter.\n",this.globalInstance=this.renderer.listen(this.terminal.nativeElement,"keydown",(function(e){if([13].indexOf(e.keyCode)>-1){var t=n.terminal.nativeElement.value;n.lastLine=t.substr(t.lastIndexOf("\n")+1),n.lastLine.length>1&&n.request(n.lastLine)}}))}},{key:"numToPixels",value:function(n){return n+"px"}},{key:"scrollToBottomOnInit",value:function(){try{this.ionContent.scrollToBottom(300)}catch(n){throw new Error("ionContent not found.")}}},{key:"request",value:function(n){var e=this;return new Promise("printchain"===n?function(n){s.Minima.cmd("printchain",(function(t){var l=t.replace("/(\r\n|\n|\r)/gm","\\n");e.terminal.nativeElement.value+=l,e.terminal.nativeElement.scrollTop=e.terminal.nativeElement.scrollHeight,n(t)}))}:"tutorial"===n||"Tutorial"===n?function(n,t){s.Minima.cmd("tutorial",(function(t){var l=JSON.stringify(t,void 0,2).replace("\\\\n","\n");e.terminal.nativeElement.value+=l,e.terminal.nativeElement.scrollTop=e.terminal.nativeElement.scrollHeight,n(t)}))}:function(t,l){s.Minima.cmd(n,(function(n){e.terminal.nativeElement.value+=JSON.stringify(n,void 0,2)+"\n",e.terminal.nativeElement.scrollTop=e.terminal.nativeElement.scrollHeight,t(n)}))})}},{key:"presentPopover",value:function(n){return i.a(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:a.a,cssClass:"terminal-pop",event:n,translucent:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"giveMe50",value:function(){var n=this;this.api.giveMe50().then((function(e){n.myTools.presentAlert("Gimme50",!0===e.status?"Successful":e.message,"Status")}))}}]),n}(),m=function n(){_classCallCheck(this,n)},b=t("pMnS"),p=t("MKJQ"),f=t("sZkV"),v=t("SVse"),h=l.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.terminal[_ngcontent-%COMP%]{padding:0;margin-top:7px;width:100%;background-color:var(--ion-background-color,#fff);color:var(--ion-color-color);font-family:monospace;height:100vh;border:none!important}.resize-tool-btn[_ngcontent-%COMP%]{position:absolute;right:0;font-family:manrope-bold;font-size:1rem;cursor:pointer;color:var(--ion-color-color);text-transform:none}.no-scroll[_ngcontent-%COMP%]{--overflow:hidden}ion-content[_ngcontent-%COMP%]{--overflow:hidden;height:100%!important;max-height:100%!important}.btn.active[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:hover, label[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:active, textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:hover{outline:0!important;-webkit-appearance:none;box-shadow:none!important}@media only screen and (min-width:990px){.terminal[_ngcontent-%COMP%]{font-size:16px;border:0}}ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-m-background)}"]],data:{}});function _(n){return l.Jb(0,[l.Fb(671088640,1,{ionContent:0}),l.Fb(671088640,2,{terminal:0}),(n()(),l.pb(2,0,null,null,29,"ion-app",[],null,null,null,p.K,p.a)),l.ob(3,49152,null,0,f.e,[l.h,l.k,l.x],null,null),(n()(),l.pb(4,0,null,0,16,"ion-header",[["class","page-header ion-no-border"]],null,null,null,p.W,p.m)),l.ob(5,49152,null,0,f.A,[l.h,l.k,l.x],null,null),(n()(),l.pb(6,0,null,0,14,"ion-toolbar",[],null,null,null,p.tb,p.J)),l.ob(7,49152,null,0,f.yb,[l.h,l.k,l.x],null,null),(n()(),l.pb(8,0,null,0,12,"ion-title",[],null,null,null,p.rb,p.H)),l.ob(9,49152,null,0,f.wb,[l.h,l.k,l.x],null,null),(n()(),l.pb(10,0,null,0,7,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,p.cb,p.p)),l.ob(11,49152,null,0,f.G,[l.h,l.k,l.x],{lines:[0,"lines"]},null),(n()(),l.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.openMenu()&&l),l}),p.X,p.n)),l.ob(13,49152,null,0,f.B,[l.h,l.k,l.x],{src:[0,"src"]},null),(n()(),l.Hb(-1,0,[" Terminal "])),(n()(),l.pb(15,0,null,0,2,"ion-label",[["class","resize-tool-btn"],["fill","clear"],["lines","none"],["slot","end"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.presentPopover(t)&&l),l}),p.db,p.t)),l.ob(16,49152,null,0,f.M,[l.h,l.k,l.x],null,null),(n()(),l.Hb(-1,0,["aA"])),(n()(),l.pb(18,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,p.cb,p.p)),l.ob(19,49152,null,0,f.G,[l.h,l.k,l.x],{lines:[0,"lines"]},null),(n()(),l.Hb(-1,0,[" Minima terminal "])),(n()(),l.pb(21,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,p.T,p.j)),l.ob(22,49152,[[1,4],["ionContent",4]],0,f.t,[l.h,l.k,l.x],null,null),(n()(),l.pb(23,0,[[2,0],["terminal",1]],0,3,"textarea",[["autocapitalize","false"],["autocorrect","off"],["background","transparent"],["class","terminal"],["spellcheck","false"]],null,null,null,null,null)),l.Eb(512,null,v.r,v.s,[l.k,l.r,l.B]),l.ob(25,278528,null,0,v.m,[v.r],{ngStyle:[0,"ngStyle"]},null),l.Db(26,{"font-size":0}),(n()(),l.pb(27,0,null,0,4,"ion-footer",[["class","border-t"]],null,null,null,p.U,p.k)),l.ob(28,49152,null,0,f.y,[l.h,l.k,l.x],null,null),(n()(),l.pb(29,0,null,0,2,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.giveMe50()&&l),l}),p.M,p.c)),l.ob(30,49152,null,0,f.j,[l.h,l.k,l.x],{fill:[0,"fill"]},null),(n()(),l.Hb(-1,0,[" Gimme 50 "]))],(function(n,e){var t=e.component;n(e,11,0,"none"),n(e,13,0,"assets/menuIcon.svg"),n(e,19,0,"none");var l=n(e,26,0,t.fontSize+"px");n(e,25,0,l),n(e,30,0,"none")}),null)}var d=l.lb("app-mini-term",c,(function(n){return l.Jb(0,[(n()(),l.pb(0,0,null,null,1,"app-mini-term",[],null,[["window","keydown"]],(function(n,e,t){var i=!0;return"window:keydown"===e&&(i=!1!==l.Bb(n,1).keyEvent(t)&&i),i}),_,h)),l.ob(1,4308992,null,0,c,[f.Db,f.Cb,f.Fb,f.Hb,u.a,o.a,r.a,l.B],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),g=t("s7LF"),k=t("iInd");t.d(e,"MiniTermPageModuleNgFactory",(function(){return y}));var y=l.mb(m,[],(function(n){return l.yb([l.zb(512,l.j,l.X,[[8,[b.a,d]],[3,l.j],l.v]),l.zb(4608,v.l,v.k,[l.s,[2,v.u]]),l.zb(4608,g.p,g.p,[]),l.zb(4608,f.b,f.b,[l.x,l.g]),l.zb(4608,f.Eb,f.Eb,[f.b,l.j,l.p]),l.zb(4608,f.Hb,f.Hb,[f.b,l.j,l.p]),l.zb(1073742336,v.c,v.c,[]),l.zb(1073742336,g.o,g.o,[]),l.zb(1073742336,g.e,g.e,[]),l.zb(1073742336,f.Ab,f.Ab,[]),l.zb(1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),l.zb(1073742336,m,m,[]),l.zb(1024,k.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);