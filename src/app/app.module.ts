import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulo de componentes de material design.
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContactComponent } from './logged/modals/modal-contact/modal-contact.component';
import { TeamComponent } from './logged/team/team.component';
import { ModalSoporteComponent } from './logged/modals/modal-soporte/modal-soporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContactComponent,
    TeamComponent,
    ModalSoporteComponent
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
