import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./models/Student";


@Injectable({
  providedIn: 'root'
})
export class ModuleStudentService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getAllStudents(pageSize: number, page: number): Observable<Student[]> {
    const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('page', page.toString());

    return this.http.get<Student[]>(`${this.apiServerUrl}/students`, { params });
  }

  addStudent(newStudent: Student): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/students`, newStudent);
  }

  updateStudent(studentId: number, updatedStudent: Student): Observable<Student> {
  return this.http.put<Student>(`${this.apiServerUrl}/students/${studentId}`, updatedStudent);
}

  deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/students/${studentId}`);
  }

  searchStudents(keyword: string, pageSize: number, page: number): Observable<Student[]> {
    const params = new HttpParams()
      .set('keyword', keyword)
      .set('pageSize', pageSize.toString())
      .set('page', page.toString());

    return this.http.get<Student[]>(`${this.apiServerUrl}/students/search`, { params });
  }

  downloadCertificate(studentId: number): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' }; 
    return this.http.get<Blob>(`${this.apiServerUrl}/certificates/generate/${studentId}`, options);
  }

  checkStudentIsActive(studentId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiServerUrl}/students/{studentId}/isActive`);
  }


  

  
}

  

  
  

 

  



