import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleShowroomPageRoutingModule } from './update-vehicle-showroom-routing.module';

import { UpdateVehicleShowroomPage } from './update-vehicle-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleShowroomPageRoutingModule
  ],

})
export class UpdateVehicleShowroomPageModule {}
