import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSaleListingPageRoutingModule } from './plant-sale-listing-routing.module';

import { PlantSaleListingPage } from './plant-sale-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSaleListingPageRoutingModule
  ],
  declarations: [PlantSaleListingPage]
})
export class PlantSaleListingPageModule {}
