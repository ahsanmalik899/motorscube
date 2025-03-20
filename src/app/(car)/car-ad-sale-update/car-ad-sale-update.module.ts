import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarAdSaleUpdatePageRoutingModule } from './car-ad-sale-update-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarAdSaleUpdatePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarAdSaleUpdatePageModule {}
