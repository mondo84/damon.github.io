import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {

  toggleClass = true;
  @ViewChild('btnRef', {  static: true }) btnRef: MatButton;    // Elemento externo de material design.
  @ViewChild('menuRef', {  static: true }) menuRef: ElementRef;  // Elemento nativo del componente.

  constructor(private objR2: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Se agrega listener al boton de material design.
    this.objR2.listen(this.btnRef._elementRef.nativeElement, 'click', (e) => {
      // console.log(e);

      if (this.toggleClass) {
        this.objR2.addClass(this.btnRef._elementRef.nativeElement, 'pulsed');
        this.objR2.addClass(this.menuRef.nativeElement, 'expand');
      } else {
        this.objR2.removeClass(this.btnRef._elementRef.nativeElement, 'pulsed');
        this.objR2.removeClass(this.menuRef.nativeElement, 'expand');
      }

      this.toggleClass = !this.toggleClass;
    });
  }

}
