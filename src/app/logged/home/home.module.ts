import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Modulo de material design para los hijos de este modulo.
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';

// Componente hijo de home
import { SoporteComponent } from './soporte/soporte.component';
import { DcComponent } from './dc/dc.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { CamarasComponent } from './camaras/camaras.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    SoporteComponent,
    DcComponent,
    DesarrolloComponent,
    CamarasComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialComponentsModule  // Modulo de material design.
  ]
})
export class HomeModule { }
