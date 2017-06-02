import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TaskListComponent } from './meal-list.component';
import { EditTaskComponent } from './edit-meal.component';
import { NewTaskComponent } from './new-meal.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './meal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    EditMealComponent,
    NewMEalComponent,
    CompletenessPipe,
    MealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
