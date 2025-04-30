import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryInsuranceSingleViewPageRoutingModule } from './machinery-insurance-single-view-routing.module';

import { MachineryInsuranceSingleViewPage } from './machinery-insurance-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryInsuranceSingleViewPageRoutingModule
  ],
  declarations: [MachineryInsuranceSingleViewPage]
})
export class MachineryInsuranceSingleViewPageModule {}
