import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes ppal.
import { HomeComponent } from './home.component';

// Componentes hijos
import { InicioComponent } from './inicio/inicio.component';

// Rutas hijas
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: InicioComponent }
    ]
  },
  { path: '**', redirectTo: 'no-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
