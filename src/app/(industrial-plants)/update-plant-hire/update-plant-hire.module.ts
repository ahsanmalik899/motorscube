import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantHirePageRoutingModule } from './update-plant-hire-routing.module';

import { UpdatePlantHirePage } from './update-plant-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantHirePageRoutingModule
  ],
  declarations: [UpdatePlantHirePage]
})
export class UpdatePlantHirePageModule {}
