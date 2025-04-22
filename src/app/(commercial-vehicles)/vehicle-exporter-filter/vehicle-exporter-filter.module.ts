import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleExporterFilterPageRoutingModule } from './vehicle-exporter-filter-routing.module';

import { VehicleExporterFilterPage } from './vehicle-exporter-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleExporterFilterPageRoutingModule
  ],
  declarations: [VehicleExporterFilterPage]
})
export class VehicleExporterFilterPageModule {}
