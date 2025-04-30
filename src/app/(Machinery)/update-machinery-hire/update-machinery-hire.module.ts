import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryHirePageRoutingModule } from './update-machinery-hire-routing.module';

import { UpdateMachineryHirePage } from './update-machinery-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryHirePageRoutingModule
  ],
  declarations: [UpdateMachineryHirePage]
})
export class UpdateMachineryHirePageModule {}
