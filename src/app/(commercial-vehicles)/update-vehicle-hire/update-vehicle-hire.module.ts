import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleHirePageRoutingModule } from './update-vehicle-hire-routing.module';

import { UpdateVehicleHirePage } from './update-vehicle-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleHirePageRoutingModule
  ],
  declarations: [UpdateVehicleHirePage]
})
export class UpdateVehicleHirePageModule {}
