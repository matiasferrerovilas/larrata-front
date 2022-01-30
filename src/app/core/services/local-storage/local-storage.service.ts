import { Injectable } from '@angular/core';
import { Larrata } from 'src/app/core/constantes/Larrata';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  static saveLocalStorage(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  static getObject(key: string) {
    const object = localStorage.getItem(key);
    if (object) {
      return JSON.parse(object);
    } else {
      return undefined;
    }
  }

  static vaciarLocalStorage() {
    localStorage.removeItem(Larrata.TOKEN);
  }
}
