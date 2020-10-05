(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-term-mini-term-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-term/mini-term.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Terminal\n    </ion-title>\n      <ion-label \n      (click)=\"presentPopover($event)\" \n      fill=\"clear\"\n      lines=\"none\" \n      slot=\"end\"\n      class=\"resize-tool-btn\">aA</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #ionContent>\n  <!-- Terminal -->\n  <ion-text>\n  <textarea\n  #terminal\n  class=\"terminal\"\n  [ngStyle] = \"{'font-size': getFontSize()}\" \n  autocapitalize=\"false\"\n  spellcheck=\"false\"\n  autocorrect=\"off\"></textarea>\n\n  </ion-text>\n</ion-content>\n</ion-app>\n<!-- <div class=\"terminal\">\n  <div id=\"history\">\n    \n  </div>\n  <div class=\"line\">\n    <span id=\"path\">c:/&nbsp;>&nbsp;</span>\n    <input type=\"text\" id=\"input\">\n  </div>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.module.ts ***!
  \*****************************************************/
/*! exports provided: MiniTermPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPageModule", function() { return MiniTermPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mini_term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-term.page */ "./src/app/pages/mini-term/mini-term.page.ts");







const routes = [
    {
        path: '',
        component: _mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]
    }
];
let MiniTermPageModule = class MiniTermPageModule {
};
MiniTermPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mini_term_page__WEBPACK_IMPORTED_MODULE_6__["MiniTermPage"]]
    })
], MiniTermPageModule);



