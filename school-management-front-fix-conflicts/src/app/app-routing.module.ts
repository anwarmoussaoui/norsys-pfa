import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./layouts/app-layout/components/page-not-found/page-not-found.component";
import {AppLayoutComponent} from "./layouts/app-layout/app-layout.component";
import {AuthGuardService} from "./guard/auth-guard-service";
import {UnauthorizedPageComponent} from "./layouts/app-layout/components/unauthorized-page/unauthorized-page.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dash',
    component: AppLayoutComponent,
    loadChildren: () => import('./layouts/app-layout/app-layout.module').then((m) => m.AppLayoutModule),
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    loadChildren: () => import('./home/home-app.module').then((m) => m.HomeAppModule),
    canActivate: [],
  },
  {path: 'unauthorized', component: UnauthorizedPageComponent},
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
