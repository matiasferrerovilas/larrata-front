import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-correcto-modal',
  templateUrl: './correcto-modal.component.html',
  styleUrls: ['./correcto-modal.component.css']
})
export class CorrectoModalComponent implements OnInit {

  public message: string = "";

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  action() {
    this.activeModal.close();
  }
}
