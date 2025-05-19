import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantImporterSingleViewPageRoutingModule } from './plant-importer-single-view-routing.module';

import { PlantImporterSingleViewPage } from './plant-importer-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantImporterSingleViewPageRoutingModule
  ],
  declarations: [PlantImporterSingleViewPage]
})
export class PlantImporterSingleViewPageModule {}
