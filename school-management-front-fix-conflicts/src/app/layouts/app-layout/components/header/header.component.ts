import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../auth/services/auth.service";
import { Observable } from 'rxjs';
import { data } from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  it: number = 0;
  username:string|null="";
  roles:string|null="";
  Data:any;
  constructor(private authService: AuthService ,private http: HttpClient) {}
  ngOnInit(): void {
   this.username= this.authService.getUserName();
   this.roles= this.authService.getAuthRoles();

  }

  logout(): void {
    this.authService.logout();
  }
  
}
