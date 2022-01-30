import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PerfilDatosCuenta} from "../models/perfil-datos-cuenta";
import {PerfilService} from "../services/perfil.service";
import {ModalService} from "../../../core/modals/modal.service";
import {ActivatedRoute, Router} from "@angular/router";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import {LogoutService} from "../../../core/services/session/logout.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-perfil-datos-cuenta',
  templateUrl: './perfil-datos-cuenta.component.html',
  styleUrls: ['./perfil-datos-cuenta.component.scss']
})
export class PerfilDatosCuentaComponent implements OnInit {

  faSave = faSave;
  form: FormGroup;
  perfil: PerfilDatosCuenta;
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  strengthNewPassword: number = 0;

  constructor(private perfilService: PerfilService,
              private generadorModales: ModalService,
              private router: Router,
              private formBuilder: FormBuilder,
              private spinnerService: NgxSpinnerService,
              private logoutService: LogoutService,
              private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [undefined, [Validators.required]],
      confirm_password: [undefined, [Validators.required]],
    });
    this.activatedRoute.parent?.data.subscribe((data: any) => {
      this.perfil = data.profile;
      this.form.patchValue({
        email: this.perfil.email,
      });
    });
  }

  submitDatosPersonales() {
    this.spinnerService.show();
    const perfilNuevo = Object.assign(new PerfilDatosCuenta(), this.form.value);
    this.perfilService.updateDatosCuenta(perfilNuevo)
      .then(() => {
        this.generadorModales.openCambiarPasswordModal();
        //this.logoutService.logOutToLogin();
      })
      .catch(e => {
        console.log(e.message);
      }).finally(() => {
      this.spinnerService.hide();
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  public passIguales(): Boolean {
    return this.form.value.password == this.form.value.confirm_password;
  }
  public strengthChanged(strength: number){
    this.strengthNewPassword = strength;
  }
}
