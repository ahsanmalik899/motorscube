import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantWorkshopListingPageRoutingModule } from './plant-workshop-listing-routing.module';

import { PlantWorkshopListingPage } from './plant-workshop-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantWorkshopListingPageRoutingModule
  ],
  declarations: [PlantWorkshopListingPage]
})
export class PlantWorkshopListingPageModule {}
