import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';

// Modulo de material design para los hijos de este modulo.
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';

// Componentes del modulo.
import { DcComponent } from './dc/dc.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { SoporteComponent } from './soporte/soporte.component';
import { CamarasComponent } from './camaras/camaras.component';

@NgModule({
  declarations: [
    DcComponent,
    DesarrolloComponent,
    SoporteComponent,
    CamarasComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MaterialComponentsModule
  ]
})
export class ServiciosModule { }
