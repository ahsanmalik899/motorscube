import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryHireSingleViewPageRoutingModule } from './machinery-hire-single-view-routing.module';

import { MachineryHireSingleViewPage } from './machinery-hire-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryHireSingleViewPageRoutingModule
  ],
  declarations: [MachineryHireSingleViewPage]
})
export class MachineryHireSingleViewPageModule {}
