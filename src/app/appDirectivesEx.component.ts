import { Component } from "@angular/core";

@Component({
    selector:'appDirectivesEx',
    template:`
    <h2>Show up</h2>
    <div *ngIf="courses.length > 0">
        List of courses
    </div>
    <div *ngIf="courses.length == 0">
        No courses Yet!!!!!!!
    </div>

    `

})

export class appDirectivesEx{
    courses:number[] = [];
}