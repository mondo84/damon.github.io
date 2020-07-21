import { Component, OnInit } from '@angular/core';

// Modal material design
import { MatDialog } from '@angular/material/dialog'; // Objeto modal
import { ModalContactComponent } from '../modals/modal-contact/modal-contact.component';  // Componente del modal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public objDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.objDialog.open( ModalContactComponent, {} );
  }

}
