import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleInsuranceFilterPageRoutingModule } from './vehicle-insurance-filter-routing.module';

import { VehicleInsuranceFilterPage } from './vehicle-insurance-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleInsuranceFilterPageRoutingModule
  ],
  declarations: [VehicleInsuranceFilterPage]
})
export class VehicleInsuranceFilterPageModule {}
