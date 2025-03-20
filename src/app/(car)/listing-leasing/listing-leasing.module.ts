import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingLeasingPageRoutingModule } from './listing-leasing-routing.module';

import { ListingLeasingPage } from './listing-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingLeasingPageRoutingModule
  ],
  declarations: [ListingLeasingPage]
})
export class ListingLeasingPageModule {}
