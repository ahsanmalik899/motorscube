import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantInsurancePageRoutingModule } from './post-plant-insurance-routing.module';

import { PostPlantInsurancePage } from './post-plant-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantInsurancePageRoutingModule
  ],
 
})
export class PostPlantInsurancePageModule {}
