import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// lazy load technique
const routes: Routes = [
  {
    path: '', loadChildren: async () => {
      const moduleHome =  await import('./logged/home/home.module');
      return moduleHome.HomeModule;
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
