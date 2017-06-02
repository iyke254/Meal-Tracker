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
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealkSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.addClicked = function (description, id) {
        var newMealToAdd = new Meal(description, id);
        this.newMealSender.emit(newMealToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealkSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n    <h1>New Meal</h1>\n    <div>\n      <label>Enter Meal Description:</label>\n      <input #newDescription>\n    </div>\n    <div>\n      <label>Enter Meal Calories:</label>\n      <input #newId>\n      <button (click)=\"\n        addClicked(newDescription.value, newId.value);\n        newDescription.value='';\n        newId.value='';\n      \">Add</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map