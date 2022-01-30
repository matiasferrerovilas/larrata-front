import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerfilLayoutComponent} from './perfil-layout/perfil-layout.component';
import {PerfilDatosPersonalesComponent} from './perfil-datos-personales/perfil-datos-personales.component';
import { PerfilMediosPagoComponent } from './perfil-medios-pago/perfil-medios-pago.component';
import {PerfilService} from "./services/perfil.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPopoverModule, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";
import { PerfilDatosCuentaComponent } from './perfil-datos-cuenta/perfil-datos-cuenta.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { PerfilCambioPassModalComponent } from './modals/perfil-cambio-pass-modal/perfil-cambio-pass-modal.component';
import { PerfilProfilePictureComponent } from './perfil-profile-picture/perfil-profile-picture.component';
import {Ng9PasswordStrengthBarModule} from "ng9-password-strength-bar";
import { AddMedioPagoComponent } from './perfil-medios-pago/modals/add-medio-pago/add-medio-pago.component';



@NgModule({
  declarations: [
    PerfilLayoutComponent,
    PerfilDatosPersonalesComponent,
    PerfilMediosPagoComponent,
    PerfilDatosCuentaComponent,
    PerfilCambioPassModalComponent,
    PerfilProfilePictureComponent,
    AddMedioPagoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    Ng9PasswordStrengthBarModule,
    NgbPopoverModule,
    NgxSpinnerModule
  ],
  providers: [PerfilService]
})
export class PerfilModule { }
