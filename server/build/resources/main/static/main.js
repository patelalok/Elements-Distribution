(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"this.productViewList\">\n  <!-- <div class=\"col-md-1\">\n\n</div> -->\n\n  <!-- <div class=\"loading\" *ngIf=\"this.isLoading\">\n  </div> -->\n  <div class=\"col-md-4\">\n      <input class=\"form-control\" type=\"search\" id=\"search-input\" placeholder=\"Search By Description\">\n  </div>\n  <div class=\"col-md-3\">\n      <select class=\"form-control\">\n        <option>Select All</option>\n        <option>Brand</option>\n        <option>Category</option>\n        <option>Model</option>\n        <!-- <option>Model</option> -->\n    </select>\n  </div>\n  <!-- <div class=\"col-md-3\" *ngIf=\"this.listOfProductOption != null\">\n      <select (change)=\"this.loadProductsToView()\" class=\"form-control\" id=\"select-input\">\n            <option  *ngFor = \"let option of this.listOfProductOption\" [value]=\"option.id\">\n                    {{option.name}}\n                </option>\n        </select>\n  </div> -->\n  <div class=\"col-md-1\">\n\n  </div>\n</div>\n\n\n<h6 class=\"text-muted text-normal text-uppercase padding-top-2x\">\n  Product Table For Admin</h6>\n<hr class=\"margin-bottom-1x\">\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n      <thead>\n          <tr>\n              <th>Image</th>\n              <th>Product No</th>\n              <th>Description</th>\n              <th>Cost</th>\n              <th>Retails</th>\n              <th>Stocks</th>\n              <th>Edit</th>\n              <th>Add Image</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let product of this.productViewList;let i = index\" [attr.data-index]=\"i\">\n              <td>\n                  <img *ngIf=\"product.image!=null\" src=\"data:image/png;base64,{{product.image}}\" height=\"100px\" width=\"100px\" />\n                  <img *ngIf=\"(product.image=='aW1hZ2U=')\" src=\"assets/images/no-image-found.jpg\" height=\"100px\" width=\"100px\" alt=\"{{product.productNo}}\">\n              </td>\n              <td>{{product.productNo}}</td>\n              <td>{{product.description}}</td>\n              <td>$ {{product.cost}}</td>\n              <td>$ {{product.retail}}</td>\n              <td>{{product.saleQuantity}}</td>\n              <td><input type=\"file\" id=\"file-input\"> <img class=\"image\" /></td>\n              <td><button class=\"btn btn-outline-success\" (click)=\"addImage(product, i)\">Add Image</button></td>\n          </tr>\n      </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.service */ "./src/app/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, element, productService) {
        this.adminService = adminService;
        this.element = element;
        this.productService = productService;
        this.productViewList = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getProductDetails();
    };
    AdminComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.productService.getAllProducts()
            .subscribe(function (product) {
            _this.productViewList = product;
        });
    };
    AdminComponent.prototype.addImage = function (product, index) {
        var element = (document.querySelectorAll('#file-input')[index]);
        console.log('image', element.files[0]);
        // console.log('Event', event.target.files[0]);
        this.image = element.files[0];
        this.formData = new FormData();
        this.formData.append('file', this.image);
        this.productService.addImage(product.productNo, this.formData);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]],
            providers: [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminService = /** @class */ (function () {
    function AdminService() {
    }
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    // { path: 'product/:type/:id', component: ProductComponent},
    { path: 'product/:type/:id', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    // { path: 'product-details/:id', component: ProductDetailsComponent},
    // { path: 'product-details', component: ProductDetailsComponent},
    // { path: 'login', component: LoginComponent},
    // { path: 'signup', component: SignupComponent},
    // { path: 'viewCart', component: CartComponent},
    // { path: 'checkout', component: CheckoutComponent},
    // { path: 'shipping', component: ShippingComponent},
    // { path: 'payment', component: PaymentComponent},
    // { path: 'address', component: AddressComponent},
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.module */ "./src/app/checkout/checkout.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_8__["CheckoutModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_9__["AdminModule"]
            ],
            exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  checkout works!\n</p>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.service */ "./src/app/checkout/checkout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"]],
            providers: [_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"]]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/checkout/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutService = /** @class */ (function () {
    function CheckoutService() {
    }
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main-content container\" role=\"main\">\n  <div class=\"topstyle\">\n    <a href=\"javascript:;\"><img src=\"assets/image/top-ads-2.png\" alt=\"\"></a>\n  </div>\n  <section class=\"main-slideshow\">\n    <div class=\"flexslider\">\n      <ul class=\"slides\">\n        <li class=\"slide\">\n          <img width=\"1200\" height=\"auto\" src=\"assets/image/slideshow_1.jpg\" class=\"slide-img\" alt=\"\" />\n        </li>\n        <li class=\"slide\">\n          <img width=\"1200\" height=\"auto\" src=\"assets/image/slideshow_2.jpg\" class=\"slide-img\" alt=\"\" />\n        </li>\n        <li class=\"slide\">\n          <img width=\"1200\" height=\"auto\" src=\"assets/image/slideshow_1.jpg\" class=\"slide-img\" alt=\"\" />\n        </li>\n        <li class=\"slide\">\n          <img width=\"1200\" height=\"auto\" src=\"assets/image/slideshow_2.jpg\" class=\"slide-img\" alt=\"\" />\n        </li>\n      </ul>\n    </div>\n    <!-- /.flexslider -->\n  </section>\n\n  <!-- Start Maincontainer -->\n  <div class=\"col-sm-3 hidden-xs\">\n    <section class=\"mainsections homepage-sidebar\">\n      <div class=\"featured-product-header\">\n        <img class=\"featured-product-img\" src=\"assets/image/NewStuffFinal.png\" alt=\"\">\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n      <div class=\"product-wrapper2 featuredBrand\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/favorites1.png\" alt=\"\"> \n        </a>\n      </div>\n    </section>\n  </div>\n\n\n  <div class=\"col-sm-9 col-xs-12\">\n    <section class=\"mainsections widget-new-product\">\n      <div class=\"featured-product-header\">\n        <a href=\"javascript:;\">\n          <img class=\"featured-product-img\" src=\"assets/image/FeaturedProducts2.png\" alt=\"\">\n        </a>\n      </div>\n      <!-- old title -->\n      <div class=\"widget-product\" style=\"padding-top: 10px;\">\n        <div class=\"products-grid row\">\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"0ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"25ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"50ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"75ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"100ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"125ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"150ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"175ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"200ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"225ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"250ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  on-sale wow fadeIn\" data-wow-delay=\"275ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\" alt=\"\">\n                    <h3>Vapes Handcrafted Joose</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"mainsections bottomfix six-banner\">\n      <a href=\"javascript:;\"><img alt=\"\" src=\"assets/image/slideshow_1.jpg\"></a>\n    </section>\n\n    <section class=\"widget-trending-product mainsections\">\n      <div class=\"widget-title wow fadeIn maintitle\">\n        <fieldset class=\"box-title\">\n          <legend align=\"center\">\n            <a href=\"javascript:;\"> New Products </a>\n          </legend>\n        </fieldset>\n      </div>\n      <div class=\"widget-product\">\n        <div class=\"products-grid row owl-carousel\">\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"0ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"25ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"50ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"75ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"100ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"125ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"150ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"175ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"200ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"widget-trending-product mainsections\">\n      <div class=\"widget-title wow fadeIn maintitle\">\n        <fieldset class=\"box-title\">\n          <legend align=\"center\">\n            <a href=\"javascript:;\"> New Products </a>\n          </legend>\n        </fieldset>\n      </div>\n      <div class=\"widget-product\">\n        <div class=\"products-grid row owl-carousel\">\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"0ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"25ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"50ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"75ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"100ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"125ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"150ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"175ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n            <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"200ms\">\n              <div class=\"inner-top\">\n                <div class=\"product-top\">\n                  <div class=\"product-image\">\n                    <a href=\"javascript:;\" class=\" product-grid-image\">\n                      <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n                <div class=\"product-bottom\">\n                  <a class=\"product-title\" href=\"javascript:;\">\n                    <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"widget-trending-product  mainsections\">\n      <div class=\"widget-title wow fadeIn maintitle\">\n        <fieldset class=\"box-title\">\n          <legend align=\"center\">\n            <a href=\"javascript:;\">New hardware</a>\n          </legend>\n        </fieldset>\n      </div>\n      <div class=\"widget-product\">\n        <div class=\"widget-product\">\n          <div class=\"products-grid row owl-carousel\">\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"0ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"25ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"50ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"75ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"100ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"125ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"150ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-1.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"175ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-2.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"  grid-item col-xs-6 col-sm-4  col-lg-2\">\n              <div class=\"inner product-item  wow fadeIn\" data-wow-delay=\"200ms\">\n                <div class=\"inner-top\">\n                  <div class=\"product-top\">\n                    <div class=\"product-image\">\n                      <a href=\"javascript:;\" class=\" product-grid-image\">\n                        <img src=\"assets/image/product-3.jpg\" class=\"lazyload\" alt=\"\">\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"product-bottom\">\n                    <a class=\"product-title\" href=\"javascript:;\">\n                      <h3>Lorem ipsum amet dummy text Fresh Pressed E-Liquid</h3>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeService = /** @class */ (function () {
    function HomeService() {
    }
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/login/signup/signup.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/login/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/login/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/login/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categories_slidebar {\n    width: 100%;\n    float: left;\n    border: 1px solid #dfe5e8;\n}\n\n.categories_slidebar .widget-title {\n    width: 100%;\n    float: left;\n    text-transform: uppercase;\n    color: #ff3427;\n    font-weight: bold;\n    padding: 12px;\n    margin: 0;\n    border-bottom: 1px solid #dfe5e8;\n}\n\n#products-tab {\n    background: #f4f6f7;\n    width: 100%;\n    float: left;\n}\n\n#products-tab .card-header {padding: 0 12px;border-bottom: 1px solid #dfe5e8;}\n\n#products-tab .collapsed i {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    \n}\n\n#products-tab .card-header i {\n    float: right;\n    padding: 6px 0;\n    transition: all 0.3s ease;\n}\n\n#products-tab .card-header a {\n    color: #333;\n    padding: 12px 0;\n    display: block;\n    text-decoration: none;\n}\n\n#products-tab .card-body {\n    padding-left: 0;\n    margin: 0;\n    list-style: none;\n}\n\n#products-tab .card-body a {\n    padding: 10px 12px;\n    display: block;\n    border-bottom: 1px solid #dfe5e8;\n}\n\n#products-tab .card {\n    width: 100%;\n    float: left;\n}\n\n.products .product-inner {\n    transition: all 0.3s;\n    position: relative;\n    overflow: visible;\n    border: 1px solid #dfe5e8;\n    background-color: #fff;\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    margin-bottom: 30px;\n}\n\n.products .product-image {\n    display: block;\n    text-align: center;\n    position: relative;\n    margin: -1px -1px 0 !important;\n    background-color: #f4f6f7;\n}\n\n.product .product-labels {\n    position: absolute;\n    width: 60px;\n    right: -21px;\n    top: 21px;\n    z-index: 2;\n}\n\n.product .onsale {\n    position: relative;\n    display: block;\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n    font-size: 14px;\n    text-align: center;\n    border-radius: 50%;\n    z-index: 2;\n    margin: 0 auto;\n    background-color: #00bcd4;\n    color: #fff;\n}\n\n.product .new-label {\n    position: relative;\n    display: block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    font-size: 12px;\n    text-align: center;\n    border-radius: 50%;\n    z-index: 1;\n    background: #393d50;\n    color: #fff;\n    margin: 0 auto;\n}\n\n.product .out-of-stock-label {\n    position: relative;\n    display: block;\n    width: 60px;\n    height: 60px;\n    font-size: 14px;\n    line-height: 14px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f44336;\n    margin: 0 auto;\n    text-transform: uppercase;\n    padding-top: 17px;\n    color: #fff;\n    font-weight: bold;\n}\n\n.product .onsale + .out-of-stock-label, .product .new-label+.out-of-stock-label {\n    margin-top: -15px;\n}\n\n.product .out-of-stock-label .small {\n    font-size: 8px;\n    display: block;\n}\n\n.products .product-image-inner {\n    display: block;\n    position: relative;\n    overflow: hidden;\n}\n\n.products .product-image img {\n    display: inline-block;\n    width: 136px;\n    height: 136px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n.products .product-image-inner picture:last-child {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 500%;\n    text-align: center;\n    background: #f4f6f7;\n    transition: all 0.25s ease-out;\n}\n\n.products .product-info {\n    padding: 0px 8px 8px;\n}\n\n.products .product-info .product-rating {\n    min-height: 16px;\n}\n\n.products .product-info .product-rating .empty-rating {\n    padding-top: 8px;\n    padding-bottom: 7px;\n}\n\n.products .product-info .product-rating .empty-rating:before {\n    content: '';\n    display: block;\n    border: 0 none;\n    border-top: 1px solid red;\n    width: 50px;\n    margin: 0 auto;\n}\n\n.products .product-info .product-title {\n    margin-bottom: 0;    \n    color: #5f727f;\n        line-height: 16px;\n        font-size: 12px;\n}\n\n.products .product-info .price ins, .products .product-info .price .amount {\n    color: #00bcd4;    \n        line-height: 18px;\n        font-size: 13px;\n            margin: 3px 0;\n    display: block;\n}\n\n.products .product-inner:hover {\n    border-color: #f4f6f7;\n        background-color: #f4f6f7;\n}\n\n.products .product-inner:hover .product-image-inner picture:last-child{\n   left: 0;\n}\n\n@media (max-width: 767px)\n{\n  .products .product-info .btn {\n    font-size: 12px;\n    height: 30px;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-white\">\n  <main class=\"main-content container\" role=\"main\">\n    <div class=\"row mt-50 mb-50\">\n      <div class=\"col-md-9 col-sm-12 col-xs-12 pull-right\">\n        <div class=\"row products\">\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <div class=\"product-labels\">\n                  <span class=\"new-label title-h6\">New</span>\n                  <span class=\"out-of-stock-label title-h6\">Out <span class=\"small\">of stock</span></span>\n                </div> \n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <div class=\"product-labels\">\n                  <span class=\"new-label title-h6\">New</span>\n                  <span class=\"out-of-stock-label title-h6\">Out <span class=\"small\">of stock</span></span>\n                </div> \n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <div class=\"product-labels\"> <span class=\"onsale title-h6\">Sale!</span></div>\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-3 product text-center\">\n            <div class=\"product-inner centered-box\"> \n              <a href=\"javascript:;\" class=\"product-image\">\n                <span class=\"product-image-inner\"> \n                  <picture> \n                    <img src=\"assets/image/Bags7-thegem_shop_catalog.jpg\" class=\"attachment-thegem_shop_catalog\" alt=\"\"> \n                  </picture> \n                  <picture> \n                   <img src=\"assets/image/Bags6-thegem_shop_catalog.jpg\" class=\"attachment-$size woo-product-hover\" alt=\"\"> \n                  </picture> \n                </span> \n              </a>\n              <div class=\"product-info clearfix\">\n                <div class=\"product-rating product-rating-empty\">\n                  <div class=\"empty-rating\"></div>\n                </div>\n                <div class=\"product-title title-h6\">\n                  <a href=\"javascript:;\">Black Tempered Glass Backing (Natural Bl...</a>\n                </div>\n                <div class=\"product-price\">\n                  <span class=\"price\">\n                    <span class=\"woocommerce-Price-amount amount\">\n                      <span class=\"woocommerce-Price-currencySymbol\">$</span>176.99\n                    </span>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\">\n                <input class=\"ptn-primary btn btn-block mt-10\" type=\"submit\" value=\"Add to the cart\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-12 col-xs-12\">\n        <div class=\"categories_slidebar\">\n          <h4 class=\"widget-title\">Categories</h4>\n          <!--Accordion wrapper-->\n          <div class=\"accordion\" id=\"products-tab\" role=\"tablist\" aria-multiselectable=\"true\">\n            <!-- Bags -->\n            <div class=\"card\">            \n              <div class=\"card-header\" role=\"tab\" id=\"bags\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" class=\"\">\n                      Bags <i class=\"fa fa-angle-up\"></i></a>\n              </div>\n              <div id=\"collapseOne\" class=\"collapse in\" role=\"tabpanel\" aria-labelledby=\"bags\">\n                  <ul class=\"card-body\">\n                    <li><a href=\"javascript:;\">Bags-1</a></li>\n                    <li><a href=\"javascript:;\">Bags-2</a></li>\n                    <li><a href=\"javascript:;\">Bags-3</a></li>\n                  </ul>\n              </div>\n            </div>\n            <!-- End Bags -->\n            <!-- Sunglass -->\n            <div class=\"card\">            \n              <div class=\"card-header\" role=\"tab\" id=\"sunglass\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                      Sunglass <i class=\"fa fa-angle-up\"></i></a>\n              </div>\n              <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"sunglass\" data-parent=\"#accordionEx\">\n                  <ul class=\"card-body\">\n                    <li><a href=\"javascript:;\">Sunglass-1</a></li>\n                    <li><a href=\"javascript:;\">Sunglass-2</a></li>\n                    <li><a href=\"javascript:;\">Sunglass-3</a></li>\n                  </ul>\n              </div>\n            </div>\n            <!-- End Sunglass -->\n          </div>\n          <!--/.Accordion wrapper-->\n          <h4 class=\"widget-title\">Categories 2</h4>\n          <!--Accordion wrapper-->\n          <div class=\"accordion\" id=\"products-tab\" role=\"tablist\" aria-multiselectable=\"true\">\n            <!-- Bags -->\n            <div class=\"card\">            \n              <div class=\"card-header\" role=\"tab\" id=\"bags-2\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\" class=\"\">\n                      Bags <i class=\"fa fa-angle-up\"></i></a>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"bags\">\n                  <ul class=\"card-body\">\n                    <li><a href=\"javascript:;\">Bags-1</a></li>\n                    <li><a href=\"javascript:;\">Bags-2</a></li>\n                    <li><a href=\"javascript:;\">Bags-3</a></li>\n                  </ul>\n              </div>\n            </div>\n            <!-- End Bags -->\n            <!-- Sunglass -->\n            <div class=\"card\">            \n              <div class=\"card-header\" role=\"tab\" id=\"sunglass\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                      Sunglass <i class=\"fa fa-angle-up\"></i></a>\n              </div>\n              <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"sunglass\" data-parent=\"#accordionEx\">\n                  <ul class=\"card-body\">\n                    <li><a href=\"javascript:;\">Sunglass-1</a></li>\n                    <li><a href=\"javascript:;\">Sunglass-2</a></li>\n                    <li><a href=\"javascript:;\">Sunglass-3</a></li>\n                  </ul>\n              </div>\n            </div>\n            <!-- End Sunglass -->\n          </div>\n          <!--/.Accordion wrapper-->\n        </div>\n      </div>\n    </div>\n  </main>\n  </div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].productUrl;
    }
    ProductService.prototype.getAllProducts = function () {
        var headers = new Headers({});
        return this.http.get(this.url + '/getAllProduct');
    };
    ProductService.prototype.addImage = function (productNo, image) {
        var headers = new Headers({});
        console.log('Customer to be Added' + image);
        this.http.post(this.url + '/insertProductImage?productNo=' + productNo, image)
            .subscribe(function (data) {
            console.log('Response From Add Customer call' + data);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer clearsides\" role=\"contentinfo\">\n  <div class=\"wrapper\">\n      <div class=\"footer-top\">\n          <div class=\"row\">\n              <div class=\"col-1 wow fadeInUp\" data-wow-delay=\"25ms\">\n                  <h2>Pages</h2>\n                  <ul>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">All eJuice</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">All Hardware</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Nicotine Salts</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Top 15 Selling eJuice</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Hottest Brands</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">New eJuice</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Vape News</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">eJuice Request</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Distributor Pricing</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Looking For Retail?</a></h3>\n                      </li>\n                  </ul>\n              </div>\n              <div class=\"col-2 wow fadeInUp\" data-wow-delay=\"50ms\">\n                  <h2>Information</h2>\n                  <ul>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">FAQ / Help</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">List Your Brand</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Vendor Information</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">GCC Certificates</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">FDA Registrations</a></h3>\n                      </li>\n                  </ul>\n              </div>\n              <div class=\"col-3 wow fadeInUp\" data-wow-delay=\"75ms\">\n                  <h2>Customer Service</h2>\n                  <ul>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">About Us</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Contact Us</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Privacy Policy</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Terms Of Service</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">DMCA Policy</a></h3>\n                      </li>\n                      <li>\n                          <h3><a href=\"javascript:;\" title=\"\">Return / Shipping Policy</a></h3>\n                      </li>\n                  </ul>\n              </div>\n              <div class=\"col-4 wow fadeInUp last\" data-wow-delay=\"100ms\">\n                  <h2>Contact Us: +1 631 777 3487</h2>\n                  <ul class=\"social\">                                \n                      <li class=\"facebook\">\n                          <a href=\"javascript:;\">Facebook</a>\n                      </li>\n                      <li class=\"instagram\">\n                          <a href=\"javascript:;\">Instagram</a>\n                      </li>\n                      <li class=\"pinterest\">\n                          <a href=\"javascript:;\">Pinterest</a>\n                      </li>\n                  </ul>\n                  <div class=\"text\">\n                      <span><img src=\"assets/image/text-title.png\" alt=\"\"></span>\n                  </div>\n                  <section class=\"newsletter\">\n                      <div class=\"block-title wow fadeIn\" data-wow-delay=\"200ms\">\n                          <h3 data-wow-delay=\"100ms\"><span>Email Newsletter</span></h3>\n                      </div>\n                      <div class=\"block-content wow fadeIn\" data-wow-delay=\"400ms\">\n                          <form action=\"\" method=\"post\" class=\"input-group\">\n                              <input type=\"email\" value=\"\" placeholder=\"enter your email address\" name=\"EMAIL\" class=\"input-group-field\">\n                              <span class=\"input-group-btn\">\n                                <input type=\"submit\" class=\"btn\" value=\"Subscribe\" name=\"subscribe\">\n                              </span>\n                          </form>\n                      </div>\n                  </section>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-bottom  wow fadeInUp\" data-wow-delay=\"125ms\">\n          <!-- <address>\n            © 2016-2018 VapeRanger. All Rights Reserved.<br>All content, images, branding, designs, logos, and other intellectual property appearing on this Website are the respective property of the individual brands, unless otherwise stated.  Information may be subject to copyright/trademark ownership by the vendor or brand.  Reproduction or alteration without the expressed written permission may be a violation of their copyright/trademark or ownership. Questions, E-Mail: <a href=\"mailto:xyz@example.com\" target=\"_top\"><strong>xyz@example.com</strong></a><hr style=\"border-top: 1px solid #373737;\">\n            <p><strong>VapeRanger Partners</strong></p>\n            <ul>\n              <li><a href=\"javascript:;\">https://www.example.com/</a></li>\n              <li><a href=\"javascript:;\">https://www.example.com</a></li>\n            </ul>\n            <hr style=\"border-top: 1px solid #373737;\">\n          </address> -->\n          <!-- <div id=\"payment-methods\">\n            <span class=\"payment-method\">\n              <a href=\"javascript:;\"><img src=\"assets/image/icon-cc-visa.png\" alt=\"visa\"></a>\n            </span>\n            <span class=\"payment-method\">\n              <a href=\"javascript:;\"><img src=\"assets/image/icon-cc-american-express.png\" alt=\"american-express\"></a>\n            </span>\n            <span class=\"payment-method\">\n              <a href=\"javascript:;\"><img src=\"assets/image/icon-cc-mastercard.png\" alt=\"mastercard\"></a>\n            </span>\n          </div> -->\n          <!-- <br/>\n          <p class=\"font-13 text-gray\">Vaperanger.com offers 1,800+ brands of eLiquid, eJuice, Vape Mods at the best wholesale prices. All eLiquid and Devices ship directly from the manufacturer or their distributor. VapeRanger features Premium e-Liquid brands such as Naked 100 E-Liquid, Ruthless, One Hit Wonder, Kilo/Bazooka/Moo, Cuttwood Vapors!</p>\n          <br/>\n          <p class=\"font-13 text-gray\">Free Shipping only applies to orders placed through www.VapeRanger.com and to the 48 continental United States addresses.</p>\n          <p style=\"font-size: 13px; color: grey;\">Adult Signature required for all deliveries. </p>\n          <br/>\n          <p class=\"font-13 text-gray\">CALIFORNIA PROPOSITION 65 Warning: Nicotine products contain a chemical known to the state of California to cause birth defects or other reproductive harm. Do not use if you are pregnant, and/ or breastfeeding.</p>\n          <br/>\n          <p class=\"font-13 text-gray\">These products are intended for use by persons 18 or older, and not by children, women who are pregnant or breast-feeding, or persons with or at risk of heart disease, high blood pressure, diabetes, or taking medicine for depression or asthma. If you have a demonstrated allergy or sensitivity to nicotine or any combination of inhalants, consult your physician before using this product. This product is sold purely for recreational purposes – it is not a smoking cessation product and has not been tested as such. </p>\n          <br/> -->\n      </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mobile-menu mobile-menu-vertical mobile-menu-left\" id=\"mobile-menu\">\n  <div class=\"mobile-device-menu\">\n    <div class=\"mobile-menu-device-container\"></div>\n  </div>\n</nav>\n<div class=\"wrapper-container\">\n  <div class=\"bg-white\">\n    <a href=\"javascript:;\"><div class=\"topheader\"></div></a>\n  </div>\n  <header class=\"main-header\" role=\"banner\">\n    <div class=\"header-bottom\">\n      <div class=\"container\">  \n        <div class=\"header-mobile\">\n          <div class=\"menu-block visible-phone\">\n            <div id=\"showLeftPush\"></div>\n          </div>\n\n          <div class=\"customer-area dropdown\">\n            <a data-toggle=\"dropdown\" href=\"#\">Dropdown trigger</a>\n            <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n              <p><a href=\"/account/login\" alt=\"Login to VapeRanger Wholesale\">Your Account</a></p>\n              <p><a href=\"/pages/register\" alt=\"Create VapeRanger Account\">Register</a></p>\n              <p><a href=\"/apps/help-center\" alt=\"Contact VapeRanger\">Contact Us</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"customer-account-nav\">\n          <a href=\"javascript:;\">Home</a> |\n          <a href=\"javascript:;\">Login</a> |     \n          <a href=\"javascript:;\">Sign Up</a> | \n          <a href=\"javascript:;\">Retail Store</a>\n        </div>\n      \n      <div class=\"header-logo col-xs-12 col-sm-4\">\n        <a href=\"javascript:;\">\n          <img src=\"assets/image/smoke-logo_small.png\" width=\"200px\" alt=\"\">\n        </a>\n      </div>\n      <ul class=\"customer-links\">\n        <li>\n          <a href=\"javascript:;\"><b>Login</b></a><span class=\"or\">|</span>\n          <a href=\"javascript:;\"><span style=\"color: red;\"><b>Create Account</b></span></a>\n          <span class=\"or\">|</span>\n          <a href=\"javascript:;\"><span style=\"color: blue;\"><b>Retail Store</b></span></a>\n        </li>\n        <li>&nbsp;|&nbsp;<a href=\"javascript:;\"><b>GCC Forms</b></a></li>\n        <li>&nbsp;|&nbsp;<a href=\"javascript:;\"><b>FAQ / HELP</b></a></li>\n      </ul>\n\n      <div class=\"top-header\">\n        <div class=\"wrapper-top-cart\">\n          <p class=\"top-cart\">\n            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n            <a href=\"javascript:;\" id=\"cartToggle\">\n              <span class=\"first\">Cart</span>\n              <span id=\"cartCount\">0</span>\n            </a>\n          </p>\n          <div id=\"dropdown-cart\" style=\"display: none;\">\n            <div class=\"bag-product clearfix\">\n              <figure class=\"pull-left\">\n                <a class=\"bag-product-img\" href=\"javascript:;\">\n                  <img width=\"120\" height=\"150\" src=\"assets/image/shirt.jpg\">\n                </a>\n              </figure>\n              <div class=\"bag-product-details\">\n                <div class=\"bag-product-title\">\n                  <a href=\"javascript:;\">Cloyd Shirt</a>\n                </div>\n                <div class=\"bag-product-price\">Unit Price: \n                  <span class=\"amount\">£200</span>\n                </div>\n                <div class=\"bag-product-quantity\">Quantity: 1</div>\n              </div>\n              <a href=\"javascript:;\" class=\"remove-product fa fa-times\"></a> \n            </div>\n            <div class=\"has-items\">\n              <ol class=\"mini-products-list\">\n              </ol>\n              <div class=\"summary\">\n                <p class=\"total\">\n                  <span class=\"label\" style=\"color:#000\">Total:</span>\n                  <span class=\"price\">$0.00</span>\n                </p>\n              </div>\n              <div class=\"actions\">\n                <button class=\"btn btn2\">Go to Cart</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- End Top Header -->\n      <div class=\"header-panel-top\">\n        <div class=\"nav-search\">                            \n          <a class=\"icon-search\" href=\"javascript:;\">Search Bar</a>\n          <form action=\"#\" method=\"get\" class=\"input-group search-bar\" role=\"search\">\n            <input style=\"min-width: 275px;\" type=\"text\" name=\"q\" value=\"\" placeholder=\"Search Bar\" class=\"input-group-field\">\n            <span class=\"input-group-btn\">\n              <input type=\"submit\" class=\"btn fa fa-search\" value=\"Search\">\n            </span>\n          </form>\n        </div>\n        <div class=\"currency\"></div>\n      </div>\n      <div class=\"header-panel\">\n        <div class=\"row\">\n          <div class=\"header-panel-bottom col-xs-8\">\n          </div>\n          <div class=\"nav-search on\">                                \n            <a class=\"icon-search\" href=\"javascript:;\">Search Brands, Flavors, Categories</a>\n            <form action=\"#\" method=\"get\" class=\"input-group search-bar\" role=\"search\">\n              <input style=\"min-width: 275px;\" type=\"text\" name=\"q\" value=\"\" placeholder=\"Search 1,800 Brands, Flavors, Hardware\" class=\"input-group-field\" aria-label=\"Search Site\" autocomplete=\"off\">\n              <span class=\"input-group-btn\">\n                <input type=\"submit\" class=\"btn\" value=\"Search\">\n              </span>\n            </form>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <nav class=\"nav-bar\" role=\"navigation\">                    \n      <div class=\"container\">\n        <ul class=\"site-nav\">\n          <li class=\"dropdown\">\n            <a href=\"javascript:;\">\n              <span>Home</span>\n              <span class=\"icon-dropdown\"></span>\n            </a>\n            <div class=\"site-nav-dropdown\">\n              <div class=\"col-md-8 col-sm-9\">\n                  <ul class=\"col-sm-4\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-4\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-4\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-4\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-4\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-4\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n            </div>\n              <div class=\"col-md-4 col-sm-3 hidden-xs\">\n                <div class=\"menu_image\"><a title=\"\" href=\"javascript:;\"><img alt=\"menu_image\" src=\"http://htmldemo.themesmart.net/flavours/version2/images/menu-bag.png\"></a></div>\n              </div>\n            </div>            \n          </li>\n          <li class=\"dropdown \">\n            <a href=\"javascript:;\">\n              <span>Company</span>\n              <span class=\"icon-dropdown\"></span>\n            </a>\n            <div class=\"site-nav-dropdown\">\n              <div class=\"col-xs-12\">\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n            </div>\n              <div class=\"col-sm-12 hidden-xs\">\n                <div class=\"col-sm-3\">\n                  <div class=\"menu_image\"><a title=\"\" href=\"javascript:;\"><img alt=\"menu_image\" src=\"http://htmldemo.themesmart.net/flavours/version2/images/menu-bag.png\"></a></div>\n                </div>\n                <div class=\"col-sm-3\">\n                  <div class=\"menu_image\"><a title=\"\" href=\"javascript:;\"><img alt=\"menu_image\" src=\"http://htmldemo.themesmart.net/flavours/version2/images/menu-bag.png\"></a></div>\n                </div>\n                <div class=\"col-sm-3\">\n                  <div class=\"menu_image\"><a title=\"\" href=\"javascript:;\"><img alt=\"menu_image\" src=\"http://htmldemo.themesmart.net/flavours/version2/images/menu-bag.png\"></a></div>\n                </div>\n                <div class=\"col-sm-3\">\n                  <div class=\"menu_image\"><a title=\"\" href=\"javascript:;\"><img alt=\"menu_image\" src=\"http://htmldemo.themesmart.net/flavours/version2/images/menu-bag.png\"></a></div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li><a href=\"javascript:;\">Product</a></li>\n          <li class=\"dropdown \">\n            <a href=\"javascript:;\">\n              <span>New Stuff</span>\n              <span class=\"icon-dropdown\"></span>\n            </a>\n            <div class=\"site-nav-dropdown\">\n              <div class=\"col-xs-12\">\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n            </div>\n            </div>\n          </li>\n          <li><a href=\"javascript:;\">Hardware</a></li>\n          <li class=\"dropdown \">\n            <a href=\"javascript:;\">\n              <span>Sample</span>\n              <span class=\"icon-dropdown\"></span>\n            </a>\n            <div class=\"site-nav-dropdown\">\n              <div class=\"col-xs-12\">\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n                  <ul class=\"col-sm-2\">\n                    <li><strong>Hardware</strong></li>\n                    <li><a href=\"javascript:;\">All Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Products</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                    <li><a href=\"javascript:;\">Featured Brands</a></li>\n                  </ul>\n            </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sharedService) {
        this.sharedService = sharedService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            providers: [_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService, Category, Brand, MenuDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDto", function() { return MenuDto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observer } from 'rxjs';
// import 'rxjs/Rx';


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].productUrl;
    }
    // getMenu(): Observable<any> {
    //   return this.http.get(this.url + '/getWebMenu')
    //   .pipe (
    //     catchError((error)=>{
    //       return throwError('some goes wrong');
    //     })
    //   )
    // }
    SharedService.prototype.extractData = function (res) {
        var body = res.json();
        // console.log(body);
        return body || {};
    };
    SharedService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());

var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());

var Brand = /** @class */ (function () {
    function Brand() {
    }
    return Brand;
}());

// export class Model {
//   name: string;
//   modelId: number;
// }
var MenuDto = /** @class */ (function () {
    function MenuDto() {
    }
    return MenuDto;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    //productUrl: 'http://localhost:8080'
    productUrl: 'http://96.73.255.162:5004'
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // productUrl: 'http://localhost:8080'
    productUrl: 'http://96.73.255.162:5004'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Alok/Desktop/My-Project/elements-distribution/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map