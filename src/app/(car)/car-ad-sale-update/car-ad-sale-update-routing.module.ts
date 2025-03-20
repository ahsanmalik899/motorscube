import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAdSaleUpdatePage } from './car-ad-sale-update.page';

const routes: Routes = [
  {
    path: '',
    component: CarAdSaleUpdatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarAdSaleUpdatePageRoutingModule {}
