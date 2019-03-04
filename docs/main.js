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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/animal.action.ts":
/*!******************************************!*\
  !*** ./src/app/actions/animal.action.ts ***!
  \******************************************/
/*! exports provided: AnimalActionType, AnimalAction, AddAnimal, DeleteAnimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalActionType", function() { return AnimalActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalAction", function() { return AnimalAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnimal", function() { return AddAnimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAnimal", function() { return DeleteAnimal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AnimalActionType;
(function (AnimalActionType) {
    AnimalActionType["ADD_ANIMAL"] = "ADD_ANIMAL";
    AnimalActionType["DELETE_ANIMAL"] = "DELETE_ANIMAL";
})(AnimalActionType || (AnimalActionType = {}));
var AnimalAction = /** @class */ (function () {
    function AnimalAction(type, payload) {
        this.type = type;
        this.payload = payload;
    }
    return AnimalAction;
}());

var AddAnimal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddAnimal, _super);
    function AddAnimal(animal) {
        return _super.call(this, AnimalActionType.ADD_ANIMAL, animal) || this;
    }
    return AddAnimal;
}(AnimalAction));

var DeleteAnimal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeleteAnimal, _super);
    function DeleteAnimal(animal) {
        return _super.call(this, AnimalActionType.DELETE_ANIMAL, animal) || this;
    }
    return DeleteAnimal;
}(AnimalAction));



/***/ }),

/***/ "./src/app/actions/human.action.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/human.action.ts ***!
  \*****************************************/
/*! exports provided: HumanActionType, HumanAction, AddHuman, DeleteHuman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanActionType", function() { return HumanActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanAction", function() { return HumanAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHuman", function() { return AddHuman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteHuman", function() { return DeleteHuman; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var HumanActionType;
(function (HumanActionType) {
    HumanActionType["ADD_HUMAN"] = "ADD_HUMAN";
    HumanActionType["DELETE_HUMAN"] = "DELETE_HUMAN";
})(HumanActionType || (HumanActionType = {}));
var HumanAction = /** @class */ (function () {
    function HumanAction(type, payload) {
        this.type = type;
        this.payload = payload;
    }
    return HumanAction;
}());

var AddHuman = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddHuman, _super);
    function AddHuman(human) {
        return _super.call(this, HumanActionType.ADD_HUMAN, human) || this;
    }
    return AddHuman;
}(HumanAction));

var DeleteHuman = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeleteHuman, _super);
    function DeleteHuman(human) {
        return _super.call(this, HumanActionType.DELETE_HUMAN, human) || this;
    }
    return DeleteHuman;
}(HumanAction));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/_index */ "./src/app/reducers/_index.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 10
                })
            ],
            providers: [],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.css":
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  padding: 10px;\n}\n\n.column {\n  float: left;\n  width: 50%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\"><label for=\"name\">Name:</label> <input id=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required /></div>\n\n    <div class=\"form-group\"><label for=\"human\">Human</label> <input id=\"human\" name=\"species\" [(ngModel)]=\"species\" value=\"HUMAN\" type=\"radio\" required /></div>\n\n    <div class=\"form-group\"><label for=\"animal\">Animal</label> <input id=\"animal\" name=\"species\" [(ngModel)]=\"species\" value=\"ANIMAL\" type=\"radio\" required /></div>\n\n    <div class=\"form-group\"><button type=\"submit\">Ajouter</button></div>\n\n    <div class=\"row\">\n      <div class=\"column\">\n        <h3 *ngIf=\"(animals$ | async)?.length\">Animals List</h3>\n        <ol>\n          <li *ngFor=\"let animal of (animals$ | async)\">{{ animal.name }} <button (click)=\"deleteAnimal(animal)\">X</button></li>\n        </ol>\n      </div>\n\n      <div class=\"column\">\n        <h3 *ngIf=\"(humans$ | async)?.length\">Humans List</h3>\n        <ol>\n          <li *ngFor=\"let human of (humans$ | async)\">{{ human.name }} <button (click)=\"deleteHuman(human)\">X</button></li>\n        </ol>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _models_animal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/animal.model */ "./src/app/models/animal.model.ts");
/* harmony import */ var _models_human_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/human.model */ "./src/app/models/human.model.ts");
/* harmony import */ var _actions_human_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/human.action */ "./src/app/actions/human.action.ts");
/* harmony import */ var _actions_animal_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/animal.action */ "./src/app/actions/animal.action.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.animals$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (s) { return s.animals; }));
        this.humans$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(function (s) { return s.humans; }));
    }
    AppComponent.prototype.onSubmit = function () {
        if (this.species === "HUMAN") {
            var human = new _models_human_model__WEBPACK_IMPORTED_MODULE_4__["HumanModel"](this.name);
            this.addHuman(human);
        }
        else if (this.species === "ANIMAL") {
            var animal = new _models_animal_model__WEBPACK_IMPORTED_MODULE_3__["AnimalModel"](this.name);
            this.addAnimal(animal);
        }
    };
    AppComponent.prototype.addHuman = function (human) {
        this.store.dispatch(new _actions_human_action__WEBPACK_IMPORTED_MODULE_5__["AddHuman"](human));
    };
    AppComponent.prototype.addAnimal = function (animal) {
        this.store.dispatch(new _actions_animal_action__WEBPACK_IMPORTED_MODULE_6__["AddAnimal"](animal));
    };
    AppComponent.prototype.deleteHuman = function (human) {
        this.store.dispatch(new _actions_human_action__WEBPACK_IMPORTED_MODULE_5__["DeleteHuman"](human));
    };
    AppComponent.prototype.deleteAnimal = function (animal) {
        this.store.dispatch(new _actions_animal_action__WEBPACK_IMPORTED_MODULE_6__["DeleteAnimal"](animal));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/models/animal.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/animal.model.ts ***!
  \****************************************/
/*! exports provided: AnimalModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalModel", function() { return AnimalModel; });
var AnimalModel = /** @class */ (function () {
    function AnimalModel(name) {
        this.name = name;
    }
    return AnimalModel;
}());



/***/ }),

