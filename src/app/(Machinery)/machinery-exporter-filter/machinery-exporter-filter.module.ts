import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryExporterFilterPageRoutingModule } from './machinery-exporter-filter-routing.module';

import { MachineryExporterFilterPage } from './machinery-exporter-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryExporterFilterPageRoutingModule
  ],
  declarations: [MachineryExporterFilterPage]
})
export class MachineryExporterFilterPageModule {}
