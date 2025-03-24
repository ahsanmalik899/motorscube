import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeDealershipPagePageRoutingModule } from './update-bike-dealership-page-routing.module';

import { UpdateBikeDealershipPagePage } from './update-bike-dealership-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeDealershipPagePageRoutingModule
  ],
  
})
export class UpdateBikeDealershipPagePageModule {}
