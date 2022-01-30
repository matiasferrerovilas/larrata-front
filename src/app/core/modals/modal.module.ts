import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CorrectoModalComponent } from './correcto/correcto-modal.component';
import {ModalService} from './modal.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    CorrectoModalComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  providers: [
    ModalService
  ]
})
export class ModalModule {
}
