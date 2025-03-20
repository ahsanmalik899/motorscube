import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingInsurancePageRoutingModule } from './listing-insurance-routing.module';

import { ListingInsurancePage } from './listing-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingInsurancePageRoutingModule
  ],
  declarations: [ListingInsurancePage]
})
export class ListingInsurancePageModule {}
