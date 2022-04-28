(self["webpackChunkapp_cinema"] = self["webpackChunkapp_cinema"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _scheda_scheda_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheda/scheda.component */ 9638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
        path: '',
        redirectTo: 'cinema',
        pathMatch: 'full'
    },
    {
        path: 'cinema',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
    },
    {
        path: 'film/:id',
        component: _scheda_scheda_component__WEBPACK_IMPORTED_MODULE_1__.SchedaComponent
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'app-cinema';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/header/header.component */ 3771);
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/footer/footer.component */ 1070);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _main_body_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/body/body.component */ 2838);
/* harmony import */ var _main_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/carousel/carousel.component */ 4045);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _main_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/form/form.component */ 3963);
/* harmony import */ var _scheda_scheda_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scheda/scheda.component */ 9638);
/* harmony import */ var _scheda_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheda/details/details.component */ 1271);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.ModalModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_4__.MainComponent,
        _main_body_body_component__WEBPACK_IMPORTED_MODULE_5__.BodyComponent,
        _main_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent,
        _main_form_form_component__WEBPACK_IMPORTED_MODULE_7__.FormComponent,
        _scheda_scheda_component__WEBPACK_IMPORTED_MODULE_8__.SchedaComponent,
        _scheda_details_details_component__WEBPACK_IMPORTED_MODULE_9__.DetailsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.ModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule] }); })();


/***/ }),

/***/ 1502:
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DataService {
    constructor() { }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2838:
/*!*********************************************!*\
  !*** ./src/app/main/body/body.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyComponent": function() { return /* binding */ BodyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest.service */ 1881);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ 1502);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);






