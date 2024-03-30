import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StaffListComponent} from "./components/staff-list/staff-list.component";

const routes: Routes = [
  {path: '', component: StaffListComponent},
  {path: 'list', component: StaffListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleStaffRoutingModule {
}
