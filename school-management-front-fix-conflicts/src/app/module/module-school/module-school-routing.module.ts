import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';import { SchoolComponent } from './component/school.component';
const routes: Routes = [
  {path: '', component:    SchoolComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleSchoolRoutingModule {
}
