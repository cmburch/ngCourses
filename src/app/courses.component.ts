import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
        <h2>{{title | summary }}</h2>
        <h2>{{subtitle | summary:20 }}</h2>
        
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
            <img [src] ="imageUrl" />
            <table>
                <tr>
                    <td [attr.colspan]="colspan"></td>
                </tr>
            </table>
        </ul>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button (click)="onSave()">Click</button>
        <button (click)="onSave1($event)">Click2</button>
        <br>
        <label>event</label>
        <input (keyup.enter)="onKeyUp()"/>

        <br>
        <label>event2</label>
        <input (keyup.enter)="onKeyUpEvent($event)"/>

        <br>
        <label>event3</label>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUpEvent3($event)"/>
        `
})

export class CoursesComponent{
    title:string = 'List of Courses';
    subtitle:string="The subtile is way to long to fit this line"
    email:string;
    courses;
    imageUrl ="http://ncaa06revival.com/wp-content/uploads/2016/11/bradleys-book-outlet-books-only-logo.png";
    isActive = "true";

    constructor(service:CoursesService){
        //not losely couple bad practice below
        // let service = new CoursesService();
        this.courses = service.getCourse();
    }

    onSave(){
        console.log("hello");
    }
    onSave1($event){
        console.log("Button was clicked", $event);
    }
    onKeyUp(){
        console.log("enter was pressed");
    }
    onKeyUpEvent($event){
        console.log("Button was clicked", $event.target.value);
    }
    onKeyUpEvent3($event){
        console.log("Button was clicked", this.email);
    }
}