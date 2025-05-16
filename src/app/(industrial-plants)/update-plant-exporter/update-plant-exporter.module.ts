import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantExporterPageRoutingModule } from './update-plant-exporter-routing.module';

import { UpdatePlantExporterPage } from './update-plant-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantExporterPageRoutingModule
  ],

})
export class UpdatePlantExporterPageModule {}