/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terminal {\n  min-height: 100%;\n  width: 100%;\n  background-color: var(--ion-background-color, #ffffff);\n  color: var(--minima-text);\n  padding: 5px;\n  font-family: monospace;\n}\n\n.resize-tool-btn {\n  font-family: \"Aeonik\";\n  font-size: 16px;\n  padding-right: 15px;\n  color: #929396;\n  text-transform: none;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\ntextarea:hover,\ninput:hover,\ntextarea:active,\ninput:active,\ntextarea:focus,\ninput:focus,\nbutton:focus,\nbutton:active,\nbutton:hover,\nlabel:focus,\n.btn:active,\n.btn.active {\n  outline: 0px !important;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n}\n\n@media only screen and (min-width: 990px) {\n  .terminal {\n    font-size: 16px;\n    border: 0px;\n  }\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktdGVybS9taW5pLXRlcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9taW5pLXRlcm0vbWluaS10ZXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNEQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTs7Ozs7Ozs7Ozs7O0VBYUksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxXQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLHNDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taW5pLXRlcm0vbWluaS10ZXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXJtaW5hbCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZik7XG4gICAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLnJlc2l6ZS10b29sLWJ0biB7XG4gICAgZm9udC1mYW1pbHk6ICdBZW9uaWsnO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjOTI5Mzk2O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubm8tc2Nyb2xsIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG50ZXh0YXJlYTpob3ZlciwgXG5pbnB1dDpob3ZlciwgXG50ZXh0YXJlYTphY3RpdmUsIFxuaW5wdXQ6YWN0aXZlLCBcbnRleHRhcmVhOmZvY3VzLCBcbmlucHV0OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuYnV0dG9uOmFjdGl2ZSxcbmJ1dHRvbjpob3ZlcixcbmxhYmVsOmZvY3VzLFxuLmJ0bjphY3RpdmUsXG4uYnRuLmFjdGl2ZVxue1xuICAgIG91dGxpbmU6MHB4ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MHB4KSB7XG4gICAgLnRlcm1pbmFsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICB9XG4gICAgIFxufVxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpO1xufSIsIi50ZXJtaW5hbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZik7XG4gIGNvbG9yOiB2YXIoLS1taW5pbWEtdGV4dCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLnJlc2l6ZS10b29sLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pa1wiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjOTI5Mzk2O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm5vLXNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbnRleHRhcmVhOmhvdmVyLFxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTphY3RpdmUsXG5pbnB1dDphY3RpdmUsXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuYnV0dG9uOmFjdGl2ZSxcbmJ1dHRvbjpob3ZlcixcbmxhYmVsOmZvY3VzLFxuLmJ0bjphY3RpdmUsXG4uYnRuLmFjdGl2ZSB7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAudGVybWluYWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IDBweDtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/mini-term/mini-term.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mini-term/mini-term.page.ts ***!
  \***************************************************/
/*! exports provided: MiniTermPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniTermPage", function() { return MiniTermPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pop-term/pop-term.component */ "./src/app/components/pop-term/pop-term.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_userterminal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/userterminal.service */ "./src/app/service/userterminal.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let MiniTermPage = class MiniTermPage {
    constructor(http, loadingController, navCtrl, renderer, popoverController, userTerminal, storage, platform) {
        this.http = http;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.popoverController = popoverController;
        this.userTerminal = userTerminal;
        this.storage = storage;
        this.platform = platform;
        this.host = '';
        this.lastLine = '';
        this.loader = null;
        // Disable up and down keys.
        window.addEventListener("keydown", function (e) {
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);
    }
    ngOnInit() {
        const mStr = parseInt(localStorage.getItem('termFontSize'), 10);
        this.size = mStr;
        // Stored subscription that watches if we activated button on PopTerm
        this.fontSubscription =
            this.userTerminal.fontSizeEmitter.subscribe(didActivate => {
                if (this.size != didActivate) {
                    if (this.size > 0 && this.size <= 50) {
                        this.size += didActivate;
                        localStorage.setItem('termFontSize', "" + this.size);
                    }
                    else {
                        this.size = 14;
                        localStorage.setItem('termFontSize', "" + this.size);
                    }
                }
            });
    }
    ionViewWillEnter() {
    }
    ionViewWillLeave() {
        localStorage.setItem('termFontSize', "" + this.size);
        this.fontSubscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.terminal.nativeElement.value += "**********************************************\n";
        this.terminal.nativeElement.value += "*  __  __  ____  _  _  ____  __  __    __    *\n";
        this.terminal.nativeElement.value += "* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n";
        this.terminal.nativeElement.value += "*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n";
        this.terminal.nativeElement.value += "* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n";
        this.terminal.nativeElement.value += "*                                            *\n";
        this.terminal.nativeElement.value += "**********************************************\n";
        this.terminal.nativeElement.value += "Welcome to Minima. For assistance type help. Then press enter.\n";
        this.globalInstance = this.renderer.listen(this.terminal.nativeElement, 'keydown', (e) => {
            if ([13].indexOf(e.keyCode) > -1) {
                // get the whole textarea text..
                var msg = this.terminal.nativeElement.value;
                // get the last line...
                this.lastLine = msg.substr(msg.lastIndexOf("\n") + 1);
                if (this.lastLine.length > 1) {
                    // get the json call
                    this.request(this.lastLine);
                }
            }
        });
    }
    //PopTerm Editing methods
    getFontSize() {
        return this.size + 'px';
    }
    //end of PopTerm Editing methods
    scrollToBottomOnInit() {
        //scrolling
        setTimeout(() => {
            this.ionContent.scrollToBottom(300);
        }, 200);
    }
    //Minima Api Service
    getHost() {
        if (localStorage.getItem('minima_host') == null) {
            localStorage.setItem('minima_host', this.host);
            return this.host;
        }
        else {
            return localStorage.getItem('minima_host');
        }
    }
    //api calls
    request(route) {
        if (route === 'printchain') {
            return new Promise((resolve, reject) => {
                Minima.cmd('printchain', (res) => {
                    const regex = res.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].newLine, "\\n"); // replace \n with <br/> has all 3 \n|\r|\r\n
                    this.terminal.nativeElement.value += regex;
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else if (route === 'tutorial' || route === 'Tutorial') {
            return new Promise((resolve, reject) => {
                Minima.cmd('tutorial', (res) => {
                    const regex = JSON.stringify(res, undefined, 2).replace("\\\\n", "\n");
                    console.log(regex);
                    this.terminal.nativeElement.value += regex;
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                Minima.cmd(route, (res) => {
                    this.terminal.nativeElement.value += JSON.stringify(res, undefined, 2) + "\n";
                    this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
                    resolve(res);
                });
            });
        }
    }
    showLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader == null) {
                this.loader = yield this.loadingController.create({
                    message: 'Loading'
                });
                this.loader.present();
            }
        });
    }
    hideLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader !== null) {
                yield this.loader.dismiss();
                this.loader = null;
            }
            else { }
        });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_pop_term_pop_term_component__WEBPACK_IMPORTED_MODULE_1__["PopTermComponent"],
                cssClass: 'terminal-pop',
                event: ev,
                translucent: false,
            });
            return yield popover.present();
        });
    }
};
MiniTermPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _service_userterminal_service__WEBPACK_IMPORTED_MODULE_6__["UserTerminal"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], MiniTermPage.prototype, "ionContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('terminal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], MiniTermPage.prototype, "terminal", void 0);
MiniTermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mini-term',
        template: __webpack_require__(/*! raw-loader!./mini-term.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-term/mini-term.page.html"),
        styles: [__webpack_require__(/*! ./mini-term.page.scss */ "./src/app/pages/mini-term/mini-term.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _service_userterminal_service__WEBPACK_IMPORTED_MODULE_6__["UserTerminal"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], MiniTermPage);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //defaultNode: "127.0.0.1:9002/",
    newLine: '/(\r\n|\n|\r)/gm'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ })

}]);
//# sourceMappingURL=pages-mini-term-mini-term-module-es2015.js.map