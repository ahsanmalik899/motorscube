import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDrvSchoolFilterPage } from './listing-drv-school-filter.page';

const routes: Routes = [
  {
    path: '',
    component: ListingDrvSchoolFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingDrvSchoolFilterPageRoutingModule {}
