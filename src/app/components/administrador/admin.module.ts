import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { AdminLandingComponent } from './admin-landing/admin-landing.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLandingComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ]
})
export class AdminModule { }
