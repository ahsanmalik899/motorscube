import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireFiltersPage } from './hire-filters.page';

const routes: Routes = [
  {
    path: '',
    component: HireFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HireFiltersPageRoutingModule {}
