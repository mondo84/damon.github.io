import { Component, OnInit } from '@angular/core';

// Objeto modal de material design
import { MatDialog } from '@angular/material/dialog';
// Componente mostrado en el modal
import { ModalSoporteComponent } from '../../modals/modal-soporte/modal-soporte.component';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.scss']
})
export class SoporteComponent implements OnInit {

  constructor(public objModal: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.objModal.open(ModalSoporteComponent, {});
  }
}
