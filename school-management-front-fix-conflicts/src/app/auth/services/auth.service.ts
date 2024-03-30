import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private _router: Router) {
  }

  login(credentials: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/auth/sign-in', credentials);
  }

  register(credentials: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/auth/register-user', {
      username: credentials.username,
      password: credentials.password
    });
  }

  getAuthToken(): null | string {
    if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) {
      return localStorage.getItem('token');
    }
    return null;
  }

  getAuthRoles(): null | string {
    if (localStorage.getItem('roles') !== null && localStorage.getItem('roles') !== undefined) {
      return localStorage.getItem('roles');
    }
    return null;
  }

  setAuthToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUserName(username: string): void {
    localStorage.setItem('username', username);
  }

  getUserName():  null | string{
    if (localStorage.getItem('username') !== null && localStorage.getItem('username') !== undefined) {
      return localStorage.getItem('username');
    }
    return null;}

  setAuthRoles(roles: string[]): void {
    localStorage.setItem('roles', roles.toString());
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this._router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    return !!token; // If token exists, user is authenticated; otherwise, not authenticated.
  }

  hasRole(role: string): boolean | undefined {
    return this.getAuthRoles()?.includes(role);
  }
  public getSchool():Observable<any>{
    return this.http.get(`http://localhost:8080/api/school`);

  }
}