function BodyComponent_div_1_div_1_span_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](name_r9.name);
} }
function BodyComponent_div_1_div_1_span_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const name_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](", ", name_r9.name, "");
} }
function BodyComponent_div_1_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_div_1_span_13_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BodyComponent_div_1_div_1_span_13_ng_template_2_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r10 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", b_r10 == 0)("ngIfElse", _r12);
} }
function BodyComponent_div_1_div_1_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r6.limit(film_r3.info_cast, 20), "...");
} }
function BodyComponent_div_1_div_1_div_25_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "OGGI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r18.limit(ctx_r18.today.toString(), 15));
} }
function BodyComponent_div_1_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_div_1_div_25_p_1_Template, 4, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (show_r17.date_short == null ? null : show_r17.date_short.slice(7, 9)) == ctx_r7.today.getMonth() + 1 && (show_r17.date_short == null ? null : show_r17.date_short.toString().slice(4, 6)) == ctx_r7.today.toString().slice(8, 10));
} }
function BodyComponent_div_1_div_1_div_26_ul_1_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", time_r21.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](time_r21.screen_type);
} }
function BodyComponent_div_1_div_1_div_26_ul_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_div_1_div_26_ul_1_div_1_li_1_Template, 4, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", a_r22 < 3);
} }
function BodyComponent_div_1_div_1_div_26_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_div_1_div_26_ul_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (show_r19.date_short == null ? null : show_r19.date_short.slice(7, 9)) == ctx_r20.today.getMonth() + 1 && (show_r19.date_short == null ? null : show_r19.date_short.toString().slice(4, 6)) == ctx_r20.today.toString().slice(8, 10));
} }
function BodyComponent_div_1_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_div_1_div_26_ul_1_Template, 2, 1, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", show_r19.times);
} }
const _c0 = function (a1) { return ["/film", a1]; };
function BodyComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BodyComponent_div_1_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const film_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx_r28.openModal(_r1, film_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Genere ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BodyComponent_div_1_div_1_span_13_Template, 4, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Regia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cast ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BodyComponent_div_1_div_1_span_20_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Durata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BodyComponent_div_1_div_1_div_25_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, BodyComponent_div_1_div_1_div_26_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "scheda film");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", film_r3.image_poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](film_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", film_r3.genres.names);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](film_r3.info_director);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", film_r3.info_cast);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](film_r3.info_runningtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", film_r3.showings);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", film_r3.showings);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, film_r3.id));
} }
function BodyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_div_1_Template, 31, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", film_r3.image_poster && film_r3.title && film_r3.info_director && film_r3.info_cast && film_r3.info_runningtime);
} }
function BodyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BodyComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.modalRef == null ? null : ctx_r32.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "video", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "source", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.selectedTrailer, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class BodyComponent {
    constructor(rs, ds, modalService) {
        this.rs = rs;
        this.ds = ds;
        this.modalService = modalService;
        this.filmList = [];
        this.timeElapsed = Date.now();
        this.today = new Date(this.timeElapsed);
        this.s = false;
        this.t = false;
        this.id = 3;
        this.selectedTrailer = "";
    }
    limit(str, limit = 0) {
        return str.substring(0, limit);
    }
    day(data) {
        let str = "";
        return str = data.getDay() + "." + data.getMonth();
    }
    ngOnInit() {
        // this.ds.sharedId.subscribe(id => this.id = id);
        /* toPromise
        //metodo nel RestService                   any come oggetto
        this.rs.getMovieData().toPromise().then((response:any) =>{
          this.filmList = response.films;
        });*/
        //proviamo l'observable
        this.rs.getMovieData().subscribe((response) => {
            this.filmList = response.films;
        });
        console.log(this.filmList);
    }
    openModal(template, film) {
        this.selectedTrailer = film.video;
        this.modalRef = this.modalService.show(template);
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService)); };
BodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 4, vars: 1, consts: [[1, "body"], ["class", "container", 4, "ngFor", "ngForOf"], ["template", ""], [1, "container"], [4, "ngIf"], [1, "colonne"], [1, "l1"], ["alt", "copertina", "height", "250px", "width", "175px", 1, "pl0", 3, "src"], ["type", "button", 1, "pt2", 3, "click"], ["src", "/assets/immagini/icon1.png", "alt", "trailer", "height", "50px", "width", "50px"], [1, "list"], [1, "l2"], ["class", "gold", 4, "ngFor", "ngForOf"], [1, "blue"], ["class", "blue", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "gold"], [4, "ngIf", "ngIfElse"], ["elsep", ""], ["class", "d", 4, "ngIf"], [1, "d"], ["class", "list2", 4, "ngFor", "ngForOf"], [1, "list2"], [1, "type"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], [1, "x"], [1, "modal-body"], ["width", "1080px", "height", "540px", "controls", ""], ["type", "video/mp4", 3, "src"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BodyComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BodyComponent_ng_template_2_Template, 8, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filmList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".modal-body[_ngcontent-%COMP%]{\n    align-self: center;\n    align-items: center;\n    width: 1080px;\n    background-color:#1d2e4d;\n}\n.modal-header[_ngcontent-%COMP%]{\n    width: 1080px;\n    max-height: 50px;\n    background-color:#192231 ;\n    align-self: center;\n}\n.btn-close[_ngcontent-%COMP%]{\n    padding-top: 0px;\n    margin-bottom: 1px;\n    margin-right: -7px;\n}\n.x[_ngcontent-%COMP%]{\n    font-family: monospace;\n    color: white;\n    padding-top: 0px;\n    font-size: 20px;\n    font-weight: bold;\n}\nvideo[_ngcontent-%COMP%]{\n    align-self: center;\n}\n.body[_ngcontent-%COMP%]{\n    background-size:auto;\n    background-blend-mode:soft-light;\n    background-image: url(/assets/immagini/texture.jpg);\n    background-color: rgb(64, 101, 141);\n    font-family: sans-serif;\n    font-size: 14px;\n    text-align: center;\n    min-height: 700px;\n    max-height:-webkit-fit-content;\n    max-height:-moz-fit-content;\n    max-height:fit-content;\n}\n.container[_ngcontent-%COMP%]{\n    padding: 50px;\n    padding-top: 50px;\n}\n.colonne[_ngcontent-%COMP%]{\n    text-align: left;\n    list-style-type: none;\n    align-items: left;\n    vertical-align: middle;\n}\n.l1[_ngcontent-%COMP%]{\n    padding-left: 30px;\n    display:block;\n    float:left;\n}\n.l2[_ngcontent-%COMP%]{\n    font-size: 18px;\n    padding-bottom: 50px;\n    font-weight: bold;\n    color:gold;\n}\nbutton[_ngcontent-%COMP%]{\n    background: none;\n    border: 0px;\n    color:white;\n    font-size: 16px;\n}\n.list[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    list-style-type: none;\n    color: white;\n    font-size: 16px;\n    line-height: 25px;\n}\n.list2[_ngcontent-%COMP%]{\n    padding-left: 330px;\n    list-style-type: none;\n}\n.list2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    color: white;\n    margin-left: 40px;\n    margin-right: -20px;\n    padding-left: 5px;\n    padding-right: 70px;\n    padding-top: 5px;\n    padding-bottom: 2px;\n    line-height: 20px;\n    display:block;\n    float:left;\n    border: 2px solid gold;\n}\nu[_ngcontent-%COMP%]{\n    padding-left: 700px;\n    color: #143666;\n    font-size: 14px;\n}\n.d[_ngcontent-%COMP%]{\n    line-height: 50px; \n    padding-top: 170px; \n    padding-right: 450px;\n    color: white;\n    font-size: 16px;\n}\n.type[_ngcontent-%COMP%]{\n    color: gold;\n    padding-right: 18px;\n}\n.hidden[_ngcontent-%COMP%]{\n    visibility: hidden;\n}\n.gold[_ngcontent-%COMP%]{\n    color: gold;\n}\n.blue[_ngcontent-%COMP%]{\n    color: #143666;\n}\n.pt1[_ngcontent-%COMP%]{\n    padding-top: 30px;\n}\n.pt2[_ngcontent-%COMP%]{\n    padding-top: 200px;\n}\n.pl0[_ngcontent-%COMP%]{\n    padding-left: 0px;\n}\n.day[_ngcontent-%COMP%]{\n    padding-top: 150px;\n    padding-left: 80px;\n    color: white;\n    font-size: 16px;\n    text-align: left;\n    font-weight: bold;\n}\n.list3[_ngcontent-%COMP%]{\n    list-style-type: none;\n    margin-bottom: 20px;\n}\n.list3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    color: white;\n    margin-bottom: 20px;\n    padding-left: 5px;\n    padding-right: 70px;\n    padding-top: 5px;\n    padding-bottom: 2px;\n    line-height: 20px;\n    display:block;\n    float:left;\n    border: 2px solid gold;\n    margin-left: 20px;\n}\n.sList[_ngcontent-%COMP%]{\n    list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLG1EQUFtRDtJQUNuRCxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImJvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5e1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWQyZTRkO1xufVxuLm1vZGFsLWhlYWRlcntcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkyMjMxIDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tY2xvc2V7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xufVxuXG4ueHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudmlkZW97XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYm9keXtcbiAgICBiYWNrZ3JvdW5kLXNpemU6YXV0bztcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6c29mdC1saWdodDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbW1hZ2luaS90ZXh0dXJlLmpwZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAxMDEsIDE0MSk7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBtYXgtaGVpZ2h0OmZpdC1jb250ZW50O1xufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5jb2xvbm5le1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sMXtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBmbG9hdDpsZWZ0O1xufVxuXG4ubDJ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOmdvbGQ7XG59XG5cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxpc3R7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4ubGlzdDJ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMzBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5saXN0MiBsaXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcbn1cblxudXtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwMHB4O1xuICAgIGNvbG9yOiAjMTQzNjY2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmR7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7IFxuICAgIHBhZGRpbmctdG9wOiAxNzBweDsgXG4gICAgcGFkZGluZy1yaWdodDogNDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnR5cGV7XG4gICAgY29sb3I6IGdvbGQ7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbn1cblxuLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5nb2xke1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG4uYmx1ZXtcbiAgICBjb2xvcjogIzE0MzY2Njtcbn1cblxuLnB0MXtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLnB0MntcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbi5wbDB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5kYXl7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saXN0M3tcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxpc3QzIGxpe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uc0xpc3R7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ 4045:
/*!*****************************************************!*\
  !*** ./src/app/main/carousel/carousel.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": function() { return /* binding */ CarouselComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest.service */ 1881);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function CarouselComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", film_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", film_r1.image_hero, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_0_div_1_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_0_div_2_Template, 5, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", film_r1.image_poster && film_r1.title && film_r1.info_director && film_r1.info_cast && film_r1.info_runningtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", film_r1.image_poster && film_r1.title && film_r1.info_director && film_r1.info_cast && film_r1.info_runningtime);
} }
class CarouselComponent {
    // selectedPosterToShow
    constructor(rs) {
        this.rs = rs;
        this.filmList = [];
        this.num = 0;
    }
    ngOnInit() {
        this.rs.getMovieData().subscribe((response) => {
            this.filmList = response.films;
        });
        setTimeout(() => {
            this.num + 1;
        }, 5000);
        console.log(this.filmList);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 1, vars: 1, consts: [["id", "carouselExampleIndicators", "class", "carousel slide", "data-bs-ride", "carousel", 4, "ngFor", "ngForOf"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["class", "carousel-indicators", 4, "ngIf"], ["class", "carousel-inner", 4, "ngIf"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "se", "aria-current", "true", "aria-label", "Copertine film", 1, "active"], [1, "carousel-inner"], ["data-bs-interval", "setTimeout()", 1, "carousel-item", "active"], ["id", "titoloDelFilm"], ["alt", "Copertina del film", 1, "d-block", "w-100", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filmList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["img[_ngcontent-%COMP%]\n{\n    height: 500px;\n}\n\n#titoloDelFilm[_ngcontent-%COMP%]\n{\n    background-color: gold;\n    min-height: auto;\n    text-align: center;\n    font-family: \"Chilanka\";\n    font-weight: bold;\n    font-style: italic;\n    color: blue;\n    font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nXG57XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuI3RpdG9sb0RlbEZpbG1cbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkNoaWxhbmthXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 1070:
/*!*************************************************!*\
  !*** ./src/app/main/footer/footer.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "body"], ["id", "nome_annoCreazione"], ["align", "center"], ["id", "nomeApp", "src", "/assets/immagini/nome.png", "alt", "nome dell'app"], ["id", "logoApp", "src", "/assets/immagini/logo.png", "alt", "logo dell'app"], [1, "nome"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CINEMEDIA 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cinemedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body[_ngcontent-%COMP%]\n{\n    background-color: #143666;\n    font-family: sans-serif;\n    color: white;\n    font-size: 14px;\n    text-align: center;\n}\n\n#nome_annoCreazione[_ngcontent-%COMP%]\n{\n    margin-bottom: 50px;\n    font-weight: bold;\n}\n\n#nomeApp[_ngcontent-%COMP%]\n{\n    width: 140px;\n    height: 140;\n}\n\n#logoApp[_ngcontent-%COMP%]\n{\n    width: 50px;\n    height: 50;\n}\n\n.nome[_ngcontent-%COMP%]\n{\n    margin-left: 10px;\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MzY2NjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25vbWVfYW5ub0NyZWF6aW9uZVxue1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNub21lQXBwXG57XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMTQwO1xufVxuXG4jbG9nb0FwcFxue1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTA7XG59XG5cbi5ub21lXG57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"] });


/***/ }),

/***/ 3963:
/*!*********************************************!*\
  !*** ./src/app/main/form/form.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": function() { return /* binding */ FormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest.service */ 1881);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 707);




function FormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", film_r3.title);
} }
function FormComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", show_r6.date_time);
} }
function FormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_18_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", film_r4.showings);
} }
function FormComponent_div_24_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", time_r11.time);
} }
function FormComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_24_div_1_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", show_r9.times);
} }
function FormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormComponent_div_24_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", film_r7.showings);
} }
class FormComponent {
    constructor(rs) {
        this.rs = rs;
        this.filmList = [];
        this.timeElapsed = Date.now();
        this.today = new Date(this.timeElapsed);
        this.s = false;
    }
    // gestioneInput()
    // {
    //   let str = document.getElementById("filmExtra").value;
    //   let lun = str.length;
    //   if (str != undefined)
    //   {
    //     document.getElementById("pulsante").disabled = false;
    //     document.getElementById("inputData").disabled = false;
    //     document.getElementById("inputOra").disabled = false;
    //   }
    //   if (lun == 0)
    //   {
    //     document.getElementById("pulsante").disabled = true;
    //     document.getElementById("inputData").disabled = true;
    //     document.getElementById("inputOra").disabled = true;
    //   }
    // }
    limit(str, limit = 0) {
        return str.substring(0, limit);
    }
    day(data) {
        let str = "";
        return str = data.getDay() + "." + data.getMonth() + "." + data.getFullYear();
    }
    ngOnInit() {
        this.rs.getMovieData().subscribe((response) => {
            this.filmList = response.films;
        });
        console.log(this.filmList);
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
FormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 28, vars: 3, consts: [["id", "margine"], ["id", "cinema", "for", "exampleDataList", 1, "form-label"], ["list", "datalistOptions", "id", "cinema", "placeholder", "Acireale", "disabled", "", 1, "form-control"], ["for", "exampleDataList", 1, "form-label"], ["list", "listaFilmExtra", "id", "filmExtra", "placeholder", "Scegli un film o un Extra", "onkeyup", "gestioneInput()", 1, "form-control"], ["id", "listaFilmExtra"], [4, "ngFor", "ngForOf"], ["list", "listaDate", "id", "inputData", "placeholder", "Scegli la data", "disabled", "", 1, "form-control"], ["id", "listaDate"], ["list", "listaOrari", "id", "inputOra", "placeholder", "Scegli l'orario", "disabled", "", 1, "form-control"], ["id", "listaOrari"], ["id", "pulsante", "type", "button", "onclick", "avanti()", "disabled", "", 1, "btn", "btn-primary"], ["id", "listaDeiFilmExtra", 3, "value"], [3, "value"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CINEMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "FILM EXTRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "datalist", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FormComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "datalist", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FormComponent_div_18_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "ORARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "datalist", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FormComponent_div_24_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "CERCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filmList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filmList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filmList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: ["table[_ngcontent-%COMP%]\n{\n    width: 100%;\n    color: gold;\n}\n\n#margine[_ngcontent-%COMP%]\n{\n    background-color: gold;\n    width: 145px;\n}\n\ninput[_ngcontent-%COMP%]\n{\n    font-size: 14px;\n    color: blue;\n}\n\n#data[_ngcontent-%COMP%]\n{\n    width: 140px;\n}\n\n#ora[_ngcontent-%COMP%]\n{\n    width: 140px;\n    margin-right: 20px;\n}\n\n#filmExtra[_ngcontent-%COMP%]\n{\n    width: 450px;\n}\n\n#cinema[_ngcontent-%COMP%]\n{\n    width: 175px;\n    margin-left: 10px;\n}\n\nbutton[_ngcontent-%COMP%]\n{\n    border-radius: 50px;\n    background-color: gold;\n    border-color: gold;\n    font-weight: bold;\n}\n\nlabel[_ngcontent-%COMP%]\n{\n    font-weight: bold;\n    font-style: italic;\n}\n\nbutton[_ngcontent-%COMP%]:hover\n{\n    box-shadow: 0 12px 16px 0 rgb(6, 2, 255), 0 17px 50px 0 rgba(0,0,0,0.19);\n    font-weight: bold;\n    font-style: italic;\n    color: gold;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder\n{\n    color: blue;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder\n{\n    color: blue;\n}\n\ninput[_ngcontent-%COMP%]::placeholder\n{\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx3RUFBd0U7SUFDeEUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUhBOztJQUVJLFdBQVc7QUFDZjs7QUFIQTs7SUFFSSxXQUFXO0FBQ2YiLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGVcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogZ29sZDtcbn1cblxuI21hcmdpbmVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIHdpZHRoOiAxNDVweDtcbn1cblxuaW5wdXRcbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbiNkYXRhXG57XG4gICAgd2lkdGg6IDE0MHB4O1xufVxuXG4jb3JhXG57XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuI2ZpbG1FeHRyYVxue1xuICAgIHdpZHRoOiA0NTBweDtcbn1cblxuI2NpbmVtYVxue1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuYnV0dG9uXG57XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIGJvcmRlci1jb2xvcjogZ29sZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubGFiZWxcbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmJ1dHRvbjpob3Zlclxue1xuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiKDYsIDIsIDI1NSksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlclxue1xuICAgIGNvbG9yOiBibHVlO1xufSJdfQ== */"] });


/***/ }),

/***/ 3771:
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function HeaderComponent_ng_template_14_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Benvenuto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please enter your login and password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_14_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_14_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.pass = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_14_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.checkData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_ng_template_14_p_23_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.pass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.check == true);
} }
class HeaderComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.check = false;
        this.Data = [{ "email": "deborahmaldonato17@gmail.com", "pass": "Pass1" }, { "email": "pettinatos23@gmail.com", "pass": "Pass2" }];
    }
    checkData() {
        let e = false;
        let p = false;
        for (let i = 0; i < this.Data.length; i++) {
            if (this.email.toLowerCase() == this.Data[i]['email']) {
                e = true;
            }
            if (this.pass == this.Data[i]['pass']) {
                p = true;
            }
        }
        if (p == true && e == true) {
            this.check = true;
        }
        else {
            this.check = false;
        }
    }
    ngOnInit() {
        console.log(this.Data[0]['pass']);
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 0, consts: [[1, "body"], [1, "colonne"], [1, "li1"], ["src", "/assets/immagini/nome.png", "alt", "logo", "width", "200", "height", "80"], [1, "li3"], ["type", "button", 3, "click"], [1, "li4"], ["type", "button", "onclick", "location.href = 'cinema';", 1, "bb"], ["class", "gradient-custom"], ["login", ""], [1, "container"], [1, "row"], [1, "col"], [1, "card", "bg-dark", 2, "border-radius", "1rem"], [1, "card-body", "text-center"], [1, "mb-md-5", "mt-md-4", "pb-5"], [1, "fw-bold", "mb-2", "text-uppercase"], [1, "text-white-50", "mb-5"], [1, "form-outline", "form-white", "mb-4"], ["type", "email", "id", "typeEmailX", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "typeEmailX", 1, "form-label"], ["type", "password", "id", "typePasswordX", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "typePasswordX", 1, "form-label"], [1, "small", "mb-5", "pb-lg-2"], ["href", "#!", 1, "text-white-50"], ["type", "submit", 1, "btn", "btn-outline-light", "btn-lg", "px-5", 3, "click"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "text-center", "mt-4", "pt-1"], ["href", "#!", 1, "text-white"], [1, "fab", "fa-facebook-f", "fa-lg"], [1, "fab", "fa-twitter", "fa-lg", "mx-4", "px-2"], [1, "fab", "fa-google", "fa-lg"], [1, "mb-0"], ["href", "#!", 1, "text-white-50", "fw-bold"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LOG IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AL CINEMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_ng_template_14_Template, 36, 3, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".gradient-custom[_ngcontent-%COMP%]{\n    \n    background: #6a11cb;\n    \n    \n    \n    \n    background: linear-gradient(to right, rgb(67, 17, 203), rgb(0, 94, 255));}\n\n.container[_ngcontent-%COMP%]{\n    padding-top: 20px;\n    padding-bottom: 20px;\n    width: 500px;\n    background-color: #161b22;\n}\n\n.card-body[_ngcontent-%COMP%]{\n    padding-top: 10px;\n    color: aliceblue;\n    align-self: center;\n}\n\n.d-flex[_ngcontent-%COMP%]{\n    margin-bottom: -70px;\n}\n\n.body[_ngcontent-%COMP%]{\n    margin-top: -20px;\n    background-color: #143666;\n    font-family: sans-serif;\n    color: white;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: center;\n    min-height: 100px;\n    max-height: 100%;\n}\n\nbutton[_ngcontent-%COMP%]{\n    background-color: #143666;\n    border: 2px solid yellow;\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    padding: 10px 25px; \n    \n}\n\n.bb[_ngcontent-%COMP%]{\n    padding: 0px;\n    border: 0px;\n    font-family: sans-serif;\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 14px;\n}\n\n.colonne[_ngcontent-%COMP%]{\n    list-style-type: none;\n    padding-left: 25px;\n    align-items: center;\n    vertical-align: middle;\n}\n\n.li1[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    display:block;\n    float:left;\n}\n\n.li3[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    margin-right:25px;\n    display:block;\n    float:right;\n}\n\n.li4[_ngcontent-%COMP%]{\n    margin-top: 43px;\n    margin-right:25px;\n    display:block;\n    float:right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjs7SUFFbkIsK0JBQStCOztJQUcvQixxRUFBcUU7SUFDckUsd0VBQXdFLENBQUM7O0FBRTdFO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkaWVudC1jdXN0b217XG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6ICM2YTExY2I7XG4gICAgXG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDczLCAxNywgMjAzKSwgcmdiKDAsIDk0LCAyNTUpKTtcbiAgICBcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoNjcsIDE3LCAyMDMpLCByZ2IoMCwgOTQsIDI1NSkpO31cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MWIyMjtcbn1cblxuLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmQtZmxleHtcbiAgICBtYXJnaW4tYm90dG9tOiAtNzBweDtcbn1cblxuLmJvZHl7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MzY2NjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MzY2NjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7IFxuICAgIFxufVxuXG4uYmJ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29sb25uZXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxpMXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgZmxvYXQ6bGVmdDtcbn1cblxuLmxpM3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDoyNXB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi5saTR7XG4gICAgbWFyZ2luLXRvcDogNDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6MjVweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGZsb2F0OnJpZ2h0O1xufSJdfQ== */"] });


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": function() { return /* binding */ MainComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3771);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ 4045);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 3963);
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body.component */ 2838);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 1070);






