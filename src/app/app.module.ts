import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulo de componentes de material design.
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContactComponent } from './logged/modals/modal-contact/modal-contact.component';
import { ModalSoporteComponent } from './logged/modals/modal-soporte/modal-soporte.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContactComponent,
    ModalSoporteComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   // Modulo de animaciones de angular
    MaterialComponentsModule, // Exportacion del modulo de material design.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
