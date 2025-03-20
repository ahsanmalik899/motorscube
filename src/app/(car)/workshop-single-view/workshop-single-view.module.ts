import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkshopSingleViewPageRoutingModule } from './workshop-single-view-routing.module';

import { WorkshopSingleViewPage } from './workshop-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkshopSingleViewPageRoutingModule
  ],
  declarations: [WorkshopSingleViewPage]
})
export class WorkshopSingleViewPageModule {}
