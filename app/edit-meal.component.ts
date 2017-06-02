import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>input your Meals</h1>
      <div>
        <label>Enter Meal Description:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Enter Meal Calories:</label>
        <input [(ngModel)]="childSelectedMeal.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
