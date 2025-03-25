import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeSalePostPageRoutingModule } from './update-bike-sale-post-routing.module';

import { UpdateBikeSalePostPage } from './update-bike-sale-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeSalePostPageRoutingModule
  ],
 
})
export class UpdateBikeSalePostPageModule {}
