import {Component, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {PerfilService} from "../../../../../components/perfil/services/perfil.service";
import {Perfil} from "../../../../../components/perfil/models/perfil";

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  isUserLogged: Boolean = false;
  perfil : Perfil;
  constructor(private perfilService: PerfilService,
              private router: Router) { }

   async ngOnInit() {
     await this.perfilService.getPerfilLogueado().toPromise().then(p =>
    this.perfil = p as Perfil)
  }
  scrollear(mensaje: string){
    document.getElementById(mensaje)?.scrollIntoView();
  }
  goTo(url: string){
    this.router.navigateByUrl('index/'+url);
  }
}
