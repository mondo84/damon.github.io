import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes del modulo
import { TeamComponent } from './team.component';

const routes: Routes = [
  { path: '', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
