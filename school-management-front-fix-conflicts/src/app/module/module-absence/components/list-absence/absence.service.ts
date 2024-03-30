import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Absence } from './absence';


@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
private baseUrl = 'http://localhost:8080/api';
private Update ='http://localhost:8080/Api/absence/update';
  constructor(private http: HttpClient) { }

  getAbsencesParIdentifiantEtudiant(identifiant: string): Observable<Absence[]> {
    const url = `${this.baseUrl}/${identifiant}`;
    return this.http.get<Absence[]>(url);
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
