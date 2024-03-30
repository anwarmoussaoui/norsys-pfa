import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { ModuleStudentRoutingModule } from './module-student-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';



@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    ModuleStudentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ModuleStudentModule { }
