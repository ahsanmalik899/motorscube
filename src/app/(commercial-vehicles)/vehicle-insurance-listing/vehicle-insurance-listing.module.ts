import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleInsuranceListingPageRoutingModule } from './vehicle-insurance-listing-routing.module';

import { VehicleInsuranceListingPage } from './vehicle-insurance-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleInsuranceListingPageRoutingModule
  ],
  declarations: [VehicleInsuranceListingPage]
})
export class VehicleInsuranceListingPageModule {}
