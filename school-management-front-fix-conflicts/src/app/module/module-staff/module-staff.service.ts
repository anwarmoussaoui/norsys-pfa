import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from '../module-student/models/Staff';

@Injectable({
  providedIn: 'root'
})
export class ModuleStaffService {
 private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // Method to get all staff members
  getAllStaff(): Observable<Staff[]> {
  return this.http.get<Staff[]>(`${this.apiServerUrl}/staff/get`);
  }

}
