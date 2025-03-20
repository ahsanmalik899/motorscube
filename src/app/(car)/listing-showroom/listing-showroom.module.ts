import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingShowroomPageRoutingModule } from './listing-showroom-routing.module';

import { ListingShowroomPage } from './listing-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingShowroomPageRoutingModule
  ],
  declarations: [ListingShowroomPage]
})
export class ListingShowroomPageModule {}
