import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingDealerPageRoutingModule } from './listing-dealer-routing.module';

import { ListingDealerPage } from './listing-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingDealerPageRoutingModule
  ],
  declarations: [ListingDealerPage]
})
export class ListingDealerPageModule {}
