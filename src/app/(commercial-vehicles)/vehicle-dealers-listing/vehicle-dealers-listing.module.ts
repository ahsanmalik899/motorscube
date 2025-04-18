import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDealersListingPageRoutingModule } from './vehicle-dealers-listing-routing.module';

import { VehicleDealersListingPage } from './vehicle-dealers-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDealersListingPageRoutingModule
  ],
  declarations: [VehicleDealersListingPage]
})
export class VehicleDealersListingPageModule {}
