import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantDealerFilterPageRoutingModule } from './plant-dealer-filter-routing.module';

import { PlantDealerFilterPage } from './plant-dealer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantDealerFilterPageRoutingModule
  ],
  declarations: [PlantDealerFilterPage]
})
export class PlantDealerFilterPageModule {}
