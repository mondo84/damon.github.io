import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes ppal.
import { HomeComponent } from './home.component';

// Componentes hijos
import { InicioComponent } from './inicio/inicio.component';
import { SoporteComponent } from './soporte/soporte.component';
import { DcComponent } from './dc/dc.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { CamarasComponent } from './camaras/camaras.component';


// Rutas hijas
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'servicios/soporte', component: SoporteComponent },
      { path: 'servicios/dc', component: DcComponent },
      { path: 'servicios/desarrollo', component: DesarrolloComponent },
      { path: 'servicios/cctv', component: CamarasComponent },
      { path: '**', redirectTo: 'no-found', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'no-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
