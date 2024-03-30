import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppLayoutComponent} from "./app-layout.component";
import {AppLayoutRoutingModule} from "./app-layout-routing.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UnauthorizedPageComponent,
  ],
  imports: [CommonModule, AppLayoutRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [],
})
export class AppLayoutModule {
}
