(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-token-create-token-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-token/create-token.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"border-b\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">Token</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-title class=\"cardHeader\">\n    <span id=\"cardText\">Choose A Token Type</span>\n  </ion-title>\n    <ion-list id=\"listCardOptions\">\n      <ion-row>\n        <ion-col size-xs=\"12\">\n          <ion-card id=\"basicCard\" class=\"tokenType borders\">\n            <ion-card-header>\n              Basic Token\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list lines=\"none\">\n                <ion-item>\n                <ion-label>Name</ion-label>\n                <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\n                </ion-item>\n                <ion-item>\n                <ion-label>Amount</ion-label>\n                <ion-checkbox disabled=\"true\" checked=\"true\"></ion-checkbox>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n            <ion-card-subtitle>\n              <ion-buttons>\n                <ion-button (click)=\"toggleBasicAnimation()\" class=\"createBtn\">\n                  Create Basic Token\n                </ion-button>\n              </ion-buttons>\n            </ion-card-subtitle>\n          </ion-card>\n        </ion-col>\n        <ion-col size-xs=\"12\">\n          <ion-card #advancedCard id=\"advancedCard\" class=\"tokenType borders\">\n            <ion-card-header>\n              Advanced Token &mdash; <ion-note style=\"font-style:oblique; font-family:manrope-light\">A Basic Token With Optional Values</ion-note>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-label>Description</ion-label>\n                  <ion-checkbox id=\"description\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.description\"></ion-checkbox>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Custom Icon URL</ion-label>\n                  <ion-checkbox id=\"icon\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.icon\"></ion-checkbox>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Proof URL</ion-label>\n                  <ion-checkbox id=\"proof\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.proof\"></ion-checkbox>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Non-Fungible Token</ion-label>\n                  <ion-checkbox id=\"nft\" disabled=\"false\" checked=\"false\" [(ngModel)]=\"advancedFormInputsChecked.nft\"></ion-checkbox>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-card-subtitle>\n              <ion-buttons>\n                <ion-button (click)=\"toggleAdvAnimation()\" class=\"createBtn\">\n                  Create Advanced Token\n                </ion-button>\n              </ion-buttons>\n            </ion-card-subtitle>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n\n  <ion-card class=\"borders\" *ngIf=\"basic || advanced\">\n    <ion-card-content>\n    <form (ngSubmit)=\"createTokenAdvanced()\" [formGroup]=\"tokenCreationForm\" id='tokenCreationForm'>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Amount</ion-label>\n        <ion-input placeholder=\"amount\" type=\"number\" class=\"medium-text input\" #amountRef name=\"amount\" formControlName=\"amount\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"amount.invalid && amount.touched\">\n        <ion-label position=\"fixed\"></ion-label>\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> An amount is required!</span> <br>\n          <span>&mdash; An amount must be numeric and greater than 0.</span> \n        </ion-note>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Token Name</ion-label>\n        <ion-input placeholder=\"token name\" class=\"medium-text input\" #nameTextArea name=\"name\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <ion-item class=\"error\" lines=\"none\" *ngIf=\"name.invalid && name.touched\">\n        <ion-label position=\"fixed\"></ion-label>\n        <ion-note class=\"error-message\">\n          <ion-icon name=\"alert-circle\"></ion-icon> <span> A name is required!</span> <br>\n          <span>&mdash; A name must be a maximum length of 255 characters.</span> \n        </ion-note>\n      </ion-item>\n\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.icon\" lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Icon <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n        <ion-input class=\"medium-text input\" name=\"icon\" #iconURL formControlName=\"icon\" placeholder=\"add the URL of your icon here...\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.proof\" lines=\"none\">\n        <ion-label position=\"fixed\" class=\"medium-text\">Proof <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n        <ion-input  name=\"proof\" class=\"medium-text input\" #proofURL formControlName=\"proof\" placeholder=\"add to host website a text file with a token ID.\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\" [hidden]=\"!advancedFormInputsChecked.description\" lines=\"none\">\n        <ion-label position=\"stacked\"  class=\"medium-text\">Description <span style=\"font-family: manrope-light; color:var(--ion-color-primary)\">(Optional)</span></ion-label>\n        <ion-textarea\n        #description \n        class=\"medium-text input\"\n        name=\"description\"\n        maxlength=\"255\"\n        [(ngModel)] = \"customToken.description\"\n        formControlName=\"description\"\n        placeholder=\"type your description here...\">\n        </ion-textarea>\n      </ion-item>\n      <ion-item class=\"length\" *ngIf=\"customToken.description && customToken.description.length > 0\">\n        <ion-note>{{ customToken.description.length+'/255'}}</ion-note>\n      </ion-item>\n\n      <ion-item [hidden]=\"!advancedFormInputsChecked.nft\">\n        <ion-label>\n          <ion-icon class=\"nftIcon\" src=\"assets/nft2.svg\"></ion-icon>\n          <ion-note>In the case you would like to spend this token, it must be spent whole.</ion-note>\n        </ion-label>\n      </ion-item>\n    </ion-list>      \n    </form>\n</ion-card-content>\n  </ion-card>\n  <ion-button id=\"backBtn\" style=\"display:none;\" fill=\"clear\" (click)=\"toggleBackAnimation()\" name=\"arrow-back\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer id=\"footer\" style=\"display: none;\" class=\"border-t\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button [disabled]=\"tokenCreationForm.invalid\" expand=\"block\">\n      <button type=\"submit\" class=\"footer\" id=\"createTknBtn2\" form=\"tokenCreationForm\">\n        <ion-icon name=\"brush\" slot=\"start\"></ion-icon> Create Token\n      </button>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/create-token/create-token.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateTokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPageModule", function() { return CreateTokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _create_token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-token.page */ "./src/app/pages/create-token/create-token.page.ts");







const routes = [
    {
        path: '',
        component: _create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]
    }
];
let CreateTokenPageModule = class CreateTokenPageModule {
};
CreateTokenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_create_token_page__WEBPACK_IMPORTED_MODULE_6__["CreateTokenPage"]]
    })
], CreateTokenPageModule);



