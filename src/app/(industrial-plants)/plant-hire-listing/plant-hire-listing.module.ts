import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantHireListingPageRoutingModule } from './plant-hire-listing-routing.module';

import { PlantHireListingPage } from './plant-hire-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantHireListingPageRoutingModule
  ],
  declarations: [PlantHireListingPage]
})
export class PlantHireListingPageModule {}
