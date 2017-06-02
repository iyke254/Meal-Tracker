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
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newTaskFromChild);
  }
}
