System.register(['angular2/core', '../directives/angular2-infinitescroll'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_infinitescroll_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_infinitescroll_1_1) {
                angular2_infinitescroll_1 = angular2_infinitescroll_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.testData = [
                        {
                            text: 'test1'
                        },
                        {
                            text: 'test2',
                        },
                        {
                            text: 'test3',
                        },
                        {
                            text: 'test4',
                        },
                        {
                            text: 'test5',
                        },
                        {
                            text: 'test6',
                        },
                        {
                            text: 'test7',
                        },
                        {
                            text: 'test8',
                        },
                    ];
                }
                AppComponent.prototype.nextPage = function () {
                    console.log('Reached Bottom!!');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [angular2_infinitescroll_1.InfiniteScroll],
                        template: "\n        <div class=\"row\">\n          <div class=\"col-xs-6\">\n            <div class=\"search-results\" (OnScrollMethod) = \"nextPage()\" ScrollDistance=\"3\" InfiniteScroll style=\"height: 170px !important;overflow: scroll\">\n              <div *ngFor =\"#data of testData\">\n                 <p> {{data.text}} </p>\n              </div>\n              </div>\n            </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map