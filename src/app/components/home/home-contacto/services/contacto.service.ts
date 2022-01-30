import { Injectable } from '@angular/core';
import {HttpService} from '../../../../core/services/http/http.service';
import {Email} from '../models/email';
import {Asunto} from '../models/asunto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private httpService: HttpService) { }

  sendEmail(email: Email): Promise<boolean>{
    return this.httpService.postPromise<boolean>('email',email);
  }

  getAsuntos():Promise<Asunto[]>{
    return this.httpService.getPromise<Asunto[]>('email/asuntos');
  }
}
