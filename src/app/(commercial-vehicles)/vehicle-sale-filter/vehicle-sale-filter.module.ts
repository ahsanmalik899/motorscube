import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleSaleFilterPageRoutingModule } from './vehicle-sale-filter-routing.module';

import { VehicleSaleFilterPage } from './vehicle-sale-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleSaleFilterPageRoutingModule
  ],
 
})
export class VehicleSaleFilterPageModule {}
