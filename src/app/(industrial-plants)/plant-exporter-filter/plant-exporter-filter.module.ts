import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantExporterFilterPageRoutingModule } from './plant-exporter-filter-routing.module';

import { PlantExporterFilterPage } from './plant-exporter-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantExporterFilterPageRoutingModule
  ],
  declarations: [PlantExporterFilterPage]
})
export class PlantExporterFilterPageModule {}
