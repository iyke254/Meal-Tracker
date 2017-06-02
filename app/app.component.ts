import {Component}from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
<div class="container">
  <h1>Meal Tracker</h1>
  <meal-list
    [childMealList]="masterMealList"
    (clickSender)="showDetails($event)"
    ></meal-list>
  <edit-meal
    [childSelectedMeal]="selectedMeal"
    (doneClickedSender)="finishedEditing()"
  ></edit-meal>
  <new-meal
      (newMealSender)="addMeal($event)"
  ><new-meal>
</div>
 `
})
export class AppComponent{

}
