import { Component, OnInit } from '@angular/core';
import {Grupo} from './models/grupo';
import {GruposService} from './services/grupos.service';
import {LoginService} from '../../../core/services/session/login.service';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home-grupos',
  templateUrl: './home-grupos.component.html',
  styleUrls: ['./home-grupos.component.scss']
})
export class HomeGruposComponent implements OnInit {

  grupos: Grupo[] = [];
  constructor(private gruposService: GruposService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.gruposService.getGrupos().then(value => {
      this.grupos = value;
    });
  }
  customOptions: OwlOptions = {
    loop:true,
    nav:false,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag:true,
    fluidSpeed: true,
    slideTransition:'linear',
    navSpeed: true,
    autoplayTimeout: 2000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:5
      },
      1000:{
        items:6
      }
    }
  }
}
