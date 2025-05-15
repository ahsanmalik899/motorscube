import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantShowroomListingPageRoutingModule } from './plant-showroom-listing-routing.module';

import { PlantShowroomListingPage } from './plant-showroom-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantShowroomListingPageRoutingModule
  ],
  declarations: [PlantShowroomListingPage]
})
export class PlantShowroomListingPageModule {}
