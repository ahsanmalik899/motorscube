import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryWorkshopPageRoutingModule } from './update-machinery-workshop-routing.module';

import { UpdateMachineryWorkshopPage } from './update-machinery-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryWorkshopPageRoutingModule
  ],
  declarations: [UpdateMachineryWorkshopPage]
})
export class UpdateMachineryWorkshopPageModule {}
