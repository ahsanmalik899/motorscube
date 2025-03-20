import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeLeasingFilterPageRoutingModule } from './bike-leasing-filter-routing.module';

import { BikeLeasingFilterPage } from './bike-leasing-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeLeasingFilterPageRoutingModule
  ],
  declarations: [BikeLeasingFilterPage]
})
export class BikeLeasingFilterPageModule {}
