import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SaleFiltersPageRoutingModule } from './sale-filters-routing.module';

import { SaleFiltersPage } from './sale-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleFiltersPageRoutingModule
  ],
  declarations: [SaleFiltersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SaleFiltersPageModule {
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
