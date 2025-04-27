import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleExporterSingleviewPageRoutingModule } from './vehicle-exporter-singleview-routing.module';

import { VehicleExporterSingleviewPage } from './vehicle-exporter-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleExporterSingleviewPageRoutingModule
  ],
  declarations: [VehicleExporterSingleviewPage]
})
export class VehicleExporterSingleviewPageModule {}
