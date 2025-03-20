import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeSingleViewPageRoutingModule } from './bike-single-view-routing.module';

import { BikeSingleViewPage } from './bike-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeSingleViewPageRoutingModule
  ],
  declarations: [BikeSingleViewPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BikeSingleViewPageModule {}
