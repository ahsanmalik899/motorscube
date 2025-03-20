import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingDrvSchoolPageRoutingModule } from './listing-drv-school-routing.module';

import { ListingDrvSchoolPage } from './listing-drv-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingDrvSchoolPageRoutingModule
  ],
  declarations: [ListingDrvSchoolPage]
})
export class ListingDrvSchoolPageModule {}
