import {Pipe,PipeTransform  } from "@angular/core";

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value:string,limit?:number){
        // 20 is the default value
        let actualLimit =(limit) ? limit : 20; 
        if(!value){
            return null;
        }
        else{
            return value.substr(0,actualLimit) + '...';
        }
    }
}