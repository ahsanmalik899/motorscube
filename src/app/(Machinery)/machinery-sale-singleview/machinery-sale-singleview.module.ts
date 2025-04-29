import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerySaleSingleviewPageRoutingModule } from './machinery-sale-singleview-routing.module';

import { MachinerySaleSingleviewPage } from './machinery-sale-singleview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinerySaleSingleviewPageRoutingModule
  ],
  declarations: [MachinerySaleSingleviewPage]
})
export class MachinerySaleSingleviewPageModule {}