class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent, _body_body_component__WEBPACK_IMPORTED_MODULE_3__.BodyComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1881:
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": function() { return /* binding */ RestService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class RestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMovieData() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            "Content-Type": 'application/json;charset=utf-8',
            Accept: 'application/json;charset=utf-8'
        });
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
        return this.httpClient.get("http://161.35.79.32:8081/getFilmCatalog", {
            headers: headers,
            observe: 'body',
            params: params,
            responseType: 'json'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1271:
/*!*****************************************************!*\
  !*** ./src/app/scheda/details/details.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": function() { return /* binding */ DetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 1502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest.service */ 1881);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);






function DetailsComponent_div_0_div_28_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.p[a_r9]);
} }
function DetailsComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_div_0_div_28_li_1_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", r_r10 < ctx_r3.count);
} }
function DetailsComponent_div_0_span_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](name_r13.name);
} }
function DetailsComponent_div_0_span_34_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const name_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](", ", name_r13.name, "");
} }
function DetailsComponent_div_0_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_div_0_span_34_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailsComponent_div_0_span_34_ng_template_2_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r14 = ctx.index;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", b_r14 == 0)("ngIfElse", _r16);
} }
function DetailsComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.film.synopsis_short);
} }
function DetailsComponent_div_0_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r7.limit(ctx_r7.film.synopsis_short, 100), "...");
} }
function DetailsComponent_div_0_div_48_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", time_r23.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](time_r23.screen_type);
} }
function DetailsComponent_div_0_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DetailsComponent_div_0_div_48_div_1_div_5_Template, 7, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](show_r21.date_long);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", show_r21.times);
} }
function DetailsComponent_div_0_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_div_0_div_48_div_1_Template, 6, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.film.showings);
} }
function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx_r24.openModal(_r1, ctx_r24.film); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Data di uscita");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Durata");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Regia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DetailsComponent_div_0_div_28_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DetailsComponent_div_0_span_34_Template, 4, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, DetailsComponent_div_0_div_36_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, DetailsComponent_div_0_ng_template_37_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.l = !ctx_r26.l; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Leggi tutto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.s = !ctx_r27.s; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Vedi gli orari di tutti i giorni");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, DetailsComponent_div_0_div_48_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.film.image_poster, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.limit(ctx_r0.film.ReleaseDate, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.film.info_runningtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.film.info_director.split(",", 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.film.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.film.genres.names);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.l == true || ctx_r0.film.synopsis_short.length < 200)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Spettacoli in programmazione del ", ctx_r0.limit(ctx_r0.today.toString(), 15), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.s == true);
} }
function DetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_ng_template_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.modalRef == null ? null : ctx_r28.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "video", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "source", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r2.selectedTrailer, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class DetailsComponent {
    constructor(ds, ar, rs, modalService) {
        this.ds = ds;
        this.ar = ar;
        this.rs = rs;
        this.modalService = modalService;
        this.filmList = [];
        this.timeElapsed = Date.now();
        this.today = new Date(this.timeElapsed);
        this.l = false;
        this.s = false;
        this.film = "";
        this.selectedTrailer = "";
        this.array = [];
        this.p = [];
        this.count = 0;
    }
    limit(str, limit = 0) {
        return str.substring(0, limit);
    }
    day(data) {
        let str = "";
        return str = data.getDay() + "." + data.getMonth();
    }
    cast(str) {
        let v = str;
        for (let i = 0; i < 20; i++) {
            this.p[i] = v.split(",", 1);
            v = v.slice(v.indexOf(",") + 2);
        }
        return this.p;
    }
    check(str) {
        let v = str;
        for (let i = 0; i < 10; i++) {
            if (v.includes(",")) {
                this.count++;
                v = v.slice(v.indexOf(",") + 2);
            }
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            console.log(document.getElementById("contenitoreFilm"));
            document.getElementById("contenitoreFilm").style['background-image'] = 'url(' + this.film["image_hero"] + ')';
        }, 1300);
        console.log(this.m);
    }
    ngOnInit() {
        this.rs.getMovieData().subscribe((response) => {
            this.filmList = response.films;
            this.ar.params.subscribe((response) => {
                this.id = +response['id'];
                for (let film of this.filmList) {
                    if (film.id == this.id) {
                        // (document.getElementById("contenitoreFilm") as HTMLElement).style ['background-image'] = 'url()';
                        this.film = film;
                    }
                }
                for (let i = 0; i < 20; i++) {
                    this.array[i] = i;
                }
                this.cast(this.film.info_cast);
                this.check(this.film.info_cast);
            });
        });
        // this.ar.params.subscribe((response: any)=>{
        //   this.id= +response['id'];
        // })
        //this.ds.sharedId.subscribe(id => this.id = id);
        //   this.ds.getId().subscribe((response: any) => {
        //   this.id=response;
        // });
        console.log(this.id);
    }
    openModal(template, film) {
        this.selectedTrailer = film.video;
        this.modalRef = this.modalService.show(template);
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService)); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 3, vars: 1, consts: [["class", "body", "id", "contenitoreFilm", 4, "ngIf"], ["template", ""], ["id", "contenitoreFilm", 1, "body"], [1, "container"], [1, "mainL"], [1, "liM"], ["type", "button", 1, "b", 3, "click"], ["src", "/assets/immagini/icon1.png", "alt", "Trailer", "height", "70px", "width", "70px", 1, "icon"], ["alt", "Copertina", "height", "200px", "width", "130px", 1, "img", 3, "src"], [1, "littleL"], [1, "l"], [4, "ngFor", "ngForOf"], [1, "noL"], [1, "t"], [1, "g"], ["class", "gold", 4, "ngFor", "ngForOf"], [1, "tr"], [4, "ngIf", "ngIfElse"], ["Else", ""], [1, "u"], ["type", "button", 1, "bb", 3, "click"], [4, "ngIf"], ["class", "l", 4, "ngIf"], [1, "gold"], ["elsep", ""], [1, "day"], [1, "sList"], [1, "list3"], [1, "type"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], [1, "x"], [1, "modal-body"], ["width", "1080px", "height", "540px", "controls", ""], ["type", "video/mp4", 3, "src"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 49, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_ng_template_1_Template, 8, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.film);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".modal-body[_ngcontent-%COMP%]{\n    align-self: center;\n    align-items: center;\n    width: 1080px;\n    background-color:#1d2e4d;\n}\n.modal-header[_ngcontent-%COMP%]{\n    width: 1080px;\n    max-height: 50px;\n    background-color:#192231 ;\n    align-self: center;\n}\n.btn-close[_ngcontent-%COMP%]{\n    padding-top: 0px;\n    margin-bottom: 1px;\n    margin-right: -7px;\n}\n.x[_ngcontent-%COMP%]{\n    font-family: monospace;\n    color: white;\n    padding-top: 0px;\n    font-size: 20px;\n    font-weight: bold;\n}\nvideo[_ngcontent-%COMP%]{\n    align-self: center;\n}\n.icon[_ngcontent-%COMP%]{\n    margin-right: 150px;\n    margin-top: 150px;\n}\n.img[_ngcontent-%COMP%]{\n    box-shadow: 0 0 50px rgba(255,255,255,0.3);\n}\n.body[_ngcontent-%COMP%]{\n    min-height: 700px;\n    align-content: center;\n    font-family: sans-serif;\n    background-color: #304050;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size:cover;\n    background-blend-mode:overlay;\n    color: white;\n    text-align: center;\n    min-width: 920px;\n    max-width: 100%;\n    padding-bottom: 200px;\n}\n.container[_ngcontent-%COMP%]{\n    padding-top: 50px;\n    padding-left: 100px;\n    padding-right: 100px;\n}\n.mainL[_ngcontent-%COMP%]{\n    list-style-type: none;\n    padding-left: 0px;\n    padding-top: 20px;\n}\n.liM[_ngcontent-%COMP%]{\n    display: block;\n    float: left;\n}\n.noL[_ngcontent-%COMP%]{\n    padding-left: 20px;\n    display:block;\n    list-style-type: none;\n    text-align: left;\n}\n.littleL[_ngcontent-%COMP%]{\n    display: block;\n    list-style-type: none;\n    text-align: right;\n    font-size: 13px;\n    padding-top: 10px;\n}\n.l[_ngcontent-%COMP%]{\n    color: grey;\n    padding-bottom: 5px;\n}\n.t[_ngcontent-%COMP%]{\n    padding-bottom: 10px;\n    font-size: 30px;\n    max-width: 480px;\n}\n.g[_ngcontent-%COMP%]{\n    color: grey;\n    padding-bottom: 30px;\n}\n.u[_ngcontent-%COMP%]{\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n.b[_ngcontent-%COMP%]{\n    background: none;\n    border: none;\n    color: white;\n    font-size: 16px;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.bb[_ngcontent-%COMP%]{\n    background: none;\n    border: none;\n    color: white;\n    font-size: 14px;\n    font-size: 23px;\n    border: 3px solid gold;\n    text-align: center;\n    padding-left: 70px;\n    padding-right: 70px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    margin-bottom: 300px;\n}\n.tr[_ngcontent-%COMP%]{\n    max-width: 480px;\n}\n.list3[_ngcontent-%COMP%]{\n    list-style-type: none;\n    margin-bottom: 10px;\n}\n.list3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    color: white;\n    margin-bottom: 10px;\n    padding-left: 5px;\n    padding-right: 70px;\n    padding-top: 5px;\n    padding-bottom: 2px;\n    line-height: 20px;\n    display:block;\n    float:left;\n    border: 2px solid gold;\n    margin-left: 20px;\n}\n.sList[_ngcontent-%COMP%]{\n    list-style-type: none;\n}\n.day[_ngcontent-%COMP%]{\n    padding-top: 150px;\n    padding-left: 80px;\n    color: white;\n    font-size: 16px;\n    text-align: left;\n    font-weight: bold;\n}\n.type[_ngcontent-%COMP%]{\n    color: gold;\n    padding-right: 18px;\n}\n@-webkit-keyframes glowing{\n    from{ box-shadow: 0 0 0px rgba(220, 180, 50, 0.8); \n    text-shadow: 0 0 1px white;}\n    to{ box-shadow: 0 0 40px rgba(240, 180, 50, 0.8);\n    text-shadow: 0 0 2px white;}\n}\n@keyframes glowing{\n    from{ box-shadow: 0 0 0px rgba(220, 180, 50, 0.8); \n    text-shadow: 0 0 1px white;}\n    to{ box-shadow: 0 0 40px rgba(240, 180, 50, 0.8);\n    text-shadow: 0 0 2px white;}\n}\n.bb[_ngcontent-%COMP%]:hover{\n    -webkit-animation: glowing 800ms forwards;\n            animation: glowing 800ms forwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksTUFBTSwyQ0FBMkM7SUFDakQsMEJBQTBCLENBQUM7SUFDM0IsSUFBSSw0Q0FBNEM7SUFDaEQsMEJBQTBCLENBQUM7QUFDL0I7QUFMQTtJQUNJLE1BQU0sMkNBQTJDO0lBQ2pELDBCQUEwQixDQUFDO0lBQzNCLElBQUksNENBQTRDO0lBQ2hELDBCQUEwQixDQUFDO0FBQy9CO0FBRUE7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5e1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWQyZTRkO1xufVxuLm1vZGFsLWhlYWRlcntcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTkyMjMxIDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tY2xvc2V7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xufVxuXG4ueHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudmlkZW97XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5cbi5pY29ue1xuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbi5pbWd7XG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xufVxuXG4uYm9keXtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDA1MDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOm92ZXJsYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDkyMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG59XG5cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuLm1haW5Me1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxpTXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLm5vTHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpdHRsZUx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmx7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnR7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1heC13aWR0aDogNDgwcHg7XG59XG5cbi5ne1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4udXtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmJ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5iYntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMDBweDtcbn1cblxuLnRye1xuICAgIG1heC13aWR0aDogNDgwcHg7XG59XG5cbi5saXN0M3tcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxpc3QzIGxpe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uc0xpc3R7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZGF5e1xuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHlwZXtcbiAgICBjb2xvcjogZ29sZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGdsb3dpbmd7XG4gICAgZnJvbXsgYm94LXNoYWRvdzogMCAwIDBweCByZ2JhKDIyMCwgMTgwLCA1MCwgMC44KTsgXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggd2hpdGU7fVxuICAgIHRveyBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDI0MCwgMTgwLCA1MCwgMC44KTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCB3aGl0ZTt9XG59XG5cbi5iYjpob3ZlcntcbiAgICBhbmltYXRpb246IGdsb3dpbmcgODAwbXMgZm9yd2FyZHM7XG59Il19 */"] });


/***/ }),

/***/ 9638:
/*!********************************************!*\
  !*** ./src/app/scheda/scheda.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedaComponent": function() { return /* binding */ SchedaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/header/header.component */ 3771);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 1271);
/* harmony import */ var _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/footer/footer.component */ 1070);




class SchedaComponent {
    constructor() { }
    ngOnInit() {
    }
}
SchedaComponent.ɵfac = function SchedaComponent_Factory(t) { return new (t || SchedaComponent)(); };
SchedaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SchedaComponent, selectors: [["app-scheda"]], decls: 3, vars: 0, template: function SchedaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-footer");
    } }, directives: [_main_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent, _main_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./log": 708
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(3208), __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map