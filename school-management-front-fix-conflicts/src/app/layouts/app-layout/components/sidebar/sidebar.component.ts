import {Component, OnInit} from '@angular/core';
import {routes} from "../../../../router";
import RouterType from "../../../../routerType";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  routesItems: RouterType[] = routes;

  constructor() {
  }

  ngOnInit(): void {
  }

  //close sidebar
  toggleSubGroup(routeId: number, subGpId: number, subGp: any): void {
    this.routesItems.find((value) => value.id === routeId)?.subGroup
      .filter(obj => obj.id !== subGpId)
      .map((subGp) => subGp.active = false
      );

    subGp.active = true;
  }
}
