import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../core/services/session/login.service";
import {ClienteLogeado} from "../../login/models/cliente-logeado";
import {PerfilService} from "../services/perfil.service";
import {PerfilDatosCuenta} from "../models/perfil-datos-cuenta";

@Component({
  selector: 'app-perfil-layout',
  templateUrl: './perfil-layout.component.html',
  styleUrls: ['./perfil-layout.component.scss']
})
export class PerfilLayoutComponent implements OnInit {

  constructor() { }
  async ngOnInit() {
  }

}
