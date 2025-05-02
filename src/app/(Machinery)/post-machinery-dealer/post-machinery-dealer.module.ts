import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryDealerPageRoutingModule } from './post-machinery-dealer-routing.module';

import { PostMachineryDealerPage } from './post-machinery-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryDealerPageRoutingModule
  ],
 
})
export class PostMachineryDealerPageModule {}
