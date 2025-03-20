import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingDrvSchoolFilterPageRoutingModule } from './listing-drv-school-filter-routing.module';

import { ListingDrvSchoolFilterPage } from './listing-drv-school-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingDrvSchoolFilterPageRoutingModule
  ],
  declarations: [ListingDrvSchoolFilterPage]
})
export class ListingDrvSchoolFilterPageModule {}
