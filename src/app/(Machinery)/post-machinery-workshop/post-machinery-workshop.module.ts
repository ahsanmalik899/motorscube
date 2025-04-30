import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMachineryWorkshopPageRoutingModule } from './post-machinery-workshop-routing.module';

import { PostMachineryWorkshopPage } from './post-machinery-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMachineryWorkshopPageRoutingModule
  ],
  declarations: [PostMachineryWorkshopPage]
})
export class PostMachineryWorkshopPageModule {}
