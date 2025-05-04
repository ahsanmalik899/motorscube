import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachinerySalePageRoutingModule } from './update-machinery-sale-routing.module';

import { UpdateMachinerySalePage } from './update-machinery-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachinerySalePageRoutingModule
  ],

})
export class UpdateMachinerySalePageModule {}
