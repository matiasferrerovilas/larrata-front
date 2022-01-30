import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error/error.component";
import {CorrectoModalComponent} from "./correcto/correcto-modal.component";
import {ModalService} from "./modal.service";



@NgModule({
  declarations: [
    ErrorComponent,
    CorrectoModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ModalService
  ]
})
export class ModalsModule { }
