import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Perfil} from "../../components/perfil/models/perfil";
import {PerfilService} from "../../components/perfil/services/perfil.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverResolver implements Resolve<Perfil> {
  constructor(private perfilService: PerfilService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Perfil>{
    return this.perfilService.getPerfilLogueado().toPromise();
  }
}
