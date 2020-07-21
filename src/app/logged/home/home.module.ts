import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Modulo de material design para los hijos de este modulo.
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialComponentsModule  // Modulo de material design.
  ]
})
export class HomeModule { }
