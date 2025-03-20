import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeInsurancePageRoutingModule } from './listing-bike-insurance-routing.module';

import { ListingBikeInsurancePage } from './listing-bike-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeInsurancePageRoutingModule
  ],
  declarations: [ListingBikeInsurancePage]
})
export class ListingBikeInsurancePageModule {}
