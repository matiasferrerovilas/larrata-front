import {Component, Input, OnInit} from '@angular/core';
import {ClienteLogeado} from "../../login/models/cliente-logeado";
import {PerfilService} from "../services/perfil.service";
import {MiembrosService} from "../../miembros/services/miembros.service";
import {Miembro} from "../../miembros/models/miembro";
import {LoginService} from "../../../core/services/session/login.service";
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
import {DatoBancario} from "../../miembros/models/datoBancatio";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Banco} from "../models/banco";
import {LoginUsuario} from "../../login/models/LoginUsuario";
import {Router} from "@angular/router";
import {ModalService} from "../../../core/modals/modal.service";
import {DatoBancarioNuevo} from "../models/dato-bancario-nuevo";
import {Filter} from "../../../core/constantes/models/filter";
import {Observable, Subject} from "rxjs";
import {debounceTime, switchMap, share} from "rxjs/operators";

@Component({
  selector: 'app-perfil-medios-pago',
  templateUrl: './perfil-medios-pago.component.html',
  styleUrls: ['./perfil-medios-pago.component.scss']
})
export class PerfilMediosPagoComponent implements OnInit {

  hideBar = false;
  miembro: Miembro;

  miembroInfo: any;
  filters: Filter = {
    page: 0,
    size: 5,
  };
  selectedBanco: number;
  constructor(private perfilService: PerfilService,
              private generadorModales: ModalService,
              private loginService:LoginService,
              private router: Router,
              private miembrosService: MiembrosService) { }

  async ngOnInit() {




    this.miembroInfo = new Subject<Filter>().pipe(
      debounceTime(500),
      switchMap(filters => {
        const pagePromise =  this.perfilService.getDatosBancariosPerfil().toPromise();
        return (async () => {
          this.hideBar = false;
          try {
            return await pagePromise;
          } catch (error) {
            this.generadorModales.error(error.message);
            return null;
          } finally {
            this.hideBar = true;
          }
        })();
      }),
      share());
    this.miembroInfo.subscribe( (m: Miembro) =>{
      this.miembro = m;
    })
    this.refreshList();
  }
  refreshList() {
    this.miembroInfo.next(this.getFilters());
  }
  getFilters() {
    return this.filters;
  }
  delete(dato:DatoBancario){
    this.hideBar= false;
    this.perfilService.deleteDatoBancario(dato.id)
      .catch(e =>{
        this.generadorModales.error(e.message);
      }).finally(() => {
        this.refreshList();
    });
  }
  edit(dato:DatoBancario){
    this.generadorModales.openEditMedioPagoModal(dato).closed.toPromise().then(()=> {
      this.hideBar= false;
      this.refreshList();
    })
      .finally(()=>this.hideBar= true);
  }
  openMedioPago(){
    this.generadorModales.openAddMedioPagoModal().closed.toPromise().then(()=> {
      this.hideBar= false;
      this.refreshList();
    })
      .finally(()=>this.hideBar= true);
  }

}
