(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mini-status-mini-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mini-status/mini-status.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"large-text\">\n      <ion-item class=\"ion-no-padding\">\n        <ion-menu-button></ion-menu-button>\n        Status\n      </ion-item>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item class=\"breadcrumb ion-no-padding\" lines=\"none\">\n  Current status \n  <ion-icon *ngIf=\"!status?.version\" src=\"assets/statusCross.svg\"></ion-icon>\n  <ion-icon *ngIf=\"status?.version\" src=\"assets/statusTick.svg\"></ion-icon>\n  <span *ngIf=\"status?.version\">v{{ status?.version}}</span>\n\n</ion-item>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Uptime</h6>\n        <p class=\"value\">{{ status?.uptime }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Last Block</h6>\n        <p class=\"value\">{{ status?.lastblock }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Host IP</h6>\n        <p class=\"value\">{{ status?.host }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">MiniDAPP Server Port</h6>\n        <p class=\"value\">{{ status?.minidappserver }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">RAM Usage</h6>\n        <p class=\"value\">{{ status?.ram }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">IBD</h6>\n        <p class=\"value\">{{ status?.IBD }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"ion-no-padding\">\n      <ion-label>\n        <h6 class=\"title\">Tip</h6>\n        <p class=\"value\">{{ status?.tip }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.module.ts ***!
  \*********************************************************/
/*! exports provided: MiniStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStatusPageModule", function() { return MiniStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _mini_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mini-status.page */ "./src/app/pages/mini-status/mini-status.page.ts");







var routes = [
    {
        path: '',
        component: _mini_status_page__WEBPACK_IMPORTED_MODULE_6__["MiniStatusPage"]
    }
];
var MiniStatusPageModule = /** @class */ (function () {
    function MiniStatusPageModule() {
    }
    MiniStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mini_status_page__WEBPACK_IMPORTED_MODULE_6__["MiniStatusPage"]]
        })
    ], MiniStatusPageModule);
    return MiniStatusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: var(--ion-color-tertiary);\n}\n\nion-icon {\n  margin-left: 7px;\n  margin-right: 7px;\n  width: 20px;\n  height: 20px;\n}\n\nion-chip {\n  background-color: var(--ion-color-chip);\n}\n\nion-chip ion-label {\n  font-family: manrope-bold;\n}\n\nion-list ion-item {\n  margin-left: 27px;\n  margin-right: 30px;\n}\n\n.title {\n  font-family: manrope-bold;\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  white-space: normal;\n  word-wrap: normal;\n}\n\n.value {\n  font-family: manrope-regular;\n  text-align: left;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: inherit;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL21pbmktc3RhdHVzL21pbmktc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWluaS1zdGF0dXMvbWluaS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0NBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksdUNBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taW5pLXN0YXR1cy9taW5pLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbioge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuaW9uLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuaW9uLWNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jaGlwKTtcbn1cbmlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG59XG4udmFsdWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIioge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuaW9uLWljb24ge1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuaW9uLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY2hpcCk7XG59XG5cbmlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/mini-status/mini-status.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mini-status/mini-status.page.ts ***!
  \*******************************************************/
/*! exports provided: MiniStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStatusPage", function() { return MiniStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var MiniStatusPage = /** @class */ (function () {
    function MiniStatusPage(service, alertController, api) {
        this.service = service;
        this.alertController = alertController;
        this.api = api;
    }
    MiniStatusPage.prototype.ngOnInit = function () { };
    MiniStatusPage.prototype.ionViewWillEnter = function () {
        this.updateStatus();
    };
    MiniStatusPage.prototype.ionViewWillLeave = function () {
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe(); // unsubs
        }
    };
    MiniStatusPage.prototype.presentAlert = function (hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertContainer',
                            header: hdr,
                            subHeader: subtitle,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MiniStatusPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    MiniStatusPage.prototype.updateStatus = function () {
        var _this = this;
        this.statusSubscription = this.service.updatedStatus
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (responseData) {
            responseData.uptime = responseData.uptime.replace(/0 Years|0 Months|0 Weeks|0 Days|0 Hours|0 Minutes|0 Seconds|0 Milliseconds/gi, " ");
            responseData.uptime = responseData.uptime.replace(/1 Minutes/gi, "1 Minute");
            responseData.uptime = responseData.uptime.replace(/1 Seconds/gi, "1 Second");
            responseData.uptime = responseData.uptime.replace(/1 Years/gi, "1 Year");
            responseData.uptime = responseData.uptime.replace(/1 Milliseconds/gi, "1 Millisecond");
            responseData.uptime = responseData.uptime.replace(/1 Hours/gi, "1 Hour");
            return responseData;
        }))
            .subscribe(function (res) {
            if (_this.lastJSON !== JSON.stringify(res)) {
                _this.status = res;
                _this.lastJSON = JSON.stringify(res);
            }
        });
    };
    MiniStatusPage.ctorParameters = function () { return [
        { type: _service_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"] }
    ]; };
    MiniStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-mini-status',
            template: __webpack_require__(/*! raw-loader!./mini-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mini-status/mini-status.page.html"),
            styles: [__webpack_require__(/*! ./mini-status.page.scss */ "./src/app/pages/mini-status/mini-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _service_minima_api_service__WEBPACK_IMPORTED_MODULE_1__["MinimaApiService"]])
    ], MiniStatusPage);
    return MiniStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mini-status-mini-status-module-es5.js.map