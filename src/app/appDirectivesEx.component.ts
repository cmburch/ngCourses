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

    <ul class="nav nav-pills">
        <li [class.active]="viewMode =='map'"><a (click)="viewMode =='map'"href="">Map View</a></li>
        <li [class.active]="viewMode =='list'"><a (click)="viewMode =='list'" href="">List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
        <div *ngSwitchCase="'map'">Map View Content</div>
        <div *ngSwitchCase="'list'">List View Content</div>
        <div *ngSwitchDefault>Defaultt</div>
        
    </div>    

    `
})

export class appDirectivesEx{
    courses:number[] = [];
    viewMode:string = "map";
}