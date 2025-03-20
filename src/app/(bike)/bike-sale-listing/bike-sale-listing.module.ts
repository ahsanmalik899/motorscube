import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeSaleListingPageRoutingModule } from './bike-sale-listing-routing.module';

import { BikeSaleListingPage } from './bike-sale-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeSaleListingPageRoutingModule
  ],
  declarations: [BikeSaleListingPage]
})
export class BikeSaleListingPageModule {}
