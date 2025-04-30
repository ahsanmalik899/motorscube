import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryBusenessPageRoutingModule } from './machinery-buseness-routing.module';

import { MachineryBusenessPage } from './machinery-buseness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryBusenessPageRoutingModule
  ],
  declarations: [MachineryBusenessPage]
})
export class MachineryBusenessPageModule {}
