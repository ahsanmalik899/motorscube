import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryWorkshopSingleViewPageRoutingModule } from './machinery-workshop-single-view-routing.module';

import { MachineryWorkshopSingleViewPage } from './machinery-workshop-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryWorkshopSingleViewPageRoutingModule
  ],
  declarations: [MachineryWorkshopSingleViewPage]
})
export class MachineryWorkshopSingleViewPageModule {}
