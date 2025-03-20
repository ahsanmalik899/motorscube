import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDrvSchoolPage } from './listing-drv-school.page';

const routes: Routes = [
  {
    path: '',
    component: ListingDrvSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingDrvSchoolPageRoutingModule {}
