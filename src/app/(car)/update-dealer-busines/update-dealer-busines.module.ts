
import { UpdateDealerBusinesPageRoutingModule } from './update-dealer-busines-routing.module';

import { UpdateDealerBusinesPage } from './update-dealer-busines.page';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateDealerBusinesPageRoutingModule,
    SharedModule,
    HttpClientModule // Add HttpClientModule to imports array
  ],

})
export class UpdateDealerBusinesPageModule {}

