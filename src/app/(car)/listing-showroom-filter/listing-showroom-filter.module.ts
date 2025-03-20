import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingShowroomFilterPageRoutingModule } from './listing-showroom-filter-routing.module';

import { ListingShowroomFilterPage } from './listing-showroom-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingShowroomFilterPageRoutingModule
  ],
  declarations: [ListingShowroomFilterPage]
})
export class ListingShowroomFilterPageModule {}
