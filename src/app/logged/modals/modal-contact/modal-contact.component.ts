import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent implements OnInit {

  public title = 'Dejanos un Like...';
  constructor() { }

  ngOnInit(): void {
  }

}
