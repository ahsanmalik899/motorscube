import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndustrialPlantHomePageRoutingModule } from './industrial-plant-home-routing.module';

import { IndustrialPlantHomePage } from './industrial-plant-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndustrialPlantHomePageRoutingModule
  ],

})
export class IndustrialPlantHomePageModule {}
