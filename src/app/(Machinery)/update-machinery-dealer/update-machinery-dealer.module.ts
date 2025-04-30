import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachineryDealerPageRoutingModule } from './update-machinery-dealer-routing.module';

import { UpdateMachineryDealerPage } from './update-machinery-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachineryDealerPageRoutingModule
  ],
  declarations: [UpdateMachineryDealerPage]
})
export class UpdateMachineryDealerPageModule {}
