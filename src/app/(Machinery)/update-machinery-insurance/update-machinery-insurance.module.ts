import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryInsurancePageRoutingModule } from './update-machinery-insurance-routing.module';

import { UpdateMachineryInsurancePage } from './update-machinery-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryInsurancePageRoutingModule
  ],
  declarations: [UpdateMachineryInsurancePage]
})
export class UpdateMachineryInsurancePageModule {}
