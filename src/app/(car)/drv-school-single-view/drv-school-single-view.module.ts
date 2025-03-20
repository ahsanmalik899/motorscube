import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrvSchoolSingleViewPageRoutingModule } from './drv-school-single-view-routing.module';

import { DrvSchoolSingleViewPage } from './drv-school-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrvSchoolSingleViewPageRoutingModule
  ],
  declarations: [DrvSchoolSingleViewPage]
})
export class DrvSchoolSingleViewPageModule {}
