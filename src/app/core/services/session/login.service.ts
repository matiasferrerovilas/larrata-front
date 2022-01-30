import { Injectable } from '@angular/core';
import { UsuarioLogueado } from 'src/app/core/models/usuarioLogueado';
import { LoginUsuario } from 'src/app/components/login/models/LoginUsuario';
import { HttpService } from '../http/http.service';
import {Observable} from 'rxjs';
import {ClienteLogeado} from '../../../components/login/models/cliente-logeado';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }

  public async login(loginUsuario: LoginUsuario): Promise<UsuarioLogueado> {
    const v = await this.httpService.postPromise<UsuarioLogueado>('login', loginUsuario);
    return Object.assign(new LoginUsuario(), v);
  }

  getUsuarioLogueado(): Observable<ClienteLogeado> {
    return this.httpService.getObservable<ClienteLogeado>('login/profile');
  }
}
