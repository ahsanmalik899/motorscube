import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HireFiltersPageRoutingModule } from './hire-filters-routing.module';

import { HireFiltersPage } from './hire-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HireFiltersPageRoutingModule
  ],

})
export class HireFiltersPageModule {}
