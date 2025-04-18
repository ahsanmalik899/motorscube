import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleLeasingListingPageRoutingModule } from './vehicle-leasing-listing-routing.module';

import { VehicleLeasingListingPage } from './vehicle-leasing-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleLeasingListingPageRoutingModule
  ],
  declarations: [VehicleLeasingListingPage]
})
export class VehicleLeasingListingPageModule {}
