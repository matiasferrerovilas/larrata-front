import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReglasLayoutComponent} from "./reglas-layout/reglas-layout.component";
import { ReglasListComponent } from './reglas-list/reglas-list.component';
import { ReglaIndividualComponent } from './regla-individual/regla-individual.component';
import {ReglasService} from "./services/reglas.service";
import {EditarReglaModalComponent} from "./modals/editar-regla-modal/editar-regla-modal.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ReglasLayoutComponent,
    ReglasListComponent,
    ReglaIndividualComponent,
    EditarReglaModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[ReglasService]
})
export class ReglasModule { }
