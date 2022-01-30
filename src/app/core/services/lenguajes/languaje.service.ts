import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {

  constructor() { }

  getUserLang(){
    return 'es';
  }
}
