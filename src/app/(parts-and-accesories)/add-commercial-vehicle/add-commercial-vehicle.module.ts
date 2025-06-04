import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommercialVehiclePageRoutingModule } from './add-commercial-vehicle-routing.module';

import { AddCommercialVehiclePage } from './add-commercial-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCommercialVehiclePageRoutingModule
  ],
  declarations: [AddCommercialVehiclePage]
})
export class AddCommercialVehiclePageModule {}
