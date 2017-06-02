import {Component}from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
<div class="container">
  <h1>Meal Tracker</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" class="form-control" type="text">
      </div>
      <div class="form-group">
        <label for="details">Details</label>
        <input id="details" class="form-control" type="text">
      </div>
      <div class="form-group">
        <label for="cal">Calories</label>
        <input id="cal" class="form-control" type="number">
      </div>
    </form>
    <button type="submit" class="btn">Save</button>
    <button type="submit" class="btn">Edit</button>
</div>  `
})
export class AppComponent{

}
