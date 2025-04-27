import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleShowroomSingleviewPageRoutingModule } from './vehicle-showroom-singleview-routing.module';

import { VehicleShowroomSingleviewPage } from './vehicle-showroom-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleShowroomSingleviewPageRoutingModule
  ],
  declarations: [VehicleShowroomSingleviewPage]
})
export class VehicleShowroomSingleviewPageModule {}
