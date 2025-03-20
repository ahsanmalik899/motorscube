import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeExporterPageRoutingModule } from './listing-bike-exporter-routing.module';

import { ListingBikeExporterPage } from './listing-bike-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeExporterPageRoutingModule
  ],
  declarations: [ListingBikeExporterPage]
})
export class ListingBikeExporterPageModule {}
