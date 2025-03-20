import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeExporterFilterPageRoutingModule } from './bike-exporter-filter-routing.module';

import { BikeExporterFilterPage } from './bike-exporter-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeExporterFilterPageRoutingModule
  ],
  declarations: [BikeExporterFilterPage]
})
export class BikeExporterFilterPageModule {}
