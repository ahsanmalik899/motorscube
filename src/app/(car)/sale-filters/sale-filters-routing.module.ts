import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleFiltersPage } from './sale-filters.page';

const routes: Routes = [
  {
    path: '',
    component: SaleFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleFiltersPageRoutingModule {}
