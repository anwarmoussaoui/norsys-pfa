import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth/services/auth.service";
import {ROLE_ADMINISTRATOR} from "./roles";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Check if the user is authenticated
    if (this.authService.isAuthenticated()) {
      // Check if the user has the role of admin
      if (this.authService.hasRole(ROLE_ADMINISTRATOR)) {
        return true;
      } else {
        // Redirect to unauthorized page if the user is not an admin
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/']);
      return false;
    }
  }
}
