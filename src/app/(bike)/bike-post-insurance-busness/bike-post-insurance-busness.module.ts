import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostInsuranceBusnessPageRoutingModule } from './bike-post-insurance-busness-routing.module';

import { BikePostInsuranceBusnessPage } from './bike-post-insurance-busness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostInsuranceBusnessPageRoutingModule
  ],
 
})
export class BikePostInsuranceBusnessPageModule {}
