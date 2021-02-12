(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-range.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-range.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_range", function() { return Range; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm-es5/index-e806d1f6.js");
/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-9d5c8ee3.js");
/* harmony import */ var _helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-90f46169.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-90f46169.js");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js");
var rangeIosCss=":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";var rangeMdCss=':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}';var Range=function(){function t(t){var e=this;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,t);this.ionChange=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionChange",7);this.ionStyle=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionStyle",7);this.ionFocus=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionFocus",7);this.ionBlur=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionBlur",7);this.didLoad=false;this.noUpdate=false;this.hasFocus=false;this.ratioA=0;this.ratioB=0;this.debounce=0;this.name="";this.dualKnobs=false;this.min=0;this.max=100;this.pin=false;this.snaps=false;this.step=1;this.ticks=true;this.disabled=false;this.value=0;this.clampBounds=function(t){return Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(e.min,t,e.max)};this.ensureValueInBounds=function(t){if(e.dualKnobs){return{lower:e.clampBounds(t.lower),upper:e.clampBounds(t.upper)}}else{return e.clampBounds(t)}};this.setupGesture=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(e,void 0,void 0,(function(){var t,e;var r=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(n){switch(n.label){case 0:t=this.rangeSlider;if(!t)return[3,2];e=this;return[4,Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm-es5/index-f49d994d.js"))];case 1:e.gesture=n.sent().createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return r.onStart(t)},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}});this.gesture.enable(!this.disabled);n.label=2;case 2:return[2]}}))}))};this.handleKeyboard=function(t,r){var n=e.step;n=n>0?n:1;n=n/(e.max-e.min);if(!r){n*=-1}if(t==="A"){e.ratioA=Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(0,e.ratioA+n,1)}else{e.ratioB=Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(0,e.ratioB+n,1)}e.updateValue()};this.onBlur=function(){if(e.hasFocus){e.hasFocus=false;e.ionBlur.emit();e.emitStyle()}};this.onFocus=function(){if(!e.hasFocus){e.hasFocus=true;e.ionFocus.emit();e.emitStyle()}}}t.prototype.debounceChanged=function(){this.ionChange=Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.ionChange,this.debounce)};t.prototype.minChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.maxChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}this.emitStyle()};t.prototype.valueChanged=function(t){if(!this.noUpdate){this.updateRatio()}t=this.ensureValueInBounds(t);this.ionChange.emit({value:t})};t.prototype.componentDidLoad=function(){this.setupGesture();this.didLoad=true};t.prototype.connectedCallback=function(){this.updateRatio();this.debounceChanged();this.disabledChanged();if(this.didLoad){this.setupGesture()}};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.getValue=function(){var t=this.value||0;if(this.dualKnobs){if(typeof t==="object"){return t}return{lower:0,upper:t}}else{if(typeof t==="object"){return t.upper}return t}};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled})};t.prototype.onStart=function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect();var r=t.currentX;var n=Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(0,(r-e.left)/e.width,1);if(document.dir==="rtl"){n=1-n}this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B";this.setFocus(this.pressedKnob);this.update(r)};t.prototype.onMove=function(t){this.update(t.currentX)};t.prototype.onEnd=function(t){this.update(t.currentX);this.pressedKnob=undefined};t.prototype.update=function(t){var e=this.rect;var r=Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(0,(t-e.left)/e.width,1);if(document.dir==="rtl"){r=1-r}if(this.snaps){r=valueToRatio(ratioToValue(r,this.min,this.max,this.step),this.min,this.max)}if(this.pressedKnob==="A"){this.ratioA=r}else{this.ratioB=r}this.updateValue()};Object.defineProperty(t.prototype,"valA",{get:function(){return ratioToValue(this.ratioA,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"valB",{get:function(){return ratioToValue(this.ratioB,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioLower",{get:function(){if(this.dualKnobs){return Math.min(this.ratioA,this.ratioB)}return 0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioUpper",{get:function(){if(this.dualKnobs){return Math.max(this.ratioA,this.ratioB)}return this.ratioA},enumerable:false,configurable:true});t.prototype.updateRatio=function(){var t=this.getValue();var e=this,r=e.min,n=e.max;if(this.dualKnobs){this.ratioA=valueToRatio(t.lower,r,n);this.ratioB=valueToRatio(t.upper,r,n)}else{this.ratioA=valueToRatio(t,r,n)}};t.prototype.updateValue=function(){this.noUpdate=true;var t=this,e=t.valA,r=t.valB;this.value=!this.dualKnobs?e:{lower:Math.min(e,r),upper:Math.max(e,r)};this.noUpdate=false};t.prototype.setFocus=function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");if(e){e.focus()}}};t.prototype.render=function(){var t,e;var r=this;var n=this,a=n.min,i=n.max,o=n.step,s=n.el,l=n.handleKeyboard,d=n.pressedKnob,g=n.disabled,b=n.pin,p=n.ratioLower,u=n.ratioUpper;var c=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);var m=p*100+"%";var f=100-u*100+"%";var k=document;var v=k.dir==="rtl";var x=v?"right":"left";var w=v?"left":"right";var y=function(t){var e;return e={},e[x]=t[x],e};var z=(t={},t[x]=m,t[w]=f,t);var C=[];if(this.snaps&&this.ticks){for(var B=a;B<=i;B+=o){var A=valueToRatio(B,a,i);var K={ratio:A,active:A>=p&&A<=u};K[x]=A*100+"%";C.push(K)}}Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["d"])(true,s,this.name,JSON.stringify(this.getValue()),g);return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["H"],{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color,(e={},e[c]=true,e["in-item"]=Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["h"])("ion-item",s),e["range-disabled"]=g,e["range-pressed"]=d!==undefined,e["range-has-pin"]=b,e))},Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"start"}),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"range-slider",ref:function(t){return r.rangeSlider=t}},C.map((function(t){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{style:y(t),role:"presentation",class:{"range-tick":true,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})})),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"range-bar",role:"presentation",part:"bar"}),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"range-bar range-bar-active",role:"presentation",style:z,part:"bar-active"}),renderKnob(v,{knob:"A",pressed:d==="A",value:this.valA,ratio:this.ratioA,pin:b,disabled:g,handleKeyboard:l,min:a,max:i}),this.dualKnobs&&renderKnob(v,{knob:"B",pressed:d==="B",value:this.valB,ratio:this.ratioB,pin:b,disabled:g,handleKeyboard:l,min:a,max:i})),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"end"}))};Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}();var renderKnob=function(t,e){var r=e.knob,n=e.value,a=e.ratio,i=e.min,o=e.max,s=e.disabled,l=e.pressed,d=e.pin,g=e.handleKeyboard;var b=t?"right":"left";var p=function(){var t={};t[b]=a*100+"%";return t};return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{onKeyDown:function(t){var e=t.key;if(e==="ArrowLeft"||e==="ArrowDown"){g(r,false);t.preventDefault();t.stopPropagation()}else if(e==="ArrowRight"||e==="ArrowUp"){g(r,true);t.preventDefault();t.stopPropagation()}},class:{"range-knob-handle":true,"range-knob-a":r==="A","range-knob-b":r==="B","range-knob-pressed":l,"range-knob-min":n===i,"range-knob-max":n===o},style:p(),role:"slider",tabindex:s?-1:0,"aria-valuemin":i,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":n},d&&Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(n)),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"range-knob",role:"presentation",part:"knob"}))};var ratioToValue=function(t,e,r,n){var a=(r-e)*t;if(n>0){a=Math.round(a/n)*n+e}return Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(e,a,r)};var valueToRatio=function(t,e,r){return Object(_helpers_90f46169_js__WEBPACK_IMPORTED_MODULE_3__["h"])(0,(t-e)/(r-e),1)};Range.style={ios:rangeIosCss,md:rangeMdCss};

/***/ })

}]);
//# sourceMappingURL=25-es5.js.map