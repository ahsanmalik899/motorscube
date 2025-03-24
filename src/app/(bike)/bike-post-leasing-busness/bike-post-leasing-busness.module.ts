import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostLeasingBusnessPageRoutingModule } from './bike-post-leasing-busness-routing.module';

import { BikePostLeasingBusnessPage } from './bike-post-leasing-busness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostLeasingBusnessPageRoutingModule
  ],
  
})
export class BikePostLeasingBusnessPageModule {}
