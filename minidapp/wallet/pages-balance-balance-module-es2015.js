(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/balance/balance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title class=\"large-text\">\n        Balance\n      </ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <ion-card>\n      <ion-card-header>\n        Your tokens\n      </ion-card-header>\n  <ion-card-content>\n\n  <ion-grid style=\"width: 100%;\" *ngFor=\"let token of tokenArr;\">\n    <ion-row>\n      <ion-item-sliding #slidingItem>\n      <ion-item-options side=\"start\">\n      <ion-item-option class=\"receive-slide small-text\" (click)=\"closeSliding(slidingItem)\" routerLink=\"/my-address\">Receive</ion-item-option>\n      <ion-item-option class=\"send-slide small-text\" (click)=\"sendTokenOver(slidingItem, token.tokenid)\">Send</ion-item-option>\n      </ion-item-options>\n\n  <!-- TOKENS ONLY -->\n  <ion-item lines=\"full\" routerLink=\"/view-tokens/{{ token.tokenid }}\">\n  <ion-avatar slot=\"start\">\n    <img *ngIf=\"token.icon\" alt=\"Avatar\" class=\"balance-token\" src=\"{{ token.icon }}\">\n    <img *ngIf=\"!token.icon || token.icon.length <= 0\" alt=\"Avatar\" class=\"balance-token\" src=\"assets/icon/icon.png\">\n  </ion-avatar>\n\n  <ion-col size=\"9\" style=\"padding: 12px;\" slot=\"start\">\n\n    <!-- if token name is shorter than 15 -->\n    <div *ngIf=\"token.token.length < 15\">\n      <ion-row style=\"border: none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token}} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 15 and smaller than 30 -->   \n    <div *ngIf=\"token.token.length >= 15 && token.token.length < 30\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30) }} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 30 and smaller than 45 -->   \n    <div *ngIf=\"token.token.length >= 15 && token.token.length < 45\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"smaller-text\"> {{ token.token.substring(30, 45) }} </ion-text>\n      </ion-row>\n    </div>\n    <!-- if token name is longer than 45... -->   \n    <div *ngIf=\"token.token.length >= 45\" >\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"medium-text\"> {{ token.token.substring(0,15)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"small-text\"> {{ token.token.substring(15, 30)+\"-\" }} </ion-text>\n      </ion-row>\n      <ion-row style=\"border:none; padding-left: 5px;\">\n        <ion-text class=\"smaller-text\"> {{ token.token.substring(30, 45)+\"...\" }} </ion-text>\n      </ion-row>\n    </div>\n    \n\n    <ion-row style=\"border:none; padding-left: 5px;\">\n      <ion-text class=\"abbr-name small-text\"> {{ token.token.substring(0,3) }} </ion-text>\n    </ion-row>\n\n  </ion-col>\n\n  <ion-col slot=\"end\" size=\"3\">\n\n      <span *ngIf=\"token.confirmed == token.sendable && token.mempool == 0 && token.unconfirmed == 0;\" class=\"confirmed-amount medium-text\">{{ token.confirmed }}</span>\n\n      <span *ngIf=\"token.confirmed == token.sendable && token.mempool == 0 && token.unconfirmed != 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed+\"/\"+token.unconfirmed }}</span>\n\n      <span *ngIf=\"token.confirmed == token.sendable && token.mempool != 0 && token.unconfirmed == 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+ token.mempool}} </span>\n\n      <span *ngIf=\"token.confirmed != token.sendable && token.mempool == 0 && token.unconfirmed == 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.sendable}}</span>\n\n      <span *ngIf=\"token.confirmed != token.sendable && token.mempool == 0 && token.unconfirmed != 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.unconfirmed+\"/\"+token.sendable}}</span>\n      \n      <span *ngIf=\"token.confirmed != token.sendable && token.mempool != 0 && token.unconfirmed == 0\" class=\"confirmed-amount medium-text\">{{ token.confirmed +\"/\"+token.sendable + \"/\" + token.mempool}}</span>\n\n  </ion-col>\n\n  \n  </ion-item>\n  \n\n  <ion-item-options side=\"end\">\n    <ion-item-option class=\"small-text\" (click)=\"presentPopover(slidingItem, $event, token.tokenid)\">Token ID</ion-item-option>\n  </ion-item-options>\n  </ion-item-sliding>\n    </ion-row>\n      </ion-grid>\n\n  \n\n  </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button class=\"action-btn medium-text\" shape=\"\" expand=\"block\" type=\"button\" (click)=\"giveMe50()\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon> Gimme 50\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance.page */ "./src/app/pages/balance/balance.page.ts");







const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_6__["BalancePage"],
        children: [
            {
                path: 'view-txn',
                loadChildren: () => __webpack_require__.e(/*! import() | view-tokens-view-tokens-module */ "view-tokens-view-tokens-module").then(__webpack_require__.bind(null, /*! ./view-tokens/view-tokens.module */ "./src/app/pages/balance/view-tokens/view-tokens.module.ts")).then(m => m.ViewTokensPageModule)
            }
        ]
    }
];
let BalancePageModule = class BalancePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/balance/balance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/balance/balance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-sliding ion-item div .item-native {\n  padding-left: 0px;\n}\n\n.send-slide {\n  background-color: #FF671E;\n}\n\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 20px !important;\n  max-height: 150px !important;\n}\n\nimg {\n  padding: 0 !important;\n  border: 1px solid var(--minima-icons);\n  max-width: 150px;\n  max-height: 75px;\n  width: 120px;\n  border-radius: 50%;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.confirmed-label {\n  margin: auto;\n  font-weight: 300;\n  white-space: normal;\n}\n\n.confirmed-amount {\n  color: var(--minima-text);\n  white-space: normal;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  word-break: break-all;\n  text-align: right;\n}\n\n.unconfirmed-amount {\n  white-space: normal;\n  word-break: break-all;\n  font-style: oblique;\n  opacity: 0.5;\n  color: var(--minima-text);\n  text-align: right;\n}\n\n.mempool-amount {\n  white-space: normal;\n  word-break: break-all;\n  font-style: oblique;\n  opacity: 0.3;\n  color: var(--minima-text);\n  text-align: right;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.action-btn:hover {\n  height: 72px;\n}\n\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n\n.balance-token {\n  max-height: 40px;\n  float: left;\n  max-width: 35px;\n  padding-right: 5px;\n}\n\n.balance-tokenname {\n  float: right;\n  position: relative;\n  padding-top: 5px;\n  font-size: 17px;\n  font-weight: 1200;\n}\n\n.abbr-name {\n  font-style: oblique;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n/** SKELETON CSS */\n\n.wrapper {\n  width: 250px;\n  overflow: hidden;\n}\n\n.skeleton-icon {\n  size: 0.5rem;\n}\n\n.skeleton-name {\n  width: 20%;\n}\n\n.skeleton-amount {\n  width: 5%;\n}\n\n.ios .skeleton-amount {\n  margin-left: 10%;\n}\n\n.ios .skeleton-name {\n  width: 20%;\n}\n\nion-grid:hover {\n  background: var(--ion-background-color, #f2f2f2);\n}\n\nion-row {\n  border-left: 2px solid #FF671E;\n  border-right: 2px solid #1FB4CD;\n}\n\n@media screen and (max-width: 900px) {\n  .skeleton-icon {\n    size: 0.5rem;\n  }\n\n  .skeleton-name {\n    width: 20%;\n  }\n\n  .skeleton-amount {\n    margin-left: 90%;\n    width: 5%;\n  }\n}\n\n.balance {\n  font-size: 12px;\n}\n\nion-col {\n  --ion-grid-columns: 0;\n}\n\nion-grid {\n  --ion-grid-width-sm: 240px;\n  --ion-grid-width-lg: 240px;\n  --ion-grid-column-padding: 2px;\n}\n\nion-card-content {\n  padding: 5px;\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  background: var(--ion-card-header);\n}\n\n.tokenDescr-modal .modal-wrapper {\n  width: 1500px;\n  height: auto;\n}\n\n.small-text {\n  font-weight: 500;\n  opacity: 0.75;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbGFuY2UvYmFsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENDO0VBQ0ksWUFBQTtFQUNELGdCQUFBO0VBQ0MsbUJBQUE7QUNFTDs7QURBQztFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQztFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDSUw7O0FERkM7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0tGOztBRERDO0VBQ0csY0FBQTtBQ0lKOztBREZDO0VBQ0UsWUFBQTtBQ0tIOztBREhFO0VBQ0UsWUFBQTtBQ01KOztBREpJO0VBQ0UsZ0JBQUE7QUNNTjs7QURGRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNSDs7QURKRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ09KOztBREhFLGtCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkU7RUFDRSxZQUFBO0FDT0o7O0FETEU7RUFDRSxVQUFBO0FDUUo7O0FETkU7RUFDRSxTQUFBO0FDU0o7O0FETEU7RUFDRSxnQkFBQTtBQ1FKOztBRE5FO0VBQ0UsVUFBQTtBQ1NKOztBRE5BO0VBQ0UsZ0RBQUE7QUNTRjs7QURQQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUNVRjs7QURQQTtFQUNJO0lBQ0UsWUFBQTtFQ1VKOztFRFJFO0lBQ0UsVUFBQTtFQ1dKOztFRFRFO0lBQ0UsZ0JBQUE7SUFDQSxTQUFBO0VDWUo7QUFDRjs7QURUQTtFQUNFLGVBQUE7QUNXRjs7QURQQTtFQUNFLHFCQUFBO0FDVUY7O0FEUkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBRUEsOEJBQUE7QUNVRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBQ1NGOztBRFBBO0VBQ0Usa0NBQUE7QUNVRjs7QURQQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDVUY7O0FETkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNTRjs7QUROQTtFQUNFLHNDQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYWxhbmNlL2JhbGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSBkaXYgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zZW5kLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjcxRTtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxuICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcbiAgbWF4LXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXG4gIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXG59XG5pbWcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pbmltYS1pY29ucyk7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gLmNvbmZpcm1lZC1sYWJlbHtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIC5jb25maXJtZWQtYW1vdW50IHtcbiAgICBjb2xvcjogdmFyKC0tbWluaW1hLXRleHQpO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgaHlwaGVuczogYXV0bztcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC51bmNvbmZpcm1lZC1hbW91bnQge1xuICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gfVxuIC5tZW1wb29sLWFtb3VudCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgb3BhY2l0eTogMC4zO1xuICBjb2xvcjogdmFyKC0tbWluaW1hLXRleHQpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiB9XG5cblxuIC5pY29uLWhlYWR7XG4gICAgY29sb3I6ICMxRkI0Q0Q7XG4gfVxuIC5hY3Rpb24tYnRuIHtcbiAgIGhlaWdodDogNzJweDtcbiB9XG4gIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDcycHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbiAgfVxuXG4gIC5iYWxhbmNlLXRva2VuIHtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1heC13aWR0aDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLmJhbGFuY2UtdG9rZW5uYW1lIHtcbiAgIGZsb2F0OnJpZ2h0O1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgcGFkZGluZy10b3A6IDVweDtcbiAgIGZvbnQtc2l6ZTogMTdweDtcbiAgIGZvbnQtd2VpZ2h0OiAxMjAwO1xuICB9XG4gIC5hYmJyLW5hbWUge1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgfVxuIFxuXG4gIC8qKiBTS0VMRVRPTiBDU1MgKi9cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5za2VsZXRvbi1pY29uIHtcbiAgICBzaXplOiAwLjVyZW07XG4gIH1cbiAgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgd2lkdGg6IDUlO1xuICB9XG5cbiAgLy9pT1MgXG4gIC5pb3MgLnNrZWxldG9uLWFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuICAuaW9zIC5za2VsZXRvbi1uYW1lIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG5cbmlvbi1ncmlkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuaW9uLXJvdyB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0ZGNjcxRTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFGQjRDRDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAuc2tlbGV0b24taWNvbiB7XG4gICAgICBzaXplOiAwLjVyZW07XG4gICAgfVxuICAgIC5za2VsZXRvbi1uYW1lIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIC5za2VsZXRvbi1hbW91bnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDkwJTtcbiAgICAgIHdpZHRoOiA1JTtcbiAgICB9XG59XG4gXG4uYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuICAvLyBpb24tY29sIFxuaW9uLWNvbCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMDtcbn1cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC13aWR0aC1zbTogMjQwcHg7XG4gIC0taW9uLWdyaWQtd2lkdGgtbGc6IDI0MHB4O1xuXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDJweDtcblxufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1oZWFkZXIpO1xufVxuXG4udG9rZW5EZXNjci1tb2RhbCAubW9kYWwtd3JhcHBlcntcbiAgd2lkdGg6IDE1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5zbWFsbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn0iLCJpb24taXRlbS1zbGlkaW5nIGlvbi1pdGVtIGRpdiAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnNlbmQtc2xpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzFFO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pbmltYS1pY29ucyk7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZpcm1lZC1sYWJlbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmNvbmZpcm1lZC1hbW91bnQge1xuICBjb2xvcjogdmFyKC0tbWluaW1hLXRleHQpO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBoeXBoZW5zOiBhdXRvO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udW5jb25maXJtZWQtYW1vdW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiB2YXIoLS1taW5pbWEtdGV4dCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWVtcG9vbC1hbW91bnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIG9wYWNpdHk6IDAuMztcbiAgY29sb3I6IHZhcigtLW1pbmltYS10ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pY29uLWhlYWQge1xuICBjb2xvcjogIzFGQjRDRDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuLmFjdGlvbi1idG46aG92ZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uYmFsYW5jZS10b2tlbiB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtd2lkdGg6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJhbGFuY2UtdG9rZW5uYW1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDEyMDA7XG59XG5cbi5hYmJyLW5hbWUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiogU0tFTEVUT04gQ1NTICovXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNrZWxldG9uLWljb24ge1xuICBzaXplOiAwLjVyZW07XG59XG5cbi5za2VsZXRvbi1uYW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnNrZWxldG9uLWFtb3VudCB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLmlvcyAuc2tlbGV0b24tYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmlvcyAuc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbmlvbi1ncmlkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRkY2NzFFO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMUZCNENEO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2tlbGV0b24taWNvbiB7XG4gICAgc2l6ZTogMC41cmVtO1xuICB9XG5cbiAgLnNrZWxldG9uLW5hbWUge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuc2tlbGV0b24tYW1vdW50IHtcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgIHdpZHRoOiA1JTtcbiAgfVxufVxuLmJhbGFuY2Uge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC13aWR0aC1zbTogMjQwcHg7XG4gIC0taW9uLWdyaWQtd2lkdGgtbGc6IDI0MHB4O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAycHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtaGVhZGVyKTtcbn1cblxuLnRva2VuRGVzY3ItbW9kYWwgLm1vZGFsLXdyYXBwZXIge1xuICB3aWR0aDogMTUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn0iXX0= */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pop-over/pop-over.component */ "./src/app/components/pop-over/pop-over.component.ts");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let BalancePage = class BalancePage {
    constructor(service, api, alertController, popoverController, route) {
        this.service = service;
        this.api = api;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.route = route;
        this.tokenArr = [];
        this.tokenSpoof = [];
        // - vars
        this.lastJSON = '';
        this.MINIMA = '0x00';
        this.pullInTokens();
    }
    ionViewWillEnter() { }
    giveMe50() {
        this.api.giveMe50().then((res) => {
            if (res.status === true) {
                this.presentAlert(res.message, 'Success.');
            }
            else {
                this.presentAlert(res.message, 'Something went wrong.');
            }
        });
    }
    ngOnInit() { }
    ionViewWillLeave() {
        this.balanceSubscription.unsubscribe(); // unsubs
    }
    presentAlert(msg, hdr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: hdr,
                message: msg,
                buttons: ['Cancel', 'Ok']
            });
            yield alert.present();
        });
    }
    closeSliding(slidingItem) {
        slidingItem.close();
    }
    sendTokenOver(slidingItem, id) {
        slidingItem.close();
        this.route.navigate(['/send-funds/' + id]);
    }
    presentPopover(slidingItem, ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__["PopOverComponent"],
                event: ev,
                cssClass: 'balance-popover',
                translucent: false,
                componentProps: { tokenid: id },
            });
            slidingItem.close();
            return yield popover.present();
        });
    }
    pullInTokens() {
        this.balanceSubscription = this.service.updatedBalance
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((responseData) => {
            const tokenArr = [];
            for (const key in Minima.balance) {
                if (Minima.balance.hasOwnProperty(key)) {
                    const element = Minima.balance[key];
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
                        confirmed: element.confirmed,
                        unconfirmed: element.unconfirmed,
                        mempool: element.mempool,
                        sendable: element.sendable
                    });
                    // add Minima always to the top
                    if (element.tokenid === this.MINIMA) {
                        tokenArr.pop(); // pop it
                        this.service.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: element.confirmed,
                            unconfirmed: element.unconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        }))
            .subscribe(responseData => {
            // check if changed
            if (this.lastJSON !== JSON.stringify(responseData)) {
                this.tokenArr = [...responseData];
                this.lastJSON = JSON.stringify(responseData);
            }
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"] },
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
BalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-balance',
        template: __webpack_require__(/*! raw-loader!./balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/balance/balance.page.html"),
        styles: [__webpack_require__(/*! ./balance.page.scss */ "./src/app/pages/balance/balance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_balance_service__WEBPACK_IMPORTED_MODULE_6__["BalanceService"],
        _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], BalancePage);



/***/ })

}]);
//# sourceMappingURL=pages-balance-balance-module-es2015.js.map