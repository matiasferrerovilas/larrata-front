import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {LogoutService} from "../../../../core/services/session/logout.service";

@Component({
  selector: 'app-perfil-cambio-pass-modal',
  templateUrl: './perfil-cambio-pass-modal.component.html',
  styleUrls: ['./perfil-cambio-pass-modal.component.scss']
})
export class PerfilCambioPassModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal,
              private logoutService: LogoutService) { }

  ngOnInit(): void {
  }
  action(){
    this.activeModal.close();
    this.logoutService.logOutToLogin();
  }

}
