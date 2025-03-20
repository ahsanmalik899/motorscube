import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingExporterPageRoutingModule } from './listing-exporter-routing.module';

import { ListingExporterPage } from './listing-exporter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingExporterPageRoutingModule
  ],
  declarations: [ListingExporterPage]
})
export class ListingExporterPageModule {}