/***/ "./src/app/models/human.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/human.model.ts ***!
  \***************************************/
/*! exports provided: HumanModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanModel", function() { return HumanModel; });
var HumanModel = /** @class */ (function () {
    function HumanModel(name) {
        this.name = name;
    }
    return HumanModel;
}());



/***/ }),

/***/ "./src/app/reducers/_index.ts":
/*!************************************!*\
  !*** ./src/app/reducers/_index.ts ***!
  \************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _human_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./human.reducer */ "./src/app/reducers/human.reducer.ts");
/* harmony import */ var _animal_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animal.reducer */ "./src/app/reducers/animal.reducer.ts");


var reducers = {
    humans: _human_reducer__WEBPACK_IMPORTED_MODULE_0__["humanReducer"],
    animals: _animal_reducer__WEBPACK_IMPORTED_MODULE_1__["animalReducer"]
};


/***/ }),

/***/ "./src/app/reducers/animal.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/animal.reducer.ts ***!
  \********************************************/
/*! exports provided: animalReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animalReducer", function() { return animalReducer; });
/* harmony import */ var _actions_animal_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/animal.action */ "./src/app/actions/animal.action.ts");

var initialState = [];
function animalReducer(previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    switch (action.type) {
        case _actions_animal_action__WEBPACK_IMPORTED_MODULE_0__["AnimalActionType"].ADD_ANIMAL:
            previousState.push(action.payload);
            return previousState;
        case _actions_animal_action__WEBPACK_IMPORTED_MODULE_0__["AnimalActionType"].DELETE_ANIMAL:
            previousState = previousState.filter(function (animal) { return animal.name !== action.payload.name; });
            return previousState;
        default:
            return previousState;
    }
}


/***/ }),

/***/ "./src/app/reducers/human.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/human.reducer.ts ***!
  \*******************************************/
/*! exports provided: humanReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanReducer", function() { return humanReducer; });
/* harmony import */ var _actions_human_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/human.action */ "./src/app/actions/human.action.ts");

var initialState = [];
function humanReducer(previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    switch (action.type) {
        case _actions_human_action__WEBPACK_IMPORTED_MODULE_0__["HumanActionType"].ADD_HUMAN:
            previousState.push(action.payload);
            return previousState;
        case _actions_human_action__WEBPACK_IMPORTED_MODULE_0__["HumanActionType"].DELETE_HUMAN:
            previousState = previousState.filter(function (human) { return human.name !== action.payload.name; });
            return previousState;
        default:
            return previousState;
    }
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MECHERI\Downloads\ngrx-store-example-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map