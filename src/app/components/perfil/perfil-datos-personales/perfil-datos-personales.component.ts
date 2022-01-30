import {Component, Input, OnInit} from '@angular/core';
import {PerfilService} from "../services/perfil.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "../../../core/modals/modal.service";
import {LoginService} from "../../../core/services/session/login.service";
import {MiembrosService} from "../../miembros/services/miembros.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Miembro} from "../../miembros/models/miembro";
import {PerfilDatosCuenta} from "../models/perfil-datos-cuenta";
import {LoginUsuario} from "../../login/models/LoginUsuario";
import { faSave } from '@fortawesome/free-solid-svg-icons';
import {NgxSpinnerService} from "ngx-spinner";
import {PerfilDatosPersonales} from "../models/perfil-datos-personales";

@Component({
  selector: 'app-perfil-datos-personales',
  templateUrl: './perfil-datos-personales.component.html',
  styleUrls: ['./perfil-datos-personales.component.scss']
})
export class PerfilDatosPersonalesComponent implements OnInit {

  faSave = faSave;
  form: FormGroup;
  perfil: PerfilDatosPersonales;
  numberPattern = "^[0-9]*$";
  constructor(private perfilService: PerfilService,
              private generadorModales: ModalService,
              private router: Router,
              private spinnerService: NgxSpinnerService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: [undefined, [Validators.required]],
      apellido: [undefined, [Validators.required]],
      telefono: [undefined,[Validators.pattern(this.numberPattern)] ],
    });
    this.activatedRoute.parent?.data.subscribe((data: any) => {
      this.perfil = data.profile;
      this.form.patchValue({
        nombre: this.perfil.nombre,
        apellido: this.perfil.apellido,
      });
    });
  }

  submitDatosPersonales() {
    this.spinnerService.show();
    const perfilNuevo = Object.assign(new PerfilDatosPersonales(), this.form.value);
    this.perfilService.updateDatosPersonales(perfilNuevo)
      .catch(e => {
        console.log(e.message);
      }).finally(() => {
      this.spinnerService.hide();
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
}
