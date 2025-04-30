import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryHireFilterPageRoutingModule } from './machinery-hire-filter-routing.module';

import { MachineryHireFilterPage } from './machinery-hire-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryHireFilterPageRoutingModule
  ],
  declarations: [MachineryHireFilterPage]
})
export class MachineryHireFilterPageModule {}
