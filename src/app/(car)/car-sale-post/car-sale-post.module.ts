import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CarSalePostPageRoutingModule } from './car-sale-post-routing.module';

import { CarSalePostPage } from './car-sale-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarSalePostPageRoutingModule
  ],
  declarations: [CarSalePostPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarSalePostPageModule {}
