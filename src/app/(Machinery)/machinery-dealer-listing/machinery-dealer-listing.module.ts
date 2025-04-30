import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryDealerListingPageRoutingModule } from './machinery-dealer-listing-routing.module';

import { MachineryDealerListingPage } from './machinery-dealer-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryDealerListingPageRoutingModule
  ],
  declarations: [MachineryDealerListingPage]
})
export class MachineryDealerListingPageModule {}
