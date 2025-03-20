import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeSaleFilterPageRoutingModule } from './bike-sale-filter-routing.module';

import { BikeSaleFilterPage } from './bike-sale-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeSaleFilterPageRoutingModule
  ],
  declarations: [BikeSaleFilterPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BikeSaleFilterPageModule {}
