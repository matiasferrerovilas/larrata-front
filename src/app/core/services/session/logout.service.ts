import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router,) {
  }

  public logOutToLogin() {
    this.logOut("/login");
  }

  public logOutToIndex() {
    this.logOut('/');
  }

  private logOut(url: string) {
    LocalStorageService.vaciarLocalStorage();
    this.router.navigateByUrl(url);
  }
}
