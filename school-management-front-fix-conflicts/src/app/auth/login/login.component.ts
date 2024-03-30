import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formAuthentication: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formAuthentication = this.formBuilder.group({
      emailUsername: ['admin', [Validators.required, Validators.minLength(4)]],
      password: ['MDP2norsys*', Validators.required]
    });
  }

  onConnect(): void {
    // Handle the connect logic here
    const username = this.formAuthentication.value.emailUsername
    const password = this.formAuthentication.value.password;

    this.authService.login({username, password}).subscribe(
      result => {
        this.authService.setAuthToken(result.token);
        this.authService.setAuthRoles(result.roles)
        this.authService.setUserName(result.username);
        this.router.navigate(["/dash"]);
      }
    );
  }


}
