import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingImporterPageRoutingModule } from './listing-importer-routing.module';

import { ListingImporterPage } from './listing-importer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingImporterPageRoutingModule
  ],
  declarations: [ListingImporterPage]
})
export class ListingImporterPageModule {}
