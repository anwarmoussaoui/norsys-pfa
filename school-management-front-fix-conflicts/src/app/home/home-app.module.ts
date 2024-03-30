import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeAppRoutingModule} from './home-app-routing.module';
import {HomeComponent} from "./components/home.component";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeAppRoutingModule
  ]
})
export class HomeAppModule {
}
