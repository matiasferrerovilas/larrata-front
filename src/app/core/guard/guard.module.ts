import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth-guard.guard';
import {RoleGuard} from "./role/role.guard";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    RoleGuard
  ]
})
export class GuardModule {
}
