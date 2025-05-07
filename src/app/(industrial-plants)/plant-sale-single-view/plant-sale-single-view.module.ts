import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantSaleSingleViewPageRoutingModule } from './plant-sale-single-view-routing.module';

import { PlantSaleSingleViewPage } from './plant-sale-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantSaleSingleViewPageRoutingModule
  ],
  declarations: [PlantSaleSingleViewPage]
})
export class PlantSaleSingleViewPageModule {}
