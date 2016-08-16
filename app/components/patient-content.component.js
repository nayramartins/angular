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
var patientContent = (function () {
    function patientContent() {
        this.contentTitle = "Patient Zero File";
        this.cardTexts = [{
                'cardTitle': "Card One",
                'cardContent': "This text might describe the photo and provide further information, such as where and when it was taken.",
                'cardLink': "#"
            }, {
                'cardTitle': "Card Two",
                'cardContent': "This text might describe the photo and provide further information, such as where and when it was taken.",
                'cardLink': "#"
            }, {
                'cardTitle': "Card Three",
                'cardContent': "This text might describe the photo and provide further information, such as where and when it was taken.",
                'cardLink': "#"
            }, {
                'cardTitle': "Card Four",
                'cardContent': "This text might describe the photo and provide further information, such as where and when it was taken.",
                'cardLink': "#"
            }, {
                'cardTitle': "Card Five",
                'cardContent': "This text might describe the photo and provide further information, such as where and when it was taken.",
                'cardLink': "#"
            }, {
                'cardTitle': "Card Six",
                'cardContent': "This text might describe the photo and provide further information, such as where and when it was taken.",
                'cardLink': "#"
            }];
    }
    patientContent = __decorate([
        core_1.Component({
            selector: 'patient-content',
            templateUrl: './app/html/content-index.html'
        }), 
        __metadata('design:paramtypes', [])
    ], patientContent);
    return patientContent;
}());
exports.patientContent = patientContent;
//# sourceMappingURL=patient-content.component.js.map