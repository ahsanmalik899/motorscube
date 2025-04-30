import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryShowroomListingPage } from './machinery-showroom-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MachineryShowroomListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryShowroomListingPageRoutingModule {}
