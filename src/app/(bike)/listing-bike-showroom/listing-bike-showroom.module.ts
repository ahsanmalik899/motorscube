import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeShowroomPageRoutingModule } from './listing-bike-showroom-routing.module';

import { ListingBikeShowroomPage } from './listing-bike-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeShowroomPageRoutingModule
  ],
  declarations: [ListingBikeShowroomPage]
})
export class ListingBikeShowroomPageModule {}
