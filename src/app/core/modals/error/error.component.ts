import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  message: string  = "";

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  action() {
    this.activeModal.close();
  }
}
