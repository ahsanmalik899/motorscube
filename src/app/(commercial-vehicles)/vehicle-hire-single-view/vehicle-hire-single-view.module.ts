import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleHireSingleViewPageRoutingModule } from './vehicle-hire-single-view-routing.module';

import { VehicleHireSingleViewPage } from './vehicle-hire-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleHireSingleViewPageRoutingModule
  ],
  declarations: [VehicleHireSingleViewPage]
})
export class VehicleHireSingleViewPageModule {}
