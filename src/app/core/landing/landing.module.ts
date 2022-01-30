import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './header/landing/landing-layout/landing-layout.component';
import {RouterModule} from "@angular/router";
import { FooterLayoutComponent } from './footer/footer-layout/footer-layout.component';
import {HeaderBotonesLogueadoComponent} from "./header/main/header-botones-logueado/header-botones-logueado.component";
import { LandingHeaderComponent } from './header/landing/landing-header/landing-header.component';
import { MainLayoutComponent } from './header/main/main-layout/main-layout.component';
import { MainHeaderComponent } from './header/main/main-header/main-header.component';
import { LandingHeaderBotonesLogueadoComponent } from './header/landing/landing-header-botones-logueado/landing-header-botones-logueado.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    LandingLayoutComponent,
    HeaderBotonesLogueadoComponent,
    FooterLayoutComponent,
    LandingHeaderComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    LandingHeaderBotonesLogueadoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ]
})
export class LandingModule { }
