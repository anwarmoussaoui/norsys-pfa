import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolComponent } from './component/school.component';
import { ModuleSchoolRoutingModule } from './module-school-routing.module';




@NgModule({
  declarations: [
    SchoolComponent,
  ],
  imports: [
    CommonModule,
    ModuleSchoolRoutingModule
  ]
})
export class ModuleSchoolModule { }
