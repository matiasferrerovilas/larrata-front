import { Injectable } from '@angular/core';
import {HttpService} from '../../../../core/services/http/http.service';
import {Grupo} from '../models/grupo';
import {Miembro} from '../../../miembros/models/miembro';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private httpService: HttpService) { }

  getGrupos(): Promise<Grupo[]>{
    return this.httpService.getPromise<Grupo[]>('grupos');
  }
}
