import { DashboardComponent } from './../../module/module-dashboard/component/dashboard.component';

import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      { 
        path: 'students',
        loadChildren: () => import('../../module/module-student/module-student.module').then((m) => m.ModuleStudentModule),
      },
      { 
        path: '',
        loadChildren: () => import('../../module/module-dashboard/module-dashboard.module').then((m) => m.ModuleDashboardModule),
      },
      {
        path: 'dashBoard',
        loadChildren: () => import('../../module/module-dashboard/module-dashboard.module').then((m) => m.ModuleDashboardModule),
      },
      {
        path: 'staff',
        loadChildren: () => import('../../module/module-staff/module-staff.module').then((m) => m.ModuleStaffModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../../module/module-settings/module-setting.module').then((m) => m.ModuleSettingModule),
      },
      {
        path: 'school',
        loadChildren: () => import('../../module/module-school/module-school.module').then((m) => m.ModuleSchoolModule),
      },
      {path: 'absence',
      loadChildren: () => import('../../module/module-absence/module-absence.module').then((m) => m.ModuleAbsenceModule),
},

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLayoutRoutingModule {
}
