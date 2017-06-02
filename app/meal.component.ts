import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <input *ngIf="meal.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="meal.done === false" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>
  </div>
  `
})
export class MealComponent {
  @Input() meal: Meal;
  toggleDone(setCompleteness: boolean) {
    this.meal.done = setCompleteness;
  }
}
