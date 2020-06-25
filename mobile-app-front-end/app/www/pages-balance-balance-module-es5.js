(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <ion-card color=\"white\">\n      <ion-card-header color=\"white\">\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-grid style=\"width: 100%;\" *ngFor=\"let token of tokenArr;\">\n    <ion-row>    \n      <ion-item-sliding>\n      <ion-item-options side=\"start\">\n      <ion-item-option class=\"receive-slide\" routerLink=\"/my-address\">Receive</ion-item-option>\n      <ion-item-option class=\"send-slide\" (click)=\"sendTokenOver(token.tokenid)\">Send</ion-item-option>\n      </ion-item-options>\n\n  <!-- TOKENS ONLY -->\n  <ion-item lines=\"full\" \n            (click)=\"presentTokenDescr(token.tokenid, token.token, token.description,\n                                      token.icon, token.proof, token.total, token.script,\n                                      token.coinid, token.totalamount, token.scale, token.confirmed,\n                                      token.unconfirmed, token.mempool, token.sendable)\">\n  <ion-col size=\"3\" style=\"padding: 12px;\"slot=\"start\">\n\n    <img *ngIf=\"token.icon\" alt=\"Avatar\" class=\"balance-token\" src=\"{{ token.icon }}\">\n    <img *ngIf=\"!token.icon\" alt=\"Avatar\"class=\"balance-token\" src=\"assets/icon/icon.png\">\n\n    \n    <ion-row style=\"border: none; padding-left: 5px;\">\n      <ion-text class=\"balance-name\"> {{ token.token }} </ion-text>\n    </ion-row>\n    <ion-row style=\"border:none; padding-left: 5px;\">\n      <ion-text class=\"abbr-name\"> {{ token.token.substring(0,3) }} </ion-text>\n    </ion-row>\n\n\n  </ion-col>\n\n  <ion-col size=\"3\" slot=\"end\" #balance>\n  <ion-label *ngIf=\"token.confirmed == token.sendable\" class=\"confirmed-amount\">\n    {{ token.confirmed }}\n  </ion-label>\n  <ion-label *ngIf=\"token.sendable != token.confirmed\" class=\"confirmed-amount\">\n    {{ token.confirmed +\"/\"+token.sendable }}\n  </ion-label>\n  </ion-col>\n\n  <ion-col *ngIf='token.unconfirmed !== 0' size=\"3\" slot=\"end\">\n  <ion-label class=\"unconfirmed-amount\" color=\"white\">\n    {{ token.unconfirmed }}\n  </ion-label>\n  </ion-col>\n\n  <ion-col *ngIf='token.mempool != 0' size=\"3\" slot=\"end\">\n  <ion-label class=\"unconfirmed-amount\" color=\"#92A8D1\">\n    {{ token.mempool }}\n  </ion-label>\n  </ion-col>\n  \n  </ion-item>\n\n\n  <ion-item-options side=\"end\">\n    <ion-item-option (click)=\"presentPopover($event, token.tokenid)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n    </ion-row>\n      </ion-grid>\n\n  \n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/balance/balance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.module.ts ***!
  \*************************************************/
/*! exports provided: BalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePageModule", function() { return BalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");







var routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
    }
];
var BalancePageModule = /** @class */ (function () {
    function BalancePageModule() {
    }
    BalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"]]
        })
    ], BalancePageModule);
    return BalancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/balance/balance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 320px) {\n  p {\n    font-size: 10px;\n  }\n}\n.send-slide {\n  background-color: #FF671E;\n}\nion-card {\n  --background: var(--ion-background-color, #f2f2f2);\n}\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n.confirmed-label {\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 300;\n  white-space: normal;\n}\n.confirmed-amount {\n  color: #00AAC7;\n  font-size: 1rem;\n  font-family: \"Aeonik-bold\";\n  white-space: normal;\n  text-align: right;\n}\n.unconfirmed-amount {\n  font-size: 1rem;\n  font-family: \"monospace\";\n  white-space: normal;\n  color: #9494b8;\n  text-align: right;\n}\n.logo-names {\n  font-size: 1rem;\n  font-weight: 300;\n  text-align: left;\n}\n.icon-head {\n  color: #1FB4CD;\n}\n.action-btn {\n  height: 72px;\n}\n.action-btn:hover {\n  height: 72px;\n}\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n.balance-token {\n  float: left;\n  width: 35px;\n  padding-right: 5px;\n}\n.balance-tokenname {\n  float: right;\n  position: relative;\n  padding-top: 5px;\n  font-size: 17px;\n  font-weight: 1200;\n}\n.abbr-name {\n  font-style: oblique;\n  font-size: 12px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n/** SKELETON CSS */\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n.skeleton-icon {\n  size: 0.5rem;\n}\n.skeleton-name {\n  width: 20%;\n}\n.skeleton-amount {\n  width: 5%;\n}\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n.ios .skeleton-name {\n  width: 20%;\n}\nion-grid:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\nion-row {\n  border-left: 2px solid #FF671E;\n  border-right: 2px solid #1FB4CD;\n}\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n.balance {\n  font-size: 12px;\n}\nion-col {\n  --ion-grid-columns: 0;\n}\nion-grid {\n  --ion-grid-width-sm: 240px;\n  --ion-grid-width-lg: 240px;\n  --ion-grid-column-padding: 2px;\n}\nion-card-header {\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\nion-card-content {\n  padding: 5px;\n  --background: var(--ion-background-color, #f2f2f2);\n  background: -webkit-gradient(linear, left top, left bottom, from(var(--ion-background-color, #fff)), to(var(--ion-background-color, #f2f2f2))) !important;\n  background: linear-gradient(to bottom, var(--ion-background-color, #fff) 0%, var(--ion-background-color, #f2f2f2) 100%) !important;\n}\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcy9Qcm9qZWN0cy9taW5pbWFjb3JlL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGVBQUE7RUNDTjtBQUNGO0FERUE7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDSSxrREFBQTtBQ0FKO0FESUE7RUFDSSxXQUFBO0FDREo7QURJQztFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RMO0FER0M7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUM7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NMO0FEQ0M7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VMO0FERUM7RUFDRyxjQUFBO0FDQ0o7QURDQztFQUNFLFlBQUE7QUNFSDtBREFFO0VBQ0UsWUFBQTtBQ0dKO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUo7QURBRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR0g7QURERTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNJSjtBRERFLGtCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsWUFBQTtBQ0tKO0FESEU7RUFDRSxVQUFBO0FDTUo7QURKRTtFQUNFLFNBQUE7QUNPSjtBREhFO0VBQ0UsZ0JBQUE7QUNNSjtBREpFO0VBQ0UsVUFBQTtBQ09KO0FESkE7RUFDRSxnREFBQTtBQ09GO0FETEE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FDUUY7QURMQTtFQUNJO0lBQ0UsWUFBQTtFQ1FKOztFRE5FO0lBQ0UsVUFBQTtFQ1NKOztFRFBFO0lBQ0UsZ0JBQUE7SUFDQSxTQUFBO0VDVUo7QUFDRjtBRFBBO0VBQ0UsZUFBQTtBQ1NGO0FETEE7RUFDRSxxQkFBQTtBQ1FGO0FETkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBRUEsOEJBQUE7QUNRRjtBRExBO0VBQ0Usa0RBQUE7RUFDQSx5SkFBQTtFQUFBLGtJQUFBO0FDUUY7QUROQTtFQUNFLFlBQUE7RUFFQSxrREFBQTtFQUNBLHlKQUFBO0VBQUEsa0lBQUE7QUNRRjtBREpBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuXG4uc2VuZC1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjY3MUU7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcblxufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmNvbmZpcm1lZC1sYWJlbHtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiB9XG4gLmNvbmZpcm1lZC1hbW91bnQge1xuICAgIGNvbG9yOiAjMDBBQUM3O1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQWVvbmlrLWJvbGQnO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC51bmNvbmZpcm1lZC1hbW91bnQge1xuICAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICAgZm9udC1mYW1pbHk6ICdtb25vc3BhY2UnO1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICBjb2xvcjogIzk0OTRiODtcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC5sb2dvLW5hbWVzIHtcbiAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgIFxuIH1cblxuIC5pY29uLWhlYWR7XG4gICAgY29sb3I6ICMxRkI0Q0Q7XG4gfVxuIC5hY3Rpb24tYnRuIHtcbiAgIGhlaWdodDogNzJweDtcbiB9XG4gIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDcycHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbiAgfVxuXG4gIC5iYWxhbmNlLXRva2VuIHtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuICAuYmFsYW5jZS10b2tlbm5hbWUge1xuICAgZmxvYXQ6cmlnaHQ7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBwYWRkaW5nLXRvcDogNXB4O1xuICAgZm9udC1zaXplOiAxN3B4O1xuICAgZm9udC13ZWlnaHQ6IDEyMDA7XG4gIH1cbiAgLmFiYnItbmFtZSB7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgfVxuXG4gIC8qKiBTS0VMRVRPTiBDU1MgKi9cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5za2VsZXRvbi1pY29uIHtcbiAgICBzaXplOiAwLjVyZW07XG4gIH1cbiAgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgd2lkdGg6IDUlO1xuICB9XG5cbiAgLy9pT1MgXG4gIC5pb3MgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuICAuaW9zIC5za2VsZXRvbi1uYW1lIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbmlvbi1ncmlkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuaW9uLXJvdyB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0ZGNjcxRTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFGQjRDRDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAuc2tlbGV0b24taWNvbiB7XG4gICAgICBzaXplOiAwLjVyZW07XG4gICAgfVxuICAgIC5za2VsZXRvbi1uYW1lIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIC5za2VsZXRvbi1hbW91bnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDkwJTtcbiAgICAgIHdpZHRoOiA1JTtcbiAgICB9XG59XG4gXG4uYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuICAvLyBpb24tY29sIFxuaW9uLWNvbCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMDtcbn1cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC13aWR0aC1zbTogMjQwcHg7XG4gIC0taW9uLWdyaWQtd2lkdGgtbGc6IDI0MHB4O1xuXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDJweDtcblxufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweDtcblxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpIDEwMCUpICFpbXBvcnRhbnQ7XG5cbn1cblxuLnRva2VuRGVzY3ItbW9kYWwgLm1vZGFsLXdyYXBwZXJ7XG4gIHdpZHRoOiAxNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuLnNlbmQtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZpcm1lZC1sYWJlbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uY29uZmlybWVkLWFtb3VudCB7XG4gIGNvbG9yOiAjMDBBQUM3O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkFlb25pay1ib2xkXCI7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udW5jb25maXJtZWQtYW1vdW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJtb25vc3BhY2VcIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6ICM5NDk0Yjg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubG9nby1uYW1lcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmljb24taGVhZCB7XG4gIGNvbG9yOiAjMUZCNENEO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDcycHg7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5iYWxhbmNlLXRva2VuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5iYWxhbmNlLXRva2VubmFtZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMjAwO1xufVxuXG4uYWJici1uYW1lIHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiogU0tFTEVUT04gQ1NTICovXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNrZWxldG9uLWljb24ge1xuICBzaXplOiAwLjVyZW07XG59XG5cbi5za2VsZXRvbi1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnNrZWxldG9uLWFtb3VudCB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmlvcyAuc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbmlvbi1ncmlkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkY2NzFFO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMUZCNENEO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2tlbGV0b24taWNvbiB7XG4gICAgc2l6ZTogMC41cmVtO1xuICB9XG5cbiAgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgIHdpZHRoOiA1JTtcbiAgfVxufVxuLmJhbGFuY2Uge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC13aWR0aC1zbTogMjQwcHg7XG4gIC0taW9uLWdyaWQtd2lkdGgtbGc6IDI0MHB4O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAycHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDAlLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2YyZjJmMikgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLnRva2VuRGVzY3ItbW9kYWwgLm1vZGFsLXdyYXBwZXIge1xuICB3aWR0aDogMTUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/balance/balance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/balance/balance.page.ts ***!
  \***********************************************/
/*! exports provided: BalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancePage", function() { return BalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pop-over/pop-over.component */ "./src/app/components/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/token-descr/token-descr.component */ "./src/app/components/token-descr/token-descr.component.ts");









var BalancePage = /** @class */ (function () {
    function BalancePage(service, api, alertController, popoverController, ref, route, modalController) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.ref = ref;
        this.route = route;
        this.modalController = modalController;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.host = '';
        this.MINIMA = '0x00';
    }
    BalancePage.prototype.ionViewWillEnter = function () {
        this.pullInTokens();
    };
    BalancePage.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('MinimaEvent', function (evt) {
            // Event connection success
            if (evt.detail.event === 'newbalance') {
                _this.pullInTokens();
            }
            else if (evt.detail.event === 'connected') {
                _this.pullInTokens();
            }
        });
    };
    BalancePage.prototype.ionViewWillLeave = function () {
        this.balanceSubscription.unsubscribe(); // unsubs
    };
    BalancePage.prototype.presentAlert = function (msg, header) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: msg,
                            buttons: ['Cancel', 'Ok']
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
    BalancePage.prototype.sendTokenOver = function (id) {
        this.route.navigate(['/send-funds/' + id]);
    };
    BalancePage.prototype.giveMe50 = function () {
        var _this = this;
        this.service.giveMe50().subscribe(function (res) {
            if (res.status === true) {
                _this.pullInTokens();
                setTimeout(function () {
                    _this.presentAlert('A transfer of 50 is on the way...', 'Minima');
                }, 600);
            }
            else if (res.status === false) {
                _this.presentAlert(res.message + '!', 'Unsuccessful');
            }
        });
    };
    /** Async Pop ups */
    /** Tokens
   *
  tokenid?: string;
  token: string;
  description: string;
  icon: string;
  proof: string;
  total: string;
  script: string;
  coinid: string;
  totalamount: number;
  scale: string;
  confirmed: number;
  unconfirmed: any;
  mempool: string;
  sendable: string;
   */
    BalancePage.prototype.presentTokenDescr = function (id, token, descr, icon, proof, total, script, coinid, totalamnt, scale, conf, unconf, memp, sendable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_token_descr_token_descr_component__WEBPACK_IMPORTED_MODULE_8__["TokenDescrComponent"],
                            cssClass: 'tokenDescr-modal',
                            componentProps: {
                                'tokenid': id,
                                'name': token,
                                'description': descr,
                                'icon': icon,
                                'proof': proof,
                                'total': total,
                                'script': script,
                                'coinid': coinid,
                                'totalamount': totalamnt,
                                'scale': scale,
                                'confirmed': conf,
                                'unconfirmed': unconf,
                                'mempool': memp,
                                'sendable': sendable,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.prototype.presentPopover = function (ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("id taken: " + id);
                        return [4 /*yield*/, this.popoverController.create({
                                component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                                event: ev,
                                cssClass: 'balance-popover',
                                translucent: false,
                                componentProps: { 'tokenid': id },
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BalancePage.prototype.pullArrLength = function () {
        var _this = this;
        this.service.getBalance().subscribe(function (res) {
            res.forEach(function (element) {
                _this.tokenSpoof.push(element);
            });
        });
    };
    BalancePage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceSubscription = this.service.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseData) {
            var tokenArr = [];
            for (var key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    var element = responseData[key];
                    // round up confirmed && unconfirmed
                    var tempConfirmed = (Math.round(element.confirmed * 1000) / 1000);
                    var tempUnconfirmed = (Math.round(element.unconfirmed * 1000) / 1000);
                    tokenArr.push({
                        tokenid: element.tokenid,
                        token: element.token,
                        description: element.description,
                        icon: element.icon,
                        proof: element.proof,
                        total: element.total,
                        script: element.script,
                        coinid: element.coinid,
                        totalamount: element.totalamount,
                        scale: element.scale,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        mempool: element.mempool,
                        sendable: element.sendable
                    });
                    // add Minima always to the top
                    if (element.tokenid === _this.MINIMA) {
                        tokenArr.pop(); // pop it
                        _this.service.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: tempConfirmed,
                            unconfirmed: tempUnconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(function (responseData) {
            //check if changed
            if (_this.lastJSON !== JSON.stringify(responseData)) {
                _this.tokenArr = responseData.slice();
                _this.lastJSON = JSON.stringify(responseData);
            }
        });
    };
    BalancePage.ctorParameters = function () { return [
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('balance', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], BalancePage.prototype, "balance", void 0);
    BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html"),
            providers: [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"]],
            styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/pages/balance/balance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], BalancePage);
    return BalancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es5.js.map