import { Injectable } from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {DatoBancarioNuevo} from "../models/dato-bancario-nuevo";
import {Observable} from "rxjs";
import {Miembro} from "../../miembros/models/miembro";
import {PerfilDatosCuenta} from "../models/perfil-datos-cuenta";
import {DatoBancario} from "../../miembros/models/datoBancatio";
import {PerfilDatosPersonales} from "../models/perfil-datos-personales";
import {Perfil} from "../models/perfil";
import {PerfilFotoUpload} from "../perfil-profile-picture/models/perfil-foto-upload";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private httpService: HttpService) { }

  addMedioPago(datoBancario: DatoBancarioNuevo): Promise<boolean>{
    return this.httpService.postPromise<boolean>('miembros/datoBancario',datoBancario);
  }
  editMedioPago(datoBancario: DatoBancarioNuevo): Promise<boolean>{
    return this.httpService.postPromise<boolean>('miembros/datoBancario/update',datoBancario);
  }

  deleteDatoBancario(id: number): Promise<boolean>{
    return this.httpService.getPromise<boolean>('miembros/datoBancario/remove/'+id);
  }

  getPerfilLogueado(): Observable<Perfil>{
    return this.httpService.getObservable<Perfil>('profile');
  }
  getDatosBancariosPerfil(): Observable<DatoBancario[]>{
    return this.httpService.getObservable<DatoBancario[]>('profile/datoBancario');
  }
  updatePerfil(perfil: PerfilDatosCuenta): Promise<boolean>{
    return this.httpService.postPromise<boolean>('profile/',perfil);
  }
  updateDatosPersonales(perfil: PerfilDatosPersonales): Promise<boolean>{
    return this.httpService.postPromise<boolean>('profile/datos-personales',perfil);
  }
  updateDatosCuenta(perfil: PerfilDatosCuenta): Promise<boolean>{
    return this.httpService.postPromise<boolean>('profile/datos-cuenta',perfil);
  }
  uploadFotoPerfil(fotoPerfil: PerfilFotoUpload): Promise<boolean>{
    return this.httpService.postPromise<boolean>('profile/foto-perfil',fotoPerfil);
  }


}
