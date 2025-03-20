import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeDealerFilterPageRoutingModule } from './bike-dealer-filter-routing.module';

import { BikeDealerFilterPage } from './bike-dealer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeDealerFilterPageRoutingModule
  ],
  declarations: [BikeDealerFilterPage]
})
export class BikeDealerFilterPageModule {}
