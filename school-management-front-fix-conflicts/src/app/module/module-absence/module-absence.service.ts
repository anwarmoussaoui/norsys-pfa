import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {Absence} from "./models/absence";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private baseUrl = 'http://localhost:8080';
  private Update ='http://localhost:8080/Api/absence/update';

  constructor(private http: HttpClient) { }
  private apiServerUrl = environment.apiBaseUrl;


  getAbsences(): Observable<Absence[]> {
    const url = `${this.baseUrl}/Api/absence/absences`;
    return this.http.get<Absence[]>(url);
  }
  saveAbsence(identifier: string, absence: Absence): Observable<any> {
    const url = `${this.baseUrl}/Api/absence/add-absenceStudent/${identifier}`;
    return this.http.post(url, absence);
  }

  getAllAbsences(): Observable<any> {
    const url = `${this.baseUrl}/students/All-absences`;
    return this.http.get(url);
  }
  getAllTeacherAbsences(): Observable<any> {
    const url = `${this.baseUrl}/teacher/absence`;
    return this.http.get(url);
  }
  deleteAbsence(id :number,absenceid:number): Observable<any>{

    alert('l absence est supprimer');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });
    return this.http.post(`${this.baseUrl}/students/deleteAbsence/${id}/${absenceid}`,{headers});}
  deleteTeacherAbsence(id :number,absenceid:number): Observable<any>{

    alert('l absence est supprimer');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });
    return this.http.post(`${this.baseUrl}/teacher/deleteAbsence/${id}/${absenceid}`,{headers});}
  UpdateAb(id :number,data:Absence): Observable<any>{

    alert('l absence a ete modifier');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });
    return this.http.post(`${this.Update}/${id}`,data,{headers});}
}
