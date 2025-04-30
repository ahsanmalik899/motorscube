import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryLeasingFilterPageRoutingModule } from './machinery-leasing-filter-routing.module';

import { MachineryLeasingFilterPage } from './machinery-leasing-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryLeasingFilterPageRoutingModule
  ],
  declarations: [MachineryLeasingFilterPage]
})
export class MachineryLeasingFilterPageModule {}
