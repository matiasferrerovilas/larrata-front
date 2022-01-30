import { Component, OnInit } from '@angular/core';
import {Regla} from "../models/regla";
import {ReglasService} from "../services/reglas.service";

@Component({
  selector: 'app-reglas-list',
  templateUrl: './reglas-list.component.html',
  styleUrls: ['./reglas-list.component.scss']
})
export class ReglasListComponent implements OnInit {

  reglas: Regla[] = [];
  reglasExcepciones: Regla[] = [];
  reglasArticulo: Regla[] = [];
  reglasAnexo: Regla[] = [];
  constructor(private reglasService:ReglasService) { }

  async ngOnInit() {
    this.reglas = await this.reglasService.getAllReglas();
    this.reglasArticulo = this.reglas.filter(regla => regla.tipoRegla.id ==1);
    this.reglasAnexo = this.reglas.filter(regla => regla.tipoRegla.id ==2);
    this.reglasExcepciones = this.reglas.filter(regla => regla.tipoRegla.id ==3);
    console.log(this.reglasExcepciones)
  }

}
