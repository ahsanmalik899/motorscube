import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryShowroomPageRoutingModule } from './update-machinery-showroom-routing.module';

import { UpdateMachineryShowroomPage } from './update-machinery-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryShowroomPageRoutingModule
  ],

})
export class UpdateMachineryShowroomPageModule {}
