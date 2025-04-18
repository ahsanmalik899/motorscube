import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleSaleSingleViewPageRoutingModule } from './vehicle-sale-single-view-routing.module';

import { VehicleSaleSingleViewPage } from './vehicle-sale-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleSaleSingleViewPageRoutingModule
  ],
  declarations: [VehicleSaleSingleViewPage]
})
export class VehicleSaleSingleViewPageModule {}
