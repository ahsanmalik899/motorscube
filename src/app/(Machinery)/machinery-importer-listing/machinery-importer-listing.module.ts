import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryImporterListingPageRoutingModule } from './machinery-importer-listing-routing.module';

import { MachineryImporterListingPage } from './machinery-importer-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryImporterListingPageRoutingModule
  ],
  declarations: [MachineryImporterListingPage]
})
export class MachineryImporterListingPageModule {}
