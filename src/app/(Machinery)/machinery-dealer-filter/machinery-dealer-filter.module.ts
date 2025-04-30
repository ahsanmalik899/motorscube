import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryDealerFilterPageRoutingModule } from './machinery-dealer-filter-routing.module';

import { MachineryDealerFilterPage } from './machinery-dealer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryDealerFilterPageRoutingModule
  ],
  declarations: [MachineryDealerFilterPage]
})
export class MachineryDealerFilterPageModule {}
