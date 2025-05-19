import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantDealerSingleViewPageRoutingModule } from './plant-dealer-single-view-routing.module';

import { PlantDealerSingleViewPage } from './plant-dealer-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantDealerSingleViewPageRoutingModule
  ],
  declarations: [PlantDealerSingleViewPage]
})
export class PlantDealerSingleViewPageModule {}
