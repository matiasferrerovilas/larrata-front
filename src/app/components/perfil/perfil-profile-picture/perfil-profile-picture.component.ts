import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Perfil} from "../models/perfil";
import {NgxSpinnerService} from "ngx-spinner";
import {PerfilService} from "../services/perfil.service";
import {Larrata} from "../../../core/constantes/Larrata";
import {ModalService} from "../../../core/modals/modal.service";
import {PerfilFotoUpload} from "./models/perfil-foto-upload";

@Component({
  selector: 'app-perfil-profile-picture',
  templateUrl: './perfil-profile-picture.component.html',
  styleUrls: ['./perfil-profile-picture.component.scss']
})
export class PerfilProfilePictureComponent implements OnInit {

  perfil: Perfil;
  fotoPerfil: File;
  defaultProfile = Larrata.DEFAULT_PICTURE;

  constructor(private spinnerService: NgxSpinnerService,
              private perfilService: PerfilService,
              private activatedRoute: ActivatedRoute,
              private modalService: ModalService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe((data: any) => {
      this.perfil = data.profile;
    });
  }

  upload(event) {
    const max_size = 20971520;
    const max_height = 9000;
    const max_width = 9000;
    const allowed_types = ['image/png', 'image/jpeg', 'image/svg'];
    const uploadData = new PerfilFotoUpload();
    this.spinnerService.show();
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size > max_size) {
        this.modalService.error('Maximum size allowed is ' + max_size / 1000 + 'Mb');
        this.spinnerService.hide();
        return;
      }

      const extencion = event.target.files[0].type.substr(event.target.files[0].type.lastIndexOf("/") + 1, event.target.files[0].type.length).toLowerCase();
      if(!(extencion == "png" || extencion == "jpeg" || extencion == "svg" || extencion == "jpg")){
        this.modalService.error('Tipo de archivo no soportado. Solo jpeg, svg o png ');
        this.spinnerService.hide();
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        uploadData.base64Imagen = e.target.result as string;
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];
          if (img_height > max_height || img_width > max_width) {
            this.spinnerService.hide();
            this.modalService.error("Tamaño imagen maximo superado");
            return;
          }else{
            this.perfilService.uploadFotoPerfil(uploadData)
              .finally(async () => {
                this.spinnerService.hide();
                this.ngZone.runOutsideAngular(()=>location.reload());
              })
          }
        };
      }
    }
  }
}
