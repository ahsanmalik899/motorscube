import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleExportersListingPageRoutingModule } from './vehicle-exporters-listing-routing.module';

import { VehicleExportersListingPage } from './vehicle-exporters-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleExportersListingPageRoutingModule
  ],
  declarations: [VehicleExportersListingPage]
})
export class VehicleExportersListingPageModule {}
