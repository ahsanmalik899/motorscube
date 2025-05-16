import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantLeasingPageRoutingModule } from './update-plant-leasing-routing.module';

import { UpdatePlantLeasingPage } from './update-plant-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantLeasingPageRoutingModule
  ],
  
})
export class UpdatePlantLeasingPageModule {}
