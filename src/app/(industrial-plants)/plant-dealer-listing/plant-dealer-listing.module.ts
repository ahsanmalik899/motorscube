import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantDealerListingPageRoutingModule } from './plant-dealer-listing-routing.module';

import { PlantDealerListingPage } from './plant-dealer-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantDealerListingPageRoutingModule
  ],
  declarations: [PlantDealerListingPage]
})
export class PlantDealerListingPageModule {}
