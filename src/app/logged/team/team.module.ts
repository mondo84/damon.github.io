import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo de rutas de este modulo.
import { TeamRoutingModule } from './team-routing.module';

// Modulo de material design para los hijos de este modulo.
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';

import { TeamComponent } from './team.component';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialComponentsModule  // Modulo de material design.
  ]
})
export class TeamModule { }
