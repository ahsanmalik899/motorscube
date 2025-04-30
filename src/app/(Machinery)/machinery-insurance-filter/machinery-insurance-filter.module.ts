import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryInsuranceFilterPageRoutingModule } from './machinery-insurance-filter-routing.module';

import { MachineryInsuranceFilterPage } from './machinery-insurance-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryInsuranceFilterPageRoutingModule
  ],
  declarations: [MachineryInsuranceFilterPage]
})
export class MachineryInsuranceFilterPageModule {}
