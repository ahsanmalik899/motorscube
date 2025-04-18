import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleImportersListingPageRoutingModule } from './vehicle-importers-listing-routing.module';

import { VehicleImportersListingPage } from './vehicle-importers-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleImportersListingPageRoutingModule
  ],
  declarations: [VehicleImportersListingPage]
})
export class VehicleImportersListingPageModule {}
