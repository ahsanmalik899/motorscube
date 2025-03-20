import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForHirePageRoutingModule } from './for-hire-routing.module';

import { ForHirePage } from './for-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForHirePageRoutingModule
  ],
  declarations: [ForHirePage]
})
export class ForHirePageModule {}
