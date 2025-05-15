import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPlantDealerPageRoutingModule } from './post-plant-dealer-routing.module';

import { PostPlantDealerPage } from './post-plant-dealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPlantDealerPageRoutingModule
  ],
  
})
export class PostPlantDealerPageModule {}
