import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Larrata } from 'src/app/core/constantes/Larrata';
import { LoginService } from 'src/app/core/services/session/login.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { LoginUsuario } from '../models/LoginUsuario';
import {NgxSpinnerService} from "ngx-spinner";
import {ModalService} from "../../../core/modals/modal.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  emailPattern ="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  form: FormGroup;
  constructor(private loginService: LoginService,
              private generadorModales: ModalService,
              private router: Router,
              private formBuilder: FormBuilder,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]]
    });
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    this.spinnerService.show();
    const usuarioLogueado = Object.assign(new LoginUsuario(), this.form.value);
    this.loginService.login(usuarioLogueado).then(data => {
      LocalStorageService.saveLocalStorage(Larrata.TOKEN, data.token);
      this.volver();
    })
      .catch(err => {

      })
      .finally(() => {
        this.spinnerService.hide();
      });
  }
  volver() {
    this.router.navigateByUrl("/");
  }
  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
}
