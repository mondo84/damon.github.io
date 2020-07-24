import { ServiciosModule } from './logged/servicios/servicios.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// lazy load technique
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: async () => {
      const moduleHome =  await import('./logged/home/home.module');
      return moduleHome.HomeModule;
    }
  },
  {
    path: 'servicios', loadChildren: async () => {
      const moduleServicio =  await import('./logged/servicios/servicios.module');
      return moduleServicio.ServiciosModule;
    }
  },
  {
    path: 'contactanos', loadChildren: async () => {
      const moduleContact = await import('./logged/team/team.module');
      return moduleContact.TeamModule;
    }
  },
  {
    path: 'about', loadChildren: async () => {
      const moduleAbout =  await import('./logged/about/about.module');
      return moduleAbout.AboutModule;
    }
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
