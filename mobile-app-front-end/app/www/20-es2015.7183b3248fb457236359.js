(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"Ix+L":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),i=e("mrSG"),o=e("TOdT"),r=e("J9yG"),a=e("a7y9"),s=e("iGhG"),u=e("Kmpd");class c{constructor(n,t,e,l,i,o,r,a){this.menu=n,this.loadingController=t,this.navCtrl=e,this.popoverController=l,this.userTerminal=i,this.myTools=o,this.api=r,this.renderer=a,this.host="",this.lastLine=""}keyEvent(n){"ArrowDown"!=n.key&&"ArrowLeft"!=n.key&&"ArrowRight"!=n.key&&"ArrowUp"!=n.key||n.preventDefault()}ngOnInit(){}ionViewWillEnter(){this.initTerminal()}ionViewWillLeave(){this.$fontSubscription.unsubscribe(),this.updateFontSizeSubject(this.fontSize),window.removeEventListener("keydown",(function(n){[37,38,39,40].indexOf(n.keyCode)>-1&&n.preventDefault()}),!0)}openMenu(){this.menu.open()}initTerminal(){const n=parseInt(localStorage.getItem("userdefaultfontsize"),10);this.fontSize=localStorage.getItem("userdefaultfontsize")?n:14,this.updateFontSizeSubject(this.fontSize),this.$fontSubscription=this.userTerminal.fontSizeEmitter.subscribe(n=>{this.fontSize=n.size})}updateFontSizeSubject(n){this.userTerminal.fontSizeEmitter.next({size:n}),localStorage.setItem("userdefaultfontsize",JSON.stringify(n))}ngAfterViewInit(){this.terminal.nativeElement.value+="**********************************************\n",this.terminal.nativeElement.value+="*  __  __  ____  _  _  ____  __  __    __    *\n",this.terminal.nativeElement.value+="* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n",this.terminal.nativeElement.value+="*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n",this.terminal.nativeElement.value+="* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n",this.terminal.nativeElement.value+="*                                            *\n",this.terminal.nativeElement.value+="**********************************************\n",this.terminal.nativeElement.value+="Welcome to Minima. For assistance type help. Then press enter.\n",this.globalInstance=this.renderer.listen(this.terminal.nativeElement,"keydown",n=>{if([13].indexOf(n.keyCode)>-1){const n=this.terminal.nativeElement.value;this.lastLine=n.substr(n.lastIndexOf("\n")+1),this.lastLine.length>1&&this.request(this.lastLine)}})}scrollToBottomOnInit(){try{this.ionContent.scrollToBottom(300)}catch(n){throw new Error("ionContent not found.")}}request(n){if("printchain"!==n)return new Promise("tutorial"===n||"Tutorial"===n?(n,t)=>{u.Minima.cmd("tutorial",t=>{const e=JSON.stringify(t,void 0,2).replace("\\\\n","\n");this.terminal.nativeElement.value+=e,this.terminal.nativeElement.scrollTop=this.terminal.nativeElement.scrollHeight,n(t)})}:(t,e)=>{u.Minima.cmd(n,n=>{this.terminal.nativeElement.value+=JSON.stringify(n,void 0,2)+"\n",this.terminal.nativeElement.scrollTop=this.terminal.nativeElement.scrollHeight,t(n)})})}presentPopover(n){return i.a(this,void 0,void 0,(function*(){const t=yield this.popoverController.create({component:a.a,cssClass:"terminal-pop",event:n,translucent:!1,showBackdrop:!1});return yield t.present()}))}giveMe50(){this.api.giveMe50().then(n=>{this.myTools.presentAlert("Gimme50",!0===n.status?"Successful":n.message,"Status")})}}class b{}var m=e("pMnS"),p=e("MKJQ"),h=e("sZkV"),v=e("SVse"),d=e("6jz6"),_=e("LmEr"),f=l.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.terminal[_ngcontent-%COMP%]{padding:0;margin-top:7px;width:100%;background-color:var(--ion-background-color,#fff);color:var(--ion-color-tertiary);font-family:monospace;height:100vh;border:none!important}.resize-tool-btn[_ngcontent-%COMP%]{position:absolute;right:0;font-family:manrope-bold;font-size:1rem;cursor:pointer;color:var(--ion-color-tertiary);text-transform:none}.no-scroll[_ngcontent-%COMP%]{--overflow:hidden}ion-content[_ngcontent-%COMP%]{--overflow:hidden;height:100%!important;max-height:100%!important}.btn.active[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:hover, label[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:active, textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:hover{outline:0!important;-webkit-appearance:none;box-shadow:none!important}@media only screen and (min-width:990px){.terminal[_ngcontent-%COMP%]{font-size:16px;border:0}}ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-m-background)}"]],data:{}});function g(n){return l.Kb(0,[l.Gb(671088640,1,{ionContent:0}),l.Gb(671088640,2,{terminal:0}),(n()(),l.pb(2,0,null,null,26,"ion-app",[],null,null,null,p.E,p.a)),l.ob(3,49152,null,0,h.e,[l.h,l.k,l.x],null,null),(n()(),l.pb(4,0,null,0,16,"ion-header",[["class","page-header ion-no-border"]],null,null,null,p.M,p.i)),l.ob(5,49152,null,0,h.A,[l.h,l.k,l.x],null,null),(n()(),l.pb(6,0,null,0,14,"ion-toolbar",[],null,null,null,p.hb,p.D)),l.ob(7,49152,null,0,h.yb,[l.h,l.k,l.x],null,null),(n()(),l.pb(8,0,null,0,12,"ion-title",[],null,null,null,p.gb,p.C)),l.ob(9,49152,null,0,h.wb,[l.h,l.k,l.x],null,null),(n()(),l.pb(10,0,null,0,7,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,p.S,p.l)),l.ob(11,49152,null,0,h.G,[l.h,l.k,l.x],{lines:[0,"lines"]},null),(n()(),l.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.openMenu()&&l),l}),p.N,p.j)),l.ob(13,49152,null,0,h.B,[l.h,l.k,l.x],{src:[0,"src"]},null),(n()(),l.Ib(-1,0,[" Terminal "])),(n()(),l.pb(15,0,null,0,2,"ion-label",[["class","resize-tool-btn"],["fill","clear"],["lines","none"],["slot","end"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.presentPopover(e)&&l),l}),p.T,p.p)),l.ob(16,49152,null,0,h.M,[l.h,l.k,l.x],null,null),(n()(),l.Ib(-1,0,["aA"])),(n()(),l.pb(18,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,p.S,p.l)),l.ob(19,49152,null,0,h.G,[l.h,l.k,l.x],{lines:[0,"lines"]},null),(n()(),l.Ib(-1,0,[" Minima terminal "])),(n()(),l.pb(21,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,p.J,p.f)),l.ob(22,49152,[[1,4],["ionContent",4]],0,h.t,[l.h,l.k,l.x],null,null),(n()(),l.pb(23,0,[[2,0],["terminal",1]],0,3,"textarea",[["autocapitalize","false"],["autocorrect","off"],["background","transparent"],["class","terminal"],["spellcheck","false"]],null,null,null,null,null)),l.Fb(512,null,v.r,v.s,[l.k,l.r,l.B]),l.ob(25,278528,null,0,v.m,[v.r],{ngStyle:[0,"ngStyle"]},null),l.Eb(26,{"font-size":0}),(n()(),l.pb(27,0,null,0,1,"app-footer",[],null,null,null,d.b,d.a)),l.ob(28,114688,null,0,_.a,[r.a,o.a],null,null)],(function(n,t){var e=t.component;n(t,11,0,"none"),n(t,13,0,"assets/menuIcon.svg"),n(t,19,0,"none");var l=n(t,26,0,e.fontSize+"px");n(t,25,0,l),n(t,28,0)}),null)}function k(n){return l.Kb(0,[(n()(),l.pb(0,0,null,null,1,"app-mini-term",[],null,[["window","keydown"]],(function(n,t,e){var i=!0;return"window:keydown"===t&&(i=!1!==l.Bb(n,1).keyEvent(e)&&i),i}),g,f)),l.ob(1,4308992,null,0,c,[h.Db,h.Cb,h.Fb,h.Hb,s.a,o.a,r.a,l.B],null,null)],(function(n,t){n(t,1,0)}),null)}var w=l.lb("app-mini-term",c,k,{},{},[]),z=e("s7LF"),y=e("iInd"),M=e("IA6j");e.d(t,"MiniTermPageModuleNgFactory",(function(){return C}));var C=l.mb(b,[],(function(n){return l.yb([l.zb(512,l.j,l.X,[[8,[m.a,w]],[3,l.j],l.v]),l.zb(4608,v.l,v.k,[l.s,[2,v.u]]),l.zb(4608,z.o,z.o,[]),l.zb(4608,h.b,h.b,[l.x,l.g]),l.zb(4608,h.Eb,h.Eb,[h.b,l.j,l.p]),l.zb(4608,h.Hb,h.Hb,[h.b,l.j,l.p]),l.zb(1073742336,v.c,v.c,[]),l.zb(1073742336,z.n,z.n,[]),l.zb(1073742336,z.e,z.e,[]),l.zb(1073742336,h.Ab,h.Ab,[]),l.zb(1073742336,y.q,y.q,[[2,y.v],[2,y.m]]),l.zb(1073742336,M.a,M.a,[]),l.zb(1073742336,b,b,[]),l.zb(1024,y.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);