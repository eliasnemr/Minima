(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/core.css":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/core.css ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\n\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n\n.menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n          transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n/*# sourceMappingURL=core.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsNkZBQUE7QUNQRjs7QURTQTtFQUNFLDBEQUFBO0FDTkY7O0FEU0E7RUFDRSwwQ0FBQTtBQ05GOztBRFNBO0VBQ0UsdUNBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEc0JBO0VBQ0Usc0JBQUE7QUNuQkY7O0FENENFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDL0JGOztBRG1DRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ3RCRjs7QUQwQkU7RUFUQSwrREFBQTtFQUNBLDJFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNiRjs7QURpQkU7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNKRjs7QURRRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0tGOztBRERFO0VBVEEsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDY0Y7O0FEVkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUN1QkY7O0FEbkJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDZ0NGOztBRDVCRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQ3lDRjs7QUQ1QkE7RUV1UE0sT0Z0UHVCO0VFdVB2QixRRnZQaUI7RUVnUnJCLE1GaFJrQjtFRWlSbEIsU0ZqUndCO0VBRXhCLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVR3hDK0I7QUZ1RWpDOztBRDVCQTtFQUNFLGtCQUFBO0FDK0JGOztBRDVCQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQytCRjs7QUQ1QkE7RUFDRSxVQUFBO0FDK0JGOztBRDVCQTtFQUNFLGNBQUE7QUMrQkY7O0FEeEJBO0VBQ0UsNkJBQUE7QUMyQkY7O0FEeEJBO0VBQ0U7SUFDRSxpREFBQTtFQzJCRjtBQUNGOztBRHZCQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSx3REFBQTtJQUNBLG9EQUFBO0lBQ0Esc0RBQUE7RUN5QkY7QUFDRjs7QUR0QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDd0JGO0FBQ0Y7O0FEakJBOztFQUVFLGNBQUE7QUNtQkY7O0FEWEE7RUVrV00seUNBQUE7VUFBQSxpQ0FBQTtBRG5WTjs7QURYQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUlBLG9CQUFBO0FDV0Y7O0FEUkE7RUFDRSwyQ0k3SytCO0FId0xqQzs7QURSQTtFQUNFLDBDSTlLK0I7QUh5TGpDOztBREpBO0VBQ0UsNENLNUw4QjtBSm1NaEM7O0FESkE7RUFDRSw0Q0toTThCO0FKdU1oQzs7QUFFQSxtQ0FBbUMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/flex-utils.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/flex-utils.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-align-self-start {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start {\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n}\n\n.ion-justify-content-center {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.ion-justify-content-end {\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between {\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly {\n  -webkit-box-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n\n.ion-align-items-start {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n\n.ion-align-items-center {\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\n.ion-align-items-end {\n  -webkit-box-align: end !important;\n          align-items: flex-end !important;\n}\n\n.ion-align-items-stretch {\n  -webkit-box-align: stretch !important;\n          align-items: stretch !important;\n}\n\n.ion-align-items-baseline {\n  -webkit-box-align: baseline !important;\n          align-items: baseline !important;\n}\n\n/*# sourceMappingURL=flex-utils.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxpQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsK0JBQUE7QUNQRjs7QURVQTtFQUNFLDZCQUFBO0FDUEY7O0FEVUE7RUFDRSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0UsK0JBQUE7QUNQRjs7QURVQTtFQUNFLDJCQUFBO0FDUEY7O0FEY0E7RUFDRSwwQkFBQTtBQ1hGOztBRGNBO0VBQ0UsNEJBQUE7QUNYRjs7QURjQTtFQUNFLGtDQUFBO0FDWEY7O0FEa0JBO0VBQ0Usa0NBQUE7VUFBQSxzQ0FBQTtBQ2ZGOztBRGtCQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7QUNmRjs7QURrQkE7RUFDRSxnQ0FBQTtVQUFBLG9DQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjs7QURrQkE7RUFDRSxvQ0FBQTtVQUFBLHlDQUFBO0FDZkY7O0FEa0JBO0VBQ0UseUNBQUE7VUFBQSx3Q0FBQTtBQ2ZGOztBRHNCQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usb0NBQUE7VUFBQSw4QkFBQTtBQ25CRjs7QURzQkE7RUFDRSxpQ0FBQTtVQUFBLGdDQUFBO0FDbkJGOztBRHNCQTtFQUNFLHFDQUFBO1VBQUEsK0JBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usc0NBQUE7VUFBQSxnQ0FBQTtBQ25CRjs7QUFFQSx5Q0FBeUMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/float-elements.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/float-elements.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-float-left {\n  float: left !important;\n}\n\n.ion-float-right {\n  float: right !important;\n}\n\n.ion-float-start {\n  float: left !important;\n}\n\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n\n.ion-float-end {\n  float: right !important;\n}\n\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n\n/*# sourceMappingURL=float-elements.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJO0VDbWFFLHNCQUFBO0FDL2FOOztBRmdCSTtFQytaRSx1QkFBQTtBQzNhTjs7QUZnQkk7RUM2WUUsc0JBQUE7QUN6Wk47O0FENExXO0VBZ09MLHVCQUFBO0FDelpOOztBRmFJO0VDZ1pFLHVCQUFBO0FDelpOOztBRHFMVztFQXVPTCxzQkFBQTtBQ3paTjs7QUQ0R0k7RURsSEE7SUNtYUUsc0JBQUE7RUN4Wko7O0VGUEU7SUMrWkUsdUJBQUE7RUNwWko7O0VGUEU7SUM2WUUsc0JBQUE7RUNsWUo7RURxS1M7SUFnT0wsdUJBQUE7RUNsWUo7O0VGVkU7SUNnWkUsdUJBQUE7RUNsWUo7RUQ4SlM7SUF1T0wsc0JBQUE7RUNsWUo7QUFDRjs7QURvRkk7RURsSEE7SUNtYUUsc0JBQUE7RUNqWUo7O0VGOUJFO0lDK1pFLHVCQUFBO0VDN1hKOztFRjlCRTtJQzZZRSxzQkFBQTtFQzNXSjtFRDhJUztJQWdPTCx1QkFBQTtFQzNXSjs7RUZqQ0U7SUNnWkUsdUJBQUE7RUMzV0o7RUR1SVM7SUF1T0wsc0JBQUE7RUMzV0o7QUFDRjs7QUQ2REk7RURsSEE7SUNtYUUsc0JBQUE7RUMxV0o7O0VGckRFO0lDK1pFLHVCQUFBO0VDdFdKOztFRnJERTtJQzZZRSxzQkFBQTtFQ3BWSjtFRHVIUztJQWdPTCx1QkFBQTtFQ3BWSjs7RUZ4REU7SUNnWkUsdUJBQUE7RUNwVko7RURnSFM7SUF1T0wsc0JBQUE7RUNwVko7QUFDRjs7QURzQ0k7RURsSEE7SUNtYUUsc0JBQUE7RUNuVko7O0VGNUVFO0lDK1pFLHVCQUFBO0VDL1VKOztFRjVFRTtJQzZZRSxzQkFBQTtFQzdUSjtFRGdHUztJQWdPTCx1QkFBQTtFQzdUSjs7RUYvRUU7SUNnWkUsdUJBQUE7RUM3VEo7RUR5RlM7SUF1T0wsc0JBQUE7RUM3VEo7QUFDRjs7QUFFQSw2Q0FBNkMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/normalize.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/normalize.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "audio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*# sourceMappingURL=normalize.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7O0VBSUUsd0JBQUE7QUNORjs7QURXQTtFQUNFLGFBQUE7RUFFQSxTQUFBO0FDVEY7O0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7O0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7O0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7O0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7O0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjs7QURnQ0E7RUFDRSxjQUFBO0FDN0JGOztBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjs7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGOztBRDhDQTtFQUNFLGNBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM3Q0Y7O0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGOztBRHNEQTs7O0VBR0UsZUFBQTtFQUVBLDBCQUFBO0FDcERGOztBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGOztBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjs7QUR3REE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUN0REY7O0FEeURBO0VBQ0UsZUFBQTtBQ3RERjs7QUQwREE7OztFQUdFLGVBQUE7QUN2REY7O0FEMkRBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDekRGOztBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7O0FEbUVBOztFQUVFLFlBQUE7QUNoRUY7O0FEc0VBOztFQUVFLHdCQUFBO0FDbkVGOztBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7O0FEMkVBOztFQUVFLFVBQUE7QUN4RUY7O0FBRUEsd0NBQXdDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/padding.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/padding.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n/*# sourceMappingURL=padding.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQzhORSxlRDVOZTtFQzZOZixnQkQ3TmU7RUNpUWpCLGNEalFpQjtFQ2tRakIsaUJEbFFpQjtBRWJuQjs7QUZnQkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQ3lORSxzQ0Q1T007RUM2T04sdUNEN09NO0VDNlFSLHFDRDdRUTtFQzhRUix3Q0Q5UVE7QUVVVjs7QURzT007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ0R6UEE7SUMwUEEsOENEMVBBO0lDMlBBLDZDRDNQQTtJQzRQQSw0Q0Q1UEE7RUVtQlI7QUFDRjs7QUZJQTtFQUNFLHVDQUFBO0VDb1BBLHFDRDdRUTtBRXlCVjs7QUZLQTtFQUNFLHlDQUFBO0VDNk1FLHNDRDVPTTtBRTZCVjs7QURtTk07RUFDRTtJQUVJLG1CQUFBO0lBTUYsK0NEelBBO0lDMFBBLDhDRDFQQTtFRW1DUjtBQUNGOztBRkFBO0VBQ0UsdUNBQUE7RUN3TUUsdUNEN09NO0FFeUNWOztBRHVNTTtFQUNFO0lBS0ksb0JBQUE7SUFLRiw2Q0QzUEE7SUM0UEEsNENENVBBO0VFK0NSO0FBQ0Y7O0FGTkE7RUFDRSwwQ0FBQTtFQ21PQSx3Q0Q5UVE7QUVxRFY7O0FGTEE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VDMk5BLHFDRDdRUTtFQzhRUix3Q0Q5UVE7QUUyRFY7O0FGSkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VDbUxFLHNDRDVPTTtFQzZPTix1Q0Q3T007QUVpRVY7O0FEK0tNO0VBQ0U7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NEelBBO0lDMFBBLDhDRDFQQTtJQzJQQSw2Q0QzUEE7SUM0UEEsNENENVBBO0VFMEVSO0FBQ0Y7O0FGVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUNrS0UsY0RoS2M7RUNpS2QsZURqS2M7RUNxTWhCLGFEck1nQjtFQ3NNaEIsZ0JEdE1nQjtBRWNsQjs7QUZYQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VDNkpFLG9DRDNPSztFQzRPTCxxQ0Q1T0s7RUM0UVAsbUNENVFPO0VDNlFQLHNDRDdRTztBRWdHVDs7QUQrSU07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q0R4UEQ7SUN5UEMsNENEelBEO0lDMFBDLDJDRDFQRDtJQzJQQywwQ0QzUEQ7RUV5R1A7QUFDRjs7QUZ2QkE7RUFDRSxxQ0FBQTtFQ3dMQSxtQ0Q1UU87QUUrR1Q7O0FGdEJBO0VBQ0UsdUNBQUE7RUNpSkUsb0NEM09LO0FFbUhUOztBRDRITTtFQUNFO0lBRUksa0JBQUE7SUFNRiw2Q0R4UEQ7SUN5UEMsNENEelBEO0VFeUhQO0FBQ0Y7O0FGM0JBO0VBQ0UscUNBQUE7RUM0SUUscUNENU9LO0FFK0hUOztBRGdITTtFQUNFO0lBS0ksbUJBQUE7SUFLRiwyQ0QxUEQ7SUMyUEMsMENEM1BEO0VFcUlQO0FBQ0Y7O0FGakNBO0VBQ0Usd0NBQUE7RUN1S0Esc0NEN1FPO0FFMklUOztBRmhDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUMrSkEsbUNENVFPO0VDNlFQLHNDRDdRTztBRWlKVDs7QUYvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VDdUhFLG9DRDNPSztFQzRPTCxxQ0Q1T0s7QUV1SlQ7O0FEd0ZNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNEeFBEO0lDeVBDLDRDRHpQRDtJQzBQQywyQ0QxUEQ7SUMyUEMsMENEM1BEO0VFZ0tQO0FBQ0Y7O0FBRUEsc0NBQXNDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/structure.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/structure.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n/*# sourceMappingURL=structure.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxzQkFBQTtFQUVBLDZDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtLQUFBLDJCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VFNkNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFvS0UsY0ZoTmM7RUVpTmQsZUZqTmM7RUVxUGhCLGFGclBnQjtFRXNQaEIsZ0JGdFBnQjtFRWdOZCxlRi9NZTtFRWdOZixnQkZoTmU7RUVvUGpCLGNGcFBpQjtFRXFQakIsaUJGclBpQjtFQUVqQixlQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO0tBQUEsMkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDYkY7O0FBRUEsd0NBQXdDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-alignment.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/text-alignment.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-text-center {\n  text-align: center !important;\n}\n\n.ion-text-justify {\n  text-align: justify !important;\n}\n\n.ion-text-start {\n  text-align: start !important;\n}\n\n.ion-text-end {\n  text-align: end !important;\n}\n\n.ion-text-left {\n  text-align: left !important;\n}\n\n.ion-text-right {\n  text-align: right !important;\n}\n\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n\n/*# sourceMappingURL=text-alignment.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJO0VBQ0UsNkJBQUE7QUNiTjs7QURnQkk7RUFDRSw4QkFBQTtBQ2JOOztBRGdCSTtFQUNFLDRCQUFBO0FDYk47O0FEZ0JJO0VBQ0UsMEJBQUE7QUNiTjs7QURnQkk7RUFDRSwyQkFBQTtBQ2JOOztBRGdCSTtFQUNFLDRCQUFBO0FDYk47O0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjs7QURnQkk7RUFDRSw4QkFBQTtBQ2JOOztBQ2tHSTtFRmxIQTtJQUNFLDZCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDBCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDJCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKO0FBQ0Y7O0FDZ0VJO0VGbEhBO0lBQ0UsNkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7QUFDRjs7QUMrQkk7RUZsSEE7SUFDRSw2QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwwQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwyQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjtBQUNGOztBQ0ZJO0VGbEhBO0lBQ0UsNkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7QUFDRjs7QUFFQSw2Q0FBNkMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-transformation.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/text-transformation.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n/*# sourceMappingURL=text-transformation.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjs7QURnQkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47O0FEZ0JJO0VBQ0UseURBQUE7RUFDQSxxQ0FBQTtBQ2JOOztBQ21ISTtFRmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNHSjtBQUNGOztBQ2tHSTtFRmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUJKO0FBQ0Y7O0FDa0ZJO0VGbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtQ0o7QUFDRjs7QUNrRUk7RUZsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21ESjtBQUNGOztBQUVBLGtEQUFrRCIsImZpbGUiOiJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIn0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/typography.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/typography.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/*# sourceMappingURL=typography.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkE7RUFDRSxtQ0FBQTtBQzlCRjs7QURpQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDOUJGOztBRGlDQTs7Ozs7O0VFK09FLGdCRnpPZ0I7RUUwT2hCLG1CRjFPNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjs7QURrQ0E7RUVrT0UsZ0JGak9nQjtFQUVoQixlQTFDNkI7QUNTL0I7O0FEb0NBO0VFNE5FLGdCRjNOZ0I7RUFFaEIsZUE3QzZCO0FDVS9COztBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjs7QUR1Q0E7RUFDRSxlQS9DNkI7QUNXL0I7O0FEdUNBO0VBQ0UsZUFoRDZCO0FDWS9COztBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjs7QUR1Q0E7RUFDRSxjQUFBO0FDcENGOztBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7O0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxlQUFBO0FDdkNGOztBQUVBLHlDQUF5QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIn0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n          transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n.ion-justify-content-end {\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  -webkit-box-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n.ion-align-items-center {\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n.ion-align-items-end {\n  -webkit-box-align: end !important;\n          align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  -webkit-box-align: stretch !important;\n          align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  -webkit-box-align: baseline !important;\n          align-items: baseline !important;\n}\nbody.dark {\n  --ion-item-selected: #223649;\n  --ion-m-background: #001C32;\n  --card-header-color: #111417;\n  --ion-card-color: #001C32;\n  --minima-text: #FAFAFF;\n  --minima-icons: #FAFAFF;\n  /** primary **/\n  --ion-color-primary: #317aff;\n  --ion-color-primary-rgb: 49,122,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #2b6be0;\n  --ion-color-primary-tint: #4687ff;\n  /** secondary **/\n  --ion-color-secondary: #FF512F;\n  --ion-color-secondary-rgb: 255,81,47;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0,0,0;\n  --ion-color-secondary-shade: #e04729;\n  --ion-color-secondary-tint: #ff6244;\n  /** tertiary **/\n  --ion-color-tertiary: #FAFAFF;\n  --ion-color-tertiary-rgb: 250,250,255;\n  /** icons **/\n  --ion-color-icons: #FF435B;\n  --ion-color-icons-rgb:255, 81, 47;\n  --ion-color-success: #69bb7b;\n  --ion-color-success-rgb: 105,187,123;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #5ca56c;\n  --ion-color-success-tint: #78c288;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255,213,52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #d33939;\n  --ion-color-danger-rgb: 211,57,57;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ba3232;\n  --ion-color-danger-tint: #d74d4d;\n  --ion-color-dark: #000000;\n  --ion-color-dark-rgb: 244,245,248;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34,36,40;\n  /** ion-chip color */\n  --ion-color-chip: #1D3147;\n  /** Token Card Colors */\n  --ion-color-token-cards: #F7F7FE;\n  --ion-color-token-cards-rgb: 247,247,254;\n  --ion-color-token-cards-contrast: #000000;\n  --ion-color-token-cards-contrast-rgb: 0,0,0;\n  --ion-color-token-cards-shade: #d9d9e0;\n  --ion-color-token-cards-tint: #f8f8fe;\n  --ion-color-line: rgba(250,250,255, 0.1);\n}\nbody.dark .borders {\n  border: 1px solid rgba(250, 250, 255, 0.1);\n}\nbody.dark .border-b {\n  border-bottom: 1px solid rgba(250, 250, 255, 0.1);\n}\nbody.dark .border-t {\n  border-top: 1px solid rgba(250, 250, 255, 0.1);\n}\nbody.dark .split-pane-md {\n  --border: 1px solid rgba(250,250,255, 0.1);\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-m-background: #001C32;\n  --card-header-color: #111417;\n  --ion-card-color: #001C32;\n  --ion-background-color: #001C32;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-toolbar-background: #001C32;\n  --ion-item-background: #001C32;\n  --ion-item-background-activated: #001C32;\n}\n.md body.dark {\n  --card-header-color: #001C32;\n  --ion-card-color: #001C32;\n  --ion-item-selected: #223649;\n  --minima-text: #FAFAFF;\n  --ion-background-color: #001C32;\n  --ion-background-color-rgb: 18,18,18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #222222;\n  --ion-item-background: #001C32;\n  --ion-color-step-850: #fff;\n}\n/* mini-term.page.ts popover */\n.terminal-pop ion-backdrop {\n  opacity: 0.4 !important;\n}\n.terminal-pop .popover-content {\n  overflow-y: hidden;\n  max-height: 65px !important;\n  max-width: 148px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvZ2xvYmFsLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9jb3JlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5nbG9iYWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lm1kLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvc3RydWN0dXJlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZGlzcGxheS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbG9hdC1lbGVtZW50cy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LWFsaWdubWVudC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxleC11dGlscy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyIsInNyYy9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0VBQUE7QUFXQSw0REFBQTtBQ0hBO0VBQ0UsNkZBQUE7QUNQRjtBRFNBO0VBQ0UsMERBQUE7QUNORjtBRFNBO0VBQ0UsMENBQUE7QUNORjtBRFNBO0VBQ0UsdUNBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7QUNORjtBRG1CQTtFQUNFLGdCQUFBO0FDaEJGO0FEc0JBO0VBQ0Usc0JBQUE7QUNuQkY7QUQ0Q0U7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUMvQkY7QURtQ0U7RUFUQSxnRUFBQTtFQUNBLDZFQUFBO0VBQ0EsMEVBQUE7RUFDQSwyRkFBQTtFQUNBLHVFQUFBO0VBQ0EscUVBQUE7QUN0QkY7QUQwQkU7RUFUQSwrREFBQTtFQUNBLDJFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNiRjtBRGlCRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0pGO0FEUUU7RUFUQSw4REFBQTtFQUNBLDBFQUFBO0VBQ0Esd0VBQUE7RUFDQSxtRkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNLRjtBRERFO0VBVEEsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDY0Y7QURWRTtFQVRBLDREQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQ3VCRjtBRG5CRTtFQVRBLDZEQUFBO0VBQ0EsMkVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ2dDRjtBRDVCRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQ3lDRjtBRDVCQTtFRXVQTSxPRnRQdUI7RUV1UHZCLFFGdlBpQjtFRWdSckIsTUZoUmtCO0VFaVJsQixTRmpSd0I7RUFFeEIsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVHeEMrQjtBRnVFakM7QUQ1QkE7RUFDRSxrQkFBQTtBQytCRjtBRDVCQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQytCRjtBRDVCQTtFQUNFLFVBQUE7QUMrQkY7QUQ1QkE7RUFDRSxjQUFBO0FDK0JGO0FEeEJBO0VBQ0UsNkJBQUE7QUMyQkY7QUR4QkE7RUFDRTtJQUNFLGlEQUFBO0VDMkJGO0FBQ0Y7QUR2QkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0Esd0RBQUE7SUFDQSxvREFBQTtJQUNBLHNEQUFBO0VDeUJGO0FBQ0Y7QUR0QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDd0JGO0FBQ0Y7QURqQkE7O0VBRUUsY0FBQTtBQ21CRjtBRFhBO0VFa1dNLHlDQUFBO1VBQUEsaUNBQUE7QURuVk47QURYQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUlBLG9CQUFBO0FDV0Y7QURSQTtFQUNFLDJDSTdLK0I7QUh3TGpDO0FEUkE7RUFDRSwwQ0k5SytCO0FIeUxqQztBREpBO0VBQ0UsNENLNUw4QjtBSm1NaEM7QURKQTtFQUNFLDRDS2hNOEI7QUp1TWhDO0FGbE1BLHdDQUFBO0FPUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtBQzdDRjtBRDRDQTtFQUNFLGlCQUFBO0FDN0NGO0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7QURnREE7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM5Q0Y7QURzREE7OztFQUdFLGVBQUE7RUFFQSwwQkFBQTtBQ3BERjtBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGO0FEd0RBOztFQUVFLG9CQUFBO0FDckRGO0FEd0RBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3hKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFTjZDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBb0tFLGNNaE5jO0VOaU5kLGVNak5jO0VOcVBoQixhTXJQZ0I7RU5zUGhCLGdCTXRQZ0I7RU5nTmQsZU0vTWU7RU5nTmYsZ0JNaE5lO0VOb1BqQixjTXBQaUI7RU5xUGpCLGlCTXJQaUI7RUFFakIsZUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0NBQUE7RUFFQSxnQkFBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7RUFFQSx5QkFBQTtFQUVBLHFCQUFBO0VBRUEsMkJBQUE7RUFFQSw4QkFBQTtLQUFBLDJCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQ2JGO0FDZEE7RUFDRSxtQ0FBQTtBQzlCRjtBRGlDQTtFQUNFLDZCQUFBO0VBQ0Esd0NBQUE7QUM5QkY7QURpQ0E7Ozs7OztFUitPRSxnQlF6T2dCO0VSME9oQixtQlExTzRCO0VBRTVCLGdCQXhDNkI7RUEwQzdCLGdCQXZDNkI7QUNRL0I7QURrQ0E7RVJrT0UsZ0JRak9nQjtFQUVoQixlQTFDNkI7QUNTL0I7QURvQ0E7RVI0TkUsZ0JRM05nQjtFQUVoQixlQTdDNkI7QUNVL0I7QURzQ0E7RUFDRSxlQTlDNkI7QUNVL0I7QUR1Q0E7RUFDRSxlQS9DNkI7QUNXL0I7QUR1Q0E7RUFDRSxlQWhENkI7QUNZL0I7QUR1Q0E7RUFDRSxlQWpENkI7QUNhL0I7QUR1Q0E7RUFDRSxjQUFBO0FDcENGO0FEdUNBOztFQUVFLGtCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7RUFFQSx3QkFBQTtBQ3ZDRjtBRDBDQTtFQUNFLFdBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxlQUFBO0FDdkNGO0FDdERBO0VBQ0Usd0JBQUE7QUNQRjtBRGlCSTtFQUNFLHdCQUFBO0FDZE47QURxQkk7RUFDRSx3QkFBQTtBQ2xCTjtBWHNISTtFVTdHQTtJQUNFLHdCQUFBO0VDTEo7QUFDRjtBWHlKSTtFVTlJQTtJQUNFLHdCQUFBO0VDUko7QUFDRjtBWDJHSTtFVTdHQTtJQUNFLHdCQUFBO0VDS0o7QUFDRjtBWCtJSTtFVTlJQTtJQUNFLHdCQUFBO0VDRUo7QUFDRjtBWGlHSTtFVTdHQTtJQUNFLHdCQUFBO0VDZUo7QUFDRjtBWHFJSTtFVTlJQTtJQUNFLHdCQUFBO0VDWUo7QUFDRjtBWHVGSTtFVTdHQTtJQUNFLHdCQUFBO0VDeUJKO0FBQ0Y7QVgySEk7RVU5SUE7SUFDRSx3QkFBQTtFQ3NCSjtBQUNGO0FkL0JBLGlEQUFBO0FlSkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFWjhORSxlWTVOZTtFWjZOZixnQlk3TmU7RVppUWpCLGNZalFpQjtFWmtRakIsaUJZbFFpQjtBQ2JuQjtBRGdCQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VaeU5FLHNDWTVPTTtFWjZPTix1Q1k3T007RVo2UVIscUNZN1FRO0VaOFFSLHdDWTlRUTtBQ1VWO0Fic09NO0VBQ0U7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NZelBBO0laMFBBLDhDWTFQQTtJWjJQQSw2Q1kzUEE7SVo0UEEsNENZNVBBO0VDbUJSO0FBQ0Y7QURJQTtFQUNFLHVDQUFBO0Vab1BBLHFDWTdRUTtBQ3lCVjtBREtBO0VBQ0UseUNBQUE7RVo2TUUsc0NZNU9NO0FDNkJWO0FibU5NO0VBQ0U7SUFFSSxtQkFBQTtJQU1GLCtDWXpQQTtJWjBQQSw4Q1kxUEE7RUNtQ1I7QUFDRjtBREFBO0VBQ0UsdUNBQUE7RVp3TUUsdUNZN09NO0FDeUNWO0FidU1NO0VBQ0U7SUFLSSxvQkFBQTtJQUtGLDZDWTNQQTtJWjRQQSw0Q1k1UEE7RUMrQ1I7QUFDRjtBRE5BO0VBQ0UsMENBQUE7RVptT0Esd0NZOVFRO0FDcURWO0FETEE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VaMk5BLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUMyRFY7QURKQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RVptTEUsc0NZNU9NO0VaNk9OLHVDWTdPTTtBQ2lFVjtBYitLTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDWXpQQTtJWjBQQSw4Q1kxUEE7SVoyUEEsNkNZM1BBO0laNFBBLDRDWTVQQTtFQzBFUjtBQUNGO0FEVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RVprS0UsY1loS2M7RVppS2QsZVlqS2M7RVpxTWhCLGFZck1nQjtFWnNNaEIsZ0JZdE1nQjtBQ2NsQjtBRFhBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVo2SkUsb0NZM09LO0VaNE9MLHFDWTVPSztFWjRRUCxtQ1k1UU87RVo2UVAsc0NZN1FPO0FDZ0dUO0FiK0lNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNZeFBEO0laeVBDLDRDWXpQRDtJWjBQQywyQ1kxUEQ7SVoyUEMsMENZM1BEO0VDeUdQO0FBQ0Y7QUR2QkE7RUFDRSxxQ0FBQTtFWndMQSxtQ1k1UU87QUMrR1Q7QUR0QkE7RUFDRSx1Q0FBQTtFWmlKRSxvQ1kzT0s7QUNtSFQ7QWI0SE07RUFDRTtJQUVJLGtCQUFBO0lBTUYsNkNZeFBEO0laeVBDLDRDWXpQRDtFQ3lIUDtBQUNGO0FEM0JBO0VBQ0UscUNBQUE7RVo0SUUscUNZNU9LO0FDK0hUO0FiZ0hNO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLDJDWTFQRDtJWjJQQywwQ1kzUEQ7RUNxSVA7QUFDRjtBRGpDQTtFQUNFLHdDQUFBO0VadUtBLHNDWTdRTztBQzJJVDtBRGhDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RVorSkEsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2lKVDtBRC9CQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RVp1SEUsb0NZM09LO0VaNE9MLHFDWTVPSztBQ3VKVDtBYndGTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDWXhQRDtJWnlQQyw0Q1l6UEQ7SVowUEMsMkNZMVBEO0laMlBDLDBDWTNQRDtFQ2dLUDtBQUNGO0FDOUpJO0VkbWFFLHNCQUFBO0FlL2FOO0FEZ0JJO0VkK1pFLHVCQUFBO0FlM2FOO0FEZ0JJO0VkNllFLHNCQUFBO0FlelpOO0FmNExXO0VBZ09MLHVCQUFBO0FlelpOO0FEYUk7RWRnWkUsdUJBQUE7QWV6Wk47QWZxTFc7RUF1T0wsc0JBQUE7QWV6Wk47QWY0R0k7RWNsSEE7SWRtYUUsc0JBQUE7RWV4Wko7O0VEUEU7SWQrWkUsdUJBQUE7RWVwWko7O0VEUEU7SWQ2WUUsc0JBQUE7RWVsWUo7RWZxS1M7SUFnT0wsdUJBQUE7RWVsWUo7O0VEVkU7SWRnWkUsdUJBQUE7RWVsWUo7RWY4SlM7SUF1T0wsc0JBQUE7RWVsWUo7QUFDRjtBZm9GSTtFY2xIQTtJZG1hRSxzQkFBQTtFZWpZSjs7RUQ5QkU7SWQrWkUsdUJBQUE7RWU3WEo7O0VEOUJFO0lkNllFLHNCQUFBO0VlM1dKO0VmOElTO0lBZ09MLHVCQUFBO0VlM1dKOztFRGpDRTtJZGdaRSx1QkFBQTtFZTNXSjtFZnVJUztJQXVPTCxzQkFBQTtFZTNXSjtBQUNGO0FmNkRJO0VjbEhBO0lkbWFFLHNCQUFBO0VlMVdKOztFRHJERTtJZCtaRSx1QkFBQTtFZXRXSjs7RURyREU7SWQ2WUUsc0JBQUE7RWVwVko7RWZ1SFM7SUFnT0wsdUJBQUE7RWVwVko7O0VEeERFO0lkZ1pFLHVCQUFBO0VlcFZKO0VmZ0hTO0lBdU9MLHNCQUFBO0VlcFZKO0FBQ0Y7QWZzQ0k7RWNsSEE7SWRtYUUsc0JBQUE7RWVuVko7O0VENUVFO0lkK1pFLHVCQUFBO0VlL1VKOztFRDVFRTtJZDZZRSxzQkFBQTtFZTdUSjtFZmdHUztJQWdPTCx1QkFBQTtFZTdUSjs7RUQvRUU7SWRnWkUsdUJBQUE7RWU3VEo7RWZ5RlM7SUF1T0wsc0JBQUE7RWU3VEo7QUFDRjtBQ25HSTtFQUNFLDZCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNiTjtBRGdCSTtFQUNFLDBCQUFBO0FDYk47QURnQkk7RUFDRSwyQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FqQmtHSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw0QkFBQTtFQ29CSjs7RURqQkU7SUFDRSwwQkFBQTtFQ29CSjs7RURqQkU7SUFDRSwyQkFBQTtFQ29CSjs7RURqQkU7SUFDRSw0QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjtBQUNGO0FqQmdFSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjs7RURsREU7SUFDRSw0QkFBQTtFQ3FESjs7RURsREU7SUFDRSwwQkFBQTtFQ3FESjs7RURsREU7SUFDRSwyQkFBQTtFQ3FESjs7RURsREU7SUFDRSw0QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjtBQUNGO0FqQitCSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwwQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwyQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjtBQUNGO0FqQkZJO0VnQmxIQTtJQUNFLDZCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDRCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDBCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDJCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDRCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKO0FBQ0Y7QUNySkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7RUFDRSx5REFBQTtFQUNBLHFDQUFBO0FDYk47QW5CbUhJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNHSjtBQUNGO0FuQmtHSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUJKOztFRGhCRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21CSjtBQUNGO0FuQmtGSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQ0o7O0VEaENFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21DSjtBQUNGO0FuQmtFSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21ESjtBQUNGO0FDdEVBO0VBQ0UsaUNBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7QUNQRjtBRFVBO0VBQ0UsOEJBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsMkJBQUE7QUNQRjtBRGNBO0VBQ0UsMEJBQUE7QUNYRjtBRGNBO0VBQ0UsNEJBQUE7QUNYRjtBRGNBO0VBQ0Usa0NBQUE7QUNYRjtBRGtCQTtFQUNFLGtDQUFBO1VBQUEsc0NBQUE7QUNmRjtBRGtCQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7QUNmRjtBRGtCQTtFQUNFLGdDQUFBO1VBQUEsb0NBQUE7QUNmRjtBRGtCQTtFQUNFLHdDQUFBO0FDZkY7QURrQkE7RUFDRSxvQ0FBQTtVQUFBLHlDQUFBO0FDZkY7QURrQkE7RUFDRSx5Q0FBQTtVQUFBLHdDQUFBO0FDZkY7QURzQkE7RUFDRSxtQ0FBQTtVQUFBLGtDQUFBO0FDbkJGO0FEc0JBO0VBQ0Usb0NBQUE7VUFBQSw4QkFBQTtBQ25CRjtBRHNCQTtFQUNFLGlDQUFBO1VBQUEsZ0NBQUE7QUNuQkY7QURzQkE7RUFDRSxxQ0FBQTtVQUFBLCtCQUFBO0FDbkJGO0FEc0JBO0VBQ0Usc0NBQUE7VUFBQSxnQ0FBQTtBQ25CRjtBeEJqREE7RUFFRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBRUEsd0NBQUE7QXlCbkJGO0F6QnFCRTtFQUNFLDBDQUFBO0F5Qm5CSjtBekJxQkU7RUFDRSxpREFBQTtBeUJuQko7QXpCcUJFO0VBQ0UsOENBQUE7QXlCbkJKO0F6QnFCRTtFQUNFLDBDQUFBO0F5Qm5CSjtBekJ3QkE7OztFQUFBO0FBS0E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QXlCdEJGO0F6QitCQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBRUEsMEJBQUE7QXlCN0JGO0F6QmdDQSw4QkFBQTtBQUNFO0VBQ0UsdUJBQUE7QXlCN0JKO0F6QitCRTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBeUI1Qk4iLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcCBHbG9iYWwgQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQgQ1NTLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xuICovXG5cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG5cbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyc7XG5cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuXG5cbi8vQ1NTIEZhbGxiYWNrIFxuYm9keS5kYXJrIHtcblxuICAtLWlvbi1pdGVtLXNlbGVjdGVkOiAjMjIzNjQ5O1xuICAtLWlvbi1tLWJhY2tncm91bmQ6ICMwMDFDMzI7XG4gIC0tY2FyZC1oZWFkZXItY29sb3I6ICMxMTE0MTc7XG4gIC0taW9uLWNhcmQtY29sb3I6ICMwMDFDMzI7XG5cbiAgLS1taW5pbWEtdGV4dDogI0ZBRkFGRjtcbiAgLS1taW5pbWEtaWNvbnM6ICNGQUZBRkY7XG5cbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzMTdhZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA0OSwxMjIsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMyYjZiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzQ2ODdmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNGRjUxMkY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSw4MSw0NztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjZTA0NzI5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogI2ZmNjI0NDtcbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI0ZBRkFGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyNTAsMjUwLDI1NTtcblxuICAvKiogaWNvbnMgKiovXG4gIC0taW9uLWNvbG9yLWljb25zOiAjRkY0MzVCO1xuICAtLWlvbi1jb2xvci1pY29ucy1yZ2I6MjU1LCA4MSwgNDc7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzY5YmI3YjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEwNSwxODcsMTIzO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1Y2E1NmM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzc4YzI4ODtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMTEsNTcsNTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2JhMzIzMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNkNzRkNGQ7XG5cbiAgLS1pb24tY29sb3ItZGFyazogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG5cbiAgLyoqIGlvbi1jaGlwIGNvbG9yICovXG4gIC0taW9uLWNvbG9yLWNoaXA6ICMxRDMxNDc7XG5cbiAgLyoqIFRva2VuIENhcmQgQ29sb3JzICovXG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzOiAjRjdGN0ZFO1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1yZ2I6IDI0NywyNDcsMjU0O1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtc2hhZGU6ICNkOWQ5ZTA7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLXRpbnQ6ICNmOGY4ZmU7XG5cbiAgLS1pb24tY29sb3ItbGluZTogcmdiYSgyNTAsMjUwLDI1NSwgMC4xKTtcblxuICAuYm9yZGVycyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsMjUwLDI1NSwgMC4xKTtcbiAgfVxuICAuYm9yZGVyLWIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1MCwyNTAsMjU1LCAwLjEpO1xuICB9XG4gIC5ib3JkZXItdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLDI1MCwyNTUsIDAuMSk7XG4gIH1cbiAgLnNwbGl0LXBhbmUtbWQge1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsMjUwLDI1NSwgMC4xKTtcbiAgfVxuXG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWNhcmQtaGVhZGVyLWNvbG9yOiAjMTExNDE3O1xuICAtLWlvbi1jYXJkLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzAwMUMzMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDAxQzMyO1xufVxuXG5cbi8vIC8qXG4vLyAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuLy8gICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICovXG5cbi5tZCBib2R5LmRhcmsge1xuICAtLWNhcmQtaGVhZGVyLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1jYXJkLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1pdGVtLXNlbGVjdGVkOiAjMjIzNjQ5O1xuICAtLW1pbmltYS10ZXh0OiAjRkFGQUZGO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDFDMzI7XG5cbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNmZmY7XG59XG5cbi8qIG1pbmktdGVybS5wYWdlLnRzIHBvcG92ZXIgKi9cbiAgLnRlcm1pbmFsLXBvcCBpb24tYmFja2Ryb3Age1xuICAgIG9wYWNpdHk6IDAuNCAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXJtaW5hbC1wb3AgLnBvcG92ZXItY29udGVudCAge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgbWF4LWhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAgICAgbWF4LXdpZHRoOiAxNDhweCAhaW1wb3J0YW50O1xuICB9XG4iLG51bGwsImh0bWwuaW9zIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuaHRtbC5pb3MgaW9uLW1vZGFsIC5pb24tcGFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUgPiAuaW9uLXBhZ2Uuc3BsaXQtcGFuZS1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tcm91dGUsXG5pb24tcm91dGUtcmVkaXJlY3QsXG5pb24tcm91dGVyLFxuaW9uLXNlbGVjdC1vcHRpb24sXG5pb24tbmF2LWNvbnRyb2xsZXIsXG5pb24tbWVudS1jb250cm9sbGVyLFxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXG5pb24tbG9hZGluZy1jb250cm9sbGVyLFxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXG5pb24tcG9wb3Zlci1jb250cm9sbGVyLFxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXG4uaW9uLXBhZ2UtaGlkZGVuLFxuW2hpZGRlbl0ge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgIDAsICAwKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNzcy5tYXAgKi9cbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCJhdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cbiIsbnVsbCwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXG4iLG51bGwsImh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5oMiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10eXBvZ3JhcGh5LmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtdXAge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS1kb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1oaWRlLXNtLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuaW9uLWhpZGUtc20tZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuaW9uLWhpZGUtbWQtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1oaWRlLWxnLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuaW9uLWhpZGUtbGctZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24taGlkZS14bC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pb24taGlkZS14bC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5jc3MubWFwICovXG4iLG51bGwsIi5pb24tbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctc3RhcnQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctZW5kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1uby1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogMDtcbiAgLS1tYXJnaW4tZW5kOiAwO1xuICAtLW1hcmdpbi10b3A6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi10b3Age1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1zdGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1lbmQge1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tZW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSB7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5jc3MubWFwICovXG4iLG51bGwsIi5pb24tZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbG9hdC1lbGVtZW50cy5jc3MubWFwICovXG4iLG51bGwsIi5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC1hbGlnbm1lbnQuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLXRleHQtdXBwZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sb3dlcmNhc2Uge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWNhcGl0YWxpemUge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLXRleHQtc20tdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi10ZXh0LXhsLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MubWFwICovXG4iLG51bGwsIi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC11dGlscy5jc3MubWFwICovXG4iLCIvKlxuICogQXBwIEdsb2JhbCBDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dCBDU1MuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXG4gKi9cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MnO1xuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XG5ib2R5LmRhcmsge1xuICAtLWlvbi1pdGVtLXNlbGVjdGVkOiAjMjIzNjQ5O1xuICAtLWlvbi1tLWJhY2tncm91bmQ6ICMwMDFDMzI7XG4gIC0tY2FyZC1oZWFkZXItY29sb3I6ICMxMTE0MTc7XG4gIC0taW9uLWNhcmQtY29sb3I6ICMwMDFDMzI7XG4gIC0tbWluaW1hLXRleHQ6ICNGQUZBRkY7XG4gIC0tbWluaW1hLWljb25zOiAjRkFGQUZGO1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzMxN2FmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDQ5LDEyMiwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzJiNmJlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNDY4N2ZmO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNGRjUxMkY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSw4MSw0NztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjZTA0NzI5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogI2ZmNjI0NDtcbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogI0ZBRkFGRjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAyNTAsMjUwLDI1NTtcbiAgLyoqIGljb25zICoqL1xuICAtLWlvbi1jb2xvci1pY29uczogI0ZGNDM1QjtcbiAgLS1pb24tY29sb3ItaWNvbnMtcmdiOjI1NSwgODEsIDQ3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjNjliYjdiO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTA1LDE4NywxMjM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzVjYTU2YztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNzhjMjg4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjExLDU3LDU3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNiYTMyMzI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZDc0ZDRkO1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LDI0NSwyNDg7XG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuICAvKiogaW9uLWNoaXAgY29sb3IgKi9cbiAgLS1pb24tY29sb3ItY2hpcDogIzFEMzE0NztcbiAgLyoqIFRva2VuIENhcmQgQ29sb3JzICovXG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzOiAjRjdGN0ZFO1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1yZ2I6IDI0NywyNDcsMjU0O1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtc2hhZGU6ICNkOWQ5ZTA7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLXRpbnQ6ICNmOGY4ZmU7XG4gIC0taW9uLWNvbG9yLWxpbmU6IHJnYmEoMjUwLDI1MCwyNTUsIDAuMSk7XG59XG5ib2R5LmRhcmsgLmJvcmRlcnMge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwgMjUwLCAyNTUsIDAuMSk7XG59XG5ib2R5LmRhcmsgLmJvcmRlci1iIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1NSwgMC4xKTtcbn1cbmJvZHkuZGFyayAuYm9yZGVyLXQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjU1LCAwLjEpO1xufVxuYm9keS5kYXJrIC5zcGxpdC1wYW5lLW1kIHtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwyNTAsMjU1LCAwLjEpO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1tLWJhY2tncm91bmQ6ICMwMDFDMzI7XG4gIC0tY2FyZC1oZWFkZXItY29sb3I6ICMxMTE0MTc7XG4gIC0taW9uLWNhcmQtY29sb3I6ICMwMDFDMzI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDFDMzI7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDFDMzI7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwMDFDMzI7XG59XG5cbi5tZCBib2R5LmRhcmsge1xuICAtLWNhcmQtaGVhZGVyLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1jYXJkLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1pdGVtLXNlbGVjdGVkOiAjMjIzNjQ5O1xuICAtLW1pbmltYS10ZXh0OiAjRkFGQUZGO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDFDMzI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZmZmO1xufVxuXG4vKiBtaW5pLXRlcm0ucGFnZS50cyBwb3BvdmVyICovXG4udGVybWluYWwtcG9wIGlvbi1iYWNrZHJvcCB7XG4gIG9wYWNpdHk6IDAuNCAhaW1wb3J0YW50O1xufVxuXG4udGVybWluYWwtcG9wIC5wb3BvdmVyLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxNDhweCAhaW1wb3J0YW50O1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Minima Color Palette **/\n:root {\n  /** font-family **/\n  --ion-font-family: manrope-regular;\n  --ion-font-family-bold: manrope-bold;\n  --ion-font-family-light: manrope-light;\n  /** Light Skin **/\n  --ion-m-background: #FAFAFF;\n  --ion-m-background-rgb: rgb(240, 240, 250);\n  --ion-background-color: #FAFAFF;\n  /** primary **/\n  --ion-color-primary: #317aff;\n  --ion-color-primary-rgb: 49,122,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #2b6be0;\n  --ion-color-primary-tint: #4687ff;\n  /** secondary **/\n  --ion-color-secondary: #FF512F;\n  --ion-color-secondary-rgb: 255,81,47;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0,0,0;\n  --ion-color-secondary-shade: #e04729;\n  --ion-color-secondary-tint: #ff6244;\n  /** tertiary **/\n  --ion-color-tertiary: #001C32;\n  --ion-color-tertiary-rgb: 0,28,50;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #00192c;\n  --ion-color-tertiary-tint: #1a3347;\n  /** success **/\n  --ion-color-success: #69bb7b;\n  --ion-color-success-rgb: 105,187,123;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #5ca56c;\n  --ion-color-success-tint: #78c288;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255,206,0;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #d33939;\n  --ion-color-danger-rgb: 211,57,57;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ba3232;\n  --ion-color-danger-tint: #d74d4d;\n  /** icon **/\n  --ion-color-icon: #FF512F;\n  --ion-color-icon-rgb: 255,81,47;\n  --ion-color-icon-contrast: #000000;\n  --ion-color-icon-contrast-rgb: 0,0,0;\n  --ion-color-icon-shade: #e04729;\n  --ion-color-icon-tint: #ff6244;\n  /** gray 1 **/\n  --ion-color-gray-one: #C8C8D4;\n  --ion-color-gray-one-rgb: 200,200,212;\n  --ion-color-gray-one-contrast: #000000;\n  --ion-color-gray-one-contrast-rgb: 0,0,0;\n  --ion-color-gray-one-shade: #b0b0bb;\n  --ion-color-gray-one-tint: #ceced8;\n  /** gray 2 **/\n  --ion-color-gray-two: #FAFAFF;\n  --ion-color-gray-two-rgb: 250,250,255;\n  --ion-color-gray-two-contrast: #000000;\n  --ion-color-gray-two-contrast-rgb: 0,0,0;\n  --ion-color-gray-two-shade: #dcdce0;\n  --ion-color-gray-two-tint: #fbfbff;\n  /** gray 3 **/\n  --ion-color-gray-three: #AAAABE;\n  --ion-color-gray-three-rgb: 170,170,190;\n  --ion-color-gray-three-contrast: #000000;\n  --ion-color-gray-three-contrast-rgb: 0,0,0;\n  --ion-color-gray-three-shade: #9696a7;\n  --ion-color-gray-three-tint: #b3b3c5;\n  /** gray 4 **/\n  --ion-color-gray-four: #91919D;\n  --ion-color-gray-four-rgb: 145,145,157;\n  --ion-color-gray-four-contrast: #000000;\n  --ion-color-gray-four-contrast-rgb: 0,0,0;\n  --ion-color-gray-four-shade: #80808a;\n  --ion-color-gray-four-tint: #9c9ca7;\n  /** ion-chip color */\n  --ion-color-chip: #F7F7FE;\n  /** Token Card Colors */\n  --ion-color-token-cards: #F7F7FE;\n  --ion-color-token-cards-rgb: 247,247,254;\n  --ion-color-token-cards-contrast: #000000;\n  --ion-color-token-cards-contrast-rgb: 0,0,0;\n  --ion-color-token-cards-shade: #d9d9e0;\n  --ion-color-token-cards-tint: #f8f8fe;\n  /** custom Minima css vars **/\n  --minima-terminal-size: 12px;\n  --overflow: hidden;\n  --ion-color-selected: #001C32;\n  --ion-color-line: #fff;\n}\n:root .border-b {\n  border: none;\n}\n:root .border-t {\n  border: none;\n}\n:root .split-pane-md {\n  --border: 1px solid #001C32;\n}\n:root ion-menu-button {\n  width: 50px;\n  font-weight: 600;\n}\n.minima-numeric {\n  font-variant-numeric: tabular-nums;\n  float: right;\n  font-family: manrope-bold;\n}\n.minima-token {\n  font-family: manrope-bold;\n}\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  background: var(--ion-m-background);\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/** FONT FAMILIES */\n@font-face {\n  font-family: \"Monotype\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('monotype.ttf');\n}\n@font-face {\n  font-family: \"manrope-bold\";\n  src: url('manrope-bold.otf');\n}\n@font-face {\n  font-family: \"manrope-light\";\n  src: url('manrope-light.otf');\n}\n@font-face {\n  font-family: \"manrope-regular\";\n  src: url('manrope-regular.otf');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsMkJBQUE7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFHQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0FDYko7QURrQkk7RUFDQyxZQUFBO0FDaEJMO0FEa0JJO0VBQ0UsWUFBQTtBQ2hCTjtBRGtCSTtFQUNFLDJCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDakJOO0FEc0JBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNuQkY7QURxQkE7RUFDRSx5QkFBQTtBQ2xCRjtBRHFCQTtFQUVFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsbUNBQUE7QUN0QkY7QURtQkU7RUFDRSxhQUFBO0FDakJKO0FEc0JBLG1CQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ25CRjtBRHNCQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNwQkY7QURzQkE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDcEJGO0FEc0JBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ3BCRiIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cbi8qKiBNaW5pbWEgQ29sb3IgUGFsZXR0ZSAqKi9cbiAgOnJvb3Qge1xuICAgIC8qKiBmb250LWZhbWlseSAqKi9cbiAgICAtLWlvbi1mb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICAgIC0taW9uLWZvbnQtZmFtaWx5LWJvbGQ6IG1hbnJvcGUtYm9sZDtcbiAgICAtLWlvbi1mb250LWZhbWlseS1saWdodDogbWFucm9wZS1saWdodDtcbiAgICAvKiogTGlnaHQgU2tpbiAqKi9cbiAgICAtLWlvbi1tLWJhY2tncm91bmQ6ICNGQUZBRkY7XG4gICAgLS1pb24tbS1iYWNrZ3JvdW5kLXJnYjogcmdiKDI0MCwgMjQwLCAyNTApO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGQUZBRkY7XG5cbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzE3YWZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA0OSwxMjIsMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMyYjZiZTA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNDY4N2ZmO1xuXG4gICAgLyoqIHNlY29uZGFyeSAqKi9cbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNGRjUxMkY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMjU1LDgxLDQ3O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICNlMDQ3Mjk7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZjYyNDQ7XG5cbiAgICAvKiogdGVydGlhcnkgKiovXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICMwMDFDMzI7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAwLDI4LDUwO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICMwMDE5MmM7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzFhMzM0NztcblxuICAgIC8qKiBzdWNjZXNzICoqL1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICM2OWJiN2I7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEwNSwxODcsMTIzO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1Y2E1NmM7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNzhjMjg4O1xuXG4gICAgLyoqIHdhcm5pbmcgKiovXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIwNiwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xuXG4gICAgLyoqIGRhbmdlciAqKi9cbiAgICAtLWlvbi1jb2xvci1kYW5nZXI6ICNkMzM5Mzk7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjExLDU3LDU3O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNiYTMyMzI7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNkNzRkNGQ7XG5cbiAgICAvKiogaWNvbiAqKi9cbiAgICAtLWlvbi1jb2xvci1pY29uOiAjRkY1MTJGO1xuICAgIC0taW9uLWNvbG9yLWljb24tcmdiOiAyNTUsODEsNDc7XG4gICAgLS1pb24tY29sb3ItaWNvbi1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1pY29uLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItaWNvbi1zaGFkZTogI2UwNDcyOTtcbiAgICAtLWlvbi1jb2xvci1pY29uLXRpbnQ6ICNmZjYyNDQ7XG5cbiAgICAvKiogZ3JheSAxICoqL1xuICAgIC0taW9uLWNvbG9yLWdyYXktb25lOiAjQzhDOEQ0O1xuICAgIC0taW9uLWNvbG9yLWdyYXktb25lLXJnYjogMjAwLDIwMCwyMTI7XG4gICAgLS1pb24tY29sb3ItZ3JheS1vbmUtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZ3JheS1vbmUtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1ncmF5LW9uZS1zaGFkZTogI2IwYjBiYjtcbiAgICAtLWlvbi1jb2xvci1ncmF5LW9uZS10aW50OiAjY2VjZWQ4O1xuICAgIC8qKiBncmF5IDIgKiovXG4gICAgLS1pb24tY29sb3ItZ3JheS10d286ICNGQUZBRkY7XG4gICAgLS1pb24tY29sb3ItZ3JheS10d28tcmdiOiAyNTAsMjUwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1ncmF5LXR3by1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1ncmF5LXR3by1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWdyYXktdHdvLXNoYWRlOiAjZGNkY2UwO1xuICAgIC0taW9uLWNvbG9yLWdyYXktdHdvLXRpbnQ6ICNmYmZiZmY7XG4gICAgLyoqIGdyYXkgMyAqKi9cbiAgICAtLWlvbi1jb2xvci1ncmF5LXRocmVlOiAjQUFBQUJFO1xuICAgIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtcmdiOiAxNzAsMTcwLDE5MDtcbiAgICAtLWlvbi1jb2xvci1ncmF5LXRocmVlLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1ncmF5LXRocmVlLXNoYWRlOiAjOTY5NmE3O1xuICAgIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtdGludDogI2IzYjNjNTtcbiAgICAvKiogZ3JheSA0ICoqL1xuICAgIC0taW9uLWNvbG9yLWdyYXktZm91cjogIzkxOTE5RDtcbiAgICAtLWlvbi1jb2xvci1ncmF5LWZvdXItcmdiOiAxNDUsMTQ1LDE1NztcbiAgICAtLWlvbi1jb2xvci1ncmF5LWZvdXItY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZ3JheS1mb3VyLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItZ3JheS1mb3VyLXNoYWRlOiAjODA4MDhhO1xuICAgIC0taW9uLWNvbG9yLWdyYXktZm91ci10aW50OiAjOWM5Y2E3OyAgIFxuICAgIC8qKiBpb24tY2hpcCBjb2xvciAqL1xuICAgIC0taW9uLWNvbG9yLWNoaXA6ICNGN0Y3RkU7XG5cbiAgICAvKiogVG9rZW4gQ2FyZCBDb2xvcnMgKi9cbiAgICAtLWlvbi1jb2xvci10b2tlbi1jYXJkczogI0Y3RjdGRTtcbiAgICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1yZ2I6IDI0NywyNDcsMjU0O1xuICAgIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtc2hhZGU6ICNkOWQ5ZTA7XG4gICAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtdGludDogI2Y4ZjhmZTtcblxuXG4gICAgLyoqIGN1c3RvbSBNaW5pbWEgY3NzIHZhcnMgKiovXG4gICAgLS1taW5pbWEtdGVybWluYWwtc2l6ZTogMTJweDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAtLWlvbi1jb2xvci1zZWxlY3RlZDogIzAwMUMzMjtcbiAgICAtLWlvbi1jb2xvci1saW5lOiAjZmZmO1xuXG4gICAgJGFsZXJ0LWlvcy1jb250ZW50LW1heC1oZWlnaHQ6NzAwcHggIWRlZmF1bHQ7XG4gICAgJGFsZXJ0LW1kLWNvbnRlbnQtbWF4LWhlaWdodDo0MDBweCAhZGVmYXVsdDtcblxuICAgIC5ib3JkZXItYiB7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgLmJvcmRlci10IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgLnNwbGl0LXBhbmUtbWQge1xuICAgICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMDAxQzMyO1xuICAgIH1cblxuICAgIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbi8vIEdsb2JhbFxuLm1pbmltYS1udW1lcmljIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuLm1pbmltYS10b2tlbiB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG4vLyBSZW1vdmUgc2Nyb2xsLWJhclxuaW9uLWNvbnRlbnQge1xuICAvLyBvdmVyd3JpdGUgaW5saW5lIHN0eWxlc1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cblxuLyoqIEZPTlQgRkFNSUxJRVMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01vbm90eXBlJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybCgnLi4vZm9udHMvbW9ub3R5cGUudHRmJyk7XG59XG4vLyBhcHAgZm9udHMgXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdtYW5yb3BlLWJvbGQnO1xuICBzcmM6IHVybCgnLi4vL2ZvbnRzL21hbnJvcGUtYm9sZC5vdGYnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ21hbnJvcGUtbGlnaHQnO1xuICBzcmM6IHVybCgnLi4vZm9udHMvbWFucm9wZS1saWdodC5vdGYnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ21hbnJvcGUtcmVndWxhcic7XG4gIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlLXJlZ3VsYXIub3RmJyk7XG59XG5cblxuIiwiLyoqIE1pbmltYSBDb2xvciBQYWxldHRlICoqL1xuOnJvb3Qge1xuICAvKiogZm9udC1mYW1pbHkgKiovXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIC0taW9uLWZvbnQtZmFtaWx5LWJvbGQ6IG1hbnJvcGUtYm9sZDtcbiAgLS1pb24tZm9udC1mYW1pbHktbGlnaHQ6IG1hbnJvcGUtbGlnaHQ7XG4gIC8qKiBMaWdodCBTa2luICoqL1xuICAtLWlvbi1tLWJhY2tncm91bmQ6ICNGQUZBRkY7XG4gIC0taW9uLW0tYmFja2dyb3VuZC1yZ2I6IHJnYigyNDAsIDI0MCwgMjUwKTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGRjtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzMTdhZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA0OSwxMjIsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMyYjZiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzQ2ODdmZjtcbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjRkY1MTJGO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAyNTUsODEsNDc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2UwNDcyOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZjYyNDQ7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICMwMDFDMzI7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMCwyOCw1MDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjMDAxOTJjO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjMWEzMzQ3O1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzY5YmI3YjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEwNSwxODcsMTIzO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1Y2E1NmM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzc4YzI4ODtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjA2LDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIxMSw1Nyw1NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjYmEzMjMyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2Q3NGQ0ZDtcbiAgLyoqIGljb24gKiovXG4gIC0taW9uLWNvbG9yLWljb246ICNGRjUxMkY7XG4gIC0taW9uLWNvbG9yLWljb24tcmdiOiAyNTUsODEsNDc7XG4gIC0taW9uLWNvbG9yLWljb24tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWljb24tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItaWNvbi1zaGFkZTogI2UwNDcyOTtcbiAgLS1pb24tY29sb3ItaWNvbi10aW50OiAjZmY2MjQ0O1xuICAvKiogZ3JheSAxICoqL1xuICAtLWlvbi1jb2xvci1ncmF5LW9uZTogI0M4QzhENDtcbiAgLS1pb24tY29sb3ItZ3JheS1vbmUtcmdiOiAyMDAsMjAwLDIxMjtcbiAgLS1pb24tY29sb3ItZ3JheS1vbmUtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWdyYXktb25lLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWdyYXktb25lLXNoYWRlOiAjYjBiMGJiO1xuICAtLWlvbi1jb2xvci1ncmF5LW9uZS10aW50OiAjY2VjZWQ4O1xuICAvKiogZ3JheSAyICoqL1xuICAtLWlvbi1jb2xvci1ncmF5LXR3bzogI0ZBRkFGRjtcbiAgLS1pb24tY29sb3ItZ3JheS10d28tcmdiOiAyNTAsMjUwLDI1NTtcbiAgLS1pb24tY29sb3ItZ3JheS10d28tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWdyYXktdHdvLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWdyYXktdHdvLXNoYWRlOiAjZGNkY2UwO1xuICAtLWlvbi1jb2xvci1ncmF5LXR3by10aW50OiAjZmJmYmZmO1xuICAvKiogZ3JheSAzICoqL1xuICAtLWlvbi1jb2xvci1ncmF5LXRocmVlOiAjQUFBQUJFO1xuICAtLWlvbi1jb2xvci1ncmF5LXRocmVlLXJnYjogMTcwLDE3MCwxOTA7XG4gIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItZ3JheS10aHJlZS1zaGFkZTogIzk2OTZhNztcbiAgLS1pb24tY29sb3ItZ3JheS10aHJlZS10aW50OiAjYjNiM2M1O1xuICAvKiogZ3JheSA0ICoqL1xuICAtLWlvbi1jb2xvci1ncmF5LWZvdXI6ICM5MTkxOUQ7XG4gIC0taW9uLWNvbG9yLWdyYXktZm91ci1yZ2I6IDE0NSwxNDUsMTU3O1xuICAtLWlvbi1jb2xvci1ncmF5LWZvdXItY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWdyYXktZm91ci1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1ncmF5LWZvdXItc2hhZGU6ICM4MDgwOGE7XG4gIC0taW9uLWNvbG9yLWdyYXktZm91ci10aW50OiAjOWM5Y2E3O1xuICAvKiogaW9uLWNoaXAgY29sb3IgKi9cbiAgLS1pb24tY29sb3ItY2hpcDogI0Y3RjdGRTtcbiAgLyoqIFRva2VuIENhcmQgQ29sb3JzICovXG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzOiAjRjdGN0ZFO1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1yZ2I6IDI0NywyNDcsMjU0O1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtc2hhZGU6ICNkOWQ5ZTA7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLXRpbnQ6ICNmOGY4ZmU7XG4gIC8qKiBjdXN0b20gTWluaW1hIGNzcyB2YXJzICoqL1xuICAtLW1pbmltYS10ZXJtaW5hbC1zaXplOiAxMnB4O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0taW9uLWNvbG9yLXNlbGVjdGVkOiAjMDAxQzMyO1xuICAtLWlvbi1jb2xvci1saW5lOiAjZmZmO1xufVxuOnJvb3QgLmJvcmRlci1iIHtcbiAgYm9yZGVyOiBub25lO1xufVxuOnJvb3QgLmJvcmRlci10IHtcbiAgYm9yZGVyOiBub25lO1xufVxuOnJvb3QgLnNwbGl0LXBhbmUtbWQge1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICMwMDFDMzI7XG59XG46cm9vdCBpb24tbWVudS1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1pbmltYS1udW1lcmljIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG4ubWluaW1hLXRva2VuIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcbn1cbmlvbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKiBGT05UIEZBTUlMSUVTICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3R5cGVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL21vbm90eXBlLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtYW5yb3BlLWJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi8vZm9udHMvbWFucm9wZS1ib2xkLm90ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtYW5yb3BlLWxpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvbWFucm9wZS1saWdodC5vdGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibWFucm9wZS1yZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvbWFucm9wZS1yZWd1bGFyLm90ZlwiKTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@ionic/angular/css/core.css":
/*!**************************************************!*\
  !*** ./node_modules/@ionic/angular/css/core.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./core.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/core.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/flex-utils.css":
/*!********************************************************!*\
  !*** ./node_modules/@ionic/angular/css/flex-utils.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./flex-utils.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/flex-utils.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/float-elements.css":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/angular/css/float-elements.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./float-elements.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/float-elements.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/normalize.css":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic/angular/css/normalize.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./normalize.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/padding.css":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/angular/css/padding.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./padding.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/padding.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/structure.css":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic/angular/css/structure.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./structure.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/structure.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/text-alignment.css":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/angular/css/text-alignment.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./text-alignment.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-alignment.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/text-transformation.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/angular/css/text-transformation.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./text-transformation.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-transformation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/typography.css":
/*!********************************************************!*\
  !*** ./node_modules/@ionic/angular/css/typography.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./typography.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/typography.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ./node_modules/@ionic/angular/css/normalize.css ./node_modules/@ionic/angular/css/structure.css ./node_modules/@ionic/angular/css/typography.css ./node_modules/@ionic/angular/css/core.css ./node_modules/@ionic/angular/css/padding.css ./node_modules/@ionic/angular/css/float-elements.css ./node_modules/@ionic/angular/css/text-alignment.css ./node_modules/@ionic/angular/css/text-transformation.css ./node_modules/@ionic/angular/css/flex-utils.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/src/theme/variables.scss */"./src/theme/variables.scss");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/src/global.scss */"./src/global.scss");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/normalize.css */"./node_modules/@ionic/angular/css/normalize.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/structure.css */"./node_modules/@ionic/angular/css/structure.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/typography.css */"./node_modules/@ionic/angular/css/typography.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/core.css */"./node_modules/@ionic/angular/css/core.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/padding.css */"./node_modules/@ionic/angular/css/padding.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/float-elements.css */"./node_modules/@ionic/angular/css/float-elements.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/text-alignment.css */"./node_modules/@ionic/angular/css/text-alignment.css");
__webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/text-transformation.css */"./node_modules/@ionic/angular/css/text-transformation.css");
module.exports = __webpack_require__(/*! /Users/eliasnemr/projects/Wallet/mobile-app-front-end/app/node_modules/@ionic/angular/css/flex-utils.css */"./node_modules/@ionic/angular/css/flex-utils.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map