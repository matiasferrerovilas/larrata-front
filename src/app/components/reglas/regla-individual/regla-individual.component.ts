import {Component, Input, OnInit} from '@angular/core';
import {Regla} from "../models/regla";
import {Larrata} from "../../../core/constantes/Larrata";
import {RolEnum} from "../../../core/constantes/models/rol-enum";
import {Perfil} from "../../perfil/models/perfil";
import {ModalService} from "../../../core/modals/modal.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-regla-individual',
  templateUrl: './regla-individual.component.html',
  styleUrls: ['./regla-individual.component.scss']
})
export class ReglaIndividualComponent implements OnInit {

  defaultPicture = Larrata.DEFAULT_PICTURE;
  @Input()regla: Regla;
  perfil : Perfil;
  constructor(private generadorModales: ModalService,
              private activatedRoute : ActivatedRoute)  { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.perfil = data.profile;
    });
  }

  puedeVer(){
    return this.perfil.roles.filter(r=> r.rol.id == RolEnum.ROL_ADMINISTRADOR || r.rol.id == RolEnum.ROL_DEVELOPER ).length > 0;
  }

  openEditarReglaModal(){
    this.generadorModales.openEditReglaModal(this.regla);
  }
}
