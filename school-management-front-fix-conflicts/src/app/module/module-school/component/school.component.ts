import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Component({
    selector : 'app-School',
    templateUrl :'./school.component.html'
})

export class SchoolComponent implements OnInit{
    Data:any
    constructor (private http :HttpClient){}
     ngOnInit(): void {
        this.getdata();
        console.log(this.Data)
     
     }
    public getSchool():Observable<any>{
      const baseUrl=`http://localhost:8080/api/school/1`;
        return this.http.get(baseUrl);
    
      }
      getdata() {
        this.getSchool()
           .subscribe(response => {
             this.Data = response;
             console.log(response);
           });
      
      
    }

}