import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleImportersFilterPageRoutingModule } from './vehicle-importers-filter-routing.module';

import { VehicleImportersFilterPage } from './vehicle-importers-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleImportersFilterPageRoutingModule
  ],
  declarations: [VehicleImportersFilterPage]
})
export class VehicleImportersFilterPageModule {}
