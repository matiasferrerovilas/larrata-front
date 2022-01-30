import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReglasLayoutComponent} from "./reglas-layout/reglas-layout.component";
import { ReglasListComponent } from './reglas-list/reglas-list.component';
import { ReglaIndividualComponent } from './regla-individual/regla-individual.component';
import {ReglasService} from "./services/reglas.service";



@NgModule({
  declarations: [
    ReglasLayoutComponent,
    ReglasListComponent,
    ReglaIndividualComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[ReglasService]
})
export class ReglasModule { }
