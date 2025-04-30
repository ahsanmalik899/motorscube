import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryExporterSingleViewPageRoutingModule } from './machinery-exporter-single-view-routing.module';

import { MachineryExporterSingleViewPage } from './machinery-exporter-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryExporterSingleViewPageRoutingModule
  ],
  declarations: [MachineryExporterSingleViewPage]
})
export class MachineryExporterSingleViewPageModule {}
