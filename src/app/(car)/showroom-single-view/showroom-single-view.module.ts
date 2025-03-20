import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowroomSingleViewPageRoutingModule } from './showroom-single-view-routing.module';

import { ShowroomSingleViewPage } from './showroom-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowroomSingleViewPageRoutingModule
  ],
  declarations: [ShowroomSingleViewPage]
})
export class ShowroomSingleViewPageModule {}
