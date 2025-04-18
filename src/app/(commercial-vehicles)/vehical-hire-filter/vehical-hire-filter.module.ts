import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicalHireFilterPageRoutingModule } from './vehical-hire-filter-routing.module';

import { VehicalHireFilterPage } from './vehical-hire-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicalHireFilterPageRoutingModule
  ],
  
})
export class VehicalHireFilterPageModule {}
