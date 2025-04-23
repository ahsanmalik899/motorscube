import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleSalePageRoutingModule } from './update-vehicle-sale-routing.module';

import { UpdateVehicleSalePage } from './update-vehicle-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleSalePageRoutingModule
  ],
  declarations: [UpdateVehicleSalePage]
})
export class UpdateVehicleSalePageModule {}
