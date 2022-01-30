import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {
}
