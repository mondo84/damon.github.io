import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes del modulo servicio.
import { DcComponent } from './dc/dc.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { SoporteComponent } from './soporte/soporte.component';
import { CamarasComponent } from './camaras/camaras.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dc', component: DcComponent  },
      { path: 'desarrollo', component: DesarrolloComponent  },
      { path: 'soporte', component: SoporteComponent  },
      { path: 'cctv', component: CamarasComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
