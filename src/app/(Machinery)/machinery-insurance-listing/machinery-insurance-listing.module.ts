import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryInsuranceListingPageRoutingModule } from './machinery-insurance-listing-routing.module';

import { MachineryInsuranceListingPage } from './machinery-insurance-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryInsuranceListingPageRoutingModule
  ],
  declarations: [MachineryInsuranceListingPage]
})
export class MachineryInsuranceListingPageModule {}
