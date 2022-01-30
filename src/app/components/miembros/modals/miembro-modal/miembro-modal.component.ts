import { Component, OnInit } from '@angular/core';
import {Miembro} from '../../models/miembro';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {Larrata} from "../../../../core/constantes/Larrata";
@Component({
  selector: 'app-miembro-modal',
  templateUrl: './miembro-modal.component.html',
  styleUrls: ['./miembro-modal.component.scss']
})
export class MiembroModalComponent implements OnInit {

  defaultPicture = Larrata.DEFAULT_PICTURE;
  faClose = faWindowClose;
  miembro: Miembro;
  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {

  }

  action(){
    this.activeModal.close();
  }
}
