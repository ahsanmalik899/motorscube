import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeWorkshopPageRoutingModule } from './listing-bike-workshop-routing.module';

import { ListingBikeWorkshopPage } from './listing-bike-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeWorkshopPageRoutingModule
  ],
  declarations: [ListingBikeWorkshopPage]
})
export class ListingBikeWorkshopPageModule {}
