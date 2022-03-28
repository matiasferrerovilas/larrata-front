import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Regla} from "../../models/regla";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ReglasService} from "../../services/reglas.service";

@Component({
  selector: 'app-editar-regla-modal',
  templateUrl: './editar-regla-modal.component.html',
  styleUrls: ['./editar-regla-modal.component.scss']
})
export class EditarReglaModalComponent implements OnInit {

  regla: Regla;
  form: FormGroup;

  constructor(private activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private reglasService: ReglasService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      contenido: ['']
    });
    this.form.patchValue({
      contenido: this.regla.contenido
    });
  }
  close(){
    this.activeModal.close();
  }
  action() {
    var reglaNueva = Object.assign(new Regla(), this.form.value);
    this.regla.contenido = reglaNueva.contenido;
    this.reglasService.updateRegla(this.regla)
      .then(() => this.close())
      .catch(e => {
        console.log(e.message);
      })
  }
}
