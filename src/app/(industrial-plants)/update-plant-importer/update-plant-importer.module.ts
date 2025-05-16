import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantImporterPageRoutingModule } from './update-plant-importer-routing.module';

import { UpdatePlantImporterPage } from './update-plant-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantImporterPageRoutingModule
  ],
  
})
export class UpdatePlantImporterPageModule {}
