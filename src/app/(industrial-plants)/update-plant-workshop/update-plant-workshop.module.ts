import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantWorkshopPageRoutingModule } from './update-plant-workshop-routing.module';

import { UpdatePlantWorkshopPage } from './update-plant-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantWorkshopPageRoutingModule
  ],

})
export class UpdatePlantWorkshopPageModule {}
