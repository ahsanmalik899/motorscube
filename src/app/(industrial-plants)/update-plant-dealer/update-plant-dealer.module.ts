import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlantDealerPageRoutingModule } from './update-plant-dealer-routing.module';

import { UpdatePlantDealerPage } from './update-plant-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlantDealerPageRoutingModule
  ],
  
})
export class UpdatePlantDealerPageModule {}
