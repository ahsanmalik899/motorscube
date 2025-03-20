import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeShowroomFilterPage } from './bike-showroom-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeShowroomFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeShowroomFilterPageRoutingModule {}
