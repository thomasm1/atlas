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
var core_1 = require("@angular/core");
var user_service_1 = require("../adminShared/user.service");
var router_1 = require("@angular/router");
var SignUpComponent = (function () {
    function SignUpComponent(userSVC, router) {
        this.userSVC = userSVC;
        this.router = router;
        this.passwordFail = false;
    }
    SignUpComponent.prototype.signUp = function () {
        if (this.password1 !== this.password2) {
            this.passwordFail = true;
        }
        else {
            this.passwordFail = false;
            this.userSVC.register(this.email, this.password1);
            this.userSVC.verifyUser();
        }
    };
    SignUpComponent.prototype.cancel = function () {
        this.router.navigate(['/admin/login']);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map