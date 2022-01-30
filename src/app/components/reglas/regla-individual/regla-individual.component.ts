import {Component, Input, OnInit} from '@angular/core';
import {Regla} from "../models/regla";

@Component({
  selector: 'app-regla-individual',
  templateUrl: './regla-individual.component.html',
  styleUrls: ['./regla-individual.component.scss']
})
export class ReglaIndividualComponent implements OnInit {

  @Input()regla: Regla;
  constructor() { }

  ngOnInit(): void {
  }

}