/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  color: #000;\n  line-height: 16px;\n  background-color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: normal;\n}\n\nion-checkbox.checkbox {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n  height: 58px;\n  text-transform: none;\n  font-family: manrope-bold;\n}\n\nion-note {\n  color: var(--ion-color-secondary);\n  font-family: manrope-bold;\n}\n\nbutton.footer {\n  font-size: 1rem;\n  width: 100%;\n  height: 58px;\n  text-align: center;\n  text-transform: none;\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary) !important;\n  background-color: transparent;\n  display: none;\n}\n\nbutton.footer ion-icon {\n  font-size: 1rem;\n}\n\nbutton.footer:hover {\n  cursor: pointer;\n  opacity: 0.6;\n}\n\nion-icon.nftIcon {\n  font-size: 1.9rem;\n}\n\nion-textarea {\n  padding-left: 1%;\n  color: black !important;\n  background: #ffffff;\n}\n\nion-checkbox {\n  --size: 15px;\n}\n\nion-toolbar {\n  --background: var(--ion-m-background);\n  font-family: manrope-bold;\n  color: var(--ion-color-tertiary);\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n}\n\nion-toolbar ion-buttons ion-menu-button {\n  font-size: 1rem;\n  color: var(--ion-color-tertiary);\n}\n\nion-title.cardHeader {\n  padding-top: 2%;\n  font-size: 0.9rem;\n  display: inline-block;\n}\n\nion-title.cardHeader ion-icon {\n  cursor: pointer;\n}\n\nion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  --color: var(--ion-text-color,#000);\n  font-family: manrope-bold;\n}\n\n.input {\n  font-family: manrope-light;\n}\n\n.length {\n  position: relative;\n  float: right;\n  z-index: 2000;\n}\n\n.length ion-note {\n  font-family: manrope-light !important;\n  color: var(--ion-color-tertiary) !important;\n}\n\nion-card.tokenType ion-card-subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  text-transform: none;\n}\n\nion-card.tokenType ion-card-subtitle ion-buttons ion-button {\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\nion-button.createBtn:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  --background-hover: none!important;\n}\n\nion-card.tokenType {\n  cursor: pointer;\n}\n\nion-card.tokenType:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\n\n#backBtn {\n  cursor: pointer;\n  font-size: 1.2rem;\n  --background-hover: var(--ion-color-tertiary);\n  --color: var(--ion-color-primary);\n}\n\n#backBtn:hover {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  --background-hover: none!important;\n  --color: var(--ion-color-secondary);\n}\n\nion-item.error {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: left;\n          align-items: left;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n\nion-item.error span {\n  color: var(--ion-color-tertiary);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-note.error-message {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NyZWF0ZS10b2tlbi9jcmVhdGUtdG9rZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jcmVhdGUtdG9rZW4vY3JlYXRlLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxpQ0FBQTtFQUNBLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFLGlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7QUNXRjs7QURUQTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ1lGOztBRFhFO0VBQ0UsZUFBQTtBQ2FKOztBRFhFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FDYUo7O0FEVkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtBQ2NGOztBRFpBO0VBQ0UsaUNBQUE7QUNlRjs7QURiQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7QUNnQkY7O0FEZEE7RUFDRSwwQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNrQkY7O0FEaEJBO0VBQ0UscUNBQUE7RUFDQSwyQ0FBQTtBQ21CRjs7QURoQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ21CRjs7QURqQkE7RUFDRSxvQkFBQTtBQ29CRjs7QURsQkE7RUFDRSw2Q0FBQTtFQUNBLGlDQUFBO0FDcUJGOztBRG5CQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQ0FBQTtBQ3NCRjs7QURwQkE7RUFDRSxlQUFBO0FDdUJGOztBRHJCQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQ0FBQTtBQ3lCRjs7QUR2QkE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtBQzBCRjs7QUR4QkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBQzJCRjs7QUR6QkE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQzZCRjs7QUQzQkE7RUFDRSxjQUFBO0FDOEJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLXRva2VuL2NyZWF0ZS10b2tlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWNoZWNrYm94LmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbmlvbi1ub3RlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuYnV0dG9uLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBub25lO1xufVxuYnV0dG9uLmZvb3RlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xufVxuYnV0dG9uLmZvb3Rlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC42O1xufVxuaW9uLWljb24ubmZ0SWNvbiB7XG4gIGZvbnQtc2l6ZTogMS45cmVtO1xufVxuaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbmlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMTVweDtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG4gIH1cbiAgaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgfVxufVxuaW9uLXRpdGxlLmNhcmRIZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tdGl0bGUuY2FyZEhlYWRlciBpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY2FyZC1jb2xvcik7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuLmxlbmd0aCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAyMDAwO1xufVxuLmxlbmd0aCBpb24tbm90ZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0IWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jYXJkLnRva2VuVHlwZSBpb24tY2FyZC1zdWJ0aXRsZSBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWJ1dHRvbi5jcmVhdGVCdG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQudG9rZW5UeXBlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNhcmQudG9rZW5UeXBlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbiNiYWNrQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4jYmFja0J0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjogbm9uZSFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWl0ZW0uZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuMHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuaW9uLW5vdGUuZXJyb3ItbWVzc2FnZSB7IFxuICBkaXNwbGF5OiBibG9jaztcbn0iLCJpb24taW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmlvbi1jaGVja2JveC5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLW5vdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24uZm9vdGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5idXR0b24uZm9vdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1pY29uLm5mdEljb24ge1xuICBmb250LXNpemU6IDEuOXJlbTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMTVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbmlvbi10aXRsZS5jYXJkSGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tdGl0bGUuY2FyZEhlYWRlciBpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xufVxuXG4ubGVuZ3RoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHotaW5kZXg6IDIwMDA7XG59XG5cbi5sZW5ndGggaW9uLW5vdGUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1saWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUgaW9uLWNhcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQudG9rZW5UeXBlIGlvbi1jYXJkLXN1YnRpdGxlIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWNhcmQudG9rZW5UeXBlIGlvbi1jYXJkLXN1YnRpdGxlIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWJ1dHRvbi5jcmVhdGVCdG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IG5vbmUhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC50b2tlblR5cGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1jYXJkLnRva2VuVHlwZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbiNiYWNrQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNiYWNrQnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lIWltcG9ydGFudDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmlvbi1pdGVtLmVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cblxuaW9uLWl0ZW0uZXJyb3Igc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1ub3RlLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tbm90ZS5lcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/create-token/create-token.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-token/create-token.page.ts ***!
  \*********************************************************/
