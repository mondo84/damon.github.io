import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisionComponent } from './vision.component';


const routes: Routes = [
  { path: '', component: VisionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisionRoutingModule { }
