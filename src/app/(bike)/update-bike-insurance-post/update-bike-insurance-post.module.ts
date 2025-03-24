import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBikeInsurancePostPageRoutingModule } from './update-bike-insurance-post-routing.module';

import { UpdateBikeInsurancePostPage } from './update-bike-insurance-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBikeInsurancePostPageRoutingModule
  ],
 
})
export class UpdateBikeInsurancePostPageModule {}
