webpackJsonp([0,3],{

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockService = (function () {
    function StockService(http) {
        this.http = http;
        this.stocksUrl = '/api/stocks';
    }
    // get("/api/stocks")
    StockService.prototype.getStocks = function () {
        return this.http.get(this.stocksUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/stocks")
    StockService.prototype.createStock = function (newStock) {
        return this.http.post(this.stocksUrl, newStock)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/stocks/:id") endpoint not used by Angular app
    // delete("/api/stocks/:id")
    StockService.prototype.deleteStock = function (delStockId) {
        return this.http.delete(this.stocksUrl + '/' + delStockId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/stocks/:id")
    StockService.prototype.updateStock = function (putStock) {
        var putUrl = this.stocksUrl + '/' + putStock.id;
        return this.http.put(putUrl, putStock)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StockService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    StockService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], StockService);
    return StockService;
    var _a;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/stock.service.js.map

/***/ },

/***/ 403:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 403;


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(511);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/main.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(673),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/app.component.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stocks_stock_details_stock_details_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stocks_stock_list_stock_list_component__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__stocks_stock_details_stock_details_component__["a" /* StockDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__stocks_stock_list_stock_list_component__["a" /* StockListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/app.module.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(214);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteService = (function () {
    function QuoteService(http) {
        this.http = http;
    }
    QuoteService.prototype.fillStocks = function (stocks) {
        if (stocks == null || stocks.length === 0)
            return null;
        var stocklist = stocks.map(function (s) { return s.symbol; }).join(',');
        var quoteUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20"
            + "yahoo.finance.quote%20where%20symbol%20in%20(%22"
            + stocklist
            + "%22)&format=json&env=store://datatables.org/alltableswithkeys";
        return this.http.get(quoteUrl).map(function (response) { return response.json().query.results.quote; });
    };
    QuoteService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    QuoteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], QuoteService);
    return QuoteService;
    var _a;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/quote.service.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_service__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StockDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockDetailsComponent = (function () {
    function StockDetailsComponent(stockService) {
        this.stockService = stockService;
    }
    StockDetailsComponent.prototype.createStock = function (stock) {
        var _this = this;
        this.stockService.createStock(stock).then(function (newStock) {
            _this.createHandler(newStock);
        });
    };
    StockDetailsComponent.prototype.updateStock = function (stock) {
        var _this = this;
        this.stockService.updateStock(stock).then(function (updatedStock) {
            _this.updateHandler(updatedStock);
        });
    };
    StockDetailsComponent.prototype.deleteStock = function (stockId) {
        var _this = this;
        this.stockService.deleteStock(stockId).then(function (deletedStockId) {
            _this.deleteHandler(deletedStockId);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stock__["a" /* Stock */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__stock__["a" /* Stock */]) === 'function' && _a) || Object)
    ], StockDetailsComponent.prototype, "stock", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], StockDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], StockDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], StockDetailsComponent.prototype, "deleteHandler", void 0);
    StockDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'stock-details',
            template: __webpack_require__(674),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */]) === 'function' && _b) || Object])
    ], StockDetailsComponent);
    return StockDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/stock-details.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_service__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StockListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockListComponent = (function () {
    function StockListComponent(stockService, quoteService) {
        var _this = this;
        this.stockService = stockService;
        this.quoteService = quoteService;
        this.over5Buttons = function () {
            if (_this.stocks == null)
                return true;
            if (_this.stocks.length >= 5)
                return true;
            return false;
        };
        this.deleteStock = function (stockId) {
            var idx = _this.getIndexOfStock(stockId);
            if (idx !== -1) {
                _this.stocks.splice(idx, 1);
                _this.selectStock(null);
            }
            return _this.stocks;
        };
        this.addStock = function (stock) {
            _this.stocks.push(stock);
            _this.selectStock(stock);
            return _this.stocks;
        };
        this.updateStock = function (stock) {
            var idx = _this.getIndexOfStock(stock.id);
            if (idx !== -1) {
                _this.stocks[idx] = stock;
                _this.selectStock(stock);
            }
            return _this.stocks;
        };
        this.matchStockInfo = function (stocks, sinfos) {
            var hashmap = [];
            sinfos.map(function (s) {
                if (s != null)
                    hashmap[s.Symbol] = s;
            });
            _this.stocks = stocks.map(function (s) {
                s.oldprice = s.price;
                var sinfo = hashmap[s.symbol];
                if (sinfo != null) {
                    s.price = sinfo.LastTradePriceOnly;
                    s.company = sinfo.Name;
                }
                return s;
            });
        };
        this.getIndexOfStock = function (stockId) {
            return _this.stocks.findIndex(function (stock) {
                return stock.id.toString() === stockId;
            });
        };
    }
    StockListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioInit();
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(5000)
            .subscribe(function () {
            _this.quoteService
                .fillStocks(_this.stocks)
                .subscribe(function (info) { return _this.matchStockInfo(_this.stocks, info); }, function (e) { return console.log('onError: %s', e); }, function () { return console.log('onCompleted'); });
        });
    };
    StockListComponent.prototype.selectStock = function (stock) {
        this.selectedStock = stock;
    };
    StockListComponent.prototype.createNewStock = function () {
        var stock = {
            symbol: '',
            company: '',
            quantity: 0,
            price: 0,
            oldprice: 0,
            subtotal: 0
        };
        // By default, a newly-created stock will have the selected state.
        this.selectStock(stock);
    };
    StockListComponent.prototype.portfolioInit = function () {
        var _this = this;
        this.stockService
            .getStocks()
            .then(function (stocks) {
            _this.stocks = stocks.map(function (stock) {
                return stock;
            });
            _this.quoteService
                .fillStocks(_this.stocks)
                .subscribe(function (info) { return _this.matchStockInfo(_this.stocks, info); }, function (e) { return console.log('onError: %s', e); }, function () { return console.log('onCompleted'); });
        });
    };
    StockListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'stock-list',
            template: __webpack_require__(675),
            styles: [__webpack_require__(672)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_3__quote_service__["a" /* QuoteService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__quote_service__["a" /* QuoteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__quote_service__["a" /* QuoteService */]) === 'function' && _b) || Object])
    ], StockListComponent);
    return StockListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/stock-list.component.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Stock; });
