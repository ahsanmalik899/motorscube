import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantImporterListingPageRoutingModule } from './plant-importer-listing-routing.module';

import { PlantImporterListingPage } from './plant-importer-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantImporterListingPageRoutingModule
  ],
  declarations: [PlantImporterListingPage]
})
export class PlantImporterListingPageModule {}
