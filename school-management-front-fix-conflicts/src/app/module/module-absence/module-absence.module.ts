import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModuleAbsenceRoutingModule} from "./module-absence-routing.module";
import { SaveAbsencesComponent } from './components/save-absences/save-absences.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Absence } from './models/absence';
import { AbsenceComponent } from './components/list-absence/absence.component';
import { AddAbsenceComponent } from './components/add-absence/add-absence.component';
import { EspaceEtudientComponent } from './components/espace-etudient/espace-etudient.component';
import { EspaceTeacherComponent } from './components/espace-teacher/espace-teacher.component';



@NgModule({
  declarations: [
    SaveAbsencesComponent,
    AbsenceComponent,
    AddAbsenceComponent,
    EspaceEtudientComponent,
    EspaceTeacherComponent,

  ],
  imports: [
    CommonModule,
    ModuleAbsenceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class ModuleAbsenceModule { }
