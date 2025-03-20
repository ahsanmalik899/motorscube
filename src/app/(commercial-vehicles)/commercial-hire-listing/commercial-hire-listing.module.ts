import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercialHireListingPageRoutingModule } from './commercial-hire-listing-routing.module';

import { CommercialHireListingPage } from './commercial-hire-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercialHireListingPageRoutingModule
  ],
  declarations: [CommercialHireListingPage]
})
export class CommercialHireListingPageModule {}
