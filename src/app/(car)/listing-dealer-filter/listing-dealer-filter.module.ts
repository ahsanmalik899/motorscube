import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingDealerFilterPageRoutingModule } from './listing-dealer-filter-routing.module';

import { ListingDealerFilterPage } from './listing-dealer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingDealerFilterPageRoutingModule
  ],
  declarations: [ListingDealerFilterPage]
})
export class ListingDealerFilterPageModule {}
