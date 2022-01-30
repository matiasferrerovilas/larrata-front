import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Perfil} from "../../../../../components/perfil/models/perfil";
import {Larrata} from "../../../../constantes/Larrata";
import {RolEnum} from "../../../../constantes/models/rol-enum";
@Component({
  selector: 'app-landing-header-botones-logueado',
  templateUrl: './landing-header-botones-logueado.component.html',
  styleUrls: ['./landing-header-botones-logueado.component.scss']
})
export class LandingHeaderBotonesLogueadoComponent implements OnInit {


  perfil : Perfil;
  defaultProfile = Larrata.DEFAULT_PICTURE;
  constructor(private authenticationService:AuthenticationService,
              private router: Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.perfil = data.profile;
    });
  }
  logOut() {
    this.authenticationService.logout();
  }
  goTo(url: string){
    this.router.navigateByUrl('index/'+url);
  }

  puedeVer(){
    return this.perfil.roles.filter(r=> r.rol.id == RolEnum.ROL_ADMINISTRADOR || r.rol.id == RolEnum.ROL_DEVELOPER ).length > 0;
  }
}
