import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleImporterSingleviewPageRoutingModule } from './vehicle-importer-singleview-routing.module';

import { VehicleImporterSingleviewPage } from './vehicle-importer-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleImporterSingleviewPageRoutingModule
  ],
  declarations: [VehicleImporterSingleviewPage]
})
export class VehicleImporterSingleviewPageModule {}
