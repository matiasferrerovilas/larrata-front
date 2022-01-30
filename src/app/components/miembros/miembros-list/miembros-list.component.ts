import { Component, OnInit } from '@angular/core';
import {Miembro} from '../models/miembro';
import {MiembrosService} from '../services/miembros.service';
import {ModalService} from '../../../core/modals/modal.service';
import * as AOS from 'aos';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {NgxSpinnerService} from "ngx-spinner";
import {Larrata} from "../../../core/constantes/Larrata";
@Component({
  selector: 'app-miembros-list',
  templateUrl: './miembros-list.component.html',
  styleUrls: ['./miembros-list.component.scss']
})
export class MiembrosListComponent implements OnInit {
  defaultPicture = Larrata.DEFAULT_PICTURE;
  faSearch = faSearch;
  miembros: Miembro[] = [];
  constructor(private miembrosService: MiembrosService,
              private modalService: ModalService,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit(){
    AOS.init();
    this.miembrosService.getAllMiembros().then(value => {
      this.spinnerService.show();
      this.miembros = value;
    })
      .finally(() => this.spinnerService.hide());
  }
  openVerMas(miembro: Miembro){
    this.modalService.openMiembroModal(miembro);
  }

}
