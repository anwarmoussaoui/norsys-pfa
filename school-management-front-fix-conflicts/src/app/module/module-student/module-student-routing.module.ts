import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentRegistrationComponent} from "./components/student-registration/student-registration.component";
import {
  StudentListComponent
} from "./components/student-list/student-list.component";

const routes: Routes = [
  {path: '', component: StudentRegistrationComponent},
  {path: 'list', component: StudentListComponent},
  {path: 'add', component: StudentRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleStudentRoutingModule {
}
