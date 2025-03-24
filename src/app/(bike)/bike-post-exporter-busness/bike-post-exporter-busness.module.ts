import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostExporterBusnessPageRoutingModule } from './bike-post-exporter-busness-routing.module';

import { BikePostExporterBusnessPage } from './bike-post-exporter-busness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostExporterBusnessPageRoutingModule
  ],
  
})
export class BikePostExporterBusnessPageModule {}
