import {Component}from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
<div class="container-fluid">
<h1>Meal Tracker</h1>
  <div class ="ml col-md-6">
    <p>Welcome to Your daily Calorie Counter<p>
    <p>Here you can input your meals and calories and keep a record of them.</p>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
  </div>
  <div class="nm col-md-6">
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
</div>
 `
})
export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Chapati.", 500),
    new Meal("Ugali.", 700),
    new Meal("Mandazi.", 250),
    new Meal("Fruit Salad.", 200),
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
