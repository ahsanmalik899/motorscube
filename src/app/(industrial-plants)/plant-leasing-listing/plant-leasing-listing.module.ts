import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantLeasingListingPageRoutingModule } from './plant-leasing-listing-routing.module';

import { PlantLeasingListingPage } from './plant-leasing-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantLeasingListingPageRoutingModule
  ],
  declarations: [PlantLeasingListingPage]
})
export class PlantLeasingListingPageModule {}
