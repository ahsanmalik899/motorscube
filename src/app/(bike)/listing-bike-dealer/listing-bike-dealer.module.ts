import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingBikeDealerPageRoutingModule } from './listing-bike-dealer-routing.module';

import { ListingBikeDealerPage } from './listing-bike-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingBikeDealerPageRoutingModule
  ],
  declarations: [ListingBikeDealerPage]
})
export class ListingBikeDealerPageModule {}
