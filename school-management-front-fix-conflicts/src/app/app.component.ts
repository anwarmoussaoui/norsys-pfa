import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'School Management';
  isLoggedIn = false;
  username: string;

  constructor(private TokenStorageService: TokenStorageService) {
  }


  ngOnInit(): void {
    this.isLoggedIn = !!this.TokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.TokenStorageService.getUser();
      this.username = user.username;
    }
  }

  logout(): void {
    this.TokenStorageService.signOut();
    window.location.reload();
  }
}
