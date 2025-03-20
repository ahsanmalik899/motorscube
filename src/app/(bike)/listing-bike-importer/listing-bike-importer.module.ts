import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeImporterPageRoutingModule } from './listing-bike-importer-routing.module';

import { ListingBikeImporterPage } from './listing-bike-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeImporterPageRoutingModule
  ],
  declarations: [ListingBikeImporterPage]
})
export class ListingBikeImporterPageModule {}
