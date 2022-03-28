import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Regla} from "../../models/regla";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editar-regla-modal',
  templateUrl: './editar-regla-modal.component.html',
  styleUrls: ['./editar-regla-modal.component.scss']
})
export class EditarReglaModalComponent implements OnInit {

  regla: Regla;
  form: FormGroup;


  constructor(private activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      formModel: ['']
    });


  }
  action(){
    console.log(this.form.controls.formModel.value)
    //this.activeModal.close();
  }
}
