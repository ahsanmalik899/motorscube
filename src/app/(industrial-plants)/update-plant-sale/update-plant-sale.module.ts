import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantSalePageRoutingModule } from './update-plant-sale-routing.module';

import { UpdatePlantSalePage } from './update-plant-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantSalePageRoutingModule
  ],
  declarations: [UpdatePlantSalePage]
})
export class UpdatePlantSalePageModule {}
