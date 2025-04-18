import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleWorkshopListingPageRoutingModule } from './vehicle-workshop-listing-routing.module';

import { VehicleWorkshopListingPage } from './vehicle-workshop-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleWorkshopListingPageRoutingModule
  ],
  declarations: [VehicleWorkshopListingPage]
})
export class VehicleWorkshopListingPageModule {}
