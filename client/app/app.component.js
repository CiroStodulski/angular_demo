"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(http) {
<<<<<<< HEAD
        var _this = this;
        http.get('/dado')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.dados = res; }, function (err) { return console.log(err); });
=======
>>>>>>> 479cfa9fd6c1f5b5ce72bb4a1eaaba21ce0a3944
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app/app.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map