import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantShowroomPageRoutingModule } from './update-plant-showroom-routing.module';

import { UpdatePlantShowroomPage } from './update-plant-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantShowroomPageRoutingModule
  ],

})
export class UpdatePlantShowroomPageModule {}