var Stock = (function () {
    function Stock() {
    }
    return Stock;
}());
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/stock.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/environment.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/kevinchwong/myHeroku/angularjs2/kcw-mean/src/polyfills.js.map

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = ".sp-table th{\n\tpadding-left: 25px;\n\twidth:210px;\n}\n\n.sp-table td{\n\tpadding-left: 10px;\n\twidth:210px;\n}\n\nbutton.sp-table {\n\tmargin-top: 10px;\n}\n\n.sp-price{\n\tcolor:rgb(0,200,0);\n}\n\n.sp-price.red{\n\tcolor:red;\n}\n\n.sp-editor {\n\tmargin-top: 30px;\n}\n\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <stock-list></stock-list>\n</div>"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"stock\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 *ngIf=\"stock.id\">Change your stock detail</h4>\n    <h4 *ngIf=\"!stock.id\">Enter new stock symbol and quantity</h4>\n  </div>\n</div>\n<div *ngIf=\"stock\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"stock-symbol\">Symbol</label>\n      <input class=\"form-control\" name=\"stock-symbol\" [(ngModel)]=\"stock.symbol\" placeholder=\"Symbol\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"stock-quantity\">Number of shares owned</label>\n      <input class=\"form-control\" name=\"stock-quantity\" [(ngModel)]=\"stock.quantity\" placeholder=\"Share Amount\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!stock.id\" (click)=\"createStock(stock)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"stock.id\" (click)=\"updateStock(stock)\">Save Change</button>\n    <button class=\"btn btn-danger\" *ngIf=\"stock.id\" (click)=\"deleteStock(stock.id)\">Delete</button>\n  </form>\n</div>\n"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  \n  <div>\n    <h2>Stock Portfolio</h2>\n    <h5>by Kevin Wong</h5>\n  </div>\n\n\n  <table class=\"sp-table\">\n    <thead>\n      <th>Symbol</th>\n      <th>Company Name</th>\n      <th>Last Trade Price</th>\n      <th>Number of shares owned</th>\n      <th>Market value of stake</th>\n    </thead>\n  </table>\n\n  <table class=\"sp-table\">\n    <tr *ngFor=\"let stock of stocks\" class=\"list-group-item\" (click)=\"selectStock(stock)\" [class.active]=\"stock === selectedStock\">\n      <td>{{stock.symbol}}</td>\n      <td>{{stock.company}}</td>\n      <td class=\"sp-price\" [class.red]=\"stock.price<stock.oldprice\" >{{stock.price| currency:'USD':true:'1.2-2'}}</td>\n      <td>{{stock.quantity}}</td>\n      <td>{{stock.price*stock.quantity| currency:'USD':true:'1.2-2'}}</td>\n    </tr>\n  </table>\n\n  <button class=\"sp-table btn btn-warning\" [disabled]=\"over5Buttons()\" (click)=\"createNewStock()\">New Stock (Up to 5)</button>\n\n  <div>\n    <h5>Click a row to select a particular stock to edit its detail.</h5>\n  </div>\n\n  <div class=\"sp-editor\">\n    <stock-details\n      [stock]=\"selectedStock\"\n      [createHandler]=\"addStock\"\n      [updateHandler]=\"updateStock\"\n      [deleteHandler]=\"deleteStock\">\n    </stock-details>    \n  </div>\n</div>\n"

/***/ },

/***/ 949:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ }

},[949]);
//# sourceMappingURL=main.bundle.map