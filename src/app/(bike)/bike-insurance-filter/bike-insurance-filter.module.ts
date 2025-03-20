import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeInsuranceFilterPageRoutingModule } from './bike-insurance-filter-routing.module';

import { BikeInsuranceFilterPage } from './bike-insurance-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeInsuranceFilterPageRoutingModule
  ],
  declarations: [BikeInsuranceFilterPage]
})
export class BikeInsuranceFilterPageModule {}
