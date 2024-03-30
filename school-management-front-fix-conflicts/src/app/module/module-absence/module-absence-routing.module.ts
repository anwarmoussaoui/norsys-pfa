import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SaveAbsencesComponent } from './components/save-absences/save-absences.component';
import { AbsenceComponent } from './components/list-absence/absence.component';
import {AddAbsenceComponent} from "./components/add-absence/add-absence.component";
import {EspaceEtudientComponent} from "./components/espace-etudient/espace-etudient.component";
import {EspaceTeacherComponent} from "./components/espace-teacher/espace-teacher.component";

const routes: Routes = [
  { path: 'save', component: SaveAbsencesComponent },
  { path: '', component: AbsenceComponent },
  {path:'cards',component:AddAbsenceComponent},
  {path:'Espace',component:EspaceEtudientComponent},
  {path:'EspaceT',component:EspaceTeacherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAbsenceRoutingModule {
}
