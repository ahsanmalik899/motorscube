import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineryImporterFilterPageRoutingModule } from './machinery-importer-filter-routing.module';

import { MachineryImporterFilterPage } from './machinery-importer-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineryImporterFilterPageRoutingModule
  ],
  declarations: [MachineryImporterFilterPage]
})
export class MachineryImporterFilterPageModule {}
