import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingImporterFilterPageRoutingModule } from './listing-importer-filter-routing.module';

import { ListingImporterFilterPage } from './listing-importer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingImporterFilterPageRoutingModule
  ],
  declarations: [ListingImporterFilterPage]
})
export class ListingImporterFilterPageModule {}
