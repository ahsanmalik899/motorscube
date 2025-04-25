import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehicleImporterPageRoutingModule } from './update-vehicle-importer-routing.module';

import { UpdateVehicleImporterPage } from './update-vehicle-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVehicleImporterPageRoutingModule
  ],
  
})
export class UpdateVehicleImporterPageModule {}
