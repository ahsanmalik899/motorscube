import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryLeasingPageRoutingModule } from './update-machinery-leasing-routing.module';

import { UpdateMachineryLeasingPage } from './update-machinery-leasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryLeasingPageRoutingModule
  ],
 
})
export class UpdateMachineryLeasingPageModule {}
