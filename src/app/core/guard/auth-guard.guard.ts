import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import {LoginService} from "../services/session/login.service";
import {LogoutService} from "../services/session/logout.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
              private logoutService: LogoutService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authenticationService.estaLogeado()) {
      return true;
    }
    this.logoutService.logOutToLogin();
    return false;
  }

}
