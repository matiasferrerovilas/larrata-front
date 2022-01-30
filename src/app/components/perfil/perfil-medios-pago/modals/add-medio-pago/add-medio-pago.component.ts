import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {DatoBancarioNuevo} from "../../../models/dato-bancario-nuevo";
import {ModalService} from "../../../../../core/modals/modal.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PerfilService} from "../../../services/perfil.service";
import {MiembrosService} from "../../../../miembros/services/miembros.service";
import {Banco} from "../../../models/banco";
import {DatoBancario} from "../../../../miembros/models/datoBancatio";

@Component({
  selector: 'app-add-medio-pago',
  templateUrl: './add-medio-pago.component.html',
  styleUrls: ['./add-medio-pago.component.scss']
})
export class AddMedioPagoComponent implements OnInit {

  form: FormGroup;
  bancos: Banco[] = [];
  datoBancario: DatoBancario;
  constructor(private activeModal: NgbActiveModal,
              private generadorModales: ModalService,
              private formBuilder: FormBuilder,
              private perfilService: PerfilService,
              private miembrosService: MiembrosService) { }

  ngOnInit(): void {
    this.miembrosService.getAllMediosPago().then(info =>{
      this.bancos = info;
    })
    this.form = this.formBuilder.group({
      alias: [undefined, [Validators.required]],
      cbu: [undefined],
      banco: [undefined,[Validators.required]]
    });
    if(this.datoBancario){
      this.form.patchValue({
        alias: this.datoBancario.alias,
        banco: this.datoBancario.banco.id,
        cbu : this.datoBancario.cbu
      });
    }
  }

  action(){
    this.activeModal.close();
  }
  addDatoBancario(){
    const datoBancarioNuevo = Object.assign(new DatoBancarioNuevo(), this.form.value);
    this.perfilService.addMedioPago(datoBancarioNuevo)
      .catch(e =>{
        this.generadorModales.error(e.message);
      }).finally(() => {
      this.action();
    });
  }
  editarDatoBancario(){
    const datoBancarioNuevo = Object.assign(new DatoBancarioNuevo(), this.form.value);
    datoBancarioNuevo.id = this.datoBancario.id;
    this.perfilService.editMedioPago(datoBancarioNuevo)
      .catch(e =>{
        this.generadorModales.error(e.message);
      }).finally(() => {
      this.action();
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
}
