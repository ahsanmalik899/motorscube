import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingShowroomPage } from './listing-showroom.page';

const routes: Routes = [
  {
    path: '',
    component: ListingShowroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingShowroomPageRoutingModule {}
