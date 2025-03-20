import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExporterSingleViewPageRoutingModule } from './exporter-single-view-routing.module';

import { ExporterSingleViewPage } from './exporter-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExporterSingleViewPageRoutingModule
  ],
  declarations: [ExporterSingleViewPage]
})
export class ExporterSingleViewPageModule {}
