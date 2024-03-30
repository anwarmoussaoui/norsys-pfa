import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {PageNotFoundComponent} from "./layouts/app-layout/components/page-not-found/page-not-found.component";
import {HomeAppModule} from "./home/home-app.module";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeAppModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [NgForm],
  bootstrap: [AppComponent]
})
export class AppModule {
}
