import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantImporterFilterPageRoutingModule } from './plant-importer-filter-routing.module';

import { PlantImporterFilterPage } from './plant-importer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantImporterFilterPageRoutingModule
  ],
  declarations: [PlantImporterFilterPage]
})
export class PlantImporterFilterPageModule {}
