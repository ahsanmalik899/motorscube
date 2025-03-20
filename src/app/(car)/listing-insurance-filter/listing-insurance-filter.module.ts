import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingInsuranceFilterPageRoutingModule } from './listing-insurance-filter-routing.module';

import { ListingInsuranceFilterPage } from './listing-insurance-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingInsuranceFilterPageRoutingModule
  ],
  declarations: [ListingInsuranceFilterPage]
})
export class ListingInsuranceFilterPageModule {}
