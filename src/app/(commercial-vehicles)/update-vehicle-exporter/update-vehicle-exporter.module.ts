import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleExporterPageRoutingModule } from './update-vehicle-exporter-routing.module';

import { UpdateVehicleExporterPage } from './update-vehicle-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleExporterPageRoutingModule
  ],
  
})
export class UpdateVehicleExporterPageModule {}
