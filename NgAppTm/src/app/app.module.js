"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var publication_component_1 = require("./publication/publication.component");
var publicationList_component_1 = require("./publication/publicationList.component");
// import { PublicationTitlePipe }  from './publication/publication.Title.pipe';
var PublicationCount_component_1 = require("./publication/PublicationCount.component");
var simple_component_1 = require("./utils/simple.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./home/pageNotFound.component");
var router_1 = require("@angular/router");
var blog_component_1 = require("./blog/blog.component");
var blogList_component_1 = require("./blog/blogList.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'publications', component: publicationList_component_1.PublicationListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [simple_component_1.SimpleComponent, app_component_1.AppComponent, publication_component_1.PublicationComponent, publicationList_component_1.PublicationListComponent, PublicationCount_component_1.PublicationCountComponent, home_component_1.HomeComponent, blog_component_1.BlogComponent, blogList_component_1.BlogListComponent, pageNotFound_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map