import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingExporterFilterPageRoutingModule } from './listing-exporter-filter-routing.module';

import { ListingExporterFilterPage } from './listing-exporter-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingExporterFilterPageRoutingModule
  ],
  declarations: [ListingExporterFilterPage]
})
export class ListingExporterFilterPageModule {}
