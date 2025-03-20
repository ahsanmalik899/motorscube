import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HireSingleViewPageRoutingModule } from './hire-single-view-routing.module';

import { HireSingleViewPage } from './hire-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HireSingleViewPageRoutingModule,

  ],
  declarations: [HireSingleViewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class HireSingleViewPageModule {}
