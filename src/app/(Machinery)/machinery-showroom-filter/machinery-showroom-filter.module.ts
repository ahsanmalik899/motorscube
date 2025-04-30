import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryShowroomFilterPageRoutingModule } from './machinery-showroom-filter-routing.module';

import { MachineryShowroomFilterPage } from './machinery-showroom-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryShowroomFilterPageRoutingModule
  ],
  declarations: [MachineryShowroomFilterPage]
})
export class MachineryShowroomFilterPageModule {}
