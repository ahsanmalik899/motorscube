import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantSchoolPageRoutingModule } from './update-plant-school-routing.module';

import { UpdatePlantSchoolPage } from './update-plant-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantSchoolPageRoutingModule
  ],
  
})
export class UpdatePlantSchoolPageModule {}
