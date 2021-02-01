(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-community-community-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/community/community.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-menu-button class=\"menu-icon\" slot=\"start\"></ion-menu-button>\n    <ion-title class=\"large-text\">Join Community</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card href=\"https://minima.global/\" target=\"_\" class=\"social-card borders\">\n            <ion-card-header>\n              <ion-icon color=\"primary\" src=\"./assets/community/Website.svg\" alt=\"\" class=\"socials\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content>\n              <h3>Website</h3>\n              <p>Stay connected</p>\n            </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-card href=\"https://github.com/Minima-Protocol\" target=\"_\" class=\"social-card borders\">\n          <ion-card-header>\n            <ion-icon color=\"primary\" src=\"./assets/community/github.svg\" alt=\"\" class=\"socials\"></ion-icon>\n          </ion-card-header>\n          <ion-card-content>\n            <h3>Github</h3>\n            <p>Contribute to the codebase</p>\n          </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\" size-md=\"6\">\n        <ion-card href=\"https://twitter.com/minima_global\" target=\"_\" class=\"social-card borders\">\n            <ion-card-header>\n              <ion-icon color=\"primary\" src=\"./assets/community/twitter.svg\" alt=\"\" class=\"socials\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content>\n              <h3>Twitter</h3>\n              <p>Follow @Minima_Global</p>\n            </ion-card-content>\n        </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\">\n      <ion-card href=\"https://t.me/Minima_Global\" target=\"_\" class=\"social-card borders\">\n        <ion-card-header>\n          <ion-icon color=\"primary\" src=\"./assets/community/telegram.svg\" alt=\"\" class=\"socials\"></ion-icon>\n        </ion-card-header>\n        <ion-card-content>\n          <h3>Telegram</h3>\n          <p>Stay up to date</p>\n        </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"12\" size-md=\"6\">\n      <ion-card href=\"https://medium.com/minima-global\" target=\"_\" class=\"social-card borders\">\n          <ion-card-header>\n            <ion-icon color=\"primary\" src=\"./assets/community/medium.svg\" alt=\"\" class=\"socials\"></ion-icon>\n          </ion-card-header>\n          <ion-card-content>\n            <h3>Medium</h3>\n            <p>Read our latest blog posts</p>\n          </ion-card-content>\n      </ion-card>\n  </ion-col>\n  <ion-col size=\"12\" size-md=\"6\">\n    <ion-card href=\"https://discord.com/invite/SgvQ6mc\" target=\"_\" class=\"social-card borders\">\n        <ion-card-header>\n          <ion-icon color=\"primary\" src=\"./assets/community/Discord.svg\" alt=\"\" class=\"socials\"></ion-icon>\n        </ion-card-header>\n        <ion-card-content>\n          <h3>Discord</h3>\n          <p>Join the community</p>\n        </ion-card-content>\n    </ion-card>\n</ion-col>\n</ion-row>\n\n\n\n</ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/community/community.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/community/community.module.ts ***!
  \*****************************************************/
/*! exports provided: CommunityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPageModule", function() { return CommunityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community.page */ "./src/app/pages/community/community.page.ts");







const routes = [
    {
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_6__["CommunityPage"]
    }
];
let CommunityPageModule = class CommunityPageModule {
};
CommunityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_community_page__WEBPACK_IMPORTED_MODULE_6__["CommunityPage"]]
    })
], CommunityPageModule);



/***/ }),

/***/ "./src/app/pages/community/community.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/community/community.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: manrope-bold;\n  text-transform: none;\n  font-size: 1rem;\n}\n\nion-title {\n  padding-top: 5%;\n  font-size: 1.2rem;\n}\n\n.small-text {\n  opacity: 1.5;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n}\n\n.social-card {\n  cursor: pointer;\n  background: transparent;\n  color: var(--ion-color-tertiary);\n}\n\n.social-card ion-card-header {\n  color: var(--ion-color-tertiary);\n  text-transform: none;\n  text-align: center;\n  background-color: transparent;\n}\n\n.social-card ion-card-header ion-icon {\n  font-size: 77px;\n}\n\n.social-card ion-card-content h3 {\n  color: var(--ion-color-tertiary);\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  width: 100%;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  font-size: 0.8rem;\n}\n\n.social-card ion-card-content p {\n  color: var(--ion-color-tertiary);\n  opacity: 0.7;\n  text-align: center;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  width: 100%;\n  align-content: center;\n  display: -webkit-box;\n  display: flex;\n  font-size: 0.7rem;\n}\n\n.social-card:hover {\n  opacity: 0.8;\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29tbXVuaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QURBRTtFQUNFLHFDQUFBO0FDR0o7O0FEQUU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBREFFO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNHSjs7QURERTtFQUNFLGVBQUE7QUNJSjs7QURGRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIRTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkU7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbXVuaXR5L2NvbW11bml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xufVxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5zbWFsbC10ZXh0IHtcbiAgICBvcGFjaXR5OiAxLjU7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgfVxuICBcbiAgLnNvY2lhbC1jYXJkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIH1cbiAgXG4gIC5zb2NpYWwtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAuc29jaWFsLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDc3cHg7XG4gIH1cbiAgLnNvY2lhbC1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC5zb2NpYWwtY2FyZCBpb24tY2FyZC1jb250ZW50IHAge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuICAuc29jaWFsLWNhcmQ6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB9IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgb3BhY2l0eTogMS41O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW0tYmFja2dyb3VuZCk7XG59XG5cbi5zb2NpYWwtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4uc29jaWFsLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc29jaWFsLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3N3B4O1xufVxuXG4uc29jaWFsLWNhcmQgaW9uLWNhcmQtY29udGVudCBoMyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uc29jaWFsLWNhcmQgaW9uLWNhcmQtY29udGVudCBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIG9wYWNpdHk6IDAuNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLnNvY2lhbC1jYXJkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/community/community.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/community/community.page.ts ***!
  \***************************************************/
/*! exports provided: CommunityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPage", function() { return CommunityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommunityPage = class CommunityPage {
    constructor() { }
    ngOnInit() {
    }
};
CommunityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community',
        template: __webpack_require__(/*! raw-loader!./community.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/community/community.page.html"),
        styles: [__webpack_require__(/*! ./community.page.scss */ "./src/app/pages/community/community.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommunityPage);



/***/ })

}]);
//# sourceMappingURL=pages-community-community-module-es2015.js.map