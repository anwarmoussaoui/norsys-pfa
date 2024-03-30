import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: []
})
export class AppLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  closeSideNav(): void {
    const sideNav = document.getElementById("mySidenav");
    if (sideNav != null) {
      if (sideNav.style.width === "0") {
      } else {
        sideNav.style.width = "0%";
      }
    }
  }
}
