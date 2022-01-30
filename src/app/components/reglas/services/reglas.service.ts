import { Injectable } from '@angular/core';
import {HttpService} from "../../../core/services/http/http.service";
import {Regla} from "../models/regla";

@Injectable({
  providedIn: 'root'
})
export class ReglasService {

  constructor(private httpService: HttpService) { }

  getAllReglas():Promise<Regla[]>{
    return this.httpService.getPromise<Regla[]>('reglas');
  }
}
