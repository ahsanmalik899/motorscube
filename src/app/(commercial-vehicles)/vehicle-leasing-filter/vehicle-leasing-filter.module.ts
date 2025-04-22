import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleLeasingFilterPageRoutingModule } from './vehicle-leasing-filter-routing.module';

import { VehicleLeasingFilterPage } from './vehicle-leasing-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleLeasingFilterPageRoutingModule
  ],
  declarations: [VehicleLeasingFilterPage]
})
export class VehicleLeasingFilterPageModule {}
