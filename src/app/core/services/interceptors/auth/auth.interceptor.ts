import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Larrata } from '../../../constantes/Larrata';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import {LanguajeService} from '../../lenguajes/languaje.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private languageService: LanguajeService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string = LocalStorageService.getObject(Larrata.TOKEN);
    if (token) {
      request = request.clone(this.getAuthAndLanguageHeaders(token));
    } else {
      request = request.clone(this.getLanguageHeader());
    }
    return next.handle(request);
  }
  private getLanguageHeader() {
    return {
      setHeaders: {
        'Accept-Language': `${this.languageService.getUserLang()}`
      }
    };
  }
  private getAuthAndLanguageHeaders(token: string) {
    return {
      setHeaders: {
        authorization: `Bearer ${token}`,
        'Accept-Language': `${this.languageService.getUserLang()}`
      }
    };
  }
}

export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];
