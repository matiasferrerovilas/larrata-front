import { Injectable } from '@angular/core';
import {Miembro} from '../models/miembro';
import {HttpService} from '../../../core/services/http/http.service';
import {Banco} from "../../perfil/models/banco";

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(private httpService: HttpService) { }

  getAllMiembros():Promise<Miembro[]>{
    return this.httpService.getPromise<Miembro[]>('miembros');
  }
  getInfoMiembro(id: number):Promise<Miembro>{
    return this.httpService.getPromise<Miembro>('miembros/'+id);
  }
  getAllMediosPago():Promise<Banco[]>{
    return this.httpService.getPromise<Banco[]>('medioPago/all');
  }
}
