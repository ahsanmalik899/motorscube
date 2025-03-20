import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeWorkshopFilterPage } from './bike-workshop-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeWorkshopFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeWorkshopFilterPageRoutingModule {}
