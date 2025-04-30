import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryShowroomSingleViewPageRoutingModule } from './machinery-showroom-single-view-routing.module';

import { MachineryShowroomSingleViewPage } from './machinery-showroom-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryShowroomSingleViewPageRoutingModule
  ],
  declarations: [MachineryShowroomSingleViewPage]
})
export class MachineryShowroomSingleViewPageModule {}
