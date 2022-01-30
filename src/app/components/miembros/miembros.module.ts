import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiembrosListComponent } from './miembros-list/miembros-list.component';
import {MiembrosLayoutComponent} from './miembros-layout/miembros-layout.component';
import {MiembrosService} from './services/miembros.service';
import { MiembroModalComponent } from './modals/miembro-modal/miembro-modal.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [
    MiembrosListComponent,
    MiembrosLayoutComponent,
    MiembroModalComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        NgxSpinnerModule
    ],
  providers: [
    MiembrosService
  ],
})
export class MiembrosModule { }
