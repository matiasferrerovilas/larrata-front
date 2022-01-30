import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../../core/modals/modal.service';
import {ContactoService} from './services/contacto.service';
import {Email} from './models/email';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginUsuario} from '../../login/models/LoginUsuario';
import {Asunto} from './models/asunto';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home-contacto',
  templateUrl: './home-contacto.component.html',
  styleUrls: ['./home-contacto.component.scss']
})
export class HomeContactoComponent implements OnInit {

  form: FormGroup;
  asuntos: Asunto[] = [];
  emailPattern ="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  selectedAsunto: Asunto;
  constructor(private generadorModales: ModalService,
              private contactoService:ContactoService,
              private formBuilder: FormBuilder,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [undefined, [Validators.required,Validators.pattern(this.emailPattern)]],
      contenido: [undefined, [Validators.required]],
      asunto: [undefined, [Validators.required]]
    });
    this.contactoService.getAsuntos().then(value => {
      this.asuntos = value;
    });
  }
  sendEmail() {
    this.spinnerService.show();
    const email = Object.assign(new Email(), this.form.value);
    this.contactoService.sendEmail(email)
      .then(() =>{
        this.generadorModales.correcto("Se envio el Email");
      })
      .catch(e =>{
        this.generadorModales.error(e.message);
      }).finally(() => {
      this.spinnerService.hide();
      this.form.reset();
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
}
