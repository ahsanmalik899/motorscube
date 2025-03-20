import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SaleSingleViewPageRoutingModule } from './sale-single-view-routing.module';

import { SaleSingleViewPage } from './sale-single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleSingleViewPageRoutingModule
  ],
  declarations: [SaleSingleViewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SaleSingleViewPageModule {

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds delay
      disableOnInteraction: false
    },
    pagination: { clickable: true },
    navigation: true
  };
  
}
