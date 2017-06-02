import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Meal Calories:</label>
      <input #newId>
      <button (click)="
        addClicked(newDescription.value, newId.value);
        newDescription.value='';
        newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealkSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newMealToAdd: Task = new Meal(description, id);
    this.newMealSender.emit(newMealToAdd);
  }
}