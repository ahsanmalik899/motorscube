import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeasingSingleViewPageRoutingModule } from './leasing-single-view-routing.module';

import { LeasingSingleViewPage } from './leasing-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeasingSingleViewPageRoutingModule
  ],
  declarations: [LeasingSingleViewPage]
})
export class LeasingSingleViewPageModule {}
