import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercialSaleListingPageRoutingModule } from './commercial-sale-listing-routing.module';

import { CommercialSaleListingPage } from './commercial-sale-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercialSaleListingPageRoutingModule
  ],
  declarations: [CommercialSaleListingPage]
})
export class CommercialSaleListingPageModule {}
