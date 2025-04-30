import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryWorkshopFilterPageRoutingModule } from './machinery-workshop-filter-routing.module';

import { MachineryWorkshopFilterPage } from './machinery-workshop-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryWorkshopFilterPageRoutingModule
  ],
  declarations: [MachineryWorkshopFilterPage]
})
export class MachineryWorkshopFilterPageModule {}
