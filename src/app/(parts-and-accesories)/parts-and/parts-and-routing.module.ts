import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartsAndPage } from './parts-and.page';

const routes: Routes = [
  {
    path: '',
    component: PartsAndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartsAndPageRoutingModule {}
