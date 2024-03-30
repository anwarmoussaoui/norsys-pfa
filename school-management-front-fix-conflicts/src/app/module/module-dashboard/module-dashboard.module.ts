import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard.component';
import { ModuleDashboardRoutingModule } from './module-dashboard-routing.module';





@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ModuleDashboardRoutingModule,
  ]
})
export class ModuleDashboardModule { }
