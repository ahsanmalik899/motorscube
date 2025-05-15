import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantExporterListingPageRoutingModule } from './plant-exporter-listing-routing.module';

import { PlantExporterListingPage } from './plant-exporter-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantExporterListingPageRoutingModule
  ],
  declarations: [PlantExporterListingPage]
})
export class PlantExporterListingPageModule {}
