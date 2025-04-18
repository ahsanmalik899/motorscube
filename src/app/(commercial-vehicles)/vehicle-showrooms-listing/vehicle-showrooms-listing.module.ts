import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleShowroomsListingPageRoutingModule } from './vehicle-showrooms-listing-routing.module';

import { VehicleShowroomsListingPage } from './vehicle-showrooms-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleShowroomsListingPageRoutingModule
  ],
  declarations: [VehicleShowroomsListingPage]
})
export class VehicleShowroomsListingPageModule {}
