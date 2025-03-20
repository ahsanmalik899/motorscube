import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingLeasingFilterPageRoutingModule } from './listing-leasing-filter-routing.module';

import { ListingLeasingFilterPage } from './listing-leasing-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingLeasingFilterPageRoutingModule
  ],
  declarations: [ListingLeasingFilterPage]
})
export class ListingLeasingFilterPageModule {}
