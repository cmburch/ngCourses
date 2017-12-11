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
        <li [class.active]="viewMode =='map'"><a (click)="viewMode = 'map'">Map View</a></li>
        <li [class.active]="viewMode =='list'"><a (click)="viewMode = 'list'" >List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
        <div *ngSwitchCase="'map'">Map View Content</div>
        <div *ngSwitchCase="'list'">List View Content</div>
        <div *ngSwitchDefault>Defaultt</div>
        
    </div> 
    
    <button (click)="onAdd()">Add</button>
    <ul>
        <li *ngFor="let subject of classes;index as i;even as isEven">
        {{i}} - {{subject.name}}<span *ngIf = "isEven">(EVEN)</span>
        <button (click)="onRemove(subject)">Remove</button>        
        </li>
    </ul>

    `
})

export class appDirectivesEx{

    courses:number[] = [1,2,3];

    classes = [
        {id:1,name:'course1'},
        {id:2,name:'course2'},
        {id:3,name:'course3'}
        
    ]
    viewMode:string = "map";
    onAdd(){
        this.classes.push({id:4,name:'course4'})
    }
    onRemove(subject){
        let index = this.classes.indexOf(subject);
        this.classes.splice(index,1);
    }
}