import {Component, Input, OnInit} from '@angular/core';
import {Regla} from "../models/regla";
import {Larrata} from "../../../core/constantes/Larrata";

@Component({
  selector: 'app-regla-individual',
  templateUrl: './regla-individual.component.html',
  styleUrls: ['./regla-individual.component.scss']
})
export class ReglaIndividualComponent implements OnInit {

  defaultPicture = Larrata.DEFAULT_PICTURE;
  @Input()regla: Regla;
  constructor() { }

  ngOnInit(): void {
  }

}
