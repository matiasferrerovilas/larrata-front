import { Injectable } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {CorrectoModalComponent} from './correcto/correcto-modal.component';
import {ErrorComponent} from './error/error.component';
import {Miembro} from '../../components/miembros/models/miembro';
import {MiembroModalComponent} from '../../components/miembros/modals/miembro-modal/miembro-modal.component';
import {PerfilCambioPassModalComponent} from "../../components/perfil/modals/perfil-cambio-pass-modal/perfil-cambio-pass-modal.component";
import {AddMedioPagoComponent} from "../../components/perfil/perfil-medios-pago/modals/add-medio-pago/add-medio-pago.component";
import {Banco} from "../../components/perfil/models/banco";
import {DatoBancario} from "../../components/miembros/models/datoBancatio";
import {
  EditarReglaModalComponent
} from "../../components/reglas/modals/editar-regla-modal/editar-regla-modal.component";
import {Regla} from "../../components/reglas/models/regla";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  options: NgbModalOptions = { backdrop: 'static', centered: true };
  constructor(private ngbModalService: NgbModal) { }

  correcto(mensaje: string) {
    const modalRef = this.ngbModalService.open(CorrectoModalComponent, this.options);
    modalRef.componentInstance.message = mensaje;
  }

  error(mensaje: string) {
    const modalRef = this.ngbModalService.open(ErrorComponent, this.options);
    modalRef.componentInstance.message = mensaje;
  }
  openMiembroModal(miembro: Miembro){
    var optionsMiembro: NgbModalOptions = { backdrop: 'static', centered: true,size: 'lg' };
    const modalRef = this.ngbModalService.open(MiembroModalComponent, optionsMiembro);
    modalRef.componentInstance.miembro = miembro;
  }
  openCambiarPasswordModal() {
    const modalRef = this.ngbModalService.open(PerfilCambioPassModalComponent, this.options);
  }
  openAddMedioPagoModal() {
    const modalRef = this.ngbModalService.open(AddMedioPagoComponent, {  backdrop: 'static', centered: true, size: 'xl' });
    return modalRef;
  }
  openEditMedioPagoModal(datoBancario : DatoBancario) {
    const modalRef = this.ngbModalService.open(AddMedioPagoComponent, {  backdrop: 'static', centered: true, size: 'xl' });
    modalRef.componentInstance.datoBancario = datoBancario;
    return modalRef;
  }
  openEditReglaModal(regla : Regla) {
    const modalRef = this.ngbModalService.open(EditarReglaModalComponent, {  backdrop: 'static', centered: true, size: 'xl' });
    modalRef.componentInstance.datoBancario = regla;
    return modalRef;
  }
}
