import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryExporterListingPageRoutingModule } from './machinery-exporter-listing-routing.module';

import { MachineryExporterListingPage } from './machinery-exporter-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryExporterListingPageRoutingModule
  ],
  declarations: [MachineryExporterListingPage]
})
export class MachineryExporterListingPageModule {}
