import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercialVehicleBusenessPageRoutingModule } from './commercial-vehicle-buseness-routing.module';

import { CommercialVehicleBusenessPage } from './commercial-vehicle-buseness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercialVehicleBusenessPageRoutingModule
  ],
  declarations: [CommercialVehicleBusenessPage]
})
export class CommercialVehicleBusenessPageModule {}
