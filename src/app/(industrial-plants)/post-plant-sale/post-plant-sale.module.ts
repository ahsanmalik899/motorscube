import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantSalePageRoutingModule } from './post-plant-sale-routing.module';

import { PostPlantSalePage } from './post-plant-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantSalePageRoutingModule
  ],
 
})
export class PostPlantSalePageModule {}
