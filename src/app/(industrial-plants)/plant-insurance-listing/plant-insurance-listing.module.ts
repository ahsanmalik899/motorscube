import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantInsuranceListingPageRoutingModule } from './plant-insurance-listing-routing.module';

import { PlantInsuranceListingPage } from './plant-insurance-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantInsuranceListingPageRoutingModule
  ],
  declarations: [PlantInsuranceListingPage]
})
export class PlantInsuranceListingPageModule {}
