import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikePostSalePageRoutingModule } from './bike-post-sale-routing.module';

import { BikePostSalePage } from './bike-post-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikePostSalePageRoutingModule
  ],
  
})
export class BikePostSalePageModule {}
