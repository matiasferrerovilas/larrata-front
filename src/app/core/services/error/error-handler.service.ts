import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ModalService} from '../../modals/modal.service';
import {HttpErrorResponse} from '@angular/common/http';
import {LogoutService} from '../session/logout.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private router: Router,
              private logOutService: LogoutService,
              public modalService: ModalService) { }

  handleError = (err: any) => {
    try {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 && !err.error.details) {
          console.log(err)
          this.logOutService.logOutToLogin();
          this.modalService.error('Sesión expirada.');
        } else {
          if (err.error.message) {
            this.modalService.error(err.error.message);
          } else {
            err.error.forEach((element: { details: string; }) => {
              this.modalService.error(element.details);
            });
          }
        }
      }
    } catch (e) {
      this.modalService.error(
        'Ocurrió un error. Por favor contacté con soporte.'
      );
    }
  };
}
