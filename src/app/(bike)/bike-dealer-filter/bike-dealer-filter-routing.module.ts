import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeDealerFilterPage } from './bike-dealer-filter.page';

const routes: Routes = [
  {
    path: '',
    component: BikeDealerFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeDealerFilterPageRoutingModule {}
