import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForSalePageRoutingModule } from './for-sale-routing.module';

import { ForSalePage } from './for-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForSalePageRoutingModule
  ],
  declarations: [ForSalePage]
})
export class ForSalePageModule {}
