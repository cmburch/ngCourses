import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
            <img [src] ="imageUrl" />
        </ul>
        `
})

export class CoursesComponent{
    title:string = 'List of Courses';
    courses;
    imageUrl ="http://ncaa06revival.com/wp-content/uploads/2016/11/bradleys-book-outlet-books-only-logo.png";

    constructor(service:CoursesService){
        //not losely couple bad practice below
        // let service = new CoursesService();
        this.courses = service.getCourse();
    }
}