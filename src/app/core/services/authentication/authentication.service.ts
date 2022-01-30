import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Larrata } from 'src/app/core/constantes/Larrata';
import { LocalStorageService } from '../local-storage/local-storage.service';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private helper = new JwtHelperService();
  constructor(private router: Router) { }

  public estaLogeado(): Boolean {
    var token = LocalStorageService.getObject(Larrata.TOKEN);
    return token && !this.helper.isTokenExpired(token);
  }
  public logout() {
    LocalStorageService.vaciarLocalStorage();
    this.router.navigateByUrl("/login");
  }
}
