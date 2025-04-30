import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerySaleFilterPageRoutingModule } from './machinery-sale-filter-routing.module';

import { MachinerySaleFilterPage } from './machinery-sale-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinerySaleFilterPageRoutingModule
  ],

})
export class MachinerySaleFilterPageModule {}
