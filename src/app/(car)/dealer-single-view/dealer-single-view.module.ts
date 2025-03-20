import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerSingleViewPageRoutingModule } from './dealer-single-view-routing.module';

import { DealerSingleViewPage } from './dealer-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealerSingleViewPageRoutingModule
  ],
  declarations: [DealerSingleViewPage]
})
export class DealerSingleViewPageModule {}
