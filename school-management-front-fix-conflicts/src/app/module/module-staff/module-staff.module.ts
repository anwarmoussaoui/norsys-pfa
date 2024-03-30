import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleStaffRoutingModule } from './module-staff-routing.module';
import {StaffListComponent} from "./components/staff-list/staff-list.component";


@NgModule({
  declarations: [
    StaffListComponent
  ],
  imports: [
    CommonModule,
    ModuleStaffRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ]
})
export class ModuleStaffModule { }
