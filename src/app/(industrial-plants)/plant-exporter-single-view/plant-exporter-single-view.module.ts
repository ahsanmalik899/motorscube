import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantExporterSingleViewPageRoutingModule } from './plant-exporter-single-view-routing.module';

import { PlantExporterSingleViewPage } from './plant-exporter-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantExporterSingleViewPageRoutingModule
  ],
  declarations: [PlantExporterSingleViewPage]
})
export class PlantExporterSingleViewPageModule {}
