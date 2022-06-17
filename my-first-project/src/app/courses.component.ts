import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `<h2>{{ getTitle() }}</h2>
    <button class="btn btn-primary" [class.active]="isActive">save</button>
    <br />
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">
      style binding
    </button>
    <br />
    <button
      (click)="onSave()"
      [style.backgroundColor]="isActive ? 'blue' : 'white'"
    >
      Save button
    </button>

    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <!--<img src="{{imageUrl}}" />-->
    <img [src]="imageUrl" />
    <br>
    {{course.title |uppercase}} <br>
    {{course.students | number}} <br>
    {{course.rating |number:'1.2-2'}} <br>
    {{course.price | currency:'Rs'}} <br>
    {{course.releaseDate | date}} <br>`,
})
export class CoursesComponent {
  title = 'list of courses';
  getTitle() {
    return this.title;
  }
  courses;
  constructor(service: CoursesService) {
    //let service = new CoursesService();
    this.courses = service.getCourses();
  }
  imageUrl = 'AngularJS-Shield.svg';
  isActive = true;
  onSave() {
    console.log('button was clicked');
  }

  //pipes
  course={
      title:"the angular js",
      rating:4.5238,
      students:30555,
      price:190.95,
      releaseDate:new Date(2016, 3, 1)
  }  
}
