import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingBikeShowroomPage } from './listing-bike-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: ListingBikeShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingBikeShowroomPageRoutingModule {}
