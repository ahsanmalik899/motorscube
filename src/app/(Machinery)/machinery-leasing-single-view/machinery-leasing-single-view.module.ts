import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryLeasingSingleViewPageRoutingModule } from './machinery-leasing-single-view-routing.module';

import { MachineryLeasingSingleViewPage } from './machinery-leasing-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryLeasingSingleViewPageRoutingModule
  ],
  declarations: [MachineryLeasingSingleViewPage]
})
export class MachineryLeasingSingleViewPageModule {}
