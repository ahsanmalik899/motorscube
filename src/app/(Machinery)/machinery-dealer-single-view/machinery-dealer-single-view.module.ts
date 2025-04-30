import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryDealerSingleViewPageRoutingModule } from './machinery-dealer-single-view-routing.module';

import { MachineryDealerSingleViewPage } from './machinery-dealer-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryDealerSingleViewPageRoutingModule
  ],
  declarations: [MachineryDealerSingleViewPage]
})
export class MachineryDealerSingleViewPageModule {}
