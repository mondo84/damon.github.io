import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { VisionComponent } from './vision.component';

@NgModule({
  declarations: [
    VisionComponent
  ],
  imports: [
    CommonModule,
    VisionRoutingModule
  ]
})
export class VisionModule { }