/*! exports provided: CreateTokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTokenPage", function() { return CreateTokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CreateTokenPage = class CreateTokenPage {
    constructor(api, formBuilder, alertController, toastController) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.toastController = toastController;
        this.advancedFormInputsChecked = { description: false, icon: false, proof: false, nft: false };
        this.basic = false;
        this.advanced = false;
        this.loading = false;
        this.success = false;
        this.myNFT = 'ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE';
        this.customToken = {
            name: '',
            amount: 0,
            icon: '',
            proof: '',
            script: '',
            description: ''
        };
        this.descrEntry = {
            isChecked: false
        };
        this.iconEntry = {
            isChecked: false
        };
        this.proofEntry = {
            isChecked: false
        };
        this.nft = {
            isNonFungible: false
        };
    }
    ionViewDidEnter() { }
    ngOnInit() {
        this.tokenCreationForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(255)]],
            description: '',
            script: '',
            icon: '',
            proof: ''
        });
    }
    toggleBasicAnimation() {
        this.advancedFormInputsChecked.description = false;
        this.advancedFormInputsChecked.icon = false;
        this.advancedFormInputsChecked.nft = false;
        this.advancedFormInputsChecked.proof = false;
        this.basic = true;
        document.getElementById('listCardOptions').style.display = 'none';
        document.getElementById('footer').style.display = 'block';
        document.getElementById('createTknBtn2').style.display = 'block';
        document.getElementById('cardText').innerHTML = 'Enter Your Token Details';
        document.getElementById('backBtn').style.display = 'block';
    }
    toggleAdvAnimation() {
        this.advanced = false;
        if (this.advancedFormInputsChecked.description === false && this.advancedFormInputsChecked.icon === false
            && this.advancedFormInputsChecked.nft === false && this.advancedFormInputsChecked.proof === false) {
            this.advanced = false;
            this.presentAlert('Advanced Token Creator', 'You have to pick an advanced token feature before proceeding.', 'Error');
        }
        else {
            this.advanced = true;
            document.getElementById('listCardOptions').style.display = 'none';
            document.getElementById('footer').style.display = 'block';
            document.getElementById('createTknBtn2').style.display = 'block';
            document.getElementById('cardText').innerHTML = 'Enter Your Token Details';
            document.getElementById('backBtn').style.display = 'block';
        }
    }
    toggleBackAnimation() {
        document.getElementById('backBtn').style.display = 'none';
        this.advanced = false;
        this.basic = false;
        this.resetForm();
        document.getElementById('cardText').innerHTML = 'Choose A Token Type';
        document.getElementById('listCardOptions').style.display = 'block';
        document.getElementById('tokenCreationForm').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        document.getElementById('createTknBtn2').style.display = 'none';
    }
    presentToast(msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                color: type,
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }],
                keyboardClose: true,
                translucent: true,
                position: 'top'
            });
            toast.present();
        });
    }
    presentAlert(hdr, message, subtitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alertContainer',
                header: hdr,
                subHeader: subtitle,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    createTokenAdvanced() {
        this.loading = true;
        const newToken = this.tokenCreationForm.value;
        if (this.advancedFormInputsChecked.nft) {
            newToken.script = this.myNFT; // script for non-fungible
            this.api.createToken(newToken).then((res) => {
                if (res.status) {
                    this.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
                    this.toggleBackAnimation();
                }
                else {
                    this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
                }
            });
        }
        else {
            newToken.script = 'RETURN TRUE'; // default script to spend token
            this.api.createToken(newToken).then((res) => {
                if (res.status) {
                    this.presentAlert('Success', 'Token ' + this.customToken.name + ' has been created.', 'Token Creation Status');
                    this.toggleBackAnimation();
                }
                else {
                    this.presentAlert('Something\'s wrong!', res.message, 'Token Creation Status');
                }
            });
        }
    }
    resetForm() {
        this.nameText.value = '';
        this.amountRef.value = '';
        this.proofURL.value = '';
        this.iconURL.value = '';
        this.description.value = '';
        this.iconEntry.isChecked = false;
        this.proofEntry.isChecked = false;
        this.nft.isNonFungible = false;
    }
    get name() {
        return this.tokenCreationForm.get('name');
    }
    get descr() {
        return this.tokenCreationForm.get('description');
    }
    get icon() {
        return this.tokenCreationForm.get('icon');
    }
    get proof() {
        return this.tokenCreationForm.get('proof');
    }
    get amount() {
        return this.tokenCreationForm.get('amount');
    }
};
CreateTokenPage.ctorParameters = () => [
    { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameTextArea', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], CreateTokenPage.prototype, "nameText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], CreateTokenPage.prototype, "amountRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('proofURL', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], CreateTokenPage.prototype, "proofURL", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iconURL', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], CreateTokenPage.prototype, "iconURL", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('description', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"])
], CreateTokenPage.prototype, "description", void 0);
CreateTokenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-token',
        template: __webpack_require__(/*! raw-loader!./create-token.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-token/create-token.page.html"),
        styles: [__webpack_require__(/*! ./create-token.page.scss */ "./src/app/pages/create-token/create-token.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_minima_api_service__WEBPACK_IMPORTED_MODULE_2__["MinimaApiService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], CreateTokenPage);



/***/ })

}]);
//# sourceMappingURL=pages-create-token-create-token-module-es2015.js.map