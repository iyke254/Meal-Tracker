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
var MealListComponent = (function () {
    function MealListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.selectedCompleteness = "notDone";
    }
    MealListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedCompleteness = optionFromMenu;
        console.log(this.selectedCompleteness);
    };
    MealListComponent.prototype.editButtonHasBeenClicked = function (MealToEdit) {
        this.clickSender.emit(MealToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "clickSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n    <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n      <option value=\"all\">Show Meals with 500 calories and above</option>\n      <option value=\"isDone\">Show Meals with less than 500 calories</option>\n      <option value=\"all2\">Show All</option>\n    </select>\n    <div *ngFor=\"let currentMeal of childMealList | complete:selectedComplete\">\n      <meal-display [meal]=\"currentMeal\"></meal-display>\n      <button (click)=\"editButtonHasBeenClicked(currentMeal)\">Edit</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map