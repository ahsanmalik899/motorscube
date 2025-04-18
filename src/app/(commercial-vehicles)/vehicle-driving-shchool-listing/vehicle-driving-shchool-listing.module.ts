import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDrivingShchoolListingPageRoutingModule } from './vehicle-driving-shchool-listing-routing.module';

import { VehicleDrivingShchoolListingPage } from './vehicle-driving-shchool-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDrivingShchoolListingPageRoutingModule
  ],
  declarations: [VehicleDrivingShchoolListingPage]
})
export class VehicleDrivingShchoolListingPageModule {}
